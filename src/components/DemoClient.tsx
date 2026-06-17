"use client";

import { useMemo, useState } from "react";
import { REQUIRED_BOUNDARY_STATEMENT } from "@/lib/boundaryChecks";
import { generateCrossBorderPacket } from "@/lib/generateCrossBorderPacket";
import type { SyntheticCase } from "@/lib/packetSchema";
import { syntheticCases } from "@/lib/syntheticCases";
import { BoundaryStatement } from "./BoundaryStatement";
import { ConsiderationMatrix } from "./ConsiderationMatrix";
import { CrossBorderPacketPreview } from "./CrossBorderPacketPreview";
import { DemoCasePicker } from "./DemoCasePicker";
import { DownloadMarkdownButton } from "./DownloadMarkdownButton";
import { LanguageToggle } from "./LanguageToggle";
import { RedFlagNotice } from "./RedFlagNotice";
import { SyntheticLabel } from "./SyntheticLabel";

type DemoClientProps = {
  cases?: readonly SyntheticCase[];
};

export function DemoClient({ cases = syntheticCases }: DemoClientProps) {
  const [selectedCaseId, setSelectedCaseId] = useState(cases[0]?.case_id ?? "");
  const selectedCase = useMemo(
    () => cases.find((caseData) => caseData.case_id === selectedCaseId) ?? cases[0],
    [cases, selectedCaseId],
  );
  const markdown = useMemo(
    () => (selectedCase ? generateCrossBorderPacket(selectedCase) : ""),
    [selectedCase],
  );

  if (!selectedCase) {
    return (
      <section className="demo-workspace">
        <p>No synthetic cases are available.</p>
      </section>
    );
  }

  return (
    <section className="demo-workspace" aria-label="Synthetic packet demo">
      <div className="demo-sidebar">
        <LanguageToggle />
        <DemoCasePicker
          cases={cases}
          onSelectCase={setSelectedCaseId}
          selectedCaseId={selectedCase.case_id}
        />
        <ConsiderationMatrix rows={selectedCase.consideration_matrix} />
      </div>
      <div className="demo-main">
        <RedFlagNotice
          active={selectedCase.urgent_warning_sign_check.red_flags_present}
        />
        <section className="selected-case-panel" aria-labelledby="selected-case-title">
          <div className="panel-heading">
            <p className="section-kicker">For learning-system design demonstration only</p>
            <h2 id="selected-case-title">Expert-review preparation packet</h2>
          </div>
          <div className="selected-case-meta">
            <SyntheticLabel />
            <span>Decision preparation, not decision making</span>
            <span>No real patient data</span>
          </div>
          <p>{selectedCase.scenario}</p>
          <p>
            Direction: {selectedCase.user_context.current_country} →{" "}
            {selectedCase.user_context.home_country_review_context}
          </p>
          <p>
            Boundary included:{" "}
            {markdown.includes(REQUIRED_BOUNDARY_STATEMENT) ? "yes" : "no"}
          </p>
          <DownloadMarkdownButton caseId={selectedCase.case_id} markdown={markdown} />
        </section>
        <BoundaryStatement />
        <CrossBorderPacketPreview caseId={selectedCase.case_id} markdown={markdown} />
      </div>
    </section>
  );
}
