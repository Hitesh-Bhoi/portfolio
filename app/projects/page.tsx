import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <div className="w-full px-6 md:px-10 lg:px-16 pb-12 md:pb-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-7 text-center shadow-sm md:flex-row md:p-10 md:text-left">
          <div className="max-w-2xl">
            <p className="text-2xl font-bold tracking-tight text-primary">
              Have a project idea?
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Let’s talk about how to bring it to life.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link href="/contact">
              Get in touch
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
