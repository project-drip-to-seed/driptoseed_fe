const CaseStudyMeetCreator = ({
  meet,
  category,
  creator,
}: {
  meet: string;
  category: string;
  creator: string;
}) => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 items-center lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-[14px] items-start w-full lg:max-w-[760px]">
          <h2 className="font-kugile capitalize text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
            {`Meet the `}
            <span className="text-[#780AC1]">creator</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
            {meet}
          </p>
        </div>

        {/* Framed niche illustration stack */}
        <div className="relative w-full max-w-[400px] h-[400px] shrink-0 sm:h-[440px] lg:h-[480px] lg:-mt-[160px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[min(340px,calc(100%-60px))] rotate-[-7.19deg]">
              <div className="aspect-[340/440] w-full rounded-[24px] border-2 border-[#780AC1]" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[min(340px,calc(100%-60px))] rotate-[7.19deg]">
              <div className="aspect-[340/440] w-full rounded-[24px] border-2 border-[#780AC1]" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex aspect-[340/440] w-[min(340px,calc(100%-60px))] items-center justify-center overflow-hidden rounded-[24px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(213,158,251,0.22) 11%, rgba(120,10,193,0.16) 142.75%)",
              }}
            >
              <img
                alt={`${creator} illustration`}
                className="h-full w-full object-cover"
                src={`/niche_images/${category.toLowerCase()}.svg`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyMeetCreator;
