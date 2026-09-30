import type { Metadata } from "next";
import ContactHero from "@/components/contact/hero";
import Milestone from "@/components/home/milestone";
import GetInTouch from "@/components/contact/get-in-touch";
import Faq from "@/components/home/faq";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Drip. Tell us about your content and we'll show you how clipping, seeding and distribution can grow your audience.",
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
