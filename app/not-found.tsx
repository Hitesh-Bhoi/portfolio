"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-9xl font-black tracking-tighter text-primary/20 sm:text-[12rem]">
                    404
                </h1>
                <h2 className="text-3xl font-bold tracking-tight -mt-8 sm:-mt-16 sm:text-5xl">
                    Page Not Found
                </h2>
                <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                    Oops! It seems you've wandered into digital space. The page you are looking for might have been moved or doesn't exist.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-primary/20 transition-all">
                        <Link href="/">
                            <Home className="mr-2 h-5 w-5" />
                            Back to Home
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full border-primary/20 hover:bg-primary/5">
                        <Link href="/#contact">
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Report an Issue
                        </Link>
                    </Button>
                </div>
            </motion.div>
        </div>
    )
}
