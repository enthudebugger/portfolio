import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Github, Mail } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      label: "Telegram",
      value: "@enthudebugger",
      url: "https://t.me/enthudebugger",
      primary: true
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+62 813 9558 5026",
      url: "https://wa.me/6281395585026",
      primary: true
    },
    {
      icon: Github,
      label: "GitHub",
      value: "enthudebugger",
      url: "https://github.com/enthudebugger",
      primary: false
    },
    {
      icon: Mail,
      label: "Email",
      value: "Let's Connect",
      url: "mailto:hello@example.com",
      primary: false
    }
  ];

  return (
    <section className="py-20 px-6 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Let's
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next AI project? I'm always excited to collaborate 
            on innovative solutions and cutting-edge technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card 
                key={index}
                className={`bg-gradient-card border-border/50 shadow-shadow-card hover:shadow-shadow-glow transition-all duration-300 group cursor-pointer ${
                  method.primary ? "ring-1 ring-primary/20" : ""
                }`}
                onClick={() => window.open(method.url, '_blank')}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${
                      method.primary 
                        ? "bg-primary/10 text-primary" 
                        : "bg-secondary text-secondary-foreground"
                    } group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {method.label}
                      </h3>
                      <p className="text-muted-foreground">
                        {method.value}
                      </p>
                    </div>
                    
                    {method.primary && (
                      <div className="ml-auto">
                        <div className="w-2 h-2 bg-ai-cyan rounded-full animate-pulse" />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16 space-y-6">
          <Card className="bg-gradient-card border-border/50 p-8 shadow-shadow-card max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <h3 className="text-xl font-semibold text-foreground">Available for Projects</h3>
              </div>
              <p className="text-muted-foreground">
                I'm currently available for freelance projects and full-time opportunities. 
                Whether you need AI consultation, full-stack development, or technical leadership, 
                I'm here to help bring your vision to life.
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button 
                  onClick={() => window.open('https://t.me/enthudev1', '_blank')}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Quick Chat
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://github.com/enthudebugger', '_blank')}
                  className="border-primary/20 text-primary hover:bg-primary/10"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Work
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;