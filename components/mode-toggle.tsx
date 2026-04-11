"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Ensure it doesn't render incorrectly on SSR
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-[70px] h-10 rounded-full bg-secondary/40 animate-pulse shadow-inner" />
    }

    const isDark = resolvedTheme === "dark"

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="group relative flex items-center justify-between w-[70px] h-10 p-1 rounded-full bg-secondary/60 border border-border/50 overflow-hidden transition-all duration-300 hover:border-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 shadow-inner"
            aria-label="Toggle theme"
        >
            {/* Sliding Pill Background */}
            <div 
                className={`absolute left-1 top-1 bottom-1 w-[30px] rounded-full bg-background shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-border/80 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                    isDark ? "translate-x-8" : "translate-x-0"
                }`} 
            />
            
            {/* Icons row */}
            <div className="relative z-10 w-full flex items-center justify-between px-[7px] pointer-events-none">
                 <Sun 
                    strokeWidth={isDark ? 2 : 2.5} 
                    className={`w-4 h-4 transition-all duration-500 ${
                        isDark ? "text-muted-foreground scale-90 opacity-70" : "text-amber-500 scale-110 opacity-100 drop-shadow-sm"
                    }`} 
                 />
                 <Moon 
                    strokeWidth={isDark ? 2.5 : 2}
                    className={`w-4 h-4 transition-all duration-500 ${
                        isDark ? "text-indigo-400 scale-110 opacity-100 drop-shadow-sm" : "text-muted-foreground scale-90 opacity-70"
                    }`} 
                 />
            </div>
        </button>
    )
}
