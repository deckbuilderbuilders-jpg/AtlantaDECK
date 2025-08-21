import Header from "@/components/Header";
import { DeckHero } from "@/components/deck-hero";
import { DeckProcess } from "@/components/deck-process";
import { CommonRepairs } from "@/components/common-repairs";
import { ServicePromise } from "@/components/service-promise";
import { LocationsSection } from "@/components/locations-section";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <DeckHero />
      <CommonRepairs />
      <DeckProcess />
      <ServicePromise />
      <LocationsSection />
      <FAQSection />
    </main>
  )
}
