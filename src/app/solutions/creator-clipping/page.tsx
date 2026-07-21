import type { Metadata } from "next";
import ClipPurposes from "@/components/solutions/creator-clipping/clip-purposes";
import ContentLibrary from "@/components/solutions/creator-clipping/content-library";
import EditorNetwork from "@/components/solutions/creator-clipping/editor-network";
import CreatorClippingHero from "@/components/solutions/creator-clipping/hero";
import SolutionsSystem from "@/components/solutions/system";
import EditorCta from "@/components/home/editor-cta";
import Faq from "@/components/home/faq";

export const metadata: Metadata = {
  title: "Creator Clipping",
  description:
    "Turn one video into weeks of high-performing content with Drip's creator clipping ecosystem.",
  alternates: { canonical: "/solutions/creator-clipping" },
};

export default function CreatorClippingPage() {
  return (
    <main>
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
