import type { Metadata } from "next";
import { SkillsSection } from "@/components/sections/skills";

export const metadata: Metadata = {
  title: "Hitesh Bhoi | Skills & Technologies",
  description:
    "Explore the technical skills and technologies Hitesh Bhoi uses — React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, Docker, AWS, and modern AI tools.",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    title: "Hitesh Bhoi | Skills & Technologies",
    description:
      "Explore the technical skills and technologies Hitesh Bhoi uses to build high-performance web applications.",
    url: "/skills",
  },
};

export default function SkillsPage() {
  return (
    <div className="flex flex-col gap-0 pb-20 overflow-x-hidden">
      <h1 className="sr-only">Skills &amp; Technologies</h1>
      <SkillsSection />
    </div>
  );
}
