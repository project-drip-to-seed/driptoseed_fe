type DistributionCard = {
  title: string;
  description: string;
  tags: string[];
  metric: string;
  metricLabel: string;
  elevated?: boolean;
};

const cards: DistributionCard[] = [
  {
    title: "Audience-First Distribution",
    description:
      "We identify where your ideal audience already spends time and strategically place your content in those spaces.",
    tags: [
      "Precision audience matching",
      "No wasted impressions",
      "Relevance over volume",
    ],
    metric: "94%",
    metricLabel: "Audience-content match rate",
  },
  {
    title: "Community-Based Reach",
    description:
      "Your content moves through trusted communities and pages not cold ads. Reach that arrives with built-in credibility.",
    tags: [
      "300+ vetted communities",
      "Native, in-feed placements",
      "Trust transfers with the post",
    ],
    metric: "50M+",
    metricLabel: "Community reach pool",
    elevated: true,
  },
  {
    title: "Long-Term Visibility",
    description:
      "Placements are staggered over weeks, not hours so your content keeps earning new viewers long after the algorithm forgets it.",
    tags: [
      "Staggered placement schedule",
      "Compounding reach",
      "Sustained discovery window",
    ],
    metric: "30+",
    metricLabel: "Days of active visibility",
  },
];

function DistributionCard({ card }: { card: DistributionCard }) {
  return (
    <article
      className={`flex min-h-[581px] min-w-0 flex-1 flex-col overflow-hidden rounded-3xl border border-[#D59EFB] bg-white ${
        card.elevated
          ? "shadow-[0_0_24px_0_rgba(0,0,0,0.16)]"
          : ""
      }`}
    >
      <div
        className="flex h-60 shrink-0 items-center justify-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(213, 158, 251, 0.08) 11%, rgba(120, 10, 193, 0.08) 142.75%)",
        }}
      >
        <p className="font-kugile text-[64px] leading-[1.4] text-[#FF0000] sm:text-[76px]">
          Graphic
        </p>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex min-h-[118px] flex-col gap-3">
          <h3 className="font-[family-name:var(--font-inter)] text-xl font-medium leading-[1.4] text-black">
            {card.title}
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-base font-normal leading-[1.6] text-[#686868]">
            {card.description}
          </p>
        </div>

        <div className="mt-5 flex min-h-[68px] flex-wrap content-start items-start gap-2">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="whitespace-nowrap rounded-full bg-[#EED7FF66] px-3 py-2 font-[family-name:var(--font-inter)] text-[10px] font-normal capitalize leading-[1.4] text-[#780AC1]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 border-t border-[#E2E2E2] pt-5">
          <p className="text-[32px] leading-[1.2] text-black">{card.metric}</p>
          <p className="font-[family-name:var(--font-inter)] text-xs font-normal capitalize leading-[1.4] text-[#686868]">
            {card.metricLabel}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function StrategicDistribution() {
  return (
    <section className="w-full bg-white px-5 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex max-w-[900px] flex-col gap-1">
          <h2 className="font-kugile text-[34px] leading-[1.4] text-black sm:text-[36px]">
            Strategic Distribution{" "}
            <span className="text-[#780AC1]">Designed for Creators.</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-base font-normal leading-[1.6] text-[#686868]">
            Creator Seeding is the process of placing your content in front of
            relevant audiences through trusted digital communities and
            publishing partners.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {cards.map((card) => (
            <DistributionCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
