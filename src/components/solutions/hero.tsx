const stats = [
  {
    value: "300+",
    label: "Distribution Partners",
    className: "left-10 top-[268px]",
  },
  {
    value: "50M+",
    label: "Monthly Reach",
    className: "left-[229px] top-[464px]",
  },
  {
    value: "1,000+",
    label: "Placements Every Month",
    className: "left-[509px] top-[378px]",
  },
  {
    value: "100+",
    label: "Active Creators",
    className: "left-[807px] top-[469px]",
  },
  {
    value: "9,000+",
    label: "Clips Published",
    className: "left-[1087px] top-[358px]",
  },
  {
    value: "95%",
    label: "Creator Satisfaction",
    className: "right-10 top-[160px]",
  },
];

const SolutionsHero = () => {
  return (
    <section className="relative w-full h-auto min-h-[380px] pb-16 pt-28 overflow-hidden bg-[#F2E7F9] sm:min-h-[440px] sm:pt-32 lg:h-[640px] lg:py-0">
      {/* Background glow blobs */}
      <div className="absolute left-[-234px] top-[-243px] size-[400px] sm:size-[600px] lg:size-[851px]">
        <div className="absolute inset-[-71.68%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src="/media/bg/ellipse-left-v1.webp"
          />
        </div>
      </div>
      <div className="absolute right-[-387px] top-[-525px] size-[500px] sm:size-[760px] lg:size-[1080px]">
        <div className="absolute inset-[-70.37%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src="/media/bg/ellipse-right-v1.webp"
          />
        </div>
      </div>
      <div className="absolute left-[180px] top-[191px] hidden size-[1080px] lg:block">
        <div className="absolute inset-[-75.93%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src="/media/bg/ellipse-bottom-v1.webp"
          />
        </div>
      </div>

      {/* Headline + copy */}
      <div className="relative left-1/2 -translate-x-1/2 lg:absolute lg:top-[180px] w-[900px] max-w-[calc(100%-40px)] flex flex-col items-center gap-3 text-center text-white capitalize lg:gap-1">
        <h1 className="font-kugile leading-[1.3] text-[28px] sm:text-[40px] lg:text-[57px] lg:leading-[1.4] w-full lg:whitespace-nowrap">
          Grow Beyond Your Followers.
        </h1>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.6] text-[16px] w-full">
          Creating exceptional content is no longer enough. In today&apos;s
          creator economy, sustainable growth comes from consistently
          reaching new audiences not just posting more videos.
        </p>
      </div>

      {/* Stat cards */}
      <div className="hidden lg:contents">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            style={{ animationDelay: `${index * 0.6}s` }}
            className={`absolute h-[120px] w-[200px] rounded-2xl border-[0.6px] border-white bg-white/[0.12] backdrop-blur-[12px] shadow-[14px_14px_8px_0px_rgba(0,0,0,0.08)] overflow-hidden animate-float ${stat.className}`}
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex w-[156px] flex-col items-center text-center text-white capitalize">
              <p className="leading-[1.2] text-[48px] w-full">{stat.value}</p>
              <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.4] text-[16px] w-full">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsHero;
