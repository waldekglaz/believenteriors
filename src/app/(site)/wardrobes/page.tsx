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
  title: "Fitted Wardrobes",
  description:
    "Bespoke fitted wardrobes and walk-in dressing rooms by Believe Interiors — scribed to fit, with tailored interiors and a flawless finish.",
};

const highlights: Feature[] = [
  {
    icon: "scribe",
    title: "Scribed to fit",
    description:
      "Sloping ceilings, chimney breasts and awkward corners handled flush, floor to ceiling.",
  },
  {
    icon: "shelf",
    title: "Tailored interiors",
    description:
      "Hanging rails, drawers, shelving and shoe racks configured around your wardrobe.",
  },
  {
    icon: "durable",
    title: "Built to last",
    description:
      "Solid carcasses and quality hardware designed to perform beautifully for decades.",
  },
];

// Six tiles: four wardrobes plus the two media walls (no separate page).
const wardrobes = [
  ...projects.filter((p) => p.category === "Wardrobes").slice(0, 4),
  ...projects.filter((p) =>
    ["Media wall with fireplace", "Cinema media wall"].includes(p.title),
  ),
];

export default function WardrobesPage() {
  return (
    <>
      <PageHero
        label="Fitted wardrobes"
        title="Wardrobes & dressing rooms"
        subtitle="From floor-to-ceiling wardrobes and walk-in dressing rooms to bespoke media walls, made to measure for your space."
        imageSrc="/images/tv-wall.webp"
        imageAlt="A bespoke fitted dressing room with handleless doors and brushed-gold detailing"
        secondaryHref="/kitchens"
        secondaryLabel="View kitchens"
      />

      {/* Intro */}
      <Section tone="paper">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Frame
            alt="A floor-to-ceiling fitted wardrobe"
            label="Fitted Wardrobe"
            caption="Made to measure"
            className="aspect-[4/3] w-full lg:order-last"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div>
            <SectionHeading
              label="Fitted wardrobes"
              title="Storage, beautifully resolved"
              intro="Reclaim every inch. We design fitted wardrobes that wrap seamlessly into your room — using the full height and depth, with nothing wasted."
            />
            <p className="mt-6 leading-relaxed text-taupe">
              Choose your doors, finishes and handles, then tailor the inside to
              suit your wardrobe — hanging, drawers, shelving and shoe storage,
              all scribed flush to your walls and ceilings for a built-in look.
              The same fitted craftsmanship extends to bespoke media walls and
              living-room units, designed around your TV, storage and the way
              you relax.
            </p>
          </div>
        </div>
      </Section>

      {/* Highlights */}
      <Section tone="cream">
        <SectionHeading
          label="What sets them apart"
          title="Considered throughout"
          align="center"
          intro="The details that make a Believe Interiors wardrobe a joy to use every day."
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
          label="Our wardrobes"
          title="Recent wardrobes & media walls"
          align="center"
          intro="Select any image to view it enlarged, then step through the collection."
          className="mb-14"
        />
        <GalleryLightbox items={wardrobes} />
      </Section>

      {/* CTA */}
      <Section tone="ink" className="text-center">
        <h2 className="mx-auto max-w-2xl text-3xl text-white sm:text-4xl">
          Let&apos;s design your wardrobe
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
