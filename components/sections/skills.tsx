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
    HTML5,
    Sass,
    AWS,
    Antd,
    ExpressJS,
    GitHub,
    Postman,
    VScode,
    ChatGPT,
    Copilot,
    Gemini,
    Antigravity,
    Docker
} from "@/components/shared/icons"
import {
    Layout,
    Server,
    Database,
    Settings,
    Code2,
    Layers,
    Cpu,
    Webhook,
    ApertureIcon,
    PowerSquare,
    Code
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
            { name: "Ant Design", icon: <Antd className="w-5 h-5" /> },
            { name: "SCSS", icon: <Sass className="w-5 h-5" /> },
            { name: "Shadcn UI", icon: <Code2 className="w-5 h-5" /> },
        ]
    },
    {
        title: "Backend",
        icon: <Server className="w-6 h-6 text-green-500" />,
        skills: [
            { name: "Next.js", icon: <NextJS className="w-5 h-5" /> },
            { name: "Node.js", icon: <NodeJS className="w-5 h-5" /> },
            { name: "Express.js", icon: <ExpressJS className="w-5 h-5" /> },
            { name: "API Development & Integration", icon: <ApertureIcon className="w-5 h-5" /> },
            { name: "Docker", icon: <Docker className="w-5 h-5" /> },
        ]
    },
    {
        title: "Database",
        icon: <Database className="w-6 h-6 text-purple-500" />,
        skills: [
            { name: "MongoDB", icon: <MongoDB className="w-5 h-5" /> },
            { name: "PostgreSQL", icon: <PostgreSQL className="w-5 h-5" /> },
            { name: "AWS", icon: <AWS className="w-5 h-5" /> },
        ]
    },
    {
        title: "AI & Tools",
        icon: <Settings className="w-6 h-6 text-orange-500" />,
        skills: [
            { name: "Git", icon: <Git className="w-5 h-5" /> },
            { name: "GitHub", icon: <GitHub className="w-5 h-5" /> },
            { name: "Postman", icon: <Postman className="w-5 h-5" /> },
            { name: "VS Code", icon: <VScode className="w-5 h-5" /> },
            { name: "ChatGPT", icon: <ChatGPT className="w-5 h-5" /> },
            { name: "GitHub Copilot", icon: <Copilot className="w-5 h-5" /> },
            { name: "Google Gemini", icon: <Gemini className="w-5 h-5" /> },
            { name: "Google Antigravity", icon: <Antigravity className="w-5 h-5" /> },
        ]
    }
]

export function SkillsSection() {
    return (
        <section id="skills" className="w-full py-16 md:py-24 mx-auto px-6 md:px-10 lg:px-16 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary inline-block mb-4">
                    Technical Expertise
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    A comprehensive overview of the technologies and tools I use to build high-performance, scalable web applications.
                </p>
            </motion.div>

            <div className="flex flex-col gap-6 w-full">
                {skillCategories.map((category, idx) => {
                    // Bento Box Layout configurations based on category
                    let innerLayout = "flex flex-wrap gap-4";
                    let bgGradient = "";

                    if (category.title === "Frontend") {
                        bgGradient = "from-blue-500/10 via-transparent to-transparent";
                    } else if (category.title === "Backend") {
                        bgGradient = "from-green-500/10 via-transparent to-transparent";
                    } else if (category.title === "Database") {
                        bgGradient = "from-purple-500/10 via-transparent to-transparent";
                    } else if (category.title === "AI & Tools" || category.title === "Tools & Others") {
                        bgGradient = "from-orange-500/10 via-transparent to-transparent";
                    }

                    return (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-6 sm:p-8 rounded-3xl bg-card border border-border backdrop-blur-xl relative group overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 w-full"
                        >
                            {/* Ambient Category Color Aura */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-50 group-hover:opacity-100 transition-opacity duration-700`} />
                            
                            {/* General Hover Overlay */}
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 rounded-2xl bg-background border border-border shadow-sm group-hover:scale-110 transition-transform duration-500">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">{category.title}</h3>
                                </div>

                                <div className={`${innerLayout}`}>
                                    {category.skills.map((skill, sIdx) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: (idx * 0.1) + (sIdx * 0.05) }}
                                            className="flex items-center gap-3 p-3 rounded-2xl border border-border/50 hover:border-border bg-background/60 hover:bg-background transition-all duration-300 shadow-sm hover:shadow-md cursor-default group/skill"
                                        >
                                            <div className="w-10 h-10 flex items-center justify-center p-2 rounded-xl bg-background border border-border/50 shadow-inner group-hover/skill:scale-110 group-hover/skill:-rotate-3 transition-transform duration-300 shrink-0">
                                                {skill.icon}
                                            </div>
                                            <span className="text-sm font-semibold tracking-wide">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
