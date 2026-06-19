"use client";

import { useState } from "react";
import Icon from "./Icons";
import { features } from "@/lib/data";

export default function FeatureShowcase() {
  const [active, setActive] = useState(0);
  const current = features[active];

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-[20rem_1fr] lg:gap-16">
      {/* Selectable index */}
      <ul className="border-t border-sand lg:border-t-0">
        {features.map((feature, idx) => {
          const on = idx === active;
          return (
            <li key={feature.title}>
              <button
                type="button"
                onClick={() => setActive(idx)}
                aria-current={on}
                className={`flex w-full items-center gap-4 border-b border-sand py-4 text-left transition-colors ${
                  on ? "text-ink" : "text-taupe hover:text-ink"
                }`}
              >
                <span
                  className={`font-serif text-sm tabular-nums transition-colors ${
                    on ? "text-gold-ink" : "text-taupe/60"
                  }`}
                >
                  0{idx + 1}
                </span>
                <span
                  className={`flex-1 text-base ${on ? "font-medium" : "font-normal"}`}
                >
                  {feature.title}
                </span>
                <span
                  aria-hidden
                  className={`h-px bg-gold transition-all duration-300 ${
                    on ? "w-6 opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>

      {/* Active feature panel */}
      <div
        key={active}
        className="flex flex-col justify-center rounded-sm bg-cream p-10 animate-[fade-up_0.4s_ease] sm:p-14"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 text-gold">
          <Icon name={current.icon} className="h-7 w-7" />
        </span>
        <h3 className="mt-8 font-serif text-2xl text-ink sm:text-3xl">
          {current.title}
        </h3>
        <span className="mt-6 block h-px w-12 bg-gold" aria-hidden />
        <p className="mt-6 max-w-md leading-relaxed text-taupe">
          {current.description}
        </p>
      </div>
    </div>
  );
}
