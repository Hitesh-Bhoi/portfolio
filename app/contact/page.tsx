import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact Hitesh Bhoi | Full Stack Software Engineer",
  description:
    "Get in touch with Hitesh Bhoi for web development projects, freelance inquiries, or collaboration opportunities. Available for full-time roles and freelance work.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Hitesh Bhoi | Full Stack Software Engineer",
    description:
      "Get in touch with Hitesh Bhoi for web development projects, freelance inquiries, or collaboration opportunities.",
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
