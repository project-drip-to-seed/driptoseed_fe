import { jsonLd } from "@/lib/json-ld";

/** Puts structured data (see lib/structured-data.ts) into the page's HTML, where search engines look for it. */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />;
}
