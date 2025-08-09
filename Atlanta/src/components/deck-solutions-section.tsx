import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type DeckSolutionsSectionProps = {
  className?: string
  repairHref?: string
  newDeckHref?: string
}

export default function DeckSolutionsSection({
  className,
  repairHref = "/repairs",
  newDeckHref = "/new-decks",
}: DeckSolutionsSectionProps) {
  return (
    <section id="deck-solutions" className={cn("py-24 bg-background", className)}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Deck Repair (Entire card clickable) */}
          <Link to={repairHref} aria-label="Get started with Deck Repair" className="relative group block">
            {/* Offset shadow box behind card; expands slightly on hover */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-neutral-900/80 transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:translate-y-6"
            />
            <Card className="relative rounded-2xl border border-black/20 ring-1 ring-black/5 overflow-hidden transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
              {/* Image */}
              <div className="bg-white h-80 flex items-center justify-start p-6 pl-[25%]">
                <img
                  src="/repairfinal.png"
                  alt="Deck Repair"
                  className="w-full h-full object-contain"
                />
              </div>

              <CardContent className="px-8 md:px-12 pt-3 md:pt-4 pb-8 md:pb-10">
                {/* Subtext (reduced top padding, centered, black) */}
                <p className="text-center text-black text-base md:text-lg">
                  {"send us a pic and we'll get you a same day quote"}
                </p>

                {/* Divider line */}
                <div className="my-8 h-px w-full bg-muted-foreground/20" />

                {/* Visual line text (not a nested link; whole card is clickable) */}
                <div className="flex">
                  <span className="text-[#F47B2A] font-semibold tracking-wide">{"GET STARTED"}</span>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* New Decks (Entire card clickable) */}
          <Link to={newDeckHref} aria-label="Get started designing your deck" className="relative group block">
            {/* Offset shadow box behind card; expands slightly on hover */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-neutral-900/80 transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:translate-y-6"
            />
            <Card className="relative rounded-2xl border border-black/20 ring-1 ring-black/5 overflow-hidden transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
              {/* Image */}
              <div className="bg-white h-80 flex items-center justify-start p-6 pl-[25%]">
                <img
                  src="/buildfinal.png"
                  alt="New Decks"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <CardContent className="px-8 md:px-12 pt-3 md:pt-4 pb-8 md:pb-10">
                {/* Subtext (updated copy, centered, black) */}
                <p className="text-center text-black text-base md:text-lg">
                  {"book a free call to discuss materials, style and costs"}
                </p>

                {/* Divider line */}
                <div className="my-8 h-px w-full bg-muted-foreground/20" />

                {/* Visual line text */}
                <div className="flex">
                  <span className="text-[#F47B2A] font-semibold tracking-wide">{"GET STARTED"}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Built Better Guarantee badge (kept compact) */}
        <div className="mt-16 flex justify-center">
          <img
            src="/builtbetter.png"
            alt="Built Better Guarantee"
            className="w-full max-w-[200px] h-auto"
          />
        </div>
      </div>
    </section>
  )
}
