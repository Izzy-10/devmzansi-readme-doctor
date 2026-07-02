// api/rewrite.js
// Vercel serverless function — keeps the Groq API key server-side.
// Set GROQ_API_KEY in your Vercel project's Environment Variables (never in the code).

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { original, lang } = req.body || {};

  if (!original || typeof original !== 'string') {
    return res.status(400).json({ error: 'Missing "original" text in request body' });
  }

  const selectedLang = lang === 'isiZulu' ? 'isiZulu' : 'English';

  const prompt = `You are an editor helping South African developers make their GitHub READMEs and project descriptions sell their work better, in a confident but grounded voice — not corporate, not overhyped.

Write the rewritten version and the diagnosis/changes labels in ${selectedLang}. If ${selectedLang} is isiZulu, write naturally in isiZulu — do not just translate word-for-word, adapt the tone to read naturally for a South African developer audience. Keep technical terms (project names, tech stack names, links) as-is.

Original text:
"""
${original}
"""

Return ONLY a JSON object, no markdown fences, no preamble, with exactly these keys:
{
  "diagnosis": ["short tag describing a weakness found, e.g. 'Weak opening line'", "2-4 more short diagnostic tags"],
  "rewritten": "the full rewritten version, same length ballpark, clearer structure and stronger opening",
  "changes": ["ONE short plain phrase per change, max 6 words, e.g. 'Stronger opening line' or 'Cut the jargon' — no full sentences, no explaining why", "3-5 more short phrases, same style"]
}`;

  try {
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      }),
    });

    if (!groqResponse.ok) {
      const errText = await groqResponse.text();
      console.error('Groq API error:', errText);
      return res.status(502).json({ error: 'Upstream AI request failed' });
    }

    const data = await groqResponse.json();
    const raw = data.choices?.[0]?.message?.content || '';
    const cleaned = raw.replace(/```json|```/g, '').trim();

    let parsed;
    try {
      parsed = JSON.parse(cleaned);
    } catch (parseErr) {
      console.error('Failed to parse model output as JSON:', raw);
      return res.status(502).json({ error: 'Could not parse AI response' });
    }

    return res.status(200).json(parsed);

  } catch (err) {
    console.error('Rewrite handler error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
