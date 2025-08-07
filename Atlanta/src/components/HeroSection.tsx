import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-deck.jpg";
import QuoteModal from "./QuoteModal";

const HeroSection = () => {
  const scrollToProcess = () => {
    const processSection = document.getElementById('process');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful wooden deck" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-hero-text mb-6 leading-tight">
          Refreshingly honest decks.
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Atlanta's go-to for transparency & trust.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <QuoteModal />
          <Button 
            variant="secondary" 
            size="lg" 
            className="px-8 py-6 text-lg"
            onClick={scrollToProcess}
          >
            How We're Different
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
