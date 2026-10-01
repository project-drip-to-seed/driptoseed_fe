// Channels: the places a creator or editor shows their work. Both roles list them when applying and the
// admin approves them. An editor then posts on those channels and submits the video link for payment.

import type { Option } from "./types";

export const CHANNELS = [
  { key: "instagram", label: "Instagram", placeholder: "https://instagram.com/yourname" },
  { key: "youtube", label: "YouTube", placeholder: "https://youtube.com/@yourchannel" },
  { key: "tiktok", label: "TikTok", placeholder: "https://tiktok.com/@yourname" },
  { key: "linkedin", label: "LinkedIn", placeholder: "https://linkedin.com/in/yourname" },
  { key: "website", label: "Website", placeholder: "https://" },
] as const;

export type ChannelKey = (typeof CHANNELS)[number]["key"];

export const channelLabel = (key: string): string => CHANNELS.find((c) => c.key === key)?.label ?? key;

/** The channel an editor must have for each platform they can post on (mirrors the API). */
const PLATFORM_CHANNEL: Record<string, ChannelKey> = {
  instagram: "instagram",
  youtube_shorts: "youtube",
  tiktok: "tiktok",
  linkedin: "linkedin",
  other: "website",
};

/** Only the platforms the editor listed a channel for. */
export function platformsWithChannel(platforms: Option[], socials: Record<string, string>): Option[] {
  return platforms.filter((p) => Boolean(socials[PLATFORM_CHANNEL[p.value]]));
}

/** Guess the platform from a pasted link, so the editor doesn't have to pick it. */
export function detectPlatform(url: string): string | null {
  let host = "";
  try {
    host = new URL(url.trim()).hostname.toLowerCase();
  } catch {
    return null;
  }
  const is = (...domains: string[]) => domains.some((d) => host === d || host.endsWith(`.${d}`));
  if (is("instagram.com", "instagr.am")) return "instagram";
  if (is("youtube.com", "youtu.be")) return "youtube_shorts";
  if (is("tiktok.com")) return "tiktok";
  if (is("linkedin.com", "lnkd.in")) return "linkedin";
  return null;
}
