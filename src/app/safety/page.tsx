import { BoundaryStatement } from "@/components/BoundaryStatement";
import { RedFlagNotice } from "@/components/RedFlagNotice";
import { pageContent } from "../content";
import { PageShell } from "../page-shell";

const prohibitedUseCategories = [
  "Diagnosis",
  "Treatment advice",
  "Image interpretation",
  "Medication advice",
  "Emergency care or triage",
  "Waiting or travel safety judgment",
  "Teledentistry",
  "Formal second opinion",
  "Cost, insurance, quality, speed, or outcome guarantee",
  "Real patient data collection",
  "Backend, API, auth, database, analytics, upload, email, or payment behavior",
] as const;

export default function SafetyPage() {
  return (
    <PageShell currentPath="/safety" {...pageContent.safety}>
      <section className="safety-stack" aria-label="Safety boundary details">
        <BoundaryStatement />
        <RedFlagNotice />
        <section className="prohibited-panel" aria-labelledby="prohibited-title">
          <h2 id="prohibited-title">Prohibited-use categories</h2>
          <ul>
            {prohibitedUseCategories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </section>
      </section>
    </PageShell>
  );
}
