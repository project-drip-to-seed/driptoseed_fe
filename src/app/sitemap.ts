import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { nicheIllustrations } from "@/lib/niche-illustrations";
import { type PageKey, pages } from "@/lib/page-seo";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { stockVideos } from "@/lib/stock-videos";

// Every page worth finding, with the pictures and videos shown on it, so image and video search can pick them up too.
// Pages kept out of search results (the login page) are not listed.

const lastModified = new Date(siteConfig.contentUpdated);

// Pictures worth indexing: the real content of the page, not background glows or icons.
const imagesByPage: Partial<Record<PageKey, string[]>> = {
  home: [
    "/media/dashboard-mockup-v1.webp",
    "/general_assets/people_image_hero_sec.svg",
    ...nicheIllustrations.map((niche) => niche.image),
  ],
};

const videosByPage: Partial<Record<PageKey, MetadataRoute.Sitemap[number]["videos"]>> = {
  creatorClipping: [...stockVideos.heroClips, ...stockVideos.longForm].map((clip) => ({
    title: clip.label,
    description: `${clip.label}. A sample of the short, platform-ready clips Drip's editors cut from one long-form video.`,
    thumbnail_loc: absoluteUrl(clip.poster),
    content_loc: absoluteUrl(clip.src),
    duration: clip.seconds,
    family_friendly: "yes",
  })),
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = (Object.keys(pages) as PageKey[])
    .filter((key) => !("noindex" in pages[key] && pages[key].noindex))
    .map((key) => {
      const page = pages[key];
      return {
        url: absoluteUrl(page.path),
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        images: imagesByPage[key]?.map(absoluteUrl),
        videos: videosByPage[key],
      };
    });

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: absoluteUrl(`/resources/${study.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
    images: [absoluteUrl(`/resources/${study.slug}/opengraph-image`)],
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
