import type { Metadata } from "next";
import { ClipActions } from "@/components/portal/editor-forms";
import {
  EmptyState,
  ExternalLink,
  FilterTabs,
  PageHeader,
  Pagination,
  StatusBadge,
  tableClasses,
} from "@/components/portal/ui";
import { formatDate, formatNumber, inr, labelOf, pageToOffset } from "@/lib/portal/format";
import { getMeta, portalGet, requireRole } from "@/lib/portal/server";
import type { Clip, Page } from "@/lib/portal/types";

export const metadata: Metadata = { title: "My clips" };
export const dynamic = "force-dynamic";

const LIMIT = 15;

export default async function EditorClipsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; page?: string }>;
}) {
  await requireRole("editor");
  const { status, page } = await searchParams;
  const statusParam = ["pending", "approved", "rejected"].includes(status ?? "") ? status : undefined;
  const offset = pageToOffset(page, LIMIT);

  const [meta, list] = await Promise.all([
    getMeta(),
    portalGet<Page<Clip>>(`/editor/clips?limit=${LIMIT}&offset=${offset}${statusParam ? `&status=${statusParam}` : ""}`),
  ]);

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="My videos"
        description="Every posted video you've submitted for payment. The Drip team checks it's on your approved channel and confirms its views, so open a video to see its live count on the platform."
      />

      <FilterTabs
        basePath="/dashboard/editor/clips"
        paramName="status"
        active={statusParam}
        options={[
          { value: "", label: "All" },
          { value: "pending", label: "Awaiting review" },
          { value: "approved", label: "Approved" },
          { value: "rejected", label: "Rejected" },
        ]}
      />

      {list.items.length === 0 ? (
        <EmptyState title="No videos here" description="Submit a posted video from the My jobs page and it will be listed here." />
      ) : (
        <div className={tableClasses.wrapper}>
          <table className={tableClasses.table}>
            <thead>
              <tr>
                {["Video", "For", "Status", "Views", "Payout", "Submitted", ""].map((h) => (
                  <th key={h} className={tableClasses.th}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {list.items.map((clip) => (
                <tr key={clip.id}>
                  <td className={`${tableClasses.td} min-w-[150px]`}>
                    <div className="flex flex-col gap-1">
                      {clip.title && <span className="font-medium">{clip.title}</span>}
                      <ExternalLink href={clip.clip_url}>Open video</ExternalLink>
                      <span className="text-[12px] text-[#686868]">{labelOf(meta.platforms, clip.platform)}</span>
                      {clip.status === "rejected" && clip.review?.note && (
                        <span className="mt-1 rounded-lg bg-[#FDE2E2] px-2 py-1 text-[12px] leading-[1.4] text-[#9B1C1C]">
                          Feedback: {clip.review.note}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className={tableClasses.td}>{clip.content_title}</td>
                  <td className={tableClasses.td}>
                    <div className="flex flex-col items-start gap-1.5">
                      <StatusBadge status={clip.status} label={clip.status === "pending" ? "Awaiting review" : undefined} />
                      {clip.channel_check && (
                        <StatusBadge
                          status={clip.channel_check.status === "verified" ? "approved" : "pending"}
                          label={clip.channel_check.status === "verified" ? "Channel matched" : "Team will confirm channel"}
                        />
                      )}
                    </div>
                  </td>
                  <td className={tableClasses.td}>
                    {clip.status === "approved" ? (
                      <div className="flex flex-col gap-1">
                        <span>{formatNumber(clip.views)}</span>
                        <span className="text-[12px] text-[#686868]">
                          {clip.views_updated_at ? `Updated ${formatDate(clip.views_updated_at)}` : "Not updated yet"}
                        </span>
                      </div>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className={tableClasses.td}>
                    {clip.eligible ? (
                      <div className="flex flex-col gap-1">
                        <span className="font-medium text-[#146C3A]">{inr(clip.payout)}</span>
                        <StatusBadge status={clip.paid ? "paid" : "unpaid"} label={clip.paid ? "Paid" : "To be paid"} />
                      </div>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className={tableClasses.td}>{formatDate(clip.created_at)}</td>
                  <td className={`${tableClasses.td} min-w-[140px]`}>
                    <ClipActions clipId={clip.id} status={clip.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Pagination
        basePath="/dashboard/editor/clips"
        total={list.total}
        limit={list.limit}
        offset={list.offset}
        params={{ status: statusParam }}
      />
    </div>
  );
}
