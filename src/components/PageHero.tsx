import Image from "next/image";
import Button from "./Button";

/**
 * Full-width hero matching the home page. Pass `imageSrc` for a photo-backed
 * hero (faded for legibility); without one, a tasteful dark placeholder with a
 * gold vignette and faint panel lines is shown instead.
 */
export default function PageHero({
  label,
  title,
  subtitle,
  imageSrc,
  imageAlt = "",
  secondaryHref = "/kitchens",
  secondaryLabel = "Explore kitchens",
}: {
  label: string;
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="theme-dark relative isolate flex min-h-[68vh] items-center justify-center overflow-hidden bg-ink text-white">
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-ink/70" />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink"
          />
        </>
      ) : (
        <div aria-hidden className="absolute inset-0">
          {/* faint vertical panel lines evoking fitted furniture */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,.5) 0 1px, transparent 1px 12.5%)",
            }}
          />
          {/* soft gold vignette */}
          <div
            className="absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--color-gold) 0%, transparent 60%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
        </div>
      )}

      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:px-10">
        <p className="label">{label}</p>
        <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <span className="mx-auto mt-8 block h-px w-20 bg-gold" aria-hidden />
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/80">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact" variant="gold">
            Get in touch
          </Button>
          <Button href={secondaryHref} variant="ghost-light">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
