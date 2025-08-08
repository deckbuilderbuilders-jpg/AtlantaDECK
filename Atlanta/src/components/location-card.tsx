import Link from "next/link"
import { cn } from "@/lib/utils"
import { Bebas_Neue } from 'next/font/google'
import { Leaf } from 'lucide-react'

const bebas = Bebas_Neue({
subsets: ["latin"],
weight: "400",
display: "swap",
})

export default function LocationCard({
name = "Sample Location",
slug = "sample-location",
serviceAreas = [],
badgeText = "In Service",
}: {
name?: string
slug?: string
serviceAreas?: string[]
badgeText?: string
}) {
const chips = (serviceAreas?.length ? serviceAreas : [name]).slice(0, 4)

return (
  <div className="relative">
    {/* Offset shadow (smaller than reference for a unique look) */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 translate-x-[6px] translate-y-[6px] rounded-lg bg-black/90"
    />
    {/* Card */}
    <div className="relative h-full rounded-lg border bg-background p-6 shadow-sm transition-transform duration-200 will-change-transform hover:-translate-y-0.5">
      {/* Forest-green top accent */}
      <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-lg bg-green-700" aria-hidden />

      <div className="flex items-start justify-between gap-4">
        <h3
          className={cn(
            bebas.className,
            "text-2xl tracking-wide uppercase leading-none"
          )}
        >
          {name}
        </h3>

        {/* Square-ish availability tag */}
        <span className="inline-flex items-center gap-1 rounded-md border border-green-700/30 bg-green-700/10 px-2.5 py-1 text-xs font-medium text-green-800">
          <Leaf aria-hidden className="size-3.5" />
          {badgeText}
        </span>
      </div>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
          Service areas
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {chips.map((area) => (
            <span
              key={area}
              className="rounded-md border border-green-700/20 bg-green-700/5 px-2 py-1 text-xs text-foreground/90"
            >
              {area}
            </span>
          ))}
          {/* If more than 4, indicate more */}
          {serviceAreas && serviceAreas.length > 4 ? (
            <span className="rounded-md border border-green-700/20 bg-green-700/5 px-2 py-1 text-xs text-foreground/90">
              +{serviceAreas.length - 4} more
            </span>
          ) : null}
        </div>
      </div>

      <hr className="my-6 border-foreground/10" />

      <Link
        href={`/locations/${slug}`}
        className="text-sm font-semibold text-green-800 underline underline-offset-4 decoration-green-700/40 hover:text-green-900 hover:decoration-green-800"
        aria-label={`View details for ${name}`}
      >
        View details
      </Link>
    </div>
  </div>
)
}
