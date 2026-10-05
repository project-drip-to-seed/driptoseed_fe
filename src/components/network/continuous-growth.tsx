import AsteriskIcon from "@/components/shared/asterisk-icon";

const cards = [
  {
    title: "Creator Uploads",
    desc: "It all starts with the long-form videos, podcasts, interviews or vlogs you already publish.",
  },
  {
    title: "Content Review",
    desc: "Our team reviews every upload to find the moments with the greatest potential to travel.",
    highlighted: true,
  },
  {
    title: "Clipping",
    desc: "Editors turn each upload into multiple short-form clips, each built around one strong moment.",
  },
  {
    title: "Optimization",
    desc: "Hooks, captions, framing and formatting are refined for every platform before anything goes live.",
  },
  {
    title: "Distribution",
    desc: "Clips are placed across relevant communities, media pages and partner networks on a planned schedule.",
  },
  {
    title: "Audience Growth",
    desc: "Each placement introduces your content to new viewers, turning reach into followers and engagement.",
  },
  {
    title: "Performance Reporting",
    desc: "Clear reporting shows which clips, channels and placements are driving results.",
  },
  {
    title: "Improvement & Repeat",
    desc: "What the data reveals feeds the next round of content, so every cycle performs better than the last.",
  },
];

const NetworkContinuousGrowth = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 items-start">
        {/* Heading */}
        <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full capitalize">
          <h2 className="font-kugile text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
            {`From One `}
            <span className="text-[#780AC1]">Upload to Continuous Growth.</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
            Our framework doesn&apos;t end after your content goes live. It
            operates as an ongoing growth cycle where every upload is
            transformed into multiple opportunities for reach, engagement, and
            audience expansion.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 w-full sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`relative min-h-[280px] overflow-hidden rounded-[16px] xl:h-[361px] ${
                card.highlighted
                  ? "border border-[#D59EFB] bg-white"
                  : "bg-gradient-to-b from-[11%] from-[rgba(213,158,251,0.08)] to-[142.75%] to-[rgba(120,10,193,0.08)]"
              }`}
            >
              {card.highlighted && (
                <div className="pointer-events-none absolute bottom-[-100px] right-[-56px] size-[240px] rounded-full bg-[#780AC1] opacity-80 blur-[125px]" />
              )}
              <div className="absolute left-5 top-5">
                <AsteriskIcon width={35} height={36} color="#780AC1" />
              </div>
              <div className="absolute left-5 top-[88px] w-[calc(100%-40px)] flex flex-col gap-2 items-start capitalize xl:w-[calc(100%-40px)]">
                <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black w-full">
                  {card.title}
                </p>
                <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#404040] w-full">
                  {card.desc}
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
