export const siteConfig = {
  name: "Drip",
  title: "Drip - Grow Beyond Algorithms",
  description:
    "Drip helps creators grow beyond algorithms through strategic content seeding, clipping, and distribution — giving every piece of content multiple chances to reach the right audience.",
  // The public address. It ends up in canonical links, the sitemap and structured data, so it has to be this site's
  // own domain (NEXT_PUBLIC_SITE_URL overrides it, e.g. for a staging deployment).
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.driptoseed.com").replace(/\/+$/, ""),
  keywords: [
    "creator growth",
    "content distribution",
    "content clipping",
    "social media growth",
    "creator economy",
    "content repurposing",
    "audience growth",
    "short-form video clipping",
  ],
  // Drip's own social profiles, used as the organization's "sameAs" links in structured data. Add them here once
  // they exist. (Placeholders were removed: twitter.com/drip and instagram.com/drip belong to other people, and
  // claiming them as ours in structured data is wrong.)
  links: {} as Record<string, string>,
};

export type SiteConfig = typeof siteConfig;
