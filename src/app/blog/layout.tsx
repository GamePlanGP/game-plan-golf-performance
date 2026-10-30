import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Practice tips and guidance from Game Plan Golf Performance in San Marcos, CA — how to get the most out of your time in the GP Lab.",
  path: "/blog",
  keywords: ["golf practice tips", "golf blog San Diego"],
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
