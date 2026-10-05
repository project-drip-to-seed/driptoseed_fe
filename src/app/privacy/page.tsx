import PrivacyHero from "@/components/privacy/hero";
import PrivacyContent from "@/components/privacy/content";
import Milestone from "@/components/home/milestone";
import PageSchema from "@/components/shared/page-schema";
import Reveal from "@/components/shared/reveal";
import { metadataFor } from "@/lib/page-seo";

export const metadata = metadataFor("privacy");

const PrivacyPage = () => {
  return (
    <main className="relative">
      <PageSchema page="privacy" />
      <PrivacyHero />
      <Milestone />
      <Reveal>
        <PrivacyContent />
      </Reveal>
    </main>
  );
};

export default PrivacyPage;
