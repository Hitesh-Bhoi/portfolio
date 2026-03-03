"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
    {
        question: "What services do you offer?",
        answer: "I specialize in front-end and full-stack web development, creating responsive, accessible, and performant web applications. I also focus on modern UI/UX design integration and optimizing user experiences."
    },
    {
        question: "What technologies do you work with?",
        answer: "My core stack includes React, Next.js, Node.js, and Tailwind CSS. I also have experience with databases like MongoDB and PostgreSQL, and I frequently use tools like TypeScript and Prisma for robust and scalable solutions."
    },
    {
        question: "Are you available for freelance projects?",
        answer: "Yes! I am currently open to freelance opportunities and remote roles. Feel free to reach out through my contact form to discuss your project requirements."
    },
    {
        question: "How do you price your projects?",
        answer: "Project pricing depends on the scope, complexity, and timeline of the work. After an initial discussion about your needs, I provide a detailed proposal with a transparent quote. I offer both fixed-price and hourly rate options depending on the project structure."
    },
    {
        question: "What is your working process?",
        answer: "My process typically begins with a discovery phase to understand your goals, followed by planning and design. Next is the development phase where I build the application with regular updates and feedback loops. Finally, I handle testing, deployment, and provide post-launch support as needed."
    }
]

export function FaqSection() {
    return (
        <section id="faq" className="container py-16 md:py-20 mx-auto px-6 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
            >
                {/* <div className="flex items-center justify-center gap-2 mb-4">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">FAQ</span>
                </div> */}
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary inline-block mb-3">
                    Frequently Asked Questions
                </h2>
                <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                    Everything you need to know about my services, process, and experience.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-3xl mx-auto"
            >
                <div className="p-8 rounded-2xl bg-card/40 border border-border/50 shadow-sm backdrop-blur-2xl hover:shadow-md transition-all duration-300">
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </motion.div>
        </section>
    )
}
