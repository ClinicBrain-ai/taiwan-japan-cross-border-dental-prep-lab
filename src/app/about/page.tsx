import { pageContent } from "../content";
import { PageShell } from "../page-shell";

const loopSteps = [
  "Human sets the domain boundary and portfolio standard.",
  "ChatGPT assists with framing, review criteria, and documentation structure.",
  "Codex implements local code, tests, docs, and checks.",
  "The project reviews output language against safety boundaries.",
  "The learning system improves without adding clinical decision behavior.",
] as const;

export default function AboutPage() {
  return (
    <PageShell currentPath="/about" {...pageContent.about}>
      <section className="loop-panel" aria-labelledby="loop-title">
        <h2 id="loop-title">Human-led, ChatGPT-assisted, Codex-implemented</h2>
        <ol>
          {loopSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
