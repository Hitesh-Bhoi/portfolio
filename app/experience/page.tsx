import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/experience";

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
    </div>
  );
}
