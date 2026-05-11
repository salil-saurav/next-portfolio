import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "@/components/ui/navbar";
import { describe, it, expect, vi } from "vitest";
import { useTheme } from "next-themes";
import { navItems } from "@/data/navigation";

vi.mock("next-themes", () => ({
  useTheme: vi.fn(() => ({
    resolvedTheme: "dark",
    setTheme: vi.fn()
  }))
}));

describe("Navbar", () => {
  it("renders the logo and profile name", () => {
    render(<Navbar />);
    expect(screen.getByText("SS")).toBeInTheDocument();
    expect(screen.getByText(/Salil Saurav/i)).toBeInTheDocument();
  });

  it("renders desktop navigation links", () => {
    render(<Navbar />);
    navItems.forEach(item => {
      const links = screen.getAllByText(item.label);
      expect(links.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("renders the Hire button", () => {
    render(<Navbar />);
    expect(screen.getByText(/Hire/i)).toBeInTheDocument();
  });

  it("toggles the mobile menu when clicking the menu button", () => {
    render(<Navbar />);
    const toggleButton = screen.getByLabelText(/toggle navigation/i);
    
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    
    fireEvent.click(toggleButton);
    expect(screen.getByRole("menu")).toBeInTheDocument();
    
    fireEvent.click(toggleButton);
    // With the global AnimatePresence mock, removal is synchronous
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });
});
