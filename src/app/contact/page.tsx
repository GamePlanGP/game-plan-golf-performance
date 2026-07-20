import FadeIn from "@/components/FadeIn";
import KajabiForm from "@/components/KajabiForm";
import { HOURS, ADDRESS, PHONE, EMAIL } from "@/lib/constants";

export default function ContactPage() {
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

                <KajabiForm />
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
