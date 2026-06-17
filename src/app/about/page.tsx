import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Believe Interiors — our values, craftsmanship and approach to bespoke fitted furniture.",
};

const values = [
  {
    title: "Craftsmanship first",
    body: "We're makers before we're anything else. Every joint, edge and finish is held to a standard we'd be happy to live with ourselves — because more often than not, the work outlasts the trends around it.",
  },
  {
    title: "Designed around you",
    body: "No two homes are the same, so nothing we build is off-the-shelf. We measure, listen and design around how you actually live — the awkward alcove, the sloping ceiling, the way the light falls.",
  },
  {
    title: "Honest, end to end",
    body: "Clear quotes, a fair deposit, and a tidy site you're glad to come home to. We tell you what happens at every stage, and we finish what we start — on time and on budget.",
  },
];

const milestones = [
  { year: "Quote", text: "Photos and dimensions in, an estimate back to you." },
  { year: "Design", text: "A site visit to measure, refine and confirm." },
  { year: "Build", text: "Made to measure in the workshop, fitted with care." },
  { year: "Live", text: "Furniture that works as hard as your home does." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:px-10 sm:py-32">
          <p className="label">About us</p>
          <h1 className="mt-6 text-5xl sm:text-6xl">Why Believe</h1>
          <span className="mx-auto mt-8 block h-px w-20 bg-gold" aria-hidden />
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            We build bespoke fitted furniture that feels like it was always part
            of the house — because it&apos;s made for one room, and one room
            only: yours.
          </p>
        </div>
      </section>

      {/* Intro split */}
      <Section tone="paper">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Frame
            alt="A craftsman fitting a bespoke wardrobe"
            label="Our workshop"
            caption="Craft & care"
            className="aspect-[4/3] w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div>
            <h2 className="text-3xl text-ink sm:text-4xl">
              A small team, a high bar
            </h2>
            <span className="mt-6 block h-px w-16 bg-gold" aria-hidden />
            <p className="mt-6 leading-relaxed text-taupe">
              Believe Interiors was built on a simple idea: fitted furniture
              should be made properly, by people who care, and fitted by the
              same hands that made it. We keep the team small and the standards
              high so nothing slips between the cracks.
            </p>
            <p className="mt-4 leading-relaxed text-taupe">
              From wardrobes and dressing rooms to kitchens, studies and media
              walls, we treat every commission as a one-off — because it is.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <p className="font-serif text-4xl text-gold">0{i + 1}</p>
              <h3 className="mt-4 font-serif text-xl text-ink">{v.title}</h3>
              <span className="mt-5 block h-px w-12 bg-gold" aria-hidden />
              <p className="mt-5 text-sm leading-relaxed text-taupe">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Approach timeline */}
      <Section tone="paper">
        <h2 className="max-w-2xl text-3xl text-ink sm:text-4xl">
          How we work, in four steps
        </h2>
        <span className="mt-6 block h-px w-16 bg-gold" aria-hidden />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-sm border border-sand bg-sand sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((m) => (
            <li key={m.year} className="bg-paper p-8">
              <p className="label">{m.year}</p>
              <p className="mt-4 text-sm leading-relaxed text-taupe">{m.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* CTA */}
      <Section tone="ink" className="text-center">
        <h2 className="mx-auto max-w-2xl text-3xl text-white sm:text-4xl">
          Let&apos;s build something around you
        </h2>
        <div className="mt-10">
          <Button href="/contact" variant="gold">
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  );
}
