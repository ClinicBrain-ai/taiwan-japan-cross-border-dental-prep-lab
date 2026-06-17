# v0.1.3 — Cost / Quality / Continuity principle

## What this release adds

- Shared Cost / Quality / Continuity principle for both share-ready directions.
- Japanese-in-Taiwan share-ready MD now explicitly frames cost as important but not sufficient by itself.
- Taiwanese-in-Japan share-ready MD now explicitly frames cost as important but not sufficient by itself.
- Runtime rules strengthened so cost questions are organized together with treatment content, records, materials / systems, follow-up, maintenance, provider continuity, and complication handling.
- Manual test gate for cost-quality-continuity scenarios in both directions.

## Why this matters

Cross-border dental planning can easily drift into price comparison. This release makes the project position clearer: price matters, but the worksheet should help users organize quality-adjacent and continuity-related questions for dentists instead of deciding where treatment should happen.

The project does not judge actual treatment quality. It does not rank Taiwan and Japan. It does not judge whether a quote is fair, unfair, expensive, cheap, worth it, or not worth it. It turns cost, quality, and continuity concerns into dentist-review questions.

## What the principle says

- Cost is an important planning factor.
- Cost should not be the only or main basis for deciding whether to receive treatment or where to receive treatment.
- Users should also organize:
  - dentist explanation and diagnostic basis
  - clarity of treatment plan
  - materials and systems
  - treatment stages
  - consent and post-treatment instructions
  - records and images as records only
  - follow-up and maintenance responsibilities
  - provider continuity
  - complication handling
- Good dental treatment may support long-term stability.
- Poorly planned, unclear, or poorly coordinated treatment may create costs beyond money, such as time, pain, retreatment, and loss of trust.

The principle does not mean the AI can judge whether treatment is good or bad. It also does not mean one country has better treatment. The system stays within information organization for professional review.

## What remains intentionally excluded

- real patient data
- diagnosis
- treatment recommendation
- image interpretation
- medication advice
- emergency care
- waiting-safety judgment
- travel-safety judgment
- advice about flying
- advice about returning to Taiwan or Japan
- country-level superiority claims
- price reasonableness judgments
- AI treatment-quality judgments
- teledentistry
- formal second opinion
- backend
- API calls
- auth
- database
- analytics
- file upload
- payment
- email collection

## Safety boundary

This packet organizes cross-border dental care planning information only. It is not diagnosis, treatment recommendation, image interpretation, medication advice, emergency care, waiting-safety judgment, travel-safety judgment, teledentistry, or formal second opinion. Final diagnosis, treatment decisions, and whether it is safe to wait or travel require dentist or medical professional evaluation.

## Manual evidence

- A manual test gate was added for cost-quality-continuity scenarios.
- The expected behavior is to avoid country-level cheaper / better conclusions.
- The expected behavior is to avoid quote reasonableness judgments.
- The expected behavior is to organize cost concerns with treatment content, records, materials / systems, follow-up, provider continuity, and complication handling.
- Evidence supports workflow boundary review, not clinical correctness.

## Validation

- `npm test` passed.
- `npm run build` passed.
- `npm audit` passed with 0 vulnerabilities.
- `npm run lint` passed.
- network scan passed.
- file input scan passed.
- prohibited-phrase grep scans were reviewed.
- no runtime behavior changed.

## Sharing note

This release is suitable for sharing both directional share-ready Markdown files as stable release artifacts for decision preparation, not decision making. The new principle helps users treat cost as an important planning factor without letting price alone become the decision frame.
