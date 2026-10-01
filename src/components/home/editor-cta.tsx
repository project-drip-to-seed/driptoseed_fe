import EditorPayoutVisual from "./editor-payout-visual";

const tags = [
  "Remote",
  "Flexible",
  "Portfolio",
  "Performance-based earnings",
  "Work with real creators",
];

const TagPill = ({ label }: { label: string }) => (
  <span className="bg-[#EED7FF66] text-[#780AC1] font-[family-name:var(--font-inter)] font-normal capitalize text-xs leading-[1.2] px-3 py-2 rounded-full whitespace-nowrap">
    {label}
  </span>
);

const EditorCta = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="flex flex-col items-stretch justify-between gap-10 p-6 sm:p-10 w-full rounded-3xl border border-[#D59EFB] bg-white lg:flex-row lg:items-center">
        {/* Left content */}
        <div className="flex flex-col gap-5 w-full flex-1 min-w-0 lg:max-w-[622px]">
          <div className="flex items-baseline gap-3 flex-wrap">
            <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.2] text-[56px] sm:text-[72px] lg:text-[88px] text-[#780AC1]">
              ₹175
            </p>
            <p className="font-[family-name:var(--font-inter)] font-medium capitalize leading-[1.4] text-[20px] text-[#780AC1]">
              for every clip that reaches 200K+ views
            </p>
          </div>

          <div className="flex flex-col gap-3 items-start">
            <p className="font-[family-name:var(--font-inter)] font-medium capitalize leading-[1.2] text-[24px] text-black">
              Turn Your Editing Skills Into Real Earnings
            </p>
            <p className="font-[family-name:var(--font-inter)] font-normal capitalize leading-[1.6] text-[16px] text-[#686868]">
              No pitching clients. No chasing invoices. Just edit, post on your
              own channel, and get paid per performance. Join our clipping program and work
              with creators while earning rewards for high-performing edits.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            {tags.map((tag) => (
              <TagPill key={tag} label={tag} />
            ))}
          </div>

          <a
            href="/apply/editor"
            className="bg-[#780AC1] capitalize font-[family-name:var(--font-inter)] font-normal leading-[1.2] px-6 py-3 rounded-full text-[16px] text-white w-fit whitespace-nowrap"
          >
            Apply as Editor
          </a>
        </div>

        {/* Right panel */}
        <div
          className="relative shrink-0 w-full lg:w-[540px] max-w-full rounded-3xl overflow-hidden sm:h-[335px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(213,158,251,0.08) 11%, rgba(120,10,193,0.08) 142.75%)",
          }}
        >
          <div className="relative sm:absolute sm:left-0 sm:top-0 sm:h-[240px] sm:w-full">
            <EditorPayoutVisual />
          </div>

          <div className="flex items-center justify-between gap-3 px-5 py-4 sm:block sm:px-0 sm:py-0">
            <div className="flex flex-col items-start sm:absolute sm:left-5 sm:top-[260px]">
              <p className="font-[family-name:var(--font-inter)] leading-[1.2] text-[28px] sm:text-[32px] text-black">
                300+
              </p>
              <p className="font-[family-name:var(--font-inter)] capitalize leading-[1.4] text-[12px] text-[#686868]">
                Distribution Partners
              </p>
            </div>

            <div className="bg-[#780AC1] capitalize font-[family-name:var(--font-inter)] font-normal leading-[1.2] px-4 py-2 rounded-full text-[13px] text-white whitespace-nowrap sm:absolute sm:right-5 sm:bottom-[26px] sm:px-6 sm:py-3 sm:text-[16px]">
              ✓ ₹175 Paid
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorCta;
