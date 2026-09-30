import type { Metadata } from "next";
import FaqHero from "@/components/faq/hero";
import Milestone from "@/components/home/milestone";
import Faq from "@/components/home/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Drip's clipping, seeding and distribution services, how we work with creators, and how our editor program pays.",
  alternates: { canonical: "/faq" },
};

const FaqPage = () => {
  return (
    <main className="relative">
      <FaqHero />
      <Milestone />
      <Faq />
    </main>
  );
};

export default FaqPage;
