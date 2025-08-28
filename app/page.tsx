"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CasinoList } from "@/components/casino-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { HeroSection } from "@/components/hero-section"
import { CasinoGuideSection } from "@/components/casino-guide-section"
import { FaqSection } from "@/components/faq-section"
import { OurTopCasinoChoiceSection } from "@/components/our-top-casino-choice-section"
import { CookieBanner } from "@/components/cookie-banner"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import { TopCasinoModal } from "@/components/top-casino-modal"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)

  return (
    <CookieConsentProvider>
      <main
        className="min-h-screen flex flex-col bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/casino-background-with-poker-chips-cards-dice-dark.png")',
        }}
      >
        <div className="relative z-10 pt-12">
          <SiteHeader />
          <HeroSection setIsAgeModalOpen={setIsAgeModalOpen} setIsAdvertiserModalOpen={setIsAdvertiserModalOpen} />
          <div id="betting-sites" className="relative">
            <CasinoList />
          </div>
          <CasinoGuideSection />
          <OurTopCasinoChoiceSection />
          <FaqSection />
        </div>
        <TopOffersModal />
        <TopCasinoModal />
        <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
        <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
        <SiteFooter />
        <CookieBanner />
      </main>
    </CookieConsentProvider>
  )
}
