// Structured data (schema.org, as JSON-LD) that tells search engines and AI assistants what each page IS: who the
// organization is, what a page is about, how pages relate, what the questions and answers are, what the videos show.
//
// Everything here describes things that are really on the site. Nothing is invented (no ratings, reviews, prices or
// awards): wrong structured data is worse than none, and search engines penalise it.
//
// The nodes link to each other by @id (the organization and the website are defined once, in the root layout, and
// every page just points at them).

import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;

type Node = Record<string, unknown>;

/** Wraps nodes in one JSON-LD document. */
export const graph = (...nodes: Node[]): Node => ({ "@context": "https://schema.org", "@graph": nodes });

/** Who we are. Defined once in the root layout. */
export function organizationNode(): Node {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
    legalName: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: absoluteUrl("/apple-icon.png"), width: 180, height: 180 },
    image: absoluteUrl("/opengraph-image"),
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    email: siteConfig.email,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.email,
        availableLanguage: "English",
        url: absoluteUrl("/contact"),
      },
    ],
    knowsAbout: [
      "Content clipping",
      "Creator content seeding",
      "Content distribution",
      "Short-form video",
      "Creator growth",
    ],
    ...(Object.keys(siteConfig.links).length ? { sameAs: Object.values(siteConfig.links) } : {}),
  };
}

/** The website itself. Defined once in the root layout. */
export function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

type PageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "FAQPage" | "ProfilePage";

/** One page of the site. */
export function webPageNode({
  type = "WebPage",
  path,
  name,
  description,
  image,
  breadcrumb = true,
}: {
  type?: PageType;
  path: string;
  name: string;
  description: string;
  image?: string;
  /** The page has a breadcrumb trail (see breadcrumbNode). The home page does not. */
  breadcrumb?: boolean;
}): Node {
  const url = absoluteUrl(path);
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    dateModified: siteConfig.contentUpdated,
    ...(breadcrumb ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
    ...(image ? { primaryImageOfPage: { "@type": "ImageObject", url: image } } : {}),
  };
}

/** The "Home > Section > Page" trail. `items` run from the first level below Home down to the current page. */
export function breadcrumbNode(path: string, items: { name: string; path: string }[]): Node {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** The questions on a page and their answers, word for word. */
export function faqNode(path: string, faqs: { question: string; answer: string }[]): Node {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    url: absoluteUrl(path),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** One of Drip's services, provided by the organization. */
export function serviceNode({
  path,
  name,
  description,
  serviceType,
}: {
  path: string;
  name: string;
  description: string;
  serviceType: string;
}): Node {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    serviceType,
    url: absoluteUrl(path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "Worldwide",
    audience: { "@type": "Audience", audienceType: "Creators, brands and podcasters" },
  };
}

/** A list of pages (for example, all the case studies on the resources page). */
export function itemListNode(path: string, items: { name: string; path: string }[]): Node {
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl(path)}#list`,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(item.path),
      name: item.name,
    })),
  };
}

/** A written case study. The author is Drip (these are our write-ups), never a made-up person. */
export function articleNode({
  path,
  headline,
  description,
  image,
  section,
}: {
  path: string;
  headline: string;
  description: string;
  image: string;
  section: string;
}): Node {
  const url = absoluteUrl(path);
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    url,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    image: [image],
    articleSection: section,
    inLanguage: "en",
    datePublished: siteConfig.contentUpdated,
    dateModified: siteConfig.contentUpdated,
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

/** A video on the page. Needs its own thumbnail, a real file address and a date. */
export function videoNode({
  name,
  description,
  thumbnail,
  contentUrl,
  durationSeconds,
  width,
  height,
  pagePath,
}: {
  name: string;
  description: string;
  thumbnail: string;
  contentUrl: string;
  durationSeconds: number;
  width: number;
  height: number;
  pagePath: string;
}): Node {
  return {
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl: [absoluteUrl(thumbnail)],
    contentUrl: absoluteUrl(contentUrl),
    uploadDate: siteConfig.contentUpdated,
    duration: `PT${durationSeconds}S`,
    width,
    height,
    encodingFormat: "video/mp4",
    isFamilyFriendly: true,
    inLanguage: "en",
    publisher: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": `${absoluteUrl(pagePath)}#webpage` },
  };
}
