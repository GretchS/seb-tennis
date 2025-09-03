import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Users, Award, Heart, Trophy } from "lucide-react";

const GallerySection = () => {
  const galleryImages = [
    {
      url: "/lovable-uploads/96299667-dcdb-4cc7-8f64-bd43f89c2192.png",
      title: "Dynamic Tennis Action",
      description: "Sebastian on court"
    },
    {
      url: "/lovable-uploads/32eb9393-7acf-4e66-8750-4ee50e5fb496.png",
      title: "Training with Friends",
      description: "Building connections and enjoying the sport with fellow players"
    },
    {
      url: "/lovable-uploads/3224b084-b62f-45aa-8e19-ba56bc296f30.png",
      title: "Community Involvement",
      description: "Teaching young players and giving back to the tennis community"
    },
    {
      url: "/lovable-uploads/c5ad2eec-223e-4aba-8565-52e943591422.png",
      title: "Competitive Spirit",
      description: "Celebrating victories and sportsmanship on the court"
    },
    {
      url: "/lovable-uploads/b1f5125a-881c-45f8-bc44-1a45b61f9ab3.png",
      title: "Professional Training",
      description: "Dedicated practice sessions on premier tennis facilities"
    },
    {
      url: "/lovable-uploads/93e1749a-19d0-41d3-9770-685730781e18.png",
      title: "Life Balance",
      description: "Enjoying life off the court with friends and maintaining perspective"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Photo Gallery
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-court bg-clip-text text-transparent">
              Sebastian's Tennis Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Authentic moments capturing the dedication, passion, and personality 
              that define Sebastian's approach to tennis and life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-court transition-all duration-300 hover:scale-105 overflow-hidden">
                <CardContent className="p-0">
                  <div 
                    className="h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image.url})` }}
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Camera className="h-4 w-4 text-primary" />
                      {image.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{image.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Special Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="shadow-court bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <Trophy className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Competitive Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every photo captures a moment of growth, determination, and the pursuit of excellence 
                  that drives Sebastian's tennis journey.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-court bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Character & Community</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond tournament results, these images showcase Sebastian's character, 
                  sportsmanship, and commitment to giving back to the tennis community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;