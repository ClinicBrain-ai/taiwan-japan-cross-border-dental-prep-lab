import { pageContent } from "../content";
import { PageShell } from "../page-shell";

export default function ExamplesPage() {
  return <PageShell currentPath="/examples" {...pageContent.examples} />;
}
