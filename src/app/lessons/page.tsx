"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import PromoBanner from "@/components/PromoBanner";

interface InstructorLesson {
  label: string;
  price: string;
  originalPrice?: string;
  href: string;
}

interface Instructor {
  name: string;
  role: string;
  bio: string;
  availability: string;
  credentials: string[];
  promo?: {
    headline: string;
    price: string;
    unit: string;
    detail: string;
  };
  lessons: InstructorLesson[];
}

const instructors: Instructor[] = [
  {
    name: "Ryan Faust",
    role: "Founder & Head Golf Performance Coach",
    bio: "Ryan built Game Plan around the belief that every golfer deserves access to tour-level coaching. A former competitive amateur turned instructor, he combines swing coaching expertise with athletic performance training — using data from every angle to build plans that actually stick.",
    availability: "Mon & Wed mornings · Tue & Thu afternoons",
    credentials: [
      "Swing Catalyst Ambassador",
      "Swing Catalyst Level 2 Certified",
      "TPI Certified — Power 2 & Fitness 2",
      "NASM Certified Personal Trainer",
    ],
    lessons: [
      {
        label: "Adult Lesson",
        price: "$150",
        href: "https://clients.uschedule.com/gameplangolfperformance/Product/PrepayServiceDetail/37304",
      },
      {
        label: "Junior Lesson",
        price: "$135",
        href: "https://clients.uschedule.com/gameplangolfperformance/Product/PrepayServiceDetail/37311",
      },
    ],
  },
  {
    name: "Christian Chang",
    role: "Lead Instructor",
    bio: "Christian grew up playing golf in San Diego before turning pro in 2016 and competing on the Mackenzie Tour (PGA Canada) and mini-tour circuits. He brings that competitive, data-informed edge to every lesson — tailoring each session to how the individual golfer moves and what they're working toward. He is Golf Level 3 TPI Certified and an expert in ground reaction forces, reading force plate data to pinpoint exactly how you generate power from the ground up.",
    availability: "Mon & Wed afternoons · Thu mornings · Fri & Sat 8am–4pm",
    credentials: [
      "Swing Catalyst Level 2 Certified",
      "Golf Level 3 TPI Certified",
      "Ground Reaction Force Expert",
      "Former Professional Golfer",
    ],
    promo: {
      headline: "Limited-Time Offer",
      price: "$99",
      unit: "/session",
      detail:
        "Elite, personalized coaching for every level — building the swing that's right for you, now just $99 a session.",
    },
    lessons: [
      {
        label: "Adult Lesson",
        price: "$99",
        originalPrice: "$150",
        href: "https://clients.uschedule.com/gameplangolfperformance/Product/PrepayServiceDetail/37304",
      },
      {
        label: "Junior Lesson",
        price: "$99",
        originalPrice: "$135",
        href: "https://clients.uschedule.com/gameplangolfperformance/Product/PrepayServiceDetail/37311",
      },
    ],
  },
];

const techStack = [
  {
    title: "GC Quad Launch Monitor",
    description:
      "Quadrascopic optical cameras capture ball speed, launch angle, spin rate, spin axis, and club delivery data with tour-level precision. Unlike radar systems, GC Quad measures the ball directly — which means you can use your own gamer ball and get accurate, real-world numbers, not estimates calibrated to a range ball.",
    stat: "200+ data points per shot",
    image: "/images/gc-quad.png",
  },
  {
    title: "High-Speed Video Analysis",
    description:
      "Multiple camera angles capture your swing at high frame rates, revealing positions and transitions that are invisible in real time. Paired with drawing tools and overlay comparisons, you see exactly where your movement pattern diverges from your target positions.",
    stat: "Frame-by-frame breakdown",
    image: "/images/swing-catalyst-software.jpg",
  },
  {
    title: "Swing Catalyst Force Plates",
    description:
      "Swing Catalyst dual 3D force plates measure ground reaction forces throughout your swing — showing how you load, transfer, and deliver power from the ground up. This data connects your physical movement to your ball flight in a way that no camera can. It's technology you won't find at a simulator bar.",
    stat: "Ground reaction force mapping",
    image: "/images/force-plates.jpg",
  },
];

