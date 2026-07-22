import type { Metadata } from "next";
import FaqHero from "@/components/faq/hero";
import Milestone from "@/components/home/milestone";
import Faq from "@/components/home/faq";
// import FaqList from "@/components/faq/list";
// import Reveal from "@/components/shared/reveal";

export const metadata: Metadata = {
    title: "Frequently Asked Questions",
    description:
        "Every creator's journey is unique, but sustainable growth follows a proven system. Explore how our Creator Growth Framework has helped creators increase reach, maximize content value, and build stronger audiences.",
    alternates: { canonical: "/faq" },
};

const FaqPage = () => {
    return (
        <main className="relative">
            <FaqHero />
            <Milestone />
            <Faq />
            {/* <Reveal>
                <FaqList />
            </Reveal> */}
        </main>
    );
};

export default FaqPage;
