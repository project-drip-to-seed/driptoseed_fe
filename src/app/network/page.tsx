import NetworkHero from "@/components/network/hero";
import NetworkBetterSystem from "@/components/network/better-system";
import NetworkGrowthStages from "@/components/network/growth-stages";
import NetworkContinuousGrowth from "@/components/network/continuous-growth";
import NetworkComparison from "@/components/network/comparison";
import NetworkMeasurableGrowth from "@/components/network/measurable-growth";
import NetworkCta from "@/components/network/cta";
import Faq from "@/components/home/faq";
import PageSchema from "@/components/shared/page-schema";
import Reveal from "@/components/shared/reveal";
import { metadataFor } from "@/lib/page-seo";

export const metadata = metadataFor("network");

const NetworkPage = () => {
  return (
    <main className="relative">
      <PageSchema page="network" />
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
