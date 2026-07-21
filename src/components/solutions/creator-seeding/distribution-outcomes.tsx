import AsteriskIcon from "@/components/shared/asterisk-icon";

type Outcome = {
  title: string;
  description: string;
  featured?: boolean;
};

const outcomes: Outcome[] = [
  {
    title: "Reach Beyond Followers",
    description:
      "Get discovered by audiences who have never heard of you yet.",
  },
  {
    title: "Increase Discoverability",
    description:
      "Show up in feeds and pages your ideal viewers already trust.",
    featured: true,
  },
  {
    title: "Extend Content Lifespan",
    description:
      "Placements are staggered so your content keeps working for weeks.",
  },
  {
    title: "Build Authority",
    description:
      "Appearing across respected publications compounds your credibility.",
  },
  {
    title: "Sustainable Growth",
    description:
      "Consistent placements replace unpredictable, one-off viral spikes.",
  },
  {
    title: "Actionable Insights",
    description:
      "See exactly which placements drive real audience and follower growth.",
  },
];

function OutcomeCard({ outcome }: { outcome: Outcome }) {
  return (
    <article
      className={`relative h-[196px] min-w-0 overflow-hidden rounded-3xl border ${
        outcome.featured
          ? "border-[#D59EFB] bg-white shadow-[0_0_24px_rgba(0,0,0,0.16)]"
          : "border-transparent bg-[#EED7FF66]"
      }`}
    >
      {outcome.featured ? (
        <div
          aria-hidden="true"
          className="absolute left-[223px] top-[98px] size-60 rounded-full bg-[#D59EFB]/15 blur-[36px]"
        />
      ) : null}

      <div className="absolute left-5 top-5 h-9 w-[35px]">
        <AsteriskIcon width={35} height={36} />
      </div>

      <div className="absolute left-5 top-[88px] z-10 flex w-[calc(100%-40px)] flex-col gap-2">
        <h3 className="font-[family-name:var(--font-inter)] text-xl font-medium leading-[1.4] text-black">
          {outcome.title}
        </h3>
        <p className="font-[family-name:var(--font-inter)] text-base font-normal leading-[1.6] text-[#686868]">
          {outcome.description}
        </p>
      </div>
    </article>
  );
}

export default function DistributionOutcomes() {
  return (
    <section className="w-full bg-white px-5 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex max-w-[900px] flex-col gap-1">
          <h2 className="font-kugile text-[34px] leading-[1.4] text-black sm:text-[36px]">
            Distribution That{" "}
            <span className="text-[#780AC1]">Delivers More Than Views.</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-base font-normal leading-[1.6] text-[#686868]">
            Our network consists of carefully selected partners across multiple
            categories, allowing every creator to benefit from targeted
            distribution instead of broad, unfocused exposure.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome) => (
            <OutcomeCard key={outcome.title} outcome={outcome} />
          ))}
        </div>
      </div>
    </section>
  );
}
