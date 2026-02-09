import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute top-1/4 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -left-10 w-60 h-60 bg-ai-cyan/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-4 animate-fade-in">
          <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10 px-4 py-2">
            AI & Full-Stack Engineer
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-slide-up">
              Building Intelligent
            </span>
            <br />
            <span className="text-foreground animate-fade-in animate-delay-500 inline-block hover:animate-pulse">
              Systems
            </span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
          Specializing in cutting-edge AI technologies, autonomous agents, and scalable 
          full-stack applications that transform businesses through intelligent automation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-slide-up">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 px-8 py-6 text-lg"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 px-8 py-6 text-lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>
        
        {/* Tech indicators */}
        <div className="pt-16 animate-fade-in">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {['AI Agents', 'Computer Vision', 'SaaS Platforms', 'Model Fine-tuning', 'DevOps'].map((tech) => (
              <div key={tech} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;