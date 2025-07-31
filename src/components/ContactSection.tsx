import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, FileText, Award, Users } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Get In Touch
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-court bg-clip-text text-transparent">
              Connect With Sebastian
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to learn more about my tennis journey or discuss opportunities? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="shadow-elegant hover:shadow-court transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Mail className="h-5 w-5 text-accent" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-muted-foreground">gretchenscott0@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-sm text-muted-foreground">Melbourne, Victoria, Australia</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Award className="h-5 w-5 text-success" />
                  <div>
                    <div className="font-semibold">Citizenship</div>
                    <div className="text-sm text-muted-foreground">New Zealand & Australia (Dual)</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional References */}
            <Card className="shadow-elegant hover:shadow-court transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-accent" />
                  Professional References
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Emily Arnott</div>
                    <div className="text-sm text-muted-foreground">Head Tennis Coach</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Users className="h-5 w-5 text-accent" />
                  <div>
                    <div className="font-semibold">Giovanni Rollo</div>
                    <div className="text-sm text-muted-foreground">Strength & Conditioning Coach</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Award className="h-5 w-5 text-success" />
                  <div>
                    <div className="font-semibold">Rhys Collins</div>
                    <div className="text-sm text-muted-foreground">Essendon TC Chairperson</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="shadow-court bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <Award className="h-12 w-12 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ready to Connect?</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're interested in my tennis journey, want to discuss opportunities, 
                or simply connect, I'm always eager to engage with fellow tennis enthusiasts 
                and professionals in the sport.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => window.location.href = 'mailto:gretchenscott0@gmail.com'}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
                <Button
                  variant="court"
                  size="lg"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Back to Top
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats Footer */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="text-center p-4 bg-card rounded-lg border">
              <div className="text-2xl font-bold text-primary">9.15</div>
              <div className="text-sm text-muted-foreground">Current UTR</div>
            </div>
            <div className="text-center p-4 bg-card rounded-lg border">
              <div className="text-2xl font-bold text-accent">16</div>
              <div className="text-sm text-muted-foreground">Years Old</div>
            </div>
            <div className="text-center p-4 bg-card rounded-lg border">
              <div className="text-2xl font-bold text-success">4</div>
              <div className="text-sm text-muted-foreground">Years Playing</div>
            </div>
            <div className="text-center p-4 bg-card rounded-lg border">
              <div className="text-2xl font-bold text-primary-glow">2025</div>
              <div className="text-sm text-muted-foreground">Scholarship Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;