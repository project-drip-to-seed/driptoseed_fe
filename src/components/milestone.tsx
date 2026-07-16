const stats = [
  { value: "300+", label: "Distribution Partners" },
  { value: "50M+", label: "Monthly reach" },
  { value: "1,000+", label: "Placements Every Month" },
  { value: "100+", label: "Active Creators" },
  { value: "9,000+", label: "Clips Published" },
  { value: "95%", label: "Creator Satisfaction" },
];

const STAT_CYCLE_SECONDS = 9;
const STAT_STEP_SECONDS = STAT_CYCLE_SECONDS / stats.length;

const StatsRow = ({ keyPrefix }: { keyPrefix: string }) => (
  <>
    {stats.map((stat, index) => {
      const pulseDelay = { animationDelay: `${index * STAT_STEP_SECONDS}s` };

      return (
        <div key={`${keyPrefix}-${stat.label}`} className="flex items-center gap-10">
          <div className="flex flex-col items-center text-center w-[156px] shrink-0">
            <p
              className="font-[family-name:var(--font-inter)] font-normal capitalize leading-[1.2] text-[48px] text-[#D59EFB] animate-stat-pulse"
              style={pulseDelay}
            >
              {stat.value}
            </p>
            <p
              className="font-[family-name:var(--font-inter)] font-normal capitalize leading-[1.4] text-[16px] text-[#D59EFB] animate-stat-pulse"
              style={pulseDelay}
            >
              {stat.label}
            </p>
          </div>
          <div className="h-[120px] w-px bg-[#D59EFB]/40 shrink-0" />
        </div>
      );
    })}
  </>
);

const Milestone = () => {
  return (
    <section className="relative w-full h-[280px] flex items-center gap-20 px-20 bg-[#F2E7F9] overflow-hidden">
      <div className="shrink-0 w-[313px] font-kugile capitalize leading-[1.4] text-[36px] text-[#780AC1]">
        <p>
          <span className="text-black">Built to </span>
          <span>Amplify</span>
        </p>
        <p>Creator Growth</p>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="flex gap-10 items-center w-max animate-marquee">
          <StatsRow keyPrefix="a" />
          <StatsRow keyPrefix="b" />
        </div>
      </div>
    </section>
  );
};

export default Milestone;
