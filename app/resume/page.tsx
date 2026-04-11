"use client";

import { motion } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Code2,
  Smartphone,
  Database,
  Server,
  Cpu,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Terminal,
  ExternalLink,
} from "lucide-react";

const technicalArsenal = [
  {
    title: "Frontend",
    icon: Smartphone,
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Styled Components",
      "Framer Motion",
      "Bootstrap",
      "SCSS",
      "AntD",
      "Shadcn UI",
      "Responsive Design",
      "Performance Optimization"
    ],
  },
  {
    title: "Backend",
    icon: Server,
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "TypeORM",
      "System Design",
      "Query Optimization"
    ],
  },
  {
    title: "Database",
    icon: Database,
    tech: ["MongoDB", "PostgreSQL", "AWS Lambda"],
  },
  {
    title: "AI & Tools",
    icon: Cpu,
    tech: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "Postman",
      "Google Search Console",
      "ChatGPT",
      "ChatGPT Codex",
      "Gemini",
      "Claude",
      "Google Antigravity",
      "GitHub Copilot"
    ],
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Subtle Grid Background */}
      <div className="fixed inset-0 z-[-1] bg-size-[24px_24px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] text-sm"></div>
      <div className="fixed inset-0 z-[-1] bg-linear-to-t from-background via-background/90 to-background/20 hidden md:block"></div>

      <main className="w-full mx-auto px-4 sm:px-6 py-6 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* Left Column / Profile */}
        <div className="lg:col-span-4 flex flex-col space-y-10">
          <div className="sticky top-24 space-y-10">
            {/* Profile Info */}
            <div className="space-y-6 flex flex-col items-center text-center">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-background border-2 border-primary/20 shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hitesh-hero.jpg"
                  alt="Hitesh Bhoi"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
                  Bhoi Hitesh
                </h1>
                <p className="text-lg md:text-2xl text-primary font-mono tracking-tight font-medium">
                  MERN Stack Developer
                </p>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-md mx-auto">
                Designing and building high-performance, scalable web
                applications with a focus on modern JS frameworks and systemic
                architecture.
              </p>
            </div>

            {/* Contact Array */}
            <div className="space-y-4 font-mono text-base border-t border-border/50 pt-8">
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || "hello@example.com"}`}
                className="flex items-center justify-between group hover:text-primary transition-colors"
              >
                <span className="text-muted-foreground">Email</span>
                <span className="flex items-center gap-2">
                  {process.env.NEXT_PUBLIC_EMAIL || "hello@example.com"}{" "}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Location</span>
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Status</span>
                <span className="flex items-center gap-2">
                  Open to Work
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                {
                  icon: Github,
                  href: process.env.NEXT_PUBLIC_GITHUB || "https://github.com",
                },
                {
                  icon: Linkedin,
                  href:
                    process.env.NEXT_PUBLIC_LINKED_IN || "https://linkedin.com",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-secondary/30 hover:bg-primary hover:text-primary-foreground border border-border/50 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
              <button
                disabled
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-secondary text-foreground/80 font-medium text-base py-2 cursor-not-allowed border border-border shadow-sm transition-colors"
                title="Resume coming soon"
              >
                <Download className="w-5 h-5 opacity-70" /> Download CV
                <span className="text-[10px] text-amber-600 dark:text-amber-500 bg-amber-500/10 dark:bg-amber-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold ml-1 border border-amber-500/30">Coming Soon</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column / Content */}
        <div className="lg:col-span-8 flex flex-col space-y-24">
          {/* Education Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-3 border-b border-border/50 pb-4">
              <GraduationCap className="w-6 h-6 text-muted-foreground" />
              <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            </div>

            <div className="space-y-8">
              <div className="group relative flex flex-col md:flex-row gap-2 md:gap-8">
                <div className="md:w-52 shrink-0 pt-1">
                  <span className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                    2018 — 2019
                  </span>
                </div>
                <div className="flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Industrial Training in Software Development
                    </h3>
                    <p className="text-lg text-muted-foreground mt-1 font-medium">
                      I.T.I Maninagar
                    </p>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed mt-2">
                    Learned the fundamental basics of software programming.
                  </p>
                </div>
              </div>

              <div className="group relative flex flex-col md:flex-row gap-2 md:gap-8">
                <div className="md:w-52 shrink-0 pt-1">
                  <span className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                    2019 — 2022
                  </span>
                </div>
                <div className="flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Bachelor of Computer Applications
                    </h3>
                    <p className="text-lg text-muted-foreground mt-1 font-medium">
                      Lokmanya College of Computer Application - Gujarat University
                    </p>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed mt-2">
                    Studied the core principles and fundamentals of software development.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-3 border-b border-border/50 pb-4">
              <Briefcase className="w-6 h-6 text-muted-foreground" />
              <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            </div>

            <div className="space-y-8">
              <ExperienceBlock
                company="Intellimedia Networks"
                role="Fullstack Developer"
                date="Jul 2024 — Present"
                description="Developed strong expertise in frontend development, UI/UX design, responsive interfaces, application performance optimization, and API integration, while continuously expanding knowledge in backend technologies and cloud computing."
                stack={[
                  "React.js",
                  "Next.js",
                  "AntD",
                  "Shadcn UI",
                  "Typescript",
                  "TypeORM",
                  "PostgreSQL",
                  "Node.js",
                  "MongoDB",
                  "AWS",
                  "Docker",
                ]}
              />
              <ExperienceBlock
                company="Syndell Technologies"
                role="Jr. Fullstack Developer"
                date="Mar 2023 — Feb 2024"
                description="Expanded expertise in frontend development and responsive design, while establishing a solid foundation in backend development."
                stack={[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "PostgreSQL",
                  "TailwindCSS",
                  "Redux Toolkit",
                ]}
              />
              <ExperienceBlock
                company="KerInfotech"
                role="React.js Intern"
                date="Aug 2022 — Mar 2023"
                description="Learned the fundamental basics of frontend development."
                stack={[
                  "JavaScript",
                  "React.js",
                  "Redux Toolkit",
                  "CSS3",
                  "HTML5",
                  "Bootstrap",
                  "GitHub",
                ]}
              />
            </div>
          </section>

          {/* Skills Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-3 border-b border-border/50 pb-4">
              <Code2 className="w-6 h-6 text-muted-foreground" />
              <h2 className="text-3xl font-bold tracking-tight">Skills & Technologies</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalArsenal.map((group, index) => {
                const Icon = group.icon;

                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    key={group.title}
                    className="group relative rounded-2xl border border-border/50 bg-secondary/20 p-6 space-y-5 overflow-hidden hover:border-primary/30 hover:bg-secondary/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                  >
                    {/* Background Glow */}
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background border border-border/50 text-muted-foreground group-hover:text-primary group-hover:scale-110 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-500 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-mono text-lg font-bold text-foreground group-hover:text-primary transition-colors tracking-wide uppercase">
                        {group.title}
                      </h3>
                    </div>

                    <div className="relative flex flex-wrap gap-2.5 pt-2">
                      {group.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg bg-background border border-border/50 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300 cursor-default shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Projects Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-3 border-b border-border/50 pb-4">
              <Terminal className="w-6 h-6 text-muted-foreground" />
              <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            </div>

            <div className="space-y-8">
              <ProjectBlock
                name="Portfolio Website"
                url="https://bhoi-dev.vercel.app/"
                description="Architected a high-performance personal portfolio leveraging Next.js and Framer Motion. Implemented fluid micro-interactions, SEO optimization, and modern UX principles to effectively convert visitors into clients."
                stack={["Next.js", "React.js", "Framer Motion", "TailwindCSS", "Resend(Email Service)"]}
              />
              <ProjectBlock
                name="Grocery E-commerce Platform"
                url="https://grocery-app-phi-snowy.vercel.app/"
                description="Engineered a scalable, full-featured e-commerce platform focusing on user retention and conversion. Delivered seamless product discovery, intuitive cart management, and a frictionless checkout experience."
                stack={["Next.js", "React.js", "Styled components", "SCSS",  "Framer Motion", "Redux Toolkit"]}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function ExperienceBlock({
  company,
  role,
  date,
  description,
  stack,
}: {
  company: string;
  role: string;
  date: string;
  description: string;
  stack: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col md:flex-row gap-2 md:gap-8"
    >
      <div className="md:w-52 shrink-0 pt-1">
        <span className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
          {date}
        </span>
      </div>

      <div className="flex-1">
        <div>
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
            {role}
          </h3>
          <p className="text-muted-foreground mt-1 text-lg font-medium">
            {company}
          </p>
        </div>

        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function ProjectBlock({
  name,
  url,
  description,
  stack,
}: {
  name: string;
  url: string;
  description: string;
  stack: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group relative flex flex-col md:flex-row gap-6 md:gap-8 rounded-2xl border border-border/50 bg-secondary/20 p-6 md:p-8 overflow-hidden hover:border-primary/30 hover:bg-secondary/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
    >
      {/* Background Glow */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="md:w-48 shrink-0 pt-1 relative z-10 flex flex-col gap-3">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 font-mono text-sm font-medium text-muted-foreground bg-background border border-border/50 px-4 py-2 rounded-xl hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
      </div>

      <div className="flex-1 space-y-4 relative z-10">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
            {name}
          </h3>
        </div>

        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2.5 pt-2">
          {stack.map((tech, i) => (
            <span
              key={i}
              className="px-3.5 py-1.5 rounded-lg bg-background border border-border/50 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300 cursor-default shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
