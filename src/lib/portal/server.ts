// Server-side helpers (server components / route handlers only).
// They call the portal API directly and forward the visitor's session cookie.

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { Meta, Role, Session } from "./types";

const API_BASE = `${process.env.PORTAL_API_URL ?? "http://127.0.0.1:8001"}/api/v1`;

export class PortalUnavailableError extends Error {
  constructor() {
    super("The Drip portal is temporarily unavailable. Please try again in a moment.");
    this.name = "PortalUnavailableError";
  }
}

async function request(path: string, init?: RequestInit): Promise<Response> {
  const cookieHeader = (await cookies()).toString();
  try {
    return await fetch(`${API_BASE}${path}`, {
      ...init,
      headers: { ...(cookieHeader ? { cookie: cookieHeader } : {}), ...(init?.headers ?? {}) },
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
