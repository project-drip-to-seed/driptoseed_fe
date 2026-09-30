import type { Metadata } from "next";
import Link from "next/link";
import ApplicationBanner from "@/components/portal/application-banner";
import { EmptyState, LinkButton, PageHeader, StatCard, StatusBadge, tableClasses } from "@/components/portal/ui";
import { formatDate, formatNumber } from "@/lib/portal/format";
import { portalGet, requireRole } from "@/lib/portal/server";
import type { ContentItem, CreatorOverview, Page } from "@/lib/portal/types";

export const metadata: Metadata = { title: "Creator overview" };
export const dynamic = "force-dynamic";

export default async function CreatorOverviewPage() {
  const session = await requireRole("creator");
  const [overview, recent] = await Promise.all([
    portalGet<CreatorOverview>("/creator/overview"),
    portalGet<Page<ContentItem>>("/creator/content?limit=5"),
  ]);
  const approved = overview.application?.status === "approved";
  const { stats } = overview;
  const firstName = session.user.full_name.split(" ")[0] || "there";

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title={`Welcome, ${firstName}`}
        description="Submit long-form videos, and follow the clips our editors make from them."
        action={approved ? <LinkButton href="/dashboard/creator/content">Submit a video</LinkButton> : undefined}
      />

      <ApplicationBanner application={overview.application} />

      {approved && (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="Videos submitted" value={stats.content_total} hint={`${stats.content_by_status.open} open`} />
            <StatCard label="Clips made" value={stats.clips_total} hint={`${stats.clips_by_status.pending} awaiting review`} tone="purple" />
            <StatCard label="Approved clips" value={stats.clips_by_status.approved} tone="green" />
            <StatCard label="Total views" value={formatNumber(stats.total_views)} hint="Across approved clips" tone="purple" />
          </div>

          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-kugile text-[22px] text-black">Recent videos</h2>
              <Link href="/dashboard/creator/content" className="text-[14px] text-[#780AC1] underline">
                View all
              </Link>
            </div>
            {recent.items.length === 0 ? (
              <EmptyState
                title="No videos yet"
                description="Submit your first long-form video and editors can start turning it into clips."
                action={<LinkButton href="/dashboard/creator/content">Submit a video</LinkButton>}
              />
            ) : (
              <div className={tableClasses.wrapper}>
                <table className={tableClasses.table}>
                  <thead>
                    <tr>
                      {["Title", "Niche", "Status", "Clips", "Submitted"].map((h) => (
                        <th key={h} className={tableClasses.th}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {recent.items.map((item) => (
                      <tr key={item.id}>
                        <td className={tableClasses.td}>
                          <Link href={`/dashboard/creator/content/${item.id}`} className="font-medium text-[#780AC1] hover:underline">
                            {item.title}
                          </Link>
                        </td>
                        <td className={tableClasses.td}>{item.niche}</td>
                        <td className={tableClasses.td}>
                          <StatusBadge status={item.status} />
                        </td>
                        <td className={tableClasses.td}>{item.clips ?? 0}</td>
                        <td className={tableClasses.td}>{formatDate(item.created_at)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}
