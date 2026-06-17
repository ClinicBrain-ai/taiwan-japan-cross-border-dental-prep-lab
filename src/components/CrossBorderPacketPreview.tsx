type CrossBorderPacketPreviewProps = {
  caseId: string;
  markdown: string;
};

export function CrossBorderPacketPreview({
  caseId,
  markdown,
}: CrossBorderPacketPreviewProps) {
  return (
    <section className="packet-markdown-panel" aria-labelledby="packet-preview-title">
      <div className="panel-heading">
        <p className="section-kicker">Generated Markdown</p>
        <h2 id="packet-preview-title">Packet preview for {caseId}</h2>
      </div>
      <pre data-testid="packet-preview">
        <code>{markdown}</code>
      </pre>
    </section>
  );
}
