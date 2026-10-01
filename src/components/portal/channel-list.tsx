// The channels someone gave when applying, as links the admin (or the person themselves) can open.

import { channelLabel } from "@/lib/portal/channels";
import { ExternalLink } from "./ui";

export default function ChannelList({
  socials,
  emptyText = "No channels listed.",
}: {
  socials: Record<string, string> | null | undefined;
  emptyText?: string;
}) {
  const entries = Object.entries(socials ?? {}).filter(([, url]) => Boolean(url));
  if (entries.length === 0) {
    return <p className="text-[14px] text-[#9B1C1C]">{emptyText}</p>;
  }
  return (
    <ul className="flex flex-col gap-2">
      {entries.map(([key, url]) => (
        <li key={key} className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 text-[14px]">
          <span className="w-[84px] shrink-0 font-medium text-black">{channelLabel(key)}</span>
          <ExternalLink href={url} />
        </li>
      ))}
    </ul>
  );
}
