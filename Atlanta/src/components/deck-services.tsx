import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Hammer, Droplets, Paintbrush, Shield, StepBackIcon as Stairs, RotateCcw } from "lucide-react"

const services = [
  {
    icon: RotateCcw,
    title: "Replace Rotten Boards",
    description: "Remove and replace damaged or rotting deck boards with quality materials",
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    description: "Deep clean your deck to remove dirt, mildew, and prepare for staining",
  },
  {
    icon: Paintbrush,
    title: "Paint and Stain",
    description: "Protect and beautify your deck with professional painting and staining",
  },
  {
    icon: Shield,
    title: "Repair Railings",
    description: "Fix loose, damaged, or unsafe deck railings for safety and aesthetics",
  },
  {
    icon: Stairs,
    title: "Rebuild Stairs",
    description: "Reconstruct damaged or unsafe deck stairs with proper support",
  },
  {
    icon: Hammer,
    title: "Replace Decking",
    description: "Complete deck surface replacement with modern, durable materials",
  },
]

export function DeckServices() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Deck Repairs</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-[6px] border-gray-700 hover:border-orange-500 hover:shadow-lg transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <service.icon className="h-12 w-12 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
