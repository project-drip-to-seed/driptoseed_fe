import AsteriskIcon from "@/components/shared/asterisk-icon";

const cards = [
  {
    title: "Increased Reach",
    desc: "Publish optimized content across your owned social channels with platform-specific formatting and scheduling.",
    tags: [
      "Existing audience engagement",
      "Brand consistency",
      "Long-term content library",
    ],
  },
  {
    title: "Audience Growth",
    desc: "Collaborate with trusted partners, complementary creators, and relevant businesses to expand your reach.",
    tags: ["Audience crossover", "Higher credibility", "Community trust"],
  },
  {
    title: "Better Discoverability",
    desc: "Place content on digital publications, editorial platforms, and media brands to increase authority and visibility.",
    tags: ["Thought leadership", "Business creators", "Industry experts"],
  },
  {
    title: "More Content Assets",
    desc: "Distribute content within niche groups, online forums, regional pages, and interest-based communities.",
    tags: [
      "Highly engaged audiences",
      "Better discoverability",
      "Relevant conversations",
    ],
  },
  {
    title: "Transparent Analytics",
    desc: "Amplify high-performing content using targeted paid promotion to accelerate reach and audience growth.",
    tags: ["Product launches", "Campaigns", "New creator discovery"],
  },
  {
    title: "More Brand Opportunities",
    desc: "Cross-promote content through trusted creator collaborations and ecosystem pages to increase organic exposure.",
    tags: ["Shared audiences", "Collaborative growth", "Network effects"],
  },
];

const NetworkMeasurableGrowth = () => {
  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 items-start">
        {/* Heading */}
        <div className="flex flex-col gap-1 items-start w-[900px] max-w-full capitalize">
          <h2 className="font-kugile text-[36px] leading-[1.4] text-black">
            {`Designed for `}
            <span className="text-[#780AC1]">Measurable Growth.</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
            Every stage of our framework is designed to create tangible,
            trackable outcomes that contribute to sustainable creator success.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-5 w-full">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-between h-[314px] overflow-hidden rounded-[16px] p-5 bg-gradient-to-b from-[11%] from-[rgba(213,158,251,0.08)] to-[142.75%] to-[rgba(120,10,193,0.08)]"
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
