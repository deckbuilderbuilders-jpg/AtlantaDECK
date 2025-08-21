import { Wrench, Hammer, StepBackIcon as Stairs, Home, SnailIcon as Nail, Paintbrush } from "lucide-react"

const repairs = [
  {
    icon: Home,
    title: "Replacing Damaged or Rotted Boards",
    description:
      "We remove deteriorated decking boards and install new matching materials, ensuring proper spacing and secure fastening to maintain structural integrity.",
    price: "$100-$500",
  },
  {
    icon: Wrench,
    title: "Fixing Loose or Wobbly Railings",
    description:
      "Our team tightens loose connections, replaces damaged brackets, and reinforces railing posts to restore safety and stability to your deck's perimeter.",
    price: "$8-$1500",
  },
  {
    icon: Stairs,
    title: "Repairing or Replacing Stairs",
    description:
      "We rebuild sagging steps, replace worn treads, and reinforce stair stringers to ensure safe and code-compliant access to your deck.",
    price: "$1500-$3500",
  },
  {
    icon: Hammer,
    title: "Addressing Joist and Beam Damage",
    description:
      "We assess structural damage, sister damaged joists, and replace compromised beams to restore your deck's foundational strength and safety.",
    price: "$2500+",
  },
  {
    icon: Nail,
    title: "Securing Loose or Popping Nails/Screws",
    description:
      "We remove protruding fasteners, pre-drill new holes, and install appropriate screws or nails to eliminate safety hazards and prevent further damage.",
    price: "$250+",
  },
  {
    icon: Paintbrush,
    title: "Cleaning and Resealing/Staining",
    description:
      "We power wash your deck, sand rough areas, and apply high-quality stain or sealant to protect against weather damage and restore appearance.",
    price: "$1000-$2500",
  },
]

export function DeckRepairs() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Common Deck Repairs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Regular maintenance and timely repairs extend your deck's lifespan, ensure safety for your family, and
            protect your investment. Don't let small issues become costly problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repairs.map((repair, index) => {
            const IconComponent = repair.icon
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 group cursor-pointer flex flex-col h-full min-h-96"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4 group-hover:bg-white transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-orange-600 group-hover:text-orange-500 transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                  {repair.title}
                </h3>

                <p className="text-gray-600 mb-4 group-hover:text-white transition-colors duration-300 flex-grow">
                  {repair.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-orange-600 group-hover:text-white transition-colors duration-300">
                    {repair.price}
                  </span>
                  <span className="text-sm text-gray-500 group-hover:text-orange-100 transition-colors duration-300">
                    Price
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
