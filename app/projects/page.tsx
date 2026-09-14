import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/projects";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development Projects & Portfolio | Hitesh Bhoi",
  description:
    "View web development and app development projects by Hitesh Bhoi — e-commerce platforms, responsive websites, and full-stack applications built with Next.js, React, and modern technologies.",
  keywords: [
    "web development projects",
    "app development projects",
    "portfolio projects",
    "e-commerce projects",
    "full stack projects",
    "Next.js projects",
    "React projects",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Web Development & App Development Projects",
    description:
      "Portfolio of web and app development projects built with modern technologies.",
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
