import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Target, TrendingUp } from "lucide-react";

const AchievementsSection = () => {
  const achievements2025 = [
    {
      tournament: "Lakeview TC Reservoir - May Singles Classic",
      result: "Runner-Up (Platinum Draw)",
      date: "May 18, 2025",
      highlights: ["Defeated Jamie Hamori (UTR 8.xx) 6-1, 6-2", "Defeated Reilly Scollo (UTR 9.xx) 3-6, 6-1, [10-8]"]
    },
    {
      tournament: "O3K Mornington Men's Open Singles",
      result: "Quarter-Finalist (Main Draw)",
      date: "Jul 7, 2025",
      highlights: ["Strong win vs Vanshik Jetly (UTR 8.xx) 6-4, 1-6, [12-10]"]
    },
    {
      tournament: "O3K ALCTA Mornington Peninsula Labour Day Open",
      result: "Quarter-Finalist (Mens Singles Tier 2)",
      date: "Mar 7-10, 2025",
      highlights: ["Defeated Alexandar Terzic (UTR 8.xx) 6-4, 5-7, [10-7]"]
    },
    {
      tournament: "Lakeview TC Reservoir - March Classic #1",
      result: "Runner-Up (Platinum Draw)",
      date: "Mar 2-3, 2025",
      highlights: ["Defeated Heath Dufty-Miller (UTR 9.xx) 7-6, 6-3", "Defeated Max Barry (UTR 8.xx) 6-1, 6-1"]
    }
  ];

  const achievements2024 = [
    {
      tournament: "Open 3k FCTC Melbourne Cup Weekend Open",
      result: "Finalist (Men's Open Singles Tier 3)",
      date: "Nov 2-5, 2024",
      highlights: ["Key win vs Thomas George (UTR 8.xx) 3-6, 6-3, [10-4]"]
    },
    {
      tournament: "Tennis Victoria Associations Junior Pennant",
      result: "Strong Individual Record (Boys Junior Open A)",
      date: "Aug 11 - Nov 24, 2024",
      highlights: ["Notable wins vs Nicholas Mitsinikos (UTR 8.xx) 6-3, 6-4"]
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Tournament Results
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-trophy bg-clip-text text-transparent">
              Competitive Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Consistent performance across multiple tournaments, showcasing resilience 
              and competitive excellence post-injury recovery.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center shadow-elegant hover:shadow-trophy transition-all duration-300">
              <CardContent className="p-6">
                <Trophy className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent">9.21</div>
                <div className="text-sm text-muted-foreground">Current UTR</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-elegant hover:shadow-trophy transition-all duration-300">
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Finals Reached</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-elegant hover:shadow-trophy transition-all duration-300">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-success mx-auto mb-3" />
                <div className="text-2xl font-bold text-success">8+</div>
                <div className="text-sm text-muted-foreground">Weeks Injury Recovery</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-elegant hover:shadow-trophy transition-all duration-300">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-primary-glow mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary-glow">2025</div>
                <div className="text-sm text-muted-foreground">Strong Comeback Year</div>
              </CardContent>
            </Card>
          </div>

          {/* 2025 Achievements */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Trophy className="h-6 w-6 text-primary" />
              2025 Season Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements2025.map((achievement, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-court transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-primary">{achievement.tournament}</CardTitle>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-success/10 text-success border-success/20">
                        {achievement.result}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{achievement.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {achievement.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 2024 Achievements */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Trophy className="h-6 w-6 text-accent" />
              2024 Season Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements2024.map((achievement, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-court transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-primary">{achievement.tournament}</CardTitle>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-accent/10 text-accent border-accent/20">
                        {achievement.result}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{achievement.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {achievement.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;