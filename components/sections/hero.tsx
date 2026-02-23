"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/shared/logo"
import {
    ReactJS,
    NextJS,
    NodeJS,
    MongoDB,
    JavaScript,
    TypeScript,
    AWS,
    Antd,
    PostgreSQL,
    Sass,
    ExpressJS,
    TailwindCSS,
    Git,
    GitHub,
    LinkedIn,
    Twitter
} from "@/components/shared/icons"

const roles = [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Expert",
    "Backend Developer"
]

function TypingEffect({ roles }: { roles: string[] }) {
    const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0)
    const [currentText, setCurrentText] = React.useState("")
    const [isDeleting, setIsDeleting] = React.useState(false)

    React.useEffect(() => {
        const currentRole = roles[currentRoleIndex]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentText.length < currentRole.length) {
                    setCurrentText(currentRole.slice(0, currentText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(currentText.slice(0, -1))
                } else {
                    setIsDeleting(false)
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timeout)
    }, [currentText, isDeleting, currentRoleIndex, roles])

    return (
        <span className="text-primary">
            {currentText}
            <span className="animate-pulse">|</span>
        </span>
    )
}

export function HeroSection() {
    const socialLinks = [
        { icon: <GitHub className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
        { icon: <LinkedIn className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", label: "Twitter" },
    ]

    const techStack = {
        outer: [
            { node: <ReactJS />, label: 'React' },
            { node: <NextJS />, label: 'Next.js' },
            { node: <JavaScript />, label: 'JavaScript' },
            { node: <TypeScript />, label: 'TypeScript' },
            { node: <TailwindCSS />, label: 'Tailwind' },
            { node: <Antd />, label: 'AntD' },
            { node: <Sass />, label: 'Sass' },
        ],
        middle: [
            { node: <NodeJS />, label: 'Node.js' },
            { node: <ExpressJS />, label: 'Express' },
            { node: <AWS />, label: 'AWS' },
            { node: <Git />, label: 'Git' },
            { node: <PostgreSQL />, label: 'Postgres' },
        ],
        inner: [
            { node: <MongoDB />, label: 'MongoDB' },
            { node: <GitHub />, label: 'GitHub' },
        ]
    }

    return (
        <section id="hero" className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-10 py-12 text-center md:text-left md:flex-row md:space-y-0 md:space-x-20 mx-auto px-6 overflow-hidden">
            <div className="flex-1 space-y-6 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap items-center justify-center md:justify-start gap-3"
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Open to Work
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl"
                >
                    Hi, I'm <span className="text-primary">Hitesh</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl font-bold text-muted-foreground lg:text-3xl min-h-12 flex items-center justify-center md:justify-start"
                >
                    <TypingEffect roles={roles} />
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-xl text-lg text-muted-foreground md:text-xl mx-auto md:mx-0 leading-relaxed"
                >
                    Building seamless web experiences with modern technologies.
                    Expert in React, Next.js, Node.js, and scaling full-stack applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
                >
                    <Button asChild size="lg" className="h-12 px-8 text-lg rounded-xl">
                        <Link href="#contact">
                            Contact Me <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="h-12 px-8 text-lg rounded-xl border-primary/20 hover:bg-primary/5">
                        <Link href="/resume.pdf" target="_blank">
                            Download Resume <Download className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-center justify-center md:justify-start gap-4 pt-4"
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            whileHover={{ y: -5, scale: 1.1 }}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 rounded-2xl bg-muted border border-border hover:border-primary/50 hover:text-primary transition-colors duration-300"
                            aria-label={social.label}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
                className="flex-1 flex justify-center items-center relative w-full h-[400px] md:h-[600px]"
            >
                {/* Background Glows — flat indigo, no gradient */}
                <div className="absolute h-64 w-64 md:h-96 md:w-96 rounded-full bg-primary/10 blur-[120px] animate-pulse" />
                <div className="absolute h-48 w-48 md:h-72 md:w-72 rounded-full bg-primary/5 blur-[100px] -bottom-20 -right-20 animate-pulse delay-700" />

                {/* Tech Stack Orbit Container */}
                <div className="relative w-full max-w-[720px] aspect-square flex items-center justify-center scale-90 md:scale-100">
                    {/* Central Code Icon */}
                    <div className="relative z-30 h-24 w-24 md:h-32 md:w-32 flex items-center justify-center rounded-full bg-background border border-primary/20 shadow-[0_0_50px_-12px_rgba(var(--primary),0.3)] backdrop-blur-xl group">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 md:w-16 md:h-16 text-foreground transition-transform duration-300 group-hover:scale-110">
                            <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                        </svg>
                        <div className="absolute inset-0 rounded-full bg-primary/5 pointer-events-none" />
                    </div>

                    {/* Outer Ring — radius 320px */}
                    <Ring
                        icons={techStack.outer}
                        radius={320}
                        mobileRadius={250}
                        duration={40}
                    // className="opacity-100"
                    />

                    {/* Middle Ring — radius 235px (gap ≈ 85px > 64px icon) */}
                    <Ring
                        icons={techStack.middle}
                        radius={235}
                        mobileRadius={180}
                        duration={30}
                        reverse
                    // className="opacity-100"
                    />

                    {/* Inner Ring — radius 150px (gap ≈ 85px > 64px icon) */}
                    <Ring
                        icons={techStack.inner}
                        radius={150}
                        mobileRadius={115}
                        duration={20}
                    // className="opacity-100"
                    />

                    {/* Concentric Design Rings — diameters = radius × 2 */}
                    <div className="absolute h-[640px] w-[640px] rounded-full border border-primary/10 pointer-events-none hidden md:block" />
                    <div className="absolute h-[470px] w-[470px] rounded-full border border-purple-500/10 pointer-events-none hidden md:block" />
                    <div className="absolute h-[300px] w-[300px] rounded-full border border-primary/10 pointer-events-none hidden md:block" />
                </div>
            </motion.div>
        </section>
    )
}

function TechIcon({ icon, label, className }: { icon: React.ReactNode, label?: string, className?: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.2, zIndex: 50 }}
            className={`flex flex-col items-center gap-2 ${className || ''}`}
        >
            <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-card border border-border shadow-xl backdrop-blur-sm p-2.5 md:p-3.5 transition-all hover:border-primary/40 hover:scale-105">
                <div className="w-full h-full">
                    {icon}
                </div>
            </div>
            {label && (
                <span className="text-[10px] md:text-[11px] font-bold text-muted-foreground/80 bg-background/60 px-2 py-0.5 rounded-full backdrop-blur-md border border-border/40 shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {label}
                </span>
            )}
        </motion.div>
    )
}

interface RingProps {
    icons: { node: React.ReactNode; label?: string }[];
    radius: number;
    mobileRadius: number;
    duration?: number;
    reverse?: boolean;
    className?: string;
}

function Ring({
    icons,
    radius,
    mobileRadius,
    duration = 30,
    reverse = false,
    className = "",
}: RingProps) {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const currentRadius = isMobile ? mobileRadius : radius;
    const n = icons.length

    return (
        <motion.div
            animate={{ rotate: reverse ? -360 : 360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
            className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}
        >
            {icons.map((ic, i) => {
                const angle = (360 / n) * i
                const angleRad = (angle * Math.PI) / 180

                // Calculate position using standard trigonometry
                const x = Math.cos(angleRad) * currentRadius
                const y = Math.sin(angleRad) * currentRadius

                return (
                    <div
                        key={i}
                        className="absolute group pointer-events-auto"
                        style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <motion.div
                            animate={{ rotate: reverse ? 360 : -360 }}
                            transition={{ duration, repeat: Infinity, ease: "linear" }}
                        >
                            <TechIcon icon={ic.node} label={ic.label} />
                        </motion.div>
                    </div>
                )
            })}
        </motion.div>
    )
}


