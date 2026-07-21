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
      "Every long-form upload is re-cut into dozens of platform-native short clips built to perform on their own.",
  },
  {
    title: "Clip",
    description:
      "Every long-form upload is re-cut into dozens of platform-native short clips built to perform on their own.",
  },
  {
    title: "Optimize",
    description:
      "Every long-form upload is re-cut into dozens of platform-native short clips built to perform on their own.",
  },
];

const bottomStages: Stage[] = [
  {
    title: "Distribute",
    description:
      "Every long-form upload is re-cut into dozens of platform-native short clips built to perform on their own.",
  },
  {
    title: "Analyze",
    description:
      "Every long-form upload is re-cut into dozens of platform-native short clips built to perform on their own.",
  },
  {
    title: "Grow",
    description:
      "Every long-form upload is re-cut into dozens of platform-native short clips built to perform on their own.",
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

  return (
    <section className="w-full py-20 px-20 bg-white overflow-x-clip">
      <div className="flex flex-col gap-1 items-center w-full text-center">
        <h2 className="font-kugile capitalize text-[36px] leading-[1.4]">
          <span className="text-black">A Repeatable System for </span>
          <span className="text-[#780AC1]">Sustainable Creator Growth.</span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
          Seven stages, running on loop so growth compounds instead of
          resetting with every upload.
        </p>
      </div>

      <div className="relative w-full max-w-[1280px] mx-auto mt-[100px] h-[578px]">
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
