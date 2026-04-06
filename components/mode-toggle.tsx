"use client"

import * as React from "react"
import { Moon, Sun, Cloud, Star } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Ensure it doesn't render incorrectly on SSR
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-16 h-8 rounded-full bg-secondary/50 animate-pulse" />
    }

    const isDark = resolvedTheme === "dark"

    return (
        <button
            role="switch"
            aria-checked={isDark}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`group relative inline-flex h-8 w-16 shrink-0 cursor-pointer border-2 border-transparent items-center rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:scale-105 ${
                isDark ? "bg-[#1e293b] shadow-indigo-900/30 shadow-lg" : "bg-[#38bdf8] shadow-amber-200/30 shadow-lg"
            }`}
        >
            <span className="sr-only">Toggle theme</span>
            
            {/* Background elements to represent sky / stars */}
            <div className={`absolute inset-0 overflow-hidden rounded-full pointer-events-none transition-opacity duration-700 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
                {/* little stars for dark mode */}
                <Star className="absolute top-[4px] left-[8px] h-2 w-2 text-slate-200 fill-slate-200" />
                <Star className="absolute bottom-[6px] left-[20px] h-1.5 w-1.5 text-slate-300 fill-slate-300" />
                <Star className="absolute top-[10px] left-[28px] h-1 w-1 text-slate-100 fill-slate-100" />
            </div>
            
            <div className={`absolute inset-0 overflow-hidden rounded-full pointer-events-none transition-opacity duration-700 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
                {/* little clouds for light mode */}
                <Cloud className="absolute top-[4px] right-[6px] h-3 w-3 text-white fill-white opacity-80" />
                <Cloud className="absolute bottom-[2px] right-[22px] h-4 w-4 text-white fill-white opacity-60" />
            </div>

            {/* The sliding toggle thumb */}
            <span
                className={`pointer-events-none relative flex h-6 w-6 items-center justify-center rounded-full shadow-md ring-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                    isDark 
                    ? "translate-x-9 bg-slate-800 shadow-[0_0_8px_rgba(255,255,255,0.1)]" 
                    : "translate-x-1 bg-white shadow-[0_0_8px_rgba(0,0,0,0.1)]"
                }`}
            >
               {/* Fading icons inside thumb */}
               <Moon className={`absolute h-3.5 w-3.5 text-blue-200 transition-all duration-500 ease-in-out ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`} />
               <Sun className={`absolute h-3.5 w-3.5 text-orange-500 transition-all duration-500 ease-in-out ${isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`} />
            </span>
        </button>
    )
}
