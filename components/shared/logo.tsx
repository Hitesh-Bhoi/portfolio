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
                <defs>
                    <linearGradient id="scan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                        <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="logo-clip">
                        <rect x="20" y="20" width="60" height="60" rx="2" />
                    </clipPath>
                </defs>

                {/* Geometric Chassis (Static Base) */}
                <rect
                    x="20" y="20" width="60" height="60"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-foreground/10"
                />

                {/* Main Scanning Glow - Clipped within the frame */}
                <g clipPath="url(#logo-clip)">
                    <motion.rect
                        x="-40" y="0" width="40" height="100"
                        fill="url(#scan-gradient)"
                        className="text-primary/40"
                        style={{ skewX: -20 }}
                        animate={{
                            x: [-40, 140],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 1.5
                        }}
                    />
                </g>

                {/* Tech Accent Corners - Subtle Pulsing */}
                <motion.rect
                    x="15" y="15" width="12" height="12" fill="#FF3B3B"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.9, 1, 0.9]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.rect
                    x="73" y="73" width="12" height="12" fill="#FF3B3B"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.9, 1, 0.9]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                {/* Kinetic 'H' Monogram */}
                <motion.g className="text-foreground">
                    {/* Left Bracket */}
                    <motion.path
                        d="M36 34 V66 M36 34 H43"
                        stroke="currentColor"
                        strokeWidth="9"
                        strokeLinecap="round"
                        animate={{ y: [-1, 1, -1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {/* Right Bracket */}
                    <motion.path
                        d="M64 34 V66 M64 66 H57"
                        stroke="currentColor"
                        strokeWidth="9"
                        strokeLinecap="round"
                        animate={{ y: [1, -1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {/* Digital Jitter Middle Connection */}
                    <motion.path
                        d="M36 50 H64"
                        stroke="currentColor"
                        strokeWidth="9"
                        strokeLinecap="round"
                        animate={{
                            opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                            duration: 0.15,
                            repeat: Infinity,
                            repeatType: "mirror"
                        }}
                    />
                </motion.g>

                {/* Heartbeat Center Point */}
                <motion.circle
                    cx="50" cy="50" r="2.5"
                    fill="#FF3B3B"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            </svg>
        </motion.div>
    )
}
