# v0.2.0 — BYO-AI Structured Dental Handoff Workflow Plan

## Release Title

v0.2.0 — BYO-AI Structured Dental Handoff Workflow

## Diagnosis of Current Problem

The v0.1.x releases established decision-preparation boundaries: the project is not diagnosis, treatment recommendation, image interpretation, emergency triage, travel-safety judgment, teledentistry, or a formal second-opinion service.

The current share-ready Markdown files successfully protect the project boundary, but they read too much like healthcare safety policy. That can make consumer AI assistants defensive, repetitive, and less useful for the real task: helping a user organize dental visit information into a dentist-ready handoff packet.

The project should keep compact clinical authority boundaries while moving the center of gravity toward structured intake, source separation, evidence organization, missing-record tracking, and handoff packet output.

Required product framing:

> The MD is not a healthcare safety policy. The MD is an intake and output contract.

## From / To Shift

| From | To |
| ---- | -- |
| Safety-heavy worksheet | Structured intake and handoff workflow |
| Repeated prohibition language | Compact boundaries plus practical output rules |
| Defensive assistant behavior | Useful source-aware organization |
| One-off worksheet completion | Dentist-ready and next-AI-agent-ready handoff packet |
| Broad disclaimer framing | Clear intake fields, output schema, and missing-evidence labels |

## Updated Positioning

English:

This is a BYO-AI structured dental handoff workflow for organizing cross-border dental visit information into a dentist-review packet. It is decision preparation, not decision making.

Traditional Chinese:

這是一個 BYO-AI 牙科交接資料整理流程，協助把跨境看牙資訊整理成可給牙醫師審閱的準備包。它是決策準備，不是替使用者做決定。

Japanese:

これは BYO-AI の歯科情報ハンドオフ整理ワークフローです。国をまたぐ歯科受診情報を、歯科医師に見せるための整理パケットにします。目的は意思決定の準備であり、意思決定そのものではありません。

## BYO-AI Account-First Real-World Use Model

Real-world use happens outside this repository. A friend, family member, or end user copies a share-ready Markdown file into their own ChatGPT, Claude, or other AI account and uses it with their own dental information.

The project repository does not collect, store, host, transmit, or process real dental data. The repo provides synthetic examples, Markdown contracts, schemas, and local-first prototype code.

## Repo Synthetic-First Boundary

- Public repo examples remain synthetic-first.
- No real patient names, clinic names, addresses, contact details, IDs, insurance numbers, dental images, or records belong in the repo.
- Docs, tests, examples, manual test transcripts, issues, pull requests, discussions, and release notes must not include real patient data.
- GitHub issues, pull requests, discussions, and release notes must not invite real case submission.

## What the Workflow Enables

- Structured intake from a consumer AI conversation.
- Separation of dentist statements, user interpretation, translation, and uncertainty.
- Symptom timeline organization.
- Record and missing-record tracking.
- Quote, cost, insurance, and treatment-plan line item organization.
- Cost / Quality / Continuity organization.
- Optional evidence-focused analysis that labels possible explanation directions without claiming diagnosis.
- Dentist-ready handoff packet.
- Next-AI-agent-ready handoff packet for continuation in another BYO-AI session.

## What the Workflow Does Not Claim

- It does not diagnose.
- It does not recommend treatment.
- It does not interpret dental images.
- It does not judge dentist correctness.
- It does not rank Taiwan and Japan.
- It does not decide whether a quote is fair, unfair, expensive, cheap, worth it, or not worth it.
- It does not decide whether waiting, travel, flying, or returning home is safe.
- It does not provide hosted backend, upload, or clinical service behavior.
- It does not claim to provide second opinions, teledentistry, emergency triage, or dentist replacement.
- It does not replace dentist or medical professional evaluation.

## Compact Product-Scope Boundary

The workflow organizes information for professional review. Final diagnosis, treatment decisions, emergency evaluation, medication decisions, and waiting or travel safety judgments remain outside the workflow.

Urgent warning signs should route the conversation to local urgent dental or medical evaluation before normal cross-border planning continues.

## Share-Ready MD Implications

The v0.2.0 share-ready files should:

- start intake immediately after no-instruction upload
- ask one useful question at a time
- collect source-labeled information
- preserve original dentist wording
- preserve user interpretation separately
- track missing records explicitly
- organize cost, quality-adjacent, and continuity questions
- output a structured handoff packet
- avoid repetitive disclaimers after the core boundary is established

The files should not become dense lists of safety prohibitions. Safety boundaries should appear as concise routing rules and final review boundaries.

## Gate-Based Migration Plan

| Gate | Scope |
| ---- | ----- |
| Gate 13 | Planning docs for BYO-AI structured intake and handoff architecture |
| Gate 14 | Intake/output contract and schema stabilization |
| Gate 15 | Rewrite only the Japanese-in-Taiwan share-ready MD |
| Gate 16 | Rewrite only the Taiwanese-in-Japan share-ready MD |
| Gate 17 | Manual test gates and evidence templates |
| Gate 18 | Focused validation, tone, boundary, and privacy corrections |
| Gate 19 | v0.2.0 release readiness docs and final checks |

## Acceptance Criteria for v0.2.0

- Both share-ready directions behave as BYO-AI structured intake and handoff contracts.
- The repo remains synthetic-first and contains no real patient data.
- The workflow separates sources, uncertainty, records, and user interpretation.
- Handoff packets are dentist-ready and next-AI-agent-ready.
- Cost / Quality / Continuity is treated as an organizing lens, not a ranking tool.
- Optional evidence-focused analysis stays evidence-labeled and uncertainty-aware.
- Safety boundaries are compact, visible, and operational.
- No runtime code, UI, backend, API, upload, network, dependency, auth, analytics, database, payment, or email collection behavior is introduced unless explicitly requested by a later gate.
