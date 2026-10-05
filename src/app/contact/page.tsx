import ContactHero from "@/components/contact/hero";
import Milestone from "@/components/home/milestone";
import GetInTouch from "@/components/contact/get-in-touch";
import Faq from "@/components/home/faq";
import PageSchema from "@/components/shared/page-schema";
import { metadataFor } from "@/lib/page-seo";

export const metadata = metadataFor("contact");

export default function ContactPage() {
  return (
    <main>
      <PageSchema page="contact" />
      <ContactHero />
      <Milestone />
      <GetInTouch />
      <Faq />
    </main>
  );
}
