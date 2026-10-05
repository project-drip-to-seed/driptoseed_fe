const CardGlow = ({ className }: { className: string }) => (
  <div
    className={`pointer-events-none absolute size-[471px] rounded-full bg-[#780AC1] blur-[170px] ${className}`}
  />
);

const TiltedMockup = ({ className }: { className: string }) => (
  <div
    className={`absolute hidden h-[332.599px] w-[347.721px] items-center justify-center -translate-x-1/2 lg:flex ${className}`}
  >
    <div className="rotate-[7.86deg]">
      <div className="relative h-[292.868px] w-[310.579px] shadow-[-20px_24px_24px_0px_rgba(0,0,0,0.25)] rounded-[12px]">
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img
            alt=""
            className="absolute h-[129.59%] left-[-11.71%] max-w-none top-[-13.61%] w-[122.2%]"
            src="/media/dashboard-mockup-v1.webp"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </div>
);

const NetworkBetterSystem = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 items-start">
        {/* Heading */}
        <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full capitalize">
          <h2 className="font-kugile text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
            {`Great Content `}
            <span className="text-[#780AC1]">Needs a Better System.</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
            Every day, creators dedicate hours to researching ideas, writing
            scripts, recording videos, editing footage, and publishing content.
            Yet despite this effort, most content receives only a brief window
            of visibility before disappearing from feeds and recommendations.
          </p>
        </div>

        {/* Bento */}
        <div className="flex flex-col gap-3 w-full lg:flex-row lg:items-center">
          {/* Two square cards */}
          <div className="flex flex-col gap-3 w-full sm:flex-row lg:w-auto lg:shrink-0">
            {[
              {
                title: "Content Has a Short Lifespan",
                desc: "Most posts experience their highest engagement within the first few days before rapidly declining in visibility.",
              },
              {
                title: "Growth Depends on Algorithms",
                desc: "Creators often rely entirely on platform algorithms, making audience growth inconsistent and unpredictable.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="relative h-[260px] sm:h-[340px] lg:h-[448px] w-full lg:w-[340px] shrink-0 overflow-hidden rounded-[24px] border border-[#D59EFB] bg-white"
              >
                <CardGlow className="bottom-[-236px] right-[-236px]" />
                <div className="absolute left-5 top-5 w-[calc(100%-40px)] flex flex-col gap-2 items-start capitalize lg:left-1/2 lg:-translate-x-1/2 lg:top-[19px] lg:w-[300px]">
                  <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black w-full">
                    {card.title}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#404040] w-full">
                    {card.desc}
                  </p>
                </div>
                <TiltedMockup className="bottom-[-109.6px] left-[calc(50%-0.14px)]" />
              </div>
            ))}
          </div>

          {/* Two wide stacked cards */}
          <div className="flex flex-col gap-3 items-start w-full lg:flex-1 lg:min-w-0">
            {[
              {
                title: "Valuable Content Goes Unused",
                desc: "Long-form videos contain dozens of insights and memorable moments that never reach audiences because they are never repurposed.",
              },
              {
                title: "Distribution Is Often Overlooked",
                desc: "Publishing is only the beginning. Without a strategic distribution plan, even exceptional content struggles to reach new viewers.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="relative min-h-[220px] sm:h-[218px] w-full overflow-hidden rounded-[24px] border border-[#D59EFB] bg-white"
              >
                <CardGlow className="bottom-[-236px] right-[-236px]" />
                <div className="absolute left-5 top-5 w-[calc(100%-40px)] sm:w-[312px] flex flex-col gap-2 items-start capitalize">
                  <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black w-full">
                    {card.title}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#404040] w-full">
                    {card.desc}
                  </p>
                </div>
                <TiltedMockup className="bottom-[-128.6px] left-[calc(50%+205.86px)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkBetterSystem;
