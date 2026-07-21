export default function DistributionStrategyHero() {
  return (
    <section className="relative h-[456px] w-full overflow-hidden bg-[#F2E7F9]">
      <div className="absolute left-[-234px] top-[-243px] size-[851px]">
        <div className="absolute inset-[-71.68%]">
          <img
            alt=""
            aria-hidden="true"
            className="block size-full max-w-none"
            src="/general_assets/hero_bg_ellipse_left.svg"
          />
        </div>
      </div>

      <div className="absolute right-[-387px] top-[-525px] size-[1080px]">
        <div className="absolute inset-[-70.37%]">
          <img
            alt=""
            aria-hidden="true"
            className="block size-full max-w-none"
            src="/general_assets/hero_bg_ellipse_right.svg"
          />
        </div>
      </div>

      <div className="absolute left-[180px] top-[191px] size-[1080px]">
        <div className="absolute inset-[-75.93%]">
          <img
            alt=""
            aria-hidden="true"
            className="block size-full max-w-none"
            src="/general_assets/hero_bg_ellipse_bottom.svg"
          />
        </div>
      </div>

      <div className="absolute left-1/2 top-[160px] z-10 flex w-[900px] max-w-[calc(100%-40px)] -translate-x-1/2 flex-col items-center gap-1 text-center text-white">
        <h1 className="w-full font-kugile text-[42px] leading-[1.3] sm:text-[50px] lg:text-[57px] lg:leading-[1.4]">
          Every Creator Needs a Distribution Strategy.
        </h1>
        <p className="w-full font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[1.5] sm:text-[16px] sm:leading-[1.6]">
          Creating exceptional content is only half the equation. The other
          half is ensuring that every piece of content reaches the right
          audience, on the right platform, at the right time.
        </p>
      </div>
    </section>
  );
}
