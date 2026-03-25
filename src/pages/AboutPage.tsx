import { AnimatedSection, PageTransition } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { GraduationCap, Target, Code2 } from "lucide-react";

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

const experiences = [
  {
    icon: Target,
    role: "Software Engineer",
    company: "Freelance",
    employment: "Freelance",
    period: "Sep 2025 - Present",
    duration: "7 mos",
    location: "Bekasi, West Java, Indonesia",
    workMode: "Remote",
    skillsSummary: "Web Development, FinTech and +3 skills",
  },
  {
    icon: Code2,
    role: "Full Stack Engineer",
    company: "Curalib",
    employment: "Part-time",
    period: "Apr 2024 - Jul 2025",
    duration: "1 yr 4 mos",
    location: "Bekasi, West Java, Indonesia",
    workMode: "Hybrid",
    skillsSummary: "React.js, Python (Programming Language) and +4 skills",
  },
  {
    icon: GraduationCap,
    role: "Back End Developer",
    company: "Futurice",
    employment: "Part-time",
    period: "Mar 2023 - Nov 2023",
    duration: "9 mos",
    location: "Finland",
    workMode: "Remote",
    skillsSummary: "Express.js, TypeScript and +4 skills",
  },
  {
    icon: Code2,
    role: "Mobile Application Developer",
    company: "CodeLabs Indonesia",
    employment: "Part-time",
    period: "Apr 2022 - Oct 2022",
    duration: "7 mos",
    location: "Indonesia",
    workMode: "Hybrid",
    skillsSummary: "Flutter, React Native and +1 skill",
  },
  {
    icon: GraduationCap,
    role: "Intern Frontend Developer",
    company: "Curalib",
    employment: "Part-time",
    period: "Aug 2021 - Feb 2022",
    duration: "7 mos",
    location: "Indonesia",
    workMode: "On-site",
    skillsSummary: "JavaScript and React.js",
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
                  I&apos;m a software engineer who cares about{" "}
                  <span className="text-foreground font-medium">clean architecture</span>,{" "}
                  <span className="text-foreground font-medium">performance</span>, and long-term maintainability.
                  I work across full-stack development, AI integration, trading systems, and cloud infrastructure—turning
                  complex requirements into simple, robust solutions that hold up over time.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My experience spans full-stack web applications, AI-powered features, trading platforms, and cloud DevOps.
                  I focus on automating repetitive work, improving developer experience, and shipping iteratively so we
                  can learn from real usage and adapt quickly—whether that&apos;s better tooling, clearer APIs, or smoother pipelines.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I&apos;m not coding, I keep up with the ecosystem, contribute to open source when I can, and
                  enjoy sharing what I learn with my team and the community—through docs, talks, or pairing sessions.
                </p>
              </div>
            </Card>
          </AnimatedSection>          

          <AnimatedSection className="mt-20 mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Experience
            </h2>
          </AnimatedSection>

          <div className="rounded-xl border border-border/50 bg-gradient-card overflow-hidden">
            {experiences.map((exp, i) => (
              <AnimatedSection
                key={exp.role}
                delay={i * 0.08}
                className={i === 0 ? "w-full" : "w-full border-t border-border/30"}
              >
                <div className="flex gap-4 p-6 md:p-7">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <exp.icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {exp.company} &middot; {exp.employment}
                        </p>
                      </div>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span>
                        {exp.period} &middot; {exp.duration}
                      </span>
                      <span>
                        {exp.location} &middot; {exp.workMode}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <Target className="w-4 h-4 text-primary/70 shrink-0" />
                      <span className="text-foreground/90">{exp.skillsSummary}</span>
                    </div>
                  </div>
                </div>
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
