import { Fragment } from "react";

const columns = ["Features", "Traditional Agency", "Creator Growth Platform"];

const rows = [
  {
    feature: "Model",
    agency: "Manual Outreach, One-Off Campaigns",
    platform: "Systematized Distribution Network",
  },
  {
    feature: "Pricing",
    agency: "Retainers, Vague Deliverables",
    platform: "Transparent, Performance-Based",
  },
  {
    feature: "Content",
    agency: "You Handle It Alone",
    platform: "Clipped, Optimized, Distributed For You",
  },
  {
    feature: "Reach",
    agency: "Limited To Their Contact List",
    platform: "300+ Partner Network",
  },
  {
    feature: "Reporting",
    agency: "Monthly PDF",
    platform: "Live Dashboard",
  },
  {
    feature: "Relationship",
    agency: "Client",
    platform: "Growth Partner",
  },
];

const Comparison = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full">
        <h2 className="font-kugile capitalize text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.6] text-black">
          {`We're Not an Agency. `}
          <span className="text-[#780AC1]">{`We're Infrastructure.`}</span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-[#686868]">
          Every long-form video is packed with moments that deserve their own
          audience. Whether it&apos;s a podcast, interview, vlog, webinar, or
          educational session, there are countless highlights that often go
          unnoticed after a single upload.
        </p>
      </div>

      <div className="mt-10 w-full overflow-x-auto rounded-3xl border border-[#D59EFB]">
        <div className="grid grid-cols-3 min-w-[720px]">
          {columns.map((col) => (
            <div
              key={col}
              className="h-[60px] flex items-center px-5 border-l border-[#780AC1]/20 first:border-l-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(213,158,251,0.12) 11%, rgba(120,10,193,0.12) 142.75%)",
              }}
            >
              <p className="font-[family-name:var(--font-inter)] font-medium uppercase text-[20px] leading-[1.2] text-black whitespace-nowrap">
                {col}
              </p>
            </div>
          ))}

          {rows.map((row) => (
            <Fragment key={row.feature}>
              <div
                className="h-[60px] flex items-center px-5 border-t border-l border-[#780AC1]/20 first:border-l-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(213,158,251,0.04) 11%, rgba(120,10,193,0.04) 142.75%)",
                }}
              >
                <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[18px] leading-[1.2] text-black whitespace-nowrap">
                  {row.feature}
                </p>
              </div>
              <div
                className="h-[60px] flex items-center px-5 border-t border-l border-[#780AC1]/20"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(213,158,251,0.04) 11%, rgba(120,10,193,0.04) 142.75%)",
                }}
              >
                <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[18px] leading-[1.2] text-black whitespace-nowrap">
                  {row.agency}
                </p>
              </div>
              <div
                className="h-[60px] flex items-center px-5 border-t border-l border-[#780AC1]/20"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(213,158,251,0.04) 11%, rgba(120,10,193,0.04) 142.75%)",
                }}
              >
                <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[18px] leading-[1.2] text-black whitespace-nowrap">
                  {row.platform}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
