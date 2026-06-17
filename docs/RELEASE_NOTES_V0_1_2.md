# v0.1.2 — Bidirectional cost/insurance/implant boundary hardening

## What this release adds

- Bidirectional cost / insurance / implant boundary hardening for both share-ready directions.
- Japanese-in-Taiwan share-ready MD strengthened against cost, insurance, and implant-location drift.
- Taiwanese-in-Japan share-ready MD strengthened against cost, insurance, implant-location, and runtime UX drift.
- Manual test gates and result evidence for ChatGPT / Claude behavior.
- Safer response patterns for cost comparison questions.
- Safer response patterns for price reasonableness questions.
- Safer response patterns for implant-location questions.
- Safer response patterns for root-canal-pain-to-implant questions.
- Question-only continuity prompts for implant system, provider continuity, follow-up, warranty/remake, insurance/self-pay, and complication handling.

## What changed in the safety boundary

The share-ready worksheets now more explicitly prevent the assistant from:

- ranking Taiwan vs Japan by cost
- saying one country is cheaper, better, safer, or more appropriate
- judging a quote as expensive, cheap, fair, unfair, worth it, or not worth it
- deciding where an implant should be placed
- implying root-canal pain means extraction or implant is needed
- guaranteeing insurance, reimbursement, or self-pay outcomes
- turning cost or implant questions into treatment recommendations

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

- Japanese-in-Taiwan manual evidence covers cost, implant, insurance, whitening price, and root-canal-to-implant boundary behavior.
- Taiwanese-in-Japan manual evidence covers cost comparison, implant location, quote reasonableness, insurance/self-pay, root-canal pain, and runtime UX over-reference behavior.
- ChatGPT and Claude evidence are recorded as manual test artifacts.
- Evidence is intended to support boundary review, not to claim clinical correctness.

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

This release is suitable for sharing both directional share-ready Markdown files as stable release artifacts for decision preparation, not decision making.
