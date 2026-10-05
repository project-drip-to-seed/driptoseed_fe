const CaseStudyMeasured = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="relative max-w-[1280px] mx-auto h-auto min-h-[320px] overflow-hidden rounded-[24px] border border-[#D59EFB] bg-white py-12 lg:h-[561px] lg:py-0">
        {/* Glows */}
        <div className="pointer-events-none absolute right-[-527px] bottom-[-524px] size-[1055px] rounded-full bg-[#780AC1] opacity-60 blur-[305px]" />
        <div className="pointer-events-none absolute left-[-568px] bottom-[-524px] size-[1162px] rounded-full bg-[#780AC1] opacity-60 blur-[305px]" />

        {/* Heading */}
        <div className="relative left-1/2 -translate-x-1/2 lg:absolute lg:top-[59px] w-[900px] max-w-[calc(100%-40px)] flex flex-col gap-1 items-center text-center capitalize">
          <h2 className="font-kugile text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
            {`Every Placement. `}
            <span className="text-[#780AC1]">Every Result. Fully Measured.</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
            Every clip and placement is tracked, so you can see exactly where your content landed and what it earned.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="hidden lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-[-532.75px] lg:flex lg:h-[1092.752px] lg:w-[1128.169px] lg:items-center lg:justify-center">
          <div className="rotate-[16.48deg]">
            <div className="relative h-[867.405px] w-[919.862px] shadow-[-20px_24px_24px_0px_rgba(0,0,0,0.25)] rounded-[16px]">
              <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                <img
                  alt=""
                  className="absolute h-[129.59%] left-[-11.71%] max-w-none top-[-13.61%] w-[122.2%]"
                  src="/media/dashboard-mockup-v1.webp"
                  loading="lazy"
                  decoding="async"
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
