import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  assertNoProhibitedAdvice,
  findProhibitedAdvice,
  includesRequiredBoundary,
  REQUIRED_BOUNDARY_STATEMENT,
  URGENT_WARNING_NOTICE,
} from "../lib/boundaryChecks";

describe("boundary checks", () => {
  it("detects the required boundary statement", () => {
    expect(includesRequiredBoundary(REQUIRED_BOUNDARY_STATEMENT)).toBe(true);
  });

  it("does not treat required boundary or urgent notices as prohibited advice", () => {
    expect(() =>
      assertNoProhibitedAdvice(
        `${REQUIRED_BOUNDARY_STATEMENT}\n\n${URGENT_WARNING_NOTICE}`,
      ),
    ).not.toThrow();
  });

  it("flags prohibited advice outside required notices", () => {
    const hits = findProhibitedAdvice("you should return to Taiwan");

    expect(hits).toEqual([
      {
        category: "english",
        phrase: "you should return to Taiwan",
      },
    ]);
  });

  it("does not introduce network helper tokens in source library files", () => {
    const srcLibText = readDirectoryText(join(process.cwd(), "src", "lib"));
    const tokens = [
      ["fe", "tch"].join(""),
      ["ax", "ios"].join(""),
      ["XML", "Http", "Request"].join(""),
      ["navigator", ".", "send", "Beacon"].join(""),
    ];

    for (const token of tokens) {
      expect(srcLibText).not.toContain(token);
    }
  });
});

function readDirectoryText(directory: string): string {
  return readdirSync(directory)
    .map((entry) => {
      const fullPath = join(directory, entry);

      if (statSync(fullPath).isDirectory()) {
        return readDirectoryText(fullPath);
      }

      return readFileSync(fullPath, "utf8");
    })
    .join("\n");
}
