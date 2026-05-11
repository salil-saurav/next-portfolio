import { render, screen } from "@testing-library/react";
import { Experience } from "@/components/sections/experience";
import { describe, it, expect } from "vitest";

describe("Experience Section", () => {
  it("renders the section heading", () => {
    render(<Experience />);
    expect(screen.getAllByText(/Experience/i).length).toBeGreaterThan(0);
  });

  it("renders experience items from data", () => {
    render(<Experience />);
    expect(screen.getAllByText(/Full-stack Developer/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Digital Web Solutions Pvt. Ltd./i).length).toBeGreaterThan(0);
  });

  it("renders highlights for jobs", () => {
    render(<Experience />);
    expect(screen.getAllByRole("listitem").length).toBeGreaterThan(0);
  });
});
