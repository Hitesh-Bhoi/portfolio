"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, MapPin, ExternalLink, ArrowUp } from "lucide-react"
import { Logo } from "@/components/shared/logo"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Footer() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const navigation = {
        sitemap: [
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Projects", href: "#projects" },
            { name: "Experience", href: "#experience" },
            { name: "Contact", href: "#contact" },
        ],
        socials: [
            { name: "GitHub", href: process.env.NEXT_PUBLIC_GITHUB, icon: Github },
            { name: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKED_IN, icon: Linkedin },
        ],
        contact: [
            { label: "Email", value: process.env.NEXT_PUBLIC_EMAIL, icon: Mail },
            { label: "Location", value: "Ahmedabad, Gujarat, India", icon: MapPin },
        ]
    }

    return (
        <footer className="relative bg-background border-t border-border/50 pt-20 pb-10">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Brand Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                    <div className="space-y-6 max-w-sm">
                        <div className="flex items-center gap-3">
                            <Logo className="w-16 h-16" />
                            <span className="text-2xl font-black tracking-tighter uppercase italic">Hitesh.</span>
                        </div>
                        <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                            Building digital products with a focus on clean aesthetics, performance, and user-centric design.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24">
                        {/* Sitemap */}
                        <div className="space-y-6">
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/50">Sitemap</h4>
                            <ul className="space-y-4">
                                {navigation.sitemap.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-foreground/70 hover:text-primary font-bold transition-colors inline-flex items-center group"
                                        >
                                            {item.name}
                                            <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Socials */}
                        <div className="space-y-6">
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/50">Connect</h4>
                            <ul className="space-y-4">
                                {navigation.socials.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-foreground/70 hover:text-primary font-bold transition-colors inline-flex items-center gap-2"
                                        >
                                            <item.icon className="w-4 h-4" />
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Info */}
                        <div className="space-y-6 col-span-2 sm:col-span-1">
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/50">Availability</h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-foreground/70 font-bold">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Available for hire
                                </div>
                                <p className="text-sm text-muted-foreground font-medium">
                                    Open to full-time roles and freelance collaborations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-border/30">
                    <div className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        <span>© {new Date().getFullYear()} All Rights Reserved</span>
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="hidden lg:flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/30">
                            Crafted with Precision
                        </div>
                        <motion.button
                            onClick={scrollToTop}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ 
                                opacity: isVisible ? 1 : 0, 
                                scale: isVisible ? 1 : 0.8,
                                pointerEvents: isVisible ? "auto" : "none"
                            }}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-4 rounded-full bg-background/80 backdrop-blur-md border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all shadow-lg"
                            aria-label="Back to Top"
                        >
                            <ArrowUp className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
