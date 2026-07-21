import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/network`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/solutions`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/resources`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${siteConfig.url}/resources/${study.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
