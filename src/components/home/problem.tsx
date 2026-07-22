"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Limited to Your Existing Followers",
    description:
      "Most social platforms initially show your content to people who already know you. If it doesn't perform immediately, its reach slows down, making it difficult to consistently reach new viewers.",
  },
  {
    title: "Great Videos Fade Too Quickly",
    description:
      "A video you've spent hours creating often receives the majority of its views within the first few days. After that, even valuable content is pushed aside by newer posts, regardless of its quality.",
  },
  {
    title: "One Video Holds More Potential Than One Upload",
    description:
      "Every podcast, vlog, interview, or long-form video contains multiple moments worth sharing. But identifying, editing, captioning, and publishing those clips consistently requires significant time and resources.",
  },
  {
    title: "Creating Isn't the Same as Growing",
    description:
      "Publishing consistently is important, but growth requires distribution. Without a strategy to place your content in front of new audiences, even the best creators struggle to expand beyond their existing community.",
  },
];

const StarIcon = () => (
  <svg
    viewBox="0 0 19 20"
    className="block size-full"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M7.64112 20L7.96664 12.6736L1.86745 16.6493L0 13.3507L6.47611 10L0 6.6493L1.86745 3.35069L7.96664 7.32639L7.64112 0H11.3589L11.0334 7.32639L17.1326 3.35069L19 6.6493L12.5239 10L19 13.3507L17.1326 16.6493L11.0334 12.6736L11.3589 20H7.64112Z"
    />
  </svg>
);

const Problem = () => {
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

  return (
    <section ref={sectionRef} className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full">
        <h2 className="font-kugile capitalize text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.4] text-black">
          {`Great Content Doesn't Fail. `}
          <span className="text-[#780AC1]">Distribution Does.</span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-[#686868]">
          Creators spend hours planning, filming, and editing videos only for
          most of them to disappear after a single upload. Algorithms are
          unpredictable, and relying on one platform limits your reach.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 items-stretch w-full mt-10 sm:grid-cols-2 lg:flex lg:items-stretch">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className={`group flex flex-col gap-8 items-start min-w-0 lg:flex-1 min-h-[354px] rounded-3xl px-5 py-6 overflow-hidden bg-white border border-[#D59EFB] transition-colors duration-300 hover:border-transparent hover:bg-gradient-to-b hover:from-[#D59EFB] hover:to-[#780AC1] ${
              visible ? "animotion-blur-reveal" : "opacity-0"
            }`}
            style={visible ? { animationDelay: `${i * 120}ms` } : undefined}
          >
            <div className="shrink-0 w-[19px] h-5 text-[#780AC1] transition-colors duration-300 group-hover:text-white">
              <StarIcon />
            </div>
            <div className="flex flex-col gap-3 items-start capitalize">
              <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black transition-colors duration-300 group-hover:text-white">
                {card.title}
              </p>
              <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868] transition-colors duration-300 group-hover:text-white">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Problem;
