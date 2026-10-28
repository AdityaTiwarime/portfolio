import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "../App";
import { monthIndex, spanLength } from "../components/TraceHero";
import { projects, resumes } from "../data";

describe("trace maths", () => {
  it("counts months across a year boundary", () => {
    expect(monthIndex("2026-01") - monthIndex("2025-12")).toBe(1);
  });
  it("labels short spans in months and long spans in years", () => {
    expect(spanLength({ start: "2025-04", end: "2025-06" })).toBe("3 mo");
    expect(spanLength({ start: "2022-08", end: "2026-08" })).toBe("4 yr");
  });
});

describe("portfolio page", () => {
  it("shows the name and every project", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: "Aditya Tiwari" })).toBeInTheDocument();
    const list = screen.getByRole("heading", { name: "Projects" }).closest("section")!;
    for (const p of projects) {
      expect(within(list).getByText(p.name)).toBeInTheDocument();
    }
  });

  it("filters projects by area", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole("button", { name: /Data and AI/ }));
    expect(screen.getByRole("button", { name: /Data and AI/ })).toHaveAttribute("aria-pressed", "true");
    expect(screen.queryByText("ClaimFlow")).not.toBeInTheDocument();
    expect(screen.getByText("RESILIENCE")).toBeInTheDocument();
  });

  it("expands one project at a time", async () => {
    const user = userEvent.setup();
    render(<App />);
    const claimflow = screen.getByRole("button", { name: /ClaimFlow/ });
    expect(claimflow).toHaveAttribute("aria-expanded", "false");
    await user.click(claimflow);
    expect(claimflow).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: /ServScope/ })).toHaveAttribute("aria-expanded", "false");
    expect(screen.getAllByRole("link", { name: "Read the code on GitHub" })[0]).toHaveAttribute(
      "href",
      "https://github.com/AdityaTiwarime/claimflow",
    );
  });

  it("trace spans are buttons that describe where they lead", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: /System Engineer Trainee, JTP.*6 mo/ })).toBeInTheDocument();
  });

  it("offers every resume as a download", () => {
    render(<App />);
    for (const r of resumes) {
      expect(screen.getByRole("link", { name: `${r.label} resume (PDF)` })).toHaveAttribute("href", r.file);
    }
  });
});
