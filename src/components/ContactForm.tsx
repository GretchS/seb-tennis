import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Send, User, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For GitHub Pages, we'll use a service like Formspree or similar
      // This is a placeholder that would work with form submission services
      const response = await fetch('https://formspree.io/f/mvgbllqw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your interest. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Fallback: open email client with pre-filled content
      const subject = encodeURIComponent(`Partnership Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company}\n\n` +
        `Message:\n${formData.message}`
      );
      
      window.location.href = `mailto:gretchenscott0@gmail.com?subject=${subject}&body=${body}`;
      
      toast({
        title: "Opening email client...",
        description: "Your default email app will open with the message pre-filled.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Get In Touch
            </Badge>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-court bg-clip-text text-transparent">
              Contact Sebastian
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in partnership opportunities or want to learn more about my tennis journey? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-elegant hover:shadow-court transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Send className="h-6 w-6 text-primary" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company/Organization</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your sponsorship interest or any questions you have..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    variant="hero"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="shadow-elegant hover:shadow-court transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  Why Partner With Me?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <User className="h-5 w-5 text-accent" />
                    <div>
                      <div className="font-semibold">Sebastian Scott</div>
                      <div className="text-sm text-muted-foreground">Tennis Athlete</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Building className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-sm text-muted-foreground">Melbourne, Victoria, Australia</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Dedicated athlete with proven results (UTR 9.21)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Strong social media presence and engagement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Professional representation at tournaments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Authentic brand partnership opportunities</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;