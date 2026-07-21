import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
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

  return (
    <main className="relative">
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
