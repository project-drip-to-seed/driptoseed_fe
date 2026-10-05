"use client";

import { useEffect, useRef } from "react";
import type { StockClip } from "@/lib/stock-videos";

// ---------------------------------------------------------------------------------------------------------------
// One scheduler for every video on the page, so a page full of clips never overloads the device:
//   * a clip only plays while it is on (or just about to enter) the screen, and pauses the moment it leaves
//   * only a few play at once (fewer on low-power devices); the rest keep showing their preview image and start
//     as soon as there is room
//   * nothing plays in a background tab, for people who asked their device to reduce motion, or on data saver
//   * a clip's file is not even requested until it is about to be shown
// ---------------------------------------------------------------------------------------------------------------

const inView = new Set<HTMLVideoElement>(); // visible, in the order they appeared
const playing = new Set<HTMLVideoElement>();
let observer: IntersectionObserver | null = null;

function allowedAtOnce(): number {
  const cores = navigator.hardwareConcurrency ?? 4;
  return cores <= 4 ? 5 : 10;
}

function motionAllowed(): boolean {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches && !connection?.saveData;
}

function startWhatFits() {
  if (document.hidden) return;
  for (const video of inView) {
    if (playing.size >= allowedAtOnce()) break;
    if (playing.has(video)) continue;
    playing.add(video);
    video.play().catch(() => playing.delete(video)); // blocked or failed: it just keeps showing its preview image
  }
}

function sharedObserver(): IntersectionObserver {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          inView.add(video);
        } else {
          inView.delete(video);
          if (playing.delete(video)) video.pause();
        }
      }
      startWhatFits();
    },
    { rootMargin: "80px" },
  );
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      playing.forEach((video) => video.pause());
      playing.clear();
    } else {
      startWhatFits();
    }
  });
  return observer;
}

/**
 * A silent, looping preview clip that fills its container (like a photo set to `object-cover`).
 * It shows its preview image until it is needed; see the scheduler above for when it plays.
 */
export default function StockVideo({ clip, className = "" }: { clip: StockClip; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || !motionAllowed()) return;
    const watcher = sharedObserver();
    watcher.observe(video);
    return () => {
      watcher.unobserve(video);
      inView.delete(video);
      playing.delete(video);
    };
  }, []);

  return (
    <video
      ref={ref}
      src={clip.src}
      poster={clip.poster}
      width={clip.width}
      height={clip.height}
      title={clip.label}
      role="img"
      aria-label={clip.label}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      disableRemotePlayback
      tabIndex={-1}
      className={`size-full bg-[#EED7FF] object-cover ${className}`}
    />
  );
}
