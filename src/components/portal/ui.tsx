// Presentational building blocks shared by the dashboards (safe in server and client components).

import Link from "next/link";
import type { ReactNode } from "react";

export const inputClasses =
  "w-full rounded-xl border border-[#D59EFB] bg-white px-4 py-3 text-[15px] leading-[1.4] text-black outline-none transition placeholder:text-[#9A9A9A] focus:border-[#780AC1] focus:ring-2 focus:ring-[#780AC1]/15 disabled:opacity-60";

export function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`rounded-3xl border border-[#D59EFB]/60 bg-white p-5 sm:p-6 ${className}`}>{children}</div>
  );
}

export function PageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="font-kugile text-[26px] leading-[1.3] text-black sm:text-[32px]">{title}</h1>
        {description && <p className="max-w-2xl text-[15px] leading-[1.6] text-[#686868]">{description}</p>}
      </div>
      {action}
    </div>
  );
}

const tones = {
  purple: "text-[#780AC1]",
  green: "text-[#146C3A]",
  amber: "text-[#8A5A00]",
  ink: "text-black",
} as const;

export function StatCard({
  label,
  value,
  hint,
  tone = "ink",
}: {
  label: string;
  value: string | number;
  hint?: string;
  tone?: keyof typeof tones;
}) {
  return (
    <Card className="flex flex-col gap-1 !p-5">
      <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-[#686868]">{label}</p>
      <p className={`text-[32px] leading-[1.2] ${tones[tone]}`}>{value}</p>
      {hint && <p className="text-[13px] leading-[1.4] text-[#686868]">{hint}</p>}
    </Card>
  );
}

const badgeStyles: Record<string, string> = {
  pending: "bg-[#FFF4D6] text-[#8A5A00]",
  approved: "bg-[#DDF6E6] text-[#146C3A]",
  rejected: "bg-[#FDE2E2] text-[#9B1C1C]",
  open: "bg-[#DDF6E6] text-[#146C3A]",
  closed: "bg-[#ECECEC] text-[#4A4A4A]",
  paid: "bg-[#DDF6E6] text-[#146C3A]",
  unpaid: "bg-[#FFF4D6] text-[#8A5A00]",
  disabled: "bg-[#FDE2E2] text-[#9B1C1C]",
  active: "bg-[#DDF6E6] text-[#146C3A]",
};

export function StatusBadge({ status, label }: { status: string; label?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[12px] font-medium capitalize leading-none ${
        badgeStyles[status] ?? "bg-[#EED7FF] text-[#780AC1]"
      }`}
    >
      {label ?? status}
    </span>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#EED7FF66] px-3 py-1.5 text-[12px] leading-none text-[#780AC1]">
      {children}
    </span>
  );
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-[#D59EFB] bg-[#FBF5FF]/60 px-6 py-12 text-center">
      <p className="text-[18px] font-medium text-black">{title}</p>
      {description && <p className="max-w-md text-[15px] leading-[1.6] text-[#686868]">{description}</p>}
      {action}
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-normal leading-none whitespace-nowrap transition disabled:cursor-not-allowed disabled:opacity-50";
export const buttonClasses = {
  primary: `${buttonBase} bg-[#780AC1] text-white hover:bg-[#6408A5]`,
  secondary: `${buttonBase} border border-[#780AC1] text-[#780AC1] hover:bg-[#780AC1]/5`,
  danger: `${buttonBase} border border-[#C53030] text-[#C53030] hover:bg-[#C53030]/5`,
  ghost: `${buttonBase} text-[#780AC1] hover:bg-[#780AC1]/5`,
};

export function LinkButton({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: keyof typeof buttonClasses;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={buttonClasses[variant]}>
      {children}
    </Link>
  );
}

/** User-supplied links: open in a new tab, never leak the referrer or opener. */
export function ExternalLink({ href, children }: { href: string; children?: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="break-all text-[#780AC1] underline decoration-[#D59EFB] underline-offset-2 hover:decoration-[#780AC1]"
    >
      {children ?? href}
    </a>
  );
}

export function Pagination({
  basePath,
  total,
  limit,
  offset,
  params = {},
}: {
  basePath: string;
  total: number;
  limit: number;
  offset: number;
  params?: Record<string, string | undefined>;
}) {
  const pages = Math.max(1, Math.ceil(total / limit));
  const current = Math.floor(offset / limit) + 1;
  if (pages <= 1) return null;

  const href = (page: number) => {
    const search = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) if (value) search.set(key, value);
    if (page > 1) search.set("page", String(page));
    const qs = search.toString();
    return qs ? `${basePath}?${qs}` : basePath;
  };

  return (
    <nav aria-label="Pagination" className="mt-6 flex items-center justify-between text-[14px] text-[#686868]">
      <span>
        Page {current} of {pages} · {total} total
      </span>
      <div className="flex gap-2">
        {current > 1 && (
          <Link href={href(current - 1)} className={buttonClasses.secondary}>
            Previous
          </Link>
        )}
        {current < pages && (
          <Link href={href(current + 1)} className={buttonClasses.secondary}>
            Next
          </Link>
        )}
      </div>
    </nav>
  );
}

export function FilterTabs({
  basePath,
  paramName,
  active,
  options,
  otherParams = {},
}: {
  basePath: string;
  paramName: string;
  active: string | undefined;
  options: { value: string; label: string }[];
  otherParams?: Record<string, string | undefined>;
}) {
  const href = (value: string) => {
    const search = new URLSearchParams();
    for (const [key, v] of Object.entries(otherParams)) if (v) search.set(key, v);
    if (value) search.set(paramName, value);
    const qs = search.toString();
    return qs ? `${basePath}?${qs}` : basePath;
  };
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = (active ?? "") === option.value;
        return (
          <Link
            key={option.value || "all"}
            href={href(option.value)}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-4 py-2 text-[14px] leading-none transition ${
              isActive ? "bg-[#780AC1] text-white" : "bg-[#EED7FF66] text-[#780AC1] hover:bg-[#EED7FF]"
            }`}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}

export function DefinitionRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-[#D59EFB]/30 py-3 last:border-b-0 sm:grid-cols-[200px_1fr] sm:gap-4">
      <dt className="text-[13px] font-medium uppercase tracking-[0.05em] text-[#686868]">{label}</dt>
      <dd className="text-[15px] leading-[1.6] text-black">{children}</dd>
    </div>
  );
}

export const tableClasses = {
  wrapper: "overflow-x-auto rounded-3xl border border-[#D59EFB]/60 bg-white",
  table: "w-full min-w-[640px] text-left text-[14px]",
  th: "border-b border-[#D59EFB]/40 bg-[#FBF5FF] px-4 py-3 text-[12px] font-medium uppercase tracking-[0.05em] text-[#686868]",
  td: "border-b border-[#D59EFB]/20 px-4 py-3 align-top text-black",
};
