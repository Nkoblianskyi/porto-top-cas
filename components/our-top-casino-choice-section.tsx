"use client"

import { useState } from "react"
import { CasinoCard } from "@/components/casino-card"
import { casinoSites } from "@/data/casino-sites"

export function OurTopCasinoChoiceSection() {
  const [topSite] = useState(casinoSites[0])

  if (!topSite) {
    return null
  }

  return (
    <section className="py-16 md:py-20 bg-zinc-900/50 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          A Nossa Escolha Principal de Apostas
        </h2>
        <CasinoCard site={topSite} rank={1} />
      </div>
    </section>
  )
}
