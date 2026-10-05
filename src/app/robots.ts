import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The signed-in areas and the API proxy have nothing worth indexing. (/login is NOT blocked here: it carries a
      // noindex tag, and a search engine can only obey that tag if it is allowed to read the page.)
      disallow: ["/dashboard", "/api/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
