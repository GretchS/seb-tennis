import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Heart, Zap } from "lucide-react";

import sebastianInjuryRecovery from "/lovable-uploads/c5ad2eec-223e-4aba-8565-52e943591422.png";

const AboutSection = () => {
  
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              About Sebastian
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-court bg-clip-text text-transparent">
              A Dedicated Tennis Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Starting tennis at 12 years old, Sebastian has demonstrated remarkable dedication 
              and rapid progression in the sport, driven by passion and unwavering commitment.
            </p>
          </div>


          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-elegant hover:shadow-court transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-semibold">Tennis Profile</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current UTR:</span>
                    <span className="font-semibold text-primary">9.21</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current WTN:</span>
                    <span className="font-semibold">25.5</span>
                  </div>
               
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Playing Style:</span>
                    <span className="font-semibold">All-court player</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-court transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Training Regiment</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>1x Private Coaching Session</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>2x Squad Training Sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>2x Structured Match Play</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                    <span>4x Strength & Conditioning</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-semibold">Personal Story</h3>
                </div>
                <div className="prose prose-lg max-w-none text-foreground">
                  <p className="mb-4">
                    Originally from New Zealand and now living in Melbourne, I began my tennis journey 
                    at 12 years old—later than many of my peers. However, what I may have lacked in 
                    early experience, I've made up for with dedicated hard work and rapid improvement.
                  </p>
                  <p className="mb-4">
                    My current UTR of 9.21 reflects not just my current ability, but my resilience. 
                    After being sidelined for eight weeks with an ankle injury, I've returned stronger 
                    than ever, consistently defeating players with higher UTRs and proving that 
                    setbacks only fuel my determination.
                  </p>
                  <p className="mb-4">
                    As a dual citizen of New Zealand and Australia, I bring a unique perspective to 
                    the court. I'm not part of a national program, which means my training is 
                    self-driven with support from my coaches Emily Arnott and strength & conditioning 
                    coach <a href="https://rawtheory.com.au/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Giovanni Rollo</a>, along with my family.
                  </p>
                  <p>
                    I'm seeking passionate grant providers who believe in supporting emerging talent 
                    and want to be part of my journey toward professional tennis excellence. 
                    Your partnership helps fuel my dedication to achieving greatness in tennis.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant overflow-hidden">
              <CardContent className="p-0">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${sebastianInjuryRecovery})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-accent" />
                    Coming up
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm looking to head to NZ for the next round of ITFs in Auckland and Christchurch.
                    These tournaments are crucial for gaining international experience and improving my ranking.
                    Your support can help make this next step in my tennis career possible.
                  </p>
                  <div className="gfm-embed" data-url="https://www.gofundme.com/f/help-sebastian-chase-his-tennis-dream/widget/large?sharesheet=undefined&attribution_id=sl:cdb71ee6-0a2d-4db4-b190-ef8241b7eee7"></div><script defer src="https://www.gofundme.com/static/js/embed.js"></script>
                 
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;