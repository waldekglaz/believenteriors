import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";
import { features, processSteps } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-white">
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
            <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-white/70 lg:mx-0">
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
          />
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
            <Reveal as="li" key={step.title} delay={i * 80} className="flex gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold font-serif text-lg text-gold">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
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

      {/* CTA */}
      <Section tone="ink" className="text-center">
        <Reveal>
          <p className="label">Let&apos;s begin</p>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl text-white sm:text-4xl">
            Ready to build something around you?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-white/70">
            Send us a photo of your space and a brief idea of what you&apos;re
            looking for, and we&apos;ll provide an initial estimate.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="gold">
              Get in touch
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/50">
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
