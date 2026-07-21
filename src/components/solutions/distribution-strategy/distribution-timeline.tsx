type Week = {
  label: string;
  title: string;
  description: string;
  active: boolean;
};

const weeks: Week[] = [
  {
    label: "Week 1",
    title: "Initial Launch",
    description:
      "The content is published on primary platforms with optimized captions, thumbnails, hashtags, and metadata.",
    active: true,
  },
  {
    label: "Week 2",
    title: "Community Distribution",
    description:
      "Content is strategically shared within niche communities, regional pages, and interest-based platforms.",
    active: true,
  },
  {
    label: "Week 3",
    title: "Partner Network Distribution",
    description:
      "Selected content is distributed through creator partners, media publications, and trusted ecosystem pages.",
    active: false,
  },
  {
    label: "Week 4",
    title: "Reposting & Amplification",
    description:
      "High-performing content is repurposed, reshared, and amplified through additional placements or paid promotion where appropriate.",
    active: false,
  },
];

const platforms = ["IG", "YT", "TT"];

const PlayIcon = () => (
  <svg width="57" height="60" viewBox="0 0 57 60" fill="none" aria-hidden="true">
    <path
      d="M53 26.4a4 4 0 0 1 0 7.2L9.5 55.6A4 4 0 0 1 4 52V8a4 4 0 0 1 5.5-3.7L53 26.4Z"
      stroke="#780AC1"
      strokeWidth="3"
      strokeLinejoin="round"
    />
  </svg>
);

const DistributionTimeline = () => {
  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[24px] border border-[#D59EFB] bg-white p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[492px] top-1/2 size-[983px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(213,158,251,0.4)_0%,rgba(213,158,251,0)_70%)]"
        />

        <div className="relative flex flex-col gap-1 items-start w-[900px] max-w-full capitalize">
          <h2 className="font-kugile text-[36px] leading-[1.4] text-black">
            A Distribution Strategy That
            <span className="text-[#780AC1]">{` Extends Beyond Day One.`}</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
            Instead of publishing content once and moving on, we distribute
            every upload through a structured month-long plan that keeps it
            visible, relevant, and engaging.
          </p>
        </div>

        <div className="relative mt-10 flex gap-5 items-start">
          <div className="flex gap-5 items-start flex-1 min-w-0 max-w-[674px]">
            <div className="flex flex-col items-center shrink-0 pt-1">
              {weeks.map((week, i) => (
                <div key={week.label} className="flex flex-col items-center">
                  <span
                    className={`size-3.5 shrink-0 rounded-full ${
                      week.active
                        ? "bg-[#780AC1]"
                        : "border-2 border-[#D59EFB] bg-white"
                    }`}
                  />
                  {i < weeks.length - 1 && (
                    <span
                      className={`w-px grow ${
                        week.active && weeks[i + 1].active
                          ? "bg-[#780AC1]"
                          : "bg-[#EED7FF]"
                      }`}
                      style={{ minHeight: "52px" }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-[54px] items-start flex-1 min-w-0">
              {weeks.map((week) => (
                <div key={week.label} className="flex flex-col gap-2 items-start w-full">
                  <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.4] text-[#780AC1] uppercase">
                    {week.label}
                  </p>
                  <div className="flex flex-col gap-2 items-start capitalize">
                    <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black">
                      {week.title}
                    </p>
                    <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
                      {week.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-5 w-[486px] max-w-full shrink-0 rounded-[24px] border border-white bg-white/30 p-5 backdrop-blur-[47px]">
            <div className="flex flex-col gap-2 items-start capitalize">
              <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.4] text-[#780AC1] uppercase">
                Week 1
              </p>
              <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black">
                Initial Launch
              </p>
            </div>

            <div className="flex h-[240px] items-center justify-center rounded-2xl bg-white">
              <PlayIcon />
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex gap-2 items-center">
                {platforms.map((platform) => (
                  <div
                    key={platform}
                    className="flex size-8 items-center justify-center rounded shrink-0 border border-[#D59EFB]"
                  >
                    <p className="font-[family-name:var(--font-inter)] font-normal text-[12px] leading-[1.2] text-[#780AC1] capitalize">
                      {platform}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[1.2] text-[#780AC1] capitalize whitespace-nowrap">
                ↑ +8.2K reach
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributionTimeline;
