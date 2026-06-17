import { pageContent } from "../content";
import { PageShell } from "../page-shell";

export default function DemoPage() {
  return <PageShell currentPath="/demo" {...pageContent.demo} />;
}
