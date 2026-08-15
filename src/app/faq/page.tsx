import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import FaqItem from "@/components/FaqItem";
import { MEMBERSHIP_FAQS } from "@/lib/faqs";

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-4 md:pt-40 md:pb-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block text-brand-green text-sm font-semibold tracking-widest uppercase mb-4">
              FAQs
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-brand-gray-300 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about becoming a Game Plan member —
              pricing, hours, booking, and more. Still have questions?{" "}
              <a href="/contact" className="text-brand-green hover:underline">
                Get in touch
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-12 md:py-20 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
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
      <section className="py-16 bg-brand-green/5 border-y border-brand-green/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-brand-gray-300 text-lg max-w-2xl mx-auto">
              Join as a practice member with no contract and cancel anytime, or
              reach out with any other questions.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href="/memberships">Become a Member</Button>
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
