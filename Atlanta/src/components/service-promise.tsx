import { Phone, DollarSign, Clock, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const servicePoints = [
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description: "Before any work begins",
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "On technician arrival",
  },
  {
    icon: MessageSquare,
    title: "Options Explained",
    description: "When repairs have alternatives",
  },
  {
    icon: Phone,
    title: "Follow-up Service",
    description: "To ensure satisfaction",
  },
]

export function ServicePromise() {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-8">OUR BUILT BETTER GUARANTEE</h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-3">TRANSPARENCY FIRST</h3>
              <p className="text-gray-300 leading-relaxed">
                No surprises, no hidden fees, no unnecessary work. We believe in earning your trust through honest
                communication. If we can't fix something on-site, we'll tell you exactly why and what your options are.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">YOUR TIME MATTERS</h3>
              <p className="text-gray-300 leading-relaxed">
                We know every minute counts when your deck needs repair. That's why we provide real ETAs, not vague
                promises. If we're running late, you'll know about it. If we can suggest a temporary fix to get you back
                to enjoying your deck while parts are ordered, we will.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">EDUCATION, NOT JUST REPAIR</h3>
              <p className="text-gray-300 leading-relaxed">
                We'll explain what went wrong and how to potentially prevent it in the future. Whether it's checking
                deck board connections during seasonal inspections or recognizing early warning signs, we want to help
                you avoid future problems.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicePoints.map((point, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-colors">
              <CardContent className="p-6 text-center">
                <point.icon className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{point.title}</h4>
                <p className="text-gray-300 text-sm">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
