# Loop Engineering Playbook v0.2.0

## Purpose

This playbook guides the v0.2.0 migration from safety-heavy worksheets to a BYO-AI structured dental handoff workflow.

## ChatGPT Thinking Model Role

ChatGPT is used as a planning and critique partner:

- clarify product direction
- identify UX drift
- test likely user prompts
- propose safe wording
- review whether outputs are useful or over-disclaimed
- help design manual test scenarios

ChatGPT does not define clinical truth for the project. Its role is product reasoning and workflow design.

## Codex Role

Codex implements repository changes:

- edit Markdown and docs
- keep changes scoped to the requested gate
- preserve repo boundaries
- run validations
- report changed files and risks
- avoid commits unless explicitly requested
- avoid tags or releases unless explicitly requested

## Gate Loop

Use the same loop for each gate:

1. Read the gate prompt.
2. Inspect repository state.
3. Identify allowed files.
4. Make the smallest scoped change that satisfies the gate.
5. Run validation.
6. Review for safety, privacy, and product framing drift.
7. Report results without jumping ahead.

## Gates 13-19

| Gate | Name | Main output |
| ---: | ---- | ----------- |
| 13 | BYO-AI architecture planning docs | Planning docs only |
| 14 | Intake/output contract and schema stabilization | Contract and schema refinements |
| 15 | Japanese-in-Taiwan share-ready rewrite | Japanese-first runtime MD |
| 16 | Taiwanese-in-Japan share-ready rewrite | Traditional Chinese-first runtime MD |
| 17 | Manual tests | Manual test gate and evidence templates |
| 18 | Validation, tone, boundary, privacy review | Focused corrections |
| 19 | Release readiness | v0.2.0 release notes and final checks |

### Gate 13: BYO-AI Architecture Planning Docs

Goal: Define the v0.2.0 product shift and architecture before runtime Markdown rewrites.

Allowed files: planning docs under `docs/`.

Non-goals: Do not modify share-ready files, runtime code, UI, API, backend, upload, network, package files, dependencies, tests, release notes, or tags.

Acceptance criteria: Planning docs define BYO-AI real-world use boundary, repo synthetic-first rule, intake/output contract framing, compact boundaries, source separation, evidence-focused analysis format, Cost / Quality / Continuity, and handoff packet schema.

### Gate 14: Intake/Output Contract and Schema Stabilization

Goal: Make field names, source labels, output templates, evidence format, and packet schema consistent before runtime rewrites.

Allowed files: `docs/INTAKE_OUTPUT_CONTRACT.md`, `docs/HANDOFF_PACKET_SCHEMA.md`, `docs/EVIDENCE_FOCUSED_ANALYSIS_OUTPUT_FORMAT.md`, and `docs/ARCHITECTURE_BYO_AI_STRUCTURED_INTAKE_AND_HANDOFF.md`.

Non-goals: Do not modify share-ready files, runtime code, UI, package files, release notes, or dependencies.

Acceptance criteria: Markdown and YAML-like schemas match conceptually; missing evidence and next-AI-agent handoff are explicit.

### Gate 15: Japanese-in-Taiwan Share-Ready Rewrite

Goal: Rewrite only the Japanese-first runtime MD into a BYO-AI intake and output contract.

Allowed files: `share_ready/JAPANESE_IN_TAIWAN_DENTAL_PREP_SHARE_READY.md` and a related manual test file if the gate asks for one.

Non-goals: Do not modify the Taiwanese-in-Japan file, runtime code, UI, package files, dependencies, or release notes.

Acceptance criteria: No-instruction boot starts intake in Japanese; source separation, missing records, Cost / Quality / Continuity, evidence-focused output, and handoff packet output are usable.

### Gate 16: Taiwanese-in-Japan Share-Ready Rewrite

Goal: Rewrite only the Traditional Chinese-first runtime MD into a BYO-AI intake and output contract.

Allowed files: `share_ready/TAIWANESE_IN_JAPAN_DENTAL_PREP_SHARE_READY.md` and a related manual test file if the gate asks for one.

Non-goals: Do not modify the Japanese-in-Taiwan file, runtime code, UI, package files, dependencies, or release notes.

Acceptance criteria: No-instruction boot starts intake in Traditional Chinese; source separation, missing records, Cost / Quality / Continuity, evidence-focused output, and handoff packet output are usable.

### Gate 17: Manual Tests

Goal: Add manual test gates and evidence templates for both directional runtime MD files.

