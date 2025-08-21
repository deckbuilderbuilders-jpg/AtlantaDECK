import { DeckHero } from "@/components/deck-hero"
import { DeckBuildProcess } from "@/components/deck-build-process"
import { DeckDesignOptions } from "@/components/deck-design-options"
import { ServicePromise } from "@/components/service-promise"
import { LocationsSection } from "@/components/locations-section"
import FAQSection from "@/components/FaqSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <DeckHero />
      <DeckDesignOptions />
      <DeckBuildProcess />
      <ServicePromise />
      <LocationsSection />
      <FAQSection />
    </main>
  )
}
