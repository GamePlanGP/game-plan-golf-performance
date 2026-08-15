import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "FAQs",
  description:
    "Answers to common questions about Game Plan Golf Performance practice memberships — pricing, contract terms, hours, booking, guest access, and more.",
  path: "/faq",
  keywords: [
    "golf membership FAQ San Marcos",
    "indoor golf practice questions",
    "GC Quad membership questions North County",
  ],
});

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
