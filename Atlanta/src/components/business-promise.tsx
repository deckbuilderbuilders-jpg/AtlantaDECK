import { BUSINESS_NAME } from "@/lib/constants"
import { Card } from "@/components/ui/card"
import { GraduationCap, Shield, Wrench } from "lucide-react"

export function BusinessPromise() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The {BUSINESS_NAME} Promise</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed italic">
            "Choosing a contractor can be tough. Investing thousands into your home without knowing if your project will
            be done properly is stressful!"
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:bg-orange-500 group">
            <div className="text-center mb-6">
              <GraduationCap className="w-12 h-12 mx-auto text-orange-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors">
              Educate, don't Assume
            </h3>
            <p className="text-gray-600 group-hover:text-white transition-colors leading-relaxed">
              In order to choose the right contractor, homeowners really need to know what's being done to their home.
              During our sales process we'll educate you on how decks are built, what common issues are and how to spot
              "imposters"
            </p>
          </Card>

          <Card className="p-8 border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:bg-orange-500 group">
            <div className="text-center mb-6">
              <Shield className="w-12 h-12 mx-auto text-orange-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors">
              Proof of Competency
            </h3>
            <p className="text-gray-600 group-hover:text-white transition-colors leading-relaxed">
              Decks can be dangerous. An improper connection or a poorly poured footer can literally lead to a
              catastrophic deck failure. That's why we show you "proof of competency". For each integral part of your
              deck, ESPECIALLY the hidden ones, we'll take a video to show you it's been done right, the first time.
            </p>
          </Card>

          <Card className="p-8 border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:bg-orange-500 group">
            <div className="text-center mb-6">
              <Wrench className="w-12 h-12 mx-auto text-orange-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors">
              Fix it Fast
            </h3>
            <p className="text-gray-600 group-hover:text-white transition-colors leading-relaxed">
              Mistakes happen. Sometimes contractors try to hide them knowing a homeowner won't discover it until it's
              too late. We're proud of our mistakes ... because of how we handle them. Even if we've already fixed
              something, you'll get a text displaying what's occurred, how we're going to fix it, and, most importantly,
              how much it DOESN'T cost you.
            </p>
          </Card>
        </div>

        {/* Promise Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Promise to You</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Your home is your sanctuary. Even though we won't be inside of it (most of our decks are on the outside of
            houses :P) we promise to treat it as our own. That means cleaning up after ourselves, notifying you of any
            issues, and, most importantly, always doing our best.
          </p>
        </div>

        {/* Owner Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-2xl mx-auto">
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
            <img
              src="/professional-business-owner-headshot.png"
              alt="Business Owner"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">[Owner Name]</h3>
            <div className="w-48 h-16 bg-gray-100 border border-gray-200 rounded flex items-center justify-center">
              <img
                src="/handwritten-signature.png"
                alt="Owner Signature"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
