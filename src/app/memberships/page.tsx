"use client";

import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import { MEMBERSHIP_URL, BOOKING_URL } from "@/lib/constants";

const membership = {
  price: "$149",
  period: "/mo",
  features: [
    "Unlimited GC Quad bay time — practice as much as you want",
    "High-speed video in every bay",
    "Unlimited private gym access",
    "Open 5:00 AM – 10:00 PM, every day",
    "Full launch monitor data",
    "Premium golf balls provided",
    "Fiberbuilt hitting mats — premium turf, regularly maintained",
    "Members only — private facility, no public walk-ins",
    "App-based booking & reservations",
    "No contract — cancel anytime",
  ],
};

function CheckIcon() {
  return (
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
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function MembershipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-4 md:pt-40 md:pb-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block text-brand-green text-sm font-semibold tracking-widest uppercase mb-4">
              Memberships
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Practice With Purpose
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-brand-gray-300 max-w-2xl mx-auto leading-relaxed">
              Unlimited GC Quad bay time with high-speed video. Fiberbuilt mats.
              Open 5am to 10pm, every day. Members only — your space, your
              community, real data on every shot.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Membership */}
      <section className="py-8 md:py-12 bg-brand-dark">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-brand-green/5 border-2 border-brand-green rounded-lg p-8 md:p-10 text-center">
              <span className="inline-block bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                No Contract — Cancel Anytime
              </span>
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
                Practice Membership
              </h3>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="font-heading text-5xl md:text-6xl font-bold text-white">
                  {membership.price}
                </span>
                <span className="text-brand-gray-400 text-lg ml-1">
                  {membership.period}
                </span>
              </div>
              <p className="text-brand-gray-300 mt-4">
                Unlimited practice. Every day. No caps, no monthly limits.
              </p>

              <ul className="mt-8 space-y-3 text-left max-w-sm mx-auto">
                {membership.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm">
                    <CheckIcon />
                    <span className="text-brand-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href={MEMBERSHIP_URL}
                  variant="primary"
                  size="lg"
                  className="w-full"
                  external
                >
                  Become a Member
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Members-Only Community */}
      <section className="py-16 md:py-20 bg-brand-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="inline-block text-brand-green text-sm font-semibold tracking-widest uppercase mb-4">
                Member Driven
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                Your Space. Your Community.
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6">
                <p className="text-white font-semibold text-sm mb-2">No Public Walk-Ins</p>
                <p className="text-brand-gray-400 text-sm leading-relaxed">
                  Every person in this facility is a member invested in the same
                  thing — getting better. No general public access, ever.
                </p>
              </div>
              <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6">
                <p className="text-white font-semibold text-sm mb-2">No Parties Next Door</p>
                <p className="text-brand-gray-400 text-sm leading-relaxed">
                  No simulator foursomes playing beer golf in the bay next to
                  you. When you&apos;re focused on improving, so is everyone
                  around you.
                </p>
              </div>
              <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6">
                <p className="text-white font-semibold text-sm mb-2">Owner Is the Head Coach</p>
                <p className="text-brand-gray-400 text-sm leading-relaxed">
                  Game Plan&apos;s owner is the head performance coach — not an
                  investor or a franchise. Decisions here are made by golfers,
                  for golfers.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* No-contract callout */}
      <section className="py-16 md:py-20 bg-brand-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                No Contracts. No Pressure. No Gimmicks.
              </h2>
              <p className="text-brand-gray-300 text-lg max-w-2xl mx-auto mb-10">
                We don&apos;t lock you in and we don&apos;t upsell you at the door.
                Pay month to month, cancel anytime, and keep every dollar focused
                on getting better at golf.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6 text-center">
                <div className="text-brand-green text-3xl font-heading font-bold mb-2">$0</div>
                <p className="text-white font-semibold text-sm">Cancellation Fee</p>
                <p className="text-brand-gray-400 text-xs mt-1">Walk away whenever you want</p>
              </div>
              <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6 text-center">
                <div className="text-brand-green text-3xl font-heading font-bold mb-2">$0</div>
                <p className="text-white font-semibold text-sm">Sign-Up Fee</p>
                <p className="text-brand-gray-400 text-xs mt-1">No initiation, no hidden costs</p>
              </div>
              <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6 text-center">
                <div className="text-brand-green text-3xl font-heading font-bold mb-2">0</div>
                <p className="text-white font-semibold text-sm">Year Commitment</p>
                <p className="text-brand-gray-400 text-xs mt-1">Month to month, always</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lessons callout */}
      <section className="py-16 bg-brand-green/5 border-y border-brand-green/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
              Want Coaching? Book a Lesson.
            </h2>
            <p className="text-brand-gray-300 text-lg max-w-2xl mx-auto">
              Lessons are available by appointment and booked separately from
              memberships. Pair your practice membership with data-driven
              coaching for the fastest improvement.
            </p>
            <div className="mt-6">
              <Button href={BOOKING_URL} variant="secondary" external>
                Book a Lesson
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Practice Should Produce Data, Not Just Sweat
            </h2>
            <p className="mt-4 text-lg text-brand-gray-300">
              Every ball you hit in a Game Plan bay generates real performance
              data. That&apos;s practice with a purpose.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={MEMBERSHIP_URL} size="lg" external>
                Choose Your Plan
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Questions? Contact Us
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
