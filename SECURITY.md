# Security

## Scope

This prototype is intentionally static and local-first. It has no backend, no API routes, no auth, no database, no analytics, no cookies, no payment flow, no email collection, and no file upload.

## Data handling

Do not store real patient data in this repository. Do not add fixtures that include real names, dates of birth, addresses, phone numbers, email addresses, record numbers, dental images, clinical documents, insurance details, or travel documents.

## Reporting issues

For this local prototype, security review should focus on accidental architecture expansion, dependency risk, and accidental inclusion of real or identifiable data. Document suspected issues in the repository issue tracker or project notes without including sensitive data.

## Dependency checks

Run `npm audit` after dependency changes. If a vulnerability remains, document package name, severity, command output summary, and why it is or is not reachable in the current static prototype.

## Dependency overrides

The current `postcss` override is intentional. `next@16.2.9` depends on `postcss@8.4.31`, which is affected by a moderate PostCSS advisory. The override pins `postcss` to `8.5.15` so `npm audit` passes while preserving the requested Next.js scaffold.

Do not treat this as a general pattern for pinning dependencies. Future overrides must be narrow, tied to a documented audit or compatibility reason, verified with `npm audit`, and removed when the upstream dependency no longer needs the override.
