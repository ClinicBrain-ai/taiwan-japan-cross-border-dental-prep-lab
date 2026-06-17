"use client";

import type { SyntheticCase } from "@/lib/packetSchema";
import { SyntheticLabel } from "./SyntheticLabel";

type DemoCasePickerProps = {
  cases: readonly SyntheticCase[];
  selectedCaseId: string;
  onSelectCase: (caseId: string) => void;
};

export function DemoCasePicker({
  cases,
  selectedCaseId,
  onSelectCase,
}: DemoCasePickerProps) {
  return (
    <section className="case-picker" aria-labelledby="case-picker-title">
      <div className="panel-heading">
        <p className="section-kicker">Local-first demo</p>
        <h2 id="case-picker-title">Synthetic case set</h2>
      </div>
      <div className="case-button-list">
        {cases.map((caseData) => (
          <button
            aria-pressed={caseData.case_id === selectedCaseId}
            className="case-button"
            key={caseData.case_id}
            onClick={() => onSelectCase(caseData.case_id)}
            type="button"
          >
            <span className="case-button-topline">
              <strong>{caseData.case_id}</strong>
              <SyntheticLabel text="Synthetic" />
            </span>
            <span>{caseData.scenario}</span>
            <small>
              {caseData.user_context.current_country} →{" "}
              {caseData.user_context.home_country_review_context}
            </small>
          </button>
        ))}
      </div>
    </section>
  );
}
