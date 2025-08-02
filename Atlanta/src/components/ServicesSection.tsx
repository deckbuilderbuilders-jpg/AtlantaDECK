import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Repairs",
      description: "Decks require maintenance. We make it easy to keep your deck safe and well maintained.",
      features: ["Snap a pic of the area you need repaired.", "We'll take a look and give you a fair price. Guaranteed.", "Book your repair online and your finished. It's that easy.","One price. If we make a mistake you don't pay a dollar more."]
    },
    {
      title: "New builds",
      description: "Build your vision with us",
      features: ["Snap a pics of where you want your deck to be.", "Hop on a short call with us to discuss the design you want.", "We'll give you a free estimate and answer questions about cost.", "Schedule an in-person consultation to finalize your design." ]
    }
  ];

  return (
    <section id="decks" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-hero-text mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From simple deck repairs to complete outdoor living transformations, we handle projects of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-hero-text mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="px-8">
            View Our Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
