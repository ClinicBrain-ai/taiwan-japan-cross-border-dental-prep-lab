export function sanitizeMarkdownFilename(caseId: string): string {
  const sanitized = caseId
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/\.+/g, ".")
    .replace(/^[.-]+|[.-]+$/g, "");

  return sanitized || "cross-border-dental-care-planning-packet";
}

export function createMarkdownDownloadFilename(caseId: string): string {
  return `${sanitizeMarkdownFilename(caseId)}-cross-border-dental-care-planning-packet.md`;
}

export function normalizeMarkdown(markdown: string): string {
  return `${markdown
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .trim()}\n`;
}
