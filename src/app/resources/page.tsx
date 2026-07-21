import ResourcesHero from "@/components/resources/hero";
import Milestone from "@/components/home/milestone";
import ResourcesCaseStudies from "@/components/resources/case-studies";
import Faq from "@/components/home/faq";
import Reveal from "@/components/shared/reveal";

const ResourcesPage = () => {
  return (
    <main className="relative">
      <ResourcesHero />
      <Reveal>
        <Milestone />
      </Reveal>
      <Reveal>
        <ResourcesCaseStudies />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
    </main>
  );
};

export default ResourcesPage;
