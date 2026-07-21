import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site-config";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  const title = `${study.creator}: ${study.title}`;
  const url = `/resources/${study.slug}`;

  return {
    title,
    description: study.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description: study.excerpt,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: study.excerpt,
    },
  };
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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    author: { "@type": "Person", name: study.creator },
    about: study.category,
    description: study.excerpt,
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/resources/${study.slug}`,
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <CaseStudyHeader title={study.title} creator={study.creator} />
      <Reveal>
        <CaseStudyMeetCreator />
      </Reveal>
      <Reveal>
        <CaseStudyChallengeApproach />
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
