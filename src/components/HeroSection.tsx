import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Target, ArrowDown } from "lucide-react";
import sebastianTennisAction from "/lovable-uploads/60f27200-9553-4d90-bb6d-00f48b76141e.png";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${sebastianTennisAction})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-bounce-in">
            Kooyong Foundation Tennis Scholarship Candidate
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Sebastian Scott
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Dedicated tennis athlete from New Zealand & Australia, pursuing excellence 
            through the prestigious Kooyong Foundation Scholarship
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50">
              <Trophy className="h-5 w-5 text-accent" />
              <span className="font-semibold">UTR 9.15</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50">
              <Award className="h-5 w-5 text-primary" />
              <span className="font-semibold">16 Years Old</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50">
              <Target className="h-5 w-5 text-success" />
              <span className="font-semibold">Dual Citizen NZ/AU</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection('about')}
              className="animate-glow"
            >
              Discover My Journey
            </Button>
            <Button
              variant="court"
              size="lg"
              onClick={() => scrollToSection('achievements')}
            >
              View Achievements
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;