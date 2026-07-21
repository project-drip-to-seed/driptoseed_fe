const NetworkHero = () => {
  return (
    <section
      className="relative w-full h-[456px] overflow-hidden"
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
          The Framework Behind Sustainable Creator Growth
        </p>
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
