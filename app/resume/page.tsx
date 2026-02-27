"use client"

import { motion } from "framer-motion"
import {
    Download,
    Mail,
    MapPin,
    Phone,
    Github,
    Linkedin,
    Globe,
    Code2,
    Palette,
    Smartphone,
    Database,
    Server,
    Cpu
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function ResumePage() {
    return (
        <div className="container py-12 mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Sidebar - Profile & Skills */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-4 xl:col-span-3 space-y-6"
                >
                    <Card className="overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur-sm sticky top-24">
                        <CardContent className="p-6 flex flex-col items-center text-center space-y-6">
                            {/* Profile Image (Placeholder) */}
                            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 opacity-20" />
                                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                                    <span className="text-4xl font-bold text-muted-foreground">H</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h1 className="text-xl font-bold uppercase tracking-tight">Hitesh</h1>
                                <p className="text-primary text-sm font-bold uppercase tracking-widest">Full Stack Developer</p>
                            </div>

                            <div className="flex gap-4">
                                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                                    <Github className="w-5 h-5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                                    <Linkedin className="w-5 h-5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                                    <Globe className="w-5 h-5" />
                                </Button>
                            </div>

                            <Separator />

                            <div className="w-full space-y-4 text-sm">
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <span>{process.env.NEXT_PUBLIC_EMAIL}</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <span>+91 {process.env.NEXT_PUBLIC_PHONE}</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <span>Ahmedabad, Gujarat, India</span>
                                </div>
                            </div>

                            <Separator />

                            <div className="w-full space-y-4">
                                <h3 className="font-semibold text-left">Languages</h3>
                                <SkillBar name="English" percentage={90} />
                                <SkillBar name="Hindi" percentage={100} />
                            </div>

                            <Separator />

                            <Button className="w-full" size="lg" asChild>
                                <Link href="/resume.pdf" target="_blank">
                                    <Download className="mr-2 h-4 w-4" /> Download CV
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="lg:col-span-8 xl:col-span-9 space-y-12"
                >
                    {/* Hero Text */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight">
                            I'm <span className="text-primary">Hitesh</span>, a Creative Full Stack Developer
                        </h2>
                        <p className="text-muted-foreground text-base leading-relaxed max-w-3xl">
                            I build accessible, pixel-perfect, secure, and performant web applications. With a strong foundation in modern JavaScript/TypeScript and AI integration, I turn complex problems into elegant logic.
                        </p>
                    </div>

                    {/* Services Section */}
                    <section className="space-y-6">
                        <h3 className="text-xl font-bold border-l-4 border-primary pl-4 uppercase tracking-wider">My Services</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ServiceCard
                                icon={<Code2 className="w-6 h-6" />}
                                title="Web Development"
                                description="Building responsive, high-performance websites using React, Next.js, and Tailwind CSS."
                            />
                            <ServiceCard
                                icon={<Smartphone className="w-6 h-6" />}
                                title="App Development"
                                description="Creating cross-platform mobile experiences with React Native."
                            />
                            <ServiceCard
                                icon={<Palette className="w-6 h-6" />}
                                title="UI/UX Design"
                                description="Designing intuitive and accessible user interfaces with a focus on user experience."
                            />
                            <ServiceCard
                                icon={<Cpu className="w-6 h-6" />}
                                title="AI Integration"
                                description="Leveraging LLMs and AI models to build intelligent features and workflows."
                            />
                            <ServiceCard
                                icon={<Database className="w-6 h-6" />}
                                title="Backend Systems"
                                description="Scalable APIs and database architectures using Node.js and MongoDB."
                            />
                            <ServiceCard
                                icon={<Server className="w-6 h-6" />}
                                title="DevOps"
                                description="Deployment, CI/CD pipelines, and cloud infrastructure management."
                            />
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section className="space-y-6">
                        <h3 className="text-xl font-bold border-l-4 border-primary pl-4 uppercase tracking-wider">Experience</h3>
                        <div className="space-y-6">
                            <ExperienceItem
                                role="Fullstack Engineer"
                                company="Intellimedia Networks"
                                period="07-2024 - Present"
                                description="Engineering high-performance video streaming solutions and scalable enterprise web applications using modern full-stack technologies."
                            />
                            <ExperienceItem
                                role="Jr. Fullstack Developer"
                                company="Syndell Technologies"
                                period="03-2023 - 02-2024"
                                description="Developed and optimized full-stack web applications, focusing on performance, scalability, and seamless user experiences."
                            />
                            <ExperienceItem
                                role="React.js Intern"
                                company="KerInfotech"
                                period="08-2022 - 03-2023"
                                description="Gained hands-on experience in building responsive user interfaces and integrating frontend components with backend APIs."
                            />
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="space-y-6">
                        <h3 className="text-xl font-bold border-l-4 border-primary pl-4 uppercase tracking-wider">Education</h3>
                        <div className="space-y-6">
                            <ExperienceItem
                                role="Bachelor of Computer Applications (BCA)"
                                company="Gujarat University"
                                period="2019 - 2022"
                                description="Foundation in computer science, software development, and modern web technologies. Graduated with a strong academic record."
                            />
                        </div>
                    </section>
                </motion.div>
            </div>
        </div>
    )
}

function SkillBar({ name, percentage }: { name: string, percentage: number }) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between text-sm">
                <span className="font-medium">{name}</span>
                <span className="text-muted-foreground">{percentage}%</span>
            </div>
            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-primary rounded-full"
                />
            </div>
        </div>
    )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <Card className="hover:border-primary/50 transition-colors group">
            <CardContent className="p-6 space-y-4 flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-secondary group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {icon}
                </div>
                <h4 className="font-semibold text-lg">{title}</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    )
}

function ExperienceItem({ role, company, period, description }: { role: string, company: string, period: string, description: string }) {
    return (
        <Card>
            <CardContent className="p-6 grid gap-4 md:grid-cols-4">
                <div className="md:col-span-1">
                    <Badge variant="outline" className="rounded-sm mb-2">{period}</Badge>
                </div>
                <div className="md:col-span-3 space-y-2">
                    <h4 className="font-bold text-base">{role}</h4>
                    <p className="text-primary font-bold text-sm">{company}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
                </div>
            </CardContent>
        </Card>
    )
}
