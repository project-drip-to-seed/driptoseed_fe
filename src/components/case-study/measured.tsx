const CaseStudyMeasured = () => {
  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="relative max-w-[1280px] mx-auto h-[561px] overflow-hidden rounded-[24px] border border-[#D59EFB] bg-white">
        {/* Glows */}
        <div className="pointer-events-none absolute right-[-492px] bottom-[-476px] size-[983px] rounded-full bg-[radial-gradient(circle,rgba(213,158,251,0.4)_0%,rgba(213,158,251,0)_70%)]" />
        <div className="pointer-events-none absolute left-[-621px] bottom-[-476px] size-[983px] rounded-full bg-[radial-gradient(circle,rgba(213,158,251,0.4)_0%,rgba(213,158,251,0)_70%)]" />

        {/* Heading */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[59px] w-[900px] max-w-[calc(100%-40px)] flex flex-col gap-1 items-center text-center capitalize">
          <h2 className="font-kugile text-[36px] leading-[1.4] text-black">
            {`Every Placement. `}
            <span className="text-[#780AC1]">Every Result. Fully Measured.</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
            Every day, creators invest countless hours researching ideas,
            writing scripts, filming videos, editing content, and publishing
            across multiple platforms.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-532.75px] flex h-[1092.752px] w-[1128.169px] items-center justify-center">
          <div className="rotate-[16.48deg]">
            <div className="relative h-[867.405px] w-[919.862px] shadow-[-20px_24px_24px_0px_rgba(0,0,0,0.25)] rounded-[16px]">
              <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                <img
                  alt=""
                  className="absolute h-[129.59%] left-[-11.71%] max-w-none top-[-13.61%] w-[122.2%]"
                  src="/general_assets/dashboard_mockup.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyMeasured;
