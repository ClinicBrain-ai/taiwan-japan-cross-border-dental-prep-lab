import { FrameworkDiagram } from "@/components/FrameworkDiagram";
import { pageContent } from "../content";
import { PageShell } from "../page-shell";

export default function FrameworkPage() {
  return (
    <PageShell currentPath="/framework" {...pageContent.framework}>
      <FrameworkDiagram />
    </PageShell>
  );
}
