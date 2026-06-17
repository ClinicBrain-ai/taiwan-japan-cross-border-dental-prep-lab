# Manual Walkthrough Record

## Purpose

This record supports publication readiness review. It is a human walkthrough checklist for confirming that the public demo reads as a portfolio prototype and not as a clinical product.

## Route Walkthrough Checklist

[ ] `/` presents the project as an AI-native professional learning system prototype
[ ] `/` states decision preparation, not decision making
[ ] `/framework` explains Collect -> Separate -> Scaffold -> Bound -> Artifact -> Review -> Learn
[ ] `/framework` does not add clinical advice
[ ] `/demo` uses synthetic cases only
[ ] `/demo` displays an expert-review preparation packet
[ ] `/demo` displays the required boundary statement in packet preview
[ ] `/designer` explains learning-system design, not dental advice
[ ] `/safety` displays the required boundary statement
[ ] `/safety` displays urgent warning routing language
[ ] `/examples` labels cases as synthetic
[ ] `/about` explains human-led, ChatGPT-assisted, Codex-implemented loop engineering

## Mobile Demo Review Checklist

[ ] Mobile `/demo` first screen reads as portfolio demo
[ ] Mobile `/demo` does not look like a formal medical intake product
[ ] Synthetic labels are visible
[ ] No free-text patient input appears
[ ] No file upload appears
[ ] Packet preview remains readable
[ ] Safety language is visible before clinical-looking content dominates

Gate 6 evidence: mobile DOM/style review confirmed portfolio labels, no inputs, no file upload, and red-flag notice ordering.

## Red-Flag Synthetic Case Review

[ ] Select `SYN-TJ-DENTAL-003`
[ ] Exact urgent warning notice appears
[ ] Urgent notice appears before selected-case details and packet preview
[ ] Packet marks planning as deferred
[ ] UI does not tell the user whether to wait, travel, fly, stay, or return home
[ ] UI does not provide medication advice
[ ] UI does not diagnose

Required urgent warning notice:

"This situation should be checked locally first. This project cannot decide whether it is safe to wait, travel, or return home. Please seek local urgent dental or medical evaluation before continuing cross-border planning."

## Download Behavior Review

[ ] Download button creates a `.md` file
[ ] Download behavior is local browser Blob behavior
[ ] Download does not call an API
[ ] Download does not upload data
[ ] Download does not collect email or payment information

## No Input / Upload / Network Review

[ ] No `input` control exists in the demo UI
[ ] No `textarea` exists in the demo UI
[ ] No file upload control exists
[ ] No API route exists under `src/app/api`
[ ] No fetch, axios, XMLHttpRequest, or navigator.sendBeacon helper exists in source
[ ] No server action is introduced
[ ] No real patient data is present

## Manual Pass/Fail Record

Owner walkthrough status:

[ ] Pass
[ ] Pass with notes
[ ] Needs revision

Notes:

- Gate 6 automated evidence passed: 8 test files, 38 tests.
- Gate 6 audit evidence passed: 0 vulnerabilities.
- Gate 6 static scans found no runtime network/upload/API behavior.
- Owner should complete the route walkthrough before public posting.
