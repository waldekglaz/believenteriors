import Link from "next/link";
import { navLinks } from "@/lib/nav";
import Logo from "./Logo";
import Icon from "./Icons";
import { contactInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-ink text-white theme-dark">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-10 md:grid-cols-3">
        <div>
          <Logo className="text-2xl" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/75">
            Quality craftsmanship. Timeless design. Built around you. Made-to-measure
            fitted furniture, professionally installed.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="label">Explore</p>
          <ul className="mt-5 space-y-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-white/80 transition-colors hover:text-gold"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="label">Get in touch</p>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-3 transition-colors hover:text-gold"
              >
                <Icon name="email" className="h-4 w-4 text-gold" />
                {contactInfo.email}
              </a>
            </li>
            <li>
              <a
                href={contactInfo.phoneHref}
                className="inline-flex items-center gap-3 transition-colors hover:text-gold"
              >
                <Icon name="phone" className="h-4 w-4 text-gold" />
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 transition-colors hover:text-gold"
              >
                <Icon name="whatsapp" className="h-4 w-4 text-gold" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>© {year} Believe Interiors. All rights reserved.</p>
          <p>Made to measure · Professionally installed · Built to last</p>
        </div>
      </div>
    </footer>
  );
}
