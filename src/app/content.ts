export const BOUNDARY_STATEMENT =
  "This packet organizes cross-border dental care planning information only. It is not diagnosis, treatment recommendation, image interpretation, medication advice, emergency care, waiting-safety judgment, travel-safety judgment, teledentistry, or formal second opinion. Final diagnosis, treatment decisions, and whether it is safe to wait or travel require dentist or medical professional evaluation.";

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
      "A local-first, synthetic-first, AI-native professional learning system prototype for preparing expert-review packets before cross-border dental visits.",
    sections: [
      {
        heading: "What it is",
        body: "The lab demonstrates how AI-native workflows can help a person structure decision-relevant dental planning information without making clinical decisions. Dental visit planning between Taiwan and Japan is the first domain.",
      },
      {
        heading: "Who it helps",
        body: "It is designed for learners, researchers, and builders studying professional learning systems where a human leads the work, ChatGPT helps shape the approach, and Codex implements a verifiable local artifact.",
      },
      {
        heading: "What it produces",
        body: "The intended artifact is an expert-review preparation packet: a clean summary of user goals, known facts, questions for a dentist, cross-border logistics, uncertainty, and safety boundaries.",
      },
    ],
  },
  framework: {
    title: "Cross-Border Decision Prep Framework",
    intro:
      "A non-clinical structure for organizing information before a Taiwan-Japan dental care discussion.",
    sections: [
      {
        heading: "Collect",
        body: "Gather synthetic case context, goals, timing constraints, prior visit notes, language needs, and questions that should be reviewed by a dentist.",
      },
      {
        heading: "Separate",
        body: "Keep facts, assumptions, user concerns, logistics, and clinical questions visibly separate so the packet does not imply diagnosis or treatment advice.",
      },
      {
        heading: "Scaffold and bound",
        body: "Use a consistent packet scaffold, then label what the system cannot answer: diagnosis, treatment choice, image meaning, medication, timing safety, travel safety, and emergency triage.",
      },
      {
        heading: "Artifact, review, learn",
        body: "Produce a concise preparation artifact for expert review, inspect it against safety boundaries, and improve the learning system without adding clinical decision behavior.",
      },
    ],
  },
  demo: {
    title: "Synthetic Demo Packet Placeholder",
    intro:
      "Synthetic demo cases will be added in a later gate. This page reserves the packet surface while keeping the prototype static and non-clinical.",
    sections: [
      {
        heading: "Packet boundary",
        body: BOUNDARY_STATEMENT,
      },
      {
        heading: "Future synthetic packet sections",
        body: "A later gate may add invented case goals, timeline, location context, dentist questions, translation notes, and review prompts. It will not accept uploads or real patient data.",
      },
      {
        heading: "No clinical output",
        body: "The demo will avoid diagnosis, treatment recommendation, image interpretation, medication advice, emergency triage, waiting-safety judgment, travel-safety judgment, teledentistry, and formal second-opinion framing.",
      },
    ],
  },
  designer: {
    title: "Learning System Designer",
    intro:
      "A design note for the human-led, ChatGPT-assisted, Codex-implemented workflow behind this prototype.",
    sections: [
      {
        heading: "Human-led",
        body: "The human defines the professional learning goal, domain boundary, and review standard. The system exists to make reasoning artifacts inspectable, not to replace professional judgment.",
      },
      {
        heading: "ChatGPT-assisted",
        body: "ChatGPT helps shape prompts, learning loops, documentation, and review criteria while staying inside a decision-preparation frame.",
      },
      {
        heading: "Codex-implemented",
        body: "Codex turns the bounded design into local code, docs, tests, and checks that can be reviewed without sending data to a backend or model service.",
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
        body: "Urgent warning signs must be routed to local urgent dental or medical evaluation. This prototype does not decide whether a user can wait, travel, fly, or return to Taiwan or Japan.",
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
      "Examples will be invented and labeled as synthetic so the repository never contains real patient data.",
    sections: [
      {
        heading: "Synthetic only",
        body: "Every future example must be fictional, non-identifiable, and written to test the packet structure rather than clinical performance.",
      },
      {
        heading: "What examples can show",
        body: "Examples may show how to organize goals, known facts, unknowns, language questions, travel logistics, and dentist-review questions.",
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
        heading: "Not a clinical product",
        body: "The prototype is not a dental advice tool, patient portal, teledentistry workflow, insurance tool, cost estimator, travel-safety checker, or second-opinion service.",
      },
      {
        heading: "Gate 0 and Gate 1",
        body: "This gate establishes the local repository, Next.js TypeScript scaffold, test baseline, static pages, and foundational documentation for later bounded work.",
      },
    ],
  },
} as const;
