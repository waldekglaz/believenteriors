import type { ReactNode } from "react";

type Align = "left" | "center";
type Tone = "dark" | "light";

export default function SectionHeading({
  label,
  title,
  intro,
  align = "left",
  tone = "dark",
  className = "",
}: {
  label?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: Align;
  /** "light" = on a dark background (uses light text) */
  tone?: Tone;
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {label && <p className="label">{label}</p>}
      <h2
        className={`mt-4 text-3xl sm:text-4xl ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <span
        className={`mt-6 block h-px w-16 bg-gold ${isCenter ? "mx-auto" : ""}`}
        aria-hidden
      />
      {intro && (
        <p
          className={`mt-6 text-base leading-relaxed ${
            tone === "light" ? "text-white/70" : "text-taupe"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
