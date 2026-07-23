import CaseStudyCta from "@/components/case-study/cta";
import CaseStudyMeasured from "@/components/case-study/measured";
import DistributionEcosystem from "@/components/solutions/creator-seeding/distribution-ecosystem";
import DistributionOutcomes from "@/components/solutions/creator-seeding/distribution-outcomes";
import StrategicDistribution from "@/components/solutions/creator-seeding/strategic-distribution";
import SolutionsSystem from "@/components/solutions/system";
import Faq from "@/components/home/faq";

const metrics = [
  {
    value: "1,000+",
    label: "Placements Every Month",
    className: "left-[100px] top-[125px]",
  },
  {
    value: "100+",
    label: "Active Creators",
    className: "right-[100px] top-[125px]",
  },
  {
    value: "50M+",
    label: "Monthly Reach",
    className: "left-10 top-[322px]",
  },
  {
    value: "300+",
    label: "Distribution Partners",
    className: "right-10 top-[322px]",
  },
];

export default function CreatorSeedingPage() {
  return (
    <main>
      <section className="relative h-auto min-h-[380px] w-full overflow-hidden bg-[#F2E7F9] pb-10 pt-28 sm:min-h-[440px] sm:pt-32 lg:h-[482px] lg:py-0">
        <div className="absolute left-[-234px] top-[-243px] size-[851px]">
          <div className="absolute inset-[-71.68%]">
            <img
              alt=""
              className="block size-full max-w-none"
              src="/general_assets/hero_bg_ellipse_left.svg"
            />
          </div>
        </div>

        <div className="absolute right-[-387px] top-[-525px] size-[1080px]">
          <div className="absolute inset-[-70.37%]">
            <img
              alt=""
              className="block size-full max-w-none"
              src="/general_assets/hero_bg_ellipse_right.svg"
            />
          </div>
        </div>

        <div className="absolute left-[180px] top-[191px] size-[1080px]">
          <div className="absolute inset-[-75.93%]">
            <img
              alt=""
              className="block size-full max-w-none"
              src="/general_assets/hero_bg_ellipse_bottom.svg"
            />
          </div>
        </div>

        <div className="relative left-1/2 z-10 flex w-[900px] max-w-full -translate-x-1/2 flex-col items-center gap-1 px-5 text-center text-white lg:absolute lg:top-[160px]">
          <h1 className="w-full font-kugile text-[42px] leading-[1.3] sm:text-[50px] lg:text-[57px] lg:leading-[1.4]">
            Great Content Deserves Greater Reach.
          </h1>
          <p className="w-full font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[1.5] sm:text-[16px] sm:leading-[1.6]">
            Our Creator Seeding service strategically places your content across
            trusted communities, media publications, niche pages, entertainment
            platforms, and creator ecosystems helping your content reach
            audiences far beyond your existing followers.
          </p>
        </div>

        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            style={{ animationDelay: `${index * 0.6}s` }}
            className={`absolute hidden h-[120px] w-[200px] animate-float overflow-hidden rounded-2xl border-[0.6px] border-white bg-white/[0.12] shadow-[14px_14px_8px_0px_rgba(0,0,0,0.08)] backdrop-blur-[12px] lg:block ${metric.className}`}
          >
            <div className="absolute left-1/2 top-1/2 flex w-[156px] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center text-white">
              <p className="w-full text-[48px] leading-[1.2]">
                {metric.value}
              </p>
              <p className="w-full font-[family-name:var(--font-inter)] text-[16px] font-normal capitalize leading-[1.4]">
                {metric.label}
              </p>
            </div>
          </div>
        ))}

        <div className="relative z-10 mt-8 grid grid-cols-2 gap-3 px-5 lg:hidden">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-white bg-white/[0.12] p-3 text-center text-white shadow-[8px_8px_8px_rgba(0,0,0,0.08)] backdrop-blur-[12px]"
            >
              <p className="text-[28px] leading-[1.2]">{metric.value}</p>
              <p className="font-[family-name:var(--font-inter)] text-xs capitalize">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      <StrategicDistribution />
      <DistributionEcosystem />
      <SolutionsSystem />
      <DistributionOutcomes />
      <CaseStudyMeasured />
      <CaseStudyCta />
      <Faq />
    </main>
  );
}
