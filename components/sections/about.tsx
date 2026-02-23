"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { Code2, Brain, Rocket, Terminal, Sparkles, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef } from "react"

function Counter({ value, direction = "up" }: { value: number; direction?: "up" | "down" }) {
    const ref = useRef<HTMLSpanElement>(null)
    const motionValue = useMotionValue(direction === "down" ? value : 0)
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    })
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [motionValue, value, isInView])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US").format(Math.round(latest))
            }
        })
    }, [springValue])

    return <span ref={ref} />
}

export function AboutSection() {
    return (
        <section id="about" className="container py-24 mx-auto px-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 -z-10 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Brain className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">About Me</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary inline-block">
                    Engineering Intelligence
                </h2>
                <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
                    Bridging the gap between complex logic and human-centric experiences.
                </p>
            </motion.div>

            <div className="grid gap-16 lg:grid-cols-2 items-start max-w-7xl mx-auto">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="prose dark:prose-invert max-w-none">
                        <p className="text-lg leading-relaxed text-foreground font-medium">
                            I don't just write code; I engineer <span className="text-primary font-bold">intelligent, scalable solutions</span> that solve real-world problems.
                        </p>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            As a Full Stack Developer empowered by advanced AI workflows, I specialize in building high-performance web applications that bridge the gap between complex backend logic and intuitive user interfaces. My deep understanding of both <strong>classic software architecture</strong> and <strong>emerging AI technologies</strong> allows me to deliver products that are not only robust but also future-ready.
                        </p>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            My expertise spans the entire development lifecycle—from designing database architectures to crafting pixel-perfect UIs with Next.js. I am passionate about <strong>Clean Code</strong>, <strong>Performance Optimization</strong>, and creating digital experiences that leave a lasting impact.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-4">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="flex flex-col space-y-2 p-8 rounded-[2rem] bg-card border border-border/50 shadow-xl backdrop-blur-xl relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10 flex flex-col">
                                <span className="text-4xl font-black text-primary mb-2 flex items-baseline">
                                    <Counter value={3} />
                                    <span className="text-xl ml-1 group-hover:translate-x-1 transition-transform">+</span>
                                </span>
                                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Years Experience</span>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="flex flex-col space-y-2 p-8 rounded-[2rem] bg-card border border-border/50 shadow-xl backdrop-blur-xl relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10 flex flex-col">
                                <span className="text-4xl font-black text-purple-500 mb-2 flex items-baseline">
                                    <Counter value={10} />
                                    <span className="text-xl ml-1 group-hover:translate-x-1 transition-transform">+</span>
                                </span>
                                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Projects Delivered</span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {["Full Stack Development", "AI Integration", "System Architecture", "Performance Optimization"].map((tag) => (
                            <div key={tag} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 border border-border text-sm font-semibold">
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                {tag}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Visual Content Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative lg:mt-12"
                >
                    <div className="absolute inset-0 bg-primary/10 rounded-[3rem] blur-3xl -z-10 animate-pulse" />

                    <Card className="bg-card/40 backdrop-blur-2xl border-border/50 rounded-[3rem] shadow-2xl overflow-hidden relative group">
                        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

                        <CardContent className="p-10 space-y-10">
                            {[
                                { icon: <Brain className="w-6 h-6" />, title: "AI-Driven Development", desc: "Leveraging LLMs for optimized workflows", color: "text-primary", bg: "bg-primary/10" },
                                { icon: <Terminal className="w-6 h-6" />, title: "Clean Architecture", desc: "Scalable, maintainable codebases", color: "text-purple-500", bg: "bg-purple-500/10" },
                                { icon: <Code2 className="w-6 h-6" />, title: "Full Stack Mastery", desc: "React, Next.js, Node.js, MongoDB", color: "text-blue-500", bg: "bg-blue-500/10" },
                                { icon: <Rocket className="w-6 h-6" />, title: "Performance First", desc: "Optimized for speed and SEO", color: "text-green-500", bg: "bg-green-500/10" }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                                    className="flex items-center space-x-6 group/item"
                                >
                                    <div className={`p-4 rounded-2xl ${item.bg} ${item.color} ring-1 ring-border shadow-sm group-hover/item:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground text-lg mb-1">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Decorative Sparkle */}
                    <div className="absolute -top-6 -right-6 p-4 rounded-2xl bg-background border border-border shadow-2xl animate-bounce">
                        <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
