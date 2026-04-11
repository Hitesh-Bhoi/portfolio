"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download, Instagram } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import {
  ReactJS,
  NextJS,
  NodeJS,
  MongoDB,
  JavaScript,
  TypeScript,
  AWS,
  Antd,
  PostgreSQL,
  Sass,
  ExpressJS,
  TailwindCSS,
  Git,
  GitHub,
  LinkedIn,
  Twitter,
} from "@/components/shared/icons";

const roles = [
  "Building Digital Products",
  "High-Performance Web Apps",
  "Solving Real-World Business Challenges",
  "Delivering Customer Satisfaction",
];

function TypingEffect({ roles }: { roles: string[] }) {
  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentRole.length) {
            setCurrentText(currentRole.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  return (
    <span className="text-primary">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export function HeroSection() {
  const res = useResponsive();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    {
      icon: <GitHub className="w-5 h-5" />,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <LinkedIn className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/bhoihitesh1844/",
      label: "Instagram",
    },
  ];

  const techStack = {
    outer: [
      { node: <ReactJS />, label: "React" },
      { node: <NextJS />, label: "Next.js" },
      { node: <JavaScript />, label: "JavaScript" },
      { node: <TypeScript />, label: "TypeScript" },
      { node: <TailwindCSS />, label: "Tailwind" },
      { node: <Antd />, label: "AntD" },
      { node: <Sass />, label: "Sass" },
    ],
    middle: [
      { node: <NodeJS />, label: "Node.js" },
      { node: <ExpressJS />, label: "Express" },
      { node: <AWS />, label: "AWS" },
      { node: <Git />, label: "Git" },
      { node: <PostgreSQL />, label: "Postgres" },
    ],
    inner: [
      { node: <MongoDB />, label: "MongoDB" },
      { node: <GitHub />, label: "GitHub" },
    ],
  };

  // Radius logic: Mobile (<640), Tablet (640-1024), Desktop (>1024)
  const getRadius = (desktop: number, tablet: number, mobile: number) => {
    if (res.isMobile) return mobile;
    if (res.isTablet) return tablet;
    return desktop;
  };

  return (
    <section
      id="hero"
      className="relative w-full flex flex-col items-center justify-center gap-10 pt-4 pb-12 md:pt-8 md:pb-20 lg:pt-16 lg:pb-16 text-center lg:text-left lg:flex-row lg:gap-20 mx-auto px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      <div className="flex-1 space-y-6 z-10 w-full max-w-2xl px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center lg:justify-start"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-0 outline-green-500"></span>
            </span>
            Open to Work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl font-extrabold tracking-tight sm:text-5xl lg:text-4xl"
        >
          Bhoi Hitesh |{" "}
          <span className="text-primary">MERN Stack Developer</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl font-extrabold tracking-tight sm:text-5xl lg:text-3xl"
        >
          AI-Enabled Developer
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold text-muted-foreground lg:text-2xl flex items-center justify-center lg:justify-start"
        >
          <TypingEffect roles={roles} />
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl text-lg text-muted-foreground md:text-xl mx-auto lg:mx-0 leading-relaxed"
        >
          I partner with businesses and founders to build scalable,
          high-performance web applications. I focus on delivering exceptional
          user experiences that drive real results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
        >
          <Button asChild size="lg" className="h-12 px-8 text-lg rounded-lg">
            <Link href="#contact">
              Discuss Your Project <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="h-12 px-8 text-lg rounded-lg border-primary/20 hover:bg-primary/5"
          >
            <Link href="#projects">View Past Work</Link>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ y: -5, scale: 1.1 }}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-2xl bg-muted border border-border hover:border-primary/50 hover:text-primary transition-colors duration-300 shadow-sm hover:shadow-md"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
        className="flex-1 flex justify-center lg:justify-end items-center relative w-full h-[380px] sm:h-[550px] lg:h-[600px] lg:mt-0"
      >
        {/* Tech Stack Orbit Container */}
        <div className="relative w-full max-w-[680px] aspect-square flex items-center justify-center scale-[0.85] sm:scale-100 lg:scale-100">
          {/* Central Code Icon */}
          <div className="relative z-30 h-16 w-16 sm:h-20 sm:w-20 lg:h-32 lg:w-32 flex items-center justify-center rounded-full bg-background border border-primary/20 shadow-[0_0_50px_-12px_rgba(var(--primary),0.3)] backdrop-blur-xl group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 text-foreground transition-transform duration-300 group-hover:scale-110"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <div className="absolute inset-0 rounded-full bg-primary/5 pointer-events-none" />
          </div>

          {/* Concentric Design Rings — diameters = radius × 2 */}
          <div className="absolute h-[380px] w-[380px] sm:h-[520px] sm:w-[520px] lg:h-[640px] lg:w-[640px] rounded-full border border-primary/30 pointer-events-none z-0" />
          <div className="absolute h-[250px] w-[250px] sm:h-[380px] sm:w-[380px] lg:h-[470px] lg:w-[470px] rounded-full border border-primary/30 pointer-events-none z-0" />
          <div className="absolute h-[130px] w-[130px] sm:h-[240px] sm:w-[240px] lg:h-[300px] lg:w-[300px] rounded-full border border-primary/30 pointer-events-none z-0" />

          {/* Rings - Only render after mount to prevent hydration mismatch */}
          {mounted && (
            <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
              <Ring
                icons={techStack.outer}
                radius={getRadius(320, 260, 190)}
                duration={40}
              />
              <Ring
                icons={techStack.middle}
                radius={getRadius(235, 190, 125)}
                duration={30}
                reverse
              />
              <Ring
                icons={techStack.inner}
                radius={getRadius(150, 120, 65)}
                duration={20}
              />
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

function useResponsive() {
  const [state, setState] = React.useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  React.useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setState({
        isMobile: w < 640,
        isTablet: w >= 640 && w < 1024,
        isDesktop: w >= 1024,
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return state;
}

function TechIcon({
  icon,
  label,
  className,
}: {
  icon: React.ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, zIndex: 50 }}
      className={`flex flex-col items-center gap-2 ${className || ""}`}
    >
      <div className="relative flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-background border border-primary/20 shadow-lg lg:shadow-xl p-2 sm:p-3 lg:p-3.5 transition-all hover:border-primary/40 hover:scale-105 group-hover:shadow-primary/10">
        <div className="w-full h-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      {label && (
        <span className="absolute -bottom-6 text-[10px] lg:text-[11px] font-bold text-muted-foreground/80 bg-background/60 px-2 py-0.5 rounded-full backdrop-blur-md border border-border/40 shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {label}
        </span>
      )}
    </motion.div>
  );
}

interface RingProps {
  icons: { node: React.ReactNode; label?: string }[];
  radius: number;
  duration?: number;
  reverse?: boolean;
  className?: string;
}

function Ring({
  icons,
  radius,
  duration = 30,
  reverse = false,
  className = "",
}: RingProps) {
  const n = icons.length;

  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}
    >
      {icons.map((ic, i) => {
        const angle = (360 / n) * i;
        const angleRad = (angle * Math.PI) / 180;

        const x = Math.cos(angleRad) * radius;
        const y = Math.sin(angleRad) * radius;

        return (
          <div
            key={i}
            className="absolute group pointer-events-auto"
            style={{
              left: `calc(50% + ${x.toFixed(3)}px)`,
              top: `calc(50% + ${y.toFixed(3)}px)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              animate={{ rotate: reverse ? 360 : -360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
            >
              <TechIcon icon={ic.node} label={ic.label} />
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}
