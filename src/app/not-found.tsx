import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="theme-dark flex min-h-screen flex-col items-center justify-center bg-ink px-6 py-24 text-center text-white">
      <p className="label">Error 404</p>
      <h1 className="mt-6 font-serif text-5xl tracking-[0.04em] sm:text-6xl">
        Page not found
      </h1>
      <span className="mx-auto mt-8 block h-px w-20 bg-gold" aria-hidden />
      <p className="mx-auto mt-8 max-w-md text-white/80">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
        get you back on track.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Button href="/" variant="gold">
          Back to home
        </Button>
        <Button href="/contact" variant="ghost-light">
          Get in touch
        </Button>
      </div>
      <nav aria-label="Helpful links" className="mt-12 text-sm text-white/60">
        <Link href="/kitchens" className="transition-colors hover:text-gold">
          Kitchens
        </Link>
        <span className="px-3 text-white/30" aria-hidden>
          ·
        </span>
        <Link href="/wardrobes" className="transition-colors hover:text-gold">
          Wardrobes
        </Link>
        <span className="px-3 text-white/30" aria-hidden>
          ·
        </span>
        <Link href="/design-details" className="transition-colors hover:text-gold">
          Design details
        </Link>
      </nav>
    </main>
  );
}
