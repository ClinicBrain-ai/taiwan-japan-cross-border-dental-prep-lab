# Handoff Packet Schema

## Purpose

The handoff packet is the main v0.2.0 artifact. It should be readable by a dentist and reusable by a next AI agent in a BYO-AI workflow.

The Markdown packet and YAML-like packet should match conceptually. Missing fields should use placeholders such as `unknown`, `not provided`, `needs dentist confirmation`, or `not available in current records`. Do not fill missing fields with guesses.

## Canonical Major Fields

Both Markdown and YAML-like forms contain these major fields:

- `case_purpose`
- `intended_recipient`
- `language_tone_preference`
- `main_concern`
- `user_reported_symptoms`
- `symptom_timeline`
- `urgent_warning_status`
- `dentist_original_statement`
- `user_interpretation`
- `available_records`
- `missing_records`
- `quote_treatment_plan_line_items`
- `cost_quality_continuity_considerations`
- `possible_explanation_directions`
- `evidence_supporting_each_direction`
- `evidence_missing_for_each_direction`
- `what_cannot_be_concluded_yet`
- `dentist_facing_questions`
- `next_ai_agent_questions`
- `final_dentist_review_boundary`
- `uncertainty_unresolved_items`

## Markdown Schema

```md
# Cross-Border Dental Handoff Packet

## Case Purpose

## Intended Recipient

## Language / Tone Preference

## Main Concern

## User-Reported Symptoms

## Symptom Timeline

## Urgent Warning Status

## Dentist Original Statement

## User Interpretation

## Available Records

## Missing Records

## Quote / Treatment Plan Line Items

| Item | Original term | Country | Source | Insurance covered? | Self-pay? | Amount | Currency | Unit | Included services | Excluded / unclear services | Follow-up implications | Questions to confirm |
| ---- | ------------- | ------- | ------ | ------------------ | --------- | ------ | -------- | ---- | ----------------- | --------------------------- | ---------------------- | -------------------- |
| unknown | not provided | unknown | Clinic document / quote / receipt | unknown | unknown | not provided | unknown | unknown | not provided | not provided | needs dentist confirmation | not provided |

## Cost / Quality / Continuity Considerations

## Possible Explanation Directions

## Evidence Supporting Each Direction

## Evidence Missing For Each Direction

## What Cannot Be Concluded Yet

## Dentist-Facing Questions

## Next-AI-Agent Questions

## Final Dentist-Review Boundary

## Uncertainty / Unresolved Items
```

## YAML-Like Schema

```yaml
case_purpose: "dentist-review preparation"
intended_recipient: "current-country dentist | home-country dentist | next AI agent | user"
language_tone_preference:
  language: "unknown"
  tone: "clear, practical, non-alarmist"
main_concern: "not provided"
user_reported_symptoms:
  - symptom: "not provided"
    source_label: "User-reported symptom"
    uncertainty: "not provided"
symptom_timeline:
  - time: "unknown"
    symptom_or_event: "not provided"
    change_or_trigger: "not provided"
    source_label: "User-reported symptom"
urgent_warning_status:
  red_flags_reported: "unknown"
  reported_signs: []
  suggested_workflow_route: "needs dentist confirmation"
dentist_original_statement:
  source_label: "Dentist original statement"
  original_language: "unknown"
  text: "not provided"
  source_context: "not provided"
user_interpretation:
  source_label: "User interpretation"
  text: "not provided"
  needs_confirmation: "needs dentist confirmation"
available_records:
  - record_type: "not provided"
    format: "unknown"
    country_or_clinic_context: "unknown"
    source_label: "Clinic document / quote / receipt"
missing_records:
  - record_type: "unknown"
    why_it_may_matter: "needs dentist confirmation"
    source_label: "Missing evidence"
quote_treatment_plan_line_items:
  - item: "not provided"
    original_term: "not provided"
    country: "unknown"
    source: "Clinic document / quote / receipt"
    insurance_covered: "unknown"
    self_pay: "unknown"
    amount: "not provided"
    currency: "unknown"
    unit: "unknown"
    included_services: "not provided"
    excluded_unclear_services: "not provided"
    follow_up_implications: "needs dentist confirmation"
    questions_to_confirm: []
cost_quality_continuity_considerations:
  cost: "unknown"
  quality_evidence: "unknown"
  continuity: "unknown"
  follow_up_access: "unknown"
  language_communication: "unknown"
  insurance: "unknown"
  timing: "unknown"
  travel_burden: "unknown"
  still_uncertain: []
possible_explanation_directions:
  - direction: "not provided"
    source_label: "AI possible explanation direction"
    why_this_direction_came_up: "not provided"
evidence_supporting_each_direction:
  - direction: "unknown"
    evidence: []
evidence_missing_for_each_direction:
  - direction: "unknown"
    missing_evidence: []
what_cannot_be_concluded_yet:
  - "needs dentist confirmation"
dentist_facing_questions:
  current_country: []
  home_country: []
next_ai_agent_questions: []
final_dentist_review_boundary: "Final diagnosis, treatment decisions, image interpretation, medication decisions, emergency evaluation, and waiting or travel safety judgments require dentist or medical professional evaluation."
uncertainty_unresolved_items: []
```

