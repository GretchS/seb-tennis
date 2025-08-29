import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import JourneySection from "@/components/JourneySection";
import GoalsSection from "@/components/GoalsSection";
import SponsorshipSection from "@/components/SponsorshipSection";
import UTRSection from "@/components/UTRSection";
import GallerySection from "@/components/GallerySection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <JourneySection />
      <GoalsSection />
      <UTRSection />
      <SponsorshipSection />
      <GallerySection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
