// api/refine.js
// Vercel serverless function — handles follow-up tweak requests, keeping the Groq API key server-side.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { currentRewritten, request: tweakRequest, lang } = req.body || {};

  if (!currentRewritten || !tweakRequest) {
    return res.status(400).json({ error: 'Missing "currentRewritten" or "request" in request body' });
  }

  const selectedLang = lang === 'isiZulu' ? 'isiZulu' : 'English';

  const prompt = `You previously rewrote a developer's README/project text in ${selectedLang}. Here is the current rewritten version:
"""
${currentRewritten}
"""

The writer wants this specific tweak: "${tweakRequest}"

Apply that tweak, keeping the response in ${selectedLang}, and return ONLY a JSON object, no markdown fences, no preamble, with exactly these keys:
{
  "rewritten": "the updated full version with the tweak applied",
  "changes": ["short bullet describing what was adjusted for this tweak", "1-2 more if relevant"]
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
    console.error('Refine handler error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
