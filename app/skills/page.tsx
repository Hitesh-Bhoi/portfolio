import type { Metadata } from "next";
import { SkillsSection } from "@/components/sections/skills";

export const metadata: Metadata = {
  title: "Web Developer Skills & Technologies | Hitesh Bhoi",
  description:
    "Explore Hitesh Bhoi's full-stack technical expertise across React, Next.js, Node.js, Python, databases, AWS, system design, and AI development and integration.",
  keywords: [
    "web developer skills",
    "technologies",
    "React.js",
    "Next.js",
    "Node.js",
    "full stack skills",
    "TypeScript",
    "MongoDB",
    "AWS",
    "AI integration",
    "system design",
    "web development technologies",
    "app development technologies",
  ],
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    title: "Web Developer Skills & Technical Expertise",
    description:
      "Full-stack web development, cloud, system design, and AI development and integration expertise.",
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
