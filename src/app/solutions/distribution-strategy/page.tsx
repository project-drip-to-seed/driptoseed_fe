import type { Metadata } from "next";
import DistributionStrategyHero from "@/components/solutions/distribution-strategy/hero";
import DistributionStrategyComparison from "@/components/solutions/distribution-strategy/comparison";
import StrategyProcess from "@/components/solutions/distribution-strategy/strategy-process";
import StrategicChannels from "@/components/solutions/distribution-strategy/strategic-channels";
import DistributionTimeline from "@/components/solutions/distribution-strategy/distribution-timeline";
import PredictableGrowth from "@/components/solutions/distribution-strategy/predictable-growth";
import NicheStrategies from "@/components/solutions/distribution-strategy/niche-strategies";
import BackedByData from "@/components/solutions/distribution-strategy/backed-by-data";
import Faq from "@/components/home/faq";

export const metadata: Metadata = {
  title: "Distribution Strategy",
  description:
    "Ensure every piece of creator content reaches the right audience, on the right platform, at the right time.",
  alternates: { canonical: "/solutions/distribution-strategy" },
};

export default function DistributionStrategyPage() {
  return (
    <main>
      <DistributionStrategyHero />
      <DistributionStrategyComparison />
      <StrategyProcess />
      <StrategicChannels />
      <DistributionTimeline />
      <PredictableGrowth />
      <NicheStrategies />
      <BackedByData />
      <Faq />
    </main>
  );
}
