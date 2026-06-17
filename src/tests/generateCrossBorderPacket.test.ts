import { describe, expect, it } from "vitest";
import {
  assertNoProhibitedAdvice,
  findProhibitedAdvice,
  REQUIRED_BOUNDARY_STATEMENT,
  URGENT_WARNING_NOTICE,
} from "../lib/boundaryChecks";
import { generateCrossBorderPacket } from "../lib/generateCrossBorderPacket";
import { syntheticCases } from "../lib/syntheticCases";

const requiredSectionHeadings = [
  "## Case ID",
  "## User context",
  "## Main concern",
  "## Urgent warning sign check",
  "## Symptom timeline",
  "## Local dentist statement",
  "### Original wording",
  "### Translation / plain-language organization",
  "### User interpretation",
  "### What remains unclear",
  "## Quote or treatment plan organization",
  "## Available records",
  "## Missing records",
  "## Why missing records may matter for cross-border continuity of care",
  "## Follow-up and staging considerations",
  "## Cost, insurance, and self-pay questions",
  "## Language and communication concerns",
  "## Timeline and travel constraints",
  "## Consideration Matrix",
  "## Questions for the local dentist",
  "## Questions for the home-country dentist",
  "## Record request checklist",
  "## What remains uncertain",
  "## Plain-language summary for the user",
  "## AI boundary statement",
] as const;

describe("generateCrossBorderPacket", () => {
  it("includes required packet safety sections for every synthetic case", () => {
    for (const caseData of syntheticCases) {
      const markdown = generateCrossBorderPacket(caseData);

      for (const heading of requiredSectionHeadings) {
        expect(markdown).toContain(heading);
      }

      expect(markdown).toContain(REQUIRED_BOUNDARY_STATEMENT);
      expect(markdown).toContain(caseData.case_id);
      expect(markdown).toContain("| Urgent warning sign | Reported in synthetic case |");
      expect(markdown).toContain("## Consideration Matrix");
      expect(markdown).not.toContain("Recommendation Matrix");
    }
  });

  it("includes the full packet output contract and required boundary", () => {
    const markdown = generateCrossBorderPacket(syntheticCases[0]);

    for (const heading of requiredSectionHeadings) {
      expect(markdown).toContain(heading);
    }

    expect(markdown).toContain(REQUIRED_BOUNDARY_STATEMENT);
  });

  it("includes Case ID and urgent warning sign check", () => {
    const markdown = generateCrossBorderPacket(syntheticCases[0]);

    expect(markdown).toContain("SYN-TJ-DENTAL-001");
    expect(markdown).toContain("| Urgent warning sign | Reported in synthetic case |");
  });

  it("includes urgent warning notice only for urgent red flag cases", () => {
    const nonUrgentPackets = syntheticCases
      .filter((caseData) => !caseData.urgent_warning_sign_check.red_flags_present)
      .map(generateCrossBorderPacket);
    const urgentPacket = generateCrossBorderPacket(syntheticCases[2]);

    expect(urgentPacket).toContain(URGENT_WARNING_NOTICE);
    expect(urgentPacket).toContain(
      "Planning deferred until local urgent dental or medical evaluation.",
    );

    for (const markdown of nonUrgentPackets) {
      expect(markdown).not.toContain(URGENT_WARNING_NOTICE);
    }
  });

  it("keeps urgent red flag packets deferred instead of continuing normal planning", () => {
    const urgentPacket = generateCrossBorderPacket(syntheticCases[2]);

    expect(urgentPacket).toContain(URGENT_WARNING_NOTICE);
    expect(urgentPacket).toContain(
      "Planning deferred until local urgent dental or medical evaluation.",
    );
    expect(urgentPacket).toContain("Planning deferred until local urgent evaluation.");
    expect(urgentPacket).not.toContain(
      "What timeline constraints should be documented as planning context?",
    );
    expect(urgentPacket).not.toContain(
      "What coverage, reimbursement, or self-pay questions should be prepared?",
    );
  });

  it("does not contain prohibited recommendation phrases", () => {
    for (const caseData of syntheticCases) {
      expect(() =>
        assertNoProhibitedAdvice(generateCrossBorderPacket(caseData)),
      ).not.toThrow();
    }
  });

  it("does not include return, travel, waiting, or flying safety conclusions", () => {
    for (const caseData of syntheticCases) {
      const markdown = generateCrossBorderPacket(caseData);
      const adviceBody = markdown
        .replaceAll(REQUIRED_BOUNDARY_STATEMENT, "")
        .replaceAll(URGENT_WARNING_NOTICE, "");

      expect(findProhibitedAdvice(markdown)).toEqual([]);
      expect(adviceBody).not.toMatch(/\byou should return to (Taiwan|Japan)\b/i);
      expect(adviceBody).not.toMatch(/\bit is safe to (wait|fly)\b/i);
      expect(adviceBody).not.toMatch(/\bit is okay to delay\b/i);
    }
  });

  it("uses Consideration Matrix and avoids disallowed matrix labels", () => {
    const markdown = generateCrossBorderPacket(syntheticCases[1]);

    expect(markdown).toContain("## Consideration Matrix");
    expect(markdown).not.toContain("Recommendation Matrix");
    expect(markdown).not.toContain("Best Option Table");
  });

  it("treats image-related terms as records or attachments only", () => {
    const markdown = syntheticCases.map(generateCrossBorderPacket).join("\n");
    const imageRecordLines = markdown
      .split("\n")
      .filter((line) => /\b(X-ray|CBCT|DICOM|photos?)\b/i.test(line));

    expect(imageRecordLines.length).toBeGreaterThan(0);
    expect(markdown).not.toMatch(/\b(X-ray|CBCT|DICOM|photo)s?\s+shows?\b/i);
    expect(markdown).not.toMatch(/\bshows?\s+(on|in)\s+(the\s+)?(X-ray|CBCT|DICOM|photo)/i);

    for (const line of imageRecordLines) {
      expect(line).toMatch(/record|attachment|available|checklist|radiograph/i);
    }
  });

  it("is deterministic for the same input", () => {
    expect(generateCrossBorderPacket(syntheticCases[0])).toBe(
      generateCrossBorderPacket(syntheticCases[0]),
    );
  });
});
