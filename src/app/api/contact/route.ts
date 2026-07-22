import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = process.env.CONTACT_FORM_SCRIPT_URL;
const GOOGLE_SCRIPT_API_KEY = process.env.CONTACT_FORM_API_KEY;

export async function POST(request: Request) {
  if (!GOOGLE_SCRIPT_URL || !GOOGLE_SCRIPT_API_KEY) {
    return NextResponse.json(
      { error: "Contact form is not configured." },
      { status: 500 }
    );
  }

  const body = await request.json();
  const { fullName, email, phone, message } = body ?? {};

  if (!fullName || !email || !phone) {
    return NextResponse.json(
      { error: "Full name, email, and phone are required." },
      { status: 400 }
    );
  }

  const upstreamResponse = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      apiKey: GOOGLE_SCRIPT_API_KEY,
      fullName,
      email,
      phone,
      message: message ?? "",
    }),
  });

  if (!upstreamResponse.ok) {
    return NextResponse.json(
      { error: "Failed to submit contact form." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
