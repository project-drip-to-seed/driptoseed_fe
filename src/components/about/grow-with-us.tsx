type GrowCard = {
  title: string;
  description: string;
  tags: string[];
  cta: string;
  href: string;
};

const cards: GrowCard[] = [
  {
    title: "Become a Creator",
    description:
      "Plug your content into a system built to keep it working after upload day. Plug your content into a system built to keep it working after upload day. Plug your content into a system built to keep it working after upload day.",
    tags: [
      "Full clipping pipeline included",
      "Access to 300+ partner pages",
      "Live growth dashboard",
    ],
    cta: "Apply as a creator",
    href: "/become-creator",
  },
  {
    title: "Become an Editor",
    description:
      "Join the team turning long-form footage into the clips creators need daily. Join the team turning long-form footage. Join the team turning long-form footage into the clips creators need daily.",
    tags: [
      "Steady, ongoing project flow",
      "Paid per clip performance",
      "Direct creator collaboration",
    ],
    cta: "Apply as an editor",
    href: "/become-editor",
  },
];

const ArrowUpRightIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4.5 12.5L12.5 4.5M12.5 4.5H5.5M12.5 4.5V11.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GrowWithUs = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full">
        <h2 className="font-kugile capitalize text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.4] text-black">
          {`Grow `}
          <span className="text-[#780AC1]">with us.</span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-[#686868]">
          Every day, creators invest countless hours researching ideas,
          writing scripts, filming videos, editing content, and publishing
          across multiple platforms.
        </p>
      </div>

      <div className="flex flex-col gap-5 items-stretch w-full mt-10 lg:flex-row">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex-1 min-w-0 flex flex-col rounded-3xl border border-[#D59EFB] bg-white overflow-hidden"
          >
            <div
              className="relative w-full h-[240px] sm:h-[332px] shrink-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(213,158,251,0.08) 11%, rgba(120,10,193,0.08) 142.75%)",
              }}
            >
              <img
                alt=""
                src="/general_assets/about_grow_network.png"
                className="absolute inset-[12%_10%] w-[80%] h-[76%] object-contain"
              />
            </div>

            <div className="flex flex-col gap-10 items-start px-5 pb-5 pt-5 flex-1">
              <div className="flex flex-col gap-5 items-start w-full">
                <div className="flex flex-col gap-3 items-start capitalize w-full">
                  <p className="font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[1.4] text-black w-full">
                    {card.title}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[1.6] text-[#686868] w-full">
                    {card.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#EED7FF66] text-[#780AC1] font-[family-name:var(--font-inter)] font-normal capitalize text-xs leading-[1.2] px-3 py-2 rounded-full whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={card.href}
                className="self-end flex items-center gap-[10px] px-6 py-3 rounded-full capitalize font-[family-name:var(--font-inter)] font-normal text-[16px] text-white whitespace-nowrap"
                style={{
                  background:
                    "linear-gradient(117deg, #D59EFB 2%, #780AC1 64%)",
                }}
              >
                {card.cta}
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GrowWithUs;
