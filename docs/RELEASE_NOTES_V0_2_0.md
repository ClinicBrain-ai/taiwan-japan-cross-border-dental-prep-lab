# Release Notes — v0.2.0

BYO-AI Structured Dental Handoff Workflow

## Release Status

Status: release-ready draft pending maintainer review, manual evidence review, commit, tag, and GitHub release publication.

This document prepares the release notes for v0.2.0. It does not mean the release has been committed, tagged, pushed, or published.

## Summary

v0.2.0 shifts the project from safety-heavy worksheet framing toward a BYO-AI structured intake, source separation, output contract, and handoff workflow.

The public repository remains synthetic-first. Real-world use happens when an end user copies or uploads a share-ready Markdown file into their own ChatGPT, Claude, or other AI account and uses it with their own dental information. The repository does not collect, store, host, transmit, or process real dental data.

The workflow helps organize dental visit information into dentist-ready and next-AI-agent-ready handoff packets. Dentists and medical professionals remain the final clinical judgment layer.

## What Changed

### Planning and Architecture Docs

- Added a v0.2.0 plan defining the BYO-AI structured dental handoff workflow.
- Added the BYO-AI intake and handoff architecture.
- Added real-world-use boundary and privacy minimization guidance.
- Added a v0.2.0 loop engineering playbook for Gates 13-19.

### Contract and Schema Docs

- Added an intake/output contract for share-ready Markdown runtime behavior.
- Added an evidence-focused analysis output format.
- Added a handoff packet schema.
- Stabilized source separation labels:
  - `User-reported symptom`
  - `Dentist original statement`
  - `Clinic document / quote / receipt`
  - `User interpretation`
  - `AI organization`
  - `AI possible explanation direction`
  - `Missing evidence`
  - `Dentist-facing question`
  - `Next-AI-agent question`
- Defined matching Markdown and YAML-like packet structures.

### Share-Ready Runtime Markdown Files

- Rewrote the Japanese-in-Taiwan runtime MD as a Japanese-first BYO-AI workflow.
- Rewrote the Taiwanese-in-Japan runtime MD as a Traditional Chinese-first BYO-AI workflow.
- Preserved no-instruction upload boot behavior so the AI starts intake directly.
- Added compact real-data-use notes.
- Preserved urgent warning workflow routing.
- Preserved practical clinic communication snippets.
- Added quote / insurance / treatment-plan organization.
- Preserved Cost / Quality / Continuity as an organizing lens.
- Added optional evidence-focused analysis output.
- Added final dentist-facing and next-AI-agent handoff packet templates.

### Manual Test Gate

- Added a v0.2.0 manual test gate covering both runtime MDs.
- Included synthetic test scenarios only.
- Included an evidence-log template.
- The manual test gate does not include actual ChatGPT or Claude manual evidence yet.
- Manual test pass results are not claimed in this release-readiness draft.

## Product Boundaries

This release does not claim to provide:

- diagnosis app behavior
- treatment recommendation product behavior
- second-opinion service behavior
- teledentistry
- emergency triage
- travel-safety judgment
- dentist replacement
- clinical validation
- real-world outcome validation

The workflow organizes information for professional review. Final diagnosis, treatment decisions, image interpretation, medication decisions, emergency evaluation, and waiting or travel safety judgments require dentist or medical professional evaluation.

## Privacy and Synthetic-First Boundary

- No real patient data should be committed to this repository.
- No real patient identifiers should appear in docs, tests, examples, issues, pull requests, discussions, or release notes.
- Real-world use belongs in the end user's own ChatGPT, Claude, or other AI account.
- Users should share only the minimum necessary information in their own AI account.
- Users should avoid unnecessary identifiers such as full name, exact birthday, ID number, insurance card number, phone number, address, clinic patient ID, QR code, barcode, or unredacted receipts.

## Manual Validation Status

- Manual test framework: created.
- Manual ChatGPT / Claude evidence: not included in this release-readiness draft.
- Clinical validation: not claimed.

## Validation Commands

Commands expected or run during release-readiness review:

```bash
git status --short
git diff --check
npm test
python3 scripts/check_markdown_contract.py
python3 -m py_compile scripts/check_markdown_contract.py
```

If `scripts/check_markdown_contract.py` is absent, it is not available and should not be treated as passing.

Gate 19 draft validation status:

- `git status --short`: run during Gate 19; showed the expected local v0.2.0 worktree changes plus this release notes draft and README index update.
- `git diff --check`: passed during Gate 19.
- `npm test`: passed during Gate 19 with 8 test files and 38 tests.
- `python3 scripts/check_markdown_contract.py`: unavailable if the script is absent.
- `python3 -m py_compile scripts/check_markdown_contract.py`: unavailable if the script is absent.

## Release Readiness Checklist

- [ ] Maintainer reviews changed files.
- [ ] Maintainer confirms no real patient data is present.
- [ ] Maintainer confirms no prohibited product or clinical claims are present.
- [ ] Validation commands pass.
- [ ] Manual test evidence is reviewed, or release notes honestly state that manual evidence is not included.
- [ ] Commit is created.
- [ ] Tag is created.
- [ ] GitHub release is published, if desired.

## Changed Files Summary

Expected v0.2.0 changed-file categories based on the Gate 13-18 local work:

- v0.2.0 planning and architecture documentation.
- Intake/output contract and handoff packet schema documentation.
- Evidence-focused analysis output documentation.
- Real-world-use boundary and privacy minimization documentation.
- Loop engineering playbook for Gates 13-19.
- Japanese-in-Taiwan share-ready runtime Markdown rewrite.
- Taiwanese-in-Japan share-ready runtime Markdown rewrite.
- v0.2.0 manual test gate and evidence template.
- v0.2.0 release notes draft.

The maintainer should confirm the exact git diff before committing, tagging, or publishing.

## Known Limitations / Remaining Uncertainties

- Manual test evidence is defined by the Gate 17 framework but is not included in this release-readiness draft.
- The markdown contract checker is referenced by the gate workflow, but if `scripts/check_markdown_contract.py` is absent, that check cannot be treated as passing.
- This is a BYO-AI workflow contract, not a clinical service.
- Final clinical judgment remains with dentists and medical professionals.
