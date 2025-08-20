import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { RotateCcw, Shield, StepBackIcon as Stairs, Hammer, Droplets, Wrench } from "lucide-react"

const repairs = [
  {
    icon: RotateCcw,
    title: "Replace Rotten Boards",
    description: "Remove damaged boards and install new pressure-treated lumber with proper spacing and fastening.",
  },
  {
    icon: Shield,
    title: "Repair Railings",
    description: "Tighten loose railings, replace broken balusters, and ensure all safety codes are met.",
  },
  {
    icon: Stairs,
    title: "Replace Stairs",
    description: "Rebuild deck stairs with proper rise and run measurements, including new stringers and treads.",
  },
  {
    icon: Hammer,
    title: "Upgrade / Replace Decking",
    description: "Install composite or premium wood decking materials for enhanced durability and appearance.",
  },
  {
    icon: Droplets,
    title: "Pressure Wash and Paint",
    description: "Deep clean deck surface and apply high-quality stain or paint for weather protection.",
  },
  {
    icon: Wrench,
    title: "Replace Rotten Joists",
    description: "Structural repair of damaged support joists to ensure deck safety and stability.",
  },
]

export function CommonRepairs() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Common Repairs We Handle</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Every repair is different but here are some common repairs we handle as well as what you can expect to pay
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repairs.map((repair, index) => (
            <Card
              key={index}
              className="border-[6px] border-gray-700 hover:border-orange-500 hover:bg-orange-500 hover:shadow-lg transition-all duration-300 group bg-white"
            >
              <CardHeader>
                <repair.icon className="h-10 w-10 text-orange-500 group-hover:text-white mb-3 group-hover:scale-110 transition-all duration-300" />
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                  {repair.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 group-hover:text-white text-sm transition-colors duration-300">
                  {repair.description}
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
                  <span className="text-gray-500 group-hover:text-white transition-colors duration-300">(Price)</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
