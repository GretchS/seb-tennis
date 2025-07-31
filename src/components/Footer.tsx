import { Trophy, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="h-8 w-8" />
            <span className="text-2xl font-bold">Sebastian Scott</span>
          </div>
          <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
            Dedicated tennis athlete pursuing excellence through the Kooyong Foundation Scholarship
          </p>
          <div className="flex items-center justify-center gap-2 text-primary-foreground/60">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-accent fill-current" />
            <span>for the love of tennis</span>
          </div>
          <div className="mt-4 text-primary-foreground/60 text-sm">
            © 2025 Sebastian Scott Tennis Journey
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;