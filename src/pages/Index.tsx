import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import ViralSection from "@/components/portfolio/ViralSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ViralSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
