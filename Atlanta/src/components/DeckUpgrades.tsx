import { Hammer, Shield, Lightbulb, Home, Waves, Wrench } from "lucide-react"

const upgradeServices = [
  {
    icon: Hammer,
    title: "Install New Decking",
    description:
      "Transform your deck with premium composite or hardwood decking materials. We remove old boards and install new, durable decking that enhances both appearance and functionality while increasing your home's value.",
    price: "$3,500-$8,000",
  },
  {
    icon: Shield,
    title: "Add New Railings",
    description:
      "Upgrade your deck's safety and style with custom railings. Choose from aluminum, composite, or wood options with various designs including glass panels, cable systems, or traditional balusters.",
    price: "$1,500-$4,000",
  },
  {
    icon: Lightbulb,
    title: "Install Lighting",
    description:
      "Extend your deck's usability into the evening with professional lighting installation. We offer LED post caps, under-rail lighting, step lights, and ambient string lighting for perfect outdoor ambiance.",
    price: "$800-$2,500",
  },
  {
    icon: Home,
    title: "Add a Pergola",
    description:
      "Create shade and architectural interest with a custom pergola installation. Our structures provide partial shade, support for climbing plants, and define outdoor living spaces beautifully.",
    price: "$2,500-$6,000",
  },
  {
    icon: Waves,
    title: "Install a Hot Tub",
    description:
      "We'll reinforce your deck structure and create the perfect hot tub installation. This includes structural assessment, electrical work, proper drainage, and seamless integration with your existing deck.",
    price: "$5,000-$12,000",
  },
  {
    icon: Wrench,
    title: "Retrofit Your Deck",
    description:
      "Modernize an older deck with structural improvements, code compliance updates, and aesthetic enhancements. We'll assess and upgrade foundations, joists, and connections for safety and longevity.",
    price: "$2,000-$7,500",
  },
]

export defualt function DeckUpgrades() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Deck Upgrades</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your outdoor space with professional deck upgrades that enhance functionality, safety, and value.
            From new materials to added features, we help you create the perfect outdoor living environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upgradeServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 group cursor-pointer flex flex-col h-full min-h-96"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4 group-hover:bg-white transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-orange-600 group-hover:text-orange-500 transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 group-hover:text-white transition-colors duration-300 flex-grow">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-orange-600 group-hover:text-white transition-colors duration-300">
                    {service.price}
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
