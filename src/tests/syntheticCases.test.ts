import { describe, expect, it } from "vitest";
import {
  assertAllCasesAreSynthetic,
  getSyntheticCaseById,
  syntheticCases,
} from "../lib/syntheticCases";

describe("synthetic cases", () => {
  it("contains exactly the three Gate 3 synthetic cases", () => {
    expect(syntheticCases.map((caseData) => caseData.case_id)).toEqual([
      "SYN-TJ-DENTAL-001",
      "SYN-TJ-DENTAL-002",
      "SYN-TJ-DENTAL-003",
    ]);
  });

  it("marks all cases synthetic", () => {
    expect(() => assertAllCasesAreSynthetic()).not.toThrow();
    expect(syntheticCases.every((caseData) => caseData.synthetic)).toBe(true);
  });

  it("can look up a synthetic case by ID", () => {
    expect(getSyntheticCaseById("SYN-TJ-DENTAL-002")?.case_id).toBe(
      "SYN-TJ-DENTAL-002",
    );
  });

  it("keeps synthetic notices explicit about absent real identifiers", () => {
    for (const caseData of syntheticCases) {
      expect(caseData.synthetic_notice).toContain("Synthetic training case");
      expect(caseData.synthetic_notice).toContain("no real names");
      expect(caseData.synthetic_notice).toContain("no real");
    }
  });
});
