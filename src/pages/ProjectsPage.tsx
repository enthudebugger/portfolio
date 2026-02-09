import { motion } from "framer-motion";
import { AnimatedSection, PageTransition } from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Bliss Computers – Laptop LCD Screen Store",
    description:
      "E-commerce platform for replacement laptop, tablet, and industrial LCD screens. Features product catalog by brand and category, K-12 and government purchasing programs, installation guides, and worldwide shipping from NJ, USA. Built for a 25-year industry leader.",
    image: "/projects/bliss-computers.png",
    liveUrl: "https://www.blisscomputers.net/",
  },
  {
    title: "Furu+ – AI-Powered Financial Coach",
    description:
      "Learn trading with a personalized AI financial coach. Covers stocks, options, crypto, forex, futures, and commodities with 24/7 guidance, market screener, education hub, strategy backtesting, and real-time news. Trusted by thousands of learning traders.",
    image: "/projects/furuplus.png",
    liveUrl: "https://furuplus.com/",
  },
  {
    title: "Yourfolio – AI-Powered Crypto Portfolio Tracker",
    description:
      "Transform crypto investing with advanced AI analysis, real-time insights, and personalized strategies that adapt to market conditions. Live AI analysis preview with confidence-scored insights on portfolio allocation, whale activity, and market sentiment.",
    image: "/projects/yourfolio.png",
    liveUrl: "https://www.yourfolio.ai/",
  },
  {
    title: "Markprompt – AI for Customer Support",
    description:
      "Enterprise-grade AI agents for customer support. Specialized for developer platforms and fintech: autonomously resolve tickets, unify data and intelligence, and ensure reliability under strict compliance (SOC 2, GDPR). Trusted by world-class support teams.",
    image: "/projects/markprompt.png",
    liveUrl: "https://www.markprompt.com/",
  },
  {
    title: "$WINS – Sports Investment Token Presales Platform",
    description:
      "The ultimate sports investment token presales platform. $WINS powers the future of sports with an upcoming TGE (Token Generation Event) and global exchange access. Dark, cosmic-themed landing with waitlist and token information.",
    image: "/projects/win-investments.png",
    liveUrl: "https://app.win.investments/en/wintoken",
  },
  {
    title: "Profitable Futures Trading Bot",
    description:
      "Trading interface and automation for BTCUSDT perpetual futures. Candlestick charts with moving averages and Bollinger Bands, volume analysis, and multiple timeframes (1s to 1W) for strategy development and execution.",
    image: "/projects/binance-futures.png",
    liveUrl: "https://www.binance.com/en/futures/BTCUSDT",
  },
];

export default function ProjectsPage() {
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
              A selection of products and platforms I&apos;ve worked on.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.06} direction="up">
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <Card className="h-full bg-gradient-card border-border/50 shadow-shadow-card hover:shadow-shadow-glow transition-all duration-300 group overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden bg-muted/30">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.06]"
                      />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>
                    <Button
                      className="w-full sm:w-auto"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit site
                    </Button>
                  </CardContent>
                </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
