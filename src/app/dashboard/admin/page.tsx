import type { Metadata } from "next";
import Link from "next/link";
import { EmptyState, LinkButton, PageHeader, StatCard, StatusBadge, tableClasses } from "@/components/portal/ui";
import { formatDate, inr } from "@/lib/portal/format";
import { portalGet, requireRole } from "@/lib/portal/server";
import type { AdminOverview } from "@/lib/portal/types";

export const metadata: Metadata = { title: "Admin overview" };
export const dynamic = "force-dynamic";

export default async function AdminOverviewPage() {
  await requireRole("admin");
  const o = await portalGet<AdminOverview>("/admin/overview");
  const pendingApps = o.applications.by_status.pending;

  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Admin overview" description="What needs your attention across applications, clips and payouts." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Applications to review"
          value={pendingApps}
          hint={`${o.applications.pending_creators} creator · ${o.applications.pending_editors} editor`}
          tone={pendingApps ? "amber" : "ink"}
        />
        <StatCard label="Clips awaiting review" value={o.clips.by_status.pending} tone={o.clips.by_status.pending ? "amber" : "ink"} />
        <StatCard
          label="Payouts due"
          value={inr(o.payouts.amount_due)}
          hint={`${o.payouts.clips_due} clip${o.payouts.clips_due === 1 ? "" : "s"} · ${o.payouts.editors_due} editor${o.payouts.editors_due === 1 ? "" : "s"}`}
          tone="green"
        />
        <StatCard label="Members" value={o.users.creators + o.users.editors} hint={`${o.users.creators} creators · ${o.users.editors} editors`} tone="purple" />
      </div>

      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="font-kugile text-[22px] text-black">Newest applications waiting</h2>
          <LinkButton href="/dashboard/admin/applications?status=pending" variant="secondary">
            Open the queue
          </LinkButton>
        </div>
        {o.recent_pending.length === 0 ? (
          <EmptyState title="You're all caught up" description="There are no applications waiting for review." />
        ) : (
          <div className={tableClasses.wrapper}>
            <table className={tableClasses.table}>
              <thead>
                <tr>
                  {["Applicant", "Type", "Status", "Submitted", ""].map((h) => (
                    <th key={h} className={tableClasses.th}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {o.recent_pending.map((a) => (
                  <tr key={a.id}>
                    <td className={tableClasses.td}>
                      <div className="flex flex-col">
                        <span className="font-medium">{a.applicant?.full_name}</span>
                        <span className="text-[12px] text-[#686868]">{a.applicant?.email}</span>
                      </div>
                    </td>
                    <td className={`${tableClasses.td} capitalize`}>{a.type}</td>
                    <td className={tableClasses.td}>
                      <StatusBadge status={a.status} />
                    </td>
                    <td className={tableClasses.td}>{formatDate(a.created_at)}</td>
                    <td className={tableClasses.td}>
                      <Link href={`/dashboard/admin/applications/${a.id}`} className="text-[#780AC1] underline">
                        Review
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
