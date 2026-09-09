# Data Detective — Can You Trust This Claim?
Interactive data-literacy learning site (target age 15). Taskmarket task 0x95c8e16df43973aff8db7c08ca4e21da4cf28ae880d675f81c23d4a04db317fe.

## Play it
https://amasen02.github.io/data-detective/

## What it is
A single-file HTML site (no build step, no dependencies, runs offline) where learners act as a "data detective" investigating suspicious claims. Three hands-on activities + a final case report:

1. **Framing** — the same dataset tells a different story depending on axis range; learners toggle framing and answer what changes.
2. **Sampling** — biased vs fair sampling simulators with live canvas charts; learners must draw both to compare.
3. **Correlation ≠ Causation** — ice-cream/drowning neighbourhood data with stratification (coastal/inland) revealing a confounder.
4. **Case Report** — learners write findings in an in-app notebook (localStorage persistence) and see completion summary.

## Quality notes
- Semantic HTML, ARIA roles/labels, keyboard-focusable buttons, aria-live feedback.
- Canvas charts hand-rolled (no libraries). Dark theme, responsive to 760px.
- All text is original. All data is synthetic/fictional (stated in-app).
- Tested: 15/15 headless DOM tests pass (navigation, charts, sampling, stratum switching, notebook persistence, reset). See dd-test.js in repo.
- Single index.html (~30KB) — trivially auditable, no external requests.

## Source
- Repository: https://github.com/amasen02/data-detective
- The live file is the repo's index.html (GitHub Pages, master branch).
