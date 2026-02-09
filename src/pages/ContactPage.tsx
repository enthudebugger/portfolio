import { motion } from "framer-motion";
import { AnimatedSection, PageTransition } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Github, Mail } from "lucide-react";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@enthudebugger",
    url: "https://t.me/enthudebugger",
    primary: true,
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+62 813 9558 5026",
    url: "https://wa.me/6281395585026",
    primary: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "enthudebugger",
    url: "https://github.com/enthudebugger",
    primary: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: "Let's Connect",
    url: "mailto:hello@example.com",
    primary: false,
  },
];

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Let&apos;s <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Open to new opportunities and collaborations. Say hello and we can take it from there.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <AnimatedSection key={method.label} delay={index * 0.06} direction="up">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Card
                      className={`bg-gradient-card border-border/50 shadow-shadow-card hover:shadow-shadow-glow transition-all duration-300 group cursor-pointer h-full ${
                        method.primary ? "ring-1 ring-primary/20" : ""
                      }`}
                      onClick={() => window.open(method.url, "_blank")}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-3 rounded-lg ${
                              method.primary
                                ? "bg-primary/10 text-primary"
                                : "bg-secondary text-secondary-foreground"
                            } group-hover:scale-110 transition-transform`}
                          >
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {method.label}
                            </h3>
                            <p className="text-muted-foreground">{method.value}</p>
                          </div>
                          {method.primary && (
                            <div className="ml-auto">
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection>
            <Card className="bg-gradient-card border-border/50 p-8 shadow-shadow-card max-w-2xl mx-auto">
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <h3 className="text-xl font-semibold text-foreground">Available for work</h3>
                </div>
                <p className="text-muted-foreground">
                  I&apos;m open to full-time roles and selected freelance projects. If you have an
                  idea or a role in mind, reach out—I&apos;d love to hear from you.
                </p>
                <div className="flex gap-4 justify-center pt-4 flex-wrap">
                  <Button
                    onClick={() => window.open("https://t.me/enthudev1", "_blank")}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Quick Chat
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://github.com/enthudebugger", "_blank")}
                    className="border-primary/20 text-primary hover:bg-primary/10"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View GitHub
                  </Button>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  );
}
