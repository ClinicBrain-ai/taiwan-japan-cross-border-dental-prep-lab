import { describe, expect, it } from "vitest";
import { BOUNDARY_STATEMENT, pageContent } from "./content";

describe("project placeholder content", () => {
  it("keeps the required boundary statement exact", () => {
    expect(BOUNDARY_STATEMENT).toBe(
      "This packet organizes cross-border dental care planning information only. It is not diagnosis, treatment recommendation, image interpretation, medication advice, emergency care, waiting-safety judgment, travel-safety judgment, teledentistry, or formal second opinion. Final diagnosis, treatment decisions, and whether it is safe to wait or travel require dentist or medical professional evaluation.",
    );
  });

  it("defines initial static page content for all requested routes", () => {
    expect(Object.keys(pageContent).sort()).toEqual([
      "about",
      "demo",
      "designer",
      "examples",
      "framework",
      "home",
      "safety",
    ]);
  });
});
