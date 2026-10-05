import SolutionsHero from "@/components/solutions/hero";
import SolutionsProblem from "@/components/solutions/problem";
import SolutionsServices from "@/components/solutions/services";
import SolutionsSystem from "@/components/solutions/system";
import SolutionsNiches from "@/components/solutions/niches";
import TrackGrowth from "@/components/solutions/track-growth";
import Faq from "@/components/home/faq";
import PageSchema from "@/components/shared/page-schema";
import Reveal from "@/components/shared/reveal";
import { metadataFor } from "@/lib/page-seo";

export const metadata = metadataFor("creatorGrowth");

const SolutionsPage = () => {
  return (
    <main className="relative">
      <PageSchema page="creatorGrowth" />
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
