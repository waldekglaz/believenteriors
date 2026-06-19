"use client";

import { useState, type FormEvent } from "react";

export default function NotifyForm() {
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = String(new FormData(form).get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    // Demo capture — wire up to a mailing list / Formspree here.
    setError(null);
    setDone(true);
    form.reset();
  }

  if (done) {
    return (
      <p
        role="status"
        className="mx-auto max-w-sm text-sm leading-relaxed text-gold"
      >
        Thank you — you&apos;re on the list. We&apos;ll be in touch the moment we
        open the doors.
      </p>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="mx-auto w-full max-w-md"
      aria-label="Get notified at launch"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="notify-email" className="sr-only">
          Email address
        </label>
        <input
          id="notify-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "notify-error" : undefined}
          className="w-full border border-white/25 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/55 outline-none transition-colors focus:border-gold"
        />
        <button
          type="submit"
          className="shrink-0 border border-gold px-7 py-3 text-sm font-medium uppercase tracking-[0.1em] text-gold transition-colors duration-300 hover:bg-gold hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          Notify me
        </button>
      </div>
      {error && (
        <p id="notify-error" className="mt-3 text-left text-xs text-gold">
          {error}
        </p>
      )}
    </form>
  );
}
