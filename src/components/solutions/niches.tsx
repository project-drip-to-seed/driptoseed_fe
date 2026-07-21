import AsteriskIcon from "@/components/shared/asterisk-icon";

type Niche = {
  name: string;
  subtitle: string;
  highlighted?: boolean;
};

const niches: Niche[] = [
  { name: "Fashion", subtitle: "Style, Drops & Lookbooks" },
  { name: "Lifestyle", subtitle: "Routines, reviews & tutorials" },
  {
    name: "Beauty",
    subtitle: "Routines, reviews & tutorials",
    highlighted: true,
  },
  { name: "Travel", subtitle: "Routines, reviews & tutorials" },
  { name: "Food", subtitle: "Routines, reviews & tutorials" },
  { name: "Fitness", subtitle: "Routines, reviews & tutorials" },
  { name: "Business", subtitle: "Routines, reviews & tutorials" },
  { name: "Finance", subtitle: "Routines, reviews & tutorials" },
  { name: "Comedy", subtitle: "Routines, reviews & tutorials" },
  { name: "Luxury", subtitle: "Routines, reviews & tutorials" },
];

const NicheCard = ({ niche }: { niche: Niche }) => {
  if (niche.highlighted) {
    return (
      <div className="relative flex-1 min-w-0 aspect-square rounded-3xl border border-[#D59EFB] bg-white overflow-hidden p-5 flex flex-col">
        <div
          aria-hidden="true"
          className="absolute -bottom-[121px] -right-[121px] size-[240px] rounded-full bg-[#EED7FF] opacity-60 blur-2xl"
        />
        <div className="relative z-10 flex flex-col h-full">
          <AsteriskIcon width={19} height={20} />
          <div className="mt-auto flex flex-col gap-4 capitalize">
            <div className="flex flex-col gap-1">
              <p className="font-[family-name:var(--font-inter)] font-medium text-[14px] leading-[1.2] text-[#780AC1]">
                Audience
              </p>
              <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[1.2] text-[#404040]">
                16–30, discovery-heavy
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-[family-name:var(--font-inter)] font-medium text-[14px] leading-[1.2] text-[#780AC1]">
                Best Channels
              </p>
              <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[1.2] text-[#404040]">
                TikTok, YouTube Shorts
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-[family-name:var(--font-inter)] font-medium text-[16px] leading-[1.2] text-black">
                {niche.name}
              </p>
              <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[1.2] text-[#404040]">
                {niche.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative flex-1 min-w-0 aspect-square rounded-3xl overflow-hidden p-5 flex flex-col"
      style={{
        background:
          "linear-gradient(180deg, rgba(213,158,251,0.08) 11%, rgba(120,10,193,0.08) 142.75%)",
      }}
    >
      <AsteriskIcon width={19} height={20} />
      <div className="mt-auto flex flex-col gap-1 capitalize">
        <p className="font-[family-name:var(--font-inter)] font-medium text-[16px] leading-[1.2] text-black">
          {niche.name}
        </p>
        <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[1.2] text-[#686868]">
          {niche.subtitle}
        </p>
      </div>
    </div>
  );
};

const SolutionsNiches = () => {
  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="flex flex-col gap-1 items-start w-[900px] max-w-full">
        <p className="font-kugile capitalize text-[36px] leading-[1.6]">
          <span className="text-black">Built for Every </span>
          <span className="text-[#780AC1]">Creator Niche.</span>
        </p>
        <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-[#686868] w-[900px] max-w-full">
          Every niche has a different audience, content style, and
          distribution strategy. That&apos;s why we don&apos;t use a
          one-size-fits-all approach. From fashion creators to finance
          educators, we tailor our clipping, seeding, and distribution
          strategy to match your niche, helping your content reach the
          communities where it matters most.
        </p>
      </div>

      <div className="flex flex-col gap-5 items-start w-full mt-10">
        <div className="flex gap-5 items-center w-full">
          {niches.slice(0, 5).map((niche) => (
            <NicheCard key={niche.name} niche={niche} />
          ))}
        </div>
        <div className="flex gap-5 items-center w-full">
          {niches.slice(5, 10).map((niche) => (
            <NicheCard key={niche.name} niche={niche} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsNiches;
