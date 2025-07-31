import { Button } from "@/components/ui/button";
import { Trophy, Award, Target } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Sebastian Scott
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('achievements')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Achievements
          </button>
          <button
            onClick={() => scrollToSection('journey')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Journey
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('goals')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Goals
          </button>
          <Button
            variant="hero"
            size="sm"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;