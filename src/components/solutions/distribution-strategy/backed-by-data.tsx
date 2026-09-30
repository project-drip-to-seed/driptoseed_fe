import Link from "next/link";

const stats = [
  { value: "300+", label: "Distribution Partners" },
  { value: "50M+", label: "Monthly reach" },
  { value: "1,000+", label: "Placements monthly" },
];

const BackedByData = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F2E7F9] py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20">
      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-10 lg:flex-row">
        <div className="flex w-full max-w-[628px] flex-col gap-10 items-start shrink-0">
          <div className="flex flex-col gap-1 items-start capitalize">
            <h2 className="font-kugile text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
              Every Decision Is
              <span className="text-[#780AC1]">{` Backed by Data.`}</span>
            </h2>
            <div className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
              <p>
                Effective distribution isn&apos;t based on assumptions. We
                continuously measure performance across every platform and
                placement to understand what&apos;s working, identify new
                opportunities, and improve future campaigns.
              </p>
              <p className="mt-4">
                Transparent reporting helps creators make smarter decisions
                with every upload.
              </p>
            </div>
          </div>

          <div className="flex w-full items-center gap-6 overflow-x-auto sm:gap-10">
            {stats.map((stat, i) => (
              <div key={i} className="flex shrink-0 items-center gap-6 sm:gap-10">
                {i > 0 && <div className="h-[100px] w-px bg-[#780AC1]/30 sm:h-[120px]" />}
                <div className="flex w-[130px] shrink-0 flex-col items-center gap-1 text-center capitalize sm:w-[156px]">
                  <p className="font-[family-name:var(--font-inter)] font-normal text-[48px] leading-[1.2] text-[#780AC1]">
                    {stat.value}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.4] text-[#780AC1]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="flex items-center justify-center rounded-[30px] px-6 py-3 font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.2] text-white capitalize whitespace-nowrap"
            style={{
              backgroundImage:
                "linear-gradient(122deg, #D59EFB 0%, #780AC1 66.624%)",
            }}
          >
            Track Dashboard
          </Link>
        </div>

        <div className="hidden lg:flex items-center justify-center shrink-0 w-[500px]">
          <div className="rotate-[-6.55deg]">
            <img
              alt="Growth tracking dashboard preview"
              src="/general_assets/dashboard_mockup.png"
              className="w-[520px] max-w-none rounded-2xl shadow-[-20px_24px_24px_0px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackedByData;
