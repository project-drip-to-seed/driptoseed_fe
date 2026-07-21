const CaseStudyCta = () => {
  return (
    <section className="w-full py-[60px] px-20 bg-[#F2E7F9]">
      <div className="max-w-[900px] mx-auto flex flex-col items-center gap-[38px]">
        <div className="flex flex-col items-center gap-1 text-center capitalize">
          <h2 className="font-kugile text-[36px] leading-[1.4] text-black">
            {`Don't Let Great Content `}
            <span className="text-[#780AC1]">Stop at One Upload.</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868]">
            Creator Seeding ensures every upload has the opportunity to reach new
            communities, earn greater visibility, and create lasting impact
            through a strategic distribution network designed for sustainable
            growth.
          </p>
        </div>

        <a
          href="/become-creator"
          className="flex items-center justify-center rounded-full px-6 py-3 font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.2] text-white capitalize whitespace-nowrap"
          style={{
            backgroundImage:
              "linear-gradient(123.47deg, #D59EFB 0%, #780AC1 65.556%)",
          }}
        >
          Start Seeding Your Content
        </a>
      </div>
    </section>
  );
};

export default CaseStudyCta;
