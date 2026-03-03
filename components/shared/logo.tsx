"use client"

import { motion } from "framer-motion"

export function Logo({ className = "w-10 h-10" }: { className?: string }) {
    return (
        <motion.div
            className={`relative flex items-center justify-center ${className}`}
            animate={{
                y: [0, -2, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Faint Base Frame */}
                <rect
                    x="16" y="16" width="68" height="68"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-foreground/10"
                    rx="4"
                />

                {/* Tech Bracket Corners */}
                {/* Top Left */}
                <path d="M 32 16 H 20 A 4 4 0 0 0 16 20 V 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-foreground" />

                {/* Bottom Left */}
                <path d="M 16 68 V 80 A 4 4 0 0 0 20 84 H 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-foreground" />

                {/* Top Right */}
                <path d="M 68 16 H 80 A 4 4 0 0 1 84 20 V 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-foreground" />

                {/* Bottom Right Bracket (Red Tech Accent) */}
                <motion.path
                    d="M 84 68 V 80 A 4 4 0 0 1 80 84 H 68"
                    fill="none"
                    stroke="#FF3B3B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Red Glow Effect */}
                <motion.path
                    d="M 84 68 V 80 A 4 4 0 0 1 80 84 H 68"
                    fill="none"
                    stroke="#FF3B3B"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="opacity-20 blur-sm mix-blend-screen"
                    animate={{ opacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* The Modular 'H' Monogram */}
                <g className="text-foreground">
                    {/* Left Pillar */}
                    <rect x="33" y="28" width="8" height="44" fill="currentColor" rx="1.5" />

                    {/* Right Pillar */}
                    <rect x="59" y="28" width="8" height="44" fill="currentColor" rx="1.5" />

                    {/* Pulsing Crossbar */}
                    <motion.rect
                        x="44" y="46" width="12" height="8"
                        fill="currentColor"
                        rx="1.5"
                        animate={{
                            opacity: [0.4, 1, 0.4]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </g>

                {/* Inner Tech Dot (Subtle detail) */}
                <circle cx="24" cy="24" r="1.5" fill="currentColor" className="text-foreground/30" />
            </svg>
        </motion.div>
    )
}
