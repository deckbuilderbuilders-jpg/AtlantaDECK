import { Button } from "@/components/ui/button";
import QuoteModal from "./QuoteModal"; 

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-hero-text mb-6">
          Ready to Transform Your Outdoor Space?
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Get a free consultation and detailed quote for your deck or patio project. 
          No pressure, just honest advice and transparent pricing.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <QuoteModal />
          <Button 
  size="lg" 
  className="px-8 py-6 text-lg"
  onClick={() => window.location.href = 'tel:+14042595099'}
>
  Call Now +1 404 259 5099
</Button>
        </div>
        
        <p className="text-sm text-muted-foreground mt-8">
          Free estimates • Licensed & insured • 5-year warranty
        </p>
      </div>
    </section>
  );
};

export default CTASection;
