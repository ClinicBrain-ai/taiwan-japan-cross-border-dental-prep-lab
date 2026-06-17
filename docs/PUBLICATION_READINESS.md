# Publication Readiness

## Release Readiness Summary

This repository is ready for public portfolio review after Gate 7 validation if the local checks pass and the owner confirms the manual walkthrough checklist.

The project is positioned as AI-native professional learning system design for expert-review preparation, using Taiwan-Japan cross-border dental care planning as the first bilingual domain. It is not positioned as a dental advice product.

## What Is Included In v0.1.0

- Local-first static Next.js app
- TypeScript packet generator
- Synthetic-only Taiwan-Japan dental prep domain module
- Three synthetic cases
- Markdown expert-review packet preview and local download
- Consideration Matrix
- Japanese and Traditional Chinese record request letters
- Urgent warning sign routing language
- Safety boundary constants and tests
- Static demo UI
- Validation record
- Publication readiness docs

## What Is Intentionally Excluded

- real patient data
- diagnosis
- treatment recommendation
- image interpretation
- medication advice
- emergency care
- emergency triage
- waiting-safety judgment
- travel-safety judgment
- advice about flying or returning home
- teledentistry
- formal second opinion
- backend
- API routes or API calls
- server actions
- auth
- database
- analytics
- file upload
- payment
- email collection

## Local-First Architecture

The app is static and local-first. It runs as a Next.js App Router project with TypeScript and React. Synthetic cases are bundled in local TypeScript. Markdown packets are generated locally. The demo download uses browser-local Blob and URL.createObjectURL behavior.

There is no backend, no API route tree, no server action, no database, no authentication layer, no analytics integration, and no external LLM call.

## Synthetic-Only Data Posture

All cases are fictional and explicitly labeled synthetic. Synthetic examples avoid real names, real clinic names, addresses, phone numbers, emails, patient IDs, passport numbers, My Number, resident card numbers, insurance numbers, precise birthdays, and identifying dates.

No real patient data belongs in this repository.

## Validation Evidence Summary

Gate 6 validation recorded:

- `npm test` passed with 8 test files and 38 tests
- `npm run build` passed and generated static app routes
- `npm audit` reported 0 vulnerabilities
- `npm run lint` passed
- static scans found no network helpers, API route tree, server-action marker, file input, or dangerous HTML rendering
- red-flag UI rendered the urgent warning notice before packet preview
- generated packets preserved the required boundary statement

See [VALIDATION_RECORD.md](VALIDATION_RECORD.md).

## Safety Boundary Summary

This packet organizes cross-border dental care planning information only. It is not diagnosis, treatment recommendation, image interpretation, medication advice, emergency care, waiting-safety judgment, travel-safety judgment, teledentistry, or formal second opinion. Final diagnosis, treatment decisions, and whether it is safe to wait or travel require dentist or medical professional evaluation.

For urgent warning signs:

This situation should be checked locally first. This project cannot decide whether it is safe to wait, travel, or return home. Please seek local urgent dental or medical evaluation before continuing cross-border planning.

## Public Claims Allowed

It is acceptable to say this project:

- is a local-first AI-native professional learning system prototype
- is synthetic-first
- demonstrates expert-review preparation
- organizes cross-border dental care planning information into Markdown packets
- uses Taiwan-Japan dental care planning as the first bilingual domain
- preserves decision preparation, not decision making
- routes urgent warning signs to local urgent dental or medical evaluation first
- avoids clinical decision support

## Public Claims Not Allowed

Do not claim the project:

- diagnoses dental conditions
- recommends treatment
- interprets X-rays, CBCT, DICOM, or photos
- tells users whether to wait, travel, fly, stay, or return home
- provides emergency triage
- provides teledentistry
- provides a formal second opinion
- validates a dentist's plan or quote
- guarantees cost, insurance, speed, quality, or outcome
- handles real patient data

## Owner Approval Checklist

[ ] README reads as portfolio positioning, not dental advice
[ ] Demo uses synthetic cases only
[ ] Safety statement is exact
[ ] Urgent warning notice is exact
[ ] Release notes match v0.1.0 scope
[ ] Launch drafts do not imply treatment, travel, waiting, flying, or return-home decisions
[ ] Validation commands pass locally
[ ] Manual walkthrough record is reviewed by owner

## Conclusion

The repository is publication-ready for v0.1.0 once the owner approval checklist is complete and Gate 7 validation passes.
