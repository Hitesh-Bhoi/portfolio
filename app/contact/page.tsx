import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact Hitesh Bhoi | Hire Web Developer | App Development",
  description:
    "Get in touch with Hitesh Bhoi for web development projects, app development services, freelance work, or collaboration opportunities. Available for full-time and freelance projects.",
  keywords: [
    "contact",
    "hire web developer",
    "web development inquiry",
    "freelance work",
    "collaboration",
    "app development inquiry",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Hitesh Bhoi | Web Developer",
    description:
      "Get in touch for web development projects, freelance work, and collaboration opportunities.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-0 pb-20 overflow-x-hidden">
      <h1 className="sr-only">Contact Hitesh Bhoi</h1>
      <ContactSection />
    </div>
  );
}
