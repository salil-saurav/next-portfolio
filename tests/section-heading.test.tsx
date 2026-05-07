import { render, screen } from "@testing-library/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { describe, it, expect } from "vitest";

describe("SectionHeading", () => {
  it("renders eyebrow, title, and description", () => {
    render(
      <SectionHeading
        eyebrow="Test Eyebrow"
        title="Test Title"
        description="Test description"
      />
    );

    expect(screen.getByText("Test Eyebrow")).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("renders without description when not provided", () => {
    render(
      <SectionHeading
        eyebrow="Test Eyebrow"
        title="Test Title"
      />
    );

    expect(screen.getByText("Test Eyebrow")).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });
});
