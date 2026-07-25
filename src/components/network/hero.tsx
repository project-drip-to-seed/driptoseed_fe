const NetworkHero = () => {
  return (
    <section className="relative w-full h-auto min-h-[380px] pb-16 pt-28 overflow-hidden bg-[#F2E7F9] sm:min-h-[420px] sm:pt-32 lg:h-[456px] lg:py-0">
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
      <div className="absolute left-[180px] top-[191px] hidden size-[1080px] lg:block">
        <div className="absolute inset-[-75.93%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src="/general_assets/hero_bg_ellipse_bottom.svg"
          />
        </div>
      </div>

      {/* Headline + copy */}
      <div className="relative left-1/2 z-10 -translate-x-1/2 w-[900px] max-w-[calc(100%-40px)] flex flex-col items-center gap-3 text-center text-white capitalize lg:absolute lg:bottom-20 lg:gap-1">
        <h1 className="font-kugile leading-[1.3] text-[30px] sm:text-[40px] lg:text-[57px] lg:leading-[1.4] w-full">
          The Framework Behind Sustainable Creator Growth
        </h1>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.6] text-[16px] w-full">
          We don&apos;t rely on luck or algorithms. Our proprietary Creator
          Growth Framework transforms every piece of content into a scalable
          growth opportunity through clipping, strategic distribution, and
          performance-driven optimization.
        </p>
      </div>
    </section>
  );
};

export default NetworkHero;
