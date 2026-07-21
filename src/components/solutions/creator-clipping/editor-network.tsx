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
    <section className="relative h-[600px] w-full overflow-hidden bg-[#F2E7F9]">
      <div className="absolute left-5 top-[60px] w-[628px] max-w-[calc(100%-40px)] lg:left-20">
        <div className="flex w-[620px] max-w-full flex-col gap-1">
          <h2 className="font-kugile text-[34px] leading-[1.4] text-black sm:text-[36px]">
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

        <div className="mt-10 grid h-[120px] grid-cols-[156px_1px_156px_1px_156px] items-center justify-between">
          {stats.map((stat, index) => (
            <div key={index} className="contents">
              <div className="flex w-[156px] flex-col text-left">
                <p className="text-[48px] leading-[1.2] text-[#780AC1]">
                  {stat.value}
                </p>
                <p className="font-[family-name:var(--font-inter)] text-base leading-[1.4] text-[#686868]">
                  {stat.label}
                </p>
              </div>
              {index < stats.length - 1 ? (
                <div className="h-[120px] w-px bg-[#D59EFB]" />
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
