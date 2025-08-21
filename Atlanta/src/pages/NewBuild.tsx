import { DeckHero } from "@/components/deck-hero"
import { DeckProcess } from "@/components/deck-process"
import { DeckDesignOptions } from "@/components/deck-design-options"
import { ServicePromise } from "@/components/service-promise"
import { LocationsSection } from "@/components/locations-section"
import FAQSection from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <DeckHero />
      <DeckDesignOptions />
      <DeckProcess />
      <ServicePromise />
      <LocationsSection />
      <FAQSection />
    </main>
  )
}
