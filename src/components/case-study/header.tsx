const stats = [
  { value: "300+", label: "Distribution Partners" },
  { value: "50M+", label: "Monthly reach" },
  { value: "100+", label: "Active Creators" },
  { value: "9,000+", label: "Clips Published" },
  { value: "95%", label: "Creator Satisfaction" },
];

const CaseStudyHeader = ({
  title,
  creator,
}: {
  title: string;
  creator: string;
}) => {
  // Two-tone the title on the last " to " like the Figma ("... to 2.8M Organic Reach")
  const splitIndex = title.lastIndexOf(" to ");
  const head = splitIndex > -1 ? title.slice(0, splitIndex + 4) : title;
  const tail = splitIndex > -1 ? title.slice(splitIndex + 4) : "";

  return (
    <section className="relative w-full bg-[#F2E7F9] pt-24 pb-12 px-5 overflow-hidden sm:px-8 md:px-12 lg:pt-20 lg:pb-20 lg:px-20">
      {/* Purple band behind the fixed navbar */}
      <div
        className="absolute top-0 left-0 right-0 h-20"
        style={{
          background: "linear-gradient(90deg, #B558DF 0%, #780AC1 100%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto flex flex-col items-center gap-10 lg:gap-16">
        {/* Hero */}
        <div className="flex flex-col items-center gap-5 w-full lg:w-[900px] max-w-full">
          <span className="rounded-full bg-[rgba(238,215,255,0.4)] px-6 py-2 font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[1.2] text-[#780AC1] capitalize whitespace-nowrap">
            CASE STUDY • CREATOR GROWTH
          </span>
          <div className="flex flex-col items-center gap-2 text-center capitalize">
            <h1 className="font-kugile text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black w-full">
              {head}
              {tail && <span className="text-[#780AC1]">{tail}</span>}
            </h1>
            <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868] w-full">
              {creator} — every day, creators dedicate hours to researching
              ideas, writing scripts, recording videos, editing footage, and
              publishing content. Yet despite this effort, most content receives
              only a brief window of visibility before disappearing from feeds
              and recommendations.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col items-center gap-6 w-full">
          <h2 className="font-kugile capitalize text-[28px] leading-[1.4] text-center">
            <span className="text-black">Built to </span>
            <span className="text-[#780AC1]">Amplify Creator Growth</span>
          </h2>
          <div className="flex items-center justify-center gap-10 flex-wrap">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-10">
                {index > 0 && (
                  <div className="h-[120px] w-px bg-[#D59EFB] hidden md:block" />
                )}
                <div className="flex flex-col items-center text-center capitalize w-[156px] text-[#780AC1]">
                  <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.2] text-[48px] w-full">
                    {stat.value}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.4] text-[16px] w-full">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHeader;
