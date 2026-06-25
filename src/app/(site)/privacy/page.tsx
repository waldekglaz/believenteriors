import type { Metadata } from "next";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Believe Interiors collects, uses and protects your personal data under UK GDPR.",
};

// Update this whenever the policy text changes.
const LAST_UPDATED = "25 June 2026";

// ---------------------------------------------------------------------------
// CLIENT TO COMPLETE: if Believe Interiors trades as a limited company, add the
// registered company name, company number and registered office address in the
// "Who we are" section below. If it's a sole trader, the current wording is fine.
// ---------------------------------------------------------------------------

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 font-serif text-2xl text-ink first:mt-0">{children}</h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 leading-relaxed text-taupe">{children}</p>;
}

export default function PrivacyPage() {
  return (
    <>
      <section className="theme-dark bg-ink text-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-10 sm:py-28">
          <p className="label">Legal</p>
          <h1 className="mt-6 text-4xl sm:text-5xl">Privacy Policy</h1>
          <span className="mx-auto mt-8 block h-px w-20 bg-gold" aria-hidden />
          <p className="mt-8 text-sm uppercase tracking-[0.1em] text-white/65">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="bg-paper px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <P>
            This policy explains how Believe Interiors (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects and uses your personal
            data when you contact us or use this website, and your rights under
            UK data protection law (the UK GDPR and the Data Protection Act
            2018).
          </P>

          <H2>Who we are</H2>
          <P>
            Believe Interiors is the data controller responsible for your
            personal data. You can reach us at{" "}
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-gold-ink underline-offset-4 hover:underline"
            >
              {contactInfo.email}
            </a>{" "}
            or {contactInfo.phone}.
          </P>

          <H2>What we collect</H2>
          <P>
            We only collect what you choose to send us. When you make an enquiry
            by email, phone, WhatsApp or social media, that may include:
          </P>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-taupe">
            <li>
              Your name and contact details (email address and/or phone number);
            </li>
            <li>
              Details about your project, your home and the work you&apos;re
              considering;
            </li>
            <li>Any photos of your space that you choose to share with us.</li>
          </ul>
          <P>
            This website does not use cookies, analytics or tracking, and it has
            no forms that submit data. Like any website, our hosting provider
            automatically records limited technical information (such as your IP
            address and browser type) in server logs to keep the site secure and
            running.
          </P>

          <H2>How we use your information &amp; our lawful basis</H2>
          <P>We use the information you send us to:</P>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-taupe">
            <li>Respond to your enquiry and answer your questions;</li>
            <li>Prepare an estimate and discuss your project;</li>
            <li>
              Arrange a site visit, design and installation if you go ahead.
            </li>
          </ul>
          <P>
            Our lawful basis is taking steps at your request before entering into
            a contract, and our legitimate interest in responding to enquiries
            and running our business. We do not use your information for
            marketing without your consent, and we never sell your data.
          </P>

          <H2>Cookies</H2>
          <P>
            This website does not set cookies or use any tracking technologies,
            so no cookie consent is required. If you follow a link to our social
            media or WhatsApp, those services have their own privacy policies and
            may set their own cookies.
          </P>

          <H2>Who we share it with</H2>
          <P>
            We do not sell or rent your personal data. We may share it with
            trusted service providers who help us operate — for example our
            website host (Vercel) and our email provider — who process data on
            our behalf under appropriate safeguards. We may also disclose
            information where required by law.
          </P>

          <H2>How long we keep it</H2>
          <P>
            We keep enquiry information only for as long as needed to respond to
            you and, where you become a customer, to fulfil our contract and meet
            our legal and accounting obligations. We then delete or securely
            archive it.
          </P>

          <H2>Your rights</H2>
          <P>
            Under UK data protection law you have the right to access your
            personal data; to have it corrected or deleted; to restrict or object
            to how we use it; and to data portability. To exercise any of these,
            contact us at{" "}
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-gold-ink underline-offset-4 hover:underline"
            >
              {contactInfo.email}
            </a>
            .
          </P>
          <P>
            If you&apos;re unhappy with how we&apos;ve handled your data, you can
            complain to the Information Commissioner&apos;s Office (ICO) at{" "}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-ink underline-offset-4 hover:underline"
            >
              ico.org.uk
            </a>
            , though we&apos;d appreciate the chance to put things right first.
          </P>

          <H2>Changes to this policy</H2>
          <P>
            We may update this policy from time to time. Any changes will appear
            on this page with a revised &ldquo;last updated&rdquo; date.
          </P>
        </div>
      </section>
    </>
  );
}
