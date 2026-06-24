import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import Frame from "@/components/Frame";
import FeatureCard from "@/components/FeatureCard";
import GalleryLightbox from "@/components/GalleryLightbox";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { projects, type Feature } from "@/lib/data";

export const metadata: Metadata = {
  title: "Bespoke Kitchens",
  description:
    "Made-to-measure bespoke kitchens by Believe Interiors — handcrafted cabinetry, premium finishes and tailored storage, professionally installed.",
};

const highlights: Feature[] = [
  {
    icon: "ruler",
    title: "Made to measure",
    description:
      "Every run is built to the millimetre for your exact layout — no fillers, no compromise.",
  },
  {
    icon: "handle",
    title: "Doors & finishes",
    description:
      "From in-frame shaker to handleless slab, in a palette of matt, woodgrain and painted finishes.",
  },
  {
    icon: "softClose",
    title: "Soft-close throughout",
    description:
      "Premium soft-close hinges and runners on every door and drawer as standard.",
  },
];

const kitchens = projects.filter((p) => p.category === "Kitchens");

export default function KitchensPage() {
  return (
    <>
      <PageHero
        label="Bespoke kitchens"
        title="Kitchens, made to measure"
        subtitle="Designed around how you cook, gather and live — and built to last a lifetime."
        imageSrc="/images/kitchen-1.png"
        imageAlt="A bespoke handcrafted kitchen with an island"
        secondaryHref="/wardrobes"
        secondaryLabel="View wardrobes"
      />

      {/* Intro */}
      <Section tone="paper">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              label="Bespoke kitchens"
              title="The heart of the home"
              intro="A kitchen should feel effortless. We design and build yours around the way you actually use the space — then fit it with the precision of true cabinetmakers."
            />
            <p className="mt-6 leading-relaxed text-taupe">
              From the first sketch to the final handle, every detail is
              considered: cabinetry scribed flush to your walls, clever internal
              storage, and worktops and finishes chosen to work beautifully
              together for years to come.
            </p>
          </div>
          <Frame
            alt="A bespoke handcrafted kitchen with an island"
            label="Bespoke Kitchen"
            caption="Handcrafted"
            className="aspect-[4/3] w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
            src="/images/kitchen-1.png"
          />
        </div>
      </Section>

      {/* Highlights */}
      <Section tone="cream">
        <SectionHeading
          label="What sets them apart"
          title="Considered throughout"
          align="center"
          intro="The details that make a Believe Interiors kitchen a pleasure to live with."
        />
        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 70}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section tone="paper">
        <SectionHeading
          label="Our kitchens"
          title="A selection of recent kitchens"
          align="center"
          intro="Select any image to view it enlarged, then step through the collection."
          className="mb-14"
        />
        <GalleryLightbox items={kitchens} />
      </Section>

      {/* CTA */}
      <Section tone="ink" className="text-center">
        <h2 className="mx-auto max-w-2xl text-3xl text-white sm:text-4xl">
          Let&apos;s design your kitchen
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
      </Section>
    </>
  );
}
