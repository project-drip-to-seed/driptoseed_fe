const cards = [
  {
    bg: "#FBF5FF",
    title: "Great content deserves great distribution.",
    description:
      "We exist to close the gap between making something worth watching and making sure it's watched. Every service we build clipping, seeding, strategy points at the same outcome: content that keeps working long after it's published.",
  },
  {
    bg: "#EED7FF",
    title:
      "One connected network for every creator, editor, brand, and community.",
    description:
      "We're building toward a world where content doesn't move through one channel at a time it moves through a living network, matched automatically to the communities most likely to care.",
  },
];

const MissionVision = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full">
        <h2 className="font-kugile capitalize text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
          {`Our `}
          <span className="text-[#780AC1]">Mission &amp; Vision</span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-[#686868]">
          Every day, creators invest countless hours researching ideas,
          writing scripts, filming videos, editing content, and publishing
          across multiple platforms.
        </p>
      </div>

      <div className="flex flex-col gap-5 items-stretch w-full mt-10 sm:flex-row">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex-1 min-w-0 min-h-[180px] rounded-3xl p-5 flex flex-col gap-2 items-start"
            style={{ backgroundColor: card.bg }}
          >
            <p className="font-[family-name:var(--font-inter)] font-medium capitalize text-[20px] leading-[1.4] text-black">
              {card.title}
            </p>
            <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-[#686868]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;
