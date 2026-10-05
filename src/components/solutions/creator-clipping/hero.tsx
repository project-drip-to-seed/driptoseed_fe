import StockVideo from "@/components/shared/stock-video";
import { stockVideos } from "@/lib/stock-videos";

// Seven tall cards that step down toward the middle. The videos in each come from `stockVideos.heroClips`.
const thumbnailCards = [
  { top: 0, height: 430, width: 246 },
  { top: 20, height: 390, width: 246 },
  { top: 40, height: 350, width: 246 },
  { top: 55, height: 320, width: 246 },
  { top: 40, height: 350, width: 246 },
  { top: 20, height: 390, width: 247 },
  { top: 0, height: 430, width: 246 },
];

export default function CreatorClippingHero() {
  return (
    <section className="relative h-auto min-h-[380px] w-full overflow-hidden bg-[#F2E7F9] pb-16 pt-28 sm:min-h-[440px] sm:pt-32 lg:h-[846px] lg:py-0">
      <div className="absolute left-[-234px] top-[-243px] size-[400px] sm:size-[600px] lg:size-[851px]">
        <div className="absolute inset-[-71.68%]">
          <img
            alt=""
            aria-hidden="true"
            className="block size-full max-w-none"
            src="/media/bg/ellipse-left-v1.webp"
          />
        </div>
      </div>

      <div className="absolute right-[-387px] top-[-525px] size-[500px] sm:size-[760px] lg:size-[1080px]">
        <div className="absolute inset-[-70.37%]">
          <img
            alt=""
            aria-hidden="true"
            className="block size-full max-w-none"
            src="/media/bg/ellipse-right-v1.webp"
          />
        </div>
      </div>

      <div className="absolute left-[180px] top-[191px] hidden size-[1080px] lg:block">
        <div className="absolute inset-[-75.93%]">
          <img
            alt=""
            aria-hidden="true"
            className="block size-full max-w-none"
            src="/media/bg/ellipse-bottom-v1.webp"
          />
        </div>
      </div>

      <div className="relative left-1/2 top-0 z-10 flex w-[900px] max-w-[calc(100%-40px)] -translate-x-1/2 flex-col items-center gap-3 text-center text-white lg:absolute lg:top-[160px] lg:gap-1">
        <h1 className="w-full font-kugile text-[28px] leading-[1.3] sm:text-[38px] lg:text-[57px] lg:leading-[1.4]">
          Turn One Video Into Weeks of Content.
        </h1>
        <p className="w-full font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[1.5] sm:text-[16px] sm:leading-[1.6]">
          Whether you&apos;re a creator looking to maximize your content or an
          editor passionate about crafting viral clips, our clipping ecosystem
          helps every video work harder and travel further.
        </p>
      </div>

      <div className="hidden lg:contents">
        <div className="absolute left-1/2 top-[416px] flex h-[430px] w-[1795px] -translate-x-1/2 gap-3">
          {thumbnailCards.map((card, index) => (
            <div
              key={index}
              className="relative shrink-0 overflow-hidden rounded-2xl border border-white/50 shadow-[0_8px_24px_rgba(43,5,65,0.18)]"
              style={{
                marginTop: card.top,
                height: card.height,
                width: card.width,
              }}
            >
              <StockVideo clip={stockVideos.heroClips[index]} />
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[756px] h-[180px] w-[1716px] -translate-x-1/2 rounded-[50%] bg-white"
        />
      </div>
    </section>
  );
}
