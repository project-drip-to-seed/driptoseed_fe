const AboutHero = () => {
  return (
    <section className="relative w-full h-auto min-h-[340px] py-32 overflow-hidden bg-[#F2E7F9] sm:min-h-[400px] lg:h-[456px] lg:py-0">
      {/* Background glow blobs */}
      <div className="absolute left-[-234px] top-[-243px] size-[400px] sm:size-[600px] lg:size-[851px]">
        <div className="absolute inset-[-71.68%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src="/general_assets/hero_bg_ellipse_left.svg"
          />
        </div>
      </div>
      <div className="absolute right-[-387px] top-[-525px] size-[500px] sm:size-[760px] lg:size-[1080px]">
        <div className="absolute inset-[-70.37%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src="/general_assets/hero_bg_ellipse_right.svg"
          />
        </div>
      </div>

      {/* Headline + copy */}
      <div className="relative left-1/2 z-10 w-[900px] max-w-full -translate-x-1/2 px-5 flex flex-col items-center gap-3 text-center text-white capitalize lg:absolute lg:top-[160px] lg:gap-1">
        <h1 className="font-kugile leading-[1.3] text-[32px] sm:text-[42px] lg:text-[57px] lg:leading-[1.4]">
          Building the Future of
          <br />
          Creator Growth.
        </h1>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.6] text-[16px]">
          We&apos;re building a creator growth ecosystem that helps creators
          extend the life of every piece of content through strategic
          clipping, intelligent distribution, and data-driven growth
          strategies.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
