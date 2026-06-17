import { REQUIRED_BOUNDARY_STATEMENT } from "@/lib/boundaryChecks";

export const BOUNDARY_STATEMENT =
  REQUIRED_BOUNDARY_STATEMENT;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/framework", label: "Framework" },
  { href: "/demo", label: "Demo" },
  { href: "/designer", label: "Designer" },
  { href: "/safety", label: "Safety" },
  { href: "/examples", label: "Examples" },
  { href: "/about", label: "About" },
];

export const operatingRules = [
  "Local-first: static pages, no backend, no accounts, and no external model calls.",
  "Synthetic-first: examples are invented for learning and review design only.",
  "Decision preparation: organize questions, context, uncertainties, and documents for expert review.",
  "Clinical boundary: dentists and medical professionals make diagnostic, treatment, timing, travel, and emergency judgments.",
];

export const pageContent = {
  home: {
    title: "Taiwan-Japan Cross-Border Dental Prep Lab",
    intro:
      "A local-first, synthetic-first, AI-native professional learning system prototype for preparing expert-review packets before Taiwan-Japan dental planning discussions.",
    sections: [
      {
        heading: "What it is",
        body: "The lab demonstrates how AI-native workflows can structure decision-relevant planning information without making clinical decisions. Taiwan-Japan cross-border dental care planning is the first domain.",
      },
      {
        heading: "Who it helps",
        body: "It helps learners, researchers, and builders study professional learning systems for Taiwanese-in-Japan and Japanese-in-Taiwan planning preparation scenarios.",
      },
      {
        heading: "What it produces",
        body: "The output is an expert-review preparation packet: goals, known facts, dentist wording, user interpretation, records, questions, logistics, uncertainty, and safety boundaries.",
      },
    ],
  },
  framework: {
    title: "Cross-Border Decision Prep Framework",
    intro:
      "A non-clinical structure for organizing information before a Taiwan-Japan dental care planning discussion.",
    sections: [
      {
        heading: "Collect",
        body: "Gather synthetic case context, main concern, broad timing constraints, local dentist wording, record availability, language needs, and questions for professional review.",
      },
      {
        heading: "Separate",
        body: "Keep original dentist statements, translation, user interpretation, uncertainty, logistics, and professional questions visibly separate.",
      },
      {
        heading: "Scaffold",
        body: "Use a repeatable packet format so non-experts can organize planning information without turning organization into advice.",
      },
      {
        heading: "Bound, artifact, review, learn",
        body: "Apply safety boundaries, generate a local Markdown artifact, review it against tests, and improve the learning system without adding clinical decision behavior.",
      },
    ],
  },
  demo: {
    title: "Synthetic Demo Packet Preview",
    intro:
      "A local browser demo that selects one invented case and previews a Markdown expert-review preparation packet.",
    sections: [
      {
        heading: "Synthetic only",
        body: "The demo uses three invented cases from the repository. It does not accept free-text patient input, files, accounts, uploads, or real patient data.",
      },
      {
        heading: "Packet boundary",
        body: BOUNDARY_STATEMENT,
      },
      {
        heading: "Local output",
        body: "The generated Markdown packet is created in the browser from local TypeScript data and downloaded locally as a .md file.",
      },
    ],
  },
  designer: {
    title: "Learning System Designer",
    intro:
      "A design note for the human-led, ChatGPT-assisted, Codex-implemented workflow behind this prototype.",
    sections: [
      {
        heading: "User misconception",
        body: "The design starts from a common non-expert problem: dental terminology, quotes, records, and cross-border logistics can become mixed together.",
      },
      {
        heading: "Scaffold step",
        body: "The system separates original wording, plain-language organization, user interpretation, missing records, and questions for dentists.",
      },
      {
        heading: "Output artifact",
        body: "The artifact is a packet for expert review preparation, paired with tests that check boundary statements, red-flag routing, and prohibited wording.",
      },
    ],
  },
  safety: {
    title: "Safety Boundaries",
    intro:
      "The prototype makes the non-clinical boundary explicit because cross-border dental planning can involve urgent, medical, legal, insurance, travel, and cost questions.",
    sections: [
      {
        heading: "Urgent concerns",
        body: "Urgent warning signs route first to local urgent dental or medical evaluation. Ordinary cross-border planning is deferred until that professional evaluation happens.",
      },
      {
        heading: "Clinical exclusions",
        body: "The system must not provide diagnosis, treatment recommendations, image interpretation, medication advice, emergency care, emergency triage, teledentistry, or formal second opinions.",
      },
      {
        heading: "Required packet statement",
        body: BOUNDARY_STATEMENT,
      },
    ],
  },
  examples: {
    title: "Synthetic Examples",
    intro:
      "Three invented cases show how the packet structure handles language, records, quotes, and urgent warning boundaries.",
    sections: [
      {
        heading: "Synthetic only",
        body: "Every example is fictional, non-identifiable, and written to test the packet structure rather than clinical performance.",
      },
      {
        heading: "What examples can show",
        body: "Examples can show how to organize goals, known facts, unknowns, language questions, broad logistics, records, and dentist-review questions.",
      },
      {
        heading: "What examples cannot show",
        body: "Examples cannot imply a correct diagnosis, recommended treatment, medication plan, image finding, emergency disposition, or travel/waiting safety judgment.",
      },
    ],
  },
  about: {
    title: "About the Lab",
    intro:
      "This repository is portfolio infrastructure for AI-native professional learning system design, using Taiwan-Japan cross-border dental care planning as a bounded first domain.",
    sections: [
      {
        heading: "Portfolio position",
        body: "The project demonstrates disciplined AI-assisted product engineering: strict boundaries, synthetic data, static architecture, explicit review loops, and clear artifact ownership.",
      },
      {
        heading: "Loop engineering",
        body: "The workflow is human-led, ChatGPT-assisted, and Codex-implemented: define the boundary, scaffold the artifact, implement locally, test the output, and review the language.",
      },
      {
        heading: "Reusable pattern",
        body: "The first domain can become a reusable pattern for expert-review preparation systems where AI organizes information but does not decide.",
      },
    ],
  },
} as const;
