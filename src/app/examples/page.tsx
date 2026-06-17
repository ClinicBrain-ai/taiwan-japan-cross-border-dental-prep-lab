import Link from "next/link";
import { SyntheticLabel } from "@/components/SyntheticLabel";
import { syntheticCases } from "@/lib/syntheticCases";
import { pageContent } from "../content";
import { PageShell } from "../page-shell";

export default function ExamplesPage() {
  return (
    <PageShell currentPath="/examples" {...pageContent.examples}>
      <section className="examples-list" aria-label="Synthetic case summaries">
        {syntheticCases.map((caseData) => (
          <article className="example-row" key={caseData.case_id}>
            <div>
              <SyntheticLabel text="Synthetic case" />
              <h2>{caseData.case_id}</h2>
              <p>{caseData.scenario}</p>
            </div>
            <dl>
              <div>
                <dt>Current country</dt>
                <dd>{caseData.user_context.current_country}</dd>
              </div>
              <div>
                <dt>Review context</dt>
                <dd>{caseData.user_context.home_country_review_context}</dd>
              </div>
              <div>
                <dt>Urgent warning signs</dt>
                <dd>
                  {caseData.urgent_warning_sign_check.red_flags_present
                    ? "Present in synthetic case"
                    : "Not reported in synthetic case"}
                </dd>
              </div>
            </dl>
          </article>
        ))}
        <Link className="text-link" href="/demo">
          Preview generated packets in the synthetic demo
        </Link>
      </section>
    </PageShell>
  );
}
