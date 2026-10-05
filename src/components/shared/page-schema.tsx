import JsonLd from "@/components/shared/json-ld";
import { type PageKey, pages } from "@/lib/page-seo";
import type { PageEntry } from "@/lib/page-seo";
import { breadcrumbNode, graph, serviceNode, webPageNode } from "@/lib/structured-data";

/**
 * Describes a page to search engines and AI assistants: what kind of page it is, where it sits in the site
 * ("Home > Creator Clipping") and, for the service pages, what Drip offers there. Extra nodes (a FAQ, a list of videos)
 * go in `extra`.
 */
export default function PageSchema({ page, extra = [] }: { page: PageKey; extra?: Record<string, unknown>[] }) {
  const entry: PageEntry = pages[page];
  const isHome = entry.path === "/";

  return (
    <JsonLd
      data={graph(
        webPageNode({
          type: entry.schemaType,
          path: entry.path,
          name: entry.title,
          description: entry.description,
          breadcrumb: !isHome,
        }),
        ...(isHome ? [] : [breadcrumbNode(entry.path, [{ name: entry.label, path: entry.path }])]),
        ...(entry.service
          ? [
              serviceNode({
                path: entry.path,
                name: entry.service.name,
                description: entry.description,
                serviceType: entry.service.serviceType,
              }),
            ]
          : []),
        ...extra,
      )}
    />
  );
}
