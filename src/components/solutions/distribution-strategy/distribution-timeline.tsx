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

const launchChecklist = ["Caption", "Thumbnail", "Hashtags", "Metadata"];

const LaunchPreview = () => (
  <div className="flex h-[240px] gap-4 rounded-2xl bg-white p-4">
    <div
      className="relative flex h-full w-[112px] shrink-0 flex-col items-center justify-between overflow-hidden rounded-xl px-3 pb-3 pt-4"
      style={{
        background:
          "linear-gradient(160deg, #A24BEA 0%, #780AC1 55%, #54078F 100%)",
      }}
    >
      <span className="mt-8 flex size-12 items-center justify-center rounded-full bg-white/20">
        <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
          <path
            d="M6.5 3.5L16 10l-9.5 6.5z"
            fill="#fff"
            stroke="#fff"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="flex w-full flex-col gap-1.5">
        <span className="h-1.5 w-4/5 rounded-full bg-white/90" />
        <span className="h-1.5 w-3/5 rounded-full bg-white/60" />
      </span>
    </div>

    <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
      <div className="flex flex-col gap-3">
        <p className="font-[family-name:var(--font-inter)] text-[12px] font-medium uppercase leading-none tracking-[0.08em] text-[#686868]">
          Optimized for launch
        </p>
        <ul className="flex flex-col gap-2.5">
          {launchChecklist.map((item) => (
            <li key={item} className="flex items-center gap-2.5">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#780AC1]">
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M3 7.5l2.6 2.6L11 4.6"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-[family-name:var(--font-inter)] text-[15px] font-normal leading-none text-black">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <span className="w-fit rounded-full bg-[#EED7FF66] px-3 py-1.5 font-[family-name:var(--font-inter)] text-[12px] font-normal leading-none text-[#780AC1]">
        Day 1 · Primary platforms
      </span>
    </div>
  </div>
);

const DistributionTimeline = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[24px] border border-[#D59EFB] bg-white p-5 sm:p-8 lg:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[540px] top-1/2 size-[1080px] -translate-y-1/2 rounded-full bg-[#780AC1] blur-[380px]"
        />

        <div className="relative flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full capitalize">
          <h2 className="font-kugile text-[24px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
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
          <div className="flex gap-5 items-start flex-1 min-w-0 lg:max-w-[674px]">
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

            <LaunchPreview />

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
                Live on 3 platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributionTimeline;
