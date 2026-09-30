import DistributionGraphic from "./distribution-graphic";

const Distribution = () => {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-center gap-10 px-5 py-12 sm:px-8 md:px-12 lg:min-h-[600px] lg:flex-row lg:px-20 lg:py-20"
      style={{
        backgroundImage:
          "linear-gradient(117.56922283215188deg, #D59EFB 20%, #780AC1 100%)",
      }}
    >
      <div className="flex flex-col gap-1 items-start w-full flex-1 min-w-0 lg:max-w-[540px]">
        <h2 className="font-kugile capitalize leading-[1.3] lg:leading-[1.6] text-[26px] sm:text-[30px] lg:text-[36px] w-full">
          <span className="text-black">Your Content.</span>
          <br />
          <span className="text-[#780AC1]">Everywhere It Matters.</span>
        </h2>

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

      <div className="w-full flex-1 min-w-0 aspect-[600/520] rounded-3xl bg-white overflow-hidden shadow-[0_24px_60px_rgba(55,7,87,0.25)] lg:aspect-auto lg:max-w-[668px] lg:h-[475px]">
        <DistributionGraphic />
      </div>
    </section>
  );
};

export default Distribution;
