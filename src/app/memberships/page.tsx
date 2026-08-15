"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

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

const faqs = [
  {
    question: "How much is a membership and what's included?",
    answer:
      "Membership is $149/month and includes unlimited GC Quad bay time, unlimited putting practice at our putting station with PuttrCo access, high-speed video in every bay, full launch monitor data, and premium golf balls. There are no caps, no monthly limits, and no add-ons — everything you need to get better is included.",
  },
  {
    question: "Is there a contract or long-term commitment?",
    answer:
      "No. Membership is month to month with no contract. There's no sign-up fee, no cancellation fee, and no year-long commitment. Pay month to month and cancel anytime. Once you cancel, you will have access for the remainder of your billing period. Each membership is on auto-renewal, and in your profile you have a quick and easy way to cancel your membership at any time throughout the month.",
  },
  {
    question: "Can I pause my membership if I get injured or travel?",
    answer:
      "Since we are month-to-month, with no contracts, no sign-up fee, and no cancellation fees, pausing a membership is not needed. Just cancel and when you're ready to come back, purchase your membership at that time.",
  },
  {
    question: "What are your hours?",
    answer:
      "We're open every day from 5:00 AM to 10:00 PM, so you can practice on your schedule — early mornings, late nights, weekends, whenever works for you.",
  },
  {
    question: "Do I need to book a bay in advance?",
    answer:
      "Yes, however it is very easy. Bays and reservations are managed through our app-based booking system, so you can reserve your time in advance and know a bay is waiting for you — no waiting, no crowds. You can book immediately at the next available :15 minute increment (if it's 8:59 AM and a 9:00 AM slot is open, you can book it!).",
  },
  {
    question: "Can I bring guests or is this open to the public?",
    answer:
      "Game Plan is a private, members-only facility with no public walk-ins. Every person in the facility is a member invested in getting better, so you never share space with parties or general-public foot traffic.",
  },
  {
    question: "Is there an age requirement?",
    answer:
      "Yes — you must be 18 years or older to be a practice member.",
  },
  {
    question: "Can I use my own golf balls?",
    answer:
      "Yes, you're also welcome to use your own gamer ball to dial in your data with the specific ball you play. This is a major benefit of using the best-in-class GC Quad launch monitors. We just ask that the ball is new and clean — no sharpie marks that will transfer to the impact screens.",
  },
  {
    question: "Are lessons included with a membership?",
    answer:
      "Lessons are booked separately from memberships and are available by appointment. Many members pair their practice membership with data-driven coaching for the fastest improvement.",
  },
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

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-brand-gray-900/50 transition-colors"
      >
        <span className="text-white font-semibold text-base md:text-lg">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-brand-green shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-brand-gray-300 text-sm md:text-base leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
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
                  href="https://clients.uschedule.com/gameplangolfperformance/Product/MembershipDetail/11359"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Become a Member
                </Button>
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
              {faqs.map((faq) => (
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
