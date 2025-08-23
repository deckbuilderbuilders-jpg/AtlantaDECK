import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import DeckSolutionsSection from "@/components/deck-solutions-section";
import AboutSection from "@/components/AboutSection";
import DeckCTABanner from "@/components/deck-cta-banner";
import BusinessPromise from "@/components/business-promise";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DeckSolutionsSection />
      <DeckCTABanner />
      <AboutSection />
      <BusinessPromise />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
