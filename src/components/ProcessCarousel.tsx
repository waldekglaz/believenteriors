"use client";

import {
  useState,
  useSyncExternalStore,
  type KeyboardEvent,
} from "react";
import { processSteps } from "@/lib/data";

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

// Track viewport width without a setState-in-effect (SSR-safe).
function useWindowWidth() {
  return useSyncExternalStore(
    (cb) => {
      window.addEventListener("resize", cb);
      return () => window.removeEventListener("resize", cb);
    },
    () => window.innerWidth,
    () => 1280, // server fallback → desktop layout
  );
}

const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);

export default function ProcessCarousel({
  /** Cards visible at desktop width. Set to 1, 2, or 3. */
  perView = 2,
}: {
  perView?: 1 | 2 | 3;
}) {
  const [i, setI] = useState(0);
  const width = useWindowWidth();
  const count = processSteps.length;

  // Responsive: 1 card on mobile, up to 2 on tablet, `perView` on desktop.
  const visible =
    width < 640 ? 1 : width < 1024 ? Math.min(2, perView) : perView;

  const maxIndex = Math.max(0, count - visible);
  const current = clamp(i, 0, maxIndex);
  const slide = 100 / visible;

  const go = (n: number) => setI(clamp(n, 0, maxIndex));

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(current - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(current + 1);
    }
  }

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="How it works, step by step"
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="mt-14 outline-none focus-visible:ring-1 focus-visible:ring-gold/50"
    >
      {/* Track */}
      <div className="overflow-hidden">
        <ul
          className="flex items-stretch transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${current * slide}%)` }}
        >
          {processSteps.map((step, idx) => {
            const offscreen = idx < current || idx >= current + visible;
            return (
              <li
                key={step.title}
                aria-hidden={offscreen}
                className="shrink-0 grow-0 px-3"
                style={{ flexBasis: `${slide}%` }}
              >
                <div className="flex h-full flex-col border border-white/15 bg-white/[0.03] p-8 text-center sm:p-10">
                  <span className="font-serif text-5xl leading-none text-gold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="mx-auto mt-6 block h-px w-10 bg-gold/40"
                    aria-hidden
                  />
                  <h3 className="mt-6 text-xl text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Controls */}
      <div className="mt-12 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => go(current - 1)}
          disabled={current === 0}
          aria-label="Previous"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/30 disabled:hover:text-white/80"
        >
          <Chevron dir="left" />
        </button>

        <ol className="flex items-center gap-2" aria-label="Slides">
          {Array.from({ length: maxIndex + 1 }, (_, idx) => (
            <li key={idx}>
              <button
                type="button"
                onClick={() => go(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === current ? "true" : undefined}
                className={`block h-1 rounded-full transition-all duration-300 ${
                  idx === current
                    ? "w-8 bg-gold"
                    : "w-3 bg-white/20 hover:bg-white/40"
                }`}
              />
            </li>
          ))}
        </ol>

        <button
          type="button"
          onClick={() => go(current + 1)}
          disabled={current === maxIndex}
          aria-label="Next"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/30 disabled:hover:text-white/80"
        >
          <Chevron dir="right" />
        </button>
      </div>
    </div>
  );
}
