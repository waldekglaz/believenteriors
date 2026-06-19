import Image from "next/image";

type Variant = "light" | "dark";

// Deterministic subtle tint per label so a grid of placeholders has gentle variety.
function tint(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 360;
  return h;
}

/**
 * A picture frame. Pass `src` to render an optimised real photo; otherwise a
 * styled placeholder is shown (neutral tones + faint panel lines evoking
 * fitted-furniture doors). Swap in photography by setting `src` in the data.
 */
export default function Frame({
  src,
  alt,
  label,
  caption,
  variant = "light",
  className = "",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
  fit = "cover",
}: {
  src?: string;
  alt: string;
  /** large overlaid label used on placeholders */
  label?: string;
  /** small uppercase caption used on placeholders */
  caption?: string;
  variant?: Variant;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** "contain" shows the whole image (used by the lightbox); defaults to cover */
  fit?: "cover" | "contain";
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={fit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>
    );
  }

  const hue = tint(label ?? alt);
  const isDark = variant === "dark";

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background: isDark
          ? `linear-gradient(135deg, hsl(${hue} 8% 14%), hsl(${hue} 10% 22%))`
          : `linear-gradient(135deg, hsl(${hue} 14% 90%), hsl(${hue} 12% 80%))`,
      }}
    >
      {/* faint vertical panel lines */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${
            isDark ? "rgba(255,255,255,.5)" : "rgba(0,0,0,.4)"
          } 0 1px, transparent 1px 33.33%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r border-t border-gold/70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b border-l border-gold/70"
      />
      <div className="relative px-6 text-center">
        {label && (
          <p
            className={`font-serif text-xl tracking-[0.05em] ${
              isDark ? "text-white/90" : "text-umber"
            }`}
          >
            {label}
          </p>
        )}
        {caption && (
          <p className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
