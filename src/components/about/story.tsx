"use client";

import { useState } from "react";

type StoryCard = {
  eyebrow: string;
  title: string;
  description: string;
};

const cards: StoryCard[] = [
  {
    eyebrow: "Before",
    title: "Hours of Work, One Upload.",
    description:
      "Creators were spending entire days researching, filming, and editing pouring everything into a single post, then starting from zero the next morning.",
  },
  {
    eyebrow: "The Gap",
    title: "Then the Content Just Stopped.",
    description:
      "A few days after publishing, reach flattened. The work that took hours to make had days, sometimes hours, of relevance no system existed to keep it moving.",
  },
  {
    eyebrow: "The Fix",
    title: "So We Built the Creator Growth Engine.",
    description:
      "One system to turn a single upload into a distribution network clipped, seeded, and measured continuously.",
  },
];

const ACTIVE_WIDTH = 560;
const INACTIVE_WIDTH = 340;
const GRADIENT = "linear-gradient(180deg, #D59EFB 11%, #780AC1 142.75%)";

const StoryCardItem = ({
  card,
  isActive,
  onSelect,
}: {
  card: StoryCard;
  isActive: boolean;
  onSelect: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className="group relative shrink-0 h-[448px] rounded-3xl border border-[#D59EFB] overflow-hidden text-left transition-[width] duration-500 ease-in-out cursor-pointer flex flex-col"
      style={{ width: isActive ? ACTIVE_WIDTH : INACTIVE_WIDTH }}
    >
      {/* base + gradient crossfade */}
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: isActive ? 1 : 0, background: GRADIENT }}
      />

      {/* inactive corner blob */}
      <div
        className="absolute bottom-[-236px] right-[-236px] size-[471px] rounded-full transition-opacity duration-500"
        style={{
          opacity: isActive ? 0 : 1,
          background:
            "radial-gradient(circle, rgba(213,158,251,0.5) 0%, rgba(120,10,193,0.25) 50%, transparent 72%)",
        }}
      />

      {/* active side glows */}
      <div
        className="absolute top-[calc(50%-75.5px)] left-[calc(50%-260.5px)] -translate-x-1/2 -translate-y-1/2 size-[471px] rounded-full transition-opacity duration-500"
        style={{
          opacity: isActive ? 1 : 0,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[calc(50%-75.5px)] left-[calc(50%+203.5px)] -translate-x-1/2 -translate-y-1/2 size-[471px] rounded-full transition-opacity duration-500"
        style={{
          opacity: isActive ? 1 : 0,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 70%)",
        }}
      />

      {/* content column: text takes its natural height, image fills the rest */}
      <div className="relative z-10 flex flex-col h-full pt-5 pb-0">
        <p
          className="px-5 uppercase font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.4] transition-colors duration-500 shrink-0"
          style={{ color: isActive ? "#FFFFFF" : "#780AC1" }}
        >
          {card.eyebrow}
        </p>

        <div className="px-5 mt-4 flex flex-col items-start gap-2 text-left capitalize shrink-0">
          <p
            className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] w-full transition-colors duration-500"
            style={{ color: isActive ? "#FFFFFF" : "#000000" }}
          >
            {card.title}
          </p>
          <p
            className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] w-full transition-colors duration-500"
            style={{ color: isActive ? "#F9F9F9" : "#404040" }}
          >
            {card.description}
          </p>
        </div>

        {/* product mockup: small (inactive) crossfades with large (active), filling remaining space */}
        <div className="relative flex-1 min-h-0 mt-4">
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: isActive ? 0 : 1,
              backgroundImage: "url(/general_assets/about_story_mockup.png)",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: isActive ? 1 : 0,
              backgroundImage:
                "url(/general_assets/about_story_mockup_large.png)",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>
    </button>
  );
};

const Story = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="flex flex-col gap-1 items-start w-[900px] max-w-full">
        <p className="font-kugile capitalize text-[36px] leading-[1.4] text-black">
          {`It Started With `}
          <span className="text-[#780AC1]">One Simple Observation.</span>
        </p>
        <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-[#686868]">
          Every day, creators invest countless hours researching ideas,
          writing scripts, filming videos, editing content, and publishing
          across multiple platforms.
        </p>
      </div>

      <div className="flex gap-5 items-stretch w-full mt-10">
        {cards.map((card, index) => (
          <StoryCardItem
            key={card.eyebrow}
            card={card}
            isActive={index === activeIndex}
            onSelect={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Story;
