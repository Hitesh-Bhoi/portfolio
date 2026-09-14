import type { Metadata } from "next";
import { SkillsSection } from "@/components/sections/skills";

export const metadata: Metadata = {
  title: "Web Developer Skills & Technologies | Hitesh Bhoi",
  description:
    "Explore Hitesh Bhoi's technical expertise — React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, Docker, AWS for building scalable web and app development solutions.",
  keywords: [
    "web developer skills",
    "technologies",
    "React.js",
    "Next.js",
    "Node.js",
    "full stack skills",
    "TypeScript",
    "MongoDB",
    "web development technologies",
    "app development technologies",
  ],
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    title: "Web Developer Skills & Technical Expertise",
    description:
      "Technical skills and modern technologies used for web and app development.",
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
