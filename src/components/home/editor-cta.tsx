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
    <section className="w-full py-20 px-20 bg-white">
      <div className="flex items-center justify-between gap-10 p-10 w-full rounded-3xl border border-[#D59EFB] bg-white">
        {/* Left content */}
        <div className="flex flex-col gap-5 flex-1 min-w-0 max-w-[622px]">
          <div className="flex items-baseline gap-3 flex-wrap">
            <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.2] text-[88px] text-[#780AC1]">
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
              No pitching clients. No chasing invoices. Just edit, submit, and
              get paid per performance. Join our clipping program and work
              with creators while earning rewards for high-performing edits.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            {tags.map((tag) => (
              <TagPill key={tag} label={tag} />
            ))}
          </div>

          <a
            href="/apply-editor"
            className="bg-[#780AC1] capitalize font-[family-name:var(--font-inter)] font-normal leading-[1.2] px-6 py-3 rounded-full text-[16px] text-white w-fit whitespace-nowrap"
          >
            Apply as Editor
          </a>
        </div>

        {/* Right panel */}
        <div
          className="relative shrink-0 w-[540px] max-w-full h-[335px] rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(213,158,251,0.08) 11%, rgba(120,10,193,0.08) 142.75%)",
          }}
        >
          <img
            alt=""
            src="/general_assets/editor_play_icon.svg"
            className="absolute left-0 top-0 w-full h-[240px] block"
          />

          <div className="absolute left-5 top-[260px] flex flex-col items-start">
            <p className="font-[family-name:var(--font-inter)] leading-[1.2] text-[32px] text-black">
              300+
            </p>
            <p className="font-[family-name:var(--font-inter)] capitalize leading-[1.4] text-[12px] text-[#686868]">
              Distribution Partners
            </p>
          </div>

          <div className="absolute right-5 bottom-[26px] bg-[#780AC1] capitalize font-[family-name:var(--font-inter)] font-normal leading-[1.2] px-6 py-3 rounded-full text-[16px] text-white whitespace-nowrap">
            ✓ ₹175 Paid
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorCta;
