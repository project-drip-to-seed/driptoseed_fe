// What each public page says about itself to search engines and when its link is shared: the title, the
// description, the schema.org page type and how often it changes. The pages, the sitemap and the structured data
// all read from here, so a title is only ever written once.
//
// Titles: aim for 60 characters or fewer INCLUDING the " | Drip" the site adds, with the main words first.
// Descriptions: 120 to 158 characters, one sentence that says what the visitor gets. Search engines cut longer ones.

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export type PageEntry = {
  path: string;
  title: string;
  /** Use the title exactly as written, without " | Drip" added after it. */
  absoluteTitle?: boolean;
  description: string;
  /** The short name used in the "Home > Page" breadcrumb trail. */
  label: string;
  /** The schema.org page type. */
  schemaType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "FAQPage";
  /** The page describes one of Drip's services. */
  service?: { name: string; serviceType: string };
  /** Left out of the sitemap and told not to appear in search results. */
  noindex?: boolean;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
};

export const pages = {
  home: {
    path: "/",
    title: siteConfig.title,
    absoluteTitle: true,
    description: siteConfig.description,
    label: "Home",
    changeFrequency: "weekly",
    priority: 1,
  },
  about: {
    path: "/about",
    title: "About Us: Building the Future of Creator Growth",
    description:
      "Meet the team behind Drip. We help creators get more from every video through strategic clipping, smart distribution and data-driven growth strategies.",
    label: "About",
    schemaType: "AboutPage",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  network: {
    path: "/network",
    title: "The Creator Growth Framework: Clip, Seed, Distribute",
    description:
      "Drip's Creator Growth Framework turns every video into a scalable growth opportunity through clipping, strategic distribution and performance optimization.",
    label: "Creator Growth Framework",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  resources: {
    path: "/resources",
    title: "Creator Growth Case Studies & Resources",
    description:
      "Explore how Drip's Creator Growth Framework helps creators increase reach, get more from every video and build stronger audiences, niche by niche.",
    label: "Resources",
    schemaType: "CollectionPage",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  faq: {
    path: "/faq",
    title: "Frequently Asked Questions About Clipping & Seeding",
    description:
      "Answers to common questions about Drip's clipping, seeding and distribution services, how we work with creators, and how our editor program pays.",
    label: "FAQ",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  contact: {
    path: "/contact",
    title: "Contact Drip: Talk to Our Creator Growth Team",
    description:
      "Get in touch with Drip. Tell us about your content and we'll show you how clipping, seeding and distribution can grow your audience beyond your followers.",
    label: "Contact",
    schemaType: "ContactPage",
    changeFrequency: "yearly",
    priority: 0.6,
  },
  creatorClipping: {
    path: "/solutions/creator-clipping",
    title: "Creator Clipping: One Video Into Weeks of Content",
    description:
      "Drip's creator clipping turns one long-form video into weeks of short, high-performing clips, edited by our editor network and ready to post and place.",
    label: "Creator Clipping",
    service: { name: "Creator Clipping", serviceType: "Video clipping and repurposing" },
    changeFrequency: "monthly",
    priority: 0.8,
  },
  creatorGrowth: {
    path: "/solutions/creator-growth",
    title: "Creator Growth: Reach Beyond Your Followers",
    description:
      "Great content is no longer enough. Drip helps creators grow by reaching new audiences through clipping, seeding and distribution, not by posting more.",
    label: "Creator Growth",
    service: { name: "Creator Growth", serviceType: "Creator growth strategy" },
    changeFrequency: "monthly",
    priority: 0.8,
  },
  creatorSeeding: {
    path: "/solutions/creator-seeding",
    title: "Creator Seeding: Get Content Into 300+ Communities",
    description:
      "Place your content in front of relevant audiences through 300+ trusted communities, pages and publishing partners, so it reaches people beyond your followers.",
    label: "Creator Seeding",
    service: { name: "Creator Seeding", serviceType: "Content seeding" },
    changeFrequency: "monthly",
    priority: 0.8,
  },
  distributionStrategy: {
    path: "/solutions/distribution-strategy",
    title: "Distribution Strategy: Right Audience, Right Time",
    description:
      "Make sure every piece of creator content reaches the right audience, on the right platform, at the right time, with a distribution strategy backed by data.",
    label: "Distribution Strategy",
    service: { name: "Distribution Strategy", serviceType: "Content distribution strategy" },
    changeFrequency: "monthly",
    priority: 0.8,
  },
  applyCreator: {
    path: "/apply/creator",
    title: "Apply as a Creator: Grow Beyond Your Followers",
    description:
      "Apply to grow with Drip. We clip your long-form videos, place them across 300+ partner pages and communities, and show you exactly how they perform.",
    label: "Apply as a Creator",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  applyEditor: {
    path: "/apply/editor",
    title: "Apply as a Video Editor: Remote Clip Editing Work",
    description:
      "Turn your editing skills into real earnings. Work remotely on real creator content and get paid for every clip you post that performs.",
    label: "Apply as an Editor",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy",
    description:
      "Read the Drip Privacy Policy to see how we collect, use and protect your personal information when you use our website and creator growth platform.",
    label: "Privacy Policy",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  terms: {
    path: "/terms",
    title: "Terms & Conditions",
    description:
      "Read the terms and conditions that govern your use of Drip's website, services and creator growth platform before you get started with us.",
    label: "Terms & Conditions",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  login: {
    path: "/login",
    title: "Log in",
    description: "Log in to your Drip creator, editor or admin dashboard to follow your application, manage content and track your clips.",
    label: "Log in",
    noindex: true,
    changeFrequency: "yearly",
    priority: 0,
  },
} as const satisfies Record<string, PageEntry>;

export type PageKey = keyof typeof pages;

/** The `metadata` export for a page: `export const metadata = metadataFor("about");` */
export function metadataFor(key: PageKey): Metadata {
  const { title, absoluteTitle, description, path, ...rest } = pages[key] as PageEntry;
  return pageMetadata({ title, absoluteTitle, description, path, noindex: rest.noindex });
}
