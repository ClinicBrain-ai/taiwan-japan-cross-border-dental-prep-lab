import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConsiderationMatrix } from "@/components/ConsiderationMatrix";
import { DemoClient } from "@/components/DemoClient";
import { DownloadMarkdownButton } from "@/components/DownloadMarkdownButton";
import {
  findProhibitedAdvice,
  REQUIRED_BOUNDARY_STATEMENT,
  URGENT_WARNING_NOTICE,
} from "@/lib/boundaryChecks";
import { generateCrossBorderPacket } from "@/lib/generateCrossBorderPacket";
import { syntheticCases } from "@/lib/syntheticCases";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("Gate 5 demo UI components", () => {
  it("renders synthetic labels and case summaries", () => {
    render(<DemoClient />);

    expect(screen.getAllByText(/Synthetic/).length).toBeGreaterThanOrEqual(3);
    expect(screen.getByText("SYN-TJ-DENTAL-001")).toBeTruthy();
  });

  it("generates a packet preview from synthetic case data", () => {
    render(<DemoClient />);

    const preview = screen.getByTestId("packet-preview");

    expect(preview.textContent).toContain("SYN-TJ-DENTAL-001");
    expect(preview.textContent).toContain(REQUIRED_BOUNDARY_STATEMENT);
    expect(generateCrossBorderPacket(syntheticCases[0])).toContain(
      "## Consideration Matrix",
    );
  });

  it("shows the urgent warning notice for the red-flag synthetic case", () => {
    render(<DemoClient />);

    fireEvent.click(screen.getByRole("button", { name: /SYN-TJ-DENTAL-003/ }));

    expect(screen.getByText(URGENT_WARNING_NOTICE)).toBeTruthy();
    expect(screen.getByTestId("packet-preview").textContent).toContain(
      URGENT_WARNING_NOTICE,
    );
  });

  it("renders the red-flag notice before the packet preview", () => {
    render(<DemoClient />);

    fireEvent.click(screen.getByRole("button", { name: /SYN-TJ-DENTAL-003/ }));

    const notice = screen.getByRole("note", { name: "Urgent warning notice" });
    const preview = screen.getByTestId("packet-preview");
    const position = notice.compareDocumentPosition(preview);

    expect(position & 4).toBe(4);
  });

  it("uses local Blob and object URL behavior for Markdown download", () => {
    const createObjectUrl = vi.fn(() => "blob:local-markdown");
    const revokeObjectUrl = vi.fn();
    const click = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => undefined);

    Object.defineProperty(URL, "createObjectURL", {
      configurable: true,
      value: createObjectUrl,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      configurable: true,
      value: revokeObjectUrl,
    });

    render(
      <DownloadMarkdownButton
        caseId="SYN-TJ-DENTAL-001"
        markdown="# Synthetic packet"
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /Download .md packet/ }));

    expect(createObjectUrl).toHaveBeenCalledWith(expect.any(Blob));
    expect(click).toHaveBeenCalledTimes(1);
    expect(revokeObjectUrl).toHaveBeenCalledWith("blob:local-markdown");
  });

  it("does not render patient text fields, editable areas, or file controls", () => {
    const { container } = render(<DemoClient />);

    expect(container.querySelector("input")).toBeNull();
    expect(container.querySelector("textarea")).toBeNull();
    expect(container.querySelector("[contenteditable='true']")).toBeNull();
  });

  it("does not use unsafe HTML injection in components", () => {
    const componentText = readDirectoryText(join(process.cwd(), "src", "components"));
    const unsafeToken = ["dangerously", "Set", "Inner", "HTML"].join("");

    expect(componentText).not.toContain(unsafeToken);
  });

  it("does not render prohibited advice language outside required notices", () => {
    const { container } = render(<DemoClient />);
    const text = container.textContent ?? "";

    expect(findProhibitedAdvice(text)).toEqual([]);
  });

  it("uses the question-only matrix label and avoids disallowed labels", () => {
    render(<ConsiderationMatrix />);

    expect(
      screen.getByRole("heading", { name: "Consideration Matrix" }),
    ).toBeTruthy();
    expect(screen.queryByText(["Recommendation", "Matrix"].join(" "))).toBeNull();
  });

  it("does not add network helper tokens or API route files", () => {
    const srcText = readDirectoryText(join(process.cwd(), "src"));
    const tokens = [
      ["fe", "tch"].join(""),
      ["ax", "ios"].join(""),
      ["XML", "Http", "Request"].join(""),
      ["navigator", ".", "send", "Beacon"].join(""),
    ];

    for (const token of tokens) {
      expect(srcText).not.toContain(token);
    }

    expect(existsSync(join(process.cwd(), "src", "app", "api"))).toBe(false);
  });
});

function readDirectoryText(directory: string): string {
  return readdirSync(directory)
    .map((entry) => {
      const fullPath = join(directory, entry);

      if (statSync(fullPath).isDirectory()) {
        return readDirectoryText(fullPath);
      }

      return readFileSync(fullPath, "utf8");
    })
    .join("\n");
}
