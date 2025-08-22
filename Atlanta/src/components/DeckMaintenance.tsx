import { SprayCan as Spray, Paintbrush, Search } from "lucide-react"

const maintenanceServices = [
  {
    icon: Spray,
    title: "Pressure Washing",
    description:
      "We thoroughly clean your deck using professional-grade pressure washing equipment to remove dirt, mildew, and debris. This process prepares the surface for staining and reveals any underlying issues that need attention.",
    price: "$2-$4",
  },
  {
    icon: Paintbrush,
    title: "Sealing / Staining",
    description:
      "Our team applies high-quality stain and sealant to protect your deck from UV rays, moisture, and weather damage. We use premium products that penetrate deep into the wood for long-lasting protection.",
    price: "$3-$6",
  },
  {
    icon: Search,
    title: "Inspecting for Damage",
    description:
      "We conduct comprehensive inspections to identify loose boards, protruding nails, structural issues, and early signs of rot or damage. Early detection prevents costly repairs and ensures your deck remains safe.",
    price: "$1-$2",
  },
]

export function DeckMaintenance() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Annual Deck Maintenance</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Regular annual maintenance is essential for extending your deck's lifespan, preventing costly repairs, and
            maintaining its beauty. Proper care protects your investment and ensures years of safe enjoyment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {maintenanceServices.map((service, index) => {
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
                    Price per sq ft
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
