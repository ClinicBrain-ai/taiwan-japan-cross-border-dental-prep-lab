import { REQUIRED_BOUNDARY_STATEMENT, URGENT_WARNING_NOTICE } from "./boundaryChecks";
import type { SyntheticCase } from "./packetSchema";

export const syntheticCases: readonly SyntheticCase[] = [
  {
    case_id: "SYN-TJ-DENTAL-001",
    synthetic: true,
    synthetic_notice:
      "Synthetic training case. Contains no real names, clinic names, addresses, phone numbers, emails, patient IDs, passport numbers, My Number, resident card numbers, insurance numbers, precise birthdays, or identifying dates.",
    scenario:
      "A Taiwanese adult in Japan received a Japanese dental explanation and implant-related quote. The user does not fully understand the quote and wants to organize information for possible Taiwan dentist review.",
    user_context: {
      current_country: "Japan",
      home_country_review_context: "Taiwan",
      language_context:
        "Japanese explanation received; Traditional Chinese organization requested",
      identity_notes: "Non-identifying adult profile only",
    },
    urgent_warning_sign_check: {
      red_flags_present: false,
      reported_checks: {
        worsening_facial_or_gum_swelling: false,
        fever_with_dental_pain_or_swelling: false,
        difficulty_swallowing: false,
        difficulty_breathing: false,
        severe_uncontrolled_pain: false,
        pus_or_spreading_infection: false,
        trauma: false,
        persistent_or_uncontrolled_bleeding: false,
      },
    },
    main_concern:
      "The user wants to organize the Japanese explanation and quote into a bilingual expert-review packet for possible Taiwan dentist review.",
    symptom_timeline: [
      "Broad timing only: dental consultation occurred recently.",
      "No precise dates are included.",
    ],
    local_dentist_statement: {
      original_wording_fragments: [
        "奥歯の欠損部についてインプラント治療の説明を受けた",
        "骨の状態を確認するために追加資料が必要かもしれない",
        "見積もりには手術費、上部構造、仮歯、検査費用が含まれる可能性がある",
      ],
      translation_plain_language_organization: [
        "日本診所說明的是缺牙區域的植牙相關選項與估價項目。",
        "需要整理哪些費用項目已包含、哪些仍不確定。",
        "影像與檢查資料只作為紀錄或附件，不在本專案中解讀。",
      ],
      user_interpretation: [
        "使用者不確定報價是否包含所有階段。",
        "使用者不確定如果之後在台灣諮詢，需要準備哪些資料。",
      ],
      what_remains_unclear: [
        "報價項目是否包含術前檢查、臨時牙、正式假牙與回診。",
        "是否已有足夠紀錄供另一位牙醫做專業評估。",
        "治療階段與回診安排需要由牙醫說明。",
      ],
    },
    quote_or_treatment_plan_organization: {
      line_items_to_clarify: [
        "Consultation or examination fee",
        "Surgical fee",
        "Implant body or material item",
        "Temporary tooth if applicable",
        "Final prosthetic component",
        "Follow-up visits",
        "Imaging or record-copy costs",
      ],
      non_decision_note:
        "This case does not validate the quote and does not assert clinical necessity for implant-related care.",
    },
    available_records: [
      "Written quote summary",
      "General consultation summary",
      "Panoramic X-ray noted as available record only",
    ],
    missing_records: [
      "Local dental radiographs for the relevant area if available",
      "CBCT / DICOM if already available",
      "Periodontal records if already available",
      "Detailed treatment staging notes",
    ],
    why_missing_records_may_matter: [
      "Records may help a Taiwan dentist understand what was already discussed.",
      "Records may reduce repeated explanation and support continuity-of-care review.",
      "Image-related records are attachments only and are not interpreted by this project.",
    ],
    language_and_communication_concerns: [
      "Japanese dental terms may need original wording preserved.",
      "Traditional Chinese organization should separate dentist wording from user interpretation.",
    ],
    timeline_and_travel_constraints: [
      "The user has broad travel-planning constraints but no precise dates are included.",
      "The packet does not decide timing, travel, or care location.",
    ],
    consideration_matrix: [
      {
        area: "Cost",
        questions_if_staying_in_current_country:
          "Which quoted items need clarification from the Japan clinic?",
        questions_if_seeking_care_in_home_country:
          "What estimate questions should be prepared for Taiwan dentist review?",
      },
      {
        area: "Records",
        questions_if_staying_in_current_country:
          "Which records can be requested from the Japan clinic?",
        questions_if_seeking_care_in_home_country:
          "Which records should be organized for Taiwan review?",
      },
      {
        area: "Follow-up care",
        questions_if_staying_in_current_country:
          "What follow-up schedule did the Japan dentist describe?",
        questions_if_seeking_care_in_home_country:
          "What continuity questions should be prepared for Taiwan review?",
      },
    ],
    questions_for_local_dentist: [
      "Which quote items are included and which are separate?",
      "What records can be provided for future professional review?",
      "What follow-up stages were discussed?",
    ],
    questions_for_home_country_dentist: [
      "What records would be useful to review before discussing possible care?",
      "What questions should be clarified from the Japan clinic before review?",
      "What continuity issues should be discussed professionally?",
    ],
    ai_boundary_statement: REQUIRED_BOUNDARY_STATEMENT,
  },
  {
    case_id: "SYN-TJ-DENTAL-002",
    synthetic: true,
    synthetic_notice:
      "Synthetic training case. Contains no real names, clinic names, addresses, phone numbers, emails, patient IDs, passport numbers, My Number, resident card numbers, insurance numbers, precise birthdays, or identifying dates.",
    scenario:
      "A Japanese adult in Taiwan received a Mandarin explanation and root-canal/crown-related treatment plan. The user wants to organize information for possible Japan dentist review.",
    user_context: {
      current_country: "Taiwan",
      home_country_review_context: "Japan",
      language_context: "Mandarin explanation received; Japanese organization requested",
      identity_notes: "Non-identifying adult profile only",
    },
    urgent_warning_sign_check: {
      red_flags_present: false,
      reported_checks: {
        worsening_facial_or_gum_swelling: false,
        fever_with_dental_pain_or_swelling: false,
        difficulty_swallowing: false,
        difficulty_breathing: false,
        severe_uncontrolled_pain: false,
        pus_or_spreading_infection: false,
        trauma: false,
        persistent_or_uncontrolled_bleeding: false,
      },
    },
    main_concern:
      "The user wants to organize a Mandarin explanation and estimate into a bilingual expert-review packet for possible Japan dentist review.",
    symptom_timeline: [
      "Broad timing only: consultation occurred recently.",
      "No precise dates are included.",
    ],
    local_dentist_statement: {
      original_wording_fragments: [
        "這顆牙需要進一步評估根管與牙冠的處理方式",
        "費用會依根管治療、牙釘、臨時牙冠與正式牙冠而不同",
        "可能需要分次回診",
      ],
      translation_plain_language_organization: [
        "台湾の歯科医院では、根管やクラウンに関する処置計画の説明があった。",
        "費用項目は複数に分かれている可能性があるため、項目別に整理する。",
        "画像資料は記録または添付資料として扱い、このプロジェクトでは内容を解釈しない。",
      ],
      user_interpretation: [
        "使用者は費用項目と回数が十分に理解できていない。",
        "日本で相談する場合にどの資料を準備すればよいか知りたい。",
      ],
      what_remains_unclear: [
        "説明された処置の段階と回数。",
        "見積もりに含まれる項目と含まれない項目。",
        "追加記録が必要かどうかは歯科医師の評価が必要。",
      ],
    },
    quote_or_treatment_plan_organization: {
      line_items_to_clarify: [
        "Examination fee",
        "Root-canal-related item",
        "Core or post item if applicable",
        "Temporary crown if applicable",
        "Final crown item",
        "Follow-up visits",
        "Record-copy costs",
      ],
      non_decision_note:
        "This case does not validate the plan and does not assert clinical necessity for root-canal- or crown-related care.",
    },
    available_records: [
      "Written estimate summary",
      "Mandarin consultation notes fragment",
      "Local dental radiograph noted as available record only",
    ],
    missing_records: [
      "Panoramic X-ray if already available",
      "Detailed treatment plan",
      "Clinical notes or consultation summary",
      "Periodontal records if already available",
    ],
    why_missing_records_may_matter: [
      "Records may help a Japan dentist understand what the Taiwan clinic already explained.",
      "Records may support continuity-of-care review without relying only on memory.",
      "Image-related records are attachments only and are not interpreted by this project.",
    ],
    cost_insurance_self_pay_questions: [
      "Which items are self-pay?",
      "Which items are estimates rather than final amounts?",
      "What questions should be prepared about reimbursement or coverage?",
    ],
    language_and_communication_concerns: [
      "Mandarin terms should be preserved as original wording where possible.",
      "Japanese organization should separate the dentist statement from user interpretation.",
    ],
    timeline_and_travel_constraints: [
      "The user has broad cross-border scheduling constraints but no precise dates are included.",
      "The packet does not decide timing, travel, or care location.",
    ],
    consideration_matrix: [
      {
        area: "Treatment stages",
        questions_if_staying_in_current_country:
          "What stages did the Taiwan dentist describe?",
        questions_if_seeking_care_in_home_country:
          "What stage-related questions should be prepared for Japan dentist review?",
      },
      {
        area: "Insurance",
        questions_if_staying_in_current_country:
          "Which Taiwan cost items are self-pay or uncertain?",
        questions_if_seeking_care_in_home_country:
          "What Japan coverage questions should be prepared?",
      },
      {
        area: "Language",
        questions_if_staying_in_current_country:
          "Which Mandarin terms need original wording preserved?",
        questions_if_seeking_care_in_home_country:
          "Which terms need Japanese organization?",
      },
    ],
    questions_for_local_dentist: [
      "Which plan items are included in the estimate?",
      "What records can be provided for future professional review?",
      "What follow-up stages were discussed?",
    ],
    questions_for_home_country_dentist: [
      "What records would be useful before discussing possible care?",
      "What questions should be clarified from the Taiwan clinic before review?",
      "What continuity issues should be discussed professionally?",
    ],
    ai_boundary_statement: REQUIRED_BOUNDARY_STATEMENT,
  },
  {
    case_id: "SYN-TJ-DENTAL-003",
    synthetic: true,
    synthetic_notice:
      "Synthetic training case. Contains no real names, clinic names, addresses, phone numbers, emails, patient IDs, passport numbers, My Number, resident card numbers, insurance numbers, precise birthdays, or identifying dates.",
    scenario:
      "A Taiwanese adult in Japan reports dental pain with worsening facial or gum swelling and fever.",
    user_context: {
      current_country: "Japan",
      home_country_review_context: "Taiwan",
      language_context:
        "Traditional Chinese organization requested after local urgent evaluation",
      identity_notes: "Non-identifying adult profile only",
    },
    urgent_warning_sign_check: {
      red_flags_present: true,
      reported_checks: {
        worsening_facial_or_gum_swelling: true,
        fever_with_dental_pain_or_swelling: true,
        difficulty_swallowing: false,
        difficulty_breathing: false,
        severe_uncontrolled_pain: "unclear",
        pus_or_spreading_infection: "unclear",
        trauma: false,
        persistent_or_uncontrolled_bleeding: false,
      },
      required_notice: URGENT_WARNING_NOTICE,
    },
    planning_status:
      "Planning deferred until local urgent dental or medical evaluation.",
    normal_cross_border_planning: {
      continue_packet_sections_now: false,
      reason: "Urgent warning signs stop normal planning in this learning system.",
    },
    main_concern:
      "The user reports urgent warning signs. Ordinary cross-border planning is deferred until local urgent evaluation.",
    symptom_timeline: [
      "Broad timing only: pain and swelling were reported over a short recent period.",
      "No precise dates are included.",
    ],
    local_dentist_statement: {
      original_wording_fragments: [],
      translation_plain_language_organization: [
        "目前先停止一般跨境規劃準備。",
        "需要先在當地接受急性牙科或醫療評估。",
      ],
      user_interpretation: [
        "使用者擔心是否可以延後處理或跨境安排。",
        "本專案不能回答等待、飛行或返國安全問題。",
      ],
      what_remains_unclear: [
        "症狀原因需要由當地牙醫或醫療專業人員評估。",
        "後續是否能進入跨境規劃準備，需等當地急性評估後再整理。",
      ],
    },
    available_records: [
      "No records included in this synthetic emergency-red-flag case",
    ],
    missing_records: [
      "Local urgent evaluation summary if later available",
      "Any records provided after local evaluation",
    ],
    learning_outcome: [
      "Urgent warning signs stop ordinary planning.",
      "The packet can record that planning is deferred until local urgent evaluation.",
      "The project does not provide medication advice, antibiotic advice, clinical conclusions, or travel/waiting safety judgments.",
    ],
    questions_after_local_evaluation_only: [
      "What records from the local urgent evaluation can be kept for later review?",
      "What follow-up instructions did the local professional provide?",
      "What questions remain for a dentist after the urgent concern is locally evaluated?",
    ],
    ai_boundary_statement: REQUIRED_BOUNDARY_STATEMENT,
  },
] as const;

export function getSyntheticCaseById(caseId: string): SyntheticCase | undefined {
  return syntheticCases.find((caseData) => caseData.case_id === caseId);
}

export function assertAllCasesAreSynthetic(
  cases: readonly SyntheticCase[] = syntheticCases,
): void {
  const nonSyntheticCase = cases.find((caseData) => caseData.synthetic !== true);

  if (nonSyntheticCase) {
    throw new Error(`Case is not marked synthetic: ${nonSyntheticCase.case_id}`);
  }
}
