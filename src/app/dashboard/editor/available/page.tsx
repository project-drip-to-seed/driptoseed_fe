import type { Metadata } from "next";
import CreatorChannels from "@/components/portal/creator-channels";
import { ClaimButton } from "@/components/portal/editor-forms";
import { Card, EmptyState, ExternalLink, FilterTabs, PageHeader, Pagination, Pill } from "@/components/portal/ui";
import { formatDate, pageToOffset } from "@/lib/portal/format";
import { getMeta, portalGet, requireRole } from "@/lib/portal/server";
import type { ContentItem, Page } from "@/lib/portal/types";

export const metadata: Metadata = { title: "Find content" };
export const dynamic = "force-dynamic";

const LIMIT = 9;

export default async function AvailableContentPage({
  searchParams,
}: {
  searchParams: Promise<{ niche?: string; page?: string }>;
}) {
  const session = await requireRole("editor");
  const { niche, page } = await searchParams;
  const meta = await getMeta();
  const nicheParam = meta.niches.some((n) => n.value === niche) ? niche : undefined;
  const approved = session.application?.status === "approved";

  if (!approved) {
    return (
      <div className="flex flex-col gap-6">
        <PageHeader title="Find content" />
        <EmptyState
          title="Available content unlocks once you're approved"
          description="Check your application status on the Overview page."
        />
      </div>
    );
  }

  const offset = pageToOffset(page, LIMIT);
  const list = await portalGet<Page<ContentItem>>(
    `/editor/available?limit=${LIMIT}&offset=${offset}${nicheParam ? `&niche=${encodeURIComponent(nicheParam)}` : ""}`,
  );

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Find content"
        description="Long-form videos from approved creators that still have room for another editor."
      />

      <FilterTabs
        basePath="/dashboard/editor/available"
        paramName="niche"
        active={nicheParam}
        options={[{ value: "", label: "All niches" }, ...meta.niches.map((n) => ({ value: n.value, label: n.label }))]}
      />

      {list.items.length === 0 ? (
        <EmptyState
          title="Nothing available right now"
          description={
            nicheParam
              ? `No open ${nicheParam} videos have a free slot. Try another niche, or check back soon.`
              : "Check back soon. New videos appear as creators submit them."
          }
        />
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {list.items.map((item) => (
            <Card key={item.id} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Pill>{item.niche}</Pill>
                  <span className="text-[12px] text-[#686868]">
                    {item.slots_left} slot{item.slots_left === 1 ? "" : "s"} left
                  </span>
                </div>
                <h2 className="text-[18px] font-medium leading-[1.35] text-black">{item.title}</h2>
                <p className="text-[13px] text-[#686868]">
                  From {item.creator_name} · {formatDate(item.created_at)}
                </p>
              </div>
              {item.description && <p className="line-clamp-4 text-[14px] leading-[1.6] text-[#404040]">{item.description}</p>}
              <div className="text-[13px]">
                <ExternalLink href={item.video_url}>Watch the source video</ExternalLink>
              </div>
              <CreatorChannels profile={item.creator_profile} audienceSizes={meta.audience_sizes} />
              <div className="mt-auto">
                <ClaimButton contentId={item.id} />
              </div>
            </Card>
          ))}
        </div>
      )}

      <Pagination
        basePath="/dashboard/editor/available"
        total={list.total}
        limit={list.limit}
        offset={list.offset}
        params={{ niche: nicheParam }}
      />
    </div>
  );
}
