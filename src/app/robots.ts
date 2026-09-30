import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Signed-in areas and the API proxy have nothing worth indexing.
      disallow: ["/dashboard", "/login", "/api/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
