import { REQUIRED_BOUNDARY_STATEMENT } from "@/lib/boundaryChecks";

export function BoundaryStatement() {
  return (
    <aside className="boundary-statement" aria-label="AI boundary statement">
      <h2>AI boundary statement</h2>
      <p>{REQUIRED_BOUNDARY_STATEMENT}</p>
    </aside>
  );
}
