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
