import { render, screen } from "@testing-library/react";
import { Projects } from "@/components/sections/projects";
import { describe, it, expect } from "vitest";

describe("Projects Section", () => {
  it("renders the section heading", () => {
    render(<Projects />);
    expect(screen.getAllByText(/Projects/i).length).toBeGreaterThan(0);
  });

  it("renders project cards", () => {
    render(<Projects />);
    expect(screen.getAllByRole("article").length).toBeGreaterThan(0);
  });

  it("renders project titles and stacks", () => {
    render(<Projects />);
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBeGreaterThan(0);
  });
});