export default function LessonsPage() {
  return (
    <>
      {/* Limited-Time Promo */}
      <PromoBanner href="#instructors" />

      {/* Hero */}
      <section className="relative pt-20 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          {/*
            [REPLACE] Background: Coach working 1:1 with a golfer mid-lesson
            Aspect ratio: 16:9, full-bleed
          */}
          <Image
            src="/images/foot-pressure-map.jpg"
            alt="Golf coaching session"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-dark/85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="inline-block text-brand-green text-sm font-semibold tracking-widest uppercase mb-4">
                Lessons
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Coaching That Adjusts to You, Not the Other Way Around
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-brand-gray-300 leading-relaxed">
                Every golfer&apos;s swing is different. Your coaching should be
                too. We use data to build a plan around how <em>you</em> move —
                not a one-size-fits-all method.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8">
                <Button href="#instructors" size="lg">
                  Book a Lesson
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How We Coach"
            title="Data First. Feel Second. Results Always."
            description="We start by measuring what's actually happening in your swing. Then we connect the data to what you feel. The result: changes that stick because they're grounded in reality, not guesswork."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                step: "01",
                title: "Measure",
                description:
                  "Your first session starts with a full data capture — launch monitor numbers, high-speed video from multiple angles, and force plate readings. We establish your baseline across every club you bring.",
              },
              {
                step: "02",
                title: "Analyze",
                description:
                  "We identify the specific patterns in your data that are costing you distance, accuracy, or consistency. No guessing about what 'might' be wrong — the numbers tell us exactly where to focus.",
              },
              {
                step: "03",
                title: "Build Your Plan",
                description:
                  "You leave every session with a clear, prioritized improvement plan. We sequence changes so you can practice with confidence between sessions, knowing exactly what to work on and why.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={0.1 * i}>
                <div className="relative">
                  <span className="text-brand-green/20 font-heading font-bold text-7xl absolute -top-4 -left-2">
                    {item.step}
                  </span>
                  <div className="relative pt-8">
                    <h3 className="font-heading text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-brand-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section id="instructors" className="py-20 md:py-28 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Your Instructors"
            title="Certified. Experienced. Data-Driven."
            description="Every lesson at Game Plan is led by an instructor who is Swing Catalyst certified and equipped with force plate technology. This isn't a driving range lesson — it's a professional coaching session backed by tour-level data."
          />

          <FadeIn delay={0.1}>
            <div className="flex items-center justify-center gap-2 mb-10 bg-brand-green/10 border border-brand-green/30 rounded-lg px-5 py-3 max-w-sm mx-auto">
              <svg className="w-4 h-4 text-brand-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-brand-green text-sm font-semibold">
                No membership required to book a lesson
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {instructors.map((instructor, i) => (
              <FadeIn key={instructor.name} delay={0.1 * i}>
                <div
                  className={`bg-brand-gray-950 border rounded-lg overflow-hidden ${
                    instructor.promo
                      ? "border-brand-green"
                      : "border-brand-gray-800"
                  }`}
                >
                  {instructor.promo && (
                    <div className="bg-brand-green text-center py-2 px-4">
                      <p className="text-white text-xs font-bold uppercase tracking-wider">
                        {instructor.promo.headline} &mdash; {instructor.promo.price}
                        {instructor.promo.unit}
                      </p>
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-heading text-2xl font-bold text-white">
                      {instructor.name}
                    </h3>
                    <p className="text-brand-green text-sm font-semibold mt-1">
                      {instructor.role}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {instructor.credentials.map((cred) => (
                        <span
                          key={cred}
                          className="bg-brand-dark border border-brand-gray-800 text-brand-gray-200 text-xs font-semibold px-3 py-1.5 rounded"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>
                    <p className="text-brand-gray-300 text-sm leading-relaxed mt-4">
                      {instructor.bio}
                    </p>
                    <div className="mt-4 flex items-start gap-3 bg-brand-dark border border-brand-gray-700 rounded-lg px-4 py-3">
                      <svg className="w-4 h-4 text-brand-green shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="text-brand-gray-500 text-xs uppercase tracking-wider font-semibold">Generally Available</p>
                        <p className="text-white text-sm mt-0.5">{instructor.availability}</p>
                      </div>
                    </div>
                    {instructor.promo && (
                      <div className="mt-4 flex items-start gap-3 bg-brand-green/10 border border-brand-green/30 rounded-lg px-4 py-3">
                        <svg className="w-4 h-4 text-brand-green shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <p className="text-brand-green text-sm font-semibold">
                          {instructor.promo.detail}
                        </p>
                      </div>
                    )}
                    <div className="mt-5 flex flex-col gap-2">
                      {instructor.lessons.map((lesson) => (
                        <a
                          key={lesson.href}
                          href={lesson.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between bg-brand-dark border border-brand-gray-700 hover:border-brand-green text-white text-sm font-semibold px-4 py-2.5 rounded transition-colors"
                        >
                          <span>{lesson.label}</span>
                          <span className="flex items-center gap-2">
                            {lesson.originalPrice && (
                              <span className="text-brand-gray-500 text-xs line-through">
                                {lesson.originalPrice}
                              </span>
                            )}
                            <span className="text-brand-green">{lesson.price}</span>
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation callout */}
      <section className="py-16 bg-brand-green/5 border-y border-brand-green/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              &ldquo;Unlike the typical driving range pro,
              <br />
              <span className="text-brand-green">
                we don&apos;t guess — we measure.&rdquo;
              </span>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 md:py-28 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Technology"
            title="Tour-Level Data in Every Session"
            description="The same technology used by PGA Tour players and their coaches. Except you don't need a tour card to access it."
          />

          <div className="space-y-16 md:space-y-24">
            {techStack.map((tech, i) => (
              <FadeIn key={tech.title} delay={0.1}>
                <div
                  className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src={tech.image}
                        alt={tech.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-brand-green/90 text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
                          {tech.stat}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                      {tech.title}
                    </h3>
                    <p className="text-brand-gray-300 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              See What Your Data Says
            </h2>
            <p className="mt-4 text-lg text-brand-gray-300">
              Your first lesson includes a complete data capture and analysis.
              Walk out with numbers you&apos;ve never seen and a plan to use
              them.
            </p>
            <div className="mt-8">
              <Button href="#instructors" size="lg">
                Book Your First Lesson
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
