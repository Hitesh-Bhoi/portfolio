import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/faq";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hitesh Bhoi | Frequently Asked Questions",
  description:
    "Find answers to frequently asked questions about Hitesh Bhoi's services, tech stack, freelance availability, pricing, and development process.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Hitesh Bhoi | Frequently Asked Questions",
    description:
      "Find answers to common questions about Hitesh Bhoi's web development services and process.",
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
