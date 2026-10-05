import Appear from "@/components/shared/appear";
import PurposeCard, { type ClipPurpose } from "./purpose-card";

const purposes: ClipPurpose[] = [
  {
    title: "Viral Moments",
    description:
      "The most engaging, emotional, surprising, or attention-grabbing parts of your content that have the highest potential for widespread sharing.",
    detail: "Reaction bait · Peak energy moments",
    result: "Peak reach & shares",
    large: true,
  },
  {
    title: "Educational Clips",
    description:
      "Structured, single-idea breakdowns that teach fast and keep viewers watching to the end.",
    detail: "How-tos · Frameworks · Quick tips",
    result: "Watch time & saves",
    large: true,
  },
  {
    title: "Trend-Led Content",
    description: "Fast-turnaround clips built around what's moving right now.",
    detail: "Trending sounds · Timely formats · News hooks",
    result: "Always fresh",
    featured: true,
  },
  {
    title: "Funny Moments",
    description: "Genuine, unscripted humor cut with perfect comedic timing.",
    detail: "Bloopers · Banter",
    result: "High shares",
  },
  {
    title: "Relatable Content",
    description: "Moments that make viewers feel seen — and hit share.",
    detail: "Everyday truths",
    result: "High saves",
  },
  {
    title: "Strong Opinions",
    description: "Bold, unfiltered takes engineered to spark comments.",
    detail: "Hot takes · Debate bait",
    result: "High comments",
  },
];

// From 1280px the two large cards fill rows 1 and 2 of the first column; the small ones fill the rest in order.
const LARGE_CARD_ROW = ["xl:row-start-1", "xl:row-start-2"];

export default function ClipPurposes() {
  return (
    <section className="w-full bg-white px-5 pb-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto flex max-w-[900px] flex-col gap-1 text-center">
          <Appear>
            <h2 className="font-kugile text-[34px] leading-[1.4] text-black sm:text-[36px]">
              Every Clip Is{" "}
              <span className="text-[#780AC1]">Designed With A Purpose.</span>
            </h2>
          </Appear>
          <Appear delay={120}>
            <p className="font-[family-name:var(--font-inter)] text-base font-normal leading-[1.6] text-[#686868]">
              Not every audience responds to the same type of content. That&apos;s
              why we identify and edit different styles of clips based on your
              content, niche, and audience behavior.
            </p>
          </Appear>
        </div>

        {/*
          One grid for all six cards, so every row is the same height and the left and right cards always line up.
          From 1280px the two large cards sit in the first column; below that they run full width, then the small
          ones follow two across.
        */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-[540px_1fr_1fr]">
          {purposes.map((purpose, index) => {
            const largeNumber = purposes.slice(0, index).filter((p) => p.large).length;
            return (
              <Appear
                key={purpose.title}
                delay={(index % 3) * 110}
                className={
                  purpose.large
                    ? `md:col-span-2 xl:col-span-1 xl:col-start-1 ${LARGE_CARD_ROW[largeNumber]}`
                    : undefined
                }
              >
                <PurposeCard purpose={purpose} />
              </Appear>
            );
          })}
        </div>
      </div>
    </section>
  );
}
