import AsteriskIcon from "@/components/shared/asterisk-icon";

type ClipPurpose = {
  title: string;
  description: string;
  detail: string;
  result: string;
  large?: boolean;
  featured?: boolean;
};

const purposes: ClipPurpose[] = [
  {
    title: "Viral Moments",
    description:
      "The most engaging, emotional, surprising, or attention-grabbing parts of your content that have the highest potential for widespread sharing.",
    detail: "Reaction bait · Peak energy moments",
    result: "Peak reach & shares",
    large: true,
  },
  {
    title: "Educational Clips",
    description:
      "Structured, single-idea breakdowns that teach fast and keep viewers watching to the end.",
    detail: "How-tos · Frameworks · Quick tips",
    result: "Watch time & saves",
    large: true,
  },
  {
    title: "Trend-Led Content",
    description: "Fast-turnaround clips built around what's moving right now.",
    detail: "Trending sounds · Timely formats · News hooks",
    result: "Always fresh",
    featured: true,
  },
  {
    title: "Funny Moments",
    description: "Genuine, unscripted humor cut with perfect comedic timing.",
    detail: "Bloopers · Banter",
    result: "High shares",
  },
  {
    title: "Relatable Content",
    description: "Moments that make viewers feel seen — and hit share.",
    detail: "Everyday truths",
    result: "High saves",
  },
  {
    title: "Strong Opinions",
    description: "Bold, unfiltered takes engineered to spark comments.",
    detail: "Hot takes · Debate bait",
    result: "High comments",
  },
];

function PlatformBadges() {
  return (
    <div className="flex gap-2">
      {[
        ["IG", "Instagram"],
        ["YT", "YouTube"],
        ["TT", "TikTok"],
      ].map(([shortName, fullName]) => (
        <span
          key={shortName}
          title={fullName}
          className="flex size-8 items-center justify-center rounded-lg bg-[#EED7FF] font-[family-name:var(--font-inter)] text-[10px] leading-[1.4] text-[#780AC1]"
        >
          {shortName}
        </span>
      ))}
    </div>
  );
}

function PurposeCard({ purpose }: { purpose: ClipPurpose }) {
  const contentTop = purpose.large ? 88 : 76;

  return (
    <article
      className={`relative h-[295px] overflow-hidden rounded-3xl border ${
        purpose.featured
          ? "border-[#D59EFB] bg-white shadow-[0_0_24px_rgba(0,0,0,0.16)]"
          : "border-transparent bg-[#EED7FF66]"
      }`}
    >
      {purpose.featured ? (
        <div
          aria-hidden="true"
          className="absolute left-[223px] top-[98px] size-60 rounded-full bg-[#D59EFB]/15 blur-[36px]"
        />
      ) : null}

      <div className="absolute left-5 top-5 h-9 w-[35px]">
        <AsteriskIcon width={35} height={36} />
      </div>

      <div
        className="absolute left-5 z-10 flex flex-col"
        style={{
          top: contentTop,
          width: purpose.large ? 500 : 310,
        }}
      >
        <h3 className="font-[family-name:var(--font-inter)] text-xl font-medium leading-[1.4] text-black">
          {purpose.title}
        </h3>
        <p className="mt-2 font-[family-name:var(--font-inter)] text-base font-normal leading-[1.6] text-[#686868]">
          {purpose.description}
        </p>
        <p className="mt-3 font-[family-name:var(--font-inter)] text-xs font-normal leading-[1.4] text-[#A46BCB]">
          {purpose.detail}
        </p>
        {!purpose.large ? (
          <p className="mt-3 font-[family-name:var(--font-inter)] text-base font-normal capitalize leading-[1.2] text-[#780AC1]">
            {purpose.result}
          </p>
        ) : null}
      </div>

      <div className="absolute bottom-5 left-5 z-10 flex items-center">
        <PlatformBadges />
      </div>

      {purpose.large ? (
        <p className="absolute bottom-[27px] right-5 font-[family-name:var(--font-inter)] text-xs font-normal leading-[1.4] text-[#780AC1]">
          {purpose.result}
        </p>
      ) : null}
    </article>
  );
}

export default function ClipPurposes() {
  return (
    <section className="w-full bg-white px-5 pb-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto flex max-w-[900px] flex-col gap-1 text-center">
          <h2 className="font-kugile text-[34px] leading-[1.4] text-black sm:text-[36px]">
            Every Clip Is{" "}
            <span className="text-[#780AC1]">Designed With A Purpose.</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-base font-normal leading-[1.6] text-[#686868]">
            Not every audience responds to the same type of content. That&apos;s
            why we identify and edit different styles of clips based on your
            content, niche, and audience behavior.
          </p>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-[540px_1fr]">
          <div className="grid gap-5">
            {purposes.slice(0, 2).map((purpose) => (
              <PurposeCard key={purpose.title} purpose={purpose} />
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {purposes.slice(2).map((purpose) => (
              <PurposeCard key={purpose.title} purpose={purpose} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
