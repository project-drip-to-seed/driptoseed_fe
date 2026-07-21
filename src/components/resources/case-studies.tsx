import Link from "next/link";
import {
  caseStudies,
  caseStudyCategories,
} from "@/lib/case-studies";

const ResourcesCaseStudies = () => {
  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 items-start">
        {/* Heading + tabs */}
        <div className="flex flex-col gap-5 items-start w-full">
          <div className="flex flex-col gap-1 items-start w-[900px] max-w-full capitalize">
            <h2 className="font-kugile text-[36px] leading-[1.4] text-black">
              {`Explore Real `}
              <span className="text-[#780AC1]">Creator Transformations.</span>
            </h2>
            <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
              Every day, creators dedicate hours to researching ideas, writing
              scripts, recording videos, editing footage, and publishing
              content. Yet despite this effort, most content receives only a
              brief window of visibility before disappearing from feeds and
              recommendations.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            {caseStudyCategories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`rounded-full px-6 py-2 font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[1.2] capitalize whitespace-nowrap ${
                  index === 0
                    ? "bg-[#780AC1] text-white"
                    : "bg-[rgba(238,215,255,0.4)] text-[#780AC1]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Case study grid */}
        <div className="grid grid-cols-2 gap-5 w-full">
          {caseStudies.map((study) => (
            <div
              key={study.slug}
              className="relative h-[260px] overflow-hidden rounded-[24px] border border-[#D59EFB] bg-white"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute bottom-[-256px] right-[-236px] size-[471px] rounded-full bg-[radial-gradient(circle,rgba(213,158,251,0.5)_0%,rgba(213,158,251,0)_70%)]" />

              {/* Card image */}
              <div className="absolute bottom-[-21px] right-[-24px] h-[260px] w-[287px]">
                <img
                  alt=""
                  className="block h-full w-full object-contain object-bottom"
                  src="/resources_assets/case_study_card.png"
                />
              </div>

              {/* Text */}
              <div className="absolute left-[19px] top-[19px] w-[383px] flex flex-col gap-[6px] items-start capitalize">
                <div className="flex flex-col gap-[6px] items-start w-full leading-[1.4]">
                  <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] text-black w-full">
                    {study.title}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] text-[#780AC1] w-full">
                    {study.creator}
                  </p>
                </div>
                <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#404040] w-full">
                  {study.excerpt}
                </p>
              </div>

              {/* Button */}
              <Link
                href={`/resources/${study.slug}`}
                className="absolute bottom-[19px] left-[19px] flex items-center justify-center rounded-full px-6 py-3 font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.2] text-white capitalize whitespace-nowrap"
                style={{
                  backgroundImage:
                    "linear-gradient(123.47deg, #D59EFB 0%, #780AC1 65.556%)",
                }}
              >
                View full case study
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesCaseStudies;
