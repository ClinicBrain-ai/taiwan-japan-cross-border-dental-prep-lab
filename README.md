# Taiwan-Japan Cross-Border Dental Prep Lab

## 60-second overview

This is a local-first, synthetic-first, AI-native professional learning system prototype. It explores how a human-led, ChatGPT-assisted, Codex-implemented workflow can organize decision-relevant information into an expert-review preparation packet for dentists.

The first domain is Taiwan-Japan cross-border dental visit planning. The project helps learners, researchers, and builders inspect how professional learning systems can structure context, questions, logistics, uncertainties, and safety boundaries before a dentist review.

It demonstrates disciplined AI-assisted product engineering: static App Router pages, TypeScript, testable boundary copy, synthetic-only examples, and documentation that keeps the system framed as decision preparation, not decision making.

The output is an expert-review preparation packet. It is not diagnosis, treatment recommendation, image interpretation, emergency care, waiting-safety judgment, travel-safety judgment, teledentistry, or formal second opinion.

This packet organizes cross-border dental care planning information only. It is not diagnosis, treatment recommendation, image interpretation, medication advice, emergency care, waiting-safety judgment, travel-safety judgment, teledentistry, or formal second opinion. Final diagnosis, treatment decisions, and whether it is safe to wait or travel require dentist or medical professional evaluation.

## Architecture

- Next.js App Router with `src/app`
- TypeScript and React
- ESLint
- Vitest with jsdom
- Static/local-first only
- No backend, API calls, auth, analytics, database, cookies, file upload, real patient data, email collection, payment, or external LLM calls

## Routes

- `/`
- `/framework`
- `/demo`
- `/designer`
- `/safety`
- `/examples`
- `/about`

## First domain module

The first domain module is [Taiwan-Japan Cross-Border Dental Prep](domains/taiwan-japan-cross-border-dental-prep/README.md). It documents the Taiwan-Japan cross-border dental care planning preparation scope for bilingual expert-review packet preparation.

## Local commands

```bash
npm run lint
npm test
npm run build
npm audit
```

## Current gate

Gate 0 and Gate 1 establish the repository, scaffold, static pages, boundary language, synthetic-only posture, documentation baseline, and minimal test coverage.
