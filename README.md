# Data Detective — Can You Trust This Claim?

Interactive data-literacy website for learners around age 15. Built for Taskmarket task `0x95c8e16df43973aff8db7c08ca4e21da4cf28ae880d675f81c23d4a04db317fe`.

**Live preview (no login):** https://amasen02.github.io/data-detective/

## What it teaches
A focused 10–15 minute investigation where the learner plays a data detective checking three suspicious claims. Learning outcomes: how chart framing changes a message, how sampling bias corrupts results, and why correlation is not causation (stratification reveals a confounder).

Three activities + final case report:
1. **Framing** — reframe a chart by changing the axis range; see how the same numbers tell different stories.
2. **Sampling** — simulate biased vs fair sampling with live canvas charts; must draw both to compare.
3. **Correlation** — ice-cream sales vs drownings across 10 neighbourhoods; stratify coastal/inland to expose the confounder (summer heat).
4. **Case Report** — notebook entries saved to localStorage, completion summary, next-practice suggestion.

## Run it
- **Online:** open the preview URL above.
- **Offline/local:** open `index.html` in any modern browser, or `python -m http.server` in this directory and visit http://localhost:8000/.
- No build step. No dependencies. No network requests at runtime. Single HTML file (~30 KB).
- Pinned expectations: any Chromium/Firefox/Safari release from 2023 or later (uses canvas, localStorage, ES2017).

## Tests
`node dd-test.js` — headless DOM harness, 15/15 passing (navigation, chart redraw, sampling sim, stratification, notebook persistence, reset). Report actual runs only.

## Architecture note (short)
- All state in one `S` object: `{view, done:{a1..a6,fin}, drawn:{biased,fair}, stratum, nb:{}}`, persisted to `localStorage['dd15']`.
- Learning content (claims, data tables, feedback strings) lives in the `DATA`/`NB` const objects near the top of the inline script, separate from UI wiring below.
- Charts are hand-rolled canvas draws fed directly by the synthetic datasets; no chart library.
- All datasets are synthetic and fictional; stated in-app footer.

## Known limitations
- No audio (visual-only feedback by design).
- Notebook text is stored locally in the browser only; "Start fresh" clears it.
- Charts have text/table equivalents (data tables under each canvas) but the canvas itself is not screen-reader-navigable.

## Licence
MIT (see LICENSE). All text, data and code original; no third-party assets.
