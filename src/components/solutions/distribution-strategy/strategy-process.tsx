"use client";

import { useEffect, useRef, useState } from "react";

type Step = {
  num: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    num: "01",
    title: "Audience Research",
    description:
      "We analyze your target audience, interests, demographics, viewing habits, and platform behavior to understand where your content will perform best.",
  },
  {
    num: "02",
    title: "Creator Analysis",
    description:
      "We evaluate your niche, existing content, engagement patterns, audience demographics, and brand positioning.",
  },
  {
    num: "03",
    title: "Content Selection",
    description:
      "Not every video should be distributed the same way. We identify high-potential content with the greatest opportunity for reach and engagement.",
  },
  {
    num: "04",
    title: "Platform Selection",
    description:
      "Each piece of content is matched with the platforms, communities, and partner networks most likely to generate meaningful results.",
  },
  {
    num: "05",
    title: "Distribution Calendar",
    description:
      "We create a structured publishing schedule that maximizes visibility over time instead of concentrating everything on one day.",
  },
  {
    num: "06",
    title: "Reporting & Optimization",
    description:
      "Performance data is analyzed continuously to improve future distribution strategies and maximize long-term growth.",
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
        className="flex items-center justify-center rounded-full shrink-0 size-9 animate-num-pulse"
        style={{
          animationDelay: `${order * ARROW_SLOT_SECONDS - ARROW_CYCLE_SECONDS}s`,
        }}
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

const StrategyProcess = () => {
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
    <section ref={sectionRef} className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full">
        <h2 className="font-kugile capitalize text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4]">
          <span className="text-black">Every Distribution </span>
          <span className="text-[#780AC1]">Plan Begins With Strategy.</span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868] w-full">
          No two creators are the same. That&apos;s why every distribution
          strategy is tailored to your niche, audience, content style, and
          business objectives.
        </p>
      </div>

      {/* Mobile/tablet: simple vertical stepper */}
      <div className="mt-10 flex flex-col gap-10 items-start w-full lg:hidden">
        {steps.map((step, i) => (
          <StepCard
            key={step.num}
            step={step}
            order={i}
            reversedArrow={false}
            visible={visible}
          />
        ))}
      </div>

      {/* Desktop: zig-zag two-row layout */}
      <div className="hidden lg:flex lg:flex-col gap-10 items-start w-full mt-10">
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

export default StrategyProcess;
