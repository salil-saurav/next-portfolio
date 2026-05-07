"use client";

import { Send } from "lucide-react";
import { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const json = await res.json();

      if (!res.ok) throw new Error(json.message || "Failed to send message");

      setStatus("success");
      setMessage("Message sent successfully! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setMessage("Failed to send message. Please try again or email me directly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-secondary">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 w-full rounded-md border border-border-primary bg-surface-card px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-mint/70"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-secondary">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 w-full rounded-md border border-border-primary bg-surface-card px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-mint/70"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-secondary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-md border border-border-primary bg-surface-card px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-mint/70"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-mint px-5 py-3 text-sm font-bold text-ink transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-mint/70"
      >
        {status === "submitting" ? (
          "Sending..."
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" />
            Send message
          </>
        )}
      </button>

      {message && (
        <p
          className={`text-sm ${
            status === "success" ? "text-mint" : "text-coral"
          }`}
          role={status === "error" ? "alert" : "status"}
        >
          {message}
        </p>
      )}
    </form>
  );
}
