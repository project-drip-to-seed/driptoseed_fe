const Distribution = () => {
  return (
    <section
      className="relative w-full h-[600px] overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(117.56922283215188deg, #D59EFB 20%, #780AC1 100%)",
      }}
    >
      <div className="absolute left-20 top-20 w-[540px] max-w-[calc(100%-160px)] flex flex-col gap-1 items-start">
        <div className="font-kugile capitalize leading-[1.6] text-[36px] w-full">
          <p className="text-black">Your Content.</p>
          <p className="text-[#780AC1]">Everywhere It Matters.</p>
        </div>

        <div className="flex flex-col gap-4 font-[family-name:var(--font-inter)] font-normal capitalize leading-[1.6] text-[16px] text-white w-full">
          <p>
            Creating great content is only half the equation. The real
            opportunity lies in getting that content in front of the right
            people.
          </p>
          <p>
            Our growing distribution ecosystem connects creators with
            carefully selected communities, media platforms, niche pages, and
            partner networks where their audience is already active. Instead
            of relying solely on platform algorithms, we strategically place
            content where it&apos;s most likely to be discovered, shared, and
            remembered.
          </p>
          <p>
            Every placement is intentional. Every distribution is backed by
            strategy.
          </p>
        </div>
      </div>

      <div className="absolute right-20 top-[53px] w-[668px] h-[475px] max-w-[calc(100%-160px)] bg-white flex items-center justify-center overflow-hidden">
        <p className="font-kugile capitalize leading-[1.6] text-[96px] text-red-600 whitespace-nowrap">
          Graphic
        </p>
      </div>
    </section>
  );
};

export default Distribution;
