import type { Metadata } from "next";
import Icon, { type IconName } from "@/components/Icons";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Believe Interiors by email, phone or WhatsApp, or follow us on Instagram and Facebook.",
};

type Method = {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

const methods: Method[] = [
  {
    icon: "email",
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: "phone",
    label: "Phone",
    value: contactInfo.phone,
    href: contactInfo.phoneHref,
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: contactInfo.whatsapp,
    href: contactInfo.whatsappHref,
    external: true,
  },
];

const socials: { icon: IconName; label: string; href: string }[] = [
  { icon: "instagram", label: "Instagram", href: contactInfo.instagramHref },
  { icon: "facebook", label: "Facebook", href: contactInfo.facebookHref },
];

export default function ContactPage() {
  return (
    <section className="theme-dark flex min-h-[calc(100vh-4rem)] items-center bg-ink px-6 py-24 text-white sm:min-h-[calc(100vh-5rem)] sm:px-10">
      <div className="mx-auto w-full max-w-4xl text-center">
        <p className="label">Contact</p>
        <h1 className="mt-6 text-4xl leading-tight sm:text-5xl">
          Let&apos;s create something
        </h1>
        <span className="mx-auto mt-8 block h-px w-20 bg-gold" aria-hidden />
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/80">
          Send us a photo of your space and a brief idea of what you&apos;re
          looking for — by email or WhatsApp — and we&apos;ll provide an initial
          estimate.
        </p>

        {/* Primary contact methods */}
        <ul className="mx-auto mt-16 grid max-w-3xl gap-5 sm:grid-cols-3">
          {methods.map((m) => (
            <li key={m.label}>
              <a
                href={m.href}
                {...(m.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full flex-col items-center border border-white/10 px-6 py-10 outline-none transition-colors duration-300 hover:border-gold focus-visible:border-gold"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                  <Icon name={m.icon} className="h-6 w-6" />
                </span>
                <span className="label mt-6">{m.label}</span>
                <span className="mt-2 text-sm text-white/80 transition-colors duration-300 group-hover:text-white">
                  {m.value}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Social */}
        <div className="mt-16">
          <p className="label">Follow us</p>
          <ul className="mt-6 flex items-center justify-center gap-5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white/80 outline-none transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink focus-visible:border-gold focus-visible:bg-gold focus-visible:text-ink"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
