"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase } from "lucide-react"

const experience = [
    {
        company: "Intellimedia Networks",
        role: "Fullstack Engineer",
        duration: "07-2024 to Present",
        location: "Ahmedabad, India",
        description: "Driving the development of scalable enterprise applications with a core focus on advanced backend architectures. Deepened technical expertise by orchestrating containerized deployments using Docker, designing scalable databases, and engineering robust APIs.",
        skills: ["Next.js", "AntD", "Shadcn UI", "Node.js", "Express.js", "MongoDB", "TypeScript", "TypeORM", "AWS", "Docker"],
    },
    {
        company: "Syndell Technologies",
        role: "Jr. Fullstack Developer",
        duration: "03-2023 to 02-2024",
        location: "Ahmedabad, India",
        description: "Engineered comprehensive full-stack solutions, mastering high-performance frontend development with React while successfully establishing core backend infrastructure. Implemented solid relational database models and developed highly responsive user interfaces.",
        skills: ["React.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Tailwind CSS", "Redux Toolkit"],
    },
    {
        company: "KerInfotech",
        role: "React.js Intern",
        duration: "08-2022 to 03-2023",
        location: "Ahmedabad, India",
        description: "Developed scalable and modular React architectures, accelerating feature delivery. Enforced clean code principles and collaborated with senior engineers to transform complex UI/UX requirements into highly interactive web applications.",
        skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "GitHub"],
    },
]

export function ExperienceSection() {
    return (
        <section id="experience" className="container py-16 md:py-20 mx-auto px-6 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
            >
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary inline-block mb-3">
                    Professional Journey
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    A timeline of my professional growth, technical evolution, and contributions to various engineering teams.
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8 relative">
                {/* Visual Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-px bg-border/50 -translate-x-1/2 hidden md:block" />

                {experience.map((job, index) => (
                    <motion.div
                        key={job.company + job.role}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 md:left-1/2 md:top-4 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/20 -translate-x-1/2 z-10" />

                        <div className="w-full md:w-1/2">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-2xl bg-card border border-border shadow-md backdrop-blur-xl relative group overflow-hidden hover:shadow-lg transition-all duration-300"
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                            <Briefcase className="w-3 h-3" />
                                            {job.role}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                                            <Calendar className="w-4 h-4" />
                                            {job.duration}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{job.company}</h3>

                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                                        <MapPin className="w-4 h-4" />
                                        {job.location}
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        {job.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {job.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-xs font-medium rounded-lg bg-secondary/50 border border-border group-hover:border-primary/20 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Spacer for the other side */}
                        <div className="hidden md:block w-1/2" />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
