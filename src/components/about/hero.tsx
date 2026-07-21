const AboutHero = () => {
  return (
    <section className="relative w-full h-[456px] overflow-hidden bg-[#F2E7F9]">
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

      {/* Headline + copy */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[160px] w-[900px] max-w-full px-5 flex flex-col items-center gap-1 text-center text-white capitalize">
        <h1 className="font-kugile leading-[1.4] text-[57px]">
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
