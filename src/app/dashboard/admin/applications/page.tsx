import type { Metadata } from "next";
import Link from "next/link";
import { EmptyState, FilterTabs, PageHeader, Pagination, StatusBadge, tableClasses } from "@/components/portal/ui";
import { inputClasses } from "@/components/portal/ui";
import { formatDate, pageToOffset } from "@/lib/portal/format";
import { portalGet, requireRole } from "@/lib/portal/server";
import type { Application, Page } from "@/lib/portal/types";

export const metadata: Metadata = { title: "Applications" };
export const dynamic = "force-dynamic";

const LIMIT = 15;

function focusOf(a: Application): string {
  const d = a.data as Record<string, unknown>;
  if (a.type === "creator") return String(d.niche ?? "—");
  return Array.isArray(d.niches) ? (d.niches as string[]).join(", ") : "—";
}

export default async function AdminApplicationsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; type?: string; q?: string; page?: string }>;
}) {
  await requireRole("admin");
  const sp = await searchParams;
  const status = ["pending", "approved", "rejected"].includes(sp.status ?? "") ? sp.status : undefined;
  const type = ["creator", "editor"].includes(sp.type ?? "") ? sp.type : undefined;
  const q = sp.q?.trim().slice(0, 80) || undefined;
  const offset = pageToOffset(sp.page, LIMIT);

  const query = new URLSearchParams({ limit: String(LIMIT), offset: String(offset) });
  if (status) query.set("status", status);
  if (type) query.set("type", type);
  if (q) query.set("q", q);
  const list = await portalGet<Page<Application>>(`/admin/applications?${query}`);

  const keep = { status, type, q };

  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Applications" description="Review creator and editor applications." />

      <div className="flex flex-col gap-4">
        <FilterTabs
          basePath="/dashboard/admin/applications"
          paramName="status"
          active={status}
          otherParams={{ type, q }}
          options={[
            { value: "", label: "All" },
            { value: "pending", label: "Pending" },
            { value: "approved", label: "Approved" },
            { value: "rejected", label: "Rejected" },
          ]}
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <FilterTabs
            basePath="/dashboard/admin/applications"
            paramName="type"
            active={type}
            otherParams={{ status, q }}
            options={[
              { value: "", label: "Everyone" },
              { value: "creator", label: "Creators" },
              { value: "editor", label: "Editors" },
            ]}
          />
          <form method="get" className="flex gap-2">
            {status && <input type="hidden" name="status" value={status} />}
            {type && <input type="hidden" name="type" value={type} />}
            <input
              name="q"
              defaultValue={q}
              placeholder="Search name or email"
              maxLength={80}
              className={`${inputClasses} !w-[240px] !py-2.5`}
              aria-label="Search applicants"
            />
            <button type="submit" className="rounded-full bg-[#780AC1] px-5 py-2.5 text-[14px] leading-none text-white">
              Search
            </button>
          </form>
        </div>
      </div>

      {list.items.length === 0 ? (
        <EmptyState title="No applications match" description="Try a different filter or search." />
      ) : (
        <div className={tableClasses.wrapper}>
          <table className={tableClasses.table}>
            <thead>
              <tr>
                {["Applicant", "Type", "Focus", "Status", "Submitted", ""].map((h) => (
                  <th key={h} className={tableClasses.th}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {list.items.map((a) => (
                <tr key={a.id}>
                  <td className={tableClasses.td}>
                    <div className="flex flex-col">
                      <span className="font-medium">{a.applicant?.full_name}</span>
                      <span className="text-[12px] text-[#686868]">{a.applicant?.email}</span>
                    </div>
                  </td>
                  <td className={`${tableClasses.td} capitalize`}>{a.type}</td>
                  <td className={tableClasses.td}>{focusOf(a)}</td>
                  <td className={tableClasses.td}>
                    <StatusBadge status={a.status} />
                  </td>
                  <td className={tableClasses.td}>{formatDate(a.created_at)}</td>
                  <td className={tableClasses.td}>
                    <Link href={`/dashboard/admin/applications/${a.id}`} className="text-[#780AC1] underline">
                      {a.status === "pending" ? "Review" : "View"}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Pagination basePath="/dashboard/admin/applications" total={list.total} limit={list.limit} offset={list.offset} params={keep} />
    </div>
  );
}
