import AboutHero from "@/components/about/hero";
import Milestone from "@/components/home/milestone";
import Story from "@/components/about/story";
import MissionVision from "@/components/about/mission-vision";
import Principles from "@/components/about/principles";
import Roadmap from "@/components/about/roadmap";
import GrowWithUs from "@/components/about/grow-with-us";
import Faq from "@/components/home/faq";
import PageSchema from "@/components/shared/page-schema";
import Reveal from "@/components/shared/reveal";
import { metadataFor } from "@/lib/page-seo";

export const metadata = metadataFor("about");

const AboutPage = () => {
  return (
    <main className="relative">
      <PageSchema page="about" />
      <AboutHero />
      <Reveal>
        <Milestone />
      </Reveal>
      <Reveal>
        <Story />
      </Reveal>
      <Reveal>
        <MissionVision />
      </Reveal>
      <Reveal>
        <Principles />
      </Reveal>
      <Reveal>
        <Roadmap />
      </Reveal>
      <Reveal>
        <GrowWithUs />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
    </main>
  );
};

export default AboutPage;
