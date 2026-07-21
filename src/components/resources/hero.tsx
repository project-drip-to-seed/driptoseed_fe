const ResourcesHero = () => {
  return (
    <section
      className="relative w-full h-[482px] overflow-hidden"
      style={{
        background: [
          "radial-gradient(80% 70% at 50% 16%, rgba(232,196,250,0.55) 0%, rgba(232,196,250,0) 55%)",
          "radial-gradient(95% 120% at 14% 62%, #7A12C1 0%, rgba(122,18,193,0) 60%)",
          "radial-gradient(95% 120% at 88% 6%, #8A28CC 0%, rgba(138,40,204,0) 55%)",
          "linear-gradient(180deg, #9A45D3 0%, #780AC1 55%, #6C0BB2 100%)",
        ].join(", "),
      }}
    >
      {/* Headline + copy */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-20 w-[900px] max-w-[calc(100%-40px)] flex flex-col items-center gap-1 text-center text-white capitalize">
        <p className="font-kugile leading-[1.4] text-[57px] w-full">
          Real Creators. Real Growth. Real Results.
        </p>
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
