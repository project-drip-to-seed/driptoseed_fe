import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  process.env.APPLY_FORM_SCRIPT_URL ?? process.env.CONTACT_FORM_SCRIPT_URL;
const GOOGLE_SCRIPT_API_KEY =
  process.env.APPLY_FORM_API_KEY ?? process.env.CONTACT_FORM_API_KEY;

export async function POST(request: Request) {
  if (!GOOGLE_SCRIPT_URL || !GOOGLE_SCRIPT_API_KEY) {
    return NextResponse.json(
      { error: "Application form is not configured." },
      { status: 500 }
    );
  }

  const body = await request.json();
  const { role, fullName, email, phone, link, message, ...rest } = body ?? {};

  if (!role || !fullName || !email || !phone || !link) {
    return NextResponse.json(
      { error: "Role, full name, email, phone, and link are required." },
      { status: 400 }
    );
  }

  const upstreamResponse = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      apiKey: GOOGLE_SCRIPT_API_KEY,
      form: "apply",
      role,
      fullName,
      email,
      phone,
      link,
      message: message ?? "",
      ...rest,
    }),
  });

  if (!upstreamResponse.ok) {
    return NextResponse.json(
      { error: "Failed to submit application." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
