"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

const faqData = [
    {
        question: "What services do you offer?",
        answer: "I specialize in front-end and full-stack web development, creating responsive, accessible, and performant web applications. I also focus on modern UI/UX design integration and optimizing user experiences."
    },
    {
        question: "What tech stack do you use?",
        answer: "My core stack includes React, Next.js, Node.js, and modern CSS frameworks like Tailwind. I also have deep experience with databases like MongoDB and PostgreSQL, and I frequently use tools like TypeScript for robust and scalable solutions."
    },
    {
        question: "Available for freelance?",
        answer: "Yes! I am currently open to freelance opportunities and remote roles. Feel free to reach out through my contact form or email to discuss your next big project."
    },
    {
        question: "How do you price projects?",
        answer: "Project pricing depends on the scope, complexity, and timeline. After an initial discovery phase to understand your needs, I provide a detailed proposal with a transparent quote. I offer both fixed-price and hourly rate options."
    },
    {
        question: "What is your process?",
        answer: "My process is deeply collaborative. It begins with a discovery phase, followed by rigorous planning and design. Next is the development phase where I build the application with regular feedback loops. Finally, I handle testing, deployment, and post-launch support."
    }
]

function FaqItem({ 
    question, 
    answer, 
    isOpen, 
    onClick, 
    index 
}: { 
    question: string; 
    answer: string; 
    isOpen: boolean; 
    onClick: () => void; 
    index: number 
}) {
    return (
        <div className={`mb-4 relative group rounded-2xl border transition-all duration-500 overflow-hidden backdrop-blur-xl ${isOpen ? 'bg-card border-primary/40 shadow-lg shadow-primary/5' : 'bg-card/40 border-border shadow-sm hover:border-primary/30 hover:bg-card/60 hover:shadow-md'}`}>
            {/* Ambient Hover Glow */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <button 
                onClick={onClick}
                className={`w-full flex items-center justify-between px-6 md:px-8 pt-6 md:pt-8 ${isOpen ? 'pb-2 md:pb-4' : 'pb-6 md:pb-8'} text-left focus:outline-none relative z-10 transition-all duration-300`}
            >
                <div className="flex items-center gap-4 md:gap-8 flex-1">
                    <span className="text-muted-foreground font-mono text-sm md:text-base hidden sm:block shrink-0 opacity-50">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`text-lg md:text-xl font-semibold transition-colors duration-500 ${isOpen ? "text-primary" : "text-foreground group-hover:text-primary/80"}`}>
                        {question}
                    </h3>
                </div>
                
                <div className="relative shrink-0 ml-4 flex items-center justify-center">
                    <motion.div 
                        initial={false}
                        animate={{ rotate: isOpen ? 45 : 0, scale: isOpen ? 1.05 : 1 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-colors duration-500 ${isOpen ? 'bg-primary border-primary text-primary-foreground shadow-md' : 'border-border/50 text-foreground bg-background group-hover:border-primary/50 group-hover:text-primary group-hover:bg-primary/5'}`}
                    >
                        <Plus className="w-5 h-5" strokeWidth={2} />
                    </motion.div>
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden relative z-10"
                    >
                        <div className="pb-6 md:pb-8 pl-6 sm:pl-18 md:pl-22 pr-6 md:pr-8 text-sm md:text-base text-muted-foreground max-w-4xl leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section id="faq" className="w-full py-16 md:py-24 relative overflow-hidden bg-background">
            
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary inline-block mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to know about my workflow, pricing, and how we can work together.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full max-w-4xl flex flex-col gap-2"
                >
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            index={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(index === openIndex ? null : index)}
                        />
                    ))}
                </motion.div>
                
            </div>
        </section>
    )
}

