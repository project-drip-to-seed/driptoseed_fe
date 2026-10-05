const cards = [
  {
    title: "Content Has a Short Lifespan",
    description:
      "Most posts lose 90% of their reach within 48 hours of publishing.",
    value: "48h",
    label: "avg. reach window",
  },
  {
    title: "Algorithms Are Unpredictable",
    description:
      "The same content can reach 10x more people one week and almost no one the next.",
    value: "±340%",
    label: "performance variance",
  },
  {
    title: "Limited Discoverability",
    description:
      "Most platforms rarely show your content to anyone outside your existing followers.",
    value: "6%",
    label: "avg. non-follower reach",
  },
  {
    title: "Existing Followers Only",
    description:
      "Without paid boosts, reach stays capped at the audience you've already built.",
    value: "1.2x",
    label: "audience multiplier",
  },
  {
    title: "Inconsistent Growth",
    description:
      "Follower and engagement gains swing month to month, making growth hard to predict.",
    value: "14%",
    label: "month-to-month variance",
  },
];

const SolutionsProblem = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full">
        <h2 className="font-kugile capitalize text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
          {`Great Content Doesn't `}
          <span className="text-[#780AC1]">
            Always Reach Great Audiences.
          </span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
          Many creators believe they need to create more content to grow. In
          reality, the issue isn&apos;t the volume of content it&apos;s what
          happens after it&apos;s published.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 items-stretch w-full mt-10 sm:grid-cols-2 xl:flex">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group flex min-w-0 xl:flex-1 min-h-[320px] xl:h-[390px] flex-col rounded-2xl p-5 overflow-hidden border border-[#D59EFB] bg-gradient-to-b from-[11%] from-[rgba(213,158,251,0)] to-[142.75%] to-[rgba(120,10,193,0)] transition-colors duration-300 hover:from-[rgba(213,158,251,0.08)] hover:to-[rgba(120,10,193,0.08)]"
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
