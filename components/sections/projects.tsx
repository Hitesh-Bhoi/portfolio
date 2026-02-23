"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Code2, Sparkles } from "lucide-react"
import Link from "next/link"

const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-featured online shopping platform with cart, checkout, and payment integration.",
        tags: ["Next.js", "MongoDB", "Stripe", "Tailwind"],
        demoUrl: "#",
        repoUrl: "#",
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Task Management App",
        description: "Collaborative task manager with real-time updates and team workspace features.",
        tags: ["React", "Node.js", "Socket.io", "Express"],
        demoUrl: "#",
        repoUrl: "#",
        gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio website showcasing skills and projects (This website!).",
        tags: ["Next.js", "Framer Motion", "Shadcn UI"],
        demoUrl: "#",
        repoUrl: "#",
        gradient: "from-orange-500/20 to-yellow-500/20"
    },
]

export function ProjectsSection() {
    return (
        <section id="projects" className="container py-24 mx-auto px-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">Portfolio</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary inline-block">
                    Featured Work
                </h2>
                <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
                    A selection of my recent projects, demonstrating expertise in full-stack development and creative problem-solving.
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
                        whileHover={{ y: -10 }}
                        className="relative group h-full"
                    >
                        <div className="absolute inset-0 bg-primary/5 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative h-full flex flex-col p-8 rounded-[2rem] bg-card border border-border/50 shadow-xl backdrop-blur-xl overflow-hidden">
                            {/* Card Content */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-2xl bg-background border border-border shadow-sm group-hover:bg-primary/5 transition-colors">
                                        <Code2 className="w-6 h-6 text-primary" />
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
                                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary/50 border border-border text-sm font-bold hover:bg-secondary transition-colors"
                                >
                                    <Github className="w-4 h-4" /> Code
                                </Link>
                                <Link
                                    href={project.demoUrl}
                                    target="_blank"
                                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
                                >
                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