## Field Definitions

| Field | Definition |
| ----- | ---------- |
| Case purpose | Why the packet is being created |
| Intended recipient | Dentist, user, or next AI agent who will read the packet |
| Language / tone preference | Preferred language and practical communication tone |
| Main concern | The user's primary reason for organizing the packet |
| User-reported symptoms | Symptoms as reported by the user, not AI findings |
| Symptom timeline | Time-ordered symptoms, explanations, and visit events |
| Urgent warning status | Workflow routing status for warning signs |
| Dentist original statement | Original wording from dentist or clinic source |
| User interpretation | What the user thinks the statement means |
| Available records | Records the user already has |
| Missing records | Records that may help continuity but are not available |
| Quote / treatment plan line items | Itemized plan and quote organization |
| Cost / Quality / Continuity considerations | Questions about cost, evidence, continuity, follow-up, language, insurance, timing, travel burden, and uncertainty |
| Possible explanation directions | Optional evidence-focused directions, not diagnoses |
| Evidence supporting each direction | Source-labeled information that points toward a direction |
| Evidence missing for each direction | Records, dentist explanations, or exam findings not available |
| What cannot be concluded yet | Explicit limits caused by missing evidence or professional-evaluation needs |
| Dentist-facing questions | Questions to ask current-country or home-country dentist |
| Next-AI-agent questions | Continuation prompts for another BYO-AI session |
| Final dentist-review boundary | Compact professional-review boundary |
| Uncertainty / unresolved items | Items that remain open |

## Source Separation Labels

| Label | Definition |
| ----- | ---------- |
| `User-reported symptom` | Symptom, concern, timeline, or experience described by the user |
| `Dentist original statement` | Original or near-original wording from a dentist or dental clinic explanation |
| `Clinic document / quote / receipt` | Written clinic material, estimate, receipt, treatment plan, record list, or billing line item |
| `User interpretation` | What the user thinks a dentist statement, document, quote, or symptom means |
| `AI organization` | Structuring, translation support, summarization, or formatting performed by the AI |
| `AI possible explanation direction` | Evidence-focused possibility framing generated by the AI; not final diagnosis |
| `Missing evidence` | Information, records, exam findings, or dentist explanations not available in the current conversation |
| `Dentist-facing question` | Question prepared for a dentist or clinic |
| `Next-AI-agent question` | Continuation question or instruction for another BYO-AI session |

## Source Separation Rules

- Preserve original dentist wording separately.
- Preserve clinic document, quote, or receipt wording separately.
- Keep user interpretation separate from both.
- Label AI organization as AI organization.
- Label possible explanation directions as AI possible explanation direction.
- Do not convert missing records into inferred findings.
- Do not treat unanswered fields as negative findings.

## Missing Evidence Rules

- Missing evidence should be explicit.
- Missing evidence should lead to records requests or dentist-facing questions.
- Missing evidence should not become speculation.
- Image records are records only; the AI should not say what images show.

## Cost / Quality / Continuity Fields

Use these fields exactly:

- Cost
- Quality / evidence
- Continuity
- Follow-up access
- Language / communication
- Insurance
- Timing
- Travel burden
- Still uncertain

This is an organizing lens, not a final decision engine. Do not rank Taiwan or Japan as universally better or worse. Do not decide whether the user should travel, wait, return home, or proceed. Do not turn cost analysis into final treatment recommendation.

## Final Dentist-Review Boundary

This packet is for organizing cross-border dental planning information for dentist review. Final diagnosis, treatment decisions, image interpretation, medication decisions, emergency evaluation, and waiting or travel safety judgments require dentist or medical professional evaluation.
