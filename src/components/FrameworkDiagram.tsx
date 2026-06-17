const frameworkSteps = [
  {
    name: "Collect",
    detail:
      "Gather synthetic context, local dentist wording, records, broad timing constraints, and user concerns.",
  },
  {
    name: "Separate",
    detail:
      "Keep dentist statements, translation, user interpretation, uncertainty, and questions visibly distinct.",
  },
  {
    name: "Scaffold",
    detail:
      "Place the information into a consistent expert-review preparation packet.",
  },
  {
    name: "Bound",
    detail:
      "Make the non-clinical boundary explicit before any packet output is treated as useful.",
  },
  {
    name: "Artifact",
    detail:
      "Generate a local Markdown packet that can be reviewed without accounts or network calls.",
  },
  {
    name: "Review",
    detail:
      "Check the packet for boundary language, red-flag routing, and separation of facts from interpretation.",
  },
  {
    name: "Learn",
    detail:
      "Use the review result to improve the learning system rather than deciding care.",
  },
] as const;

export function FrameworkDiagram() {
  return (
    <section className="framework-diagram" aria-labelledby="framework-title">
      <h2 id="framework-title">Collect → Separate → Scaffold → Bound → Artifact → Review → Learn</h2>
      <div className="framework-steps">
        {frameworkSteps.map((step, index) => (
          <article className="framework-step" key={step.name}>
            <span aria-hidden="true">{index + 1}</span>
            <h3>{step.name}</h3>
            <p>{step.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
