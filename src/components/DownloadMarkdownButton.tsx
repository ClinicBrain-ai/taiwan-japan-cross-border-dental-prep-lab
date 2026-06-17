"use client";

import { createMarkdownDownloadFilename } from "@/lib/markdownExport";

type DownloadMarkdownButtonProps = {
  caseId: string;
  markdown: string;
};

export function DownloadMarkdownButton({
  caseId,
  markdown,
}: DownloadMarkdownButtonProps) {
  function handleDownload() {
    const blob = new Blob([markdown], {
      type: "text/markdown;charset=utf-8",
    });
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = objectUrl;
    link.download = createMarkdownDownloadFilename(caseId);
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);
  }

  return (
    <button className="download-button" onClick={handleDownload} type="button">
      Download .md packet
    </button>
  );
}
