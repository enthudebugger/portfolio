import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-6 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Passionate About
                <span className="bg-gradient-accent bg-clip-text text-transparent"> AI Innovation</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full" />
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                As a passionate AI and full-stack engineer, I specialize in building intelligent 
                systems that seamlessly integrate cutting-edge AI technologies into scalable and 
                maintainable applications.
              </p>
              
              <p>
                My expertise spans AI agent development, where I design and implement autonomous 
                agents capable of understanding and interacting with complex environments, utilizing 
                advanced machine learning algorithms and natural language processing.
              </p>
              
              <p>
                I have a proven track record of delivering AI-powered SaaS platforms, combining 
                scalable cloud infrastructure with intelligent features that provide actionable 
                insights and automation for businesses.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border/50 p-8 shadow-shadow-card hover:shadow-shadow-glow transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <h3 className="text-xl font-semibold text-foreground">Core Expertise</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    'AI Agent Development',
                    'Computer Vision',
                    'Machine Learning',
                    'SaaS Architecture',
                    'Model Fine-tuning',
                    'AI Automation',
                    'DevOps & Cloud',
                    'Full-Stack Development'
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-ai-cyan rounded-full" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            
            <Card className="bg-gradient-card border-border/50 p-8 shadow-shadow-card hover:shadow-shadow-glow transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-ai-cyan rounded-full animate-pulse" />
                  <h3 className="text-xl font-semibold text-foreground">Innovation Focus</h3>
                </div>
                <p className="text-muted-foreground">
                  Creating workflows that streamline processes and optimize operational efficiency 
                  through intelligent orchestration, ensuring smooth deployment and reliable monitoring 
                  of AI applications.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;