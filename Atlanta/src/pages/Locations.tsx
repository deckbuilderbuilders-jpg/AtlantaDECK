import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Locations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-hero-text">
            Service Areas
          </h1>
          <p className="text-muted-foreground mt-4">
            Coming soon...
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Locations;
