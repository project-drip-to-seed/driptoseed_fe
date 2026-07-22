const paragraph =
  "We exist to close the gap between making something worth watching and making sure it's watched. Every service we build clipping, seeding, strategy points at the same outcome: content that keeps working long after it's published.";

const approachParagraph =
  "We're building toward a world where content doesn't move through one channel at a time it moves through a living network, matched automatically to the communities most likely to care.";

const CaseStudyChallengeApproach = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 items-start">
        <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full capitalize">
          <h2 className="font-kugile text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
            {`Great Content Wasn't`}
            <span className="text-[#780AC1]">{` Reaching New People`}</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
            Every day, creators invest countless hours researching ideas,
            writing scripts, filming videos, editing content, and publishing
            across multiple platforms.
          </p>
        </div>

        <div className="flex flex-col gap-5 items-stretch w-full sm:flex-row">
          <div className="flex-1 min-w-0 rounded-[24px] bg-[#FBF5FF] p-5">
            <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black capitalize">
              The Challenge
            </p>
            <p className="mt-2 font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868] capitalize">
              {paragraph} {paragraph}
            </p>
          </div>
          <div className="flex-1 min-w-0 rounded-[24px] bg-[#EED7FF] p-5">
            <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black capitalize">
              Our Approach
            </p>
            <p className="mt-2 font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868] capitalize">
              {approachParagraph} {approachParagraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyChallengeApproach;
