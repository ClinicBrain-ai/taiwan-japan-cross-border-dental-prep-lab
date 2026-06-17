import { describe, expect, it } from "vitest";
import { detectUrgentWarningSigns } from "../lib/redFlagChecks";
import { getSyntheticCaseById } from "../lib/syntheticCases";

describe("red flag checks", () => {
  it("returns structured red flag results for non-urgent cases", () => {
    const caseData = getSyntheticCaseById("SYN-TJ-DENTAL-001");

    expect(caseData).toBeDefined();
    expect(detectUrgentWarningSigns(caseData!)).toEqual({
      hasUrgentRedFlags: false,
      triggeredFlags: [],
      unclearFlags: [],
    });
  });

  it("detects urgent warning signs without providing advice", () => {
    const caseData = getSyntheticCaseById("SYN-TJ-DENTAL-003");

    expect(caseData).toBeDefined();
    expect(detectUrgentWarningSigns(caseData!)).toEqual({
      hasUrgentRedFlags: true,
      triggeredFlags: [
        "facial or gum swelling that is worsening",
        "fever with dental pain or swelling",
      ],
      unclearFlags: [
        "severe uncontrolled pain",
        "pus or spreading infection",
      ],
    });
  });
});
