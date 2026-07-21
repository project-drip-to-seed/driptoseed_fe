import AsteriskIcon from "@/components/shared/asterisk-icon";

type Row = { title: string; desc: string };

const traditional: Row[] = [
  {
    title: "Upload once",
    desc: "Content is uploaded whenever it's ready, without considering audience behavior, platform timing, or distribution opportunities.",
  },
  {
    title: "One content asset",
    desc: "Creators rely entirely on platform algorithms to determine visibility and reach.",
  },
  {
    title: "Platform-dependent",
    desc: "Most posts lose momentum within a few days and rarely reach new audiences afterward.",
  },
  {
    title: "Short content lifespan",
    desc: "Content circulates mainly among existing followers instead of attracting new viewers.",
  },
  {
    title: "Vanity metrics",
    desc: "Growth depends on occasional viral moments rather than a repeatable system.",
  },
  {
    title: "Campaign mindset",
    desc: "Growth depends on occasional viral moments rather than a repeatable system.",
  },
];

const framework: Row[] = [
  {
    title: "Continuous distribution",
    desc: "Every upload follows a structured publishing and amplification schedule.",
  },
  {
    title: "Multiple content assets",
    desc: "Content is optimized and distributed across multiple platforms and partner networks.",
  },
  {
    title: "Multi-channel ecosystem",
    desc: "Each piece of content continues generating impressions and engagement over several weeks.",
  },
  {
    title: "Extended content lifecycle",
    desc: "Content reaches communities and audiences that align with your niche and goals.",
  },
  {
    title: "Growth-focused reporting",
    desc: "Consistent visibility creates predictable audience growth and stronger brand authority.",
  },
  {
    title: "Long-term creator growth",
    desc: "Analytics are utilized to refine strategies and enhance future content performance.",
  },
];

const Column = ({
  title,
  rows,
  variant,
}: {
  title: string;
  rows: Row[];
  variant: "traditional" | "framework";
}) => {
  const isFramework = variant === "framework";
  return (
    <div
      className={`flex-1 min-w-0 overflow-hidden rounded-[24px] p-5 ${
        isFramework
          ? "bg-gradient-to-b from-[11%] from-[rgba(213,158,251,0.08)] to-[142.75%] to-[rgba(120,10,193,0.08)]"
          : "bg-[#F9F9F9]"
      }`}
    >
      <p
        className={`font-[family-name:var(--font-inter)] font-medium text-[28px] leading-[1.4] uppercase ${
          isFramework ? "text-[#780AC1]" : "text-black"
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
                ? isFramework
                  ? "border-b border-[#D59EFB]"
                  : "border-b border-[#C7C7C7]"
                : ""
            }`}
          >
            <div className="flex gap-3 items-center">
              <AsteriskIcon
                width={35}
                height={36}
                color={isFramework ? "#780AC1" : "#949494"}
              />
              <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black capitalize whitespace-nowrap">
                {row.title}
              </p>
            </div>
            <p
              className={`font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] capitalize ${
                isFramework ? "text-[#404040]" : "text-[#686868]"
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

const NetworkComparison = () => {
  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 items-start">
        {/* Heading */}
        <div className="flex flex-col gap-1 items-start w-[900px] max-w-full capitalize">
          <p className="font-kugile text-[36px] leading-[1.4] text-black">
            A System Built
            <span className="text-[#780AC1]">{` for Long-Term Growth.`}</span>
          </p>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
            Traditional creator workflows focus on publishing content and hoping
            it performs. Our framework is built around continuous optimization,
            strategic distribution, and measurable growth.
          </p>
        </div>

        {/* Columns */}
        <div className="flex gap-10 items-stretch w-full">
          <Column
            title="Traditional Workflow"
            rows={traditional}
            variant="traditional"
          />
          <Column
            title="Creator Growth Framework"
            rows={framework}
            variant="framework"
          />
        </div>
      </div>
    </section>
  );
};

export default NetworkComparison;
