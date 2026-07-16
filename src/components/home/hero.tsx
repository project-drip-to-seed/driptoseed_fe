const Hero = () => {
  return (
    <section className="relative w-full h-[700px] overflow-hidden bg-[#F2E7F9]">
      {/* Background glow blobs */}
      <div className="absolute left-[-234px] top-[-243px] size-[851px]">
        <div className="absolute inset-[-71.68%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src="/general_assets/hero_bg_ellipse_left.svg"
          />
        </div>
      </div>
      <div className="absolute right-[-387px] top-[-525px] size-[1080px]">
        <div className="absolute inset-[-70.37%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src="/general_assets/hero_bg_ellipse_right.svg"
          />
        </div>
      </div>

      {/* Headline, copy, CTAs */}
      <div className="absolute left-20 top-[141px] w-[734px] flex flex-col gap-8 items-start">
        <div className="flex flex-col gap-1 items-start text-white w-full capitalize">
          <p className="font-kugile leading-[1.4] text-[57px] w-full">
            Great Content Deserves More Than Just Your Followers.
          </p>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.6] text-[16px] w-[654px]">
            We help creators grow beyond algorithms through strategic content
            seeding, clipping, and distribution. Every piece of content gets
            multiple opportunities to be discovered by the right audience.
          </p>
        </div>

        <div className="flex gap-5 items-center">
          <a
            href="/apply-creator"
            className="bg-white capitalize font-[family-name:var(--font-inter)] font-normal leading-[1.2] px-6 py-3 rounded-full text-[#780AC1] text-[16px] whitespace-nowrap"
          >
            Apply as creator
          </a>
          <a
            href="/become-editor"
            className="border border-white capitalize font-[family-name:var(--font-inter)] font-normal leading-[1.2] px-6 py-3 rounded-full text-white text-[16px] whitespace-nowrap"
          >
            Become an Editor
          </a>
        </div>
      </div>

      {/* Trusted-by avatars */}
      <div className="absolute bottom-10 left-20 flex gap-3 items-center">
        <img
          alt="Avatars of creators using Drip"
          src="/general_assets/people_image_hero_sec.svg"
          width={150}
          height={68}
        />
        <p className="capitalize font-[family-name:var(--font-inter)] font-normal leading-[1.4] text-[#780AC1] text-[16px] whitespace-nowrap">
          Trusted by 100+ growing creators
        </p>
      </div>

      {/* Product mockup */}
      <div className="absolute bottom-0 right-[76px] w-[615px] h-[575px]">
        <img
          alt="Drip dashboard product preview"
          src="/general_assets/hero_section_image.svg"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
