const skills = [
  "Strong Hooks",
  "Storytelling",
  "Caption Design",
  "Retention Editing",
  "Platform Optimization",
  "Viral Editing",
  "Audio Enhancement",
  "Thumbnail Selection",
];

const stats = [
  { value: "300+", label: "Distribution Partners" },
  { value: "50M+", label: "Monthly Reach" },
  { value: "50M+", label: "Monthly Reach" },
];

export default function EditorNetwork() {
  return (
    <section className="relative h-auto w-full overflow-hidden bg-[#F2E7F9] py-12 sm:py-16 lg:h-[600px] lg:py-0">
      <div className="relative left-5 top-0 w-auto max-w-[calc(100%-40px)] px-5 sm:px-8 md:px-12 lg:absolute lg:top-[60px] lg:left-20 lg:w-[628px] lg:px-0">
        <div className="flex w-full max-w-[620px] flex-col gap-1">
          <h2 className="font-kugile text-[26px] leading-[1.3] sm:text-[36px] lg:leading-[1.4]">
            Great Clips Are Crafted by{" "}
            <span className="text-[#780AC1]">Great Editors.</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-base font-normal leading-[1.6] text-[#686868]">
            Our editor network is made up of talented creators who understand
            how people consume short-form content. They don&apos;t just edit
            videos—they identify compelling stories, optimize every frame, and
            create clips designed to capture attention within seconds.
          </p>
        </div>

        <div className="mt-10 flex max-w-[618px] flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="whitespace-nowrap rounded-full bg-white/50 px-3 py-2 font-[family-name:var(--font-inter)] text-[10px] font-normal capitalize leading-[1.4] text-[#780AC1]"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6 sm:grid sm:h-[120px] sm:grid-cols-[156px_1px_156px_1px_156px] sm:items-center sm:justify-between sm:gap-0">
          {stats.map((stat, index) => (
            <div key={index} className="contents">
              <div className="flex w-[140px] shrink-0 flex-col text-left sm:w-[156px]">
                <p className="text-[36px] leading-[1.2] text-[#780AC1] sm:text-[48px]">
                  {stat.value}
                </p>
                <p className="font-[family-name:var(--font-inter)] text-base leading-[1.4] text-[#686868]">
                  {stat.label}
                </p>
              </div>
              {index < stats.length - 1 ? (
                <div className="hidden h-[120px] w-px bg-[#D59EFB] sm:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <img
        alt="Creator growth dashboard"
        src="/general_assets/dashboard_mockup.png"
        className="absolute left-[737px] top-[84px] hidden h-[718px] w-[752px] max-w-none object-contain lg:block"
      />
    </section>
  );
}
