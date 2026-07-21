type Phase = {
  eyebrow: string;
  title: string;
  description: string;
  done: boolean;
};

const phases: Phase[] = [
  {
    eyebrow: "Phase 01 — Shipped",
    title: "Foundation",
    description:
      "Core platform, creator onboarding, and the first partner network went live.",
    done: true,
  },
  {
    eyebrow: "Phase 02 — Shipped",
    title: "Clipping Infrastructure",
    description:
      "An in-house clipping pipeline turns long-form content into daily-ready short clips.",
    done: true,
  },
  {
    eyebrow: "Phase 03 — In Progress",
    title: "Distribution Engine",
    description:
      "Automated matching between content and the partner pages most likely to grow it.",
    done: false,
  },
  {
    eyebrow: "Future Vision",
    title: "Full Growth Automation",
    description:
      "A self-optimizing system that plans, clips, seeds, and reports without manual input.",
    done: false,
  },
];

const Roadmap = () => {
  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="relative w-full rounded-3xl border border-[#D59EFB] bg-white overflow-hidden px-10 py-[60px]">
        {/* decorative glow bleeding from bottom-right */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: 788,
            top: 304,
            width: 983,
            height: 983,
            background:
              "radial-gradient(circle, rgba(213,158,251,0.5) 0%, rgba(120,10,193,0.22) 50%, transparent 72%)",
          }}
        />

        {/* heading */}
        <div className="relative flex flex-col gap-1 items-start capitalize w-[900px] max-w-full">
          <h2 className="font-kugile text-[36px] leading-[1.4] text-black">
            {`Building the `}
            <span className="text-[#780AC1]">
              future of creator distribution.
            </span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
            Every day, creators invest countless hours researching ideas,
            writing scripts, filming videos, editing content, and publishing
            across multiple platforms.
          </p>
        </div>

        {/* timeline + visual panel */}
        <div className="relative flex gap-5 items-stretch w-full mt-10">
          <div className="relative w-[674px] shrink-0">
            <div className="absolute left-3 top-3 bottom-3 w-px bg-[#D59EFB]" />
            <div className="flex flex-col gap-[54px] w-full">
              {phases.map((phase) => (
                <div
                  key={phase.title}
                  className="relative flex gap-5 items-start w-full"
                >
                  <span
                    className={`relative z-10 shrink-0 size-6 rounded-full ${
                      phase.done
                        ? "bg-[#780AC1]"
                        : "bg-white border-2 border-[#D59EFB]"
                    }`}
                  />
                  <div className="flex flex-col gap-2 items-start flex-1 min-w-0">
                    <p className="font-[family-name:var(--font-inter)] font-normal uppercase text-[16px] leading-[1.4] text-[#780AC1] w-full">
                      {phase.eyebrow}
                    </p>
                    <div className="flex flex-col gap-2 items-start capitalize w-full">
                      <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black w-full">
                        {phase.title}
                      </p>
                      <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868] w-full">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* visual panel */}
          <div className="flex-1 min-w-0 bg-[#D59EFB]" />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
