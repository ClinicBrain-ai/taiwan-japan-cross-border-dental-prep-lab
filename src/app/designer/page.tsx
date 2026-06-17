import { pageContent } from "../content";
import { PageShell } from "../page-shell";

export default function DesignerPage() {
  return <PageShell currentPath="/designer" {...pageContent.designer} />;
}
