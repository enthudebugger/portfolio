import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageTransition } from "@/components/AnimatedSection";
import {
  ArrowRight,
  Code2,
  Layers,
  Sparkles,
  ExternalLink,
  Quote,
  CheckCircle2,
  Cpu,
  Database,
  Globe,
  Terminal,
} from "lucide-react";

const highlights = [
  "Full-Stack Development",
  "System Design",
  "Cloud & DevOps",
  "APIs & Integrations",
];

const techStack = [
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Tailwind",
  "REST APIs",
  "Git",
];

const featuredProjectsPreview = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce with cart, checkout, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "REST API Gateway",
    description: "Centralized API gateway with auth, rate limiting, and logging.",
    tags: ["Node.js", "Redis", "Docker"],
  },
  {
    title: "SaaS Admin Panel",
    description: "Multi-tenant admin with roles, audit logs, and integrations.",
    tags: ["React", "AWS", "PostgreSQL"],
  },
];

const values = [
  "Clean, maintainable code",
  "User and business focus",
  "Iterative delivery",
];

export default function HomePage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.12),transparent_50%)]" />
        <div className="absolute top-1/4 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -left-10 w-60 h-60 bg-ai-cyan/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Badge
              variant="outline"
              className="border-primary/30 text-primary bg-primary/10 px-4 py-2"
            >
              Software Engineer
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Building Software
              </span>
              <br />
              <motion.span
                className="text-foreground inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                That Scales
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Full-stack development, clean architecture, and robust systems. I build web
            applications, APIs, and tools that are maintainable, scalable, and a pleasure to
            use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <Button
              size="lg"
              asChild
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 px-8 py-6 text-lg"
            >
              <Link to="/projects">
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 px-8 py-6 text-lg"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="pt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            {highlights.map((tech) => (
              <div key={tech} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-12 px-6 border-y border-border/30 bg-background/30">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "20+", label: "Projects shipped" },
                { value: "Full-Stack", label: "Front-end to infra" },
                { value: "APIs", label: "REST & integrations" },
                { value: "Cloud", label: "Deploy & scale" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What I do */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What I <span className="bg-gradient-primary bg-clip-text text-transparent">Do</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mb-4" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end software development with a focus on quality and long-term
              maintainability.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Full-Stack Development",
                description:
                  "React, Node.js, TypeScript, and modern tooling. From UI to database and APIs.",
                tags: ["React", "Node", "TypeScript"],
              },
              {
                icon: Layers,
                title: "Architecture & Design",
                description:
                  "Clean architecture, scalable systems, and clear APIs that teams can rely on.",
                tags: ["APIs", "System design", "DB"],
              },
              {
                icon: Sparkles,
                title: "DevOps & Delivery",
                description:
                  "CI/CD, containers, and cloud so your software ships reliably and fast.",
                tags: ["Docker", "AWS", "CI/CD"],
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="h-full p-8 rounded-xl bg-gradient-card border border-border/50 shadow-shadow-card hover:shadow-shadow-glow transition-shadow duration-300"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground border border-border/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <Button
              variant="outline"
              asChild
              className="border-primary/20 text-primary hover:bg-primary/10"
            >
              <Link to="/about">
                More About Me
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Tech stack strip */}
      <section className="py-16 px-6 relative">
        <AnimatedSection>
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-muted-foreground mb-8">
              Technologies I work with
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="px-4 py-2 rounded-full bg-secondary/40 text-sm text-foreground/90 border border-border/40 hover:border-primary/30 hover:text-primary transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Featured projects preview */}
      <section className="py-20 px-6 relative bg-gradient-hero">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of applications and systems I&apos;ve built. More on the Projects page.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjectsPreview.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.1} direction="up">
                <Link to="/projects">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full group"
                  >
                    <Card className="h-full bg-gradient-card border-border/50 shadow-shadow-card hover:shadow-shadow-glow transition-all duration-300 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                            <Cpu className="w-5 h-5" />
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs font-normal"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Button variant="outline" asChild className="border-primary/20 text-primary hover:bg-primary/10">
              <Link to="/projects">
                View all projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* About teaser + quote */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                A bit <span className="bg-gradient-primary bg-clip-text text-transparent">about me</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-accent rounded-full" />
              <p className="text-muted-foreground leading-relaxed text-lg">
                I&apos;m a software engineer who cares about clean architecture, performance, and
                long-term maintainability. I work across the stack—front-end, back-end, APIs, and
                infrastructure—and enjoy turning complex requirements into simple, robust solutions.
              </p>
              <ul className="space-y-3">
                {values.map((v, i) => (
                  <motion.li
                    key={v}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    {v}
                  </motion.li>
                ))}
              </ul>
              <Button variant="outline" asChild className="mt-4 border-primary/20 text-primary">
                <Link to="/about">
                  Full story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <Card className="bg-gradient-card border-border/50 p-8 shadow-shadow-card">
                <Quote className="w-10 h-10 text-primary/50 mb-4" />
                <blockquote className="text-lg text-foreground/90 leading-relaxed italic mb-4">
                  I like to automate repetitive work, improve developer experience, and ship
                  iteratively so we can learn from real usage.
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[Globe, Database, Terminal].map((Icon, i) => (
                      <div
                        key={i}
                        className="p-2 rounded-lg bg-primary/10 text-primary"
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">Web · Data · CLI</span>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl bg-gradient-card border border-primary/20 shadow-shadow-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Let&apos;s build something together
              </h2>
              <p className="text-muted-foreground mb-8">
                Have a project in mind? I&apos;m available for full-time roles and selected
                freelance work.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-primary hover:shadow-glow-primary"
                >
                  <Link to="/contact">Contact Me</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary/30 text-primary"
                >
                  <Link to="/projects">See Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </PageTransition>
  );
}
