"use client";

import { useState, type FormEvent } from "react";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const fieldClass =
  "w-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold";
const labelClass =
  "mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-white/70";

function validate(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Please enter your name.";
  if (!data.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (data.phone && !/^[\d\s()+-]{7,}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (data.message.trim().length < 10) {
    errors.message = "Please tell us a little about your project.";
  }
  return errors;
}

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      // Client-side demo submit. Wire up Formspree/Netlify by adding an
      // `action`/`fetch` here.
      setSubmitted(true);
      form.reset();
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-start justify-center gap-4"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M5 12.5l4 4 10-10" />
          </svg>
        </span>
        <h3 className="font-serif text-2xl text-white">Thank you</h3>
        <p className="max-w-sm text-sm leading-relaxed text-white/70">
          Your message has been received. We&apos;ll review your space and come
          back to you with an initial estimate shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-xs uppercase tracking-[0.1em] text-gold underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className={fieldClass}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-2 text-xs text-gold">
            {errors.name}
          </p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-xs text-gold">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-white/40">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-2 text-xs text-gold">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Project description
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="Tell us about your space and what you're looking for…"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-xs text-gold">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="photo" className={labelClass}>
          Photo of your space <span className="text-white/40">(optional)</span>
        </label>
        <input
          id="photo"
          name="photo"
          type="file"
          accept="image/*"
          className="block w-full text-sm text-white/70 file:mr-4 file:border file:border-gold file:bg-transparent file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-[0.1em] file:text-gold hover:file:bg-gold hover:file:text-ink"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center border border-gold px-8 py-3.5 text-sm font-medium uppercase tracking-[0.1em] text-gold transition-colors duration-300 hover:bg-gold hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
      >
        Send message
      </button>
    </form>
  );
}
