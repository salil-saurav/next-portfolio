import { render, screen } from "@testing-library/react";
import { About } from "@/components/sections/about";
import { describe, it, expect } from "vitest";

describe("About Section", () => {
  it("renders the section heading", () => {
    render(<About />);
    expect(screen.getAllByText(/About/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/I care about architecture/i)).toBeInTheDocument();
  });

  it("renders the about summary", () => {
    render(<About />);
    expect(screen.getByText(/I specialize in building structured back-end systems/i)).toBeInTheDocument();
  });

  it("renders toolbelt items", () => {
    render(<About />);
    expect(screen.getByText(/Docker/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Git/i).length).toBeGreaterThan(0);
  });

  it("renders education items", () => {
    render(<About />);
    expect(screen.getByText(/Education/i)).toBeInTheDocument();
    expect(screen.getByText(/Makhanlal Chaturvedi National University/i)).toBeInTheDocument();
  });
});
