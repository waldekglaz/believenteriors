import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icons";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Believe Interiors. Send a photo of your space and a brief idea, and we'll provide an initial estimate.",
};

export default function ContactPage() {
  return (
    <div className="grid lg:grid-cols-2">
      {/* Form — dark */}
      <section className="bg-ink px-6 py-20 text-white theme-dark sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto w-full max-w-xl lg:ml-auto lg:mr-0">
          <p className="label">Contact</p>
          <h1 className="mt-6 text-4xl sm:text-5xl">Get in touch</h1>
          <span className="mt-8 block h-px w-20 bg-gold" aria-hidden />
          <p className="mt-8 leading-relaxed text-white/80">
            Send us a message with a photo of your space and a brief idea of
            what you&apos;re looking for, and we&apos;ll provide an initial
            estimate.
          </p>
          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Details — light */}
      <section className="bg-cream px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto w-full max-w-xl lg:mr-auto lg:ml-0">
          <p className="label">Details</p>
          <h2 className="mt-6 text-3xl text-ink sm:text-4xl">
            We&apos;d love to hear from you
          </h2>
          <span className="mt-8 block h-px w-20 bg-gold" aria-hidden />

          <ul className="mt-12 space-y-8">
            <li className="flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/60 text-gold">
                <Icon name="email" className="h-5 w-5" />
              </span>
              <div>
                <p className="label">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="mt-1 block text-lg text-ink transition-colors hover:text-gold"
                >
                  {contactInfo.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/60 text-gold">
                <Icon name="phone" className="h-5 w-5" />
              </span>
              <div>
                <p className="label">Phone</p>
                <a
                  href={contactInfo.phoneHref}
                  className="mt-1 block text-lg text-ink transition-colors hover:text-gold"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/60 text-gold">
                <Icon name="whatsapp" className="h-5 w-5" />
              </span>
              <div>
                <p className="label">WhatsApp</p>
                <a
                  href={contactInfo.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-lg text-ink transition-colors hover:text-gold"
                >
                  {contactInfo.whatsapp}
                </a>
              </div>
            </li>
          </ul>

          <div className="mt-12 border-t border-sand pt-8">
            <p className="text-sm leading-relaxed text-taupe">
              Prefer to see our work first? Browse{" "}
              <a href="/our-work" className="text-ink underline-offset-4 hover:underline">
                recent projects
              </a>{" "}
              or explore the{" "}
              <a
                href="/design-details"
                className="text-ink underline-offset-4 hover:underline"
              >
                design details
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
