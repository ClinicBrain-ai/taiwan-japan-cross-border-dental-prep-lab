# Taiwan-Japan Cross-Border Dental Prep Domain Module

This domain module defines the Taiwan-Japan cross-border dental preparation surface for the local-first learning system prototype.

It serves two planning-preparation audiences:

- Taiwanese people in Japan who received a dental explanation, quote, or treatment plan in Japan and are considering whether to organize information for possible care in Taiwan.
- Japanese people in Taiwan who received a dental explanation, quote, or treatment plan in Taiwan and are considering whether to organize information for possible care in Japan.

The module is for cross-border dental care planning information organization, bilingual expert-review packet preparation, local dentist questions plus home-country dentist questions, and learning scaffold design for non-experts. It preserves decision preparation, not decision making.

This packet organizes cross-border dental care planning information only. It is not diagnosis, treatment recommendation, image interpretation, medication advice, emergency care, waiting-safety judgment, travel-safety judgment, teledentistry, or formal second opinion. Final diagnosis, treatment decisions, and whether it is safe to wait or travel require dentist or medical professional evaluation.

## Why this domain is complex

Cross-border dental planning can be hard because users may face language differences, unfamiliar dental terminology, cost and insurance uncertainty, treatment staging and follow-up needs, continuity of care across countries, record transfer, travel and timeline constraints, and differences between dentist statements and patient interpretation.

The module does not resolve those factors. It helps organize them into questions and records for professional review.

## Module files

- [Intended Use](intended-use.md)
- [Prohibited Use](prohibited-use.md)
- [Learning Objectives](learning-objectives.md)
- [Runtime Contract](runtime-contract.md)
- [Decision Prep Framework](decision-prep-framework.md)
- [Language Policy](language-policy.md)
- [Privacy Notes](privacy-notes.md)

## Markdown templates

- [Taiwanese in Japan considering Taiwan care](md-templates/taiwanese-in-japan-considering-taiwan-care.md)
- [Japanese in Taiwan considering Japan care](md-templates/japanese-in-taiwan-considering-japan-care.md)

## Packet templates

- [Cross-border dental care planning packet](packet-templates/cross-border-dental-care-planning-packet.md)
- [Japan-to-Taiwan dental care planning packet](packet-templates/japan-to-taiwan-dental-care-planning-packet.md)
- [Taiwan-to-Japan dental care planning packet](packet-templates/taiwan-to-japan-dental-care-planning-packet.md)

## Comparison tables

- [Consideration Matrix](comparison-tables/consideration-matrix.md)

## Record request letters

- [Japanese clinic record request letter](record-request-letters/japanese-clinic-request.md)
- [Taiwan clinic record request letter](record-request-letters/taiwan-clinic-request.md)

## Synthetic cases

- [Case 001: Taiwanese in Japan considering Taiwan implant quote](synthetic-cases/case-001-taiwanese-in-japan-considering-taiwan-implant-quote.json)
- [Case 002: Japanese in Taiwan considering Japan root canal and crown planning](synthetic-cases/case-002-japanese-in-taiwan-considering-japan-root-canal-crown.json)
- [Case 003: Taiwanese in Japan emergency red flag](synthetic-cases/case-003-taiwanese-in-japan-emergency-red-flag.json)

## Urgent warning notice

Urgent warning signs include worsening facial or gum swelling, fever with dental pain or swelling, difficulty swallowing, difficulty breathing, severe uncontrolled pain, pus or spreading infection, trauma, and persistent or uncontrolled bleeding.

This situation should be checked locally first. This project cannot decide whether it is safe to wait, travel, or return home. Please seek local urgent dental or medical evaluation before continuing cross-border planning.

## Records as continuity inputs

Records can matter for continuity of care: X-rays, panoramic X-rays, local dental radiographs, CBCT / DICOM if already available, intraoral photos if already available, periodontal records, treatment plan, quote, and clinical notes or consultation summary.

Image-related records are treated as records or attachments only. This module must not describe image interpretation.

## Gate history

Gate 2 added domain documentation only. Gate 3 adds Markdown templates, packet templates, a Consideration Matrix, record request letters, and synthetic cases. It does not add runtime code, UI features, forms, file uploads, API routes, network behavior, or real patient data.
