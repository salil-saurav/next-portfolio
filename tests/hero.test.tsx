import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/hero";
import { describe, it, expect } from "vitest";

describe("Hero Section", () => {
  it("renders the main heading", () => {
    render(<Hero />);
    expect(screen.getByText(/I build fast, scalable, and maintainable web systems/i)).toBeInTheDocument();
  });

  it("renders the summary text", () => {
    render(<Hero />);
    // Check for a part of the summary that we saw in the previous test output
    expect(screen.getByText(/Full-stack developer with 2.5 years of experience/i)).toBeInTheDocument();
  });

  it("has a link to the projects section", () => {
    render(<Hero />);
    const projectsLink = screen.getByRole("link", { name: /view work/i });
    expect(projectsLink).toHaveAttribute("href", "#projects");
  });

  it("has a contact email link", () => {
    render(<Hero />);
    const contactLink = screen.getByRole("link", { name: /contact/i });
    expect(contactLink).toHaveAttribute("href", expect.stringContaining("mailto:"));
  });
});
