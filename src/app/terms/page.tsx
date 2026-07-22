import type { Metadata } from "next";
import TermsHero from "@/components/terms/hero";
import TermsContent from "@/components/terms/content";
import Milestone from "@/components/home/milestone";
import Reveal from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions governing your use of Drip's creator growth platform.",
  alternates: { canonical: "/terms" },
};

const TermsPage = () => {
  return (
    <main className="relative">
      <TermsHero />
      <Milestone />
      <Reveal>
      <TermsContent />
      </Reveal>
    </main>
  );
};

export default TermsPage;
