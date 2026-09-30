import type { Option } from "./types";

const TZ = "Asia/Kolkata"; // fixed so server-rendered dates never differ from the browser's

export function formatDate(iso: string | null | undefined): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: TZ,
  });
}

export function formatDateTime(iso: string | null | undefined): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: TZ,
  });
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-IN").format(value);
}

export function inr(value: number): string {
  return `₹${formatNumber(value)}`;
}

/** 1.2M / 340K style for tight spaces. */
export function compactNumber(value: number): string {
  return new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

export function labelOf(options: Option[], value: string): string {
  return options.find((o) => o.value === value)?.label ?? value;
}

export function labelsOf(options: Option[], values: unknown): string {
  if (!Array.isArray(values)) return "—";
  return values.map((v) => labelOf(options, String(v))).join(", ") || "—";
}

/** ?page=2 → offset, clamped to sane values. */
export function pageToOffset(page: string | undefined, limit: number): number {
  const n = Number.parseInt(page ?? "1", 10);
  return (Number.isFinite(n) && n > 1 ? Math.min(n, 10_000) - 1 : 0) * limit;
}
