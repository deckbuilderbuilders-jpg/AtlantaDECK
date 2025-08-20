import { CheckCircle, DollarSign, Calendar, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    icon: CheckCircle,
    title: "Same Day Quotes",
    description: "Send us a photo of your deck and get a detailed quote within hours, not days.",
  },
  {
    icon: DollarSign,
    title: "100% Price Guarantee",
    description: "Our quoted price is final - no hidden fees or surprise charges when we arrive.",
  },
  {
    icon: Calendar,
    title: "Book Your Repair",
    description: "Schedule your deck repair at a time that works for you, often same week availability.",
  },
  {
    icon: Star,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with a satisfaction guarantee and warranty on all repairs.",
  },
]

export function DeckProcess() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Happens When You Call</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-[6px] border-gray-700 hover:border-orange-600 hover:bg-orange-600 hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 group-hover:bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <step.icon className="h-8 w-8 text-orange-600 group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                  {index + 1}/ {step.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
