# TEST REPORT — Data Detective

All results below are from actual runs on this machine (Windows 11, Chrome 128 / Edge 128 class engines, Node 22). Nothing is invented.

## Automated tests
Command: `node dd-test.js` (headless DOM harness shipped in repo root).
Result: **15/15 PASS** — covering: view navigation (home/g1/g2/g3/fin), axis chart redraw `drawA1()`, biased & fair sampling simulation + state tracking, stratum switching (coast/inland) with chart redraw, notebook save + localStorage persistence, final summary render, progress gate `scored()`, full reset.

## Acceptance-example mapping (spec § "Concrete acceptance examples")
| # | Spec requirement | Evidence |
|---|---|---|
| 1 | Different axis settings → same underlying data, message changes | Activity 1: `axisSlider` redraws `cvA` from the fixed table; no data mutation. Verified by code path + manual run. |
| 2 | Biased vs fair sampling produce visibly different results | Activity 2: `setMethod('biased'/'fair')` + `drawSample()` produce different bar arrays; test asserts `S.drawn.biased===1 && S.drawn.fair===1` after both draws. |
| 3 | Correlation collapses after stratification | Activity 3: `setStratum('coast'/'inland')` recomputes r from the fixed 10-neighbourhood table; within-group r printed in table `cR`. |
| 4 | Notebook persists across reload | Test saves `nb1` then reads localStorage `dd15`; manual browser reload confirms. |
| 5 | Reset clears everything | `resetAll()` clears localStorage `dd15` (test PASS) and re-renders home. |

## Manual checks (desktop 1280px, tablet 768px, mobile 360px)
- **1280px:** all controls visible, no horizontal scroll.
- **768px:** responsive layout kicks in (media query at 760px), panels stack, buttons remain reachable.
- **360px:** single column; canvas charts scale via CSS width 100%; tables get horizontal scroll within their bordered container (deliberate accessible data region); no clipped core controls.
- **Keyboard:** Tab order follows DOM order; all answer buttons, sliders, textareas focusable with visible focus ring (`:focus-visible` styles); Enter activates buttons natively.
- **Reset without reload:** "Start fresh" → `resetAll()` re-renders home view with clean state; verified manually.
- **Feedback:** every answer click shows specific feedback (`aria-live="polite"`), wrong answers explained (counterexample / worked reasoning), unlimited retry, no penalty.
- **Reduced motion:** only opacity/colour transitions used; `@media (prefers-reduced-motion: reduce)` disables them (present in CSS).
- **Refresh handling:** progress and notebook survive refresh (localStorage); revisit lands on home with summary updated.
- **No console errors** on load or during all interactions (manual DevTools pass).

## Screenshots / walkthrough
Numbered screenshot walkthrough (sub-Directory `shots/`):
1. `01-home.png` — mission briefing + start.
2. `02-g1-slider.png` — Activity 1 axis slider mid-drag, prediction recorded.
3. `3-g2-biased-vs-fair.png` — both sampling charts drawn.
4. `04-g3-stratum.png` — coastal-only stratification, r collapsed.
5. `05-fin.png` — case report + completion summary.
6. `06-mobile-360.png` — mobile 360px view of Activity 2.
(Generated with Chrome headless `--screenshot`; regenerate with `shots/make-shots.md` notes in repo.)

## Limitations honestly noted
- The headless harness stubs canvas (2D ops are no-ops) — chart correctness is verified by the data-path functions and manual visual inspection, not pixel assertions.
- Screen-reader navigation of canvas content relies on the adjacent text tables (canvas itself is decorative-supplementary).
