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
    const res = useResponsive()
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

    // Radius logic: Mobile (<640), Tablet (640-1024), Desktop (>1024)
    const getRadius = (desktop: number, tablet: number, mobile: number) => {
        if (res.isMobile) return mobile
        if (res.isTablet) return tablet
        return desktop
    }

    return (
        <section id="hero" className="relative w-full flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-10 py-12 lg:py-20 text-center lg:text-left lg:flex-row lg:gap-20 mx-auto px-4 sm:px-6 overflow-hidden">
            <div className="flex-1 space-y-6 z-10 w-full max-w-2xl px-4 lg:px-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
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
                    className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                >
                    Hi, I'm <span className="text-primary">Hitesh</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl font-bold text-muted-foreground lg:text-3xl min-h-[3rem] flex items-center justify-center lg:justify-start"
                >
                    <TypingEffect roles={roles} />
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-xl text-lg text-muted-foreground md:text-xl mx-auto lg:mx-0 leading-relaxed"
                >
                    Building seamless web experiences with modern technologies.
                    Expert in React, Next.js, Node.js, and scaling full-stack applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
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
                    className="flex items-center justify-center lg:justify-start gap-4 pt-4"
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
                className="flex-1 flex justify-center items-center relative w-full h-[380px] sm:h-[550px] lg:h-[600px] mt-10 lg:mt-0"
            >
                {/* Background Glows — flat indigo, no gradient */}
                <div className="absolute h-64 w-64 lg:h-96 lg:w-96 rounded-full bg-primary/10 blur-[120px] animate-pulse" />
                <div className="absolute h-48 w-48 lg:h-72 lg:w-72 rounded-full bg-primary/5 blur-[100px] -bottom-20 -right-20 animate-pulse delay-700" />

                {/* Tech Stack Orbit Container */}
                <div className="relative w-full max-w-[680px] aspect-square flex items-center justify-center scale-[0.85] sm:scale-100 lg:scale-100">
                    {/* Central Code Icon */}
                    <div className="relative z-30 h-16 w-16 sm:h-20 sm:w-20 lg:h-32 lg:w-32 flex items-center justify-center rounded-full bg-background border border-primary/20 shadow-[0_0_50px_-12px_rgba(var(--primary),0.3)] backdrop-blur-xl group">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 text-foreground transition-transform duration-300 group-hover:scale-110">
                            <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                        </svg>
                        <div className="absolute inset-0 rounded-full bg-primary/5 pointer-events-none" />
                    </div>

                    {/* Outer Ring */}
                    <Ring
                        icons={techStack.outer}
                        radius={getRadius(320, 260, 190)}
                        duration={40}
                    />

                    {/* Middle Ring */}
                    <Ring
                        icons={techStack.middle}
                        radius={getRadius(235, 190, 125)}
                        duration={30}
                        reverse
                    />

                    {/* Inner Ring */}
                    <Ring
                        icons={techStack.inner}
                        radius={getRadius(150, 120, 65)}
                        duration={20}
                    />

                    {/* Concentric Design Rings — diameters = radius × 2 */}
                    <div className="absolute h-[640px] w-[640px] rounded-full border border-primary/10 pointer-events-none hidden lg:block" />
                    <div className="absolute h-[470px] w-[470px] rounded-full border border-purple-500/10 pointer-events-none hidden lg:block" />
                    <div className="absolute h-[300px] w-[300px] rounded-full border border-primary/10 pointer-events-none hidden lg:block" />
                </div>
            </motion.div>
        </section>
    )
}


function useResponsive() {
    const [state, setState] = React.useState({
        isMobile: false,
        isTablet: false,
        isDesktop: true
    })

    React.useEffect(() => {
        const update = () => {
            const w = window.innerWidth
            setState({
                isMobile: w < 640,
                isTablet: w >= 640 && w < 1024,
                isDesktop: w >= 1024
            })
        }
        update()
        window.addEventListener("resize", update)
        return () => window.removeEventListener("resize", update)
    }, [])

    return state
}

function TechIcon({ icon, label, className }: { icon: React.ReactNode, label?: string, className?: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.2, zIndex: 50 }}
            className={`flex flex-col items-center gap-2 ${className || ''}`}
        >
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-card border border-border shadow-lg lg:shadow-xl backdrop-blur-sm p-2 sm:p-3 lg:p-3.5 transition-all hover:border-primary/40 hover:scale-105 group-hover:shadow-primary/10">
                <div className="w-full h-full flex items-center justify-center">
                    {icon}
                </div>
            </div>
            {label && (
                <span className="absolute -bottom-6 text-[10px] lg:text-[11px] font-bold text-muted-foreground/80 bg-background/60 px-2 py-0.5 rounded-full backdrop-blur-md border border-border/40 shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {label}
                </span>
            )}
        </motion.div>
    )
}

interface RingProps {
    icons: { node: React.ReactNode; label?: string }[];
    radius: number;
    duration?: number;
    reverse?: boolean;
    className?: string;
}

function Ring({
    icons,
    radius,
    duration = 30,
    reverse = false,
    className = "",
}: RingProps) {
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

                const x = Math.cos(angleRad) * radius
                const y = Math.sin(angleRad) * radius

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



