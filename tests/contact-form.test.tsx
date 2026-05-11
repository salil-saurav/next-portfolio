import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactForm } from "@/components/ui/contact-form";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("ContactForm", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  it("renders all form fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("shows success message on successful submission", async () => {
    (fetch as any).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ message: "Success" })
    });

    render(<ContactForm />);
    
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: "Hello!" } });
    
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    
    expect(screen.getByText(/sending/i)).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
    });
  });

  it("shows error message on failed submission", async () => {
    (fetch as any).mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({ message: "Error" })
    });

    render(<ContactForm />);
    
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: "Hello!" } });
    
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/failed to send message/i)).toBeInTheDocument();
    });
  });
});
