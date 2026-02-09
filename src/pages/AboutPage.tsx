import { motion } from "framer-motion";
import { AnimatedSection, PageTransition } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Target, Code2 } from "lucide-react";

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Tech Company",
    period: "2022 – Present",
    description: "Leading full-stack development, system design, and mentoring. Built scalable services and improved delivery pipelines.",
  },
  {
    role: "Software Engineer",
    company: "Product Startup",
    period: "2020 – 2022",
    description: "Developed web applications and APIs. Introduced testing and CI/CD practices across the team.",
  },
  {
    role: "Junior Developer",
    company: "Agency",
    period: "2018 – 2020",
    description: "Front-end and back-end features for client projects. Learned production debugging and deployment.",
  },
];

const values = [
  {
    icon: Code2,
    title: "Clean code",
    text: "Readable, testable, and maintainable. I refactor with confidence and document decisions.",
  },
  {
    icon: Target,
    title: "User & business focus",
    text: "Software exists to solve real problems. I align technical choices with user needs and business goals.",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <div className="flex flex-col items-center mb-8">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-primary/20 rounded-full blur-xl" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-shadow-glow">
                  <img
                    src="/avatar.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mb-6" />
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Software engineer with a passion for building reliable systems and great product experiences.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mb-20">
            <Card className="bg-gradient-card border-border/50 p-8 md:p-10 shadow-shadow-card">
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I&apos;m a software engineer who cares about clean architecture, performance, and
                  long-term maintainability. I work across full-stack development, AI integration, trading systems, and
                  cloud infrastructure—turning complex requirements into simple, robust solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My experience spans full-stack web applications, AI-powered features, trading platforms, and cloud DevOps
                  practices. I like to automate repetitive work, improve developer experience, and
                  ship iteratively so we can learn from real usage.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I&apos;m not coding, I keep up with the ecosystem, contribute to open source when
                  I can, and enjoy sharing what I learn with my team and the community.
                </p>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-primary" />
              Experience
            </h2>
          </AnimatedSection>

          <div className="space-y-8">
            {experience.map((job, i) => (
              <AnimatedSection key={job.role + job.company} delay={i * 0.08} direction="up">
                <motion.div
                  whileHover={{ x: 14 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="relative pl-8 pb-10 border-l-2 border-primary/30 last:pb-0"
                >
                  <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-primary shadow-glow-primary" />
                  <div className="flex flex-wrap items-baseline gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{job.role}</h3>
                    <span className="text-muted-foreground">@ {job.company}</span>
                  </div>
                  <p className="text-sm text-primary mb-3">{job.period}</p>
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-20 mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              What I value
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <Card className="bg-gradient-card border-border/50 p-6 shadow-shadow-card h-full">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
