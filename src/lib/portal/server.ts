// Server-side helpers (server components / route handlers only).
// They call the portal API directly and forward the visitor's session cookie.

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { API_BASE, apiHeaders, isPortalPath, SESSION_COOKIE, visitorIp } from "./backend";
import type { Meta, Role, Session } from "./types";

export class PortalUnavailableError extends Error {
  constructor() {
    super("The Drip portal is temporarily unavailable. Please try again in a moment.");
    this.name = "PortalUnavailableError";
  }
}

async function request(path: string, init?: RequestInit): Promise<Response> {
  // Ids from the address bar end up in these paths: refuse anything that would reach a different endpoint.
  if (!isPortalPath(path)) throw new NotFoundError();
  // Only the session cookie goes to the API (not whatever else the browser holds for this site, such as analytics
  // ids), plus the proof that this call comes from the website and which visitor it is on behalf of.
  const session = (await cookies()).get(SESSION_COOKIE)?.value;
  const visitor = visitorIp(await headers());
  try {
    return await fetch(`${API_BASE}${path}`, {
      ...init,
      headers: { ...apiHeaders({ session, visitor }), ...(init?.headers ?? {}) },
      cache: "no-store",
    });
  } catch {
    throw new PortalUnavailableError();
  }
}

/** The signed-in user + their application, or null when logged out. */
export async function getSession(): Promise<Session | null> {
  const response = await request("/auth/me");
  if (response.status === 401) return null;
  if (!response.ok) throw new PortalUnavailableError();
  return (await response.json()) as Session;
}

export function dashboardPath(role: Role): string {
  return `/dashboard/${role}`;
}

/** Redirects to /login when signed out, or to the user's own dashboard on a role mismatch. */
export async function requireRole(...roles: Role[]): Promise<Session> {
  const session = await getSession();
  if (!session) redirect("/login");
  if (roles.length && !roles.includes(session.user.role)) redirect(dashboardPath(session.user.role));
  return session;
}

/** GET a portal endpoint as the current user. Bounces to /login (401) or /dashboard (403). */
export async function portalGet<T>(path: string): Promise<T> {
  const response = await request(path);
  if (response.status === 401) redirect("/login");
  if (response.status === 403) redirect("/dashboard");
  if (response.status === 404) throw new NotFoundError();
  if (!response.ok) throw new PortalUnavailableError();
  return (await response.json()) as T;
}

export class NotFoundError extends Error {}

/** Public option lists + payout rules (single source of truth lives in the API). */
export async function getMeta(): Promise<Meta> {
  const response = await request("/meta");
  if (!response.ok) throw new PortalUnavailableError();
  return (await response.json()) as Meta;
}
