"use client";

import { useRef, type PointerEvent } from "react";
import AsteriskIcon from "@/components/shared/asterisk-icon";

export type ClipPurpose = {
  title: string;
  description: string;
  detail: string;
  result: string;
  large?: boolean;
  featured?: boolean;
};

const PLATFORMS = [
  ["IG", "Instagram"],
  ["YT", "YouTube"],
  ["TT", "TikTok"],
] as const;

function PlatformBadges() {
  return (
    <div className="flex gap-2">
      {PLATFORMS.map(([shortName, fullName]) => (
        <span
          key={shortName}
          title={fullName}
          className="flex size-8 items-center justify-center rounded-lg bg-[#EED7FF] font-[family-name:var(--font-inter)] text-[10px] leading-[1.4] text-[#780AC1] transition-[transform,background-color,color] duration-300 ease-out group-hover:-translate-y-0.5 hover:bg-[#780AC1] hover:text-white"
        >
          {shortName}
        </span>
      ))}
    </div>
  );
}

/**
 * One "clip purpose" card. On hover it lifts, glows, spins its asterisk and lights up under the pointer; the
 * featured card's glow also breathes gently. (Hover effects only apply on devices that can hover, and every
 * transition is switched off for people who prefer reduced motion: see globals.css.)
 */
export default function PurposeCard({ purpose }: { purpose: ClipPurpose }) {
  const ref = useRef<HTMLElement>(null);

  // The light under the pointer is a CSS variable updated straight on the element, so moving the mouse never re-renders.
  const followPointer = (event: PointerEvent<HTMLElement>) => {
    const card = ref.current;
    if (!card || event.pointerType !== "mouse") return;
    const box = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - box.left}px`);
    card.style.setProperty("--my", `${event.clientY - box.top}px`);
  };

  return (
    <article
      ref={ref}
      onPointerMove={followPointer}
      className={`group relative flex h-full min-h-[295px] flex-col overflow-hidden rounded-3xl border p-5 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-[#D59EFB] hover:shadow-[0_22px_44px_-14px_rgba(120,10,193,0.32)] ${
        purpose.featured
          ? "border-[#D59EFB] bg-white shadow-[0_0_24px_rgba(0,0,0,0.16)]"
          : "border-transparent bg-[#EED7FF66]"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--mx, 50%) var(--my, 30%), rgba(213,158,251,0.34), transparent 70%)",
        }}
      />

      {purpose.featured ? (
        <div
          aria-hidden="true"
          className="absolute left-[223px] top-[98px] size-60 animate-glow-breathe rounded-full bg-[#D59EFB]/15 blur-[36px]"
        />
      ) : null}

      <div className="relative z-10 h-9 w-[35px] shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-90 group-hover:scale-110">
        <AsteriskIcon width={35} height={36} />
      </div>

      <div className={`relative z-10 flex flex-col ${purpose.large ? "mt-8 max-w-[500px]" : "mt-5 max-w-[310px]"}`}>
        <h3 className="font-[family-name:var(--font-inter)] text-xl font-medium leading-[1.4] text-black">
          {purpose.title}
        </h3>
        <p className="mt-2 font-[family-name:var(--font-inter)] text-base font-normal leading-[1.6] text-[#686868] transition-colors duration-300 group-hover:text-[#404040]">
          {purpose.description}
        </p>
        <p className="mt-3 font-[family-name:var(--font-inter)] text-xs font-normal leading-[1.4] text-[#A46BCB]">
          {purpose.detail}
        </p>
        {!purpose.large ? (
          <p className="mt-3 font-[family-name:var(--font-inter)] text-base font-normal capitalize leading-[1.2] text-[#780AC1] transition-transform duration-300 ease-out group-hover:translate-x-1">
            {purpose.result}
          </p>
        ) : null}
      </div>

      <div className="relative z-10 mt-auto flex items-center justify-between gap-3 pt-3">
        <PlatformBadges />
        {purpose.large ? (
          <p className="font-[family-name:var(--font-inter)] text-xs font-normal leading-[1.4] text-[#780AC1] transition-transform duration-300 ease-out group-hover:-translate-x-1">
            {purpose.result}
          </p>
        ) : null}
      </div>
    </article>
  );
}
