const stages = [
  {
    title: "Discover",
    desc: "Understand your creator profile, audience, and growth opportunities.",
  },
  {
    title: "Create",
    desc: "Identify valuable content that has the greatest potential for distribution.",
  },
  {
    title: "Clip",
    desc: "Repurpose long-form content into multiple engaging short-form assets.",
  },
  {
    title: "Seed",
    desc: "Strategically place content across relevant communities and partner networks.",
  },
  {
    title: "Distribute",
    desc: "Execute a customized multi-channel distribution strategy.",
  },
  {
    title: "Measure",
    desc: "Analyze campaign performance, optimize future strategies, and repeat the process.",
  },
];

const NetworkGrowthStages = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 items-start">
        {/* Heading */}
        <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full capitalize">
          <h2 className="font-kugile text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
            {`One Framework. `}
            <span className="text-[#780AC1]">Six Growth Stages.</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
            Our Creator Growth Framework is a continuous system where every
            stage builds upon the previous one. Together, these six stages
            create a repeatable process that increases discoverability, extends
            content lifespan, and drives sustainable creator growth.
          </p>
        </div>

        {/* Stage grid */}
        <div className="grid grid-cols-1 gap-5 w-full sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage, index) => (
            <div
              key={stage.title}
              className="relative overflow-hidden rounded-[24px] bg-gradient-to-b from-[11%] from-[rgba(213,158,251,0.12)] to-[142.75%] to-[rgba(120,10,193,0.12)] lg:h-[154px]"
            >
              {/* Mobile/tablet layout */}
              <div className="flex flex-col items-start gap-3 p-5 lg:hidden">
                <span className="inline-flex items-center justify-center rounded-[40px] bg-[#780AC1] px-4 py-1.5">
                  <p className="font-[family-name:var(--font-inter)] font-normal text-[12px] leading-[1.6] text-white uppercase whitespace-nowrap">
                    Stage {index + 1}
                  </p>
                </span>
                <div className="flex flex-col gap-2 items-start capitalize">
                  <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black w-full">
                    {stage.title}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#404040] w-full">
                    {stage.desc}
                  </p>
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden lg:contents">
                <div className="absolute left-[10px] top-1/2 -translate-y-1/2 flex h-[134px] w-[36px] items-center justify-center">
                  <div className="rotate-[-90deg]">
                    <div className="flex h-[36px] w-[134px] items-center justify-center rounded-[40px] bg-[#780AC1]">
                      <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[1.6] text-white uppercase whitespace-nowrap">
                        Stage {index + 1}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute left-[66px] top-5 w-[327px] flex flex-col gap-2 items-start capitalize">
                  <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black w-full">
                    {stage.title}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#404040] w-full">
                    {stage.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkGrowthStages;
