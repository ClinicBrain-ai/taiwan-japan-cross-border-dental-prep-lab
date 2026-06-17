import type { ConsiderationMatrixRow } from "@/lib/packetSchema";

const DEFAULT_ROWS: readonly ConsiderationMatrixRow[] = [
  {
    area: "Urgency",
    questions_if_staying_in_current_country:
      "What needs local professional evaluation before ordinary planning continues?",
    questions_if_seeking_care_in_home_country:
      "What local evaluation result should be summarized for later review?",
  },
  {
    area: "Records",
    questions_if_staying_in_current_country:
      "Which records can be requested from the current clinic?",
    questions_if_seeking_care_in_home_country:
      "Which records would support continuity-of-care review?",
  },
  {
    area: "Language",
    questions_if_staying_in_current_country:
      "Which original terms should be preserved exactly?",
    questions_if_seeking_care_in_home_country:
      "Which terms need plain-language organization for review?",
  },
  {
    area: "Timeline",
    questions_if_staying_in_current_country:
      "What scheduling constraints should be documented as context?",
    questions_if_seeking_care_in_home_country:
      "What timeline questions should be prepared for professional review?",
  },
];

type ConsiderationMatrixProps = {
  rows?: readonly ConsiderationMatrixRow[];
};

export function ConsiderationMatrix({ rows = DEFAULT_ROWS }: ConsiderationMatrixProps) {
  return (
    <section className="matrix-panel" aria-labelledby="consideration-matrix-title">
      <h2 id="consideration-matrix-title">Consideration Matrix</h2>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Area</th>
              <th>Questions if staying in current country</th>
              <th>Questions if seeking care in home country</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.area}>
                <th scope="row">{row.area}</th>
                <td>{row.questions_if_staying_in_current_country}</td>
                <td>{row.questions_if_seeking_care_in_home_country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
