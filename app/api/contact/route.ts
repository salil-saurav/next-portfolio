import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      message:
        "Contact email integration placeholder. Connect this route to Nodemailer, Resend, EmailJS, or your SMTP provider."
    },
    { status: 501 }
  );
}
