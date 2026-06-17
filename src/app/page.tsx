import { pageContent } from "./content";
import { PageShell } from "./page-shell";

export default function Home() {
  return <PageShell currentPath="/" {...pageContent.home} />;
}
