import { render, screen } from "@testing-library/react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { describe, it, expect } from "vitest";

describe("AnimatedSection", () => {
  it("renders children correctly", () => {
    render(
      <AnimatedSection id="test-section">
        <div data-testid="child">Test Child</div>
      </AnimatedSection>
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(screen.getByTestId("child")).toHaveTextContent("Test Child");
  });

  it("applies the provided id and className", () => {
    const { container } = render(
      <AnimatedSection id="my-id" className="custom-class">
        <div>Content</div>
      </AnimatedSection>
    );

    const section = container.querySelector("section");
    expect(section).toHaveAttribute("id", "my-id");
    expect(section).toHaveClass("custom-class");
  });
});
