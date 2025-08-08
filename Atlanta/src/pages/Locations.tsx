import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocationCard from "@/components/location-card";
import { groupedLocations } from "@/lib/locations";

const Locations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-background">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-hero-text mb-6 leading-tight">
            Service Areas
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bringing refreshingly honest deck building to Atlanta neighborhoods.
          </p>
        </div>
      </section>

      {/* Location Cards Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hero-text mb-6">
              Where We Build Decks & Patios
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From entry-level deck repairs to custom outdoor living spaces, 
              we bring quality construction to neighborhoods across Atlanta.
            </p>
          </div>

          {/* Group by Region */}
          {groupedLocations.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-16">
              <h3 className="text-2xl font-semibold text-hero-text mb-8 text-center">
                {group.region}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.locations.map((location) => (
                  <LocationCard
                    key={location.slug}
                    name={location.name}
                    slug={location.slug}
                    serviceAreas={location.serviceAreas}
                    badgeText="In Service"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-24 bg-button-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-hero-text mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transparent pricing. Quality work. No surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-6 text-lg rounded-md text-white font-medium hover:opacity-90 transition-opacity bg-primary">
              Get a Quote
            </button>
            <button className="px-8 py-6 text-lg rounded-md font-medium hover:bg-gray-50 transition-colors bg-button-secondary border border-border text-foreground">
              How We're Different
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Locations;
