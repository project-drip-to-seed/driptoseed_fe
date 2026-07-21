const TrackGrowth = () => {
  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="relative h-[400px] w-full rounded-[44px] border border-[#D59EFB] bg-white overflow-hidden">
        {/* purple glow bleeding in from the bottom-right */}
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          src="/solutions/track_growth_glow.png"
        />

        {/* dashboard mockup (pre-tilted, with shadow) anchored bottom-right */}
        <img
          alt="Growth tracking dashboard preview"
          className="pointer-events-none absolute bottom-0 right-0 h-full w-auto max-w-none object-contain object-right-bottom"
          src="/solutions/track_growth_mockup.png"
        />

        {/* copy */}
        <div className="relative z-10 flex h-full max-w-[515px] flex-col items-start justify-center gap-8 px-10">
          <div className="flex flex-col gap-1 items-start capitalize">
            <h2 className="font-kugile text-[36px] leading-[1.4]">
              <span className="text-black">{`Track Every `}</span>
              <span className="text-[#780AC1]">Stage of Your Growth.</span>
            </h2>
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
