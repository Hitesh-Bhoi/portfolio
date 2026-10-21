import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/faq";

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
    </div>
  );
}
