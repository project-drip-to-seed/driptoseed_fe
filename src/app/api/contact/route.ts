import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = process.env.CONTACT_FORM_SCRIPT_URL;
const GOOGLE_SCRIPT_API_KEY = process.env.CONTACT_FORM_API_KEY;

// Anyone on the internet can call this, and every accepted message lands in the team's inbox. So: a size limit,
// fixed fields with length limits, a plausible email, and a per-visitor rate limit. The limit is kept in memory,
// so it is per server instance and only slows a determined attacker down; it stops casual floods.
const MAX_BODY_BYTES = 8 * 1024;
const LIMITS = { fullName: 100, email: 254, phone: 30, message: 2000 } as const;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const MAX_TRACKED_VISITORS = 5_000;
const recent = new Map<string, number[]>();

function tooMany(visitor: string): boolean {
  const now = Date.now();
  const hits = (recent.get(visitor) ?? []).filter((at) => now - at < WINDOW_MS);
  if (hits.length >= MAX_PER_WINDOW) {
    recent.set(visitor, hits);
    return true;
  }
  hits.push(now);
  recent.delete(visitor); // re-insert so the Map stays ordered by last use
  recent.set(visitor, hits);
  if (recent.size > MAX_TRACKED_VISITORS) recent.delete(recent.keys().next().value as string);
  return false;
}

function clean(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const text = value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").trim();
  return text.length > max ? null : text;
}

export async function POST(request: Request) {
  if (!GOOGLE_SCRIPT_URL || !GOOGLE_SCRIPT_API_KEY) {
    return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  // Vercel sets these from the real connection; anything a visitor sends is overwritten.
  const visitor = request.headers.get("x-real-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (tooMany(visitor)) {
    return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 });
  }

  const declared = Number(request.headers.get("content-length") ?? 0);
  if (declared > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Message is too large." }, { status: 413 });
  }
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Message is too large." }, { status: 413 });
  }
  let body: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) throw new Error("not an object");
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Only these four fields are ever forwarded, whatever else was sent.
  const fullName = clean(body.fullName, LIMITS.fullName);
  const email = clean(body.email, LIMITS.email);
  const phone = clean(body.phone, LIMITS.phone);
  const message = clean(body.message ?? "", LIMITS.message);

  if (!fullName || !email || !phone || message === null) {
    return NextResponse.json({ error: "Full name, email, and phone are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  let upstreamResponse: Response;
  try {
    upstreamResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ apiKey: GOOGLE_SCRIPT_API_KEY, fullName, email, phone, message }),
      signal: AbortSignal.timeout(10_000),
    });
  } catch {
    return NextResponse.json({ error: "Failed to submit contact form." }, { status: 502 });
  }

  if (!upstreamResponse.ok) {
    return NextResponse.json({ error: "Failed to submit contact form." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
