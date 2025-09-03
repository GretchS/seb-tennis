import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Trophy, Users, Zap, Heart, Star } from "lucide-react";

const SponsorshipSection = () => {
  return (
    <section id="sponsorship" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Partnership Opportunities
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-court bg-clip-text text-transparent">
              Grant Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join my tennis journey as a grant provider and be part of supporting emerging Australian talent. 
              Together, we can achieve greatness while building meaningful partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Bronze Package */}
            <Card className="shadow-elegant hover:shadow-court transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full w-fit">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl">Tournament Grant Supporter</CardTitle>
                <div className="text-3xl font-bold text-muted-foreground">$500 - $1,500</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Support my next tournament that requires travel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">Follow my Social media updates</span>
                  </div>
                
                </div>
              </CardContent>
            </Card>

            {/* Silver Package */}
            <Card className="shadow-court border-primary/20 transform scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-full w-fit">
                  <Trophy className="h-8 w-8 text-gray-600" />
                </div>
                <CardTitle className="text-2xl">Equipment Grant Supporter </CardTitle>
                <div className="text-3xl font-bold text-primary">$1,500 - $5,000</div>
                <Badge className="mt-2 bg-primary/10 text-primary">Alwyas needing shoes & rackets </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Support my next equipment requirements</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm">Follow my social media updates</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gold Package */}
            <Card className="shadow-elegant hover:shadow-court transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-fit">
                  <Zap className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl">Training Grant Supporter</CardTitle>
                <div className="text-3xl font-bold text-accent">$5,000+</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Support my training schedule for the next 6 months</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-4 w-4 text-primary" />
                    <span className="text-sm">Follow my social media updates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm">Meet & greet opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy className="h-4 w-4 text-primary" />
                    <span className="text-sm">Custom activation events</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="shadow-court bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <Trophy className="h-12 w-12 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ready to Partner With Me?</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Your grant support directly contributes to my training, equipment, travel, and tournament 
                expenses while associating your brand with dedication, excellence, and emerging talent.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-card/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Tournament Matches/Year</div>
                </div>
                <div className="p-4 bg-card/50 rounded-lg">
                  <div className="text-2xl font-bold text-accent">300+</div>
                  <div className="text-sm text-muted-foreground">Social Media Reach</div>
                </div>
                <div className="p-4 bg-card/50 rounded-lg">
                  <div className="text-2xl font-bold text-success">Growing</div>
                  <div className="text-sm text-muted-foreground">Brand Exposure</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;