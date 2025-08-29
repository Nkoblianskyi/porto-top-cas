"use client"
import type { Dispatch, SetStateAction } from "react"
import { useEffect, useState } from "react"
import Image from "next/image"

interface HeroSectionProps {
  setIsAgeModalOpen: Dispatch<SetStateAction<boolean>>
  setIsAdvertiserModalOpen: Dispatch<SetStateAction<boolean>>
}

export function HeroSection({ setIsAgeModalOpen, setIsAdvertiserModalOpen }: HeroSectionProps) {
  const [lastUpdated, setLastUpdated] = useState("")

  useEffect(() => {
    const date = new Date()
    const month = date.toLocaleString("pt-PT", { month: "long" })
    const year = date.getFullYear()
    setLastUpdated(`${month} ${year}`)
  }, [])

  return (
    <section className="relative text-white overflow-hidden h-[220px] sm:h-[240px] lg:h-[260px] flex items-center justify-center bg-black/50 pt-20">
      <div className="absolute inset-0 bg-black/20 py-2.5 my-1"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto text-center px-4 sm:px-6 sm:py-3 lg:py-4 py-6">
        <h1 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2 leading-tight drop-shadow-2xl animate-fade-in-up font-serif md:text-3xl">
          <span className="text-green-500">APOSTAS</span>
          <span className="text-red-600">PORTUGAL</span>
        </h1>

        <p
          className="text-xs sm:text-sm text-gray-100 max-w-3xl mx-auto font-light mb-2 sm:mb-3 animate-fade-in-up md:text-sm"
          style={{ animationDelay: "200ms" }}
        >
          Descubra as casas de apostas desportivas mais seguras e confiáveis de Portugal. Análises detalhadas, bónus
          exclusivos e apostas responsáveis.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 mb-1 sm:mb-2 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="flex items-center gap-1 sm:gap-2">
            <img
              src="/srij.svg"
              alt="Bandeira de Portugal"
              className="w-4 h-3 sm:w-5 sm:h-3 rounded-sm"
            />
            <span className="font-medium text-white text-sm">Licenciado pelo SRIJ</span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <Image src="/flag.png" width={32} height={32} alt="Bandeira de Portugal" className="w-4 h-3 sm:w-5 sm:h-3 rounded-sm" />
            <span className="font-medium text-white text-sm">Jogo Seguro</span>
          </div>
        </div>

        <div
          className="mb-1 sm:mb-2 text-xs sm:text-sm text-yellow-300 font-semibold animate-fade-in-up animate-pulse"
          style={{ animationDelay: "400ms" }}
        >
          Classificações Atualizadas: {lastUpdated}
        </div>

        <div className="text-center mt-1 sm:mt-2 animate-fade-in-up">
          <p className="text-xs sm:text-sm md:text-base text-gray-100 font-medium drop-shadow-md">
            Aposte com responsabilidade. Aplicam-se T&C.{" "}
            <button
              onClick={() => setIsAdvertiserModalOpen(true)}
              className="text-yellow-300 hover:text-yellow-200 hover:underline font-semibold transition-all duration-300 hover:scale-105"
            >
              Divulgação
            </button>{" "}
            <span className="text-gray-300 mx-1">|</span>{" "}
            <button
              onClick={() => setIsAgeModalOpen(true)}
              className="text-yellow-300 hover:text-yellow-200 hover:underline font-semibold transition-all duration-300 hover:scale-105"
            >
              +18 Anos
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}
