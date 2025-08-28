"use client"

import { useState } from "react"
import { CasinoCard } from "@/components/casino-card"
import { casinoSites } from "@/data/casino-sites"

export function CasinoList() {
  const [sites] = useState(casinoSites)

  return (
    <section className="pt-6 md:pt-10 pb-10 md:pb-20 relative z-10 max-w-[1200px] mx-auto bg-black/50 rounded-lg">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Base gradient - REMOVED bg-gray-50 to make it transparent */}
      </div>
      <div className="mx-auto px-8 md:px-12">
        <div className="w-full space-y-6 md:space-y-8">
          {sites.map((site, index) => (
            <CasinoCard key={site.name} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
