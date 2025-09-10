import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Trophy, Zap, Globe, Calendar, Star } from "lucide-react";
import tennisCourtAerial from "@/assets/tennis-court-aerial.jpg";

const GoalsSection = () => {
  const shortTermGoals = [
    {
      icon: Trophy,
      title: "UTR Improvement",
      description: "Consistently improve UTR through strategic tournament participation",
      timeframe: "Next 6-12 months"
    },
    {
      icon: Globe,
      title: "International Experience",
      description: "Gain ITF junior points and build international ranking",
      timeframe: "Next 12 months"
    },
    {
      icon: Star,
      title: "New Zealand U18 Nationals",
      description: "Target victory as dual citizen representing heritage",
      timeframe: "Upcoming season"
    }
  ];

  const longTermGoals = [
    {
      icon: Target,
      title: "Division I College Tennis",
      description: "Secure US college tennis scholarship combining academics and athletics"
    },
    {
      icon: Trophy,
      title: "Professional Career",
      description: "Pursue professional tennis career, aiming for ATP Tour competition"
    },
    {
      icon: Zap,
      title: "International Representation",
      description: "Represent Australia or New Zealand in international competition"
    }
  ];

  return (
    <section id="goals" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Future Aspirations
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-trophy bg-clip-text text-transparent">
              Goals & Vision
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clear objectives and ambitious aspirations driving every training session, 
              every match, and every moment of dedication to tennis excellence.
            </p>
          </div>

          {/* Hero Image with Overlay */}
          <div className="relative mb-12 rounded-xl overflow-hidden">
            <div 
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${tennisCourtAerial})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60 flex items-center justify-center">
                <div className="text-center text-white">
                  <Target className="h-12 w-12 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-2">Destination: Excellence</h3>
                  <p className="text-lg opacity-90">Every goal is a step toward greatness</p>
                </div>
              </div>
            </div>
          </div>

          {/* Short-term Goals */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold text-primary">Short-Term Goals</h3>
              <Badge className="bg-primary/10 text-primary border-primary/20">Next 12-24 Months</Badge>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {shortTermGoals.map((goal, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-court transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <goal.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{goal.title}</CardTitle>
                    <Badge className="bg-success/10 text-success border-success/20 mx-auto">
                      {goal.timeframe}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground leading-relaxed">{goal.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Long-term Goals */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <Star className="h-8 w-8 text-accent" />
              <h3 className="text-3xl font-bold text-accent">Long-Term Vision</h3>
              <Badge className="bg-accent/10 text-accent border-accent/20">Ultimate Aspirations</Badge>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {longTermGoals.map((goal, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-trophy transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <goal.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                    <CardTitle className="text-xl">{goal.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground leading-relaxed">{goal.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Philosophy Card */}
          <Card className="shadow-court bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl flex items-center justify-center gap-3">
                <Zap className="h-8 w-8 text-primary" />
                My Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <blockquote className="text-xl text-muted-foreground mb-6 italic leading-relaxed">
                "True progress lives in repetition, in the quiet grind of turning weakness into strength. 
                Every challenge is an opportunity to grow, every setback a setup for a comeback."
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://instagram.com/sebba_tennis"
                  target="_blank"
                  rel="noopener noreferrer"
                > 
                <Button variant="hero" size="lg">
                  <Trophy className="mr-2 h-5 w-5" />
                  Follow My Journey
                </Button>
                </a>
                <a
                  href="gretchenscott0@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                > 
                </a>
                <Button variant="court" size="lg">
                  <Target className="mr-2 h-5 w-5" />
                  Connect With Me
                </Button>
                
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;