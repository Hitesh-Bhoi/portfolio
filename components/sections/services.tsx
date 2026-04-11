"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Zap, Shield, Rocket, ArrowRight, MessageCircle, CalendarDays, Handshake } from "lucide-react"

const services = [
    {
        icon: <Rocket className="w-5 h-5" />,
        badge: "Starter",
        title: "Single Page Site",
        tagline: "Perfect to get online fast",
        price: "₹2,500",
        priceNote: "one-time",
        description: "A clean, single-page site to establish your online presence — ideal for freelancers, creators, or small businesses just starting out.",
        features: [
            "Single-page responsive design",
            "About, Services & Contact",
            "Basic SEO setup",
            "Mobile-friendly layout",
            "Contact form",
            "Delivered in 1-2 days",
        ],
        highlight: false,
        accentColor: "text-blue-500",
        glowColor: "hover:shadow-blue-500/10",
        borderHover: "hover:border-blue-500/40",
    },
    {
        icon: <Zap className="w-5 h-5" />,
        badge: "Popular",
        title: "Landing Page",
        tagline: "First impressions that convert",
        price: "₹5,000",
        priceNote: "one-time",
        description: "A blazing-fast, conversion-optimised landing page built to turn visitors into customers — designed with your brand identity in mind.",
        features: [
            "Custom responsive design",
            "SEO-ready structure",
            "Lead capture form",
            "Performance optimised",
            "Analytics integration",
            "1 revision round",
            "Delivered in 2-3 days",
        ],
        highlight: false,
        accentColor: "text-violet-500",
        glowColor: "hover:shadow-violet-500/10",
        borderHover: "hover:border-violet-500/40",
    },
    {
        icon: <Sparkles className="w-5 h-5" />,
        badge: "Best Value",
        title: "Business Website",
        tagline: "Your brand, built to impress",
        price: "₹10,000",
        priceNote: "one-time",
        description: "A complete multi-page site that showcases your services and story — polished and premium to stand out from the crowd.",
        features: [
            "Up to 6 custom pages",
            "Premium UI/UX design",
            "Blog or Projects section",
            "SEO + Social Meta tags",
            "Contact form with email",
            "2 revision rounds",
            "Delivered within 10 days",
        ],
        highlight: true,
        accentColor: "text-background",
        glowColor: "",
        borderHover: "",
    },
    {
        icon: <Shield className="w-5 h-5" />,
        badge: "Enterprise",
        title: "Custom Web App",
        tagline: "Scale your business digitally",
        price: "₹15,000+",
        priceNote: "starts at",
        description: "A tailor-made full-stack web application for your specific workflow — from dashboards to full e-commerce platforms.",
        features: [
            "Full-stack development",
            "User auth & roles",
            "Database integration",
            "Admin dashboard",
            "API integrations",
            "3+ revision rounds",
            "Timeline as per scope",
        ],
        highlight: false,
        accentColor: "text-orange-500",
        glowColor: "hover:shadow-orange-500/10",
        borderHover: "hover:border-orange-500/40",
    },
]

const addOns = [
    { name: "Logo & Branding Kit", price: "₹600" },
    { name: "Monthly Maintenance", price: "₹500 / mo" },
    { name: "Extra Revision Round", price: "₹600" },
    { name: "Speed / SEO Audit", price: "₹800" },
]

const discussPoints = [
    {
        icon: <MessageCircle className="w-5 h-5" />,
        title: "Something unique in mind?",
        desc: "No two projects are the same. If your idea doesn't fit a standard package, I'll scope it specifically for you."
    },
    {
        icon: <CalendarDays className="w-5 h-5" />,
        title: "Tight deadline?",
        desc: "Need it done faster? Express delivery is available. Let's see what we can do together."
    },
    {
        icon: <Handshake className="w-5 h-5" />,
        title: "Long-term collaboration?",
        desc: "Looking for a dedicated dev partner for your agency or growing business? I'm open to retainer arrangements."
    },
]

