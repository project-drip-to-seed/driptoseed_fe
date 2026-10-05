import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { pages } from "@/lib/page-seo";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { articleNode, breadcrumbNode, graph, webPageNode } from "@/lib/structured-data";
import JsonLd from "@/components/shared/json-ld";
import CaseStudyHeader from "@/components/case-study/header";
import CaseStudyMeetCreator from "@/components/case-study/meet-creator";
import CaseStudyChallengeApproach from "@/components/case-study/challenge-approach";
import SolutionsSystem from "@/components/solutions/system";
import CaseStudyCta from "@/components/case-study/cta";
import CaseStudyMeasured from "@/components/case-study/measured";
import Faq from "@/components/home/faq";
import Reveal from "@/components/shared/reveal";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

/** "Case Study: ..." in front when it still fits the ~60 characters search results show (with " | Drip" after it). */
const pageTitle = (title: string) => (title.length <= 41 ? `Case Study: ${title}` : title);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Case Study Not Found", robots: { index: false, follow: false } };
  }

  return pageMetadata({
    title: pageTitle(study.title),
    description: study.excerpt,
    path: `/resources/${study.slug}`,
    type: "article",
    // Drawn for each case study by ./opengraph-image.tsx.
    image: {
      url: `/resources/${study.slug}/opengraph-image`,
      alt: `${study.title}: a Drip case study about ${study.creator}`,
    },
  });
}

const CaseStudyDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const path = `/resources/${study.slug}`;

  return (
    <main className="relative">
      <JsonLd
        data={graph(
          webPageNode({ path, name: pageTitle(study.title), description: study.excerpt }),
          breadcrumbNode(path, [
            { name: pages.resources.label, path: pages.resources.path },
            { name: study.title, path },
          ]),
          articleNode({
            path,
            headline: study.title,
            description: study.excerpt,
            image: absoluteUrl(`${path}/opengraph-image`),
            section: study.category,
          }),
        )}
      />
      <CaseStudyHeader
        title={study.title}
        creator={study.creator}
        summary={study.summary}
      />
      <Reveal>
        <CaseStudyMeetCreator meet={study.meet} category={study.category} />
      </Reveal>
      <Reveal>
        <CaseStudyChallengeApproach
          challenge={study.challenge}
          approach={study.approach}
        />
      </Reveal>
      <Reveal>
        <SolutionsSystem />
      </Reveal>
      <Reveal>
        <CaseStudyCta />
      </Reveal>
      <Reveal>
        <CaseStudyMeasured />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
    </main>
  );
};

export default CaseStudyDetailPage;
