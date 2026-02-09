import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "AI Agent Platform",
      description: "Autonomous AI agents that understand and interact with complex environments using advanced NLP and machine learning algorithms.",
      technologies: ["Python", "TensorFlow", "FastAPI", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Computer Vision Pipeline",
      description: "Real-time object detection and recognition system with deep learning frameworks for image and video analysis.",
      technologies: ["PyTorch", "OpenCV", "React", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "AI-Powered SaaS Platform",
      description: "Scalable cloud infrastructure with intelligent features providing actionable insights and automation for businesses.",
      technologies: ["Node.js", "React", "AWS", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Model Fine-tuning Framework",
      description: "Custom framework for fine-tuning open-source AI models, enhancing performance while maintaining efficiency.",
      technologies: ["Python", "Hugging Face", "MLflow", "Kubernetes"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of AI-powered applications and intelligent systems that demonstrate 
            my expertise in building scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`bg-gradient-card border-border/50 shadow-shadow-card hover:shadow-shadow-glow transition-all duration-300 group ${
                project.featured ? "ring-1 ring-primary/20" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <div className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      Featured
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-primary/20 text-primary hover:bg-primary/10"
            onClick={() => window.open("https://github.com/enthudebugger", "_blank")}
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;