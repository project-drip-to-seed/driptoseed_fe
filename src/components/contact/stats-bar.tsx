type Stat = {
  value: string;
  label: string;
  featured?: boolean;
};

const stats: Stat[] = [
  { value: "300+", label: "Distribution Partners" },
  { value: "50M+", label: "Monthly reach" },
  { value: "1,000+", label: "Placements Every Month", featured: true },
  { value: "100+", label: "Active Creators" },
  { value: "9,000+", label: "Clips Published" },
  { value: "95%", label: "Creator Satisfaction" },
];

const StatsBar = () => {
  return (
    <section className="w-full bg-[#F2E7F9] py-12 px-5 sm:px-8 md:px-10 lg:py-20">
      <div className="mx-auto flex max-w-[1363px] flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16">
        <p className="font-kugile text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.4] capitalize whitespace-nowrap shrink-0 text-center lg:text-left">
          <span className="text-black">{`Built to `}</span>
          <span className="text-[#780AC1]">Amplify</span>
          <br />
          <span className="text-[#780AC1]">Creator Growth</span>
        </p>

        <div className="flex w-full items-center gap-10 min-w-0 overflow-x-auto">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-10">
              {i > 0 && <div className="h-[120px] w-px shrink-0 bg-[#780AC1]/30" />}
              <div
                className={`flex w-[156px] shrink-0 flex-col items-center gap-1 text-center capitalize font-[family-name:var(--font-inter)] font-normal ${
                  stat.featured ? "text-[#780AC1]" : "text-[#D59EFB]"
                }`}
              >
                <p className="w-full text-[48px] leading-[1.2]">{stat.value}</p>
                <p className="w-full text-[16px] leading-[1.4]">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
