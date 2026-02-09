import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, PageTransition } from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

type Category = "all" | "web" | "api" | "tools" | "fullstack";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "api", label: "APIs" },
  { id: "tools", label: "Tools" },
  { id: "fullstack", label: "Full-Stack" },
];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce with cart, checkout, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    category: "fullstack" as Category,
    featured: true,
  },
  {
    title: "REST API Gateway",
    description: "Centralized API gateway with auth, rate limiting, and request logging for microservices.",
    technologies: ["Node.js", "Redis", "Docker", "OpenAPI"],
    liveUrl: "#",
    githubUrl: "#",
    category: "api" as Category,
    featured: true,
  },
  {
    title: "Developer Dashboard",
    description: "Internal dashboard for monitoring deployments, logs, and team activity. Real-time updates via WebSockets.",
    technologies: ["React", "TypeScript", "WebSockets", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    category: "web" as Category,
    featured: false,
  },
  {
    title: "CLI Tool Suite",
    description: "Command-line tools for scaffolding, code generation, and local dev workflows.",
    technologies: ["Node.js", "TypeScript", "Commander", "Inquirer"],
    liveUrl: "#",
    githubUrl: "#",
    category: "tools" as Category,
    featured: false,
  },
  {
    title: "SaaS Admin Panel",
    description: "Multi-tenant admin panel with roles, audit logs, and integrations. Scalable and secure.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "fullstack" as Category,
    featured: true,
  },
  {
    title: "Documentation Site",
    description: "Static docs site with search, versioning, and dark mode. Generated from Markdown and OpenAPI.",
    technologies: ["Next.js", "MDX", "Algolia", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    category: "web" as Category,
    featured: false,
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Projects
            </h1>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of things I&apos;ve built—web apps, APIs, and tools.
            </p>
          </AnimatedSection>

          <AnimatedSection className="mb-10">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={activeCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(cat.id)}
                  className={
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "border-border/50 text-muted-foreground hover:text-foreground"
                  }
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </AnimatedSection>

          <motion.div
            layout
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.06 },
              },
              hidden: {},
            }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full bg-gradient-card border-border/50 shadow-shadow-card hover:shadow-shadow-glow transition-all duration-300 group overflow-hidden">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        {project.featured && (
                          <Badge variant="secondary" className="text-xs shrink-0">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-border/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex-1"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <AnimatedSection className="text-center mt-12">
            <Button
              variant="outline"
              className="border-primary/20 text-primary hover:bg-primary/10"
              onClick={() => window.open("https://github.com/enthudebugger", "_blank")}
            >
              View All on GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  );
}
