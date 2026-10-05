import type { CreatorProfile, Option } from "@/lib/portal/types";
import { labelOf } from "@/lib/portal/format";
import { safeHref } from "@/lib/safe-url";

const CHANNELS: { key: string; label: string }[] = [
  { key: "instagram", label: "Instagram" },
  { key: "youtube", label: "YouTube" },
  { key: "tiktok", label: "TikTok" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "website", label: "Website" },
];

/**
 * The creator's public channels, so an editor can open them and see how the
 * creator's content (and the clips made from it) is performing.
 */
export default function CreatorChannels({
  profile,
  audienceSizes,
}: {
  profile: CreatorProfile | null | undefined;
  audienceSizes: Option[];
}) {
  if (!profile) return null;
  // The API only stores http(s) links; this keeps a bad value from ever becoming a clickable link.
  const links = CHANNELS.flatMap(({ key, label }) => {
    const href = safeHref(profile.socials[key]);
    return href ? [{ key, label, href }] : [];
  });
  if (links.length === 0) return null;

  return (
    <div className="flex flex-col gap-2">
      <p className="text-[12px] font-medium uppercase tracking-[0.05em] text-[#686868]">
        Creator&apos;s channels
        {profile.audience_size && (
          <span className="font-normal normal-case tracking-normal">
            {" "}
            · {labelOf(audienceSizes, profile.audience_size)} followers
          </span>
        )}
      </p>
      <ul className="flex flex-wrap gap-2">
        {links.map(({ key, label, href }) => (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={`${label} channel (opens in a new tab)`}
              className="inline-flex items-center gap-1 rounded-full border border-[#D59EFB]/70 bg-white px-3.5 py-2.5 text-[13px] leading-none text-[#780AC1] transition-colors hover:bg-[#EED7FF66]"
            >
              {label}
              <span aria-hidden>↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
