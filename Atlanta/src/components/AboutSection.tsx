import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-hero-text mb-6">
            Why Choose Atlanta Deck Co?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choosing a trustworthy contractor is tough. That's why we believe in transparent pricing, quality craftsmanship, and constant communication throughout your project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-button-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-hero-text mb-4">
                Quality Materials
              </h3>
              <p className="text-muted-foreground">
                We use only premium, weather-resistant materials that stand the test of time.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-button-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-hero-text mb-4">
                Transparent Pricing
              </h3>
              <p className="text-muted-foreground">
                No hidden fees, no surprises. You'll know exactly what you're paying for upfront.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-button-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-hero-text mb-4">
                Expert Craftsmanship
              </h3>
              <p className="text-muted-foreground">
                Our experienced team delivers precision and attention to detail in every project.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
