"use client";

import { useState } from "react";
import Link from "next/link";
import {
  caseStudies,
  caseStudyCategories,
} from "@/lib/case-studies";

const ALL = "All";
const tabs = [ALL, ...caseStudyCategories];

const ResourcesCaseStudies = () => {
  const [active, setActive] = useState(ALL);
  const visible =
    active === ALL
      ? caseStudies
      : caseStudies.filter((study) => study.category === active);

  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 items-start">
        {/* Heading + tabs */}
        <div className="flex flex-col gap-5 items-start w-full">
          <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full capitalize">
            <h2 className="font-kugile text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
              {`Explore Real `}
              <span className="text-[#780AC1]">Creator Transformations.</span>
            </h2>
            <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
              Browse how creators in different niches used clipping, seeding and distribution to reach audiences beyond their followers.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter case studies by niche"
            className="flex flex-wrap gap-3 items-center"
          >
            {tabs.map((category) => {
              const isActive = category === active;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(category)}
                  className={`rounded-full px-6 py-2 font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[1.2] capitalize whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-[#780AC1] text-white"
                      : "bg-[rgba(238,215,255,0.4)] text-[#780AC1] hover:bg-[rgba(238,215,255,0.8)]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Case study grid */}
        <div className="grid grid-cols-1 gap-5 w-full lg:grid-cols-2">
          {visible.map((study) => (
            <div
              key={study.slug}
              className="relative min-h-[320px] overflow-hidden rounded-[24px] border border-[#D59EFB] bg-white lg:h-[260px]"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute bottom-[-256px] right-[-236px] size-[471px] rounded-full bg-[radial-gradient(circle,rgba(213,158,251,0.5)_0%,rgba(213,158,251,0)_70%)]" />

              {/* Card image */}
              <div className="absolute bottom-[-10px] right-[-16px] h-[180px] w-[200px] sm:h-[220px] sm:w-[243px] lg:bottom-[-21px] lg:right-[-24px] lg:h-[260px] lg:w-[287px]">
                <img
                  alt=""
                  className="block h-full w-full object-contain object-bottom"
                  src="/resources_assets/case_study_card.png"
                />
              </div>

              {/* Text */}
              <div className="absolute left-[19px] top-[19px] w-[calc(100%-38px)] flex flex-col gap-[6px] items-start capitalize lg:w-[383px]">
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
          {visible.length === 0 && (
            <p className="col-span-full rounded-[24px] border border-dashed border-[#D59EFB] px-6 py-12 text-center font-[family-name:var(--font-inter)] text-[16px] leading-[1.6] text-[#686868]">
              {`We're preparing a ${active} case study. Check back soon, or talk to us about your niche.`}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResourcesCaseStudies;
