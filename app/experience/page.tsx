import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/experience";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Experience | Hitesh Bhoi | Web Developer",
  description:
    "Professional experience of Hitesh Bhoi — Full Stack Engineer building enterprise web applications, scalable systems, and modern app development solutions. 3+ years industry experience.",
  keywords: [
    "professional experience",
    "work experience",
    "software engineer experience",
    "web developer experience",
    "full stack experience",
    "enterprise development",
  ],
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Professional Experience | Web Developer",
    description:
      "3+ years of professional experience in web development and enterprise applications.",
    url: "/experience",
  },
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-0 pb-20 overflow-x-hidden">
      <h1 className="sr-only">Professional Experience</h1>
      <ExperienceSection />
      <div className="w-full px-6 md:px-10 lg:px-16 pt-4 pb-8 flex flex-wrap gap-4 justify-center">
        <Link
          href="/resume"
          className="text-sm font-semibold text-primary hover:underline underline-offset-4"
        >
          View Full Resume →
        </Link>
        <Link
          href="/skills"
          className="text-sm font-semibold text-primary hover:underline underline-offset-4"
        >
          View Skills →
        </Link>
      </div>
    </div>
  );
}
