import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

const NotFound = () => {
  return (
    <main
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-0"
      style={{
        background: "linear-gradient(180deg, #D59EFB 11%, #780AC1 142.75%)",
      }}
    >
      {/* Background glow blobs */}
      <div className="absolute left-[-234px] top-[-243px] size-[400px] sm:size-[600px] lg:size-[851px]">
        <div className="absolute inset-[-71.68%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src="/general_assets/hero_bg_ellipse_left.svg"
          />
        </div>
      </div>
      <div className="absolute right-[-387px] bottom-[-400px] size-[500px] sm:size-[760px] lg:size-[1080px]">
        <div className="absolute inset-[-70.37%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src="/general_assets/hero_bg_ellipse_right.svg"
          />
        </div>
      </div>

      <div className="relative flex flex-col items-center gap-5 text-center max-w-[620px]">
        <h2 className="font-kugile leading-[1.1] text-[80px] sm:text-[120px] lg:text-[160px] text-white">
          404
        </h2>
        <div className="flex flex-col gap-1 items-center capitalize">
          <h1 className="font-kugile leading-[1.3] text-[26px] sm:text-[30px] lg:text-[36px] lg:leading-[1.4] text-white">
            This Page Didn&apos;t Make The Cut.
          </h1>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.6] text-[16px] text-white/80">
            The page you&apos;re looking for got lost in distribution. Let&apos;s
            get you back to content that performs.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center mt-3 sm:gap-5">
          <Link
            href="/"
            className="bg-white capitalize font-[family-name:var(--font-inter)] font-normal leading-[1.2] px-6 py-3 rounded-full text-[#780AC1] text-[16px] whitespace-nowrap"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="border border-white capitalize font-[family-name:var(--font-inter)] font-normal leading-[1.2] px-6 py-3 rounded-full text-white text-[16px] whitespace-nowrap"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
