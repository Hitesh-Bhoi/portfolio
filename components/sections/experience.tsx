"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase } from "lucide-react"

const experience = [
    {
        company: "Intellimedia Networks",
        role: "Fullstack Engineer",
        duration: "07-2024 to Present",
        location: "Ahmedabad, India",
        description: "Designing and implementing scalable full-stack features for enterprise-level applications. Optimizing system performance and leading frontend architecture improvements using Next.js and high-performance backend microservices.",
        skills: ["Next.js", "Node.js", "MongoDB", "TypeScript", "Microservices"],
    },
    {
        company: "Syndell Technologies",
        role: "Jr. Fullstack Developer",
        duration: "03-2023 to 02-2024",
        location: "Ahmedabad, India",
        description: "Contributed to the development of robust web solutions, focusing on both frontend responsiveness and backend efficiency. Integrated complex third-party APIs and managed database migrations.",
        skills: ["React.js", "Express.js", "PostgreSQL", "Tailwind CSS", "Redux"],
    },
    {
        company: "KerInfotech",
        role: "React.js Intern",
        duration: "08-2022 to 03-2023",
        location: "Ahmedabad, India",
        description: "Assisted in building modular UI components and implementing core application logic. Focused on writing clean, reusable code and learning industry best practices for frontend development.",
        skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Git"],
    },
]

export function ExperienceSection() {
    return (
        <section id="experience" className="container py-24 mx-auto px-6 relative">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary inline-block">
                    Professional Journey
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
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
                        <div className="absolute left-0 md:left-1/2 -top-2 md:top-4 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/20 -translate-x-1/2 z-10" />

                        <div className="w-full md:w-1/2">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-3xl bg-card border border-border/50 shadow-xl backdrop-blur-xl relative group overflow-hidden"
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
