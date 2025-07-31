import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, Heart, Zap, Quote } from "lucide-react";
import nightTennisCourt from "/lovable-uploads/4426c6b0-f452-498c-baed-33af6a6abf17.png";

const JourneySection = () => {
  return (
    <section id="journey" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              My Tennis Journey
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-court bg-clip-text text-transparent">
              Building Excellence Through Dedication
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From starting tennis at 12 to pursuing the Kooyong Foundation Scholarship, 
              my journey reflects resilience, growth, and unwavering commitment to excellence.
            </p>
          </div>

          {/* Team and Support */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-elegant hover:shadow-court transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  Support Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Award className="h-5 w-5 text-accent" />
                  <div>
                    <div className="font-semibold">Emily Arnott</div>
                    <div className="text-sm text-muted-foreground">Head Coach</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Zap className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Giovanni Rollo</div>
                    <div className="text-sm text-muted-foreground">Strength & Conditioning Coach</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Heart className="h-5 w-5 text-success" />
                  <div>
                    <div className="font-semibold">Family Support</div>
                    <div className="text-sm text-muted-foreground">Unwavering encouragement & guidance</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-court transition-all duration-300">
              <CardContent className="p-0">
                <div 
                  className="h-48 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${nightTennisCourt})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" />
                    Current Clubs
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-primary">Essendon Tennis Club</div>
                      <div className="text-sm text-muted-foreground">
                        Men's Pennant Grade 3 Section 1 - Seed 1 Player
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-accent">Fawkner Tennis Club</div>
                      <div className="text-sm text-muted-foreground">
                        In discussions for transition - Pathway to State Grade
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Quote className="h-6 w-6 text-accent" />
                  Strength & Conditioning Coach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="italic text-muted-foreground mb-4">
                  "Sebastian brings a mindset I deeply respect—disciplined, focused, and grounded in humility. 
                  He approaches training with the same intensity and presence I've seen in serious martial artists: 
                  calm under pressure, receptive to feedback, and committed to getting better."
                </blockquote>
                <div className="font-semibold text-primary">— Giovanni Rollo</div>
                <div className="text-sm text-muted-foreground">Strength & Conditioning Coach</div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Quote className="h-6 w-6 text-primary" />
                  Club Chairperson
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="italic text-muted-foreground mb-4">
                  "Sebastian embodies the values we strive to uphold—integrity, respect, and sportsmanship. 
                  He competes hard but remains courteous to opponents, supportive of teammates, and consistently 
                  demonstrates humility and resilience, even in high-pressure match situations."
                </blockquote>
                <div className="font-semibold text-primary">— Rhys Collins</div>
                <div className="text-sm text-muted-foreground">Essendon Tennis Club Chairperson</div>
              </CardContent>
            </Card>
          </div>

          {/* Kooyong Scholarship Statement */}
          <Card className="mt-12 shadow-court bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl flex items-center justify-center gap-3">
                <Award className="h-8 w-8 text-accent" />
                Why Kooyong Foundation Scholarship?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "This scholarship would be a huge opportunity. I'm dedicated, coachable, and really keen 
                to keep developing my game. I'd be proud to represent Kooyong and contribute to the team 
                however I can. I really admire Kooyong's history and values, and I think it would be a 
                place I could make great improvements."
              </p>
              <div className="flex justify-center">
                <Button variant="champion" size="lg">
                  <Award className="mr-2 h-5 w-5" />
                  View Full Application
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;