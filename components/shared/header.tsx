"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Code2 } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { Logo } from "@/components/shared/logo"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="flex justify-between h-20 w-full items-center px-6 md:px-10 lg:px-16">
                <div className="mr-4 hidden md:flex">
                    <Link className="mr-6 flex items-center space-x-2" href="/">
                        <Logo className="h-16 w-16 -ml-2" />
                    </Link>
                    <nav className="flex items-center gap-1 text-sm font-medium">
                        {[
                            { name: "About", href: "/#about" },
                            { name: "Skills", href: "/#skills" },
                            { name: "Projects", href: "/#projects" },
                            { name: "Experience", href: "/#experience" },
                            { name: "Services", href: "/#services" },
                            { name: "Resume", href: "/resume" },
                            { name: "FAQ", href: "/#faq" },
                            { name: "Contact", href: "/#contact" },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="group relative px-4 py-2 transition-colors text-foreground/60 hover:text-foreground"
                            >
                                <span className="relative z-10">{link.name}</span>
                                {/* Background Pill */}
                                <span className="absolute inset-0 z-0 rounded-full bg-secondary/80 opacity-0 scale-90 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 shadow-sm" />
                                {/* Bottom Glowing Line */}
                                <span className="absolute bottom-1 left-1/2 z-10 h-[2px] w-0 -translate-x-1/2 rounded-full bg-primary opacity-0 transition-all duration-300 ease-out group-hover:w-3/4 group-hover:opacity-100 shadow-[0_0_8px_hsl(var(--primary))]" />
                            </Link>
                        ))}
                    </nav>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                        <nav className="grid gap-2 text-lg font-medium p-6 pt-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 text-lg font-semibold mb-6"
                                >
                                    <Logo className="h-12 w-12" />
                                    <span className="sr-only">Hitesh Portfolio</span>
                                </Link>
                            </motion.div>
                            
                            {[
                                { name: "About", href: "/#about" },
                                { name: "Skills", href: "/#skills" },
                                { name: "Projects", href: "/#projects" },
                                { name: "Experience", href: "/#experience" },
                                { name: "Services", href: "/#services" },
                                { name: "Resume", href: "/resume" },
                                { name: "FAQ", href: "/#faq" },
                                { name: "Contact", href: "/#contact" },
                            ].map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.15 + (index * 0.05), ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <Link
                                        href={link.href}
                                        className="group relative flex items-center overflow-hidden rounded-lg px-4 py-3 text-muted-foreground transition-all duration-300 hover:bg-secondary/50 hover:text-foreground hover:translate-x-2"
                                    >
                                        <span className="relative z-10 font-medium">{link.name}</span>
                                        {/* Left accent bar on hover */}
                                        <span className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-primary transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                    </div>
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}
