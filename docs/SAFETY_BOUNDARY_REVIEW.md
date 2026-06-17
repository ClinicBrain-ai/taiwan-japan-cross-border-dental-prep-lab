# Safety Boundary Review

## Required Boundary Statement

This packet organizes cross-border dental care planning information only. It is not diagnosis, treatment recommendation, image interpretation, medication advice, emergency care, waiting-safety judgment, travel-safety judgment, teledentistry, or formal second opinion. Final diagnosis, treatment decisions, and whether it is safe to wait or travel require dentist or medical professional evaluation.

## Urgent Warning Behavior

This situation should be checked locally first. This project cannot decide whether it is safe to wait, travel, or return home. Please seek local urgent dental or medical evaluation before continuing cross-border planning.

Urgent warning signs stop ordinary cross-border planning in this prototype. The red-flag synthetic case records that planning is deferred until local urgent dental or medical evaluation.

## Prohibited-Use List

The project must not provide:

- diagnosis
- treatment recommendation
- image interpretation
- medication advice
- emergency care
- emergency triage
- waiting-safety judgment
- travel-safety judgment
- advice about whether flying is safe
- advice about whether returning home is safe
- teledentistry
- formal second opinion
- insurance or cost guarantees
- dentist right/wrong judgment
- real patient data collection

## No Diagnosis

The packet may organize symptoms, context, questions, and records. It must not name a condition or tell the user what dental condition they have.

## No Treatment Recommendation

The packet may organize quoted items or treatment-plan wording that a dentist already provided. It must not tell the user what treatment to choose.

## No Image Interpretation

X-ray, panoramic X-ray, local dental radiograph, CBCT, DICOM, and photo references are records or attachments only. The project must not say what an image shows.

## No Waiting Or Travel Safety Judgment

The packet may record broad timeline constraints as planning context. It must not decide waiting safety, travel safety, flight safety, or return-home safety.

## No Teledentistry

The project does not create a dentist-patient relationship, route patient care, collect patient data, or deliver remote dental consultation.

## No Formal Second Opinion

The project prepares information for professional review. It does not evaluate whether a dentist is right or wrong and does not issue a formal second opinion.

## Image Records As Records/Attachments Only

Image-related materials are included only as available or missing records:

- X-rays
- panoramic X-rays
- local dental radiographs
- CBCT / DICOM if already available
- intraoral photos if already available

The project does not summarize findings from those records.

## Consideration Matrix As Questions Only

The matrix must be labeled Consideration Matrix. It asks questions only. It must not rank options, score countries, select treatment, or conclude which care location is better.

## Red-Flag Deferral Behavior

When urgent warning signs are present:

- the exact urgent warning notice is displayed
- normal cross-border planning is deferred
- the packet may record planning deferred until local urgent evaluation
- the packet must not provide medication advice, diagnosis, treatment recommendation, waiting-safety judgment, travel-safety judgment, or flight-safety judgment

## Synthetic-Only Posture

All cases are fictional and labeled synthetic. No real patient data belongs in the repository or demo.

## Safety Review Conclusion

The v0.1.0 safety boundary is suitable for public portfolio release if tests, static scans, manual walkthrough, and owner approval pass. The safe public claim is that the system organizes information for expert-review preparation. It must not be described as a clinical product.
