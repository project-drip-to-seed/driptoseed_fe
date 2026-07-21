const TagPill = ({ label }: { label: string }) => (
  <span className="bg-[#EED7FF66] text-[#780AC1] font-[family-name:var(--font-inter)] font-normal capitalize text-xs leading-[1.2] px-3 py-2 rounded-full whitespace-nowrap">
    {label}
  </span>
);

const cards = [
  {
    title: "Creator Seeding",
    description:
      "We place your profile directly inside the niche communities and micro-networks where your next audience already lives.",
    image: "/general_assets/about_grow_network.png",
    imageClassName: "inset-[12%_10%] w-[80%] h-[76%] object-contain",
    badge: "412 communities",
    tags: ["Community placement", "Niche targeting", "Organic trust"],
  },
  {
    title: "Creator Clipping",
    description:
      "Every long-form upload is re-cut into dozens of platform-native short clips built to perform on their own.",
    image: "/hero_section/power_2.svg",
    imageClassName: "inset-0 w-full h-full object-cover",
    badge: "18 clips / upload",
    tags: ["Auto re-cutting", "Platform-native edits", "Hook optimization"],
    elevated: true,
  },
  {
    title: "Distribution Strategy",
    description:
      "A structured publishing plan that sequences every clip across the right channels, at the right cadence.",
    image: "/hero_section/power_3.svg",
    imageClassName: "inset-0 w-full h-full object-cover",
    badge: "6 channels live",
    tags: ["Channel sequencing", "Audience mapping", "Performance loops"],
  },
];

const SolutionsServices = () => {
  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="flex flex-col gap-1 items-start w-[900px] max-w-full">
        <h2 className="font-kugile capitalize text-[36px] leading-[1.4] text-black">
          {`One Engine. `}
          <span className="text-[#780AC1]">
            Three Powerful Growth Services.
          </span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
          Seeding, clipping, and distribution working together as a single,
          integrated growth system.
        </p>
      </div>

      <div className="flex gap-5 items-stretch w-full mt-10">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`flex min-w-0 flex-1 flex-col rounded-3xl border border-[#D59EFB] bg-white overflow-hidden ${
              card.elevated ? "shadow-[0px_0px_24px_0px_rgba(0,0,0,0.16)]" : ""
            }`}
          >
            <div
              className="relative w-full h-60 shrink-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(213,158,251,0.08) 11%, rgba(120,10,193,0.08) 142.75%)",
              }}
            >
              <img
                alt=""
                src={card.image}
                className={`absolute ${card.imageClassName}`}
              />
              <span className="absolute bottom-[10px] right-[10px] bg-[rgba(120,10,193,0.08)] text-[#780AC1] font-[family-name:var(--font-inter)] font-normal capitalize text-[10px] leading-[1.2] px-2 py-1 rounded-full whitespace-nowrap">
                {card.badge}
              </span>
            </div>

            <div className="flex flex-col gap-5 p-5 flex-1">
              <div className="flex flex-col gap-3 items-start capitalize">
                <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black">
                  {card.title}
                </p>
                <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
                  {card.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 items-center mt-auto">
                {card.tags.map((tag) => (
                  <TagPill key={tag} label={tag} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsServices;
