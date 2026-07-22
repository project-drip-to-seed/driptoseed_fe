import type { Metadata } from "next";
import PrivacyHero from "@/components/privacy/hero";
import PrivacyContent from "@/components/privacy/content";
import Milestone from "@/components/home/milestone";
import Reveal from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Drip collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

const PrivacyPage = () => {
  return (
    <main className="relative">
      <PrivacyHero />
      <Milestone />
      <Reveal>
        <PrivacyContent />
      </Reveal>
    </main>
  );
};

export default PrivacyPage;
