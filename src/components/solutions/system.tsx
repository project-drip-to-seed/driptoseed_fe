"use client";

import { useEffect, useState } from "react";
import AsteriskIcon from "@/components/shared/asterisk-icon";

type Stage = {
  title: string;
  description: string;
};

const topStages: Stage[] = [
  {
    title: "Create",
    description:
      "It starts with your content. Share long-form videos, podcasts, interviews or vlogs and we learn your niche, audience and goals.",
  },
  {
    title: "Clip",
    description:
      "Our editors cut every upload into multiple short-form clips, each built around a single moment worth watching.",
  },
  {
    title: "Optimize",
    description:
      "Hooks, captions, framing and formatting are refined for every platform to maximize discovery and retention.",
  },
];

const bottomStages: Stage[] = [
  {
    title: "Distribute",
    description:
      "Clips are placed across our network of 300+ partners, from niche pages to communities and media, on a planned schedule.",
  },
  {
    title: "Analyze",
    description:
      "Performance is tracked across every clip and placement, so you can see exactly what is working.",
  },
  {
    title: "Grow",
    description:
      "Insights feed the next round of content and distribution, so growth compounds instead of resetting with each upload.",
  },
];

const stagePositions = ["16.6667%", "50%", "83.3333%"];

// clockwise order around the track: top row left-to-right, then bottom row right-to-left
const clockwiseOrder = [
  "Create",
  "Clip",
  "Optimize",
  "Grow",
  "Analyze",
  "Distribute",
];

const StageIcon = ({ highlighted }: { highlighted?: boolean }) => (
  <div
    className={`flex items-center justify-center shrink-0 size-[120px] rounded-full border-2 border-[#D59EFB] transition-colors duration-700 ${
      highlighted
        ? "bg-gradient-to-b from-[#D59EFB] to-[#780AC1]"
        : "bg-[#F2E7F9]"
    }`}
  >
    <AsteriskIcon color={highlighted ? "#FFFFFF" : "#780AC1"} />
  </div>
);

const SolutionsSystem = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clockwiseOrder.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const activeStage = clockwiseOrder[activeIndex];
  const allStages = [...topStages, ...bottomStages];

  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white overflow-x-clip">
      <div className="flex flex-col gap-1 items-center w-full text-center">
        <h2 className="font-kugile capitalize text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4]">
          <span className="text-black">A Repeatable System for </span>
          <span className="text-[#780AC1]">Sustainable Creator Growth.</span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
          Six stages, running on loop so growth compounds instead of
          resetting with every upload.
        </p>
      </div>

      {/* Mobile/tablet: simple stage list */}
      <div className="mt-10 grid grid-cols-1 gap-5 w-full sm:grid-cols-2 lg:hidden">
        {allStages.map((stage) => (
          <div
            key={stage.title}
            className="flex flex-col items-center gap-3 rounded-3xl border border-[#D59EFB] bg-[#F2E7F9] px-5 py-8 text-center"
          >
            <StageIcon highlighted={stage.title === activeStage} />
            <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black">
              {stage.title}
            </p>
            <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
              {stage.description}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop: stadium track */}
      <div className="relative hidden w-full max-w-[1280px] mx-auto mt-[100px] h-[578px] lg:block">
        {/* stadium track */}
        <div className="absolute inset-x-0 top-[60px] h-[320px] rounded-[374px] border-2 border-[#D59EFB]">
          <div className="absolute inset-x-5 top-[79px] flex gap-10 text-center">
            {topStages.map((stage) => (
              <div
                key={stage.title}
                className="flex flex-1 min-w-0 flex-col items-center gap-3"
              >
                <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black">
                  {stage.title}
                </p>
                <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* bottom labels */}
        <div className="absolute inset-x-5 top-[460px] flex gap-10 text-center">
          {bottomStages.map((stage) => (
            <div
              key={stage.title}
              className="flex flex-1 min-w-0 flex-col items-center gap-3"
            >
              <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black">
                {stage.title}
              </p>
              <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
                {stage.description}
              </p>
            </div>
          ))}
        </div>

        {/* icons riding the track */}
        {topStages.map((stage, i) => (
          <div
            key={`top-${stage.title}`}
            className="absolute -translate-x-1/2 top-0"
            style={{ left: stagePositions[i] }}
          >
            <StageIcon highlighted={stage.title === activeStage} />
          </div>
        ))}
        {bottomStages.map((stage, i) => (
          <div
            key={`bottom-${stage.title}`}
            className="absolute -translate-x-1/2 top-[320px]"
            style={{ left: stagePositions[i] }}
          >
            <StageIcon highlighted={stage.title === activeStage} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSystem;
