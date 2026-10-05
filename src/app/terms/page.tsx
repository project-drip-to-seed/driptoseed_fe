import TermsHero from "@/components/terms/hero";
import TermsContent from "@/components/terms/content";
import Milestone from "@/components/home/milestone";
import PageSchema from "@/components/shared/page-schema";
import Reveal from "@/components/shared/reveal";
import { metadataFor } from "@/lib/page-seo";

export const metadata = metadataFor("terms");

const TermsPage = () => {
  return (
    <main className="relative">
      <PageSchema page="terms" />
      <TermsHero />
      <Milestone />
      <Reveal>
      <TermsContent />
      </Reveal>
    </main>
  );
};

export default TermsPage;
