import { describe, expect, it } from "vitest";
import {
  createMarkdownDownloadFilename,
  normalizeMarkdown,
  sanitizeMarkdownFilename,
} from "../lib/markdownExport";

describe("markdown export utilities", () => {
  it("sanitizes unsafe path characters", () => {
    expect(sanitizeMarkdownFilename("../SYN TJ:DENTAL/001?")).toBe(
      "syn-tj-dental-001",
    );
  });

  it("creates a markdown download filename", () => {
    expect(createMarkdownDownloadFilename("SYN-TJ-DENTAL-001")).toBe(
      "syn-tj-dental-001-cross-border-dental-care-planning-packet.md",
    );
  });

  it("normalizes line endings and trailing whitespace", () => {
    expect(normalizeMarkdown("A  \r\nB\n\n")).toBe("A\nB\n");
  });
});
