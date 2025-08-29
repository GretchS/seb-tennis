import { Badge } from "@/components/ui/badge";
import UTRUpdater from "./UTRUpdater";

const UTRSection = () => {
  return (
    <section id="utr" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Live Rating
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-court bg-clip-text text-transparent">
              UTR Rating Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Keep your UTR rating up-to-date across the entire website. Updates here will 
              automatically reflect in all sections of the portfolio.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <UTRUpdater />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UTRSection;