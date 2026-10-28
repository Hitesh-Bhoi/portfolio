"use client";

import { motion } from "framer-motion";
import {
  Download,
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
import { SocialLinks } from "@/components/shared/social-links";

const technicalArsenal = [
  {
    title: "Frontend",
    icon: Smartphone,
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Tailwind CSS",
      "Ant Design",
      "Bootstrap",
      "shadcn/ui",
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    tech: [
      "Python",
      "Node.js",
      "Express.js",
      "REST APIs",
      "FastAPI",
      "Microservices",
      "WebSockets",
      "Authentication, JWT & RBAC",
      "Stripe Integration",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    tech: ["MongoDB", "Mongoose", "Redis", "PostgreSQL", "Prisma", "MySQL"],
  },
  {
    title: "Architecture & Design",
    icon: Code2,
    tech: [
      "System Design",
      "Scalable System Architecture",
      "Database Design",
      "REST & FastAPI Design",
      "Caching",
      "API Rate Limiting",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Server,
    tech: [
      "AWS EC2, ECS & S3",
      "AWS Lambda & API Gateway",
      "Docker",
      "CI/CD",
      "Vercel",
      "Render",
      "MongoDB Atlas",
    ],
  },
  {
    title: "AI Development & Integration",
    icon: Cpu,
    tech: [
      "LLM API Integration",
      "Generative AI",
      "MCP",
      "AI-Powered Features",
      "Prompt Engineering",
      "OpenAI API",
      "Google Gemini API",
      "Claude",
      "Codex, Cursor & Antigravity",
      "Google AI Studio",
    ],
  },
  {
    title: "Development Tools",
    icon: Code2,
    tech: [
      "Git & GitHub",
      "Vite & Webpack",
      "NPM & Yarn",
      "Postman",
      "CodeRabbit",
      "Playwright",
      "VS Code",
      "MongoDB Compass",
      "pgAdmin",
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
              Full Stack Developer with 3+ years of experience building
              production-ready web applications, designing scalable APIs and
              systems, and integrating AI capabilities.
              </p>
            </div>

            {/* Contact Array */}
            <div className="space-y-4 font-mono text-base border-t border-border/50 pt-8">
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || "bhoihitesh183@gmail.com"}`}
                className="flex items-center justify-between group hover:text-primary transition-colors"
              >
                <span className="text-muted-foreground">Email</span>
                <span className="flex items-center gap-2">
                  {process.env.NEXT_PUBLIC_EMAIL || "bhoihitesh183@gmail.com"}{" "}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
              <a
                href="tel:8200861893"
                className="flex items-center justify-between group hover:text-primary transition-colors"
              >
                <span className="text-muted-foreground">Phone</span>
                <span className="flex items-center gap-2">
                  +91 8200861893{" "}
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
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <SocialLinks />
              <a
                href="/Bhoi-Hitesh-Resume.docx"
                download="Bhoi-Hitesh-Resume.docx"
                className="flex flex-1 min-w-[200px] h-12 items-center justify-center gap-2 rounded-2xl bg-secondary text-foreground/80 font-medium text-base py-2 border border-border shadow-sm transition-colors hover:bg-secondary/80"
              >
                <Download className="w-5 h-5 opacity-70" /> Download CV
              </a>
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
                description="Architected and deployed scalable Next.js and Node.js applications, delivering production-ready features focused on performance and user engagement. Optimized REST APIs and MongoDB/PostgreSQL queries, reducing API response latency by 30%."
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
                description="Built reusable React component libraries from Figma designs using Redux Toolkit, Tailwind CSS, and Bootstrap. Developed secure Node.js/Express APIs with validation, error handling, and MongoDB indexing."
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
                description="Developed reusable, responsive UI components using React.js, Next.js, and Redux Toolkit."
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
                name="Users Management Platform"
                url="https://lms-fe-rpgd.onrender.com/"
                description="Engineered a scalable user and leads management platform with a containerized backend deployed on Render. Implemented role-based access, efficient state management, and optimized API workflows."
                stack={[
                  "Next.js",
                  "React.js",
                  "Node.js",
                  "Docker",
                  "Render",
                  "TailwindCSS",
                ]}
              />
              <ProjectBlock
                name="Grocery E-commerce Platform"
                url="https://farmiva.vercel.app/"
                description="Engineered a scalable, full-featured e-commerce platform focusing on user retention and conversion. Delivered seamless product discovery, intuitive cart management, and a frictionless checkout experience."
                stack={[
                  "Next.js",
                  "React.js",
                  "Styled components",
                  "SCSS",
                  "Framer Motion",
                  "Redux Toolkit",
                ]}
              />
              <ProjectBlock
                name="Grocery Admin Panel"
                url="http://farmiva-adminpanel.vercel.app/"
                description="Built a comprehensive B2B administrative dashboard to manage inventory catalogs, track customer order lifecycles, and visualize sales analytics."
                stack={[
                  "Next.js",
                  "React.js",
                  "TypeScript",
                  "TailwindCSS",
                  "Redux Toolkit",
                  "Shadcn UI",
                ]}
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
