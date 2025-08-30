"use client"

import Link from "next/link"
import { Crown } from "lucide-react" // Changed from TrendingUp to Crown for casino theme
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-350 ${
        scrolled
          ? "bg-zinc-950/92 backdrop-blur-md shadow-xl-custom border-b border-zinc-700"
          : "bg-zinc-900/92 backdrop-blur-md shadow-lg-custom border-b border-zinc-800"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6 relative">
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          <div className="relative h-10 w-10 bg-gradient-to-br from-amber-600 to-yellow-500 rounded-lg shadow-md-custom overflow-hidden flex items-center justify-center">
            <Crown className="h-6 w-6 text-black relative z-10" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-none text-white">SitesDeCasinosPt</span>{" "}
          </div>
        </Link>
      </div>
    </header>
  )
}
