import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";
import ProcessCarousel from "@/components/ProcessCarousel";
import FeatureShowcase from "@/components/FeatureShowcase";
import { features, processSteps } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-white theme-dark">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-2 lg:gap-16 lg:py-32">
          <div className="text-center lg:text-left">
            <p className="label">Bespoke fitted furniture</p>
            <h1 className="mt-6 text-5xl leading-[1.05] sm:text-6xl">
              Believe Interiors
            </h1>
            <span
              className="mx-auto mt-8 block h-px w-20 bg-gold lg:mx-0"
              aria-hidden
            />
            <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-white/80 lg:mx-0">
              Quality craftsmanship. Timeless design. Built around you.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button href="/contact" variant="gold">
                Get in touch
              </Button>
              <Button href="/our-work" variant="ghost-light">
                View our work
              </Button>
            </div>
          </div>

          <Frame
            variant="dark"
            alt="A made-to-measure fitted wardrobe with handleless doors"
            label="Fitted Wardrobe"
            caption="Made to measure"
            priority
            className="aspect-[4/5] w-full lg:aspect-[3/4]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            src="/images/hero-image.png"
          />
        </div>
      </section>

      {/* Hero — Option B: full-width faded background image.
          Keep whichever hero you prefer and delete the other. */}
      <section className="relative isolate flex min-h-[88vh] items-center justify-center overflow-hidden bg-ink text-white theme-dark">
        <Image
          src="/images/hero-image.png"
          alt="A bespoke fitted dressing room with handleless doors and brushed-gold detailing"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Fade: even scrim for legibility, deepening to solid black at the
            bottom so the hero blends into the Process section below. */}
        <div aria-hidden className="absolute inset-0 bg-ink/70" />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink"
        />

        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:px-10">
          <p className="label">Bespoke fitted furniture</p>
          <h1 className="mt-6 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Believe Interiors
          </h1>
          <span className="mx-auto mt-8 block h-px w-20 bg-gold" aria-hidden />
          <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-white/80">
            Quality craftsmanship. Timeless design. Built around you.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="gold">
              Get in touch
            </Button>
            <Button href="/our-work" variant="ghost-light">
              View our work
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <Section tone="ink">
        <Reveal>
          <SectionHeading
            label="How it works"
            title="A simple, considered process"
            tone="light"
            align="center"
            intro="From first photo to final fit, every stage is clear — so you always know what happens next."
          />
        </Reveal>
        <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 80}
              className="flex gap-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold font-serif text-lg text-gold">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Process — Option B: interactive step carousel.
          Keep whichever version you prefer and delete the other. */}
      <Section tone="ink">
        <Reveal>
          <SectionHeading
            label="How it works"
            title="From quote to completion"
            tone="light"
            align="center"
            intro="Six clear stages — slide through the journey."
          />
        </Reveal>
        {/* perView controls cards shown on desktop: set to 1, 2, or 3. */}
        <ProcessCarousel perView={2} />
      </Section>

      {/* What's included */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            label="What's included"
            title="Considered in every detail"
            intro="Every Believe Interiors installation comes with these as standard — no upsells, no surprises."
          />
        </Reveal>
        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 70}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* What's included — Option B: interactive feature showcase.
          Keep whichever version you prefer and delete the other. */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            label="What's included"
            title="Explore the detail"
            intro="Select any feature to see what makes it part of every installation."
          />
        </Reveal>
        <FeatureShowcase />
      </Section>

      {/* CTA */}
      <Section tone="ink" className="text-center">
        <Reveal>
          <p className="label">Let&apos;s begin</p>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl text-white sm:text-4xl">
            Ready to build something around you?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-white/80">
            Send us a photo of your space and a brief idea of what you&apos;re
            looking for, and we&apos;ll provide an initial estimate.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="gold">
              Get in touch
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/70">
            Or explore the{" "}
            <Link href="/design-details" className="text-gold hover:underline">
              design details
            </Link>{" "}
            first.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
