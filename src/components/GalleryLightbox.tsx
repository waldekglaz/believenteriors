"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import Frame from "./Frame";
import { projects as allProjects, type Project } from "@/lib/data";

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

export default function GalleryLightbox({
  items = allProjects,
}: {
  /** Projects to display; defaults to all. Pass a filtered list per page. */
  items?: Project[];
}) {
  const projects = items;
  const [open, setOpen] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const isOpen = open !== null;
  const count = projects.length;

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) =>
      setOpen((prev) => (prev === null ? prev : (prev + dir + count) % count)),
    [count],
  );

  // Scroll lock, global keys, and focus return — only while open.
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

  // Keep Tab focus within the dialog controls.
  function trapTab(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key !== "Tab" || !dialogRef.current) return;
    const focusable = dialogRef.current.querySelectorAll<HTMLElement>("button");
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  const current = open !== null ? projects[open] : null;

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <li key={project.title}>
            <button
              type="button"
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setOpen(idx);
              }}
              aria-haspopup="dialog"
              aria-label={`Expand image: ${project.title}`}
              className="group relative block w-full overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              <Frame
                src={project.src}
                alt={project.title}
                className="aspect-[4/5] w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover: wash, gold ring, and an expand cue */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 ring-1 ring-transparent transition-all duration-300 group-hover:bg-ink/25 group-hover:ring-gold"
              >
                <span className="flex h-12 w-12 scale-90 items-center justify-center rounded-full border border-gold/0 text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:border-gold group-hover:opacity-100">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    aria-hidden
                  >
                    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                  </svg>
                </span>
              </span>
              {/* Caption */}
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-4 pt-10 text-left">
                <span className="block text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold">
                  {project.category}
                </span>
                <span className="mt-0.5 block font-serif text-base text-white">
                  {project.title}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current !== null && open !== null && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} — enlarged`}
          onClick={close}
          onKeyDown={trapTab}
          className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-sm motion-safe:animate-[overlay-in_0.25s_ease]"
        >
          {/* Top bar */}
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

          {/* Stage */}
          <div className="relative flex flex-1 items-center justify-center px-4 pb-10 sm:px-20">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white/80 outline-none transition-colors hover:border-gold hover:text-gold focus-visible:border-gold focus-visible:text-gold sm:left-6"
            >
              <Chevron dir="left" />
            </button>

            <figure
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-full w-full max-w-5xl flex-col items-center"
            >
              <div className="relative w-full motion-safe:animate-[pop-in_0.35s_cubic-bezier(0.22,1,0.36,1)]">
                <Frame
                  key={open}
                  src={current.src}
                  alt={current.title}
                  variant="dark"
                  fit="contain"
                  priority
                  className="h-[60vh] max-h-[70vh] w-full sm:h-[64vh]"
                  sizes="(max-width: 1024px) 92vw, 1024px"
                />
              </div>
              <figcaption className="mt-6 max-w-xl text-center">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold">
                  {current.category}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-white">
                  {current.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {current.blurb}
                </p>
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Next image"
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
