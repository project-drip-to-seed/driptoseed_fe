import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

const NotFound = () => {
  return (
    <main
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-20"
      style={{
        background: "linear-gradient(180deg, #D59EFB 11%, #780AC1 142.75%)",
      }}
    >
      {/* Background glow blobs */}
      <div className="absolute left-[-234px] top-[-243px] size-[851px]">
        <div className="absolute inset-[-71.68%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src="/general_assets/hero_bg_ellipse_left.svg"
          />
        </div>
      </div>
      <div className="absolute right-[-387px] bottom-[-400px] size-[1080px]">
        <div className="absolute inset-[-70.37%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src="/general_assets/hero_bg_ellipse_right.svg"
          />
        </div>
      </div>

      <div className="relative flex flex-col items-center gap-5 text-center max-w-[620px]">
        <h2 className="font-kugile leading-[1.1] text-[160px] text-white">
          404
        </h2>
        <div className="flex flex-col gap-1 items-center capitalize">
          <h1 className="font-kugile leading-[1.4] text-[36px] text-white">
            This Page Didn&apos;t Make The Cut.
          </h1>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.6] text-[16px] text-white/80">
            The page you&apos;re looking for got lost in distribution. Let&apos;s
            get you back to content that performs.
          </p>
        </div>

        <div className="flex gap-5 items-center mt-3">
          <a
            href="/"
            className="bg-white capitalize font-[family-name:var(--font-inter)] font-normal leading-[1.2] px-6 py-3 rounded-full text-[#780AC1] text-[16px] whitespace-nowrap"
          >
            Back to Home
          </a>
          <a
            href="/contact"
            className="border border-white capitalize font-[family-name:var(--font-inter)] font-normal leading-[1.2] px-6 py-3 rounded-full text-white text-[16px] whitespace-nowrap"
          >
            Contact Support
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
