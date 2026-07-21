const TrackGrowth = () => {
  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="relative h-[400px] w-full rounded-[44px] border border-[#D59EFB] bg-white overflow-hidden">
        {/* purple glow bleeding in from the bottom-right */}
        <div
          aria-hidden="true"
          className="absolute -translate-y-1/2 right-[-492px] top-[calc(50%+397.5px)] size-[983px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(213,158,251,0.9) 0%, rgba(213,158,251,0.55) 45%, rgba(213,158,251,0) 72%)",
          }}
        />

        {/* dashboard mockup (pre-tilted, transparent) bleeding off the right edge */}
        <img
          alt="Growth tracking dashboard preview"
          className="pointer-events-none absolute top-1/2 right-[-140px] -translate-y-1/2 w-[860px] max-w-[68%] object-contain"
          src="/general_assets/dashboard_mockup.png"
        />

        {/* copy */}
        <div className="relative z-10 flex h-full max-w-[515px] flex-col items-start justify-center gap-8 px-10">
          <div className="flex flex-col gap-1 items-start capitalize">
            <p className="font-kugile text-[36px] leading-[1.4]">
              <span className="text-black">{`Track Every `}</span>
              <span className="text-[#780AC1]">Stage of Your Growth.</span>
            </p>
            <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868] lowercase">
              One dashboard for every metric that matters updated as your
              content moves through the engine.
            </p>
          </div>

          <button
            type="button"
            className="capitalize font-[family-name:var(--font-inter)] font-normal leading-[1.2] px-6 py-3 rounded-[30px] text-[16px] text-white whitespace-nowrap"
            style={{
              backgroundImage:
                "linear-gradient(121deg, #D59EFB 0%, #780AC1 65.556%)",
            }}
          >
            Track your growth
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrackGrowth;
