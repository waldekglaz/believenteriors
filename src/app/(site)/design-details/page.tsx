import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import ColorSwatch from "@/components/ColorSwatch";
import DoorIllustration from "@/components/DoorIllustration";
import {
  constructionDetails,
  standardFinishes,
  premiumFinishes,
  shakerDoors,
  slabDoors,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Design Details",
  description:
    "Construction, finishes and door designs — the craftsmanship behind every Believe Interiors installation.",
};

export default function DesignDetailsPage() {
  return (
    <>
      <section className="bg-ink text-white theme-dark">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:px-10 sm:py-28">
          <p className="label">Design details</p>
          <h1 className="mt-6 text-4xl sm:text-5xl">Crafted to the millimetre</h1>
          <span className="mx-auto mt-8 block h-px w-20 bg-gold" aria-hidden />
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/80">
            Explore the construction, finishes and door styles that go into
            furniture built to last a lifetime.
          </p>
        </div>
      </section>

      {/* Construction & Finish */}
      <Section tone="paper">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              label="Construction & finish"
              title="Built strong, finished beautifully"
              intro="Solid carcasses, precision-machined doors and premium hardware — the parts you don't see matter just as much as the parts you do."
            />
            <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {constructionDetails.map((detail, i) => (
                <Reveal key={detail.title} delay={i * 60} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/60 text-gold">
                    <Icon name={detail.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-ink">
                      {detail.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-taupe">
                      {detail.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:sticky lg:top-28">
            <Frame
              alt="Close-up of a soft-close hinge fitted to a cabinet door"
              label="Premium hardware"
              caption="Blum & Hettich"
              className="aspect-[3/4] w-full"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            <Frame
              alt="Adjustable shelving inside a fitted cabinet"
              label="Adjustable shelving"
              caption="Reconfigurable"
              className="aspect-[3/4] w-full sm:mt-12"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
      </Section>

      {/* Carcass finish options */}
      <Section tone="cream">
        <SectionHeading
          label="Carcass finish options"
          title="Choose your colour & texture"
          align="center"
          intro="From smooth matt to woodgrain and textured finishes — a palette to suit every room."
        />

        <div className="mt-16">
          <div className="flex items-baseline justify-between border-b border-sand pb-4">
            <h3 className="font-serif text-2xl text-ink">ST9 Smooth Matt</h3>
            <span className="label">Standard range</span>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {standardFinishes.map((s) => (
              <ColorSwatch key={`${s.code}-${s.name}`} {...s} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-baseline justify-between border-b border-sand pb-4">
            <h3 className="font-serif text-2xl text-ink">
              Woodgrain &amp; Textured
            </h3>
            <span className="label">Premium range</span>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {premiumFinishes.map((s) => (
              <ColorSwatch key={`${s.code}-${s.name}`} {...s} />
            ))}
          </div>
        </div>
      </Section>

      {/* Door designs */}
      <Section tone="paper">
        <SectionHeading
          label="Door designs"
          title="Shaker door styles"
          align="center"
          intro="Five framed door designs, each made to order. Mix rail placement to suit your interior."
        />
        <ul className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {shakerDoors.map((door, i) => (
            <Reveal as="li" key={door.name} delay={i * 60} className="text-center">
              <div className="mx-auto w-full max-w-[140px]">
                <DoorIllustration layout={door.layout} className="h-auto w-full" />
              </div>
              <h3 className="mt-6 text-base font-medium text-ink">{door.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-taupe">
                {door.description}
              </p>
            </Reveal>
          ))}
        </ul>

        {/* Beaded upgrade — before / after */}
        <div className="mt-20 grid items-center gap-10 rounded-sm bg-cream p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="label">Optional upgrade</p>
            <h3 className="mt-4 font-serif text-2xl text-ink sm:text-3xl">
              Beaded doors
            </h3>
            <span className="mt-6 block h-px w-16 bg-gold" aria-hidden />
            <p className="mt-6 text-sm leading-relaxed text-taupe">
              Add a fine decorative bead to the inner edge of any shaker frame
              for a more traditional, detailed look. A small upgrade that makes
              a striking difference up close.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <figure>
              <Frame
                alt="A standard shaker door without beading"
                label="Standard"
                caption="Before"
                className="aspect-square w-full"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </figure>
            <figure>
              <Frame
                alt="A shaker door with a decorative beaded inner edge"
                label="Beaded"
                caption="After"
                className="aspect-square w-full"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </figure>
          </div>
        </div>
      </Section>

      {/* Slab doors */}
      <Section tone="ink">
        <SectionHeading
          label="Slab doors"
          title="Modern, handleless designs"
          tone="light"
          align="center"
          intro="For a sleek, contemporary look — flat slab doors with integrated pulls or slimline handles."
        />
        <ul className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {slabDoors.map((door, i) => (
            <Reveal as="li" key={door.name} delay={i * 70} className="text-center">
              <div className="mx-auto w-full max-w-[150px]">
                <DoorIllustration layout={door.layout} className="h-auto w-full" />
              </div>
              <h3 className="mt-6 text-base font-medium text-white">
                {door.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {door.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
