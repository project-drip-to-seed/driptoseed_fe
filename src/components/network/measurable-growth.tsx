import AsteriskIcon from "@/components/shared/asterisk-icon";

const cards = [
  {
    title: "Increased Reach",
    desc: "Every clip and placement puts your content in front of viewers who don't follow you yet.",
    tags: ["New audiences", "Wider distribution", "Beyond your followers"],
  },
  {
    title: "Audience Growth",
    desc: "Reach that lands in the right communities turns into followers, engagement and loyal fans.",
    tags: ["Follower growth", "Higher engagement", "Community trust"],
  },
  {
    title: "Better Discoverability",
    desc: "Optimized clips on trusted pages and publications show up where your ideal viewers already look.",
    tags: ["Optimized hooks", "Trusted placements", "Feed visibility"],
  },
  {
    title: "More Content Assets",
    desc: "One long-form upload becomes a library of short-form clips you can publish across the month.",
    tags: ["Clip library", "Multi-platform formats", "Weeks of content"],
  },
  {
    title: "Transparent Analytics",
    desc: "See how every clip performs across platforms and placements, and what to improve next.",
    tags: ["Clip-level insights", "Placement tracking", "Clear reporting"],
  },
  {
    title: "More Brand Opportunities",
    desc: "A larger, more engaged audience makes your channel more attractive to brands, partners and collaborators.",
    tags: ["Partnerships", "Sponsorships", "Collaborations"],
  },
];

const NetworkMeasurableGrowth = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 items-start">
        {/* Heading */}
        <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full capitalize">
          <h2 className="font-kugile text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
            {`Designed for `}
            <span className="text-[#780AC1]">Measurable Growth.</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
            Every stage of our framework is designed to create tangible,
            trackable outcomes that contribute to sustainable creator success.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 w-full sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-between min-h-[280px] overflow-hidden rounded-[16px] p-5 bg-gradient-to-b from-[11%] from-[rgba(213,158,251,0.08)] to-[142.75%] to-[rgba(120,10,193,0.08)] lg:h-[314px]"
            >
              <div className="flex flex-col gap-8 items-start">
                <AsteriskIcon width={35} height={36} color="#780AC1" />
                <div className="flex flex-col gap-2 items-start capitalize">
                  <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black">
                    {card.title}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#404040]">
                    {card.desc}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 items-center">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center justify-center rounded-full border border-[#780AC1] px-3 py-2 font-[family-name:var(--font-inter)] font-normal text-[12px] leading-[1.2] text-[#780AC1] capitalize whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkMeasurableGrowth;
