import ResourcesHero from "@/components/resources/hero";
import Milestone from "@/components/home/milestone";
import ResourcesCaseStudies from "@/components/resources/case-studies";
import Faq from "@/components/home/faq";
import PageSchema from "@/components/shared/page-schema";
import Reveal from "@/components/shared/reveal";
import { caseStudies } from "@/lib/case-studies";
import { metadataFor, pages } from "@/lib/page-seo";
import { itemListNode } from "@/lib/structured-data";

export const metadata = metadataFor("resources");

const ResourcesPage = () => {
  return (
    <main className="relative">
      <PageSchema
        page="resources"
        extra={[
          itemListNode(
            pages.resources.path,
            caseStudies.map((study) => ({ name: study.title, path: `/resources/${study.slug}` })),
          ),
        ]}
      />
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
