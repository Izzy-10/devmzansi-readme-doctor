# README Doctor

Built for the BeMyApp AI Builders Challenge — **July Challenge: Reimagine Creative Industries with AI**

## Problem Statement

Most developers, especially students and early-career devs, write READMEs that describe *what the code does* but fail to sell *why it matters*. A weak opening line, jargon-heavy language, or flat structure can make a genuinely strong project look forgettable — costing devs visibility with recruiters, collaborators, and the wider community.

## Solution Description

README Doctor is an AI creative partner that takes a rough README or project description and returns a sharper rewrite — stronger opening line, plainer language, tighter structure — shown side by side with the original so the improvement is immediately visible. It also surfaces a short diagnosis (what was weak) and a change log (what was fixed), so the writer learns the pattern, not just gets a one-off fix.

Built as a tool for the [DevMzansi](https://dev-mzansi.vercel.app) community — a free space for young South African developers — giving members a fast way to make their project work read as strong as it actually is.

## AI Approach & Architecture

- Single-page frontend (HTML/CSS/JS), dark/gold aesthetic consistent with the DevMzansi brand
- One structured prompt returns strict JSON: a diagnosis list, the rewritten text, and a change log
- Before/after comparison UI with a live diagnosis chip row and a "what changed" panel
- The prototype currently calls the Claude API for generation; for the submission build this is swapped to a watsonx/Granite endpoint, developed and iterated on using IBM Bob's Ask, Plan, and Code modes

## Selected Challenge Theme

Reimagine Creative Industries with AI — specifically the "personalized creative assistants" and "AI creative partners" solution areas.

## How IBM Bob Was Used

IBM Bob was used as the primary development tool throughout the build:
- **Ask mode** to explore prompt structures for reliable structured JSON output
- **Plan mode** to generate the implementation plan for the before/after comparison UI
- **Code mode** to build out the component structure and wire up the AI call
- **Advanced mode** for debugging response parsing and edge cases (empty input, malformed JSON)

## Team

- Sizwe Sibiya (Izzy-10) — WeThinkCode_ Durban, founder of DevMzansi

## Links

- DevMzansi: https://dev-mzansi.vercel.app
- GitHub: https://github.com/Izzy-10
