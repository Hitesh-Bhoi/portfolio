import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Web Development & App Development Services | Hitesh Bhoi",
  description:
    "Professional web development and app development services by Hitesh Bhoi. Custom web applications, responsive design, full-stack solutions, e-commerce platforms, and IT services.",
  keywords: [
    "web development services",
    "app development services",
    "custom web development",
    "e-commerce development",
    "IT services",
    "freelance web developer",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Web Development & App Development Services",
    description:
      "Professional web and app development services with transparent pricing and expert delivery.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-0 pb-20 overflow-x-hidden">
      <h1 className="sr-only">Software Development Services</h1>
      <ServicesSection />
    </div>
  );
}
