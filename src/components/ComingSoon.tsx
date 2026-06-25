import Image from "next/image";
import Logo from "@/components/Logo";
import NotifyForm from "@/components/NotifyForm";
import { contactInfo } from "@/lib/data";

export default function ComingSoon() {
  const year = new Date().getFullYear();

  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-6 py-16 text-center text-white theme-dark">
      {/* Faded background image */}
      <Image
        src="/images/hero-image.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-ink/85" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink via-ink/65 to-ink"
      />
      {/* Soft gold vignette glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-0 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-gold) 0%, transparent 60%)",
        }}
      />

      {/* Thin framing border */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-4 border border-white/10 sm:inset-6"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-xl motion-safe:animate-[fade-up_0.9s_cubic-bezier(0.22,1,0.36,1)_both]">
        <Logo className="mx-auto text-3xl sm:text-4xl" />

        <p className="label mt-14">Something beautiful is on its way</p>

        <h1 className="mt-6 font-serif text-4xl leading-tight tracking-[0.04em] sm:text-6xl">
          Coming Soon
        </h1>

        <span className="mx-auto mt-8 block h-px w-20 bg-gold" aria-hidden />

        <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-white/80">
          We&apos;re crafting a new home for our bespoke fitted furniture —
          quality craftsmanship, timeless design, built around you. Leave your
          email and be the first through the door.
        </p>

        <div className="mt-10">
          <NotifyForm />
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-2 text-sm text-white/75 sm:flex-row sm:gap-8">
          <a
            href={`mailto:${contactInfo.email}`}
            className="transition-colors hover:text-gold"
          >
            {contactInfo.email}
          </a>
          <span
            aria-hidden
            className="hidden h-1 w-1 rounded-full bg-gold/60 sm:block"
          />
          <a
            href={contactInfo.phoneHref}
            className="transition-colors hover:text-gold"
          >
            {contactInfo.phone}
          </a>
        </div>
      </div>

      {/* Footer line */}
      <p className="relative z-10 mt-16 text-xs uppercase tracking-[0.18em] text-white/65">
        © {year} Believe Interiors · Launching {year}
      </p>
    </main>
  );
}
