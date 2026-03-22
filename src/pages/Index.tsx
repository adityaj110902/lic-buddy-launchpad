import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneySelector from "@/components/JourneySelector";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <JourneySelector />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
