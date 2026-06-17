# Eval Plan

Gate-level evaluation checks whether the repository preserves its boundary and architecture.

Current checks:

- `npm run lint`
- `npm test`
- `npm run build`
- `npm audit`
- Search for prohibited architecture additions such as fetch calls, API routes, server actions, analytics, auth, database code, upload code, payment code, and email collection.
- Search for prohibited clinical framing such as diagnosis, treatment recommendation, image interpretation, emergency triage, waiting-safety judgment, travel-safety judgment, teledentistry, and second-opinion language.

Artifact review should ask:

- Does the packet organize information instead of deciding?
- Are facts, assumptions, concerns, logistics, and unknowns separate?
- Does urgent language route to local urgent dental or medical evaluation?
- Is all example content synthetic?
- Is the public positioning clearly AI-native professional learning system design, not dental advice?