export function ServicesSection() {
    return (
        <section id="services" className="w-full py-16 md:py-24 mx-auto px-6 md:px-10 lg:px-16 relative overflow-hidden">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary inline-block mb-4">
                    Services & Pricing
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Transparent pricing, zero surprises. Whether you're just starting out or scaling up — there's a plan built for you.
                </p>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 w-full mx-auto mb-6">
                {services.map((service, i) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: i * 0.1 }}
                        className={`relative rounded-2xl border flex flex-col p-7 transition-all duration-300
                            ${service.highlight
                                ? "border-foreground bg-foreground text-background shadow-[0_8px_32px_rgba(0,0,0,0.18)]"
                                : `border-border bg-card shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.1)] ${service.glowColor} ${service.borderHover}`
                            }`}
                    >
                        {/* Badge + Icon */}
                        <div className="flex items-center justify-between mb-6">
                            <span className={`text-[10px] font-black uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border
                                ${service.highlight
                                    ? "border-background/20 text-background/70 bg-background/10"
                                    : "border-border text-muted-foreground bg-muted"
                                }`}>
                                {service.badge}
                            </span>
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center border
                                ${service.highlight
                                    ? "bg-background/10 border-background/20 text-background"
                                    : `bg-muted border-border ${service.accentColor}`
                                }`}>
                                {service.icon}
                            </div>
                        </div>

                        <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${service.highlight ? "text-background/50" : "text-muted-foreground"}`}>
                            {service.tagline}
                        </p>
                        <h3 className={`text-base font-black mb-3 leading-snug ${service.highlight ? "text-background" : "text-foreground"}`}>
                            {service.title}
                        </h3>
                        <p className={`text-xs leading-relaxed mb-6 ${service.highlight ? "text-background/60" : "text-muted-foreground"}`}>
                            {service.description}
                        </p>

                        {/* Price */}
                        <div className={`pb-5 mb-5 border-b ${service.highlight ? "border-background/15" : "border-border/60"}`}>
                            <span className={`text-3xl font-black tracking-tight ${service.highlight ? "text-background" : "text-foreground"}`}>
                                {service.price}
                            </span>
                            <span className={`text-xs font-medium ml-1.5 ${service.highlight ? "text-background/50" : "text-muted-foreground"}`}>
                                {service.priceNote}
                            </span>
                        </div>

                        {/* Features */}
                        <ul className="space-y-2.5 flex-1 mb-8">
                            {service.features.map((f) => (
                                <li key={f} className="flex items-start gap-2 text-xs">
                                    <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${service.highlight ? "text-background" : service.accentColor}`} />
                                    <span className={service.highlight ? "text-background/75" : "text-muted-foreground"}>
                                        {f}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <a
                            href="#contact"
                            className={`w-full h-10 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200 group/btn
                                ${service.highlight
                                    ? "bg-background text-foreground hover:bg-background/90"
                                    : "bg-foreground text-background hover:bg-foreground/85 hover:scale-[1.02] active:scale-[0.98]"
                                }`}
                        >
                            Get Started
                            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </a>
                    </motion.div>
                ))}
            </div>

            {/* Add-ons + Let's Discuss row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full mx-auto">

                {/* Add-ons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="rounded-2xl border border-border bg-card shadow-[0_2px_8px_rgba(0,0,0,0.05)] p-7"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-black uppercase tracking-widest text-foreground whitespace-nowrap">Add-ons & Extras</span>
                        <div className="flex-1 h-px bg-border" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-5">
                        {addOns.map((addon, i) => (
                            <motion.div
                                key={addon.name}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07, duration: 0.4 }}
                                className="bg-muted/40 border border-border/80 rounded-xl p-4 hover:border-foreground/25 hover:bg-muted hover:shadow-sm transition-all duration-200 group cursor-default"
                            >
                                <p className="text-sm font-bold text-foreground mb-0.5 group-hover:text-primary transition-colors">{addon.name}</p>
                                <p className="text-xs text-muted-foreground font-semibold">{addon.price}</p>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-xs text-muted-foreground/70 text-center font-medium">
                        All prices in INR · International pricing available on request
                    </p>
                </motion.div>

                {/* Let's Discuss */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="rounded-2xl border border-border bg-card shadow-[0_2px_8px_rgba(0,0,0,0.05)] p-7 flex flex-col justify-between"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-xs font-black uppercase tracking-widest text-foreground whitespace-nowrap">Something Else?</span>
                            <div className="flex-1 h-px bg-border" />
                        </div>
                        <div className="space-y-4 mb-8">
                            {discussPoints.map((point, i) => (
                                <motion.div
                                    key={point.title}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                                    className="flex items-start gap-3 group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-muted border border-border flex items-center justify-center shrink-0 text-muted-foreground group-hover:border-foreground/30 group-hover:text-foreground transition-all duration-200 mt-0.5">
                                        {point.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-foreground mb-0.5">{point.title}</p>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{point.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <a
                        href="#contact"
                        className="w-full h-10 rounded-xl border-2 border-foreground text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200 group/btn text-foreground hover:bg-foreground hover:text-background hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Let's Discuss
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
