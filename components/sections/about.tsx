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
        <section id="about" className="container py-16 md:py-24 mx-auto px-6 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary inline-block mb-4">
                    Engineering Intelligence
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Bridging the gap between complex logic and human-centric experiences.
                </p>
            </motion.div>

            <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-start max-w-7xl mx-auto">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-10"
                >
                    <div className="prose dark:prose-invert max-w-none space-y-6">
                        <p className="text-xl md:text-2xl font-bold leading-snug text-foreground">
                            I don't just write code; <br className="hidden sm:block" />
                            <span className="text-primary dark:text-primary/90">I engineer digital products that drive business value.</span>
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                            As a Full Stack Developer, I partner with businesses to turn their ideas into high-performance web applications. By bridging the gap between complex backend systems and intuitive user interfaces, I deliver products that are not only robust but also perfectly aligned with your broader business goals. 
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                            My expertise spans the entire development lifecycle—from designing scalable database architectures to crafting pixel-perfect, conversion-optimized UIs. I am passionate about creating digital experiences that leave a lasting impact and help your business scale fluidly.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
                        <motion.div
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="flex flex-col space-y-2 p-6 sm:p-8 rounded-3xl bg-background border border-border shadow-sm relative group overflow-hidden transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-100 transition-opacity" />
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-colors" />
                            
                            <div className="relative z-10 flex flex-col pt-2">
                                <span className="text-5xl font-black text-primary flex items-baseline tracking-tighter">
                                    <Counter value={3} />
                                    <span className="text-2xl ml-1 text-primary/80">+</span>
                                </span>
                                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground mt-2">Years Experience</span>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="flex flex-col space-y-2 p-6 sm:p-8 rounded-3xl bg-background border border-border shadow-sm relative group overflow-hidden transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-transparent to-transparent opacity-100 transition-opacity" />
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-colors" />

                            <div className="relative z-10 flex flex-col pt-2">
                                <span className="text-5xl font-black text-primary flex items-baseline tracking-tighter">
                                    <Counter value={10} />
                                    <span className="text-2xl ml-1 text-primary/80">+</span>
                                </span>
                                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground mt-2">Projects Delivered</span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                        {[
                            "Full Stack Development", 
                            "AI Integration", 
                            "System Architecture", 
                            "Performance Optimization",
                            "Cloud Infrastructure",
                            "API Development",
                            "Scalable Solutions",
                            "Agile Delivery"
                        ].map((tag) => (
                            <div key={tag} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/50 border border-border/60 text-sm font-semibold backdrop-blur-sm hover:bg-primary/10 hover:border-primary/30 transition-colors shadow-sm cursor-default">
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
                    className="relative lg:mt-6"
                >
                    {/* Glowing background aura */}
                    <div className="absolute -inset-1 blur-[80px] bg-gradient-to-tr from-primary/20 to-transparent opacity-50 -z-10 rounded-full" />
                    
                    <Card className="bg-card/60 backdrop-blur-xl border border-border shadow-xl shadow-black/10 dark:shadow-black/20 overflow-hidden relative group transition-all duration-300 rounded-3xl">
                        <div className="absolute inset-0 bg-grid-white/5 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

                        <CardContent className="p-6 sm:p-8 grid gap-4">
                            {[
                                { icon: <Brain className="w-5 h-5" />, title: "AI-Driven Development", desc: "Leveraging LLMs for optimized workflows", color: "text-primary", bg: "bg-primary/10 border-primary/20" },
                                { icon: <Terminal className="w-5 h-5" />, title: "Clean Architecture", desc: "Scalable, maintainable codebases", color: "text-purple-500", bg: "bg-purple-500/10 border-purple-500/20" },
                                { icon: <Code2 className="w-5 h-5" />, title: "Full Stack Mastery", desc: "React, Next.js, Node.js, MongoDB", color: "text-blue-500", bg: "bg-blue-500/10 border-blue-500/20" },
                                { icon: <Rocket className="w-5 h-5" />, title: "Performance First", desc: "Optimized for speed and SEO", color: "text-green-500", bg: "bg-green-500/10 border-green-500/20" }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                                    className="flex items-start space-x-5 p-5 rounded-2xl border border-border bg-background/80 dark:bg-background/50 hover:bg-card hover:shadow-md transition-all shadow-sm group/item cursor-default"
                                >
                                    <div className={`p-3 rounded-xl ${item.bg} ${item.color} border shadow-inner group-hover/item:scale-110 group-hover/item:-rotate-3 transition-transform duration-300 shrink-0`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col justify-center pt-0.5">
                                        <h3 className="font-bold text-foreground text-base sm:text-lg mb-1 group-hover/item:text-primary transition-colors">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
