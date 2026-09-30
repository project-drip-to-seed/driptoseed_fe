import type { Metadata } from "next";
import { ClipReviewCard } from "@/components/portal/admin-forms";
import { EmptyState, FilterTabs, PageHeader, Pagination } from "@/components/portal/ui";
import { compactNumber, formatNumber, labelOf, pageToOffset } from "@/lib/portal/format";
import { getMeta, portalGet, requireRole } from "@/lib/portal/server";
import type { Clip, Page } from "@/lib/portal/types";

export const metadata: Metadata = { title: "Clip review" };
export const dynamic = "force-dynamic";

const LIMIT = 10;

export default async function AdminClipsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; page?: string }>;
}) {
  await requireRole("admin");
  const sp = await searchParams;
  // The review queue is the point of this page, so it opens on "pending".
  const status = ["pending", "approved", "rejected", "all"].includes(sp.status ?? "") ? sp.status! : "pending";
  const offset = pageToOffset(sp.page, LIMIT);

  const [meta, list] = await Promise.all([
    getMeta(),
    portalGet<Page<Clip>>(`/admin/clips?limit=${LIMIT}&offset=${offset}${status === "all" ? "" : `&status=${status}`}`),
  ]);

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Clip review"
        description={`Approve editors' clips and record their views. ${compactNumber(meta.payout.views_threshold)}+ views on an approved clip earns ₹${meta.payout.per_clip_inr}.`}
      />

      <FilterTabs
        basePath="/dashboard/admin/clips"
        paramName="status"
        active={status}
        options={[
          { value: "pending", label: "Awaiting review" },
          { value: "approved", label: "Approved" },
          { value: "rejected", label: "Rejected" },
          { value: "all", label: "All" },
        ]}
      />

      {list.items.length === 0 ? (
        <EmptyState
          title={status === "pending" ? "Nothing to review" : "No clips here"}
          description={status === "pending" ? "New clips from editors will appear here." : undefined}
        />
      ) : (
        <div className="flex flex-col gap-5">
          {list.items.map((clip) => (
            <ClipReviewCard
              key={`${clip.id}-${clip.status}-${clip.views}-${clip.paid}`}
              clip={clip}
              platformLabel={labelOf(meta.platforms, clip.platform)}
              threshold={meta.payout.views_threshold}
            />
          ))}
        </div>
      )}

      <Pagination basePath="/dashboard/admin/clips" total={list.total} limit={list.limit} offset={list.offset} params={{ status }} />
    </div>
  );
}
