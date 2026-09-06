import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/experience";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hitesh Bhoi | Software Engineer Experience",
  description:
    "View the professional experience of Hitesh Bhoi — from React.js intern to Full Stack Developer, working with enterprise applications, scalable architectures, and modern web technologies.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Hitesh Bhoi | Software Engineer Experience",
    description:
      "View the professional journey of Hitesh Bhoi — 3+ years of experience building enterprise web applications.",
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
