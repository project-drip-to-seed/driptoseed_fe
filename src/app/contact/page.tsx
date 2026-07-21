import type { Metadata } from "next";
import ContactHero from "@/components/contact/hero";
import Milestone from "@/components/home/milestone";
import GetInTouch from "@/components/contact/get-in-touch";
import Faq from "@/components/home/faq";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Every creator's journey is unique, but sustainable growth follows a proven system. Explore how our Creator Growth Framework has helped creators increase reach, maximize content value, and build stronger audiences through clipping, strategic distribution, and data-driven optimization.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <Milestone />
      <GetInTouch />
      <Faq />
    </main>
  );
}
