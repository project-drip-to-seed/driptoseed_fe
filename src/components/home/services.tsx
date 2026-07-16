const TagPill = ({ label }: { label: string }) => (
  <span className="bg-[#EED7FF66] text-[#780AC1] font-[family-name:var(--font-inter)] font-normal capitalize text-xs leading-[1.2] px-3 py-2 rounded-full whitespace-nowrap">
    {label}
  </span>
);

const ArrowButton = () => (
  <div className="absolute right-[8px] bottom-[8px] w-[74px] h-[74px] flex items-center justify-center">
    <img
      alt=""
      src="/hero_section/arrow_button.svg"
      className="w-[52px] h-[52px] -rotate-135 -scale-y-100"
    />
  </div>
);

const StatBlock = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-start">
    <p className="font-[family-name:var(--font-inter)] leading-[1.2] text-[32px] text-black">
      {value}
    </p>
    <p className="font-[family-name:var(--font-inter)] capitalize leading-[1.4] text-[12px] text-[#686868]">
      {label}
    </p>
  </div>
);

const Divider = () => <div className="w-full h-px bg-black/10" />;

const Services = () => {
  return (
    <section className="w-full py-20 px-20 bg-[#EED7FF66]">
      <div className="flex flex-col gap-1 items-start w-[900px] max-w-full">
        <p className="font-kugile capitalize text-[36px] leading-[1.6] text-black">
          One Content Engine.
        </p>
        <p className="font-kugile capitalize text-[36px] leading-[1.6] text-[#780AC1]">
          Three Powerful Growth Services.
        </p>
        <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-[#686868] w-[868px] max-w-full">
          Creating great content is only the beginning. Our Creator Growth
          Engine combines strategic clipping, seeding, and distribution to
          help your content reach new audiences, stay relevant longer, and
          drive continuous growth far beyond a single upload.
        </p>
      </div>

      <div className="flex gap-5 items-stretch w-full mt-10">
        {/* Card 1 - distribution */}
        <div className="relative flex flex-col flex-[3] min-w-0 bg-white border border-[#D59EFB] rounded-3xl overflow-hidden">
          <img
            alt=""
            src="/hero_section/power_1.svg"
            className="w-full h-[240px] block shrink-0"
          />
          <div className="flex flex-col flex-1 justify-between gap-5 px-5 py-5">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3 items-start">
                <p className="font-[family-name:var(--font-inter)] font-medium capitalize leading-[1.4] text-[20px] text-black">
                  Put Your Content Where Your Audience Already Is.
                </p>
                <p className="font-[family-name:var(--font-inter)] font-normal capitalize leading-[1.6] text-[16px] text-[#686868]">
                  Distribute your content across niche communities, media
                  pages, meme pages, creator ecosystems, and trusted
                  distribution partners to reach audiences beyond your
                  followers.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 items-center">
                <TagPill label="Meme Pages" />
                <TagPill label="Entertainment Pages" />
                <TagPill label="Regional Pages" />
                <TagPill label="Creator Networks" />
                <TagPill label="Community Pages" />
                <TagPill label="Industry Platforms" />
                <TagPill label="Fan Communities" />
                <TagPill label="Media Publications" />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <Divider />
              <StatBlock value="300+" label="Distribution Partners" />
            </div>
          </div>
          <ArrowButton />
        </div>

        {/* Cards 2 & 3 - stacked right column */}
        <div className="flex flex-col gap-5 flex-[4] min-w-0">
          <div className="relative flex h-[300px] bg-white border border-[#D59EFB] rounded-3xl overflow-hidden">
            <img
              alt=""
              src="/hero_section/power_2.svg"
              className="w-[240px] h-[300px] object-cover shrink-0 block"
            />
            <div className="flex flex-col gap-5 pt-5 px-5 pb-4 flex-1 min-w-0">
              <div className="flex flex-col gap-3 items-start">
                <p className="font-[family-name:var(--font-inter)] font-medium capitalize leading-[1.4] text-[20px] text-black">
                  One Video Can Create Weeks of Content.
                </p>
                <p className="font-[family-name:var(--font-inter)] font-normal capitalize leading-[1.6] text-[16px] text-[#686868]">
                  Transform one long-form video into multiple short-form
                  assets optimized for Instagram Reels, YouTube Shorts,
                  TikTok, LinkedIn, and more.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 items-center">
                <TagPill label="Viral Moments" />
                <TagPill label="Educational" />
                <TagPill label="Funny" />
                <TagPill label="Opinions" />
                <TagPill label="Relatable" />
              </div>

              <Divider />
              <StatBlock value="15x" label="Clips Per Upload" />
            </div>
            <ArrowButton />
          </div>

          <div className="relative flex h-[300px] bg-white border border-[#D59EFB] rounded-3xl overflow-hidden">
            <img
              alt=""
              src="/hero_section/power_3.svg"
              className="w-[240px] h-[300px] object-cover shrink-0 block"
            />
            <div className="flex flex-col gap-5 pt-5 px-5 pb-4 flex-1 min-w-0">
              <div className="flex flex-col gap-3 items-start">
                <p className="font-[family-name:var(--font-inter)] font-medium capitalize leading-[1.4] text-[20px] text-black">
                  A Customized Growth Strategy for Creators
                </p>
                <p className="font-[family-name:var(--font-inter)] font-normal capitalize leading-[1.6] text-[16px] text-[#686868]">
                  Every creator receives a tailored distribution plan based
                  on niche, audience, content style, and performance insights
                  to maximize long-term visibility.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 items-center">
                <TagPill label="Audience Analysis" />
                <TagPill label="Content Planning" />
                <TagPill label="Growth Reporting" />
              </div>

              <Divider />
              <StatBlock value="4" label="Growth Signals Tracked" />
            </div>
            <ArrowButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
