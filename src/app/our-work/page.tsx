import type { Metadata } from "next";
import Section from "@/components/Section";
import Gallery from "@/components/Gallery";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "A selection of bespoke fitted wardrobes, kitchens, studies and media walls designed and installed by Believe Interiors.",
};

export default function OurWorkPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:px-10 sm:py-28">
          <p className="label">Our work</p>
          <h1 className="mt-6 text-4xl sm:text-5xl">Recent projects</h1>
          <span className="mx-auto mt-8 block h-px w-20 bg-gold" aria-hidden />
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            Every piece is made to measure for the room it lives in. Browse a
            selection of recent installations across the home.
          </p>
        </div>
      </section>

      <Section tone="paper">
        <Gallery />
      </Section>

      {/* Testimonial */}
      <Section tone="cream" className="text-center">
        <figure className="mx-auto max-w-3xl">
          <span className="font-serif text-5xl leading-none text-gold" aria-hidden>
            &ldquo;
          </span>
          <blockquote className="mt-4 font-serif text-2xl leading-relaxed text-ink sm:text-3xl">
            From the first visit to the final fit, the craftsmanship was
            faultless. Our alcoves look like they were always meant to be there.
          </blockquote>
          <figcaption className="mt-8 text-sm uppercase tracking-[0.1em] text-taupe">
            — Sarah &amp; James, Surrey
          </figcaption>
        </figure>
        <div className="mt-12">
          <Button href="/contact" variant="ghost-dark">
            Start your project
          </Button>
        </div>
      </Section>
    </>
  );
}
