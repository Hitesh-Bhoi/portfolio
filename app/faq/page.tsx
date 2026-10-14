import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/faq";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Hitesh Bhoi | Web Development & App Development Questions",
  description:
    "Frequently asked questions about Hitesh Bhoi's web development and app development services, tech stack, pricing, freelance availability, and development process.",
  keywords: [
    "FAQ",
    "frequently asked questions",
    "web development FAQ",
    "pricing",
    "freelance availability",
    "development process",
    "tech stack",
  ],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Web Development Services",
    description:
      "Common questions about web development services, pricing, and process.",
    url: "/faq",
  },
};

export default function FaqPage() {
  return (
    <div className="flex flex-col gap-0 pb-20 overflow-x-hidden">
      <h1 className="sr-only">Frequently Asked Questions</h1>
      <FaqSection />
      <div className="w-full px-6 md:px-10 lg:px-16 pt-4 pb-8 flex flex-wrap gap-4 justify-center">
        <Link
          href="/contact"
          className="text-sm font-semibold text-primary hover:underline underline-offset-4"
        >
          Still have questions? Get in touch →
        </Link>
      </div>
    </div>
  );
}
