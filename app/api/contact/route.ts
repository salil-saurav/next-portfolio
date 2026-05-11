import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";
const toEmail = "salilsaurav.work@gmail.com";

// Initialize Resend lazily to allow for environment variable changes or missing keys during build
let resendInstance: Resend | null = null;

function getResend() {
  if (!resendInstance) {
    resendInstance = new Resend(process.env.RESEND_API_KEY || "");
  }
  return resendInstance;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        {
          ok: false,
          message: "Email service not configured. Please set RESEND_API_KEY environment variable."
        },
        { status: 501 }
      );
    }

    const resend = getResend();

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Portfolio Contact: ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error(error.message);
    }

    return NextResponse.json(
      { ok: true, message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API Error:", err);
    return NextResponse.json(
      { ok: false, message: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
