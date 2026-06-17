# Agent Instructions

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. APIs, conventions, and file structure may differ from training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project boundary

Preserve the local-first architecture. Do not add backend services, API routes, server actions, external API calls, external LLM calls, auth, database, analytics, cookies, file upload, payment, or email collection.

Preserve synthetic-only examples. Do not add real patient data, identifiable health information, real dental images, uploaded documents, or production patient workflows.

Do not add clinical features. Keep all decision-support language framed as decision preparation and expert-review packet organization.

Never introduce diagnosis, treatment recommendation, image interpretation, medication advice, emergency care, emergency triage, waiting-safety judgment, travel-safety judgment, advice about flying, advice about returning to Taiwan or Japan, teledentistry, formal second-opinion framing, dentist right/wrong judgment, insurance guarantees, or cost guarantees.

## Required checks

Before reporting completion, run:

```bash
npm run lint
npm test
npm run build
```

Also run `npm audit` when dependency changes are made, and document any remaining issue clearly.

Do not add or expand `package.json` dependency overrides as routine pinning. An override must have a narrow audit or compatibility reason, be documented in `SECURITY.md`, and be rechecked with `npm audit`, `npm test`, and `npm run build`.
