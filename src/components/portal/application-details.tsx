// Read-only summary of an application (used by applicants and by admins reviewing it).

import { formatDateTime, labelOf, labelsOf } from "@/lib/portal/format";
import type { Application, Meta } from "@/lib/portal/types";
import { DefinitionRow, ExternalLink, StatusBadge } from "./ui";

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

export default function ApplicationDetails({ application, meta }: { application: Application; meta: Meta }) {
  const d = application.data as Record<string, unknown>;

  if (application.type === "creator") {
    const socials = Object.entries((d.socials ?? {}) as Record<string, string>);
    return (
      <dl>
        <DefinitionRow label="Niche">{String(d.niche ?? "—")}</DefinitionRow>
        <DefinitionRow label="Audience size">{labelOf(meta.audience_sizes, String(d.audience_size ?? ""))}</DefinitionRow>
        <DefinitionRow label="Publishes">{labelOf(meta.publish_frequencies, String(d.publish_frequency ?? ""))}</DefinitionRow>
        <DefinitionRow label="Content types">{labelsOf(meta.content_types, d.content_types)}</DefinitionRow>
        <DefinitionRow label="Channels">
          {socials.length ? (
            <ul className="flex flex-col gap-1">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <span className="mr-2 capitalize text-[#686868]">{name}:</span>
                  <ExternalLink href={url} />
                </li>
              ))}
            </ul>
          ) : (
            "—"
          )}
        </DefinitionRow>
        <DefinitionRow label="Sample videos">
          <Links links={d.sample_links} />
        </DefinitionRow>
        <DefinitionRow label="Goals">{String(d.goals || "—")}</DefinitionRow>
      </dl>
    );
  }

  return (
    <dl>
      <DefinitionRow label="Portfolio">
        {d.portfolio_url ? <ExternalLink href={String(d.portfolio_url)} /> : "—"}
      </DefinitionRow>
      <DefinitionRow label="Experience">{labelOf(meta.experience_levels, String(d.experience ?? ""))}</DefinitionRow>
      <DefinitionRow label="Availability">{labelOf(meta.weekly_availability, String(d.weekly_availability ?? ""))}</DefinitionRow>
      <DefinitionRow label="Tools">{labelsOf(meta.editing_tools, d.tools)}</DefinitionRow>
      <DefinitionRow label="Niches">{Array.isArray(d.niches) ? (d.niches as string[]).join(", ") : "—"}</DefinitionRow>
      <DefinitionRow label="Platforms">{labelsOf(meta.platforms, d.platforms)}</DefinitionRow>
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
