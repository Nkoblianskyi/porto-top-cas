"use client"
import { Star, Dice1, Spade, Diamond } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CasinoSite } from "@/data/casino-sites"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CasinoCardProps {
  site: CasinoSite
  rank: number
}

export function CasinoCard({ site, rank }: CasinoCardProps) {
  const formatReviews = (reviews: number) => {
    return reviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const getRankLabel = (rank: number) => {
    switch (rank) {
      case 1:
        return "MELHOR ESCOLHA"
      case 2:
        return "RECOMENDADO"
      case 3:
        return "POPULAR"
      case 4:
        return "CONFIÁVEL"
      default:
        return "TESTADO"
    }
  }

  return (
    <div className="block animate-fade-in">
      {/* Desktop Layout */}
      <div
        className={cn(
          "hidden lg:block rounded-xl shadow-xl relative overflow-hidden cursor-pointer mb-2 mx-4",
          rank === 1
            ? "border-2 border-yellow-500 bg-black"
            : "border border-gray-700 bg-black hover:border-yellow-600 transition-all duration-300",
        )}
      >
        <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
          <div className="absolute top-2 right-2 opacity-20 z-0">
            <div className="flex gap-1">
              <Spade className="w-6 h-6 text-red-500" />
              <Diamond className="w-6 h-6 text-red-500" />
              <Dice1 className="w-6 h-6 text-yellow-500" />
            </div>
          </div>

          {/* Main Content */}
          <div className="h-40 flex items-center py-6 px-6 pl-8 pr-16 relative bg-black">
            {/* PLATFORM - 30% */}
            <div className="flex-[0_0_30%] pr-4 flex justify-center items-center h-full relative z-10">
              <div
                className={cn(
                  "bg-gray-900 border-2 p-4 shadow-lg relative mt-4 rounded-lg",
                  rank === 1 ? "border-yellow-500" : "border-gray-600",
                )}
              >
                <Image
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  width={170}
                  height={70}
                  className="w-36 xl:w-44 h-16 xl:h-20 object-contain"
                />
                <div
                  className={cn(
                    "absolute -top-1 -left-1 w-2 h-2 rounded-full",
                    rank === 1 ? "bg-yellow-500" : "bg-red-600",
                  )}
                ></div>
                <div
                  className={cn(
                    "absolute -top-1 -right-1 w-2 h-2 rounded-full",
                    rank === 1 ? "bg-yellow-500" : "bg-red-600",
                  )}
                ></div>
              </div>
            </div>

            {/* Rank and Status Badges */}
            <div className="absolute top-0 left-0 flex gap-0 z-30">
              <div
                className={cn("px-3 py-1 text-xs font-bold text-white", rank === 1 ? "bg-yellow-600" : "bg-red-700")}
              >
                #{rank}
              </div>
              {rank <= 4 && (
                <div
                  className={cn(
                    "px-2 sm:px-3 md:px-4 py-1 text-xs font-bold text-white whitespace-nowrap",
                    rank === 1 ? "bg-yellow-600" : "bg-red-700",
                  )}
                >
                  {getRankLabel(rank)}
                </div>
              )}
            </div>

            {/* WELCOME PACKAGE - 30% */}
            <div className="flex-[0_0_30%] px-4 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-xs text-red-500 uppercase font-bold mb-1">OFERTA DE BOAS-VINDAS</div>

              <div className="text-lg xl:text-lg font-bold text-yellow-500 mb-1">{site.bonus}</div>
              {site.dopbonus && <div className="text-sm xl:text-base font-bold text-yellow-400">{site.dopbonus}</div>}
            </div>

            {/* USER SCORE & RATING - 27% */}
            <div className="flex-[0_0_27%] px-4 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-xs text-gray-300 mb-2">({formatReviews(site.votes)} AVALIAÇÕES)</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 xl:w-5 h-4 xl:h-5 fill-current text-yellow-500" />
                ))}
              </div>
              <div className="text-xl font-bold leading-none text-green-400">{site.rating.toFixed(1)} PONTOS</div>
            </div>

            {/* ACCESS - 13% */}
            <div className="flex-[0_0_13%] pl-4 pr-4 text-center flex flex-col justify-center items-center h-full relative z-10">
              <div className="w-full">
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-black border-2 border-yellow-500 w-full h-12 mb-2 text-sm font-bold shadow-lg transition-all duration-300 hover:shadow-yellow-500/50">
                  OBTER BÓNUS
                </Button>
                <div className="text-xs text-gray-300 font-bold">VISITAR {site.name.toUpperCase()}</div>
              </div>
            </div>
          </div>
        </Link>

        {/* Footer Disclaimer */}
        <div className="px-6 pl-8 pr-16 border-t border-gray-700 bg-black">
          <p className="text-xs text-center py-2 text-gray-400">
            18+ | Jogo Responsável |{" "}
            <a
              href="https://www.srij.turismodeportugal.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400 underline"
            >
              SRIJ
            </a>
          </p>
        </div>
      </div>

      {/* Tablet Layout */}
      <div
        className={cn(
          "hidden md:block lg:hidden rounded-xl border relative overflow-hidden cursor-pointer mb-2 mx-4",
          rank === 1 ? "border-yellow-500 bg-black" : "border-gray-700 bg-black",
        )}
      >
        <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
          <div className="absolute top-0 left-0 flex gap-0 z-30">
            <div
              className={cn("px-2 py-0.5 text-sm font-bold text-white", rank === 1 ? "bg-yellow-600" : "bg-red-700")}
            >
              #{rank}
            </div>
            {rank <= 4 && (
              <div
                className={cn(
                  "px-2 py-0.5 text-xs font-bold text-white whitespace-nowrap",
                  rank === 1 ? "bg-yellow-600" : "bg-red-700",
                )}
              >
                {getRankLabel(rank)}
              </div>
            )}
          </div>

          <div
            className={cn(
              "pt-6 pb-4 relative",
              rank === 1 ? "bg-black" : "bg-black",
              rank <= 4 ? "pl-12 pr-12" : "pl-8 pr-12",
            )}
          >
            <div className="grid grid-cols-12 gap-2 items-center relative z-10">
              {/* Logo - 3 колонки */}
              <div className="col-span-3 flex justify-center">
                <div
                  className={cn(
                    "bg-gray-900 border-2 p-2 shadow-sm-custom w-full mt-4 relative",
                    rank === 1 ? "border-yellow-500" : "border-gray-600",
                  )}
                >
                  <Image
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    width={120}
                    height={48}
                    className="w-full h-12 object-contain"
                  />
                  <div
                    className={cn(
                      "absolute -top-1 -left-1 w-1 h-1 rounded-full",
                      rank === 1 ? "bg-yellow-500" : "bg-red-600",
                    )}
                  ></div>
                  <div
                    className={cn(
                      "absolute -top-1 -right-1 w-1 h-1 rounded-full",
                      rank === 1 ? "bg-yellow-500" : "bg-red-600",
                    )}
                  ></div>
                </div>
              </div>
              {/* Bonus - 4 колонки */}
              <div className="col-span-4 text-center">
                <div className="text-xs text-red-500 uppercase font-bold mb-1">OFERTA DE BOAS-VINDAS</div>
                <div className="text-xs text-yellow-400 uppercase font-bold mb-1">{site.type}</div>
                <div className="text-sm font-bold text-yellow-500 mb-1">{site.bonus}</div>
                {site.dopbonus && <div className="text-xs font-bold text-yellow-400">{site.dopbonus}</div>}
              </div>
              {/* Rating & Score - 3 колонки */}
              <div className="col-span-3 text-center">
                <div className="text-xs text-gray-300 mb-1">({formatReviews(site.votes)})</div>
                <div className="flex justify-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <div className="text-xl font-bold leading-none text-green-400">{site.rating.toFixed(1)} PONTOS</div>
              </div>
              {/* Button - 2 колонки */}
              <div className="col-span-2 text-center">
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-black text-xs px-3 py-2 font-bold transition-all duration-300">
                  OBTER BÓNUS
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative mb-1">
        {rank <= 4 && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <div
              className={cn(
                "font-bold rounded-lg shadow-md flex items-center whitespace-nowrap",
                rank === 1
                  ? "text-sm py-2 px-6 bg-yellow-600 text-black border-2 border-yellow-400"
                  : "text-xs py-1.5 px-5 bg-red-600 text-white border border-red-400",
              )}
            >
              <span>{getRankLabel(rank)}</span>
            </div>
          </div>
        )}
        <Link
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "block rounded-xl overflow-hidden cursor-pointer border",
            rank === 1 ? "border-yellow-500 bg-black" : "border-gray-700 bg-black",
          )}
        >
          <div className="p-4 relative bg-black">
            <div className="absolute top-2 right-2 opacity-10 z-0">
              <Dice1 className="w-8 h-8 text-yellow-500" />
            </div>

            <div className="grid grid-cols-2 gap-4 items-center mt-8 relative z-10">
              <div className="flex justify-center">
                <div className="bg-gray-900 p-3 rounded shadow-sm w-40 h-24 flex items-center justify-center border border-gray-600">
                  <Image
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    width={180}
                    height={90}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
              <div className="text-center flex flex-col justify-center h-full min-h-[90px]">
                <div className="text-xs text-red-500 uppercase font-bold mb-1">OFERTA DE BOAS-VINDAS</div>
                <div className="uppercase font-bold mb-2 text-base text-yellow-400">{site.type}</div>
                <div className="font-bold text-yellow-500 text-sm leading-tight">{site.bonus}</div>
                {site.dopbonus && <div className="text-sm font-bold text-yellow-400">{site.dopbonus}</div>}
              </div>
            </div>

            <div className="grid grid-cols-3 items-center gap-3 pt-3 border-t border-gray-700 min-h-[60px]">
              <div className="col-span-2 text-center">
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <div className="text-gray-300 font-semibold">({formatReviews(site.votes)} Avaliações)</div>
                <div className="text-lg font-bold text-green-400 mt-1.5">{site.rating.toFixed(1)} PONTOS</div>
              </div>
              <div className="flex justify-center">
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-black text-xs px-3 py-2 font-bold transition-all duration-300">
                  OBTER BÓNUS
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
