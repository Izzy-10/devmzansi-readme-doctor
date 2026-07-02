<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>README Doctor — DevMzansi</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root{
    --bg:#0A0A0D;
    --surface:#151519;
    --surface-2:#1E1E24;
    --border:#2A2A32;
    --gold:#D9A94E;
    --gold-soft:#EBCB8A;
    --ember:#E2703A;
    --text:#F2EFE9;
    --text-muted:#8B8A94;
    --radius:14px;
  }
  *{box-sizing:border-box; margin:0; padding:0;}
  html{scroll-behavior:smooth;}
  body{
    background:var(--bg);
    color:var(--text);
    font-family:'Inter', sans-serif;
    line-height:1.5;
    min-height:100vh;
  }
  ::selection{background:var(--gold); color:#0A0A0D;}

  button:focus-visible, textarea:focus-visible, [tabindex]:focus-visible{
    outline:2px solid var(--gold);
    outline-offset:3px;
  }

  .wrap{max-width:940px; margin:0 auto; padding:0 24px;}

  header{
    padding:28px 0 18px;
    display:flex; align-items:center; justify-content:space-between;
    border-bottom:1px solid var(--border);
    flex-wrap:wrap; gap:10px;
  }
  .brand{
    font-family:'Space Grotesk', sans-serif;
    font-weight:600;
    font-size:17px;
    display:flex; align-items:center; gap:9px;
  }
  .brand .dot{width:7px; height:7px; border-radius:50%; background:var(--gold);}
  .brand .sub{color:var(--text-muted); font-family:'JetBrains Mono', monospace; font-size:11px; font-weight:400; margin-left:4px;}
  .tag{font-family:'JetBrains Mono', monospace; font-size:11px; color:var(--text-muted);}

  .hero{padding:56px 0 36px;}
  .eyebrow{
    font-family:'JetBrains Mono', monospace;
    font-size:12px;
    color:var(--ember);
    letter-spacing:0.06em;
    text-transform:uppercase;
    margin-bottom:16px;
  }
  h1{
    font-family:'Space Grotesk', sans-serif;
    font-weight:700;
    font-size:clamp(30px, 5vw, 46px);
    line-height:1.1;
    letter-spacing:-0.02em;
    margin-bottom:14px;
  }
  h1 .accent{color:var(--gold);}
  .lede{
    color:var(--text-muted);
    font-size:15.5px;
    max-width:540px;
    margin-bottom:32px;
  }

  .input-card{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:var(--radius);
    padding:20px;
  }
  .input-card label{
    display:block;
    font-family:'JetBrains Mono', monospace;
    font-size:11px;
    color:var(--text-muted);
    text-transform:uppercase;
    letter-spacing:0.05em;
    margin-bottom:10px;
  }
  textarea{
    width:100%;
    background:var(--surface-2);
    border:1px solid var(--border);
    border-radius:10px;
    color:var(--text);
    font-family:'Inter', sans-serif;
    font-size:14.5px;
    padding:14px;
    min-height:150px;
    resize:vertical;
  }
  textarea::placeholder{color:#5A5964;}
  textarea:focus{outline:none; border-color:var(--gold);}

  .row{display:flex; align-items:center; justify-content:space-between; margin-top:14px; gap:12px; flex-wrap:wrap;}
  .hint{font-size:12.5px; color:var(--text-muted);}

  button.generate{
    background:var(--gold);
    color:#0A0A0D;
    border:none;
    font-family:'Space Grotesk', sans-serif;
    font-weight:600;
    font-size:14.5px;
    padding:12px 22px;
    border-radius:10px;
    cursor:pointer;
    transition:transform .12s ease, background .15s ease;
    white-space:nowrap;
  }
  button.generate:hover{background:var(--gold-soft);}
  button.generate:active{transform:scale(0.97);}
  button.generate:disabled{opacity:0.5; cursor:not-allowed;}

  .eq{display:none; align-items:flex-end; gap:3px; height:18px;}
  .eq.active{display:flex;}
  .eq span{
    width:3px;
    background:linear-gradient(180deg, var(--gold), var(--ember));
    border-radius:2px;
    animation:bounce 0.9s ease-in-out infinite;
  }
  .eq span:nth-child(1){height:6px; animation-delay:0s;}
  .eq span:nth-child(2){height:14px; animation-delay:0.15s;}
  .eq span:nth-child(3){height:9px; animation-delay:0.3s;}
  .eq span:nth-child(4){height:16px; animation-delay:0.1s;}
  .eq span:nth-child(5){height:7px; animation-delay:0.25s;}
  @keyframes bounce{0%,100%{transform:scaleY(0.4);} 50%{transform:scaleY(1);}}
  @media (prefers-reduced-motion: reduce){ .eq span{animation:none; height:10px;} }

  .error-box{
    display:none;
    margin-top:14px;
    background:#2A1414;
    border:1px solid #5A2626;
    color:#F0B4B4;
    font-size:13px;
    padding:12px 14px;
    border-radius:10px;
  }

  /* Diagnosis chips */
  .diagnosis{
    display:none;
    margin-top:18px;
    flex-wrap:wrap;
    gap:8px;
  }
  .diagnosis.active{display:flex;}
  .chip{
    font-family:'JetBrains Mono', monospace;
    font-size:11.5px;
    color:var(--ember);
    background:rgba(226,112,58,0.1);
    border:1px solid rgba(226,112,58,0.3);
    padding:6px 11px;
    border-radius:20px;
  }

  /* Before / After */
  .compare{margin-top:44px; display:none;}
  .compare-head{
    display:flex; align-items:baseline; justify-content:space-between;
    margin-bottom:18px; flex-wrap:wrap; gap:8px;
  }
  .compare-head h2{
    font-family:'Space Grotesk', sans-serif;
    font-size:19px;
    font-weight:600;
  }
  .compare-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:18px;
  }
  @media (max-width:720px){
    .compare-grid{grid-template-columns:1fr;}
  }
  .panel{
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:var(--radius);
    padding:20px;
  }
  .panel.after{border-color:rgba(217,169,78,0.4);}
  .panel-label{
    font-family:'JetBrains Mono', monospace;
    font-size:11px;
    text-transform:uppercase;
    letter-spacing:0.05em;
    color:var(--text-muted);
    margin-bottom:12px;
    display:flex; align-items:center; gap:8px;
  }
  .panel.after .panel-label{color:var(--gold);}
  .panel-body{
    font-size:14.5px;
    white-space:pre-wrap;
    line-height:1.65;
    color:var(--text);
  }
  .panel.before .panel-body{color:var(--text-muted);}

  .copy-btn{
    margin-top:16px;
    background:var(--surface-2);
    border:1px solid var(--border);
    color:var(--text);
    font-family:'Inter', sans-serif;
    font-size:12.5px;
    padding:8px 14px;
    border-radius:8px;
    cursor:pointer;
  }
  .copy-btn:hover{border-color:var(--gold);}

  .notes{
    margin-top:18px;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:var(--radius);
    padding:18px 20px;
    display:none;
  }
  .notes.active{display:block;}
  .notes h3{
    font-family:'Space Grotesk', sans-serif;
    font-size:13.5px;
    color:var(--gold-soft);
    margin-bottom:10px;
  }
  .notes ul{list-style:none;}
  .notes li{
    font-size:13.5px;
    color:var(--text-muted);
    padding:6px 0;
    padding-left:16px;
    position:relative;
  }
  .notes li::before{
    content:"—";
    position:absolute; left:0; color:var(--ember);
  }

  .followup{
    margin-top:18px;
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:var(--radius);
    padding:18px 20px;
    display:none;
  }
  .followup.active{display:block;}
  .followup label{
    display:block;
    font-family:'JetBrains Mono', monospace;
    font-size:11px;
    color:var(--text-muted);
    text-transform:uppercase;
    letter-spacing:0.05em;
    margin-bottom:10px;
  }
  .followup-row{display:flex; gap:10px; flex-wrap:wrap;}
  .followup-row input{
    flex:1;
    min-width:200px;
    background:var(--surface-2);
    border:1px solid var(--border);
    border-radius:10px;
    color:var(--text);
    font-family:'Inter', sans-serif;
    font-size:14px;
    padding:11px 14px;
  }
  .followup-row input::placeholder{color:#5A5964;}
  .followup-row input:focus{outline:none; border-color:var(--gold);}
  .followup-btn{
    background:var(--surface-2);
    border:1px solid var(--gold);
    color:var(--gold-soft);
    font-family:'Space Grotesk', sans-serif;
    font-weight:600;
    font-size:13.5px;
    padding:10px 18px;
    border-radius:10px;
    cursor:pointer;
    white-space:nowrap;
  }
  .followup-btn:hover{background:rgba(217,169,78,0.1);}
  .followup-btn:disabled{opacity:0.5; cursor:not-allowed;}
  #eq-followup{margin-top:12px;}

  footer{
    margin-top:70px;
    padding:26px 0 40px;
    border-top:1px solid var(--border);
    display:flex; justify-content:space-between; align-items:center;
    color:var(--text-muted);
    font-size:12.5px;
    flex-wrap:wrap;
    gap:10px;
  }
  footer .mono{font-family:'JetBrains Mono', monospace;}

  @media (max-width:520px){
    header{flex-direction:column; align-items:flex-start;}
    .row{flex-direction:column; align-items:stretch;}
    button.generate{width:100%;}
  }
</style>
</head>
<body>

<div class="wrap">
  <header>
    <div class="brand"><span class="dot"></span>DevMzansi <span class="sub">/ readme doctor</span></div>
    <div class="tag">built for the July Challenge</div>
  </header>

  <section class="hero">
    <div class="eyebrow">AI creative partner for SA developers</div>
    <h1>Your README is a<br><span class="accent">first impression.</span> Fix it.</h1>
    <p class="lede">Paste your GitHub README or project blurb. Get a sharper rewrite — stronger opening, plain language, structure that actually holds attention — side by side with the original.</p>

    <div class="input-card">
      <label for="readme-input">Your README / project description</label>
      <textarea id="readme-input" placeholder="Paste your README.md content here, or a rough project description you want sharpened..."></textarea>
      <div class="row">
        <span class="hint">Rough drafts welcome — that's the point.</span>
        <button class="generate" id="generate-btn">
          <span id="btn-label">Diagnose &amp; rewrite</span>
        </button>
      </div>
      <div class="eq" id="eq"><span></span><span></span><span></span><span></span><span></span></div>
    </div>
    <div class="error-box" id="error-box"></div>
  </section>

  <section class="compare" id="compare">
    <div class="compare-head">
      <h2>Before &amp; after</h2>
    </div>
    <div class="diagnosis" id="diagnosis"></div>

    <div class="compare-grid" style="margin-top:20px;">
      <div class="panel before">
        <div class="panel-label">Original</div>
        <div class="panel-body" id="body-before"></div>
      </div>
      <div class="panel after">
        <div class="panel-label">✦ Rewritten</div>
        <div class="panel-body" id="body-after"></div>
        <button class="copy-btn" data-target="body-after">Copy rewritten version</button>
      </div>
    </div>

    <div class="notes" id="notes">
      <h3>What changed</h3>
      <ul id="notes-list"></ul>
    </div>

    <div class="followup" id="followup">
      <label for="followup-input">Want it different? Ask for a tweak</label>
      <div class="followup-row">
        <input type="text" id="followup-input" placeholder="e.g. make the opening punchier, or shorten it">
        <button class="followup-btn" id="followup-btn">Refine</button>
      </div>
      <div class="eq" id="eq-followup"><span></span><span></span><span></span><span></span><span></span></div>
    </div>
  </section>

  <footer>
    <div>DevMzansi README Doctor — built by <span class="mono">Izzy-10</span></div>
    <div class="mono">AI Builders Challenge · Reimagine Creative Industries</div>
  </footer>
</div>

<script>
const btn = document.getElementById('generate-btn');
const btnLabel = document.getElementById('btn-label');
const eq = document.getElementById('eq');
const input = document.getElementById('readme-input');
const compare = document.getElementById('compare');
const errorBox = document.getElementById('error-box');
const diagnosis = document.getElementById('diagnosis');
const notes = document.getElementById('notes');
const followup = document.getElementById('followup');
const followupInput = document.getElementById('followup-input');
const followupBtn = document.getElementById('followup-btn');
const eqFollowup = document.getElementById('eq-followup');

let originalText = '';
let currentRewritten = '';

document.querySelectorAll('.copy-btn').forEach(b => {
  b.addEventListener('click', () => {
    const text = document.getElementById(b.dataset.target).innerText;
    navigator.clipboard.writeText(text).then(() => {
      const original = b.textContent;
      b.textContent = 'Copied';
      setTimeout(() => b.textContent = original, 1400);
    });
  });
});

async function generate(){
  const original = input.value.trim();
  errorBox.style.display = 'none';

  if(!original){
    errorBox.textContent = 'Paste your README or project description first.';
    errorBox.style.display = 'block';
    return;
  }

  btn.disabled = true;
  btnLabel.textContent = 'Diagnosing…';
  eq.classList.add('active');

  const prompt = `You are an editor helping South African developers make their GitHub READMEs and project descriptions sell their work better, in a confident but grounded voice — not corporate, not overhyped.

Original text:
"""
${original}
"""

Return ONLY a JSON object, no markdown fences, no preamble, with exactly these keys:
{
  "diagnosis": ["short tag describing a weakness found, e.g. 'Weak opening line'", "2-4 more short diagnostic tags"],
  "rewritten": "the full rewritten version, same length ballpark, clearer structure and stronger opening",
  "changes": ["short bullet describing one specific change made", "3-5 more short bullets"]
}`;

  try{
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }]
      })
    });

    if(!response.ok){
      throw new Error("Request failed with status " + response.status);
    }

    const data = await response.json();
    const textBlock = data.content.find(b => b.type === "text");
    if(!textBlock){
      throw new Error("No text returned");
    }

    const cleaned = textBlock.text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    originalText = original;
    currentRewritten = parsed.rewritten || '';

    document.getElementById('body-before').textContent = originalText;
    document.getElementById('body-after').textContent = currentRewritten;

    diagnosis.innerHTML = '';
    (parsed.diagnosis || []).forEach(d => {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = d;
      diagnosis.appendChild(chip);
    });
    diagnosis.classList.add('active');

    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';
    (parsed.changes || []).forEach(c => {
      const li = document.createElement('li');
      li.textContent = c;
      notesList.appendChild(li);
    });
    notes.classList.add('active');

    compare.style.display = 'block';
    followup.classList.add('active');
    compare.scrollIntoView({behavior:'smooth', block:'start'});

  }catch(err){
    console.error(err);
    errorBox.textContent = 'Something went wrong during the rewrite. Try again in a moment.';
    errorBox.style.display = 'block';
  }finally{
    btn.disabled = false;
    btnLabel.textContent = 'Diagnose & rewrite';
    eq.classList.remove('active');
  }
}

