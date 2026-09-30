import type { Metadata } from "next";
import SolutionsHero from "@/components/solutions/hero";
import SolutionsProblem from "@/components/solutions/problem";
import SolutionsServices from "@/components/solutions/services";
import SolutionsSystem from "@/components/solutions/system";
import SolutionsNiches from "@/components/solutions/niches";
import TrackGrowth from "@/components/solutions/track-growth";
import Faq from "@/components/home/faq";
import Reveal from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Creating exceptional content is no longer enough. In today's creator economy, sustainable growth comes from consistently reaching new audiences, not just posting more videos.",
  alternates: { canonical: "/solutions/creator-growth" },
};

const SolutionsPage = () => {
  return (
    <main className="relative">
      <SolutionsHero />
      <Reveal>
        <SolutionsProblem />
      </Reveal>
      <Reveal>
        <SolutionsServices />
      </Reveal>
      <Reveal>
        <SolutionsSystem />
      </Reveal>
      <Reveal>
        <SolutionsNiches />
      </Reveal>
      <Reveal>
        <TrackGrowth />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
    </main>
  );
};

export default SolutionsPage;
