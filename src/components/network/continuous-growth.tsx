import AsteriskIcon from "@/components/shared/asterisk-icon";

const cards = [
  { title: "Creator Uploads" },
  { title: "Content Review", highlighted: true },
  { title: "Clipping" },
  { title: "Optimization" },
  { title: "Distribution" },
  { title: "Audience Growth" },
  { title: "Performance Reporting" },
  { title: "Improvement & Repeat" },
];

const description =
  "High-velocity, culture-first pages that push content into daily scroll habits.";

const NetworkContinuousGrowth = () => {
  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 items-start">
        {/* Heading */}
        <div className="flex flex-col gap-1 items-start w-[900px] max-w-full capitalize">
          <p className="font-kugile text-[36px] leading-[1.4] text-black">
            {`From One `}
            <span className="text-[#780AC1]">Upload to Continuous Growth.</span>
          </p>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
            Our framework doesn&apos;t end after your content goes live. It
            operates as an ongoing growth cycle where every upload is
            transformed into multiple opportunities for reach, engagement, and
            audience expansion.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-5 w-full">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`relative h-[361px] overflow-hidden rounded-[16px] ${
                card.highlighted
                  ? "border border-[#D59EFB] bg-white"
                  : "bg-gradient-to-b from-[11%] from-[rgba(213,158,251,0.08)] to-[142.75%] to-[rgba(120,10,193,0.08)]"
              }`}
            >
              {card.highlighted && (
                <div className="pointer-events-none absolute bottom-[-100px] right-[-56px] size-[240px] rounded-full bg-[radial-gradient(circle,rgba(213,158,251,0.5)_0%,rgba(213,158,251,0)_70%)]" />
              )}
              <div className="absolute left-5 top-5">
                <AsteriskIcon width={35} height={36} color="#780AC1" />
              </div>
              <div className="absolute left-5 top-[88px] w-[265px] flex flex-col gap-2 items-start capitalize">
                <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black w-full">
                  {card.title}
                </p>
                <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#404040] w-full">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkContinuousGrowth;
