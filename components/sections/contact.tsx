"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, Send, MapPin, Phone, MessageSquare } from "lucide-react"
import { GitHub, LinkedIn, Twitter } from "@/components/shared/icons"

const socialLinks = [
    {
        name: "GitHub",
        icon: <GitHub className="w-5 h-5" />,
        href: "https://github.com",
        color: "hover:text-[#333] hover:border-[#333]/30 hover:bg-[#333]/5"
    },
    {
        name: "LinkedIn",
        icon: <LinkedIn className="w-5 h-5" />,
        href: "https://linkedin.com",
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
        value: "hitesh@example.com",
        href: "mailto:hitesh@example.com"
    },
    {
        icon: <MapPin className="w-5 h-5 text-purple-500" />,
        label: "Location",
        value: "Gujarat, India",
    },
    {
        icon: <MessageSquare className="w-5 h-5 text-blue-500" />,
        label: "Status",
        value: "Open for freelance",
    }
]

export function ContactSection() {
    const [sending, setSending] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setSending(true)

        const formData = new FormData(e.currentTarget)
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
                alert(result.message || "Message sent successfully!")
                if (e.currentTarget) e.currentTarget.reset()
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
        <section id="contact" className="container py-24 mx-auto px-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full opacity-20 dark:opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary inline-block">
                    Get In Touch
                </h2>
                <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
                    Have a specific project in mind or just want to explore potential collaborations? I'm always excited to hear new ideas.
                </p>
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
                {/* Left Side: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-between"
                >
                    <div className="space-y-8">
                        <div>
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
                                    className="p-4 rounded-2xl bg-card border border-border/50 shadow-sm flex items-center gap-4 group hover:border-primary/30 transition-colors duration-300"
                                >
                                    <div className="p-2.5 rounded-xl bg-background border border-border group-hover:scale-110 transition-transform duration-300">
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
                    </div>

                    <div className="mt-12 lg:mt-0">
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
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/50 shadow-sm transition-all duration-300 ${link.color}`}
                                >
                                    {link.icon}
                                    <span className="text-sm font-medium">{link.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="p-8 rounded-3xl bg-card border border-border/50 shadow-2xl backdrop-blur-xl relative overflow-hidden group"
                >
                    {/* Interior Glow */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Jane Doe"
                                    className="bg-background/50 border-border/50 h-12 rounded-xl focus:ring-primary/20"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="jane@example.com"
                                    className="bg-background/50 border-border/50 h-12 rounded-xl focus:ring-primary/20"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</Label>
                            <Input
                                id="subject"
                                name="subject"
                                placeholder="Project Discussion"
                                className="bg-background/50 border-border/50 h-12 rounded-xl focus:ring-primary/20"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project..."
                                className="min-h-[150px] bg-background/50 border-border/50 rounded-xl focus:ring-primary/20 resize-none"
                                required
                            />
                        </div>
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full h-12 rounded-xl text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 active:scale-[0.98]"
                            disabled={sending}
                        >
                            {sending ? (
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                                    Sending...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <Send className="w-4 h-4" /> Send Message
                                </span>
                            )}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
