import type { Metadata } from "next";
import Link from "next/link";
import { SubmitContentForm } from "@/components/portal/creator-forms";
import {
  EmptyState,
  ExternalLink,
  FilterTabs,
  PageHeader,
  Pagination,
  StatusBadge,
  tableClasses,
} from "@/components/portal/ui";
import { formatDate, formatNumber, pageToOffset } from "@/lib/portal/format";
import { getMeta, portalGet, requireRole } from "@/lib/portal/server";
import type { ContentItem, Page } from "@/lib/portal/types";

export const metadata: Metadata = { title: "My content" };
export const dynamic = "force-dynamic";

const LIMIT = 10;

export default async function CreatorContentPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; page?: string }>;
}) {
  const session = await requireRole("creator");
  const { status, page } = await searchParams;
  const offset = pageToOffset(page, LIMIT);
  const statusParam = status === "open" || status === "closed" ? status : undefined;

  const [meta, list] = await Promise.all([
    getMeta(),
    portalGet<Page<ContentItem>>(
      `/creator/content?limit=${LIMIT}&offset=${offset}${statusParam ? `&status=${statusParam}` : ""}`,
    ),
  ]);
  const approved = session.application?.status === "approved";

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="My content"
        description="Long-form videos you've shared for clipping, and how they're doing."
      />

      {approved ? (
        <SubmitContentForm niches={meta.niches} maxOpen={meta.limits.max_open_content_per_creator} />
      ) : (
        <EmptyState
          title="Submitting videos unlocks once you're approved"
          description="Check your application status on the Overview page."
        />
      )}

      <section className="flex flex-col gap-4">
        <FilterTabs
          basePath="/dashboard/creator/content"
          paramName="status"
          active={statusParam}
          options={[
            { value: "", label: "All" },
            { value: "open", label: "Open" },
            { value: "closed", label: "Closed" },
          ]}
        />

        {list.items.length === 0 ? (
          <EmptyState title="Nothing here yet" description="Videos you submit will show up in this list." />
        ) : (
          <div className={tableClasses.wrapper}>
            <table className={tableClasses.table}>
              <thead>
                <tr>
                  {["Title", "Niche", "Status", "Editors", "Clips", "Views", "Submitted"].map((h) => (
                    <th key={h} className={tableClasses.th}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {list.items.map((item) => (
                  <tr key={item.id}>
                    <td className={tableClasses.td}>
                      <div className="flex flex-col gap-1">
                        <Link href={`/dashboard/creator/content/${item.id}`} className="font-medium text-[#780AC1] hover:underline">
                          {item.title}
                        </Link>
                        <span className="text-[12px]">
                          <ExternalLink href={item.video_url}>Source video</ExternalLink>
                        </span>
                      </div>
                    </td>
                    <td className={tableClasses.td}>{item.niche}</td>
                    <td className={tableClasses.td}>
                      <StatusBadge status={item.status} />
                    </td>
                    <td className={tableClasses.td}>{item.claim_count}</td>
                    <td className={tableClasses.td}>{item.clips ?? 0}</td>
                    <td className={tableClasses.td}>{formatNumber(item.views ?? 0)}</td>
                    <td className={tableClasses.td}>{formatDate(item.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <Pagination
          basePath="/dashboard/creator/content"
          total={list.total}
          limit={list.limit}
          offset={list.offset}
          params={{ status: statusParam }}
        />
      </section>
    </div>
  );
}
