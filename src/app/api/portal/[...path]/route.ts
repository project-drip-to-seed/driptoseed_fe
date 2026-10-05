import type { NextRequest } from "next/server";
import { API_BASE, apiHeaders, isPortalPath, SESSION_COOKIE, visitorIp } from "@/lib/portal/backend";

// The browser talks to this site (same origin), and this route carries the call to the portal API. That keeps the
// session cookie first-party and httpOnly, and it lets the site vouch for the visitor's address (see backend.ts).
//
// It is deliberately narrow: only the API's real areas, only these methods, only the session cookie going out, and
// only a few response headers coming back.

export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 256 * 1024; // the API refuses more than this anyway
const UPSTREAM_TIMEOUT_MS = 25_000;
const SAFE_METHODS = new Set(["GET", "HEAD"]);

function json(status: number, detail: string): Response {
  return Response.json({ detail }, { status, headers: { "cache-control": "no-store" } });
}

async function carry(request: NextRequest): Promise<Response> {
  // "/api/portal/auth/me?x=1" -> "/auth/me?x=1", kept exactly as it was sent (no decoding) and checked as it is.
  const path = request.nextUrl.pathname.slice("/api/portal".length) + request.nextUrl.search;
  if (!isPortalPath(path)) return json(404, "Not found");

  // A state-changing request has to come from this site's own pages (the cookie is SameSite=Lax, and the API checks
  // the origin too; this refuses it one step earlier).
  if (!SAFE_METHODS.has(request.method)) {
    const fetchSite = request.headers.get("sec-fetch-site");
    if (fetchSite && fetchSite !== "same-origin" && fetchSite !== "none") return json(403, "Origin not allowed");
    const origin = request.headers.get("origin");
    if (origin) {
      let sameHost = false;
      try {
        sameHost = new URL(origin).host === request.headers.get("host");
      } catch {
        // an unparseable origin is not this site's
      }
      if (!sameHost) return json(403, "Origin not allowed");
    }
  }

  const headers = apiHeaders({ session: request.cookies.get(SESSION_COOKIE)?.value, visitor: visitorIp(request.headers) });
  headers.accept = "application/json";
  const origin = request.headers.get("origin");
  if (origin) headers.origin = origin;

  let body: ArrayBuffer | undefined;
  if (!SAFE_METHODS.has(request.method)) {
    if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) return json(413, "Request body too large");
    body = await request.arrayBuffer();
    if (body.byteLength > MAX_BODY_BYTES) return json(413, "Request body too large");
    if (body.byteLength > 0) headers["content-type"] = request.headers.get("content-type") ?? "application/json";
  }

  let upstream: Response;
  try {
    upstream = await fetch(`${API_BASE}${path}`, {
      method: request.method,
      headers,
      body,
      redirect: "manual", // the API never redirects; if it does, something is wrong and nothing should follow it
      cache: "no-store",
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
  } catch {
    return json(503, "Service temporarily unavailable. Please try again.");
  }
  if (upstream.status >= 300 && upstream.status < 400) return json(502, "Unexpected response from the server.");

  // Only what the browser needs. Headers like Server or Via, and the API's own CORS and caching headers, stay behind.
  const out = new Headers({ "cache-control": "no-store" });
  const contentType = upstream.headers.get("content-type");
  if (contentType) out.set("content-type", contentType);
  const retryAfter = upstream.headers.get("retry-after");
  if (retryAfter) out.set("retry-after", retryAfter);
  for (const cookie of upstream.headers.getSetCookie()) out.append("set-cookie", cookie);

  const noBody = upstream.status === 204 || upstream.status === 205 || request.method === "HEAD";
  return new Response(noBody ? null : upstream.body, { status: upstream.status, headers: out });
}

export const GET = carry;
export const POST = carry;
export const PUT = carry;
export const PATCH = carry;
export const DELETE = carry;
