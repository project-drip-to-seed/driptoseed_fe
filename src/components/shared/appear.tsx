"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Fades its content up into place the first time it scrolls into view (the motion itself lives in globals.css,
 * under [data-reveal]). `delay` (ms) staggers neighbours so a row of cards arrives one after another.
 *
 * It is a progressive enhancement: the server renders the content fully visible, so nothing is hidden if scripts
 * fail, and anything already on screen when the page loads is left alone (no flash). Only content further down the
 * page is hidden, just before it would have been scrolled to. People who ask their device to reduce motion get the
 * content immediately (the stylesheet shortens the transition to nothing).
 */
export default function Appear({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const box = el.getBoundingClientRect();
    if (box.top < window.innerHeight * 0.92 && box.bottom > 0) return; // already in view on load: leave it be

    el.dataset.reveal = "pending";
    const watcher = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.reveal = "shown";
        watcher.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    watcher.observe(el);
    return () => watcher.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
