const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F2E7F9] pb-10 pt-28 sm:pt-32 lg:h-[700px] lg:pb-0 lg:pt-0">
      {/* Background glow blobs */}
      <div className="absolute left-[-234px] top-[-243px] size-[400px] sm:size-[600px] lg:size-[851px]">
        <div className="absolute inset-[-71.68%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src="/media/bg/ellipse-left-v1.webp"
          />
        </div>
      </div>
      <div className="absolute right-[-387px] top-[-525px] size-[500px] sm:size-[760px] lg:size-[1080px]">
        <div className="absolute inset-[-70.37%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src="/media/bg/ellipse-right-v1.webp"
          />
        </div>
      </div>

      {/* Headline, copy, CTAs */}
      <div className="relative flex w-full flex-col items-start gap-8 px-5 sm:px-8 md:px-12 lg:absolute lg:left-20 lg:top-[141px] lg:w-[734px] lg:px-0">
        <div className="flex flex-col gap-3 items-start text-white w-full capitalize lg:gap-1">
          <h1 className="font-kugile leading-[1.3] text-[32px] sm:text-[42px] md:text-[50px] lg:text-[57px] lg:leading-[1.4] w-full">
            Great Content Deserves More Than Just Your Followers.
          </h1>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.6] text-[16px] w-full lg:w-[654px]">
            We help creators grow beyond algorithms through strategic content
            seeding, clipping, and distribution. Every piece of content gets
            multiple opportunities to be discovered by the right audience.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 items-center sm:gap-5">
          <a
            href="/apply/creator"
            className="bg-white capitalize font-[family-name:var(--font-inter)] font-normal leading-[1.2] px-6 py-3 rounded-full text-[#780AC1] text-[16px] whitespace-nowrap"
          >
            Apply as creator
          </a>
          <a
            href="/apply/editor"
            className="border border-white capitalize font-[family-name:var(--font-inter)] font-normal leading-[1.2] px-6 py-3 rounded-full text-white text-[16px] whitespace-nowrap"
          >
            Become an Editor
          </a>
        </div>
      </div>

      {/* Trusted-by avatars */}
      <div className="relative mt-10 flex flex-wrap items-center gap-3 px-5 sm:px-8 md:px-12 lg:absolute lg:bottom-10 lg:left-20 lg:mt-0 lg:px-0">
        <img
          alt="Avatars of creators using Drip"
          src="/general_assets/people_image_hero_sec.svg"
          width={150}
          height={68}
          className="w-[120px] h-auto sm:w-[150px]"
        />
        <p className="capitalize font-[family-name:var(--font-inter)] font-normal leading-[1.4] text-[#780AC1] text-[16px] whitespace-nowrap">
          Trusted by 100+ growing creators
        </p>
      </div>

      {/* Product mockup */}
      <div className="relative mt-10 w-full px-5 sm:px-8 md:px-12 lg:absolute lg:bottom-0 lg:right-[76px] lg:mt-0 lg:w-[615px] lg:h-[575px] lg:px-0">
        <img
          alt="Drip dashboard product preview"
          src="/general_assets/hero_section_image.svg"
          className="w-full h-auto lg:h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
