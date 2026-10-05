import AsteriskIcon from "@/components/shared/asterisk-icon";

type Row = { title: string; desc: string };

const withoutStrategy: Row[] = [
  {
    title: "Random Posting",
    desc: "Content is uploaded whenever it's ready, without considering audience behavior, platform timing, or distribution opportunities.",
  },
  {
    title: "Algorithm Dependency",
    desc: "Creators rely entirely on platform algorithms to determine visibility and reach.",
  },
  {
    title: "Short Content Lifespan",
    desc: "Most posts lose momentum within a few days and rarely reach new audiences afterward.",
  },
  {
    title: "Limited Discoverability",
    desc: "Content circulates mainly among existing followers instead of attracting new viewers.",
  },
  {
    title: "Inconsistent Growth",
    desc: "Growth depends on occasional viral moments rather than a repeatable system.",
  },
];

const withStrategy: Row[] = [
  {
    title: "Planned Content Distribution",
    desc: "Every upload follows a structured publishing and amplification schedule.",
  },
  {
    title: "Multi-Platform Visibility",
    desc: "Content is optimized and distributed across multiple platforms and partner networks.",
  },
  {
    title: "Extended Content Lifespan",
    desc: "Each piece of content continues generating impressions and engagement over several weeks.",
  },
  {
    title: "Audience-Focused Distribution",
    desc: "Content reaches communities and audiences that align with your niche and goals.",
  },
  {
    title: "Sustainable Growth",
    desc: "Consistent visibility creates predictable audience growth and stronger brand authority.",
  },
];

const Column = ({
  title,
  rows,
  variant,
}: {
  title: string;
  rows: Row[];
  variant: "without" | "with";
}) => {
  const isWithStrategy = variant === "with";
  return (
    <div
      className={`flex-1 min-w-0 overflow-hidden rounded-[24px] p-5 ${
        isWithStrategy
          ? "bg-gradient-to-b from-[11%] from-[rgba(213,158,251,0.08)] to-[142.75%] to-[rgba(120,10,193,0.08)]"
          : "bg-[#F9F9F9]"
      }`}
    >
      <p
        className={`font-[family-name:var(--font-inter)] font-medium text-[22px] sm:text-[28px] leading-[1.4] uppercase ${
          isWithStrategy ? "text-[#780AC1]" : "text-black"
        }`}
      >
        {title}
      </p>
      <div className="flex flex-col mt-[31px]">
        {rows.map((row, index) => (
          <div
            key={row.title}
            className={`flex flex-col gap-3 p-5 ${
              index < rows.length - 1
                ? isWithStrategy
                  ? "border-b border-[#D59EFB]"
                  : "border-b border-[#C7C7C7]"
                : ""
            }`}
          >
            <div className="flex gap-3 items-center">
              <AsteriskIcon
                width={35}
                height={36}
                color={isWithStrategy ? "#780AC1" : "#949494"}
              />
              <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black capitalize sm:whitespace-nowrap">
                {row.title}
              </p>
            </div>
            <p
              className={`font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] capitalize ${
                isWithStrategy ? "text-[#404040]" : "text-[#686868]"
              }`}
            >
              {row.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const DistributionStrategyComparison = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 items-start">
        <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full capitalize">
          <h2 className="font-kugile text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
            Posting Content
            <span className="text-[#780AC1]">{` Isn't a Strategy.`}</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
            Many creators believe consistent posting alone leads to growth. In
            reality, posting without a strategy often results in inconsistent
            performance, missed opportunities, and unpredictable audience
            growth.
          </p>
        </div>

        <div className="flex flex-col gap-10 items-stretch w-full lg:flex-row">
          <Column
            title="Without a Strategy"
            rows={withoutStrategy}
            variant="without"
          />
          <Column
            title="With a Strategy"
            rows={withStrategy}
            variant="with"
          />
        </div>
      </div>
    </section>
  );
};

export default DistributionStrategyComparison;
