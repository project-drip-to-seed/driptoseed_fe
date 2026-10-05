import FaqHero from "@/components/faq/hero";
import Milestone from "@/components/home/milestone";
import Faq from "@/components/home/faq";
import PageSchema from "@/components/shared/page-schema";
import { faqs } from "@/lib/faqs";
import { metadataFor, pages } from "@/lib/page-seo";
import { faqNode } from "@/lib/structured-data";

export const metadata = metadataFor("faq");

const FaqPage = () => {
  return (
    <main className="relative">
      {/* The question-and-answer markup lives only here: the same FAQ is shown on many pages, and it should be described once. */}
      <PageSchema page="faq" extra={[faqNode(pages.faq.path, faqs)]} />
      <FaqHero />
      <Milestone />
      <Faq />
    </main>
  );
};

export default FaqPage;
