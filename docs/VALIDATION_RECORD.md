# Validation Record

## Project

taiwan-japan-cross-border-dental-prep-lab

## Current Gate

Gate 6 — Test and Safety Gate

## Date

2026-06-17

## Scope

This gate strengthens the test and safety evidence layer before publication readiness. It verifies that the local demo UI, packet generator, synthetic cases, and static source tree preserve the project identity:

- AI-native professional learning system prototype
- decision preparation, not decision making
- Taiwan-Japan cross-border dental care planning as the first domain
- local-first and synthetic-first
- expert-review packet preparation
- not a clinical product

## Non-Goals

This gate does not add product features, backend behavior, API routes, server actions, file upload, free-text patient input, real patient data collection, network calls, external LLM calls, analytics, database/auth/payment/email collection, or clinical decision support.

## Required Boundary Statement

"This packet organizes cross-border dental care planning information only. It is not diagnosis, treatment recommendation, image interpretation, medication advice, emergency care, waiting-safety judgment, travel-safety judgment, teledentistry, or formal second opinion. Final diagnosis, treatment decisions, and whether it is safe to wait or travel require dentist or medical professional evaluation."

## Required Urgent Warning Notice

"This situation should be checked locally first. This project cannot decide whether it is safe to wait, travel, or return home. Please seek local urgent dental or medical evaluation before continuing cross-border planning."

## Validation Commands

```bash
npm test
npm run build
npm audit
npm run lint
git status
grep -R "fetch|axios|XMLHttpRequest|navigator.sendBeacon" src || true
find src/app -maxdepth 3 -type f | grep "api" || true
grep -R "server action|use server" src || true
grep -R "type=\"file\"|type='file'|<input" src || true
grep -R "dangerouslySetInnerHTML" src || true
grep -R "Recommendation Matrix|Best Option Table|Treatment Recommendation|Travel Recommendation" src domains/taiwan-japan-cross-border-dental-prep || true
grep -R "you should return|you should stay|safe to wait|safe to fly|it is okay to delay|this treatment is necessary|this treatment is unnecessary|the dentist is right|the dentist is wrong" src domains/taiwan-japan-cross-border-dental-prep || true
grep -R "你應該回台灣|你應該回日本|可以等|可以飛|建議你做|不需要做" src domains/taiwan-japan-cross-border-dental-prep || true
grep -R "この治療を受けるべき|帰国すべき|待ってよい|飛行機に乗ってよい" src domains/taiwan-japan-cross-border-dental-prep || true
```

## Test Results

Gate 6 test coverage includes:

- every generated packet includes the exact required boundary statement
- every generated packet includes Case ID, urgent warning sign check, and Consideration Matrix
- generated packets avoid Recommendation Matrix wording
- generated packets avoid prohibited recommendation phrases as user-facing advice
- generated packets avoid return, travel, waiting, and flying safety conclusions outside required notices
- urgent red-flag packet includes the exact urgent warning notice
- urgent red-flag packet defers normal planning
- non-urgent packets do not include the urgent warning notice
- image-related records remain record/attachment context only
- synthetic cases are all marked synthetic and exactly match the three Gate 3 cases
- demo UI renders synthetic labels
- demo UI renders no file input, text input, textarea, or editable patient-data surface
- demo preview includes the exact required boundary statement
- red-flag UI renders the urgent warning notice before the packet preview
- Markdown download uses local Blob and URL.createObjectURL behavior
- components do not use dangerouslySetInnerHTML
- static safety scans cover network helpers, API routes, server-action markers, upload controls, and UI framing
- Markdown filename utilities produce safe .md filenames
- packet generation remains deterministic

Latest Gate 6 result: pass. `npm test` reported 8 test files passed and 38 tests passed.

## Build Result

`npm run build` must pass and keep the app routes statically prerendered. The expected route set is `/`, `/about`, `/demo`, `/designer`, `/examples`, `/framework`, and `/safety`.

Latest Gate 6 result: pass. `npm run build` completed successfully and prerendered the expected static app routes.

## Audit Result

`npm audit` must report no vulnerabilities or document any findings explicitly.

Latest Gate 6 result: pass. `npm audit` reported 0 vulnerabilities.

## Lint Result

`npm run lint` must pass with the current ESLint configuration.

Latest Gate 6 result: pass. `npm run lint` completed with no reported ESLint errors.

## Static Scan Results

Static scans should confirm:

- no fetch, axios, XMLHttpRequest, or navigator.sendBeacon source behavior
- no `src/app/api` route tree
- no server-action marker or helper
- no file input or input control in source UI
- no dangerouslySetInnerHTML
- no Recommendation Matrix, Best Option Table, Treatment Recommendation, or Travel Recommendation in generated packet/UI advice
- prohibited phrases appear only in constants, tests, or prohibited-use/non-goal documentation, not as generated packet advice or visible UI advice

Latest Gate 6 result: pass. The requested basic grep scans returned no matches. Supplemental extended-regex review found only acceptable hits in prohibited phrase constants, tests, exact required boundary/urgent notices, and domain non-goal/prohibited-use documentation. No generated packet advice or visible UI advice introduced prohibited recommendations.

## Manual Walkthrough Checklist

[ ] / renders as portfolio demo, not clinical product
[ ] /demo uses synthetic cases only
[ ] /demo has no free-text patient input
[ ] /demo has no file upload
[ ] /demo packet preview includes boundary statement
[ ] red-flag case shows urgent warning notice before packet preview
[ ] red-flag packet defers normal planning
[ ] download creates local Markdown file only
[ ] /safety displays required boundary statement
[ ] /examples labels cases as synthetic
[ ] no page invites real patient data
[ ] no page offers diagnosis
[ ] no page offers treatment recommendation
[ ] no page offers travel/waiting safety judgment
[ ] no page offers teledentistry
[ ] no page offers formal second opinion

## Safety Boundary Checklist

- Boundary statement remains exact in generated packets and visible safety surfaces.
- Urgent warning notice remains exact in red-flag packet and red-flag UI.
- The system organizes information for professional review; it does not decide.
- The consideration matrix asks questions only and does not rank, score, or recommend.
- Red-flag cases stop ordinary cross-border planning and defer planning until local urgent dental or medical evaluation.
- Image-related references are treated as records or attachments only.
- Cost, insurance, timeline, and language remain planning factors only.

## No-Network / No-Upload / No-Real-Patient-Data Evidence

- There are no API routes.
- There are no network helper tokens in source.
- There are no upload controls.
- There are no free-text patient-data input controls.
- Synthetic cases are explicitly marked synthetic.
- The demo selects only repository-defined synthetic cases.
- Download behavior is local Markdown creation through Blob and URL.createObjectURL.

## Red-Flag Behavior Evidence

The urgent red-flag synthetic case:

- includes the exact urgent warning notice
- shows the urgent warning notice before selected-case details and packet preview in the demo UI
- marks planning as deferred until local urgent evaluation
- avoids medication advice, diagnosis, treatment recommendation, and travel/waiting/flying safety conclusions

## Known Local Environment Note

The shell prints this warning before commands:

```text
/Users/oopsfamily/.zprofile:1: no such file or directory: /usr/local/bin/brew
```

This is outside repository behavior. It appears to come from the local shell profile and does not affect the project source, tests, build, audit, or lint results.

## Conclusion

If `npm test`, `npm run build`, `npm audit`, `npm run lint`, static scans, and git status all pass with reviewed acceptable grep context, the project is ready for Gate 7.
