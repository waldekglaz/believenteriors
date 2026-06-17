"use client";

import { useState } from "react";
import Frame from "./Frame";
import { projects, type GalleryCategory } from "@/lib/data";

const filters: ("All" | GalleryCategory)[] = [
  "All",
  "Wardrobes",
  "Kitchens",
  "Studies",
  "Media walls",
];

export default function Gallery() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="flex flex-wrap justify-center gap-2 sm:gap-3"
      >
        {filters.map((f) => {
          const selected = active === f;
          return (
            <button
              key={f}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(f)}
              className={`border px-5 py-2 text-xs uppercase tracking-[0.1em] transition-colors duration-300 ${
                selected
                  ? "border-gold bg-gold text-ink"
                  : "border-sand text-taupe hover:border-gold hover:text-ink"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.title} className="group">
            <div className="relative">
              <Frame
                src={p.src}
                alt={p.title}
                label={p.title}
                caption={p.category}
                className="aspect-[4/5] w-full"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* hover overlay + gold border */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-transparent transition-all duration-300 group-hover:bg-ink/5 group-hover:ring-gold" />
            </div>
            <div className="mt-4">
              <p className="label">{p.category}</p>
              <h3 className="mt-1 font-serif text-lg text-ink">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-taupe">
                {p.blurb}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
