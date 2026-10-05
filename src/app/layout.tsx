import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import JsonLd from "@/components/shared/json-ld";
import { defaultShareImage } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { graph, organizationNode, websiteNode } from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  // Colours the browser's address bar on phones with the brand purple.
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: "en_US",
    images: [defaultShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: defaultShareImage.url, alt: defaultShareImage.alt }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Site-ownership codes for Google Search Console / Bing Webmaster Tools. Set the env var, redeploy, then verify.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  // Icons come from the app-router file conventions: favicon.ico, icon.svg
  // and apple-icon.png in this folder (all generated from /brand/drip_app_icon.svg).
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Every page's headline is set in Kugile, so start fetching it right away instead of waiting for the
            stylesheet to ask for it (the page otherwise shows a fallback font first, then jumps). */}
        <link rel="preload" href="/fonts/Kugile_Demo.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {/* Who we are and what this website is. Every page's own structured data points back at these two. */}
        <JsonLd data={graph(organizationNode(), websiteNode())} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
