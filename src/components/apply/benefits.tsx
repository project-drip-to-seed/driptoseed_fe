import AsteriskIcon from "@/components/shared/asterisk-icon";

type Step = { title: string; description: string };

type ApplyBenefitsProps = {
  heading: string;
  highlight: string;
  description: string;
  perks: string[];
  steps: Step[];
};

const ApplyBenefits = ({
  heading,
  highlight,
  description,
  perks,
  steps,
}: ApplyBenefitsProps) => {
  return (
    <div className="flex w-full flex-col gap-10 items-start lg:w-[560px] lg:max-w-full">
      <div className="flex flex-col gap-1 items-start capitalize">
        <h2 className="font-kugile text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
          {heading}
          <span className="text-[#780AC1]">{` ${highlight}`}</span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-3 items-start w-full">
        {perks.map((perk) => (
          <div key={perk} className="flex gap-3 items-center w-full">
            <span className="flex shrink-0 items-center justify-center">
              <AsteriskIcon width={20} height={21} color="#780AC1" />
            </span>
            <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.4] text-[#404040] capitalize">
              {perk}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1 items-start w-full rounded-[24px] border border-[#D59EFB] bg-[#FAF3FF] p-5 sm:p-6">
        <p className="font-[family-name:var(--font-inter)] font-medium text-[16px] leading-[1.2] text-[#780AC1] uppercase tracking-[0.06em] mb-3">
          How it works
        </p>
        <div className="flex w-full gap-4 items-start">
          <div className="flex flex-col items-center shrink-0 pt-1">
            {steps.map((step, i) => (
              <div key={step.title} className="flex flex-col items-center">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#780AC1] font-[family-name:var(--font-inter)] text-[12px] font-medium text-white">
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span
                    className="w-px grow bg-[#D59EFB]"
                    style={{ minHeight: "36px" }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 items-start flex-1 min-w-0 pt-0.5">
            {steps.map((step) => (
              <div key={step.title} className="flex flex-col gap-1 items-start w-full">
                <p className="font-[family-name:var(--font-inter)] font-medium text-[16px] leading-[1.4] text-black capitalize">
                  {step.title}
                </p>
                <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[1.5] text-[#686868]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyBenefits;
