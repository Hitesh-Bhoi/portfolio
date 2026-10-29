"use client"

import { motion } from "framer-motion"

export function Logo({ className = "w-10 h-10" }: { className?: string }) {
    return (
        <motion.div
            className={`relative flex items-center justify-center ${className}`}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                role="img"
                aria-label="Bhoi Hitesh code logo"
            >
                <rect width="64" height="64" rx="12" fill="#000" />
                <g
                    stroke="#fff"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M23 19 13 32l10 13" />
                    <path d="m41 19 10 13-10 13" />
                    <path d="m37 15-10 34" />
                </g>
            </svg>
        </motion.div>
    )
}
