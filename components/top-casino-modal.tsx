"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Star, Users, Gift, ExternalLink } from "lucide-react"
import { getTopCasino } from "@/data/casino-sites"

export function TopCasinoModal() {
  const [isOpen, setIsOpen] = useState(false)
  const topCasino = getTopCasino()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md mx-auto bg-black/95 border border-yellow-500/30 text-white p-0 overflow-hidden">
        <div className="relative">
          {/* Header with rank badge */}
          <div className="bg-gradient-to-r from-yellow-500 to-amber-500 p-4 text-center">
            <div className="inline-flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full text-sm font-bold">
              <span className="text-yellow-300">#{topCasino.rank}</span>
              <span>{topCasino.type}</span>
            </div>
          </div>

          {/* Casino logo and name */}
          <div className="p-6 text-center border-b border-gray-800">
            <div className="w-46 h-32 mx-auto mb-4 bg-gray-900 rounded-lg flex items-center justify-center">
              <img
                src={topCasino.logo || "/placeholder.svg"}
                alt={topCasino.name}
                className="w-46 h-32 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">{topCasino.name}</h3>
            <div className="flex items-center justify-center gap-1 mb-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-lg font-bold text-yellow-400">{topCasino.rating}</span>
              <span className="text-gray-400">/10</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-sm text-gray-400">
              <Users className="w-4 h-4" />
              <span>{topCasino.votes.toLocaleString()} avaliações</span>
            </div>
          </div>

          {/* Bonus section */}
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center gap-2 mb-3">
              <Gift className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-400">BÓNUS EXCLUSIVO</span>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{topCasino.bonus}</div>
              {topCasino.dopbonus && <div className="text-sm text-yellow-300">{topCasino.dopbonus}</div>}
            </div>
          </div>

          {/* Features */}
          <div className="p-6 border-b border-gray-800">
            <div className="space-y-2">
              {topCasino.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action button */}
          <div className="p-6">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black font-bold py-3 text-lg"
            >
              <a href={topCasino.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                OBTER BÓNUS AGORA
              </a>
            </Button>
            <p className="text-xs text-gray-500 text-center mt-2">Aplicam-se termos e condições</p>
          </div>

          {/* Close button */}
          
        </div>
      </DialogContent>
    </Dialog>
  )
}
