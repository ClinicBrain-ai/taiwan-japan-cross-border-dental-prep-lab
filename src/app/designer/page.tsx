import { pageContent } from "../content";
import { PageShell } from "../page-shell";

const designerRows = [
  {
    label: "User misconception",
    value:
      "The user may mix dentist statements, translation, personal interpretation, cost worry, records, and broad scheduling pressure.",
  },
  {
    label: "Scaffold step",
    value:
      "The packet separates each category and turns uncertainty into questions for professional review.",
  },
  {
    label: "Safety boundary",
    value:
      "The system routes urgent warning signs locally and excludes clinical, travel, cost, insurance, and outcome guarantees.",
  },
  {
    label: "Output artifact",
    value:
      "The artifact is a deterministic Markdown expert-review preparation packet generated from synthetic data.",
  },
  {
    label: "Evaluation test",
    value:
      "Tests check the required boundary statement, red-flag notice, matrix label, synthetic-only cases, and prohibited wording.",
  },
  {
    label: "Why organization only",
    value:
      "AI can help structure information, but final diagnosis, treatment, timing, and safety judgments require professional evaluation.",
  },
] as const;

export default function DesignerPage() {
  return (
    <PageShell currentPath="/designer" {...pageContent.designer}>
      <section className="designer-table" aria-label="Learning system design table">
        {designerRows.map((row) => (
          <article key={row.label}>
            <h2>{row.label}</h2>
            <p>{row.value}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
