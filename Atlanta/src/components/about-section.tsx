import type React from "react"
import { Card, CardContent } from "@/components/ui/card"

type Service = {
  title: string
  subtitle: string
  img: string
  alt: string
}

const services: Service[] = [
  {
    title: "Deck Repairs",
    subtitle: "Fix it fast with our same day quotes",
    img: "/images/services/repairs.png",
    alt: "Hammer and plank icon",
  },
  {
    title: "Maintenance",
    subtitle: "Make your deck last with annual maintenance",
    img: "/images/services/maintenance.png",
    alt: "Wrench and checklist icon",
  },
  {
    title: "Upgrades",
    subtitle: "Refresh your existing deck with new upgrades",
    img: "/images/services/upgrades.png",
    alt: "Sparkles over deck boards icon",
  },
  {
    title: "New Builds",
    subtitle: "Create your dream outdoor space with a new deck",
    img: "/images/services/new-builds.png",
    alt: "House and deck outline icon",
  },
]

// One consistent shadow style for every card (matches screenshot/location cards)
function ShadowCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full group">
      {/* Offset black shadow block */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-black transition-transform duration-200 ease-out group-hover:translate-x-6 group-hover:translate-y-6"
      />
      {/* Card lifts up slightly */}
      <Card className="relative z-10 h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-transform duration-200 ease-out group-hover:-translate-y-1">
        {children}
      </Card>
    </div>
  )
}

function ServiceCard({ title, subtitle, img, alt }: Service) {
  return (
    <div className="aspect-square mx-auto w-full max-w-[360px] md:max-w-[420px]">
      <ShadowCard>
        <CardContent className="h-full p-8 sm:p-10">
          <div className="flex h-full flex-col">
            {/* Favicon top-left with emerald accent */}
            <div className="mb-4 flex items-start">
              <div className="rounded-md ring-2 ring-emerald-600/25">
                <img
                  src={img || "/placeholder.svg?height=70&width=70&query=colored%20deck%20service%20icon"}
                  alt={alt}
                  width={70}
                  height={70}
                  className="h-[70px] w-[70px] object-contain"
                />
              </div>
            </div>
            {/* Centered text block */}
            <div className="flex flex-1 items-center justify-center text-center">
              <div className="px-2">
                <h3 className="mb-2 break-words text-3xl font-extrabold uppercase leading-tight tracking-wide text-zinc-900 sm:text-4xl">
                  {title}
                </h3>
                <p className="mx-auto max-w-sm text-balance text-base leading-relaxed text-zinc-700 sm:text-[17px]">
                  {subtitle}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </ShadowCard>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section id="deckservices" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">Deck Services</h2>
        </div>
        {/* 1 col mobile, 2 cols tablet, 2 cols desktop like the screenshot grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
