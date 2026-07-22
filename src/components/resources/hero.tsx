const ResourcesHero = () => {
  return (
    <section className="relative w-full h-[482px] overflow-hidden bg-[#F2E7F9]">
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
      {/* Headline + copy */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-20 w-[900px] max-w-[calc(100%-40px)] flex flex-col items-center gap-1 text-center text-white capitalize">
        <h1 className="font-kugile leading-[1.4] text-[57px] w-full">
          Real Creators. Real Growth. Real Results.
        </h1>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.6] text-[16px] w-full">
          Every creator&apos;s journey is unique, but sustainable growth follows
          a proven system. Explore how our Creator Growth Framework has helped
          creators increase reach, maximize content value, and build stronger
          audiences through clipping, strategic distribution, and data-driven
          optimization.
        </p>
      </div>
    </section>
  );
};

export default ResourcesHero;