Allowed files: `docs/manual_tests/`.

Non-goals: Do not rewrite runtime MD files unless a test-only patch gate explicitly allows it. Do not add real patient data.

Acceptance criteria: Tests cover no-instruction upload, structured intake, urgent warning routing, source separation, cost organization, evidence-focused analysis, and handoff packet output.

### Gate 18: Validation, Tone, Boundary, Privacy Review

Goal: Perform focused corrections after manual testing.

Allowed files: files named by the gate prompt.

Non-goals: Do not broaden product scope or introduce runtime/backend behavior.

Acceptance criteria: Tone is useful and not over-disclaimed; privacy minimization is clear; compact boundaries remain; no real data is introduced.

### Gate 19: Release Readiness

Goal: Prepare v0.2.0 release notes and final checks.

Allowed files: release readiness docs, validation record, release notes, and explicitly requested index updates.

Non-goals: Do not tag, push, or create GitHub Releases unless explicitly instructed.

Acceptance criteria: Release notes accurately describe v0.2.0, validation is recorded, final status is clean, and no clinical authority claims are introduced.

## Urgent Warning Routing

Urgent warning handling is workflow routing, not final triage.

Warning signs:

- facial swelling
- fever
- pus
- difficulty swallowing
- difficulty breathing
- trauma
- uncontrolled bleeding
- pain that cannot be controlled

If no urgent warning signs are reported:

- Red flags reported: none so far
- Note: continue structured intake

If urgent warning signs are reported:

- Red flags reported: yes
- Reported signs:
- Suggested workflow route: seek local dental or medical evaluation first; this worksheet can still organize information for that visit.

Do not continue deep treatment, cost, travel, or timing analysis while red flags are unresolved. Do not provide final emergency triage. Do not decide whether it is safe to wait or travel. Do not provide medication dosing instructions.

## Cost / Quality / Continuity Requirements

Preserve the v0.1.3 principle that cross-border dental decisions should not be reduced to price.

Organize:

- Cost
- Quality / evidence
- Continuity
- Follow-up access
- Language / communication
- Insurance
- Timing
- Travel burden
- Still uncertain

Do not rank Taiwan or Japan as universally better or worse. Do not decide whether the user should travel, wait, return home, or proceed. Do not turn cost analysis into final treatment recommendation.

## Validation Commands

Run when available:

```bash
git status --short
git diff --check
python3 scripts/check_markdown_contract.py
```

If a command is missing, report it honestly rather than creating infrastructure outside the gate.

Additional checks may be run when relevant:

```bash
rg -n "real patient|passport|insurance number|My Number|電話|住所|address|phone" docs share_ready
rg -n "diagnosis app|treatment recommendation product|second opinion service|teledentistry" docs share_ready
```

## Review Checklist

- [ ] Scope matches the requested gate.
- [ ] Share-ready files are untouched unless the gate explicitly allows them.
- [ ] Runtime code is untouched unless explicitly requested.
- [ ] No package files or dependencies changed.
- [ ] No real patient data or personal identifiers added.
- [ ] BYO-AI account boundary is clear.
- [ ] Repo synthetic-first boundary is clear.
- [ ] The MD is framed as intake and output contract, not safety policy.
- [ ] Source separation is preserved.
- [ ] Missing evidence is labeled.
- [ ] Image records are records only.
- [ ] Cost / Quality / Continuity is an organizing lens, not a ranking.
- [ ] Urgent warning signs route to local urgent evaluation without making safety judgments.
- [ ] The workflow does not claim diagnosis, treatment recommendation, second opinion, teledentistry, or dentist replacement.

## Repair Prompt Template

Use this when a gate result drifts:

```text
Patch the last gate without expanding scope.

Problem:
[describe the drift]

Allowed files:
[list files]

Required correction:
[specific change]

Do not modify:
- share-ready files unless listed above
- runtime code
- UI
- API/backend/upload/network behavior
- package files
- dependencies
- release tags

Run:
git status --short
git diff --check
python3 scripts/check_markdown_contract.py

Do not commit.
```

## Definition of Done

A v0.2.0 gate is done when:

- requested files exist and satisfy the gate prompt
- no out-of-scope files were changed
- validation commands were run or missing commands were reported
- public repo remains synthetic-first
- real-world BYO-AI use boundary remains clear
- output is useful for dentist-ready and next-AI-agent-ready handoff
- final report includes changed files, validation outputs, unchanged-file confirmation, and follow-up recommendations
