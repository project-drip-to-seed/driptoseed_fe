import type { Metadata } from "next";
import ApplyHero from "@/components/apply/hero";
import Milestone from "@/components/home/milestone";
import ApplyBenefits from "@/components/apply/benefits";
import ApplyForm from "@/components/apply/form";
import Faq from "@/components/home/faq";

export const metadata: Metadata = {
  title: "Become an Editor",
  description:
    "Join the team turning long-form footage into the clips creators need daily. Apply as an editor and get a steady project flow, direct creator collaboration, and pay per performance.",
  alternates: { canonical: "/become-editor" },
};

const perks = [
  "Steady, ongoing project flow",
  "Paid per clip performance",
  "Direct creator collaboration",
  "Work remotely, on your schedule",
];

const steps = [
  {
    title: "Apply",
    description: "Share your reel, your tools, and your editing experience.",
  },
  {
    title: "Get reviewed",
    description: "Our team reviews your portfolio within a few business days.",
  },
  {
    title: "Start editing",
    description: "Get matched with creators and start earning per clip.",
  },
];

const BecomeEditorPage = () => {
  return (
    <main>
      <ApplyHero
        eyebrow="Editor Program"
        title={
          <>
            Turn Your Editing Skills
            <br />
            <span className="text-[#EED7FF]">Into Real Earnings.</span>
          </>
        }
        description="Join the team turning long-form footage into the clips creators need daily. No pitching clients, no chasing invoices — just edit, submit, and get paid per performance."
      />
      <Milestone />
      <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
        <div className="mx-auto flex max-w-[1280px] flex-col items-stretch justify-between gap-10 lg:flex-row lg:items-start">
          <ApplyBenefits
            heading="Become an"
            highlight="Editor."
            description="Every day, creators publish long-form content that needs to become dozens of platform-native clips. Join the team that makes that happen, every day."
            perks={perks}
            steps={steps}
          />
          <ApplyForm role="editor" />
        </div>
      </section>
      <Faq />
    </main>
  );
};

export default BecomeEditorPage;
