import type { Metadata } from "next";
import NetworkHero from "@/components/network/hero";
import NetworkBetterSystem from "@/components/network/better-system";
import NetworkGrowthStages from "@/components/network/growth-stages";
import NetworkContinuousGrowth from "@/components/network/continuous-growth";
import NetworkComparison from "@/components/network/comparison";
import NetworkMeasurableGrowth from "@/components/network/measurable-growth";
import NetworkCta from "@/components/network/cta";
import Faq from "@/components/home/faq";
import Reveal from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "The Creator Growth Framework",
  description:
    "We don't rely on luck or algorithms. Our proprietary Creator Growth Framework transforms every piece of content into a scalable growth opportunity through clipping, strategic distribution, and performance-driven optimization.",
  alternates: { canonical: "/network" },
};

const NetworkPage = () => {
  return (
    <main className="relative">
      <NetworkHero />
      <Reveal>
        <NetworkBetterSystem />
      </Reveal>
      <Reveal>
        <NetworkGrowthStages />
      </Reveal>
      <Reveal>
        <NetworkContinuousGrowth />
      </Reveal>
      <Reveal>
        <NetworkComparison />
      </Reveal>
      <Reveal>
        <NetworkMeasurableGrowth />
      </Reveal>
      <Reveal>
        <NetworkCta />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
    </main>
  );
};

export default NetworkPage;
