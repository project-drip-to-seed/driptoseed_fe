import AsteriskIcon from "@/components/shared/asterisk-icon";

type Channel = {
  title: string;
  description: string;
  tags: string[];
};

const channels: Channel[] = [
  {
    title: "Organic Distribution",
    description:
      "Publish optimized content across your owned social channels with platform-specific formatting and scheduling.",
    tags: ["Existing audience engagement", "Brand consistency", "Long-term content library"],
  },
  {
    title: "Strategic Partnerships",
    description:
      "Collaborate with trusted partners, complementary creators, and relevant businesses to expand your reach.",
    tags: ["Audience crossover", "Higher credibility", "Community trust"],
  },
  {
    title: "Media Pages",
    description:
      "Place content on digital publications, editorial platforms, and media brands to increase authority and visibility.",
    tags: ["Thought leadership", "Business creators", "Industry experts"],
  },
  {
    title: "Communities",
    description:
      "Distribute content within niche groups, online forums, regional pages, and interest-based communities.",
    tags: ["Highly engaged audiences", "Better discoverability", "Relevant conversations"],
  },
  {
    title: "Paid Placements",
    description:
      "Amplify high-performing content using targeted paid promotion to accelerate reach and audience growth.",
    tags: ["Product launches", "Campaigns", "New creator discovery"],
  },
  {
    title: "Creator Network",
    description:
      "Cross-promote content through trusted creator collaborations and ecosystem pages to increase organic exposure.",
    tags: ["Shared audiences", "Collaborative growth", "Network effects"],
  },
];

const ChannelCard = ({ channel }: { channel: Channel }) => (
  <div
    className="flex min-h-[314px] min-w-0 flex-1 flex-col gap-8 rounded-2xl p-5"
    style={{
      background:
        "linear-gradient(180deg, rgba(213, 158, 251, 0.08) 11%, rgba(120, 10, 193, 0.08) 142.75%)",
    }}
  >
    <AsteriskIcon width={35} height={36} />

    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2 capitalize">
        <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black">
          {channel.title}
        </p>
        <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#404040]">
          {channel.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {channel.tags.map((tag) => (
          <span
            key={tag}
            className="whitespace-nowrap rounded-full border border-[#780AC1] px-3 py-2 font-[family-name:var(--font-inter)] text-[12px] font-normal capitalize leading-[1.2] text-[#780AC1]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const StrategicChannels = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full">
        <h2 className="font-kugile capitalize text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
          Strategic Distribution
          <span className="text-[#780AC1]">{` Across Every Relevant Channel.`}</span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
          A successful distribution strategy doesn&apos;t depend on a single
          platform. We combine multiple channels to ensure your content
          reaches diverse audiences while maintaining relevance and
          authenticity.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {channels.map((channel) => (
          <ChannelCard key={channel.title} channel={channel} />
        ))}
      </div>
    </section>
  );
};

export default StrategicChannels;
