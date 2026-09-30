import {
  FindMomentsArt,
  StandaloneStoriesArt,
  WatchTodayArt,
  WeeksOfContentArt,
} from "./opportunity-art";

const cards = [
  { caption: "Find the Moments That Matter", Art: FindMomentsArt },
  { caption: "Transform Moments into Standalone Stories", Art: StandaloneStoriesArt },
  { caption: "Built for How People Watch Today", Art: WatchTodayArt },
  { caption: "Weeks of Content from a Single Recording", Art: WeeksOfContentArt },
];

const Opportunities = () => {
  return (
    <section className="w-full py-12 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-20 bg-white">
      <div className="flex flex-col gap-1 items-start w-full lg:w-[900px] max-w-full">
        <h2 className="font-kugile capitalize text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.3] lg:leading-[1.6] text-black">
          One Video. <span className="text-[#780AC1]">Endless Content Opportunities.</span>
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal capitalize text-[16px] leading-[1.6] text-[#686868] w-full lg:w-[900px] max-w-full">
          Every long-form video is packed with moments that deserve their own
          audience. Whether it&apos;s a podcast, interview, vlog, webinar, or
          educational session, there are countless highlights that often go
          unnoticed after a single upload.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 items-start w-full mt-10 sm:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.caption}
            className="flex flex-col gap-3 items-center min-w-0"
          >
            <div className="w-full aspect-square rounded-3xl bg-[#F0E6F8] border border-[#D59EFB] overflow-hidden">
              <card.Art />
            </div>
            <p className="font-[family-name:var(--font-inter)] font-normal capitalize leading-[1.4] text-[20px] text-black text-center px-2">
              {card.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Opportunities;
