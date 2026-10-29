"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Code2, AlertTriangle, Sparkles, Users } from "lucide-react"
import Link from "next/link"
import { EcobazarLogo } from "@/components/shared/ecobazar-logo"

interface Project {
  title: string
  icon?: React.ReactNode
  description: string
  tags: string[]
  demoUrl: string
  repoUrl: string
  gradient?: string
  className?: string
  isDisabled?: boolean
}

const projects: Project[] = [
  {
    title: "Users Management Platform",
    icon: <Users className="w-6 h-6 text-primary" />,
    description: "A scalable user and leads management platform with a containerized backend deployed on Render, designed for streamlined workflow administration and secure role-based access.",
    tags: ["Next.js", "React.js", "TypeScript", "Node.js", "Docker", "Render", "Tailwind CSS"],
    demoUrl: "https://lms-fe-rpgd.onrender.com/",
    repoUrl: "https://github.com/Hitesh-Bhoi/lms-fe",
    gradient: "from-orange-500/20 to-yellow-500/20"
  },
  {
    title: "Grocery E-commerce Platform",
    icon: <EcobazarLogo className="w-auto max-w-[120px]" />,
    description: "A scalable, conversion-focused e-commerce solution enabling smooth product discovery, user-friendly cart management, and seamless checkout for customers.",
    tags: ["Next.js", "React.js", "TypeScript", "Redux Toolkit", "SCSS", "Styled Components", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://farmiva.vercel.app/",
    repoUrl: "https://github.com/Hitesh-Bhoi/food-cart",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Grocery Admin Panel",
    icon: <EcobazarLogo className="w-auto max-w-[120px]" />,
    description: "A fully integrated B2B dashboard built to streamline inventory tracking, manage customer orders efficiently, and deliver actionable sales analytics.",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "SCSS", "Shadcn UI"],
    demoUrl: "https://farmiva-adminpanel.vercel.app/",
    repoUrl: "https://github.com/Hitesh-Bhoi/grocery-app-admin-fe",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
]

export function ProjectsSection() {
  return (
        <section id="projects" className="w-full py-16 md:py-24 mx-auto px-6 md:px-10 lg:px-16 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        {/* <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">Portfolio</span>
                </div> */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary inline-block mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    A collection of products I've built from conception to deployment, focusing on high-impact code and clean design.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={project.isDisabled ? undefined : { y: -10 }}
                        className={`relative group h-full ${project.isDisabled ? 'pointer-events-none' : ''}`}
            >
                        <div className={`relative h-full flex flex-col p-8 rounded-2xl bg-card border border-border shadow-md backdrop-blur-xl overflow-hidden hover:shadow-lg transition-all duration-300 ${project.className || ""}`}>
              {/* Card Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-background border border-border shadow-sm group-hover:bg-primary/5 transition-colors flex items-center justify-center">
                                        {project.icon ? project.icon : <Code2 className="w-6 h-6 text-primary" />}
                  </div>
                                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 text-sm font-semibold rounded-full bg-secondary/80 border border-border text-secondary-foreground shadow-sm group-hover:border-border/80 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer / Actions */}
              <div className="flex gap-4 pt-6 border-t border-border/50">
                {project.repoUrl && (
                <Link
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-secondary/50 border border-border text-sm font-bold hover:bg-secondary transition-colors"
                >
                  <Github className="w-4 h-4" /> Code
                </Link>
                )}
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-bold shadow-sm shadow-primary/10 hover:shadow-md hover:shadow-primary/20 transition-all"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
        </section >
    )
}
