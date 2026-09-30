// Right-hand visual of the "Turn Your Editing Skills Into Real Earnings" card.
// Only restates what the section already promises: edit, submit, ₹175 per clip that reaches 200K+ views.

const steps = [
  { title: "Edit & submit", note: "Turn a creator's video into a clip" },
  { title: "Hit 200K+ views", note: "Let your edit do the talking" },
  { title: "Get paid ₹175", note: "For every clip that qualifies" },
];

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M3 7.5l2.6 2.6L11 4.6"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"
      stroke="#780AC1"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" stroke="#780AC1" strokeWidth="2" />
  </svg>
);

const EditorPayoutVisual = () => (
  <div className="relative flex w-full items-center gap-5 px-5 py-6 sm:h-[240px] sm:gap-7 sm:px-7 sm:py-0">
    {/* the clip */}
    <div className="relative shrink-0 pb-6">
      <div
        className="relative flex h-[150px] w-[90px] -rotate-3 flex-col items-center justify-between overflow-hidden rounded-[18px] px-3 pb-3 pt-5 sm:h-[186px] sm:w-[112px]"
        style={{
          background:
            "linear-gradient(160deg, #A24BEA 0%, #780AC1 55%, #54078F 100%)",
          boxShadow: "0 18px 32px rgba(120,10,193,0.28)",
        }}
      >
        <span className="mt-4 flex size-11 items-center justify-center rounded-full bg-white/20 sm:mt-6 sm:size-14">
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <path
              d="M6.5 3.5L16 10l-9.5 6.5z"
              fill="#fff"
              stroke="#fff"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="flex w-full flex-col gap-1.5">
          <span className="h-1.5 w-4/5 rounded-full bg-white/90" />
          <span className="h-1.5 w-3/5 rounded-full bg-white/60" />
        </span>
      </div>
      <span className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-[#D59EFB] bg-white px-3 py-1.5 font-[family-name:var(--font-inter)] text-[12px] font-medium leading-none text-[#780AC1] shadow-[0_6px_16px_rgba(120,10,193,0.15)]">
        <EyeIcon />
        200K+
      </span>
    </div>

    {/* the payout path */}
    <div className="flex min-w-0 flex-1 flex-col gap-5">
      <ol className="flex flex-col">
        {steps.map((step, i) => (
          <li key={step.title} className="relative flex gap-3 pb-4 last:pb-0">
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-[11px] top-7 w-px bg-[#D59EFB]"
              />
            )}
            <span className="relative z-10 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#780AC1]">
              <CheckIcon />
            </span>
            <div className="min-w-0">
              <p className="font-[family-name:var(--font-inter)] text-[15px] font-medium leading-[1.2] text-black">
                {step.title}
              </p>
              <p className="mt-0.5 font-[family-name:var(--font-inter)] text-[12px] leading-[1.4] text-[#686868]">
                {step.note}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-[#EED7FF]">
          <div
            className="h-full w-full origin-left animate-bar-fill rounded-full"
            style={{ background: "linear-gradient(90deg, #D59EFB, #780AC1)" }}
          />
        </div>
        <div className="mt-1.5 flex justify-between font-[family-name:var(--font-inter)] text-[11px] leading-none text-[#686868]">
          <span>0 views</span>
          <span className="font-medium text-[#780AC1]">200K+ = ₹175</span>
        </div>
      </div>
    </div>
  </div>
);

export default EditorPayoutVisual;
