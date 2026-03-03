"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Code2 } from "lucide-react"

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
            <div className="flex justify-between h-14 w-full items-center">
                <div className="mr-4 hidden md:flex">
                    <Link className="mr-6 flex items-center space-x-2" href="/">
                        <Logo className="h-14 w-14" />
                    </Link>
                    <nav className="flex items-center gap-6 text-sm font-medium">
                        <Link
                            href="#about"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            About
                        </Link>
                        <Link
                            href="#experience"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Experience
                        </Link>
                        <Link
                            href="#skills"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Skills
                        </Link>
                        <Link
                            href="#projects"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/resume"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Resume
                        </Link>
                        <Link
                            href="#faq"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            FAQ
                        </Link>
                        <Link
                            href="#contact"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Contact
                        </Link>
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
                        <nav className="grid gap-6 text-lg font-medium p-6 pt-10">
                            <Link
                                href="#"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <Logo className="h-12 w-12" />
                                <span className="sr-only">Hitesh Portfolio</span>
                            </Link>
                            <Link
                                href="#about"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                About
                            </Link>
                            <Link
                                href="#experience"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Experience
                            </Link>
                            <Link
                                href="#skills"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Skills
                            </Link>
                            <Link
                                href="#projects"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Projects
                            </Link>
                            <Link
                                href="/resume"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Resume
                            </Link>
                            <Link
                                href="#faq"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                FAQ
                            </Link>
                            <Link
                                href="#contact"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Contact
                            </Link>
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
