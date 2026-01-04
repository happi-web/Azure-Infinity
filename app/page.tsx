"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Droplets, Waves, Thermometer, Palette } from "lucide-react"

export default function Page() {
  const [poolSize, setPoolSize] = useState("Medium")
  const [poolStyle, setPoolStyle] = useState("Standard")
  const [priceRange, setPriceRange] = useState("$40k - $60k")

  const calculatePrice = (size: string, style: string) => {
    let basePrice = 0
    let maxPrice = 0

    // Base prices by size
    if (size === "Small") {
      basePrice = 30000
      maxPrice = 45000
    } else if (size === "Medium") {
      basePrice = 40000
      maxPrice = 60000
    } else if (size === "Olympic") {
      basePrice = 80000
      maxPrice = 120000
    }

    // Add infinity edge premium
    if (style === "Infinity Edge") {
      basePrice += 15000
      maxPrice += 25000
    }

    const formattedMin = `$${(basePrice / 1000).toFixed(0)}k`
    const formattedMax = `$${(maxPrice / 1000).toFixed(0)}k`

    return `${formattedMin} - ${formattedMax}`
  }

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = e.target.value
    setPoolSize(newSize)
    setPriceRange(calculatePrice(newSize, poolStyle))
  }

  const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStyle = e.target.value
    setPoolStyle(newStyle)
    setPriceRange(calculatePrice(poolSize, newStyle))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/woman-swimming-infinity-pool-overlooking-ocean.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-sans text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Your Private Resort, Built in 6 Weeks.
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-light">Transform your backyard into a luxury escape.</p>
          <Button className="bg-[#0284c7] hover:bg-[#0369a1] text-white px-10 py-7 text-lg font-semibold rounded-full shadow-lg transition-all">
            Get Price Estimate
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0284c7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-[#0284c7]" />
              </div>
              <h3 className="font-sans font-semibold text-lg mb-2">Saltwater Systems</h3>
              <p className="text-gray-600 text-sm">Low-maintenance, eco-friendly water treatment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0284c7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-[#0284c7]" />
              </div>
              <h3 className="font-sans font-semibold text-lg mb-2">Infinity Edges</h3>
              <p className="text-gray-600 text-sm">Stunning vanishing edge designs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0284c7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-8 h-8 text-[#0284c7]" />
              </div>
              <h3 className="font-sans font-semibold text-lg mb-2">Smart Heating</h3>
              <p className="text-gray-600 text-sm">Year-round comfort with automated controls.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0284c7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-[#0284c7]" />
              </div>
              <h3 className="font-sans font-semibold text-lg mb-2">Italian Tile</h3>
              <p className="text-gray-600 text-sm">Premium imported finishes for lasting beauty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pool Cost Estimator */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0284c7]/5 to-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Pool Cost Estimator
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Get an instant price range for your dream pool.</p>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Pool Size Dropdown */}
              <div>
                <label className="block font-sans font-semibold text-gray-700 mb-3">Pool Size</label>
                <select
                  value={poolSize}
                  onChange={handleSizeChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl font-sans text-lg focus:outline-none focus:border-[#0284c7] transition-colors cursor-pointer"
                >
                  <option value="Small">Small (12&apos; x 24&apos;)</option>
                  <option value="Medium">Medium (16&apos; x 32&apos;)</option>
                  <option value="Olympic">Olympic (25m x 50m)</option>
                </select>
              </div>

              {/* Pool Style Dropdown */}
              <div>
                <label className="block font-sans font-semibold text-gray-700 mb-3">Pool Style</label>
                <select
                  value={poolStyle}
                  onChange={handleStyleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl font-sans text-lg focus:outline-none focus:border-[#0284c7] transition-colors cursor-pointer"
                >
                  <option value="Standard">Standard</option>
                  <option value="Infinity Edge">Infinity Edge</option>
                </select>
              </div>
            </div>

            {/* Price Result */}
            <div className="bg-gradient-to-r from-[#0284c7] to-[#0369a1] rounded-2xl p-8 text-center text-white">
              <p className="text-sm uppercase tracking-wider mb-2 opacity-90">Estimated Investment</p>
              <p className="text-5xl md:text-6xl font-bold mb-4">{priceRange}</p>
              <p className="text-sm opacity-90">Includes installation, equipment & 2-year warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            From Vision to Reality
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (desktop only) */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-[#0284c7]/20" />

            {/* Step 1 */}
            <div className="relative text-center">
              <div className="w-24 h-24 bg-[#0284c7] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg relative z-10">
                1
              </div>
              <h3 className="font-sans font-bold text-xl mb-3">Design</h3>
              <p className="text-gray-600">Week 1 - Custom plans tailored to your space and style.</p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div className="w-24 h-24 bg-[#0284c7] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg relative z-10">
                2
              </div>
              <h3 className="font-sans font-bold text-xl mb-3">Excavation</h3>
              <p className="text-gray-600">Week 2 - Professional excavation and structural work begins.</p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center">
              <div className="w-24 h-24 bg-[#0284c7] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg relative z-10">
                3
              </div>
              <h3 className="font-sans font-bold text-xl mb-3">Swim</h3>
              <p className="text-gray-600">Week 6 - Your private resort is complete. Dive in!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white text-center">
        <h3 className="font-sans text-2xl font-bold mb-2">Azure Infinity</h3>
        <p className="text-gray-400 mb-6">Building dreams, one pool at a time.</p>
        <p className="text-sm text-gray-500">&copy; 2026 Azure Infinity. All rights reserved.</p>
      </footer>

      {/* Sticky Mobile Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
        <Button className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-white py-6 text-lg font-semibold rounded-full shadow-md">
          Text Us Now
        </Button>
      </div>
    </div>
  )
}
