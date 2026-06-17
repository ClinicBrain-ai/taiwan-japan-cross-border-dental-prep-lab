# Privacy Notes

This domain module is not a patient-data environment.

Do not add real patient data, real dental images, clinical records, contact details, insurance records, travel documents, or uploaded files to this repository.

## Why synthetic-first matters

Cross-border dental planning can combine dental facts, symptoms, dates, locations, travel plans, insurance details, language context, and care history. Even if names are removed, those combinations can identify a person.

Gate 2 adds domain documentation only. Synthetic cases come in Gate 3 and must remain fictional.

## Architecture boundary

The module must not add backend services, API calls, authentication, database storage, analytics, cookies, file upload, payment, email collection, or external LLM calls.

Local-first documentation keeps the learning system inspectable and prevents accidental data flows.

## Records policy

Records may be listed as continuity-of-care categories only:

- X-rays
- Panoramic X-rays
- Local dental radiographs
- CBCT / DICOM if already available
- Intraoral photos if already available
- Periodontal records
- Treatment plan
- Quote
- Clinical notes or consultation summary

The repository must not store those records. Image-related records must not be interpreted.
