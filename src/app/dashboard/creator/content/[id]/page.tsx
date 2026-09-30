import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentActions } from "@/components/portal/creator-forms";
import {
  Card,
  DefinitionRow,
  EmptyState,
  ExternalLink,
  Pill,
  StatCard,
  StatusBadge,
  tableClasses,
} from "@/components/portal/ui";
import { formatDate, formatNumber, labelOf } from "@/lib/portal/format";
import { getMeta, NotFoundError, portalGet, requireRole } from "@/lib/portal/server";
import type { Clip, ContentItem } from "@/lib/portal/types";

export const metadata: Metadata = { title: "Video details" };
export const dynamic = "force-dynamic";

interface Detail {
  content: ContentItem;
  editors: string[];
  clips: (Clip & { editor_name: string })[];
}

export default async function CreatorContentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  await requireRole("creator");
  const { id } = await params;

  let detail: Detail;
  try {
    detail = await portalGet<Detail>(`/creator/content/${encodeURIComponent(id)}`);
  } catch (error) {
    if (error instanceof NotFoundError) notFound();
    throw error;
  }
  const meta = await getMeta();
  const { content, editors, clips } = detail;
  const activeClips = clips.filter((c) => c.status !== "rejected");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Link href="/dashboard/creator/content" className="w-fit text-[14px] text-[#780AC1] hover:underline">
          ← Back to my content
        </Link>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-kugile text-[26px] leading-[1.3] text-black sm:text-[32px]">{content.title}</h1>
              <StatusBadge status={content.status} />
            </div>
            <p className="text-[14px] text-[#686868]">
              {content.niche} · Submitted {formatDate(content.created_at)}
            </p>
          </div>
          <ContentActions id={content.id} status={content.status} canDelete={content.claim_count === 0 && clips.length === 0} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Editors on it" value={`${content.claim_count}/${meta.limits.max_editors_per_content}`} />
        <StatCard label="Clips made" value={activeClips.length} tone="purple" />
        <StatCard label="Views on approved clips" value={formatNumber(content.views ?? 0)} tone="green" />
      </div>

      <Card>
        <dl>
          <DefinitionRow label="Source video">
            <ExternalLink href={content.video_url} />
          </DefinitionRow>
          <DefinitionRow label="Notes for editors">{content.description || "—"}</DefinitionRow>
          <DefinitionRow label="Editors working on it">
            {editors.length ? (
              <span className="flex flex-wrap gap-2">
                {editors.map((name, i) => (
                  <Pill key={`${name}-${i}`}>{name}</Pill>
                ))}
              </span>
            ) : (
              "No editor has picked this up yet"
            )}
          </DefinitionRow>
        </dl>
      </Card>

      <section className="flex flex-col gap-4">
        <h2 className="font-kugile text-[22px] text-black">Clips</h2>
        {clips.length === 0 ? (
          <EmptyState
            title="No clips yet"
            description={
              content.status === "open"
                ? "Editors can see this video now. Clips will appear here as they're submitted."
                : "This video is closed to new clips."
            }
          />
        ) : (
          <div className={tableClasses.wrapper}>
            <table className={tableClasses.table}>
              <thead>
                <tr>
                  {["Clip", "Platform", "Editor", "Status", "Views", "Submitted"].map((h) => (
                    <th key={h} className={tableClasses.th}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {clips.map((clip) => (
                  <tr key={clip.id}>
                    <td className={tableClasses.td}>
                      <div className="flex flex-col gap-1">
                        {clip.title && <span className="font-medium">{clip.title}</span>}
                        <ExternalLink href={clip.clip_url}>Open clip</ExternalLink>
                      </div>
                    </td>
                    <td className={tableClasses.td}>{labelOf(meta.platforms, clip.platform)}</td>
                    <td className={tableClasses.td}>{clip.editor_name}</td>
                    <td className={tableClasses.td}>
                      <StatusBadge status={clip.status} />
                    </td>
                    <td className={tableClasses.td}>{clip.status === "approved" ? formatNumber(clip.views) : "—"}</td>
                    <td className={tableClasses.td}>{formatDate(clip.created_at)}</td>
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
