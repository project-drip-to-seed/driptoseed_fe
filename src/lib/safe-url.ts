// Values that come from other people (channel links, clip links, emails) are only ever turned into a link,
// a mailto or an API path after passing these checks. The API validates them too; this is the second lock.

/** An http(s) link with no spaces or backslashes, or null. Rejects javascript:, data:, vbscript: and the like. */
export function safeHref(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const text = value.trim();
  if (!/^https?:\/\/[^\s\\]+$/i.test(text)) return null;
  try {
    const url = new URL(text);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
  } catch {
    return null;
  }
}

/** A mailto: link for a plain address, or null. Nothing that could add recipients, subjects or bodies. */
export function safeMailto(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const email = value.trim();
  return /^[^\s@<>"'`,;:\\?&=%]+@[^\s@<>"'`,;:\\?&=%]+\.[^\s@<>"'`,;:\\?&=%]+$/.test(email) ? `mailto:${email}` : null;
}

/** A MongoDB ObjectId as the API prints it. */
export function isObjectId(value: unknown): value is string {
  return typeof value === "string" && /^[a-f0-9]{24}$/i.test(value);
}

/**
 * A portal API path that stays inside the API: no dot segments, doubled slashes, backslashes or encoded
 * versions of them. Ids from the address bar are put into these paths, so this stops one reaching a different
 * endpoint than the page meant to call.
 */
export function isSafeApiPath(path: string): boolean {
  if (!path.startsWith("/") || path.startsWith("//")) return false;
  const [pathname] = path.split("?");
  if (/[\\\s]/.test(pathname) || /%(2e|2f|5c|00)/i.test(pathname)) return false;
  return pathname.split("/").every((segment) => segment !== ".." && segment !== ".");
}
