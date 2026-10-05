// How this site's server talks to the portal API (server-side only: never import this from a client component).
//
// Two things use it: the proxy route that carries the browser's calls (src/app/api/portal/[...path]/route.ts) and the
// server components that read data for the dashboards (./server.ts). Both go through here so they behave the same.

import { isSafeApiPath } from "@/lib/safe-url";

export const SESSION_COOKIE = "drip_session";

/** The areas of the portal API the website may use. Anything else (health checks, docs, new endpoints) is not reachable through the site. */
export const PORTAL_AREAS = ["auth", "applications", "creator", "editor", "admin", "meta"] as const;

const LOCAL_HOSTS = ["localhost", "127.0.0.1", "[::1]"];

// The session travels to this address, so a real host must be https. Plain http is only accepted for localhost, and a
// build that is given an insecure address fails instead of quietly sending logins in the clear.
function resolveApiBase(): string {
  const raw = (process.env.PORTAL_API_URL ?? "").trim().replace(/\/+$/, "");
  if (!raw) {
    if (process.env.VERCEL_ENV === "production") {
      console.warn("PORTAL_API_URL is not set: the dashboards and application forms cannot reach the API.");
    }
    return "http://127.0.0.1:8001/api/v1";
  }
  const url = new URL(raw);
  const local = LOCAL_HOSTS.includes(url.hostname);
  if (url.username || url.password || (url.protocol !== "https:" && !(local && url.protocol === "http:"))) {
    throw new Error("PORTAL_API_URL must be an https:// address (http:// is only allowed for localhost).");
  }
  return `${raw}/api/v1`;
}

export const API_BASE = resolveApiBase();

/** The visitor's address as the hosting platform saw it. Vercel sets these itself, overwriting anything the visitor sent. */
export function visitorIp(headers: Headers): string | null {
  const value =
    headers.get("x-vercel-forwarded-for") ?? headers.get("x-real-ip") ?? headers.get("x-forwarded-for")?.split(",")[0];
  return value?.trim() || null;
}

/**
 * Headers for a call to the API: the session cookie (and only that cookie), plus, when PORTAL_PROXY_SECRET is set,
 * the proof that this call comes from the website and the visitor's real address. The API uses the address to
 * rate-limit each visitor separately instead of counting everyone as the site's own server.
 */
export function apiHeaders(options: { session?: string | null; visitor?: string | null }): Record<string, string> {
  const headers: Record<string, string> = {};
  if (options.session) headers.cookie = `${SESSION_COOKIE}=${options.session}`;
  const secret = process.env.PORTAL_PROXY_SECRET?.trim();
  if (secret) {
    headers["x-drip-proxy-secret"] = secret;
    if (options.visitor) headers["x-drip-client-ip"] = options.visitor;
  }
  return headers;
}

/** Is this path one the website may call? (`/auth/me?x=1` yes, `/health`, `/admin/../x`, `//host` no.) */
export function isPortalPath(path: string): boolean {
  if (!isSafeApiPath(path)) return false;
  const area = path.split("?")[0].split("/")[1];
  return (PORTAL_AREAS as readonly string[]).includes(area);
}
