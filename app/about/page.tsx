import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Hitesh Bhoi | Full Stack Software Engineer",
  description:
    "Learn about Hitesh Bhoi — a Full Stack Software Engineer with 3+ years of experience building high-performance web applications using React, Next.js, Node.js, and MongoDB.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Hitesh Bhoi | Full Stack Software Engineer",
    description:
      "Learn about Hitesh Bhoi — a Full Stack Software Engineer with 3+ years of experience building high-performance web applications.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-0 pb-20 overflow-x-hidden">
      <h1 className="sr-only">About Hitesh Bhoi</h1>
      <AboutSection />
      <div className="w-full px-6 md:px-10 lg:px-16 pt-4 pb-8 flex flex-wrap gap-4 justify-center">
        <Link
          href="/experience"
          className="text-sm font-semibold text-primary hover:underline underline-offset-4"
        >
          View Experience →
        </Link>
        <Link
          href="/projects"
          className="text-sm font-semibold text-primary hover:underline underline-offset-4"
        >
          View Projects →
        </Link>
        <Link
          href="/contact"
          className="text-sm font-semibold text-primary hover:underline underline-offset-4"
        >
          Get In Touch →
        </Link>
      </div>
    </div>
  );
}
