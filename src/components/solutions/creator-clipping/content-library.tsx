import StockVideo from "@/components/shared/stock-video";
import { stockVideos } from "@/lib/stock-videos";

const filters = ["Creator", "Podcast", "Interview", "Vlog"];

const ChevronIcon = () => (
  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" aria-hidden="true">
    <path
      d="m1 1 3 3 3-3"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ContentLibrary() {
  return (
    <section className="relative z-10 -mt-[10px] w-full bg-white px-5 pb-20 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
          <div className="flex w-full flex-col gap-1">
            <h2 className="font-kugile text-[34px] capitalize leading-[1.6] text-black sm:text-[36px] sm:leading-[1.4]">
              Every Long-Form Video Is{" "}
              <span className="text-[#780AC1]">A Library Of Content.</span>
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-base font-normal leading-[1.6] text-[#686868]">
              Creators spend hours producing podcasts, interviews, webinars,
              tutorials, and vlogs. Yet most of these videos are published once
              and rarely revisited.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {filters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className="flex h-[33px] items-center justify-center gap-2 rounded-full bg-[#EED7FF66] px-6 font-[family-name:var(--font-inter)] text-xs font-normal capitalize leading-[1.4] text-[#780AC1]"
              >
                {filter}
                {index === 0 ? <ChevronIcon /> : null}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {stockVideos.longForm.map((clip) => (
              <div
                key={clip.src}
                className="h-60 min-w-0 overflow-hidden rounded-3xl"
              >
                <StockVideo clip={clip} />
              </div>
            ))}
          </div>

          <div className="mt-5 flex h-[120px] items-center overflow-hidden rounded-3xl bg-[#EED7FF66] p-[10px]">
            <div className="h-[100px] w-[180px] shrink-0 overflow-hidden rounded-xl">
              <StockVideo clip={stockVideos.sourceThumbnail} />
            </div>

            <div className="mx-5 h-[100px] w-px shrink-0 bg-[#D59EFB]" />

            <div className="flex min-w-0 flex-1 gap-2 overflow-hidden">
              {stockVideos.clipStrip.map((clip, index) => (
                <div
                  key={index}
                  className="h-[100px] w-20 shrink-0 overflow-hidden rounded-xl"
                >
                  <StockVideo clip={clip} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
