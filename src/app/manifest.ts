import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// The "web app manifest": the name, colours and icons a phone or browser uses when the site is added to a home
// screen, and what some search engines read to learn the site's name and brand colour.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: "#F2E7F9",
    theme_color: siteConfig.themeColor,
    lang: "en",
    categories: ["business", "productivity", "social"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
