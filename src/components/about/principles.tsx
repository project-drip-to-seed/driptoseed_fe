type Principle = {
  title: string;
  description: string;
};

const principles: Principle[] = [
  {
    title: "Creator First",
    description:
      "Every decision is measured against one question: does this help the creator grow.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "We build for compounding growth over months, not a single viral moment.",
  },
  {
    title: "Transparency",
    description:
      "Every number we report is a number you can see for yourself, live.",
  },
  {
    title: "Collaboration",
    description:
      "Editors, partners, and creators work from the same shared plan.",
  },
  {
    title: "Innovation",
    description: "We rebuild our own tools the moment a better way appears.",
  },
  {
    title: "Quality Over Quantity",
    description:
      "One well-placed clip outperforms ten posted without a plan.",
  },
];

const AsteriskIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 19 20"
    width={19}
    height={20}
    className={className}
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M7.64112 20L7.96664 12.6736L1.86745 16.6493L0 13.3507L6.47611 10L0 6.6493L1.86745 3.35069L7.96664 7.32639L7.64112 0H11.3589L11.0334 7.32639L17.1326 3.35069L19 6.6493L12.5239 10L19 13.3507L17.1326 16.6493L11.0334 12.6736L11.3589 20H7.64112Z"
    />
  </svg>
);

const Principles = () => {
  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="flex flex-col gap-1 items-start w-[900px] max-w-full">
        <h2 className="font-kugile capitalize text-[36px] leading-[1.4] text-black">
          {`The principles that `}
          <span className="text-[#780AC1]">guide everything we build.</span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-[#686868]">
          Every day, creators invest countless hours researching ideas,
          writing scripts, filming videos, editing content, and publishing
          across multiple platforms.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 w-full mt-10">
        {principles.map((principle) => (
          <div
            key={principle.title}
            className="group flex flex-col gap-8 items-start px-5 py-5 min-w-0 h-[230px] rounded-3xl bg-white border border-[#D59EFB] transition-colors duration-300 hover:border-transparent hover:bg-gradient-to-br hover:from-[#D59EFB] hover:to-[#780AC1]"
          >
            <div className="flex items-center justify-center shrink-0 size-[66px] rounded-2xl bg-[#EED7FF] transition-colors duration-300 group-hover:bg-white/20">
              <AsteriskIcon className="size-8 text-[#780AC1] transition-colors duration-300 group-hover:text-white" />
            </div>
            <div className="flex flex-col gap-3 items-start">
              <p className="font-[family-name:var(--font-inter)] font-medium capitalize text-[20px] leading-[1.4] text-black transition-colors duration-300 group-hover:text-white">
                {principle.title}
              </p>
              <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868] transition-colors duration-300 group-hover:text-white">
                {principle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Principles;
