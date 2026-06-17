# Runtime Contract

This domain module is documentation for a local-first static prototype. It does not authorize runtime behavior beyond static information organization.

This packet organizes cross-border dental care planning information only. It is not diagnosis, treatment recommendation, image interpretation, medication advice, emergency care, waiting-safety judgment, travel-safety judgment, teledentistry, or formal second opinion. Final diagnosis, treatment decisions, and whether it is safe to wait or travel require dentist or medical professional evaluation.

## Required architecture boundary

The module must remain:

- Local-first
- Static
- Synthetic-first
- No backend
- No API calls
- No external LLM calls
- No authentication
- No analytics
- No database
- No cookies
- No file upload
- No real patient data
- No email collection
- No payment

## Required runtime behavior if implemented later

If a later gate adds packet-generation UI, it must stay inside expert-review packet preparation. It may organize information into sections, labels, and questions. It must not provide clinical decision support.

Image-related records must be treated as records or attachments only. Runtime copy must not describe image interpretation.

If urgent warning signs are present, normal planning must stop and the user must be routed to local urgent dental or medical evaluation first.

This situation should be checked locally first. This project cannot decide whether it is safe to wait, travel, or return home. Please seek local urgent dental or medical evaluation before continuing cross-border planning.

## Required audience coverage

The module must support both directions of cross-border planning preparation:

- Taiwanese-in-Japan users considering whether to organize information for possible care in Taiwan.
- Japanese-in-Taiwan users considering whether to organize information for possible care in Japan.
