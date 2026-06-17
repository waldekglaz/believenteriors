import type { FinishSwatch } from "@/lib/data";

export default function ColorSwatch({ name, code, hex }: FinishSwatch) {
  return (
    <figure className="group">
      <div
        className="aspect-square w-full rounded-sm border border-black/10 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:ring-1 group-hover:ring-gold"
        style={{ backgroundColor: hex }}
      />
      <figcaption className="mt-3">
        <p className="text-sm font-medium text-ink">{name}</p>
        <p className="text-xs uppercase tracking-[0.1em] text-taupe">{code}</p>
      </figcaption>
    </figure>
  );
}
