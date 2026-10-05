import type { Metadata } from "next";
import { MarkPaidButton } from "@/components/portal/admin-forms";
import { Card, EmptyState, PageHeader, StatCard, tableClasses } from "@/components/portal/ui";
import { compactNumber, formatNumber, inr } from "@/lib/portal/format";
import { portalGet, requireRole } from "@/lib/portal/server";
import type { Payouts } from "@/lib/portal/types";

export const metadata: Metadata = { title: "Payouts" };
export const dynamic = "force-dynamic";

export default async function AdminPayoutsPage() {
  await requireRole("admin");
  const payouts = await portalGet<Payouts>("/admin/payouts");

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Payouts"
        description={`Editors owed ${inr(payouts.per_clip_inr)} per approved clip with ${compactNumber(payouts.views_threshold)}+ views.`}
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Total due" value={inr(payouts.total_amount)} tone="green" />
        <StatCard label="Editors to pay" value={payouts.items.length} tone="purple" />
        <StatCard label="Clips to pay for" value={payouts.items.reduce((sum, i) => sum + i.clips, 0)} />
      </div>

      <Card className="bg-[#FBF5FF] text-[14px] leading-[1.7] text-[#404040]">
        Drip doesn&apos;t move money for you. Send each editor their amount yourself (UPI, bank transfer, etc.), then press{" "}
        <strong>Mark paid</strong> so it shows as paid in their dashboard and drops off this list.
      </Card>

      {payouts.items.length === 0 ? (
        <EmptyState title="No payouts due" description="Clips show up here once they're approved and past the view threshold." />
      ) : (
        <div className={tableClasses.wrapper}>
          <table className={tableClasses.table}>
            <thead>
              <tr>
                {["Editor", "Qualifying clips", "Amount", ""].map((h) => (
                  <th key={h} className={tableClasses.th}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {payouts.items.map((row) => (
                <tr key={row.editor_id}>
                  <td className={tableClasses.td}>
                    <div className="flex flex-col">
                      <span className="font-medium">{row.editor_name}</span>
                      <span className="text-[12px] text-[#686868]">{row.editor_email}</span>
                    </div>
                  </td>
                  <td className={tableClasses.td}>{row.clips}</td>
                  <td className={`${tableClasses.td} font-medium text-[#146C3A]`}>{inr(row.amount)}</td>
                  <td className={tableClasses.td}>
                    <MarkPaidButton editorId={row.editor_id} amount={row.amount} name={row.editor_name} clipIds={row.clip_ids} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
