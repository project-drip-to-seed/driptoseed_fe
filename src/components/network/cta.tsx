const CtaMockup = ({
  className,
  rotate,
}: {
  className: string;
  rotate: string;
}) => (
  <div
    className={`absolute flex h-[688.973px] w-[724.047px] items-center justify-center -translate-x-1/2 ${className}`}
  >
    <div style={{ transform: `rotate(${rotate})` }}>
      <div className="relative h-[635.075px] w-[673.481px] shadow-[-20px_24px_24px_0px_rgba(0,0,0,0.25)] rounded-[16px]">
        <div className="absolute inset-0 overflow-hidden rounded-[16px]">
          <img
            alt=""
            className="absolute h-[129.59%] left-[-11.71%] max-w-none top-[-13.61%] w-[122.2%]"
            src="/general_assets/dashboard_mockup.png"
          />
        </div>
      </div>
    </div>
  </div>
);

const NetworkCta = () => {
  return (
    <section className="w-full py-20 px-20 bg-white">
      <div className="relative max-w-[1280px] mx-auto h-[561px] overflow-hidden rounded-[24px] border border-[#D59EFB] bg-white">
        {/* Glows */}
        <div className="pointer-events-none absolute right-[-492px] bottom-[-476px] size-[983px] rounded-full bg-[radial-gradient(circle,rgba(213,158,251,0.4)_0%,rgba(213,158,251,0)_70%)]" />
        <div className="pointer-events-none absolute left-[-621px] bottom-[-476px] size-[983px] rounded-full bg-[radial-gradient(circle,rgba(213,158,251,0.4)_0%,rgba(213,158,251,0)_70%)]" />

        {/* Bottom mockups */}
        <CtaMockup
          className="bottom-[-398.59px] left-[calc(50%-258px)]"
          rotate="-4.78deg"
        />
        <CtaMockup
          className="bottom-[-368.78px] left-[calc(50%+261.2px)]"
          rotate="-5.01deg"
        />

        {/* Content */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[59px] w-[900px] max-w-[calc(100%-40px)] flex flex-col gap-5 items-center">
          <div className="flex flex-col gap-1 items-center text-center capitalize">
            <p className="font-kugile text-[36px] leading-[1.4] text-black">
              {`Every Creator Needs `}
              <span className="text-[#780AC1]">
                a System, Not Just Content.
              </span>
            </p>
            <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
              Creating great content is only the beginning. Sustainable growth
              comes from having a structured system that ensures every upload
              continues to reach new audiences, generate engagement, and create
              long-term value.
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <a
              href="/become-creator"
              className="flex items-center justify-center rounded-full border border-[#780AC1] px-6 py-3 font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.2] text-[#780AC1] capitalize whitespace-nowrap"
            >
              Apply as a Creator
            </a>
            <a
              href="/become-editor"
              className="flex items-center justify-center rounded-full bg-[#780AC1] px-6 py-3 font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.2] text-white capitalize whitespace-nowrap"
            >
              Become an Editor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkCta;
