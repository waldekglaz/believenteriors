"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import type { Finish } from "@/lib/materials";

type Group = { name: string; items: Finish[] };

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

export default function FinishesGallery({ groups }: { groups: Group[] }) {
  // Flatten for sequential prev/next across the whole catalogue.
  const flat = groups.flatMap((g) => g.items);
  const count = flat.length;

  const [open, setOpen] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const isOpen = open !== null;

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) =>
      setOpen((prev) => (prev === null ? prev : (prev + dir + count) % count)),
    [count],
  );

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    function onKey(e: globalThis.KeyboardEvent) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      triggerRef.current?.focus();
    };
  }, [isOpen, close, go]);

  function trapTab(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key !== "Tab" || !dialogRef.current) return;
    const f = dialogRef.current.querySelectorAll<HTMLElement>("button");
    if (!f.length) return;
    const first = f[0];
    const last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  const current = open !== null ? flat[open] : null;

  return (
    <>
      {groups.map((group, gi) => {
        // Flat index where this group begins (groups are few; no mutable state).
        const start = groups
          .slice(0, gi)
          .reduce((sum, g) => sum + g.items.length, 0);
        return (
          <div key={group.name} className={gi === 0 ? "mt-16" : "mt-20"}>
            <div className="flex items-baseline justify-between border-b border-sand pb-4">
              <h3 className="font-serif text-2xl text-ink">{group.name}</h3>
              <span className="label">{group.items.length} finishes</span>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {group.items.map((f, i) => {
                const index = start + i;
                return (
                  <li key={`${group.name}-${f.code}`}>
                    <button
                      type="button"
                      onClick={(e) => {
                        triggerRef.current = e.currentTarget;
                        setOpen(index);
                      }}
                      aria-haspopup="dialog"
                      aria-label={`View ${f.name} (${f.code}) enlarged`}
                      className="group relative block aspect-square w-full overflow-hidden rounded-sm border border-black/10 bg-sand shadow-sm outline-none transition-transform duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-gold focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      {f.swatchUrl && (
                        <Image
                          src={f.swatchUrl}
                          alt={`${f.name} finish`}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                          unoptimized
                          loading="lazy"
                          className="object-cover"
                        />
                      )}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/15"
                      >
                        <span className="flex h-9 w-9 scale-90 items-center justify-center rounded-full border border-white/0 bg-ink/0 text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:border-gold group-hover:bg-ink/40 group-hover:opacity-100">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            aria-hidden
                          >
                            <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                          </svg>
                        </span>
                      </span>
                    </button>
                    <div className="mt-3">
                      <p className="text-sm font-medium text-ink">{f.name}</p>
                      <p className="text-xs uppercase tracking-[0.1em] text-taupe">
                        {f.code}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      {current !== null && open !== null && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${current.name} — enlarged`}
          onClick={close}
          onKeyDown={trapTab}
          className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-sm motion-safe:animate-[overlay-in_0.25s_ease]"
        >
          <div className="flex items-center justify-between px-6 py-5 sm:px-10">
            <span className="text-sm tracking-[0.2em] text-gold">
              {String(open + 1).padStart(2, "0")}
              <span className="text-white/40">
                {" "}
                / {String(count).padStart(2, "0")}
              </span>
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white/80 outline-none transition-colors hover:border-gold hover:text-gold focus-visible:border-gold focus-visible:text-gold"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-10 sm:px-20">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Previous finish"
              className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white/80 outline-none transition-colors hover:border-gold hover:text-gold focus-visible:border-gold focus-visible:text-gold sm:left-6"
            >
              <Chevron dir="left" />
            </button>

            <figure
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center"
            >
              <div className="relative aspect-square w-[78vw] max-w-md overflow-hidden rounded-sm border border-white/10 motion-safe:animate-[pop-in_0.35s_cubic-bezier(0.22,1,0.36,1)]">
                {current.swatchUrl && (
                  <Image
                    key={open}
                    src={current.swatchUrl}
                    alt={`${current.name} finish`}
                    fill
                    sizes="(max-width: 768px) 78vw, 28rem"
                    unoptimized
                    className="object-cover"
                  />
                )}
              </div>
              <figcaption className="mt-6 text-center">
                <h3 className="font-serif text-2xl text-white">
                  {current.name}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-gold">
                  {current.code}
                </p>
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Next finish"
              className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white/80 outline-none transition-colors hover:border-gold hover:text-gold focus-visible:border-gold focus-visible:text-gold sm:right-6"
            >
              <Chevron dir="right" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
