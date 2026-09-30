import AsteriskIcon from "@/components/shared/asterisk-icon";

type Row = { title: string; desc: string };

// Rows are paired: row N on the left is the problem, row N on the right is how the framework answers it.
const traditional: Row[] = [
  {
    title: "Upload once",
    desc: "Content is published once and left to the algorithm, with no plan for what happens after day one.",
  },
  {
    title: "One content asset",
    desc: "A long video is treated as a single post, so most of its best moments never get shared.",
  },
  {
    title: "Platform-dependent",
    desc: "Reach depends on one platform's algorithm, so visibility rises and falls outside your control.",
  },
  {
    title: "Short content lifespan",
    desc: "Most posts lose momentum within days and rarely reach new audiences afterward.",
  },
  {
    title: "Vanity metrics",
    desc: "Success is judged by likes and views, with little insight into what actually drives audience growth.",
  },
  {
    title: "Campaign mindset",
    desc: "Effort comes in bursts around launches instead of a repeatable system that compounds.",
  },
];

const framework: Row[] = [
  {
    title: "Continuous distribution",
    desc: "Every upload follows a structured publishing and amplification schedule that keeps it visible for weeks.",
  },
  {
    title: "Multiple content assets",
    desc: "One long-form video becomes many short clips, each with its own chance to be discovered.",
  },
  {
    title: "Multi-channel ecosystem",
    desc: "Content is distributed across platforms, communities and partner networks, not a single feed.",
  },
  {
    title: "Extended content lifecycle",
    desc: "Staggered placements keep every piece of content generating impressions long after launch.",
  },
  {
    title: "Growth-focused reporting",
    desc: "Transparent reporting ties every clip and placement to real reach and audience growth.",
  },
  {
    title: "Long-term creator growth",
    desc: "Analytics refine each cycle, so growth compounds instead of arriving as one-off wins.",
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
        className={`font-[family-name:var(--font-inter)] font-medium text-[22px] sm:text-[28px] leading-[1.4] uppercase ${
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
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 items-start">
        {/* Heading */}
        <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full capitalize">
          <h2 className="font-kugile text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
            A System Built
            <span className="text-[#780AC1]">{` for Long-Term Growth.`}</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
            Traditional creator workflows focus on publishing content and hoping
            it performs. Our framework is built around continuous optimization,
            strategic distribution, and measurable growth.
          </p>
        </div>

        {/* Columns */}
        <div className="flex flex-col gap-10 items-stretch w-full lg:flex-row">
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
