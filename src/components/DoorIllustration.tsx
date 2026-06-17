import type { DoorStyle } from "@/lib/data";

type Rect = { x: number; y: number; w: number; h: number };

// Inner field of the door: x 20→80, y 14→186.
function panels(layout: DoorStyle["layout"]): Rect[] {
  switch (layout) {
    case "single":
      return [{ x: 20, y: 14, w: 60, h: 172 }];
    case "centred":
      return [
        { x: 20, y: 14, w: 60, h: 82 },
        { x: 20, y: 104, w: 60, h: 82 },
      ];
    case "lower":
      return [
        { x: 20, y: 14, w: 60, h: 122 },
        { x: 20, y: 144, w: 60, h: 42 },
      ];
    case "equal":
      return [
        { x: 20, y: 14, w: 60, h: 52 },
        { x: 20, y: 74, w: 60, h: 52 },
        { x: 20, y: 134, w: 60, h: 52 },
      ];
    case "topBottom":
      return [
        { x: 20, y: 14, w: 60, h: 48 },
        { x: 20, y: 70, w: 60, h: 60 },
        { x: 20, y: 138, w: 60, h: 48 },
      ];
    case "slab":
    default:
      return [];
  }
}

export default function DoorIllustration({
  layout,
  className = "",
}: {
  layout: DoorStyle["layout"];
  className?: string;
}) {
  const isSlab = layout === "slab";
  return (
    <svg
      viewBox="0 0 100 200"
      className={className}
      role="img"
      aria-hidden
      fill="none"
    >
      {/* Door outer */}
      <rect
        x="6"
        y="2"
        width="88"
        height="196"
        rx="1.5"
        className="fill-cream stroke-umber"
        strokeWidth="1.5"
      />
      {/* Shaker panels (recessed look) */}
      {panels(layout).map((p, i) => (
        <rect
          key={i}
          x={p.x}
          y={p.y}
          width={p.w}
          height={p.h}
          rx="1"
          className="fill-paper stroke-taupe"
          strokeWidth="1"
        />
      ))}
      {/* Handle / J-pull */}
      {isSlab ? (
        <line
          x1="78"
          y1="10"
          x2="78"
          y2="40"
          className="stroke-gold"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ) : (
        <circle cx="74" cy="100" r="2.4" className="fill-gold" />
      )}
    </svg>
  );
}
