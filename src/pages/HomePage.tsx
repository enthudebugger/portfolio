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
  Database,
  Globe,
  Terminal,
  MessageSquare,
  Zap,
  Shield,
  Brain,
  TrendingUp,
  Cloud,
} from "lucide-react";

const highlights = [
  "Full-Stack Development",
  "AI Integration",
  "Trading Development",
  "Cloud & DevOps",
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
    title: "Bliss Computers – Laptop LCD Store",
    description: "E-commerce for replacement laptop and tablet LCD screens. Catalog, K-12 programs, worldwide shipping.",
    image: "/projects/bliss-computers.png",
    liveUrl: "https://www.blisscomputers.net/",
  },
  {
    title: "Furu+ – AI Financial Coach",
    description: "Learn trading with a personalized AI coach across stocks, crypto, forex, and commodities.",
    image: "/projects/furuplus.png",
    liveUrl: "https://furuplus.com/",
  },
  {
    title: "Yourfolio – Crypto Portfolio Tracker",
    description: "AI-powered crypto intelligence with real-time insights and personalized strategies.",
    image: "/projects/yourfolio.png",
    liveUrl: "https://www.yourfolio.ai/",
  },
];

const values = [
  "Clean, maintainable code",
  "User and business focus",
  "Iterative delivery",
];

const howIWork = [
  { step: "01", title: "Understand", text: "Clarify goals, constraints, and success criteria so we build the right thing." },
  { step: "02", title: "Build", text: "Iterate with clear milestones, modern stack, and attention to quality." },
  { step: "03", title: "Ship", text: "Deploy, monitor, and refine so the solution stays reliable over time." },
];

const whyWorkWithMe = [
  { icon: MessageSquare, title: "Clear communication", text: "Regular updates and no surprise scope." },
  { icon: Zap, title: "Fast iteration", text: "Working increments so you see progress early." },
  { icon: Shield, title: "Reliable delivery", text: "Tests, docs, and structure so it’s maintainable." },
];

export default function HomePage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.22),transparent_55%)]" />
        <motion.div
          className="absolute top-1/4 -right-10 w-[28rem] h-[28rem] bg-primary/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, 50, 0],
            y: [0, -35, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-10 w-96 h-96 bg-ai-cyan/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.75, 0.4],
            x: [0, -40, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-secondary-accent/25 rounded-full blur-2xl pointer-events-none"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.55, 0.3],
            x: [0, 55, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
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
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
              >
                That Scales
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Full-stack development, clean architecture, and robust systems. I build web
            applications, APIs, and tools that are maintainable, scalable, and a pleasure to
            use.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-base text-muted-foreground/80 max-w-2xl mx-auto"
          >
            From idea to production—I help product and engineering teams ship faster without cutting corners.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
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
                { value: "Full-Stack", label: "Full-Stack Development" },
                { value: "AI", label: "AI Integration" },
                { value: "Trading", label: "Trading Development" },
                { value: "Cloud", label: "Cloud & DevOps" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
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
                long-term maintainability. I work across full-stack development, AI integration, trading systems, and
                cloud infrastructure—turning complex requirements into simple, robust solutions.
              </p>
              <p className="text-muted-foreground/90 text-sm">
                Recently focused on full-stack applications, AI-powered features, trading platforms, and cloud infrastructure.
              </p>
              <ul className="space-y-3">
                {values.map((v, i) => (
                  <motion.li
                    key={v}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    {v}
                  </motion.li>
                ))}
              </ul>
              <Card className="bg-gradient-card border-border/50 p-6 shadow-shadow-card">
                <Quote className="w-8 h-8 text-primary/50 mb-3" />
                <blockquote className="text-base text-foreground/90 leading-relaxed italic mb-3">
                  I like to automate repetitive work, improve developer experience, and ship
                  iteratively so we can learn from real usage.
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[Globe, Database, Terminal].map((Icon, i) => (
                      <div
                        key={i}
                        className="p-1.5 rounded-lg bg-primary/10 text-primary"
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">Web · Data · CLI</span>
                </div>
              </Card>
              <Button variant="outline" asChild className="mt-4 border-primary/20 text-primary">
                <Link to="/about">
                  Full story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl blur-xl transform rotate-3" />
                <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-shadow-card">
                  <img
                    src="/avatar.png"
                    alt="Profile"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code2,
                title: "Full-Stack Development",
                description:
                  "React, Node.js, TypeScript, and modern tooling. From UI to database and APIs.",
                tags: ["React", "Node", "TypeScript"],
              },
              {
                icon: Brain,
                title: "AI Integration",
                description:
                  "Integrating AI capabilities into applications, from LLMs and agents to intelligent automation and insights.",
                tags: ["AI", "LLMs", "Automation"],
              },
              {
                icon: TrendingUp,
                title: "Trading Development",
                description:
                  "Building trading platforms, bots, and financial tools with real-time data, analysis, and execution.",
                tags: ["Trading", "Finance", "Bots"],
              },
              {
                icon: Cloud,
                title: "Cloud & DevOps",
                description:
                  "CI/CD, containers, and cloud infrastructure so your software ships reliably and scales efficiently.",
                tags: ["Docker", "AWS", "CI/CD"],
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
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

      {/* How I work */}
      <section className="py-20 px-6 relative bg-gradient-hero">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How I <span className="bg-gradient-primary bg-clip-text text-transparent">Work</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-accent rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              A simple, transparent process so we stay aligned from day one.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {howIWork.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  className="relative p-6 rounded-xl bg-gradient-card border border-border/50 shadow-shadow-card hover:shadow-shadow-glow transition-all duration-300"
                >
                  <span className="text-4xl font-bold text-primary/20">{item.step}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  {i < howIWork.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-border/50" />
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why work with me */}
      <section className="py-16 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
              {whyWorkWithMe.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
                  className="flex gap-4 items-start"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tech stack strip */}
      <section className="py-16 px-6 relative">
        <AnimatedSection>
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">
              Technologies I work with
            </h3>
            <p className="text-sm text-muted-foreground/80 mb-8 max-w-md mx-auto">
              Modern tools and practices so we build fast and maintain long term.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                  className="px-4 py-2 rounded-full bg-secondary/40 text-sm text-foreground/90 border border-border/40 hover:border-primary/30 hover:text-primary transition-colors cursor-default"
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
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full group block"
                >
                  <Card className="h-full bg-gradient-card border-border/50 shadow-shadow-card hover:shadow-shadow-glow transition-all duration-300 overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden bg-muted/30">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.06]"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.a>
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

      {/* CTA */}
      <section className="py-20 px-6 relative">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl bg-gradient-card border border-primary/20 shadow-shadow-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Let&apos;s build something together
              </h2>
              <p className="text-muted-foreground mb-4">
                Have a project in mind? I&apos;m available for full-time roles and selected
                freelance work.
              </p>
              <p className="text-sm text-muted-foreground/80 mb-8">
                I usually respond within 24–48 hours. No commitment until we both feel it&apos;s a good fit.
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
