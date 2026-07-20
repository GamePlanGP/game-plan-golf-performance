"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import FadeIn from "@/components/FadeIn";
import { HOURS, ADDRESS, PHONE, EMAIL } from "@/lib/constants";
import { submitInquiry } from "@/app/actions/inquiry";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Records when the form became interactive, so the server can reject
  // submissions that arrive implausibly fast (a sign of automation).
  const mountedAtRef = useRef(0);
  useEffect(() => {
    mountedAtRef.current = Date.now();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    formData.set("form_elapsed_ms", String(Date.now() - mountedAtRef.current));
    const result = await submitInquiry("contact", formData);
    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error);
    }
    setLoading(false);
  }

  const inputClasses =
    "w-full bg-brand-gray-950 border border-brand-gray-800 rounded-lg px-4 py-3 text-white text-sm placeholder-brand-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors";

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block text-brand-green text-sm font-semibold tracking-widest uppercase mb-4">
              Contact
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Let&apos;s Talk About Your Game
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-brand-gray-300 max-w-2xl mx-auto">
              Questions about lessons, memberships, or training? We&apos;re here
              to help. All sessions are by appointment — reach out to get
              started.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-12 md:py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <FadeIn>
              <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-brand-green mb-4">
                      <svg
                        className="w-12 h-12 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-2">
                      Message Sent
                    </h3>
                    <p className="text-brand-gray-400 text-sm">
                      We&apos;ll get back to you within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <h2 className="font-heading text-xl font-bold text-white mb-2">
                      Send a Message
                    </h2>
                    <p className="text-brand-gray-400 text-sm mb-6">
                      Or skip the form and{" "}
                      <a
                        href="/memberships"
                        className="text-brand-green hover:underline"
                      >
                        become a member
                      </a>
                      {" "}or{" "}
                      <a
                        href="/lessons"
                        className="text-brand-green hover:underline"
                      >
                        book directly online
                      </a>
                      .
                    </p>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-brand-gray-300 mb-1.5"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className={inputClasses}
                          placeholder="Your name"
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-brand-gray-300 mb-1.5"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className={inputClasses}
                          placeholder="you@email.com"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-brand-gray-300 mb-1.5"
                      >
                        Phone{" "}
                        <span className="text-brand-gray-500">
                          (optional)
                        </span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className={inputClasses}
                        placeholder="(555) 000-0000"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-brand-gray-300 mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className={inputClasses}
                        placeholder="How can we make you a better golfer?"
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                      />
                    </div>

                    {error && (
                      <p className="text-red-400 text-sm">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-brand-green text-brand-dark font-semibold tracking-wide uppercase text-sm px-6 py-3 rounded hover:bg-brand-green-hover transition-colors active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? "Sending…" : "Send Message"}
                    </button>

                    {/*
                      Honeypot — hidden from real visitors (off-screen,
                      untabbable, and hidden from assistive tech). Bots that
                      auto-fill every field will populate it, and the server
                      silently drops those submissions. Do not remove.
                    */}
                    <div
                      aria-hidden="true"
                      className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden"
                    >
                      <label htmlFor="company_website">
                        Company website (leave blank)
                      </label>
                      <input
                        type="text"
                        id="company_website"
                        name="company_website"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Info */}
            <div className="space-y-8">
              {/* Appointment notice */}
              <FadeIn delay={0.1}>
                <div className="bg-brand-green/5 border border-brand-green/20 rounded-lg p-6">
                  <div className="flex gap-3">
                    <svg
                      className="w-5 h-5 text-brand-green shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        All sessions are by appointment only
                      </p>
                      <p className="text-brand-gray-400 text-sm mt-1">
                        This ensures you get dedicated time with our team and
                        equipment — no waiting, no crowds. Book online or
                        contact us to schedule.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Hours */}
              <FadeIn delay={0.15}>
                <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6">
                  <h3 className="font-heading text-lg font-bold text-white mb-4">
                    Hours
                  </h3>
                  <ul className="space-y-2">
                    {HOURS.map((item) => (
                      <li
                        key={item.days}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-brand-gray-400">{item.days}</span>
                        <span className="text-brand-gray-200">
                          {item.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Location */}
              <FadeIn delay={0.2}>
                <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6">
                  <h3 className="font-heading text-lg font-bold text-white mb-4">
                    Location
                  </h3>
                  <a
                    href="https://maps.google.com/?q=1621+S+Rancho+Santa+Fe+Rd+Ste+H+San+Marcos+CA+92078"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gray-300 text-sm hover:text-white transition-colors"
                  >
                    <span className="block">{ADDRESS.street}</span>
                    <span className="block">{ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}</span>
                  </a>
                  {PHONE && (
                    <p className="text-brand-gray-300 text-sm mt-2">
                      Phone:{" "}
                      <a
                        href={`tel:${PHONE}`}
                        className="text-brand-green hover:underline"
                      >
                        {PHONE}
                      </a>
                    </p>
                  )}
                  {EMAIL && (
                    <p className="text-brand-gray-300 text-sm mt-1">
                      Email:{" "}
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-brand-green hover:underline"
                      >
                        {EMAIL}
                      </a>
                    </p>
                  )}
                </div>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
