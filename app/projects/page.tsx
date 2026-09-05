import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/projects";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hitesh Bhoi | Software Engineering Projects",
  description:
    "Browse software engineering projects by Hitesh Bhoi — from portfolio websites to full-stack e-commerce platforms, built with Next.js, React, and modern web technologies.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Hitesh Bhoi | Software Engineering Projects",
    description:
      "Browse software engineering projects by Hitesh Bhoi built with Next.js, React, and modern web technologies.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-0 pb-20 overflow-x-hidden">
      <h1 className="sr-only">Software Engineering Projects</h1>
      <ProjectsSection />
      <div className="w-full px-6 md:px-10 lg:px-16 pt-4 pb-8 flex flex-wrap gap-4 justify-center">
        <Link
          href="/contact"
          className="text-sm font-semibold text-primary hover:underline underline-offset-4"
        >
          Have a project idea? Get in touch →
        </Link>
      </div>
    </div>
  );
}
