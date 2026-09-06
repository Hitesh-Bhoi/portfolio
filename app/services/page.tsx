import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Hitesh Bhoi | Software Development Services",
  description:
    "Explore web development services by Hitesh Bhoi — from single-page sites and landing pages to full-stack custom web applications. Transparent pricing and professional delivery.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Hitesh Bhoi | Software Development Services",
    description:
      "Explore web development services by Hitesh Bhoi — transparent pricing, professional delivery.",
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
