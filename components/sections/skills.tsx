"use client"

import { motion } from "framer-motion"
import {
    ReactJS,
    NextJS,
    NodeJS,
    MongoDB,
    JavaScript,
    TypeScript,
    TailwindCSS,
    Git,
    PostgreSQL,
    CSS3,
    HTML5
} from "@/components/shared/icons"
import {
    Layout,
    Server,
    Database,
    Settings,
    Code2,
    Layers,
    Cpu,
    Webhook
} from "lucide-react"

const skillCategories = [
    {
        title: "Frontend",
        icon: <Layout className="w-6 h-6 text-blue-500" />,
        skills: [
            { name: "React.js", icon: <ReactJS className="w-5 h-5" /> },
            { name: "Next.js", icon: <NextJS className="w-5 h-5" /> },
            { name: "TypeScript", icon: <TypeScript className="w-5 h-5" /> },
            { name: "JavaScript", icon: <JavaScript className="w-5 h-5" /> },
            { name: "Tailwind CSS", icon: <TailwindCSS className="w-5 h-5" /> },
            { name: "CSS3", icon: <CSS3 className="w-5 h-5" /> },
            { name: "HTML5", icon: <HTML5 className="w-5 h-5" /> },
        ]
    },
    {
        title: "Backend",
        icon: <Server className="w-6 h-6 text-green-500" />,
        skills: [
            { name: "Node.js", icon: <NodeJS className="w-5 h-5" /> },
            { name: "Express.js", icon: <Webhook className="w-5 h-5 text-[#828282]" /> },
        ]
    },
    {
        title: "Database",
        icon: <Database className="w-6 h-6 text-purple-500" />,
        skills: [
            { name: "MongoDB", icon: <MongoDB className="w-5 h-5" /> },
            { name: "PostgreSQL", icon: <PostgreSQL className="w-5 h-5" /> },
        ]
    },
    {
        title: "Tools & Others",
        icon: <Settings className="w-6 h-6 text-orange-500" />,
        skills: [
            { name: "Git", icon: <Git className="w-5 h-5" /> },
            { name: "Docker", icon: <Layers className="w-5 h-5 text-[#2496ed]" /> },
            { name: "Shadcn UI", icon: <Code2 className="w-5 h-5" /> },
            { name: "SCSS", icon: <Cpu className="w-5 h-5 text-[#cf649a]" /> },
        ]
    }
]

export function SkillsSection() {
    return (
        <section id="skills" className="container py-24 mx-auto px-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full opacity-20 dark:opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary inline-block">
                    Technical Expertise
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    A comprehensive overview of the technologies and tools I use to build high-performance, scalable web applications.
                </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-3xl bg-card border border-border/50 shadow-xl backdrop-blur-sm relative group overflow-hidden"
                    >
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-xl bg-background border border-border shadow-sm">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>

                            <div className="flex flex-col gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: (idx * 0.1) + (sIdx * 0.05) }}
                                        className="flex items-center gap-3 p-2 rounded-xl border border-transparent hover:border-border hover:bg-muted/50 transition-all duration-300"
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center p-1.5 rounded-lg bg-background border border-border shadow-sm group-hover:scale-110 transition-transform duration-300">
                                            {skill.icon}
                                        </div>
                                        <span className="text-sm font-medium">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
