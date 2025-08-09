import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import DeckSolutionsSection from "@/components/deck-solutions-section";
import AboutSection from "@/components/about-sections";

// Then in your return:
<DeckSolutionsSection />

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DeckSolutionsSection />
      <AboutSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
