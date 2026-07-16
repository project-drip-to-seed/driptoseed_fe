"use client";

import { useEffect, useRef, useState } from "react";

type Step = {
  num: string;
  title: string;
  description: string;
  variant: "primary" | "light";
};

const steps: Step[] = [
  {
    num: "01",
    title: "Share Your Content",
    description:
      "Every journey begins with your content. Simply submit your long-form video, podcast, interview, vlog, or existing social content. We review every asset to understand its potential and identify the strongest opportunities for growth.",
    variant: "primary",
  },
  {
    num: "02",
    title: "Strategy & Planning",
    description:
      "No two creators are alike. Before distributing anything, we develop a customized growth strategy based on your niche, audience, content themes, and business goals. This ensures every piece of content is positioned to reach the right audience through the right channels.",
    variant: "light",
  },
  {
    num: "03",
    title: "Clip Creation",
    description:
      "Our editing team transforms one long-form video into multiple short-form assets designed for today's most engaging platforms. Instead of relying on one upload, you'll have a library of content ready to be distributed throughout the month.",
    variant: "light",
  },
  {
    num: "04",
    title: "Performance Reporting",
    description:
      "Growth is measured, not guessed. Every campaign includes transparent reporting that shows how your content performs across the distribution ecosystem. We continuously use these insights to improve future content and distribution strategies.",
    variant: "light",
  },
  {
    num: "05",
    title: "Strategic Distribution",
    description:
      "Instead of waiting for algorithms to discover your content, we actively place it across our growing distribution ecosystem. Your content is shared through relevant communities and partner networks where your ideal audience is already engaged.",
    variant: "light",
  },
  {
    num: "06",
    title: "Content Optimization",
    description:
      "Every clip is optimized to maximize discoverability and audience retention before distribution. Our team refines every detail to improve performance across platforms.",
    variant: "light",
  },
];

const ARROW_CYCLE_SECONDS = 6;
const ARROW_SLOT_SECONDS = ARROW_CYCLE_SECONDS / steps.length;

const ARROW_MASK_SRC = "/hero_section/journey_arrow_light.svg";
const ARROW_BASE_COLOR = "#EED7FF";
const ARROW_HIGHLIGHT_COLOR = "#780AC1";

const FlowArrow = ({ order }: { order: number }) => {
  return (
    <div
      className="w-full h-[11px] animate-arrow-flow"
      style={{
        WebkitMaskImage: `url(${ARROW_MASK_SRC})`,
        maskImage: `url(${ARROW_MASK_SRC})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        backgroundImage: `linear-gradient(90deg, transparent 0%, ${ARROW_HIGHLIGHT_COLOR} 45%, ${ARROW_HIGHLIGHT_COLOR} 55%, transparent 100%), linear-gradient(90deg, ${ARROW_BASE_COLOR}, ${ARROW_BASE_COLOR})`,
        backgroundSize: "60% 100%, 100% 100%",
        backgroundRepeat: "no-repeat, no-repeat",
        animationDelay: `${order * ARROW_SLOT_SECONDS - ARROW_CYCLE_SECONDS}s`,
      }}
    />
  );
};

const StepCard = ({
  step,
  order,
  reversedArrow,
  visible,
}: {
  step: Step;
  order: number;
  reversedArrow: boolean;
  visible: boolean;
}) => (
  <div
    className="flex flex-col gap-5 items-start flex-1 min-w-0 transition-all duration-700 ease-out"
    style={{
      transitionDelay: `${order * 150}ms`,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
    }}
  >
    <div className="flex gap-3 items-center w-full">
      <div
        className={
          step.variant === "primary"
            ? "flex items-center justify-center rounded-full shrink-0 size-9 bg-[#780AC1] text-white"
            : "flex items-center justify-center rounded-full shrink-0 size-9 bg-[#EED7FF] text-black"
        }
      >
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.2] text-[16px]">
          {step.num}
        </p>
      </div>
      <div
        className={
          reversedArrow
            ? "rotate-180 -scale-y-100 flex-1 min-w-0"
            : "flex-1 min-w-0"
        }
      >
        <FlowArrow order={order} />
      </div>
    </div>
    <div className="flex flex-col gap-3 items-start w-full">
      <p className="font-[family-name:var(--font-inter)] font-medium capitalize leading-[1.2] text-[24px] text-black">
        {step.title}
      </p>
      <p className="font-[family-name:var(--font-inter)] font-normal capitalize leading-[1.6] text-[14px] text-[#686868]">
        {step.description}
      </p>
    </div>
  </div>
);

const Journey = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const rowOne = steps.slice(0, 3);
  const rowTwo = [steps[5], steps[4], steps[3]];

  return (
    <section ref={sectionRef} className="w-full py-20 px-20 bg-white">
      <div className="flex flex-col gap-1 items-start w-[900px] max-w-full">
        <p className="font-kugile capitalize text-[36px] leading-[1.6] whitespace-nowrap">
          <span className="text-black">From One Upload to </span>
          <span className="text-[#780AC1]">Thousands of New Viewers.</span>
        </p>
        <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-[#686868] w-[900px] max-w-full">
          Growing as a creator shouldn&apos;t depend on chance. Our
          structured workflow transforms every upload into a long-term growth
          opportunity through strategic planning, content repurposing,
          intelligent distribution, and measurable performance tracking.
        </p>
      </div>

      <div className="flex flex-col gap-10 items-start w-full mt-10">
        <div className="flex gap-10 items-start w-full">
          {rowOne.map((step, i) => (
            <StepCard
              key={step.num}
              step={step}
              order={i}
              reversedArrow={false}
              visible={visible}
            />
          ))}
        </div>
        <div className="flex gap-10 items-start w-full">
          {rowTwo.map((step) => (
            <StepCard
              key={step.num}
              step={step}
              order={Number(step.num) - 1}
              reversedArrow
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
