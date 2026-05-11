import { render, screen } from "@testing-library/react";
import { SkipNav } from "@/components/ui/skip-nav";
import { describe, it, expect } from "vitest";

describe("SkipNav", () => {
  it("renders with correct text and href", () => {
    render(<SkipNav />);
    
    const link = screen.getByRole("link", { name: /skip to main content/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#main-content");
  });

  it("has correct accessibility classes", () => {
    render(<SkipNav />);
    
    const link = screen.getByRole("link", { name: /skip to main content/i });
    expect(link).toHaveClass("sr-only");
    expect(link).toHaveClass("focus:not-sr-only");
  });
});
