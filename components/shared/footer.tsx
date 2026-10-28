"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail, MapPin, ArrowUp, Phone } from "lucide-react"
import { Logo } from "@/components/shared/logo"
import { SOCIAL_LINKS } from "@/lib/social-links"
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
            { name: "About", href: "/about" },
            { name: "Skills", href: "/skills" },
            { name: "Projects", href: "/projects" },
            { name: "Experience", href: "/experience" },
            { name: "Services", href: "/services" },
            { name: "Resume", href: "/resume" },
            { name: "FAQ", href: "/faq" },
            { name: "Contact", href: "/contact" },
        ],
        socials: [
            { name: SOCIAL_LINKS.github.name, href: SOCIAL_LINKS.github.href, label: SOCIAL_LINKS.github.label, icon: Github },
            { name: SOCIAL_LINKS.linkedin.name, href: SOCIAL_LINKS.linkedin.href, label: SOCIAL_LINKS.linkedin.label, icon: Linkedin },
            { name: SOCIAL_LINKS.instagram.name, href: SOCIAL_LINKS.instagram.href, label: SOCIAL_LINKS.instagram.label, icon: Instagram },
        ],
        services: [
            "Landing pages & business websites",
            "Custom full-stack web apps",
            "E-commerce platforms",
            "Performance & SEO",
        ],
        contact: [
            {
                label: "bhoihitesh183@gmail.com",
                href: "mailto:bhoihitesh183@gmail.com",
                icon: Mail,
            },
            {
                label: "+91 8200861893",
                href: "tel:+918200861893",
                icon: Phone,
            },
            { label: "Ahmedabad, Gujarat, India", icon: MapPin },
        ]
    }

    return (
        <footer className="relative bg-background border-t border-border/50 pt-16 pb-8 w-full overflow-hidden">
            {/* Subtle Background Radial Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-150 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 mx-auto">
                {/* Brand Section */}
                <div className="mb-12 grid grid-cols-2 items-start gap-x-8 gap-y-10 md:grid-cols-3 2xl:grid-cols-[minmax(0,1.5fr)_minmax(0,0.8fr)_minmax(0,1.1fr)_minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1fr)]">
                    <div className="min-w-0 max-w-sm space-y-6">
                        <div className="flex items-center gap-3">
                            <Logo className="w-16 h-16" />
                            <h1 className="text-2xl font-black tracking-tighter uppercase italic">Bhoi Hitesh</h1>
                        </div>
                        <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                            I’m a Full Stack AI Engineer specializing in MERN stack development, building scalable web applications and integrating AI capabilities into practical, user-focused digital products.
                        </p>
                    </div>

                    {/* Sitemap */}
                    <div className="min-w-0 space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/80">Sitemap</h4>
                        <ul className="space-y-3 text-sm font-medium leading-relaxed text-foreground/70 shadow-none">
                            {navigation.sitemap.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="transition-all duration-300 hover:text-primary inline-flex items-center group hover:translate-x-1"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="min-w-0 space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/80">Services</h4>
                        <ul className="space-y-3 text-sm font-medium leading-relaxed text-foreground/70">
                            {navigation.services.map((service) => (
                                <li key={service}>{service}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="min-w-0 space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/80">Connect</h4>
                        <ul className="space-y-3 text-sm font-medium leading-relaxed text-foreground/70">
                            {navigation.socials.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.label}
                                        className="transition-all duration-300 hover:text-primary inline-flex items-center gap-2.5 group hover:translate-x-1"
                                    >
                                        <item.icon className="w-4 h-4" />
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="min-w-0 space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/80">Contact</h4>
                        <ul className="space-y-3 text-sm font-medium leading-relaxed text-foreground/70">
                            {navigation.contact.map((item) => (
                                <li key={item.label}>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="transition-colors hover:text-primary inline-flex items-start gap-2.5"
                                        >
                                            <item.icon className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span className="break-words">{item.label}</span>
                                        </a>
                                    ) : (
                                        <span className="inline-flex items-start gap-2.5">
                                            <item.icon className="w-4 h-4 mt-0.5 shrink-0" />
                                            <span>{item.label}</span>
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Availability */}
                    <div className="min-w-0 space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/80">Availability</h4>
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-500 font-semibold text-sm shadow-sm md:w-fit group hover:bg-green-500/20 transition-colors cursor-default">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]" />
                                Available for hire
                            </div>
                            <p className="text-sm font-medium leading-relaxed text-foreground/70">
                                Open to full-time roles and freelance collaborations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Solid Divider */}
                <div className="w-full h-px bg-border/50 mb-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-wrap justify-center gap-6 text-[11px] font-black uppercase tracking-widest text-muted-foreground/60">
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
                            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-4 rounded-full bg-background/80 backdrop-blur-md border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all shadow-xl hover:shadow-primary/20"
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
