import type { Metadata } from "next";
import CreatorChannels from "@/components/portal/creator-channels";
import { JobActions } from "@/components/portal/editor-forms";
import { Card, EmptyState, ExternalLink, LinkButton, PageHeader, Pill, StatusBadge } from "@/components/portal/ui";
import { formatDate } from "@/lib/portal/format";
import { getMeta, portalGet, requireRole } from "@/lib/portal/server";
import type { ContentItem } from "@/lib/portal/types";

export const metadata: Metadata = { title: "My jobs" };
export const dynamic = "force-dynamic";

export default async function EditorJobsPage() {
  await requireRole("editor");
  const [{ items }, meta] = await Promise.all([portalGet<{ items: ContentItem[] }>("/editor/jobs"), getMeta()]);

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="My jobs"
        description="Videos you've taken on. Edit clips from them, then submit each clip's link here."
        action={<LinkButton href="/dashboard/editor/available" variant="secondary">Find more content</LinkButton>}
      />

      {items.length === 0 ? (
        <EmptyState
          title="You haven't taken on any videos yet"
          description="Browse what's available and pick one that suits your style."
          action={<LinkButton href="/dashboard/editor/available">Find content</LinkButton>}
        />
      ) : (
        <div className="flex flex-col gap-5">
          {items.map((item) => (
            <Card key={item.id} className="flex flex-col gap-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Pill>{item.niche}</Pill>
                    <StatusBadge status={item.status} />
                  </div>
                  <h2 className="text-[19px] font-medium leading-[1.35] text-black">{item.title}</h2>
                  <p className="text-[13px] text-[#686868]">
                    From {item.creator_name} · added {formatDate(item.created_at)} · {item.my_clips ?? 0} clip
                    {item.my_clips === 1 ? "" : "s"} submitted, {item.my_approved_clips ?? 0} approved
                  </p>
                </div>
                <div className="text-[14px]">
                  <ExternalLink href={item.video_url}>Watch the source video</ExternalLink>
                </div>
              </div>
              <CreatorChannels profile={item.creator_profile} audienceSizes={meta.audience_sizes} />
              {item.description && (
                <p className="rounded-2xl bg-[#FBF5FF] p-4 text-[14px] leading-[1.6] text-[#404040]">
                  <span className="mb-1 block text-[12px] font-medium uppercase tracking-[0.05em] text-[#686868]">
                    Creator&apos;s notes
                  </span>
                  {item.description}
                </p>
              )}
              <JobActions
                contentId={item.id}
                contentOpen={item.status === "open"}
                canRelease={(item.my_clips ?? 0) === 0}
                platforms={meta.platforms}
              />
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
