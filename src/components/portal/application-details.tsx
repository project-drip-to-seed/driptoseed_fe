// Read-only summary of an application (used by applicants and by admins reviewing it).

import { formatDateTime, labelOf, labelsOf } from "@/lib/portal/format";
import type { Application, Meta } from "@/lib/portal/types";
import ChannelList from "./channel-list";
import { Card, DefinitionRow, ExternalLink, StatusBadge } from "./ui";

function Links({ links }: { links: unknown }) {
  const list = Array.isArray(links) ? (links as string[]) : [];
  if (!list.length) return <>—</>;
  return (
    <ul className="flex flex-col gap-1">
      {list.map((link) => (
        <li key={link}>
          <ExternalLink href={link} />
        </li>
      ))}
    </ul>
  );
}

const socialsOf = (application: Application) => (application.data.socials ?? {}) as Record<string, string>;

/**
 * The first thing an admin looks at: the channels this person gave. Creators and editors both have to show
 * theirs, and an editor can only be paid for videos posted on one of their approved channels.
 */
export function ChannelsToCheck({ application }: { application: Application }) {
  return (
    <Card className="flex flex-col gap-3 border-[#780AC1]/40 bg-[#FBF5FF]">
      <div className="flex flex-col gap-1">
        <h2 className="font-kugile text-[20px] text-black">Channels to check</h2>
        <p className="text-[14px] leading-[1.6] text-[#404040]">
          Open each link before you decide.{" "}
          {application.type === "editor"
            ? "This editor will post on these channels, and can only be paid for videos posted on them."
            : "Approve only if these are real and belong to this applicant."}
        </p>
      </div>
      <ChannelList socials={socialsOf(application)} emptyText="No channels were listed (an older application). Ask for them before approving." />
      <VerificationCode application={application} audience="admin" />
    </Card>
  );
}

/** The code that proves a channel is really the applicant's: they put it in the channel's bio or description. */
export function VerificationCode({ application, audience }: { application: Application; audience: "admin" | "applicant" }) {
  if (!application.verification_code) return null;
  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-dashed border-[#780AC1]/50 bg-white p-3">
      <span className="text-[12px] font-medium uppercase tracking-[0.05em] text-[#686868]">Verification code</span>
      <code className="w-fit select-all rounded-lg bg-[#EED7FF66] px-2.5 py-1 font-mono text-[15px] tracking-[0.08em] text-black">
        {application.verification_code}
      </code>
      <p className="text-[13px] leading-[1.6] text-[#404040]">
        {audience === "admin"
          ? "Look for this exact code in the bio or description of each channel above. If it isn't there, the applicant may not own the channel."
          : "Add this code to the bio or description of each channel you listed. The Drip team looks for it to confirm the channels are yours. You can remove it after you're approved."}
      </p>
    </div>
  );
}

export default function ApplicationDetails({
  application,
  meta,
  showChannels = true,
}: {
  application: Application;
  meta: Meta;
  /** The admin page shows channels in their own card above, so it turns this off. */
  showChannels?: boolean;
}) {
  const d = application.data as Record<string, unknown>;
  const channels = showChannels ? (
    <DefinitionRow label="Channels">
      <ChannelList socials={socialsOf(application)} emptyText="None listed" />
    </DefinitionRow>
  ) : null;

  if (application.type === "creator") {
    return (
      <dl>
        <DefinitionRow label="Applying as">{labelOf(meta.creator_types, String(d.creator_type ?? ""))}</DefinitionRow>
        <DefinitionRow label="Niche">{String(d.niche ?? "—")}</DefinitionRow>
        <DefinitionRow label="Audience size">{labelOf(meta.audience_sizes, String(d.audience_size ?? ""))}</DefinitionRow>
        <DefinitionRow label="Publishes">{labelOf(meta.publish_frequencies, String(d.publish_frequency ?? ""))}</DefinitionRow>
        <DefinitionRow label="Content types">{labelsOf(meta.content_types, d.content_types)}</DefinitionRow>
        {channels}
        <DefinitionRow label="Sample videos">
          <Links links={d.sample_links} />
        </DefinitionRow>
        <DefinitionRow label="Goals">{String(d.goals || "—")}</DefinitionRow>
      </dl>
    );
  }

  return (
    <dl>
      {channels}
      <DefinitionRow label="Portfolio">
        {d.portfolio_url ? <ExternalLink href={String(d.portfolio_url)} /> : "—"}
      </DefinitionRow>
      <DefinitionRow label="Experience">{labelOf(meta.experience_levels, String(d.experience ?? ""))}</DefinitionRow>
      <DefinitionRow label="Availability">{labelOf(meta.weekly_availability, String(d.weekly_availability ?? ""))}</DefinitionRow>
      <DefinitionRow label="Tools">{labelsOf(meta.editing_tools, d.tools)}</DefinitionRow>
      <DefinitionRow label="Niches">{Array.isArray(d.niches) ? (d.niches as string[]).join(", ") : "—"}</DefinitionRow>
      {Array.isArray(d.platforms) && d.platforms.length > 0 && (
        <DefinitionRow label="Platforms">{labelsOf(meta.platforms, d.platforms)}</DefinitionRow>
      )}
      <DefinitionRow label="Sample clips">
        <Links links={d.sample_links} />
      </DefinitionRow>
      <DefinitionRow label="Motivation">{String(d.motivation || "—")}</DefinitionRow>
    </dl>
  );
}

export function ApplicationHistory({ application }: { application: Application }) {
  return (
    <ol className="flex flex-col gap-4">
      {[...application.history].reverse().map((entry, index) => (
        <li key={`${entry.at}-${index}`} className="flex gap-3">
          <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-[#780AC1]" aria-hidden="true" />
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <StatusBadge status={entry.status} />
              <span className="text-[13px] text-[#686868]">
                {formatDateTime(entry.at)} · {entry.by}
              </span>
            </div>
            {entry.note && <p className="text-[14px] leading-[1.5] text-[#404040]">{entry.note}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
