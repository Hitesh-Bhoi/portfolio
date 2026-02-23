"use client"

import { motion } from "framer-motion"
import { GitHub, LinkedIn, Twitter } from "@/components/shared/icons"
import { Logo } from "@/components/shared/logo"
import Link from "next/link"
import { ArrowUp, Mail, ArrowRight, Sparkles } from "lucide-react"

export function Footer() {
    const socialLinks = [
        { icon: <GitHub className="w-5 h-5" />, href: "https://github.com/hitesh", label: "GitHub" },
        { icon: <LinkedIn className="w-5 h-5" />, href: "https://linkedin.com/in/hitesh", label: "LinkedIn" },
        { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/hitesh", label: "Twitter" },
    ]

    const marqueeItems = [
        "React.js", "Next.js", "Node.js", "MongoDB", "TypeScript",
        "AI Integration", "Clean Code", "Scalable Architecture",
        "Performance First", "Creative Coding"
    ]

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="relative bg-background pt-24 pb-12 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            {/* CTA Section */}
            <div className="container mx-auto px-6 mb-24 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest">
                        <Sparkles className="w-4 h-4" />
                        Available for new projects
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none max-w-4xl">
                        LET'S BUILD SOMETHING <span className="text-primary italic">EXTRAORDINARY</span> TOGETHER
                    </h2>

                    <Link href="#contact" className="group relative">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary text-primary-foreground px-10 py-6 rounded-3xl text-xl font-black flex items-center gap-3 shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-shadow"
                        >
                            <Mail className="w-6 h-6" />
                            GET IN TOUCH
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                    </Link>
                </motion.div>
            </div>

            {/* Scrolling Marquee */}
            <div className="border-y border-border/50 bg-secondary/30 backdrop-blur-sm py-6 mb-24 overflow-hidden flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex gap-12 items-center min-w-full"
                >
                    {[...marqueeItems, ...marqueeItems].map((item, i) => (
                        <span key={i} className="text-xl md:text-2xl font-black text-muted-foreground/30 flex items-center gap-8">
                            {item}
                            <span className="w-3 h-3 rounded-full bg-primary/50" />
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Main Footer Layout */}
            <div className="container mx-auto px-6 max-w-7xl relative">
                <div className="grid gap-16 lg:grid-cols-12 mb-24">
                    {/* Brand Meta */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="flex items-center gap-4">
                            <Logo className="w-12 h-12" />
                            <span className="text-2xl font-black tracking-tighter">HITESH.</span>
                        </div>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                            A Fullstack Engineer dedicated to crafting digital excellence through code and intelligence.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-secondary border border-border hover:border-primary/50 hover:text-primary hover:-translate-y-1 transition-all shadow-sm"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="space-y-6">
                            <h4 className="font-black text-sm uppercase tracking-widest text-primary">Sitemap</h4>
                            <ul className="space-y-4 text-muted-foreground font-medium">
                                <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
                                <li><Link href="#skills" className="hover:text-primary transition-colors">Skills</Link></li>
                                <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
                                <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="font-black text-sm uppercase tracking-widest text-primary">Resources</h4>
                            <ul className="space-y-4 text-muted-foreground font-medium">
                                <li><Link href="#" className="hover:text-primary transition-colors">Resume</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Workflow</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-1 border border-primary/20 bg-primary/5 p-8 rounded-[2rem] flex flex-col justify-between">
                            <p className="font-bold text-lg leading-tight mb-4">
                                "The only way to do great work is to love what you do."
                            </p>
                            <span className="text-xs font-black uppercase tracking-widest text-primary">— Steve Jobs</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6 text-sm font-bold text-muted-foreground">
                        <span className="text-foreground">© {new Date().getFullYear()}</span>
                        <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
                    </div>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary border border-border text-sm font-black uppercase tracking-widest hover:border-primary/30 hover:text-primary transition-all shadow-sm"
                    >
                        Back to Top
                        <ArrowUp className="w-4 h-4" />
                    </motion.button>
                </div>
            </div>
        </footer>
    )
}
