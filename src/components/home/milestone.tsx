const stats = [
  { value: "300+", label: "Distribution Partners" },
  { value: "50M+", label: "Monthly reach" },
  { value: "1,000+", label: "Placements Monthly" },
  { value: "100+", label: "Active Creators" },
  { value: "9,000+", label: "Clips Published" },
  { value: "95%", label: "Creator Satisfaction" },
];

const StatsRow = ({
  keyPrefix,
  color,
}: {
  keyPrefix: string;
  color: string;
}) => (
  <>
    {stats.map((stat) => (
      <div key={`${keyPrefix}-${stat.label}`} className="flex items-center gap-10">
        <div className="flex flex-col items-center text-center w-[156px] shrink-0">
          <p
            className="font-[family-name:var(--font-inter)] font-normal capitalize leading-[1.2] text-[48px]"
            style={{ color }}
          >
            {stat.value}
          </p>
          <p
            className="font-[family-name:var(--font-inter)] font-normal capitalize leading-[1.4] text-[16px]"
            style={{ color }}
          >
            {stat.label}
          </p>
        </div>
        <div className="h-[120px] w-px bg-[#D59EFB]/40 shrink-0" />
      </div>
    ))}
  </>
);

const Milestone = () => {
  return (
    <section className="relative w-full h-[280px] flex items-center gap-20 px-20 bg-[#F2E7F9] overflow-hidden">
      <h2 className="shrink-0 w-[313px] font-kugile capitalize leading-[1.4] text-[36px] text-[#780AC1]">
        <span className="text-black">Built to </span>
        <span>Amplify</span>
        <br />
        Creator Growth
      </h2>

      <div className="flex-1 relative overflow-hidden">
        {/* base row, muted */}
        <div className="flex gap-10 items-center w-max animate-marquee">
          <StatsRow keyPrefix="a" color="#D59EFB" />
          <StatsRow keyPrefix="b" color="#D59EFB" />
        </div>

        {/* fixed spotlight band: only content passing through here turns purple */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, transparent calc(50% - 90px), black calc(50% - 60px), black calc(50% + 60px), transparent calc(50% + 90px), transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, transparent calc(50% - 90px), black calc(50% - 60px), black calc(50% + 60px), transparent calc(50% + 90px), transparent 100%)",
          }}
        >
          <div className="flex gap-10 items-center w-max animate-marquee">
            <StatsRow keyPrefix="a-highlight" color="#780AC1" />
            <StatsRow keyPrefix="b-highlight" color="#780AC1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestone;
