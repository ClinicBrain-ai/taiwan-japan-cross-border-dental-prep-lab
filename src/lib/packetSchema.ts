export type UrgentFlagValue = boolean | "unclear";

export type UrgentFlagKey =
  | "worsening_facial_or_gum_swelling"
  | "fever_with_dental_pain_or_swelling"
  | "difficulty_swallowing"
  | "difficulty_breathing"
  | "severe_uncontrolled_pain"
  | "pus_or_spreading_infection"
  | "trauma"
  | "persistent_or_uncontrolled_bleeding";

export type UrgentWarningChecks = Record<UrgentFlagKey, UrgentFlagValue>;

export type UserContext = {
  current_country: string;
  home_country_review_context: string;
  language_context: string;
  identity_notes: string;
};

export type UrgentWarningSignCheck = {
  red_flags_present: boolean;
  reported_checks: UrgentWarningChecks;
  required_notice?: string;
};

export type LocalDentistStatement = {
  original_wording_fragments: string[];
  translation_plain_language_organization: string[];
  user_interpretation: string[];
  what_remains_unclear: string[];
};

export type QuoteTreatmentPlanOrganization = {
  line_items_to_clarify: string[];
  non_decision_note: string;
};

export type ConsiderationMatrixRow = {
  area: string;
  questions_if_staying_in_current_country: string;
  questions_if_seeking_care_in_home_country: string;
};

export type GeneratedPacketMetadata = {
  caseId: string;
  synthetic: true;
  generatedBy: "local-deterministic-generator";
  domain: "taiwan-japan-cross-border-dental-prep";
};

export type SyntheticCase = {
  case_id: string;
  synthetic: true;
  synthetic_notice: string;
  scenario: string;
  user_context: UserContext;
  urgent_warning_sign_check: UrgentWarningSignCheck;
  main_concern: string;
  symptom_timeline: string[];
  local_dentist_statement: LocalDentistStatement;
  quote_or_treatment_plan_organization?: QuoteTreatmentPlanOrganization;
  available_records: string[];
  missing_records: string[];
  why_missing_records_may_matter?: string[];
  follow_up_and_staging_considerations?: string[];
  cost_insurance_self_pay_questions?: string[];
  language_and_communication_concerns?: string[];
  timeline_and_travel_constraints?: string[];
  consideration_matrix?: ConsiderationMatrixRow[];
  questions_for_local_dentist?: string[];
  questions_for_home_country_dentist?: string[];
  planning_status?: string;
  normal_cross_border_planning?: {
    continue_packet_sections_now: boolean;
    reason: string;
  };
  learning_outcome?: string[];
  questions_after_local_evaluation_only?: string[];
  ai_boundary_statement: string;
};
