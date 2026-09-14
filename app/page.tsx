import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  User,
  Code2,
  FolderOpen,
  Briefcase,
  Wrench,
  FileText,
  HelpCircle,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hitesh Bhoi | Web Development & App Development Services",
  description:
    "Professional web development and app development services. Hire Hitesh Bhoi for custom web applications, e-commerce solutions, and full-stack development. Expert in Next.js, React, and Node.js.",
  keywords: [
    "web development",
    "app development",
    "custom web development",
    "web development services",
    "full stack development",
    "Next.js developer",
    "React developer",
    "MERN stack developer",
    "software development services",
    "IT services",
    "freelance web developer",
    "web application development",
    "responsive web design",
  ],
  alternates: {
    canonical: "https://imhitesh.vercel.app/",
  },
  openGraph: {
    title: "Hitesh Bhoi | Professional Web & App Development Services",
    description:
      "Get professional web development and app development services. Custom solutions for your business using modern technologies.",
    url: "https://imhitesh.vercel.app/",
    siteName: "Bhoi Hitesh Portfolio",
    type: "website",
    images: [
      {
        url: "https://imhitesh.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hitesh Bhoi - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hitesh Bhoi | Web & App Development",
    description:
      "Professional web development and IT services by Hitesh Bhoi",
  },
};

const exploreLinks = [
  {
    name: "About",
    href: "/about",
    description: "My background & journey",
    icon: User,
  },
  {
    name: "Skills",
    href: "/skills",
    description: "Technologies I work with",
    icon: Code2,
  },
  {
    name: "Projects",
    href: "/projects",
    description: "Featured work & case studies",
    icon: FolderOpen,
  },
  {
    name: "Experience",
    href: "/experience",
    description: "Professional timeline",
    icon: Briefcase,
  },
  {
    name: "Services",
    href: "/services",
    description: "What I can build for you",
    icon: Wrench,
  },
  {
    name: "Resume",
    href: "/resume",
    description: "Full CV & credentials",
    icon: FileText,
  },
  {
    name: "FAQ",
    href: "/faq",
    description: "Common questions answered",
    icon: HelpCircle,
  },
  {
    name: "Contact",
    href: "/contact",
    description: "Start a conversation",
    icon: Mail,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-20 overflow-x-hidden">
      <HeroSection />
      <Separator className="w-full max-w-11/12 mx-auto opacity-50" />

      {/* Explore Section */}
      <section className="w-full py-16 md:py-24 mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary inline-block mb-4">
            Explore
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover more about my work, skills, and how we can collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {exploreLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="group relative flex items-start gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-2.5 rounded-xl bg-background border border-border group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors duration-300 shrink-0">
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {link.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {link.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
