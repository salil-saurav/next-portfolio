import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { describe, it, expect, vi } from "vitest";
import { useTheme } from "next-themes";

vi.mock("next-themes", () => ({
  useTheme: vi.fn()
}));

describe("ThemeToggle", () => {
  it("renders sun icon when theme is dark", () => {
    (useTheme as any).mockReturnValue({
      resolvedTheme: "dark",
      setTheme: vi.fn()
    });

    render(<ThemeToggle />);
    
    expect(screen.getByLabelText(/switch to light mode/i)).toBeInTheDocument();
  });

  it("renders moon icon when theme is light", () => {
    (useTheme as any).mockReturnValue({
      resolvedTheme: "light",
      setTheme: vi.fn()
    });

    render(<ThemeToggle />);
    
    expect(screen.getByLabelText(/switch to dark mode/i)).toBeInTheDocument();
  });

  it("calls setTheme when clicked", () => {
    const setTheme = vi.fn();
    (useTheme as any).mockReturnValue({
      resolvedTheme: "dark",
      setTheme
    });

    render(<ThemeToggle />);
    
    const button = screen.getByRole("button");
    fireEvent.click(button);
    
    expect(setTheme).toHaveBeenCalledWith("light");
  });
});
