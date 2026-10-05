// Browser-side API client. Talks to /api/portal/* (proxied to the portal API by
// next.config.ts), so the httpOnly session cookie is attached automatically.

import { isSafeApiPath } from "@/lib/safe-url";

export class ApiError extends Error {
  status: number;
  /** Field-level messages keyed by field path, e.g. "email" or "socials". */
  fieldErrors: Record<string, string>;

  constructor(message: string, status: number, fieldErrors: Record<string, string> = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

type ValidationDetail = { loc?: string[]; msg?: string }[];

function parseError(status: number, body: unknown): ApiError {
  const detail = (body as { detail?: unknown } | null)?.detail;

  if (Array.isArray(detail)) {
    const fieldErrors: Record<string, string> = {};
    for (const item of detail as ValidationDetail) {
      const key = (item.loc ?? []).join(".");
      if (key && !fieldErrors[key]) fieldErrors[key] = item.msg ?? "Invalid value";
    }
    const first = Object.values(fieldErrors)[0];
    return new ApiError(first ?? "Please check the form and try again.", status, fieldErrors);
  }
  if (typeof detail === "string") return new ApiError(detail, status);
  if (status === 429) return new ApiError("Too many attempts. Please try again later.", status);
  if (status >= 500) return new ApiError("Something went wrong on our side. Please try again.", status);
  return new ApiError("Request failed.", status);
}

export async function api<T = unknown>(
  path: string,
  options: { method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"; body?: unknown } = {},
): Promise<T> {
  if (!isSafeApiPath(path)) throw new ApiError("Request failed.", 404);
  let response: Response;
  try {
    response = await fetch(`/api/portal${path}`, {
      method: options.method ?? (options.body !== undefined ? "POST" : "GET"),
      headers: options.body !== undefined ? { "Content-Type": "application/json" } : undefined,
      body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
      credentials: "same-origin",
      cache: "no-store",
    });
  } catch {
    throw new ApiError("Can't reach the server. Check your connection and try again.", 0);
  }

  if (response.status === 204) return undefined as T;

  let body: unknown = null;
  try {
    body = await response.json();
  } catch {
    // non-JSON error body (e.g. a proxy error page)
  }
  if (!response.ok) throw parseError(response.status, body);
  return body as T;
}
