import { render, screen } from "@testing-library/react";
import { Skills } from "@/components/sections/skills";
import { describe, it, expect } from "vitest";

describe("Skills Section", () => {
  it("renders the section heading", () => {
    render(<Skills />);
    expect(screen.getAllByText(/Skills/i).length).toBeGreaterThan(0);
  });

  it("renders all skill groups", () => {
    render(<Skills />);
    expect(screen.getByText(/Languages/i)).toBeInTheDocument();
    expect(screen.getByText(/Frameworks/i)).toBeInTheDocument();
    expect(screen.getByText(/Databases/i)).toBeInTheDocument();
    expect(screen.getByText(/Platforms/i)).toBeInTheDocument();
  });

  it("renders specific skills", () => {
    render(<Skills />);
    expect(screen.getAllByText(/Laravel/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/React/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/PostgreSQL/i)).toBeInTheDocument();
  });
});
