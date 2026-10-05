import Hero from "@/components/home/hero";
import Milestone from "@/components/home/milestone";
import Problem from "@/components/home/problem";
import Services from "@/components/home/services";
import Journey from "@/components/home/journey";
import Niches from "@/components/home/niches";
import Distribution from "@/components/home/distribution";
import Opportunities from "@/components/home/opportunities";
import EditorCta from "@/components/home/editor-cta";
import Comparison from "@/components/home/comparison";
import Testimonials from "@/components/home/testimonials";
import Faq from "@/components/home/faq";
import PageSchema from "@/components/shared/page-schema";
import Reveal from "@/components/shared/reveal";
import { metadataFor } from "@/lib/page-seo";

export const metadata = metadataFor("home");

export default function Home() {
  return (
    <main className="relative">
      <PageSchema page="home" />
      <Hero />
      <Reveal>
        <Milestone />
      </Reveal>
      <Reveal>
        <Problem />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Journey />
      </Reveal>
      <Reveal>
        <Niches />
      </Reveal>
      <Reveal>
        <Distribution />
      </Reveal>
      <Reveal>
        <Opportunities />
      </Reveal>
      <Reveal>
        <EditorCta />
      </Reveal>
      <Reveal>
        <Comparison />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
    </main>
  );
}
