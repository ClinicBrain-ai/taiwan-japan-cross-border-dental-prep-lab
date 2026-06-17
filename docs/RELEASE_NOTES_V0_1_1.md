# v0.1.1 — Japanese-in-Taiwan share-ready UX evidence release

## What this release adds

- Japanese-first share-ready Markdown sheet for Japanese adults in Taiwan preparing dental visit information for expert review.
- No-instruction upload boot rule so ChatGPT, Claude, or another AI assistant starts the Japanese intake flow directly instead of summarizing the file or offering a task menu.
- Patient-friendly Japanese UX tone guidance for calm, warm, practical, one-question-at-a-time interaction.
- Home whitening consultation examples that organize information without recommending treatment, judging price, or deciding suitability.
- Japanese-friendly terminology for home whitening, custom trays, whitening gel, follow-up visits, sensitivity, estimates, and extra gel.
- Manual retest script for ChatGPT and Claude.
- Manual retest evidence documenting ChatGPT transcript results and Claude summary results.

## What this release preserves

- Decision preparation, not decision making.
- Local-first and documentation-first posture for share-ready materials.
- Synthetic/no-real-patient-data posture.
- Expert-review preparation framing.
- Urgent warning sign routing to local dental or medical evaluation.
- No diagnosis, treatment recommendation, image interpretation, medication advice, waiting-safety judgment, travel-safety judgment, teledentistry, or formal second opinion.

## What this release intentionally excludes

- Runtime behavior changes.
- UI changes.
- Backend, API routes, auth, database, analytics, file upload, payment, or email collection.
- Real patient data.
- Clinical decision support.
- Whitening product, clinic, brand, or treatment recommendations.
- Claims about whether Taiwan or Japan is better, cheaper, faster, safer, or more appropriate.
- Advice about whether the user should wait, fly, travel, stay in Taiwan, or return to Japan.

## Safety Boundary

This packet organizes cross-border dental care planning information only. It is not diagnosis, treatment recommendation, image interpretation, medication advice, emergency care, waiting-safety judgment, travel-safety judgment, teledentistry, or formal second opinion. Final diagnosis, treatment decisions, and whether it is safe to wait or travel require dentist or medical professional evaluation.

## Validation

- `npm test` passed: 8 test files, 38 tests.
- `npm run build` passed.
- `npm audit` passed with 0 vulnerabilities.
- `npm run lint` passed.
- Manual ChatGPT retest passed.
- Manual Claude retest passed based on user-provided summary evidence.
- Safety scans found no prohibited Japanese recommendation phrasing in the manual test evidence.
- English safety scan hits appeared only in safety-boundary checklist or negative evidence context.

## Release Note

This release improves the Japanese patient-facing experience of the share-ready worksheet while keeping the project positioned as an AI-native professional learning system prototype. It remains a preparation aid for expert review, not a dental advice app or clinical product.
