import type { Metadata } from "next";
import ApplicationBanner from "@/components/portal/application-banner";
import { Card, LinkButton, PageHeader, StatCard } from "@/components/portal/ui";
import { compactNumber, formatNumber, inr } from "@/lib/portal/format";
import { getMeta, portalGet, requireRole } from "@/lib/portal/server";
import type { EditorOverview } from "@/lib/portal/types";

export const metadata: Metadata = { title: "Editor overview" };
export const dynamic = "force-dynamic";

export default async function EditorOverviewPage() {
  const session = await requireRole("editor");
  const [overview, meta] = await Promise.all([portalGet<EditorOverview>("/editor/overview"), getMeta()]);
  const approved = overview.application?.status === "approved";
  const { stats } = overview;
  const firstName = session.user.full_name.split(" ")[0] || "there";

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title={`Welcome, ${firstName}`}
        description={`You earn ${inr(meta.payout.per_clip_inr)} for every approved clip that reaches ${compactNumber(
          meta.payout.views_threshold,
        )}+ views.`}
        action={approved ? <LinkButton href="/dashboard/editor/available">Find content</LinkButton> : undefined}
      />

      <ApplicationBanner application={overview.application} />

      {approved && (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard label="Earned" value={inr(stats.total_earned)} hint={`${stats.eligible_clips} clip${stats.eligible_clips === 1 ? "" : "s"} past the line`} tone="green" />
            <StatCard label="Waiting to be paid" value={inr(stats.pending_amount)} hint={`${inr(stats.paid_amount)} already paid`} tone="amber" />
            <StatCard label="Active jobs" value={stats.active_jobs} hint={`Up to ${meta.limits.max_active_claims_per_editor} at once`} tone="purple" />
            <StatCard label="Awaiting review" value={stats.clips_by_status.pending} />
            <StatCard label="Approved clips" value={stats.clips_by_status.approved} tone="green" />
            <StatCard label="Views on approved clips" value={formatNumber(stats.total_views)} tone="purple" />
          </div>

          <Card className="flex flex-col gap-3 bg-[#FBF5FF]">
            <h2 className="font-kugile text-[20px] text-black">How it works</h2>
            <ol className="flex list-decimal flex-col gap-2 pl-5 text-[15px] leading-[1.6] text-[#404040]">
              <li>
                <strong>Find content</strong>: pick a creator&apos;s long-form video you&apos;d like to edit. Up to{" "}
                {meta.limits.max_editors_per_content} editors can work on each one.
              </li>
              <li>
                <strong>Submit clips</strong>: paste the link to each edit. Every clip link can only be submitted once.
              </li>
              <li>
                <strong>Get reviewed</strong>: once a clip is approved, its views are tracked. Reach{" "}
                {compactNumber(meta.payout.views_threshold)} and it earns {inr(meta.payout.per_clip_inr)}.
              </li>
            </ol>
          </Card>
        </>
      )}
    </div>
  );
}
