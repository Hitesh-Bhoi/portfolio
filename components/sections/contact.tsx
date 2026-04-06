"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, Send, MapPin, Phone, MessageSquare, ShieldCheck, CheckCircle, CheckCheckIcon, CheckCircle2 } from "lucide-react"
import { GitHub, LinkedIn, Twitter } from "@/components/shared/icons"

const socialLinks = [
    {
        name: "GitHub",
        icon: <GitHub className="w-5 h-5" />,
        href: process.env.NEXT_PUBLIC_GITHUB || "https://github.com",
        color: "hover:text-[#333] hover:border-[#333]/30 hover:bg-[#333]/5"
    },
    {
        name: "LinkedIn",
        icon: <LinkedIn className="w-5 h-5" />,
        href: process.env.NEXT_PUBLIC_LINKED_IN || "https://linkedin.com",
        color: "hover:text-[#0077b5] hover:border-[#0077b5]/30 hover:bg-[#0077b5]/5"
    },
    {
        name: "Twitter",
        icon: <Twitter className="w-5 h-5" />,
        href: "https://twitter.com",
        color: "hover:text-[#1da1f2] hover:border-[#1da1f2]/30 hover:bg-[#1da1f2]/5"
    }
]

const contactInfo = [
    {
        icon: <Mail className="w-5 h-5 text-primary" />,
        label: "Email",
        value: process.env.NEXT_PUBLIC_EMAIL,
        href: `mailto: ${process.env.NEXT_PUBLIC_EMAIL}`
    },
    {
        icon: <MapPin className="w-5 h-5 text-purple-500" />,
        label: "Location",
        value: "Ahmedabad, Gujarat, India",
    },
    {
        icon: <MessageSquare className="w-5 h-5 text-blue-500" />,
        label: "Status",
        value: "Open for freelance",
    }
]

export function ContactSection() {
    const [sending, setSending] = useState(false)
    const [success, setSuccess] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setSending(true)
        setSuccess(false)

        const form = e.currentTarget
        const formData = new FormData(form)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (result.success) {
                setSuccess(true)
                form.reset()
                // Reset success message after 5 seconds
                setTimeout(() => setSuccess(false), 5000)
            } else {
                alert(result.message || "Something went wrong. Please try again.")
            }
        } catch (error) {
            console.error("Error submitting form:", error)
            alert("Failed to send message. Please check your connection and try again.")
        } finally {
            setSending(false)
        }
    }

    return (
        <section id="contact" className="container py-16 md:py-20 mx-auto px-6 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary inline-block mb-4">
                    Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Have a project idea or just want to chat? Reach out—I'm always open to discussing new opportunities.
                </p>
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
                {/* Left Side: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col"
                >
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold mb-4">Let's connect</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                I specialize in building scalable web applications and intuitive user interfaces. Whether you're a startup or an established company, I'd love to help you bring your vision to life.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                            {contactInfo.map((item, idx) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="p-4 rounded-xl bg-card border border-border shadow-sm flex items-center gap-4 group hover:border-primary/30 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="p-2.5 rounded-lg bg-background border border-border group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                                        {item.href ? (
                                            <a href={item.href} className="font-medium hover:text-primary transition-colors">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="font-medium">{item.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Follow me</p>
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((link, idx) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                                        whileHover={{ y: -3 }}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border shadow-sm transition-all duration-300 hover:shadow-md ${link.color}`}
                                    >
                                        {link.icon}
                                        <span className="text-sm font-medium">{link.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="p-8 rounded-2xl bg-card border border-border shadow-md backdrop-blur-xl relative overflow-hidden group hover:shadow-lg transition-all duration-300"
                >
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    className="px-4 bg-background border-border h-11 rounded-lg focus:ring-primary/20"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="john@company.com"
                                    className="px-4 bg-background border-border h-11 rounded-lg focus:ring-primary/20"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</Label>
                            <Input
                                id="subject"
                                name="subject"
                                placeholder="What would you like to discuss?"
                                className="px-4 bg-background border-border h-11 rounded-lg focus:ring-primary/20"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project, goals, timeline, and any specific requirements…"
                                className="p-4 min-h-[120px] bg-background border-border rounded-lg focus:ring-primary/20 resize-none"
                                required
                            />
                        </div>
                        {success ? (
                            <div
                                className="w-full h-12 rounded-lg flex items-center justify-center gap-2.5 text-base font-bold text-foreground bg-card border border-border"
                                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06)" }}
                            >
                                Message sent successfully!
                            </div>
                        ) : (
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full h-11 rounded-lg text-base font-bold shadow-sm transition-all duration-300 active:scale-[0.98] shadow-primary/20 hover:shadow-primary/30"
                                disabled={sending}
                            >
                                {sending ? (
                                    <span className="flex items-center gap-2">
                                        <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                                        Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        <Send className="w-4 h-4" /> Start a Conversation
                                    </span>
                                )}
                            </Button>
                        )}
                        
                        <div className="flex items-center justify-center gap-2 pt-2 text-muted-foreground/80">
                            <ShieldCheck className="w-4 h-4" />
                            <span className="text-xs font-medium tracking-wide">
                                Your information is safe. I typically respond within 2 hours.
                            </span>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
