import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  findProhibitedAdvice,
  REQUIRED_BOUNDARY_STATEMENT,
  URGENT_WARNING_NOTICE,
} from "@/lib/boundaryChecks";
import { pageContent } from "@/app/content";

describe("Gate 6 static safety scans", () => {
  it("does not introduce network helpers, API routes, or server-only actions", () => {
    const srcText = readDirectoryText(join(process.cwd(), "src"));
    const blockedTokens = [
      ["fe", "tch"].join(""),
      ["ax", "ios"].join(""),
      ["XML", "Http", "Request"].join(""),
      ["navigator", ".", "send", "Beacon"].join(""),
      ["use", " ", "server"].join(""),
    ];

    for (const token of blockedTokens) {
      expect(srcText).not.toContain(token);
    }

    expect(existsSync(join(process.cwd(), "src", "app", "api"))).toBe(false);
  });

  it("does not add upload controls or patient-data input surfaces", () => {
    const srcText = [
      readDirectoryText(join(process.cwd(), "src", "app")),
      readDirectoryText(join(process.cwd(), "src", "components")),
    ].join("\n");
    const blockedMarkup = [
      ["<", "input"].join(""),
      ["type", "=", "\"", "file", "\""].join(""),
      ["type", "=", "'", "file", "'"].join(""),
      ["<", "textarea"].join(""),
    ];

    for (const token of blockedMarkup) {
      expect(srcText).not.toContain(token);
    }
  });

  it("keeps UI copy framed as portfolio learning-system preparation", () => {
    const uiCopy = [
      ...Object.values(pageContent).flatMap((content) => [
        content.title,
        content.intro,
        ...content.sections.flatMap((section) => [section.heading, section.body]),
      ]),
      "Synthetic demo",
      "Expert-review preparation packet",
      "Decision preparation, not decision making",
      "Local-first demo",
      "No real patient data",
      "For learning-system design demonstration only",
    ].join("\n");
    const normalizedUiCopy = uiCopy
      .replaceAll(REQUIRED_BOUNDARY_STATEMENT, "")
      .replaceAll(URGENT_WARNING_NOTICE, "");

    const adviceHits = findProhibitedAdvice(normalizedUiCopy).filter(
      (hit) => hit.category !== "matrix-label",
    );

    expect(adviceHits).toEqual([]);
    expect(normalizedUiCopy).not.toMatch(/AI dental diagnosis/i);
    expect(normalizedUiCopy).not.toMatch(/Get a second opinion/i);
    expect(normalizedUiCopy).not.toMatch(/Find out what treatment you need/i);
    expect(normalizedUiCopy).not.toMatch(/Should I return to (Taiwan|Japan)/i);
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
