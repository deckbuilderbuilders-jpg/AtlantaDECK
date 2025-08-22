import Header from "@/components/Header"
import { DeckRepairProcess } from "@/components/deck-repair-process"
import { DeckUpgrades} from "@/components/DeckUpgrades"
import { DeckProcess } from "@/components/deck-process"
import { ServicePromise } from "@/components/service-promise"
import { LocationsSection } from "@/components/locations-section"
import FAQSection from "@/components/FAQSection"
import Footer from "@/components/Footer"

const CommonRepairs = () => {
   return (
    <main className="min-h-screen">
      <Header />
      <DeckRepairs />
      <DeckProcess />
      <ServicePromise />
      <LocationsSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default CommonRepairs;
