const CaseStudyMeetCreator = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 items-center lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-[14px] items-start w-full lg:max-w-[760px]">
          <h2 className="font-kugile capitalize text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
            {`Meet the `}
            <span className="text-[#780AC1]">creator</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
            Our client is a business educator creating practical content around
            entrepreneurship, startups, productivity, and personal finance.
            Their videos consistently delivered valuable insights, but despite
            maintaining a regular publishing schedule, growth had plateaued. The
            content itself wasn&apos;t the issue. The challenge was that every
            upload reached only a small percentage of followers before gradually
            disappearing from platform feeds. Although the creator had built a
            loyal community, they struggled to attract new audiences beyond
            their existing network.
          </p>
        </div>

        {/* Photo stack */}
        <div className="relative w-full max-w-[400px] h-[400px] shrink-0 sm:h-[440px] lg:h-[480px] lg:-mt-[160px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rotate-[-7.19deg]">
              <div className="w-[340px] h-[440px] rounded-[24px] border-2 border-[#780AC1]" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rotate-[7.19deg]">
              <div className="w-[340px] h-[440px] rounded-[24px] border-2 border-[#780AC1]" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[340px] h-[440px] rounded-[24px] overflow-hidden">
              <img
                alt="Creator"
                className="w-full h-full object-cover"
                src="/resources_assets/creator_photo.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyMeetCreator;
