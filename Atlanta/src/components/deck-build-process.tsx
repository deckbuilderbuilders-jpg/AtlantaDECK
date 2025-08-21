import { CheckCircle, DollarSign, Calendar, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    icon: CheckCircle,
    title: "Discuss Your Options",
    description:
      "Speak with one of our trained deck pros to discuss your design and materials options. We'll help you better understand what your deck will cost.",
  },
  {
    icon: DollarSign,
    title: "Finalize Your Design",
    description:
      "Schedule a design consult with one of our trained designers to finalize your design. This is when we will give you our final price quote.",
  },
  {
    icon: Calendar,
    title: "Schedule Your Build",
    description:
      "Most of our decks take between 3-5 days to build. We can usually book you within 4-6 weeks of finalizing your design.",
  },
  {
    icon: Star,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with a satisfaction guarantee and warranty on all repairs.",
  },
]

export function DeckBuildProcess() {
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
