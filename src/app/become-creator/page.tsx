import type { Metadata } from "next";
import ApplyHero from "@/components/apply/hero";
import Milestone from "@/components/home/milestone";
import ApplyBenefits from "@/components/apply/benefits";
import ApplyForm from "@/components/apply/form";
import Faq from "@/components/home/faq";

export const metadata: Metadata = {
  title: "Become a Creator",
  description:
    "Plug your content into a system built to keep it working after upload day. Apply as a creator and get access to our clipping pipeline, 300+ partner pages, and a live growth dashboard.",
  alternates: { canonical: "/become-creator" },
};

const perks = [
  "Full clipping pipeline included",
  "Access to 300+ distribution partners",
  "Live growth dashboard for every upload",
  "Performance-based rewards, no guesswork",
];

const steps = [
  {
    title: "Apply",
    description: "Share your platform, niche, and a bit about your content.",
  },
  {
    title: "Get reviewed",
    description: "Our team reviews your profile within a few business days.",
  },
  {
    title: "Start growing",
    description: "Plug into the framework and watch every upload compound.",
  },
];

const BecomeCreatorPage = () => {
  return (
    <main>
      <ApplyHero
        eyebrow="Creator Program"
        title={
          <>
            Turn Every Upload Into
            <br />
            <span className="text-[#EED7FF]">Continuous Growth.</span>
          </>
        }
        description="Plug your content into a system built to keep it working after upload day. Apply as a creator and get access to our clipping pipeline, distribution network, and live growth dashboard."
      />
      <Milestone />
      <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
        <div className="mx-auto flex max-w-[1280px] flex-col items-stretch justify-between gap-10 lg:flex-row lg:items-start">
          <ApplyBenefits
            heading="Become a"
            highlight="Creator."
            description="Every day, creators dedicate hours to researching ideas, filming, and editing. Our framework makes sure that effort keeps paying off long after you hit publish."
            perks={perks}
            steps={steps}
          />
          <ApplyForm role="creator" />
        </div>
      </section>
      <Faq />
    </main>
  );
};

export default BecomeCreatorPage;
