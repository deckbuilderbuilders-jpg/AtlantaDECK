import Header from "@/components/Header"
import { DeckRepairProcess } from "@/components/deck-repair-process"
import { DeckRepairs } from "@/components/deck-repairs"
import { DeckProcess } from "@/components/deck-process"
import { ServicePromise } from "@/components/service-promise"
import { LocationsSection } from "@/components/locations-section"
import FAQSection from "@/components/FAQSection"
import Footer from "@/components/Footer"

const CommonRepairs = () => {
   return (
    <main className="min-h-screen">
      <DeckRepairs />
      <DeckProcess />
      <ServicePromise />
      <LocationsSection />
      <FAQSection />
    </main>
  );
};

export default CommonRepairs;
