import { Button } from "@/components/ui/button";
import QuoteModal from "./QuoteModal"; 

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Snap a pic",
      description: "Send us a few pics so we can see what your yard looks like and if you have any existing structures we need to remove or modify."
    },
    {
      number: "02", 
      title: "Design your deck",
      description: "Hop on a quick call with one of our professional designers to discuss materials choices, deck size and ultimately get a free estimate for your project."
    },
    {
      number: "03",
      title: "Get a Quote",
      description: "We're a bit different ... we charge for our quotes ($295 and up). We're very good at what we do, so we stay busy. The design fee helps us spend more time with you designing your perfect deck."
    },
    {
      number: "04",
      title: "Built Better Guarantee",
      description: "We know that choosing a good contractor is tough. That's why we have our Built Better Guarantee. If we make a mistake, we'll fix it for free, Guaranteed."
    }
  ];

  return (
    <section id="process" className="py-24 bg-button-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-hero-text mb-6">
          Design your dream deck
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial consultation to final walkthrough, we make building your dream deck straightforward and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-background border-2 border-border rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-hero-text">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-hero-text mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <QuoteModal />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
