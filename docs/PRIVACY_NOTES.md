# Privacy Notes

This repository is not a patient-data environment.

No real patient data belongs in this repo because the prototype has no consent model, no access controls, no retention policy, no deletion workflow, no audit trail, and no clinical governance.

The architecture must stay static and local-first:

- No backend
- No API calls
- No database
- No auth
- No analytics
- No cookies
- No file upload
- No email collection
- No payment
- No external LLM calls

Do not add examples copied from real care episodes. Even "de-identified" clinical stories can remain identifiable through rare combinations of dates, travel history, procedures, or locations.
