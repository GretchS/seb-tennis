import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import JourneySection from "@/components/JourneySection";
import GallerySection from "@/components/GallerySection";
import GoalsSection from "@/components/GoalsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <JourneySection />
      <GallerySection />
      <GoalsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
