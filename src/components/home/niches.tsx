import Appear from "@/components/shared/appear";
import { nicheIllustrations } from "@/lib/niche-illustrations";
import NicheCard from "./niche-card";

const Niches = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full">
        <Appear className="w-full">
          <h2 className="font-kugile capitalize text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.6]">
            <span className="text-black">Built for Every </span>
            <span className="text-[#780AC1]">Creator Niche.</span>
          </h2>
        </Appear>
        <Appear className="w-full" delay={120}>
          <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-[#686868] w-full lg:w-[900px] max-w-full">
            Every niche has a different audience, content style, and
            distribution strategy. That&apos;s why we don&apos;t use a
            one-size-fits-all approach. From fashion creators to finance
            educators, we tailor our clipping, seeding, and distribution
            strategy to match your niche, helping your content reach the
            communities where it matters most.
          </p>
        </Appear>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full mt-10 sm:gap-5 lg:grid-cols-5">
        {nicheIllustrations.map((niche, index) => (
          // The tiles arrive one after another along each row (the delay restarts every five tiles).
          <Appear key={niche.name} className="min-w-0" delay={(index % 5) * 90}>
            <NicheCard name={niche.name} image={niche.image} alt={niche.alt} />
          </Appear>
        ))}
      </div>
    </section>
  );
};

export default Niches;
