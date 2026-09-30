import AsteriskIcon from "@/components/shared/asterisk-icon";

type Pillar = {
  title: string;
  description: string;
  featured?: boolean;
};

const pillars: Pillar[] = [
  {
    title: "Planned Publishing Schedule",
    description:
      "Every upload follows a structured calendar, so visibility builds over weeks instead of spiking on day one.",
  },
  {
    title: "Multi-Platform Visibility",
    description:
      "Content is formatted and published across Instagram, YouTube, TikTok and LinkedIn so it meets viewers wherever they scroll.",
    featured: true,
  },
  {
    title: "Community Placements",
    description:
      "Clips are placed inside niche communities and pages where your ideal audience is already active.",
  },
  {
    title: "Continuous Amplification",
    description:
      "High-performing content is reshared and re-promoted to keep earning new viewers long after launch.",
  },
  {
    title: "Performance Optimization",
    description:
      "Every result feeds back into the plan, so hooks, timing and placements improve with each campaign.",
  },
  {
    title: "Consistent Audience Growth",
    description:
      "Steady, repeatable visibility replaces unpredictable viral spikes with growth you can plan around.",
  },
  {
    title: "Transparent Analytics",
    description:
      "Clear reporting shows exactly which clips, channels and placements are driving reach and followers.",
  },
];

const PillarCard = ({ pillar }: { pillar: Pillar }) => (
  <div
    className={`relative flex h-[361px] min-w-0 flex-col justify-between overflow-hidden rounded-2xl p-5 ${
      pillar.featured
        ? "border border-[#D59EFB] bg-white"
        : "bg-gradient-to-b from-[11%] from-[rgba(213,158,251,0.08)] to-[142.75%] to-[rgba(120,10,193,0.08)]"
    }`}
  >
    {pillar.featured ? (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[100px] -right-[56px] size-60 rounded-full bg-[#D59EFB]/20 blur-[40px]"
      />
    ) : null}

    <AsteriskIcon width={35} height={36} />

    <div className="relative flex flex-col gap-2 capitalize">
      <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black">
        {pillar.title}
      </p>
      <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#404040]">
        {pillar.description}
      </p>
    </div>
  </div>
);

const PredictableGrowth = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full capitalize">
        <h2 className="font-kugile text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
          Strategy Creates
          <span className="text-[#780AC1]">{` Predictable Growth.`}</span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
          A strategy turns distribution from guesswork into a system. These are the building blocks that make growth planned instead of accidental.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar) => (
          <PillarCard key={pillar.title} pillar={pillar} />
        ))}
      </div>
    </section>
  );
};

export default PredictableGrowth;
