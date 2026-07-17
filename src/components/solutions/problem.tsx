const cards = [
  {
    title: "Content Has a Short Lifespan",
    description:
      "Most posts lose 90% of their reach within 48 hours of publishing.",
    value: "48h",
    label: "avg. reach window",
    highlighted: true,
  },
  {
    title: "Algorithms Are Unpredictable",
    value: "±340%",
    label: "performance variance",
  },
  {
    title: "Limited Discoverability",
    value: "6%",
    label: "avg. non-follower reach",
  },
  {
    title: "Existing Followers Only",
    value: "1.2x",
    label: "audience multiplier",
  },
  {
    title: "Inconsistent Growth",
    value: "14%",
    label: "month-to-month variance",
  },
];

const SolutionsProblem = () => {
  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="flex flex-col gap-1 items-start w-[900px] max-w-full">
        <p className="font-kugile capitalize text-[36px] leading-[1.4] text-black">
          {`Great Content Doesn't `}
          <span className="text-[#780AC1]">
            Always Reach Great Audiences.
          </span>
        </p>
        <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
          Many creators believe they need to create more content to grow. In
          reality, the issue isn&apos;t the volume of content it&apos;s what
          happens after it&apos;s published.
        </p>
      </div>

      <div className="flex gap-3 items-stretch w-full mt-10">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`flex min-w-0 flex-1 h-[390px] flex-col rounded-2xl p-5 overflow-hidden ${
              card.highlighted
                ? "bg-gradient-to-b from-[11%] from-[rgba(213,158,251,0.08)] to-[142.75%] to-[rgba(120,10,193,0.08)]"
                : "border border-[#D59EFB]"
            }`}
          >
            <img
              alt=""
              src="/solutions_assets/asterisk_purple.svg"
              className="w-[39px] h-10"
            />

            <div className="mt-8 flex flex-col gap-2 capitalize">
              <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black">
                {card.title}
              </p>
              {card.description && (
                <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#404040]">
                  {card.description}
                </p>
              )}
            </div>

            <div className="mt-auto flex flex-col capitalize">
              <p className="font-[family-name:var(--font-inter)] leading-[1.2] text-[48px] text-[#780AC1]">
                {card.value}
              </p>
              <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.4] text-[16px] text-[#404040]">
                {card.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsProblem;
