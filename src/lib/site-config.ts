export const siteConfig = {
  name: "Drip",
  // The default (home page) title and the one used when a page doesn't set its own.
  title: "Drip | Creator Clipping, Seeding & Distribution Platform",
  tagline: "Grow Beyond Algorithms",
  description:
    "Drip turns one long-form video into weeks of short clips and places them across 300+ partner pages and communities, so creators grow beyond their followers.",
  // The public address. It ends up in canonical links, the sitemap and structured data, so it has to be this site's
  // own domain (NEXT_PUBLIC_SITE_URL overrides it, e.g. for a staging deployment).
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.driptoseed.com").replace(/\/+$/, ""),
  email: "driptoseed@gmail.com",
  keywords: [
    "creator growth",
    "content distribution",
    "content clipping",
    "creator seeding",
    "social media growth",
    "creator economy",
    "content repurposing",
    "audience growth",
    "short-form video clipping",
    "podcast clips",
    "video editing for creators",
  ],
  // Brand colour, used for the browser's address bar on phones and for the web app manifest.
  themeColor: "#780AC1",
  // When the site's content was last meaningfully updated (sitemap "last modified" and structured-data dates).
  contentUpdated: "2026-10-05",
  // Drip's own social profiles, used as the organization's "sameAs" links in structured data. Add them here once
  // they exist. (Placeholders were removed: twitter.com/drip and instagram.com/drip belong to other people, and
  // claiming them as ours in structured data is wrong.)
  links: {} as Record<string, string>,
};

export type SiteConfig = typeof siteConfig;
