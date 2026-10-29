"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Handshake,
  MessageCircle,
  Rocket,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Rocket className="h-5 w-5" />,
    label: "Starter",
    title: "Single Page Site",
    tagline: "Get online quickly",
    price: "₹2,500",
    priceNote: "one-time",
    description:
      "A focused, responsive site for freelancers, creators, and small businesses starting out.",
    features: [
      "Single-page responsive design",
      "About, services, and contact sections",
      "Basic SEO setup",
      "Contact form",
      "Delivered in 1–2 days",
    ],
    popular: false,
  },
  {
    icon: <Zap className="h-5 w-5" />,
    label: "Popular",
    title: "Landing Page",
    tagline: "Turn visits into enquiries",
    price: "₹5,000",
    priceNote: "one-time",
    description:
      "A custom landing page built around your offer, brand, and next customer action.",
    features: [
      "Custom responsive design",
      "SEO-ready structure",
      "Lead capture form",
      "Performance and analytics setup",
      "One revision round · 2–3 days",
    ],
    popular: true,
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    label: "For growing teams",
    title: "Business Website",
    tagline: "A complete home for your brand",
    price: "₹10,000",
    priceNote: "one-time",
    description:
      "A polished multi-page website that presents your business, services, and work clearly.",
    features: [
      "Up to 6 custom pages",
      "Premium UI and UX design",
      "Blog or projects section",
      "SEO and social metadata",
      "Contact form with email",
      "Two revision rounds · within 10 days",
    ],
    popular: false,
  },
  {
    icon: <Shield className="h-5 w-5" />,
    label: "Custom scope",
    title: "Custom Web App",
    tagline: "Built around your workflow",
    price: "₹15,000+",
    priceNote: "starting price",
    description:
      "A tailored full-stack application for complex workflows, dashboards, or e-commerce.",
    features: [
      "Full-stack development",
      "Authentication and user roles",
      "Database and API integrations",
      "Admin dashboard",
      "Three or more revision rounds",
      "Timeline planned to match scope",
    ],
    popular: false,
  },
];

const addOns = [
  { name: "Logo & Branding Kit", price: "₹600" },
  { name: "Monthly Maintenance", price: "₹500 / mo" },
  { name: "Extra Revision Round", price: "₹600" },
  { name: "Speed / SEO Audit", price: "₹800" },
];

const discussPoints = [
  {
    icon: <MessageCircle className="h-4 w-4" />,
    title: "A specific idea",
    desc: "If your project doesn't fit a package, I'll scope it around your needs.",
  },
  {
    icon: <CalendarDays className="h-4 w-4" />,
    title: "A tight deadline",
    desc: "Express delivery may be possible depending on the project scope.",
  },
  {
    icon: <Handshake className="h-4 w-4" />,
    title: "Ongoing support",
    desc: "Retainer arrangements are available for long-term development work.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative mx-auto w-full overflow-hidden px-6 py-16 md:px-10 md:py-24 lg:px-16"
    >
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            The right build for your next step.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Clear packages for a new idea, a growing business, or a custom
            workflow. Every project starts with a conversation about what you
            need.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>Prices in INR</span>
            <span>Upfront scope and timeline</span>
            <span>Custom work available</span>
          </div>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`relative flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                service.popular
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-card-foreground hover:border-foreground/30"
              }`}
            >
              <div className="mb-6 flex items-center justify-between gap-3">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                    service.popular
                      ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground"
                      : "border-border bg-muted text-muted-foreground"
                  }`}
                >
                  {service.label}
                </span>
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                    service.popular
                      ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground"
                      : "border-border bg-muted text-foreground"
                  }`}
                  aria-hidden="true"
                >
                  {service.icon}
                </span>
              </div>

              <p
                className={`mb-2 text-xs font-medium uppercase tracking-wide ${
                  service.popular
                    ? "text-primary-foreground/65"
                    : "text-muted-foreground"
                }`}
              >
                {service.tagline}
              </p>
              <h3 className="text-xl font-bold tracking-tight">
                {service.title}
              </h3>
              <p
                className={`mt-3 min-h-16 text-sm leading-relaxed ${
                  service.popular
                    ? "text-primary-foreground/75"
                    : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>

              <div
                className={`mt-6 border-y py-5 ${
                  service.popular
                    ? "border-primary-foreground/20"
                    : "border-border"
                }`}
              >
                <p className="text-3xl font-bold tracking-tight">
                  {service.price}
                </p>
                <p
                  className={`mt-1 text-xs ${
                    service.popular
                      ? "text-primary-foreground/65"
                      : "text-muted-foreground"
                  }`}
                >
                  {service.priceNote}
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        service.popular
                          ? "text-primary-foreground"
                          : "text-foreground"
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={
                        service.popular
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={service.popular ? "secondary" : "outline"}
                className={`mt-8 w-full ${
                  service.popular
                    ? "border-transparent bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "bg-transparent"
                }`}
              >
                <Link href="/contact">
                  Discuss this package
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Every project includes a clear scope before work begins. Final pricing
          may vary with requirements.
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="mb-5">
              <p className="text-sm font-semibold text-foreground">Optional extras</p>
              <h3 className="mt-1 text-2xl font-bold tracking-tight">
                Add-ons & maintenance
              </h3>
            </div>
            <ul className="divide-y divide-border">
              {addOns.map((addon) => (
                <li
                  key={addon.name}
                  className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <span className="text-sm text-muted-foreground">
                    {addon.name}
                  </span>
                  <span className="shrink-0 text-sm font-semibold text-foreground">
                    {addon.price}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">
              All prices in INR · International pricing available on request
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="flex flex-col rounded-2xl border border-border bg-muted/40 p-6 shadow-sm md:p-8"
          >
            <div className="mb-6">
              <p className="text-sm font-semibold text-muted-foreground">
                Have a different brief?
              </p>
              <h3 className="mt-1 text-2xl font-bold tracking-tight">
                Let’s plan the right solution.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tell me what you’re building, when you need it, and what support
                you have in mind.
              </p>
            </div>
            <ul className="mb-8 flex-1 space-y-4">
              {discussPoints.map((point) => (
                <li key={point.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground">
                    {point.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">
                      {point.title}
                    </span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-muted-foreground">
                      {point.desc}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <Button asChild className="w-full sm:w-fit">
              <Link href="/contact">
                Let’s discuss your project
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
