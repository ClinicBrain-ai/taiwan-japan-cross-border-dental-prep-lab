import { pageContent } from "../content";
import { PageShell } from "../page-shell";

export default function SafetyPage() {
  return <PageShell currentPath="/safety" {...pageContent.safety} />;
}
