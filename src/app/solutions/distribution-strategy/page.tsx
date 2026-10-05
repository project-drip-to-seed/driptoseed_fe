import DistributionStrategyHero from "@/components/solutions/distribution-strategy/hero";
import DistributionStrategyComparison from "@/components/solutions/distribution-strategy/comparison";
import StrategyProcess from "@/components/solutions/distribution-strategy/strategy-process";
import StrategicChannels from "@/components/solutions/distribution-strategy/strategic-channels";
import DistributionTimeline from "@/components/solutions/distribution-strategy/distribution-timeline";
import PredictableGrowth from "@/components/solutions/distribution-strategy/predictable-growth";
import NicheStrategies from "@/components/solutions/distribution-strategy/niche-strategies";
import BackedByData from "@/components/solutions/distribution-strategy/backed-by-data";
import Faq from "@/components/home/faq";
import PageSchema from "@/components/shared/page-schema";
import { metadataFor } from "@/lib/page-seo";

export const metadata = metadataFor("distributionStrategy");

export default function DistributionStrategyPage() {
  return (
    <main>
      <PageSchema page="distributionStrategy" />
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
