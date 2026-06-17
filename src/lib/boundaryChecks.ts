export const REQUIRED_BOUNDARY_STATEMENT =
  "This packet organizes cross-border dental care planning information only. It is not diagnosis, treatment recommendation, image interpretation, medication advice, emergency care, waiting-safety judgment, travel-safety judgment, teledentistry, or formal second opinion. Final diagnosis, treatment decisions, and whether it is safe to wait or travel require dentist or medical professional evaluation.";

export const URGENT_WARNING_NOTICE =
  "This situation should be checked locally first. This project cannot decide whether it is safe to wait, travel, or return home. Please seek local urgent dental or medical evaluation before continuing cross-border planning.";

export const PROHIBITED_ENGLISH_PHRASES = [
  "you should return to Taiwan",
  "you should return to Japan",
  "you should stay in Japan",
  "you should stay in Taiwan",
  "it is safe to wait",
  "it is safe to fly",
  "it is okay to delay",
  "this treatment is necessary",
  "this treatment is unnecessary",
  "the dentist is right",
  "the dentist is wrong",
] as const;

export const PROHIBITED_CHINESE_PHRASES = [
  "你應該回台灣",
  "你應該回日本",
  "可以等",
  "可以飛",
  "建議你做",
  "不需要做",
] as const;

export const PROHIBITED_JAPANESE_PHRASES = [
  "この治療を受けるべき",
  "帰国すべき",
  "待ってよい",
  "飛行機に乗ってよい",
] as const;

export const PROHIBITED_MATRIX_LABELS = [
  "Recommendation Matrix",
  "Best Option Table",
  "Treatment Recommendation",
  "Travel Recommendation",
] as const;

export type ProhibitedAdviceHit = {
  phrase: string;
  category: "english" | "chinese" | "japanese" | "matrix-label";
};

export function includesRequiredBoundary(markdown: string): boolean {
  return markdown.includes(REQUIRED_BOUNDARY_STATEMENT);
}

export function findProhibitedAdvice(markdown: string): ProhibitedAdviceHit[] {
  const normalized = markdown
    .replaceAll(REQUIRED_BOUNDARY_STATEMENT, "")
    .replaceAll(URGENT_WARNING_NOTICE, "");

  return [
    ...findHits(normalized, PROHIBITED_ENGLISH_PHRASES, "english"),
    ...findHits(normalized, PROHIBITED_CHINESE_PHRASES, "chinese"),
    ...findHits(normalized, PROHIBITED_JAPANESE_PHRASES, "japanese"),
    ...findHits(normalized, PROHIBITED_MATRIX_LABELS, "matrix-label"),
  ];
}

export function assertNoProhibitedAdvice(markdown: string): void {
  const hits = findProhibitedAdvice(markdown);

  if (hits.length > 0) {
    const phrases = hits.map((hit) => `${hit.category}: ${hit.phrase}`);
    throw new Error(`Prohibited advice language found: ${phrases.join(", ")}`);
  }
}

function findHits(
  markdown: string,
  phrases: readonly string[],
  category: ProhibitedAdviceHit["category"],
): ProhibitedAdviceHit[] {
  const lowerMarkdown = markdown.toLocaleLowerCase();

  return phrases
    .filter((phrase) => lowerMarkdown.includes(phrase.toLocaleLowerCase()))
    .map((phrase) => ({ phrase, category }));
}
