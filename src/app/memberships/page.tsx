"use client";

import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import FaqItem from "@/components/FaqItem";
import { MEMBERSHIP_FAQS } from "@/lib/faqs";

const membership = {
  price: "$149",
  period: "/mo",
  features: [
    "Unlimited GC Quad bay time — practice as much as you want",
    "Unlimited putting practice at our putting station — includes PuttrCo access",
    "High-speed video in every bay",
    "Open 5:00 AM – 10:00 PM, every day",
    "Full launch monitor data",
    "Premium golf balls provided — or use your new gamer ball for even more accurate data for your game",
    "Fiberbuilt hitting mats — premium turf, regularly maintained",
    "Members only — private facility, no public walk-ins",
    "App-based booking & reservations",
    "No contract — cancel anytime",
    "Must be 18 years or older to be a practice member",
  ],
};

// What other venues charge premium prices for — none of which lowers a score.
const entertainmentModel = [
  "Premium prices for foursomes and group simulator bays",
  "Outside play, food, and drinks bundled into your bill",
  "Social nights and events you pay for whether you use them or not",
  "Screens and simulators built for entertainment, not measurement",
];

// What we put every dollar toward — the things that actually move your game.
const gamePlanModel = [
  "GC Quad launch monitors with tour-level ball and club data",
  "High-speed video in every bay for honest, frame-by-frame feedback",
  "Unlimited private practice — no foursomes, no distractions",
  "One affordable membership — no upsells, no add-ons that don't matter",
];

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

function XIcon() {
  return (
    <svg
      className="w-5 h-5 text-brand-gray-600 shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
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
              Everything You Need to Get Better.
              <br />
              Nothing You Don&apos;t.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-brand-gray-300 max-w-2xl mx-auto leading-relaxed">
              Unlimited GC Quad bay time with high-speed video and full launch
              monitor data. Open 5am to 10pm, every day. Stop paying for
              expensive add-ons — everything you need to get better is in one
              affordable membership.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Flash Sale */}
      <section className="pt-6 pb-2 md:pt-8 md:pb-4 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-brand-green-muted via-brand-green to-brand-green-hover p-6 md:p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full pl-2.5 pr-4 py-1 mb-4">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-white text-xs font-bold uppercase tracking-widest">
                  Flash Sale
                </span>
              </span>
              <h2 className="font-heading text-white font-bold tracking-tight text-2xl md:text-4xl leading-[1.1]">
                New Members Get Their{" "}
                <span className="whitespace-nowrap">2nd Month Free</span>
              </h2>
              <p className="mt-3 text-white/90 text-sm md:text-base">
                Sign up by{" "}
                <span className="font-bold text-white">August 31</span> to claim
                your free month. No contract — cancel anytime.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Membership */}
      <section className="py-8 md:py-12 bg-brand-dark">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-brand-green/5 border-2 border-brand-green rounded-lg p-8 md:p-10 text-center">
              <span className="inline-block bg-brand-green text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Flash Sale — 2nd Month Free
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
              <p className="mt-3 text-brand-green text-sm font-semibold">
                Join by Aug 31 and your 2nd month is on us.
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
                  href="https://clients.uschedule.com/gameplangolfperformance/Product/MembershipDetail/11359"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Become a Member
                </Button>
                <p className="mt-3 text-brand-gray-400 text-xs">
                  Flash sale ends August 31 — 2nd month free for new members.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Differentiation — Built to Get You Better */}
      <section className="py-16 md:py-24 bg-brand-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block text-brand-green text-sm font-semibold tracking-widest uppercase mb-4">
                The Difference
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                Built to Get You Better — Not to Entertain You
              </h2>
              <p className="mt-4 text-brand-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                Other venues charge premium prices for foursomes, outside play,
                food and drinks, and social nights out. That&apos;s a great time
                — but none of it lowers your scores. We put every dollar of
                investment into the technology and feedback that actually helps
                you improve your game and pass the savings direct to your
                membership cost.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-8">
                <p className="text-brand-gray-400 text-xs font-bold uppercase tracking-wider mb-6">
                  The Entertainment Model
                </p>
                <ul className="space-y-4">
                  {entertainmentModel.map((item) => (
                    <li key={item} className="flex gap-3 text-sm">
                      <XIcon />
                      <span className="text-brand-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-green/5 border border-brand-green/40 rounded-lg p-8">
                <p className="text-brand-green text-xs font-bold uppercase tracking-wider mb-6">
                  The Game Plan Model
                </p>
                <ul className="space-y-4">
                  {gamePlanModel.map((item) => (
                    <li key={item} className="flex gap-3 text-sm">
                      <CheckIcon />
                      <span className="text-brand-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
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
                <p className="text-white font-semibold text-sm mb-2">No Parties In The Bay Next Door</p>
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
              <Button href="/lessons" variant="secondary">
                Book a Lesson
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block text-brand-green text-sm font-semibold tracking-widest uppercase mb-4">
                FAQs
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-brand-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                Everything you need to know about becoming a Game Plan member.
                Still have questions?{" "}
                <a
                  href="/contact"
                  className="text-brand-green hover:underline"
                >
                  Get in touch
                </a>
                .
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              {MEMBERSHIP_FAQS.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
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
              <Button href="/memberships" size="lg">
                Become a Member
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
