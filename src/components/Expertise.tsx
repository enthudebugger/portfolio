import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const expertiseAreas = [
  {
    title: "AI Agent Development",
    description: "Design and implement autonomous agents capable of understanding and interacting with complex environments using advanced ML algorithms and NLP.",
    technologies: ["Python", "LangChain", "OpenAI", "Transformers", "FastAPI"],
    icon: "🤖"
  },
  {
    title: "Computer Vision",
    description: "Develop robust solutions for image and video analysis, leveraging deep learning frameworks for object detection, recognition, and real-time processing.",
    technologies: ["OpenCV", "PyTorch", "TensorFlow", "YOLO", "Detectron2"],
    icon: "👁️"
  },
  {
    title: "AI-Powered SaaS",
    description: "Deliver scalable SaaS platforms combining cloud infrastructure with intelligent features that provide actionable insights and automation.",
    technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
    icon: "🚀"
  },
  {
    title: "Model Fine-tuning",
    description: "Fine-tune open source AI models, tailoring state-of-the-art architectures for specific tasks while maintaining efficiency and performance.",
    technologies: ["Hugging Face", "LoRA", "PEFT", "Weights & Biases", "MLflow"],
    icon: "⚡"
  },
  {
    title: "AI Automation",
    description: "Create intelligent workflows that streamline processes and optimize operational efficiency through smart orchestration and automation.",
    technologies: ["Zapier", "n8n", "Apache Airflow", "Celery", "Redis"],
    icon: "🔄"
  },
  {
    title: "DevOps & Infrastructure",
    description: "Ensure smooth deployment, CI/CD, and reliable monitoring using containerization, cloud services, and infrastructure as code.",
    technologies: ["Kubernetes", "Terraform", "GitLab CI", "Prometheus", "Grafana"],
    icon: "☁️"
  }
];

const Expertise = () => {
  return (
    <section className="py-20 px-6 bg-gradient-hero relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Technical
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skills across the AI and full-stack development spectrum, 
            from intelligent systems to scalable infrastructure.
          </p>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card 
              key={area.title}
              className="bg-gradient-card border-border/50 p-8 shadow-shadow-card hover:shadow-shadow-glow transition-all duration-300 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {area.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
                
                <div className="space-y-3">
                  <div className="w-full h-px bg-border/50" />
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-secondary/50 text-secondary-foreground border-border/30 hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;