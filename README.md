# Taiwan-Japan Cross-Border Dental Prep Lab

## 30-Second Signal

Taiwan-Japan Cross-Border Dental Prep Lab is a local-first, synthetic-first AI-native professional learning system prototype for expert-review preparation.

It uses Taiwan-Japan cross-border dental care planning as the first bilingual domain. The project helps Taiwanese people in Japan and Japanese people in Taiwan organize decision-relevant planning information into Markdown packets for dentist review.

Core principle: decision preparation, not decision making.

This is not a clinical product.

## What The Project Is

The project demonstrates AI-native professional learning system design for expert-review preparation. It organizes synthetic case context, local dentist statements, user interpretation, quote or treatment-plan items, missing records, cost and insurance questions, language concerns, broad timeline constraints, and dentist-review questions.

The output is an expert-review preparation packet. The packet is designed to make information easier to review with qualified professionals, not to decide care.

## Who It Helps

This prototype is designed for:

- Taiwanese people in Japan considering whether to organize information for possible Taiwan dentist review
- Japanese people in Taiwan considering whether to organize information for possible Japan dentist review
- learners and builders studying high-trust AI-native learning systems
- portfolio reviewers evaluating safety boundaries, local-first implementation, and testable product framing

## First Domain Module

The first domain module is [Taiwan-Japan Cross-Border Dental Prep](domains/taiwan-japan-cross-border-dental-prep/README.md).

It documents the bilingual domain scope, intended use, prohibited use, runtime contract, language policy, privacy posture, and decision-prep framework for Taiwan-Japan cross-border dental care planning preparation.

## What It Demonstrates

- Local-first static Next.js App Router implementation
- TypeScript packet generator logic
- Synthetic-only case data
- Markdown expert-review packet generation
- Consideration Matrix as questions only
- Japanese and Traditional Chinese record request letters
- Urgent warning sign routing to local urgent dental or medical evaluation
- Safety-boundary tests and static scans
- Human-led, ChatGPT-assisted, Codex-implemented loop engineering

## What It Intentionally Does Not Do

This repository should not be presented as:

- dental diagnosis app
- second opinion product
- travel decision tool
- treatment recommender
- clinical decision support
- emergency triage tool
- teledentistry product

It does not provide diagnosis, treatment recommendation, image interpretation, medication advice, emergency care, waiting-safety judgment, travel-safety judgment, advice about flying or returning home, teledentistry, formal second opinion, insurance or cost guarantees, or dentist right/wrong judgment.

## How To Run Locally

```bash
npm install
npm run dev
```

Then open:

- `/`
- `/framework`
- `/demo`
- `/designer`
- `/safety`
- `/examples`
- `/about`

## How To Test

```bash
npm test
npm run build
npm audit
npm run lint
```

## Validation Evidence

Gate 6 validation recorded:

- `npm test` passed with 8 test files and 38 tests
- `npm run build` passed and prerendered the expected static routes
- `npm audit` reported 0 vulnerabilities
- `npm run lint` passed
- static scans found no API routes, network helpers, file upload controls, server-action markers, or dangerous HTML rendering

See [docs/VALIDATION_RECORD.md](docs/VALIDATION_RECORD.md) and [docs/PUBLICATION_READINESS.md](docs/PUBLICATION_READINESS.md).

## Synthetic Data Statement

All examples are synthetic. The repository must not contain real patient data, real clinic names, real addresses, real phone numbers, real emails, real patient identifiers, passport numbers, My Number, resident card numbers, insurance numbers, precise birthdays, or identifying dates.

Synthetic cases are used to test learning-system design, packet structure, safety boundaries, and bilingual preparation workflows.

## Local-First Architecture Statement

The project is static/local-first:

- no backend
- no API routes
- no server actions
- no external LLM calls
- no auth
- no analytics
- no database
- no cookies
- no file upload
- no payment
- no email collection
- no real patient data collection

The demo selects repository-defined synthetic cases only and generates Markdown locally.

## Safety Boundary Statement

This packet organizes cross-border dental care planning information only. It is not diagnosis, treatment recommendation, image interpretation, medication advice, emergency care, waiting-safety judgment, travel-safety judgment, teledentistry, or formal second opinion. Final diagnosis, treatment decisions, and whether it is safe to wait or travel require dentist or medical professional evaluation.

## Portfolio Positioning

This is portfolio infrastructure for AI-native professional learning system design in high-trust domains. The first domain is intentionally narrow: Taiwan-Japan cross-border dental care planning preparation. The reusable pattern is broader: AI can help organize information, preserve uncertainty, separate original statements from user interpretation, and prepare questions for expert review without making the expert decision.

## Key Docs

- [Publication readiness](docs/PUBLICATION_READINESS.md)
- [Manual walkthrough record](docs/MANUAL_WALKTHROUGH_RECORD.md)
- [Safety boundary review](docs/SAFETY_BOUNDARY_REVIEW.md)
- [Portfolio summary](docs/PORTFOLIO_SUMMARY.md)
- [Validation record](docs/VALIDATION_RECORD.md)
- [Release notes v0.1.0](docs/RELEASE_NOTES_V0_1_0.md)
- [Release notes v0.1.1](docs/RELEASE_NOTES_V0_1_1.md)
- [Release notes v0.1.2](docs/RELEASE_NOTES_V0_1_2.md)
- [Release notes v0.1.3](docs/RELEASE_NOTES_V0_1_3.md)
- [Release notes v0.2.0](docs/RELEASE_NOTES_V0_2_0.md)
- [Four-runtime BYO-AI dental handoff manual test gate](docs/manual_tests/FOUR_RUNTIME_BYO_AI_DENTAL_HANDOFF_MANUAL_TEST_GATE.md)
- [X launch thread draft](docs/X_LAUNCH_THREAD_DRAFT.md)
- [LinkedIn featured blurb](docs/LINKEDIN_FEATURED_BLURB.md)
- [Domain module](domains/taiwan-japan-cross-border-dental-prep/README.md)

## Share-Ready Files

- [Japanese-in-Taiwan dental prep share-ready sheet](share_ready/JAPANESE_IN_TAIWAN_DENTAL_PREP_SHARE_READY.md)
- [Taiwanese-in-Japan dental prep share-ready sheet](share_ready/TAIWANESE_IN_JAPAN_DENTAL_PREP_SHARE_READY.md)
- [Overseas Taiwanese dental packet builder share-ready sheet](share_ready/OVERSEAS_TAIWANESE_DENTAL_PACKET_BUILDER_SHARE_READY.md)
- [US dental visit prep share-ready sheet](share_ready/US_DENTAL_VISIT_PREP_SHARE_READY.md)

## Demo Routes

- Home: `/`
- Framework: `/framework`
- Demo: `/demo`
- Designer: `/designer`
- Safety: `/safety`
- Examples: `/examples`
- About: `/about`
