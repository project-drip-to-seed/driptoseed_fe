import AsteriskIcon from "@/components/shared/asterisk-icon";
import { niches, type Niche } from "@/lib/niches";

const NicheCard = ({ niche }: { niche: Niche }) => (
  <div className="group relative flex-1 min-w-0 aspect-square rounded-3xl border border-[#D59EFB] bg-white overflow-hidden p-5 flex flex-col cursor-default transition-colors duration-300 hover:border-transparent">
    <img
      src="/media/niche-card-blob-v1.webp"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
    />
    <div
      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background: "linear-gradient(180deg, #D59EFB 11%, #780AC1 142.75%)",
      }}
    />
    <div className="relative z-10 flex flex-col h-full">
      <div className="relative shrink-0 w-[19px] h-5">
        <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
          <AsteriskIcon width={19} height={20} color="#780AC1" />
        </div>
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <AsteriskIcon width={19} height={20} color="#FFFFFF" />
        </div>
      </div>
      <div className="mt-auto flex flex-col gap-4 capitalize">
        <div className="flex flex-col gap-1">
          <p className="font-[family-name:var(--font-inter)] font-medium text-[14px] leading-[1.2] text-[#780AC1] transition-colors duration-300 group-hover:text-white">
            Audience
          </p>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[1.2] text-[#404040] transition-colors duration-300 group-hover:text-white">
            {niche.audience}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-[family-name:var(--font-inter)] font-medium text-[14px] leading-[1.2] text-[#780AC1] transition-colors duration-300 group-hover:text-white">
            Best Channels
          </p>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[1.2] text-[#404040] transition-colors duration-300 group-hover:text-white">
            {niche.bestChannels}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-[family-name:var(--font-inter)] font-medium text-[16px] leading-[1.2] text-black transition-colors duration-300 group-hover:text-white">
            {niche.name}
          </p>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[1.2] text-[#404040] transition-colors duration-300 group-hover:text-white">
            {niche.subtitle}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const SolutionsNiches = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full">
        <h2 className="font-kugile capitalize text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.6]">
          <span className="text-black">Built for Every </span>
          <span className="text-[#780AC1]">Creator Niche.</span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-[#686868] w-full lg:w-[900px] max-w-full">
          Every niche has a different audience, content style, and
          distribution strategy. That&apos;s why we don&apos;t use a
          one-size-fits-all approach. From fashion creators to finance
          educators, we tailor our clipping, seeding, and distribution
          strategy to match your niche, helping your content reach the
          communities where it matters most.
        </p>
      </div>

      <div className="flex flex-col gap-5 items-start w-full mt-10">
        <div className="grid grid-cols-2 gap-3 w-full sm:grid-cols-3 sm:gap-5 lg:flex lg:items-center">
          {niches.slice(0, 5).map((niche) => (
            <NicheCard key={niche.name} niche={niche} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 w-full sm:grid-cols-3 sm:gap-5 lg:flex lg:items-center">
          {niches.slice(5, 10).map((niche) => (
            <NicheCard key={niche.name} niche={niche} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsNiches;
