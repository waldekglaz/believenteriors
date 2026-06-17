/**
 * Believe Interiors wordmark — a stacked, wide-tracked light sans-serif logo:
 *
 *      B E L I E V E
 *        INTERIORS
 *
 * Sizing scales from the container's font-size (the "BELIEVE" line is 1em),
 * so set `text-*` on the element to resize the whole mark. Decorative by
 * default — give the surrounding link/element an accessible name.
 *
 * `text-indent` matches the letter-spacing on each line to cancel the trailing
 * tracking gap, keeping both lines optically centred.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex select-none flex-col items-center font-sans font-light uppercase leading-none ${className}`}
    >
      <span className="tracking-[0.42em] [text-indent:0.42em]">Believe</span>
      <span className="mt-[0.45em] text-[0.34em] tracking-[0.55em] text-current/90 [text-indent:0.55em]">
        Interiors
      </span>
    </span>
  );
}
