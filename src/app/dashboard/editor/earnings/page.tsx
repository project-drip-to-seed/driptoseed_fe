import type { Metadata } from "next";
import { Card, EmptyState, ExternalLink, PageHeader, StatCard, StatusBadge, tableClasses } from "@/components/portal/ui";
import { formatDate, compactNumber, formatNumber, inr } from "@/lib/portal/format";
import { portalGet, requireRole } from "@/lib/portal/server";
import type { EditorEarnings } from "@/lib/portal/types";

export const metadata: Metadata = { title: "Earnings" };
export const dynamic = "force-dynamic";

export default async function EditorEarningsPage() {
  await requireRole("editor");
  const earnings = await portalGet<EditorEarnings>("/editor/earnings");
  const { per_clip_inr, views_threshold } = earnings.rule;

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Earnings"
        description={`${inr(per_clip_inr)} for every approved clip that reaches ${compactNumber(views_threshold)}+ views.`}
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Total earned" value={inr(earnings.total_earned)} hint={`${earnings.eligible_clips} qualifying clip${earnings.eligible_clips === 1 ? "" : "s"}`} tone="green" />
        <StatCard label="Waiting to be paid" value={inr(earnings.pending_amount)} tone="amber" />
        <StatCard label="Paid out" value={inr(earnings.paid_amount)} tone="purple" />
      </div>

      <Card className="bg-[#FBF5FF] text-[14px] leading-[1.7] text-[#404040]">
        A clip counts once our team has approved it and its views reach {compactNumber(views_threshold)}. Views are
        checked by the team, so a clip can show fewer views here than on the platform until it&apos;s next updated.
        Payouts are sent by the Drip team, and each clip is marked <strong>Paid</strong> here when they are.
      </Card>

      <section className="flex flex-col gap-4">
        <h2 className="font-kugile text-[22px] text-black">Qualifying clips</h2>
        {earnings.clips.length === 0 ? (
          <EmptyState
            title="No qualifying clips yet"
            description={`Once an approved clip passes ${compactNumber(views_threshold)} views, it'll appear here.`}
          />
        ) : (
          <div className={tableClasses.wrapper}>
            <table className={tableClasses.table}>
              <thead>
                <tr>
                  {["Clip", "Video", "Views", "Amount", "Payment"].map((h) => (
                    <th key={h} className={tableClasses.th}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {earnings.clips.map((clip) => (
                  <tr key={clip.id}>
                    <td className={tableClasses.td}>
                      <div className="flex flex-col gap-1">
                        {clip.title && <span className="font-medium">{clip.title}</span>}
                        <ExternalLink href={clip.clip_url}>Open clip</ExternalLink>
                      </div>
                    </td>
                    <td className={tableClasses.td}>{clip.content_title}</td>
                    <td className={tableClasses.td}>{formatNumber(clip.views)}</td>
                    <td className={`${tableClasses.td} font-medium text-[#146C3A]`}>{inr(clip.payout)}</td>
                    <td className={tableClasses.td}>
                      <StatusBadge status={clip.paid ? "paid" : "unpaid"} label={clip.paid ? `Paid ${formatDate(clip.paid_at)}` : "To be paid"} />
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
