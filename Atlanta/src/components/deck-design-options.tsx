import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { TreePine, Layers, Crown } from "lucide-react"

const deckOptions = [
  {
    icon: TreePine,
    title: "Pressure Treated",
    description:
      "Affordable and durable pressure-treated lumber that's perfect for most applications. Weather-resistant and budget-friendly with a natural wood appearance that can be stained or painted.",
  },
  {
    icon: Layers,
    title: "Composite",
    description:
      "Low-maintenance composite decking that resists fading, staining, and scratching. Made from recycled materials with consistent color and texture that won't warp or splinter.",
  },
  {
    icon: Crown,
    title: "Custom",
    description:
      "Premium exotic hardwoods like IPE, Mahogany, and Teak offer unmatched beauty and longevity. These luxury materials provide superior durability and stunning natural grain patterns.",
  },
]

export function DeckDesignOptions() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Design Your Dream Deck</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          You deserve a safe, beautiful and functional space to enjoy your backyard. Let us help you create that.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deckOptions.map((option, index) => (
            <Card
              key={index}
              className="border-[6px] border-gray-700 hover:border-orange-500 hover:bg-orange-500 hover:shadow-lg transition-all duration-300 group bg-white"
            >
              <CardHeader>
                <option.icon className="h-10 w-10 text-orange-500 group-hover:text-white mb-3 group-hover:scale-110 transition-all duration-300" />
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                  {option.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 group-hover:text-white text-sm transition-colors duration-300">
                  {option.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                    ~$
                  </span>
                  <Input
                    placeholder="____"
                    className="w-20 text-center font-semibold group-hover:bg-white group-hover:text-gray-900"
                    disabled
                  />
                  <span className="text-gray-500 group-hover:text-white transition-colors duration-300">
                    (Price per sq ft)
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
