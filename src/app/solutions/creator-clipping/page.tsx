import ClipPurposes from "@/components/solutions/creator-clipping/clip-purposes";
import ContentLibrary from "@/components/solutions/creator-clipping/content-library";
import EditorNetwork from "@/components/solutions/creator-clipping/editor-network";
import CreatorClippingHero from "@/components/solutions/creator-clipping/hero";
import SolutionsSystem from "@/components/solutions/system";
import EditorCta from "@/components/home/editor-cta";
import Faq from "@/components/home/faq";
import PageSchema from "@/components/shared/page-schema";
import { metadataFor, pages } from "@/lib/page-seo";
import { allStockClips } from "@/lib/stock-videos";
import { videoNode } from "@/lib/structured-data";

export const metadata = metadataFor("creatorClipping");

// The sample clips on this page, described for search engines. The same footage is reused in several tiles, so each
// distinct scene is listed once.
const sceneLabels = new Set<string>();
const videos = allStockClips
  .filter((clip) => !sceneLabels.has(clip.label) && sceneLabels.add(clip.label))
  .map((clip) =>
    videoNode({
      name: clip.label,
      description: `${clip.label}. A sample of the short, platform-ready clips Drip's editors cut from one long-form video.`,
      thumbnail: clip.poster,
      contentUrl: clip.src,
      durationSeconds: clip.seconds,
      width: clip.width,
      height: clip.height,
      pagePath: pages.creatorClipping.path,
    }),
  );

export default function CreatorClippingPage() {
  return (
    <main>
      <PageSchema page="creatorClipping" extra={videos} />
      <CreatorClippingHero />
      <ContentLibrary />
      <ClipPurposes />
      <SolutionsSystem />
      <EditorNetwork />
      <EditorCta />
      <Faq />
    </main>
  );
}
