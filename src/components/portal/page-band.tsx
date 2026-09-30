// Purple hero band used by the apply / login pages, matching the site's other heroes
// (and giving the fixed white navbar something to sit on).

import type { ReactNode } from "react";

export default function PageBand({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#F2E7F9] pb-28 pt-28 sm:pt-32 lg:pb-32">
      <div className="absolute left-[-234px] top-[-243px] size-[400px] sm:size-[600px] lg:size-[851px]">
        <div className="absolute inset-[-71.68%]">
          <img alt="" aria-hidden="true" className="block size-full max-w-none" src="/general_assets/hero_bg_ellipse_left.svg" />
        </div>
      </div>
      <div className="absolute right-[-387px] top-[-525px] size-[500px] sm:size-[760px] lg:size-[1080px]">
        <div className="absolute inset-[-70.37%]">
          <img alt="" aria-hidden="true" className="block size-full max-w-none" src="/general_assets/hero_bg_ellipse_right.svg" />
        </div>
      </div>
      <div className="relative z-10 mx-auto flex w-[900px] max-w-[calc(100%-40px)] flex-col items-center gap-3 text-center text-white">
        <h1 className="font-kugile text-[32px] leading-[1.3] sm:text-[42px] lg:text-[52px] lg:leading-[1.35]">{title}</h1>
        {description && (
          <p className="font-[family-name:var(--font-inter)] text-[15px] leading-[1.6] sm:text-[16px]">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}

export function PortalDown() {
  return (
    <main className="min-h-[60vh] bg-white px-5 pb-20 pt-40 text-center">
      <h1 className="font-kugile text-[28px] text-black">We&apos;ll be right back</h1>
      <p className="mx-auto mt-3 max-w-md font-[family-name:var(--font-inter)] text-[16px] leading-[1.6] text-[#686868]">
        Applications and dashboards are temporarily unavailable. Please try again in a few minutes.
      </p>
    </main>
  );
}
