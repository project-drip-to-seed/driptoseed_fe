import AboutHero from "@/components/about/hero";
import Milestone from "@/components/home/milestone";
import Story from "@/components/about/story";
import MissionVision from "@/components/about/mission-vision";
import Principles from "@/components/about/principles";
import Roadmap from "@/components/about/roadmap";
import GrowWithUs from "@/components/about/grow-with-us";
import Faq from "@/components/home/faq";
import Reveal from "@/components/shared/reveal";

const AboutPage = () => {
  return (
    <main className="relative">
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
