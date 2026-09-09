# EDUCATOR GUIDE — Data Detective

## Objectives
After the session a learner can:
1. Explain how axis-range framing changes the *message* of a chart without changing its numbers.
2. Describe sampling bias and predict the direction of error in a biased sample.
3. Distinguish correlation from causation and demonstrate stratification as a tool to expose a confounder.

## Prerequisites
- Can read a simple scatter plot and a bar chart (brief reminders are built in).
- Approximate reading level: age 14+.

## Suggested session length
10–15 minutes solo; 20 with co-play discussion. The site saves progress locally, so a learner can stop and resume.

## Walkthrough (adult co-player)
1. **Home → Case 1 "The Miracle Chart".** Ask the learner to *predict first* (the site requires a prediction before evidence). Move the axis slider; discuss why the "flat" and "dramatic" versions use identical data.
2. **Case 2 "The Survey".** Learner must draw BOTH the biased and the fair sample. Compare the two bar charts side by side. Key question: "What did the biased method systematically miss?"
3. **Case 3 "Ice Cream Suspenders".** Ten neighbourhoods, r ≈ 0.93. Learner switches stratum to coastal-only, then inland-only, and watches the correlation collapse within groups — summer heat is the confounder driving both.
4. **Case Report.** Learner writes one sentence per case in the notebook; completion summary shows what was practised.

## Differentiation
- *Less confident:* every activity has hint text and unlimited retries with no penalty; feedback explains wrong answers with a counterexample.
- *More confident:* the notebook invites transfer ("find one real chart in a news app this week and ask — who's the axis serving?").

## Feedback model
No scores, ranks, or shaming. Wrong answers get specific explanations (e.g., the reverse-causation option is answered with why the temporal pattern doesn't support it).

## Content sources (what they support)
- "How Charts Lie" — Alberto Cairo, W. W. Norton, 2019 (catalog page: https://wwnorton.com/books/How-Charts-Lie/) — supports Activity 1's framing content (axis range, truncated baselines).
- "Statistics" (Chapter on sampling) — David Freedman, Robert Pisani, Roger Purves, *Statistics*, 4th ed., W. W. Norton — supports Activity 2's biased-sample demonstration.
- U.S. NSF "Principal Statistical Standards" — https://www.nsf.gov/policies/statisticalstandards.jsp — general sampling and causation-language conventions used in feedback strings.

## Model limitations
- All datasets are synthetic and small (n = 10 or a few hundred simulated draws) for readability; real-world confounding is rarely this clean.
- The correlation values are computed from the fixed synthetic tables, not estimated live; the stratified values are exact for the fictional data.

## Offline follow-up idea
Print any news chart; have the learner redraw it with a different axis range and write one sentence on who benefits from each framing.

## Safety & privacy
No login, no personal data collected, no outbound links for learners (references live in this adult-facing guide), no ads, no tracking, no generative AI at runtime. Progress stays in the browser's localStorage; "Start fresh" clears it.
