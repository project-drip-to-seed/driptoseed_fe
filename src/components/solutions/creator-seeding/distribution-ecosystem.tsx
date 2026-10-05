import AsteriskIcon from "@/components/shared/asterisk-icon";

type PartnerCategory = {
  title: string;
  description: string;
  partners: string;
  featured?: boolean;
};

const categories: PartnerCategory[] = [
  {
    title: "Meme Pages",
    description:
      "High-velocity, culture-first pages that push content into daily scroll habits.",
    partners: "80+ partners",
  },
  {
    title: "Entertainment Pages",
    description:
      "Curated feeds that surface standout creator moments to broad audiences.",
    partners: "45+ partners",
    featured: true,
  },
  {
    title: "Community Pages",
    description:
      "Interest-based groups where your niche audience already gathers.",
    partners: "60+ partners",
  },
  {
    title: "Regional Pages",
    description:
      "Geo-targeted networks for local and market-specific reach.",
    partners: "35+ partners",
  },
  {
    title: "Media Publications",
    description:
      "Editorial outlets that lend credibility and long-tail discovery.",
    partners: "25+ partners",
  },
  {
    title: "Fan Networks",
    description:
      "Dedicated fan communities primed for high engagement.",
    partners: "40+ partners",
  },
  {
    title: "Industry Platforms",
    description:
      "Vertical-specific platforms reaching decision-makers in your space.",
    partners: "20+ partners",
  },
  {
    title: "Creator Ecosystems",
    description:
      "Cross-promotional networks of aligned creators and collectives.",
    partners: "30+ partners",
  },
];

function EntertainmentGraphic() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-[166px] top-[188px] h-[211px] w-[246px] rotate-[8deg] rounded-[28px] bg-[#171717] p-[9px] shadow-[0_12px_20px_rgba(0,0,0,0.28)]"
    >
      <div className="relative flex size-full items-center justify-center overflow-hidden rounded-[21px] bg-gradient-to-br from-[#FF33CF] via-[#DC20B9] to-[#8B0AC1] p-6 text-center">
        <div className="absolute left-1/2 top-2 h-2 w-14 -translate-x-1/2 rounded-full bg-black/70" />
        <p className="-rotate-[8deg] font-[family-name:var(--font-inter)] text-[24px] font-black uppercase leading-[0.95] text-white">
          The best
          <br />
          time to post
          <br />
          shorts
        </p>
      </div>
    </div>
  );
}

function EcosystemCard({ category }: { category: PartnerCategory }) {
  return (
    <article
      className={`relative h-[361px] min-w-0 overflow-hidden rounded-3xl border ${
        category.featured
          ? "border-[#D59EFB] bg-white shadow-[0_0_24px_rgba(0,0,0,0.16)]"
          : "border-transparent bg-[#EED7FF66]"
      }`}
    >
      <div className="absolute left-5 top-5 h-9 w-[35px]">
        <AsteriskIcon width={35} height={36} />
      </div>

      <div className="absolute left-5 top-[88px] z-10 flex w-[calc(100%-40px)] flex-col gap-2">
        <h3 className="font-[family-name:var(--font-inter)] text-xl font-medium leading-[1.4] text-black">
          {category.title}
        </h3>
        <p className="font-[family-name:var(--font-inter)] text-base font-normal leading-[1.6] text-[#686868]">
          {category.description}
        </p>
      </div>

      {category.featured ? <EntertainmentGraphic /> : null}

      <p className="absolute bottom-5 left-5 z-10 font-[family-name:var(--font-inter)] text-base font-normal capitalize leading-[1.2] text-[#780AC1]">
        {category.partners}
      </p>
    </article>
  );
}

export default function DistributionEcosystem() {
  return (
    <section className="w-full bg-white px-5 pb-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex max-w-[900px] flex-col gap-1">
          <h2 className="font-kugile text-[34px] leading-[1.4] text-black sm:text-[36px]">
            A Distribution Ecosystem{" "}
            <span className="text-[#780AC1]">Built for Discoverability.</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-base font-normal leading-[1.6] text-[#686868]">
            Our network consists of carefully selected partners across multiple
            categories, allowing every creator to benefit from targeted
            distribution instead of broad, unfocused exposure.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <EcosystemCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
