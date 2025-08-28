"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950/90 text-white p-5 shadow-lg border-t border-zinc-750">
      {" "}
      {/* Adjusted background, padding, shadow, and border */}
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          {" "}
          {/* Adjusted spacing */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-3">A Sua Privacidade, A Nossa Prioridade: Aviso de Cookies</h3>{" "}
            {/* Translated heading to Portuguese */}
            <p className="text-sm text-gray-350">
              Utilizamos cookies para melhorar significativamente a sua experiência de navegação, fornecer anúncios ou
              conteúdo personalizado e analisar meticulosamente o tráfego do nosso website. Ao clicar em &quot;Aceitar
              Todos&quot;, concede o seu consentimento ao nosso uso destes cookies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            {" "}
            {/* Adjusted spacing */}
            <Button
              variant="outline"
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white bg-transparent" // Adjusted colors
              onClick={declineAll}
            >
              Recusar Todos
            </Button>{" "}
            <Button className="bg-emerald-700 hover:bg-emerald-800 text-white" onClick={acceptAll}>
              Aceitar Todos os Cookies
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  )
}
