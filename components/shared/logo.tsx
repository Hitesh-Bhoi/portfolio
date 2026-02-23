"use client"

import { motion } from "framer-motion"

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
    return (
        <motion.div
            className={`relative flex items-center justify-center ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <svg
                viewBox="0 0 100 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-foreground"
            >
                {/* Hexagon detailed border */}
                <motion.path
                    d="M50 5 L93.3 30 V80 L50 105 L6.7 80 V30 Z"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-20"
                />
                <motion.path
                    d="M50 5 L93.3 30 V80 L50 105 L6.7 80 V30 Z"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />

                {/* Inner stylistic H / Tech node */}
                <path
                    d="M35 35 V75 M65 35 V75 M35 55 H65"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                />

                {/* Circuit dots */}
                <circle cx="35" cy="35" r="4" fill="currentColor" className="text-primary" />
                <circle cx="65" cy="75" r="4" fill="currentColor" className="text-primary" />

                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>
    )
}
