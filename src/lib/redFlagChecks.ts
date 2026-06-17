import type { SyntheticCase, UrgentFlagKey } from "./packetSchema";

export const URGENT_FLAG_LABELS: Record<UrgentFlagKey, string> = {
  worsening_facial_or_gum_swelling:
    "facial or gum swelling that is worsening",
  fever_with_dental_pain_or_swelling: "fever with dental pain or swelling",
  difficulty_swallowing: "difficulty swallowing",
  difficulty_breathing: "difficulty breathing",
  severe_uncontrolled_pain: "severe uncontrolled pain",
  pus_or_spreading_infection: "pus or spreading infection",
  trauma: "trauma",
  persistent_or_uncontrolled_bleeding:
    "persistent or uncontrolled bleeding",
};

export type UrgentWarningResult = {
  hasUrgentRedFlags: boolean;
  triggeredFlags: string[];
  unclearFlags: string[];
};

export function detectUrgentWarningSigns(
  caseData: SyntheticCase,
): UrgentWarningResult {
  const reportedChecks = caseData.urgent_warning_sign_check.reported_checks;
  const triggeredFlags: string[] = [];
  const unclearFlags: string[] = [];

  for (const key of Object.keys(URGENT_FLAG_LABELS) as UrgentFlagKey[]) {
    const value = reportedChecks[key];

    if (value === true) {
      triggeredFlags.push(URGENT_FLAG_LABELS[key]);
    }

    if (value === "unclear") {
      unclearFlags.push(URGENT_FLAG_LABELS[key]);
    }
  }

  return {
    hasUrgentRedFlags:
      caseData.urgent_warning_sign_check.red_flags_present ||
      triggeredFlags.length > 0,
    triggeredFlags,
    unclearFlags,
  };
}
