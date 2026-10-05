"use client";

import { useRef, type PointerEvent } from "react";

const StarIcon = () => (
  <svg viewBox="0 0 19 20" width={15} height={16} aria-hidden="true">
    <path
      fill="#780AC1"
      d="M7.64112 20L7.96664 12.6736L1.86745 16.6493L0 13.3507L6.47611 10L0 6.6493L1.86745 3.35069L7.96664 7.32639L7.64112 0H11.3589L11.0334 7.32639L17.1326 3.35069L19 6.6493L12.5239 10L19 13.3507L17.1326 16.6493L11.0334 12.6736L11.3589 20H7.64112Z"
    />
  </svg>
);

/**
 * One niche tile. On hover it lifts, a soft light follows the pointer across it, the star spins, the name turns
 * purple and the illustration slowly zooms. (Hover effects only apply on devices that can hover, and all of it is
 * switched off for people who prefer reduced motion: see globals.css.)
 */
export default function NicheCard({ name, image }: { name: string; image: string | null }) {
  const ref = useRef<HTMLDivElement>(null);

  // The light under the pointer is a CSS variable set straight on the element, so moving the mouse never re-renders.
  const followPointer = (event: PointerEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card || event.pointerType !== "mouse") return;
    const box = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - box.left}px`);
    card.style.setProperty("--my", `${event.clientY - box.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={followPointer}
      className="group relative aspect-square min-w-0 overflow-hidden rounded-3xl transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_44px_-16px_rgba(120,10,193,0.38)]"
      style={{
        background:
          "linear-gradient(180deg, rgba(213,158,251,0.08) 11%, rgba(120,10,193,0.08) 142.75%)",
      }}
    >
      <div className="absolute left-[14px] top-[14px] z-10 flex items-center gap-2">
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-90 group-hover:scale-125">
          <StarIcon />
        </span>
        <p className="font-[family-name:var(--font-inter)] font-medium capitalize text-[16px] text-black whitespace-nowrap transition-colors duration-300 group-hover:text-[#780AC1]">
          {name}
        </p>
      </div>

      <div
        className="absolute bottom-0 left-0 w-[88.33%] h-[77.92%] rounded-tr-xl rounded-bl-xl overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(213,158,251,0.16) 11%, rgba(120,10,193,0.16) 142.75%)",
        }}
      >
        {image && (
          <img
            alt={name}
            src={image}
            className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        )}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(200px circle at var(--mx, 50%) var(--my, 40%), rgba(213,158,251,0.30), transparent 70%)",
        }}
      />
    </div>
  );
}
