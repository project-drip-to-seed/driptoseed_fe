import type { Metadata } from "next";
import ResourcesHero from "@/components/resources/hero";
import Milestone from "@/components/home/milestone";
import ResourcesCaseStudies from "@/components/resources/case-studies";
import Faq from "@/components/home/faq";
import Reveal from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Creator Case Studies & Resources",
  description:
    "Every creator's journey is unique, but sustainable growth follows a proven system. Explore how our Creator Growth Framework has helped creators increase reach, maximize content value, and build stronger audiences.",
  alternates: { canonical: "/resources" },
};

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
