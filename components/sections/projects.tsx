"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Code2, AlertTriangle, Sparkles } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/shared/logo"
import { EcobazarLogo } from "@/components/shared/ecobazar-logo"

const projects = [
    {
        title: "Portfolio Website",
        icon: <Logo />,
        description: "A highly optimized, high-performing personal portfolio designed to convert visitors into clients through modern UX principles and fluid micro-interactions.",
        notice: "Currently under maintenance, but completely functional and works well.",
        tags: ["Next.js", "React", "Framer Motion", "Shadcn UI"],
        demoUrl: "https://bhoi-dev.vercel.app/",
        repoUrl: "https://github.com/Hitesh-Bhoi/portfolio",
        gradient: "from-orange-500/20 to-yellow-500/20"
    },
    {
        title: "Grocery E-commerce Platform",
        icon: <EcobazarLogo className="w-auto max-w-[120px]" />,
        description: "A scalable, conversion-focused e-commerce solution enabling smooth product discovery, user-friendly cart management, and seamless checkout for customers.",
        notice: "Currently under development. Some features may not work and more are coming soon.",
        tags: ["Next.js", "React", "Tailwind", "Framer Motion"],
        demoUrl: "https://grocery-app-phi-snowy.vercel.app/",
        repoUrl: "https://github.com/Hitesh-Bhoi/food-cart",
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Grocery Admin Panel",
        icon: <EcobazarLogo className="w-auto max-w-[120px]" />,
        description: "A fully integrated B2B dashboard built to streamline inventory tracking, manage customer orders efficiently, and deliver actionable sales analytics.",
        notice: "Coming soon.",
        tags: ["Next.js", "Tailwind", "Redux Toolkit", "Framer Motion", "SCSS", "Shadcn UI"],
        demoUrl: "#",
        repoUrl: "#",
        gradient: "from-green-500/20 to-emerald-500/20",
        className: "opacity-60",
        isDisabled: true
    },
]

export function ProjectsSection() {
    return (
        <section id="projects" className="container py-16 md:py-20 mx-auto px-6 relative overflow-hidden">
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

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
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

                                {project.notice && (
                                    <div className="mb-6 flex items-start gap-2 p-3 text-sm rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-500">
                                        <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                                        <p>{project.notice}</p>
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary/80 border border-border text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer / Actions */}
                            <div className="flex gap-4 pt-6 border-t border-border/50">
                                <Link
                                    href={project.repoUrl}
                                    target="_blank"
                                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-secondary/50 border border-border text-sm font-bold hover:bg-secondary transition-colors"
                                >
                                    <Github className="w-4 h-4" /> Code
                                </Link>
                                <Link
                                    href={project.demoUrl}
                                    target="_blank"
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