async function refine(){
  const request = followupInput.value.trim();
  if(!request || !currentRewritten) return;

  followupBtn.disabled = true;
  eqFollowup.classList.add('active');

  const prompt = `You previously rewrote a developer's README/project text. Here is the current rewritten version:
"""
${currentRewritten}
"""

The writer wants this specific tweak: "${request}"

Apply that tweak and return ONLY a JSON object, no markdown fences, no preamble, with exactly these keys:
{
  "rewritten": "the updated full version with the tweak applied",
  "changes": ["short bullet describing what was adjusted for this tweak", "1-2 more if relevant"]
}`;

  try{
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }]
      })
    });

    if(!response.ok){
      throw new Error("Request failed with status " + response.status);
    }

    const data = await response.json();
    const textBlock = data.content.find(b => b.type === "text");
    if(!textBlock){
      throw new Error("No text returned");
    }

    const cleaned = textBlock.text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    currentRewritten = parsed.rewritten || currentRewritten;
    document.getElementById('body-after').textContent = currentRewritten;

    const notesList = document.getElementById('notes-list');
    (parsed.changes || []).forEach(c => {
      const li = document.createElement('li');
      li.textContent = c;
      notesList.appendChild(li);
    });

    followupInput.value = '';

  }catch(err){
    console.error(err);
    errorBox.textContent = 'Could not apply that tweak. Try rephrasing it.';
    errorBox.style.display = 'block';
  }finally{
    followupBtn.disabled = false;
    eqFollowup.classList.remove('active');
  }
}

btn.addEventListener('click', generate);
input.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' && e.metaKey){ generate(); }
});
followupBtn.addEventListener('click', refine);
followupInput.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){ refine(); }
});
</script>

</body>
</html>
