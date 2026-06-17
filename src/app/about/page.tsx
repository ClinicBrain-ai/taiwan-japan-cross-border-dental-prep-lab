import { pageContent } from "../content";
import { PageShell } from "../page-shell";

export default function AboutPage() {
  return <PageShell currentPath="/about" {...pageContent.about} />;
}
