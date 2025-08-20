"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { serviceAreas } from "@/lib/locations"

export function LocationsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Service Areas</h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Professional deck repair services across the Greater Atlanta area
        </p>

        <div className="space-y-6">
          {/* First row - 3 cards */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
              {serviceAreas.slice(0, 3).map((area, index) => (
                <Card
                  key={index}
                  className="border-[6px] border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-110 hover:animate-shake min-w-[280px]"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-bold text-gray-900">{area.name}</CardTitle>
                      {area.inService && (
                        <Badge className="bg-green-100 text-green-800 border-green-300">In Service</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">SERVICE AREAS</h4>
                      <ul className="text-sm text-gray-700 space-y-1 max-h-32 overflow-y-auto">
                        {area.locations.map((location, locationIndex) => (
                          <li key={locationIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 flex-shrink-0"></span>
                            {location}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="link" className="text-green-700 hover:text-green-800 p-0 h-auto font-semibold">
                      View details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Second row - 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {serviceAreas.slice(3, 5).map((area, index) => (
                <Card
                  key={index + 3}
                  className="border-[6px] border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-110 hover:animate-shake min-w-[280px]"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-bold text-gray-900">{area.name}</CardTitle>
                      {area.inService && (
                        <Badge className="bg-green-100 text-green-800 border-green-300">In Service</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">SERVICE AREAS</h4>
                      <ul className="text-sm text-gray-700 space-y-1 max-h-32 overflow-y-auto">
                        {area.locations.map((location, locationIndex) => (
                          <li key={locationIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 flex-shrink-0"></span>
                            {location}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="link" className="text-green-700 hover:text-green-800 p-0 h-auto font-semibold">
                      View details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: rotate(0deg) scale(1.1); }
          25% { transform: rotate(-0.72deg) scale(1.1); }
          75% { transform: rotate(0.72deg) scale(1.1); }
        }
        .hover\\:animate-shake:hover {
          animation: shake 0.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
