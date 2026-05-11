import { describe, it, expect, vi, beforeEach } from "vitest";
import { POST } from "@/app/api/contact/route";
import { NextRequest } from "next/server";

const mockSend = vi.fn().mockResolvedValue({ data: { id: "123" }, error: null });

vi.mock("resend", () => {
  return {
    Resend: vi.fn().mockImplementation(function() {
      return {
        emails: {
          send: mockSend
        }
      };
    })
  };
});

describe("Contact API Route", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.RESEND_API_KEY = "test_key";
    mockSend.mockResolvedValue({ data: { id: "123" }, error: null });
  });

  it("returns 400 if fields are missing", async () => {
    const request = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({ name: "Salil" })
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
    const json = await response.json();
    expect(json.message).toContain("required");
  });

  it("returns 501 if RESEND_API_KEY is missing", async () => {
    const originalKey = process.env.RESEND_API_KEY;
    delete process.env.RESEND_API_KEY;
    
    const request = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({ name: "Salil", email: "test@test.com", message: "Hi" })
    });

    const response = await POST(request);
    expect(response.status).toBe(501);
    
    process.env.RESEND_API_KEY = originalKey;
  });

  it("returns 200 on successful send", async () => {
    const request = new NextRequest("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({ name: "Salil", email: "test@test.com", message: "Hi" })
    });

    const response = await POST(request);
    expect(response.status).toBe(200);
    const json = await response.json();
    expect(json.ok).toBe(true);
  });
});
