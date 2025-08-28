"use client"

import { useState, useEffect } from "react"
import { X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5">
      <div className="relative w-full max-w-md bg-zinc-900 rounded-lg shadow-xl p-5 md:p-8 border border-zinc-750">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="bg-emerald-700 p-2 rounded-full mr-3">
              <Info className="h-4 w-4 md:h-6 w-6 text-white" />
            </div>
            <h2 className="text-base md:text-xl font-bold text-white">Divulgação Importante do Anunciante</h2>
          </div>
          <button onClick={onClose} className="text-gray-450 hover:text-white" aria-label="Fechar divulgação">
            <X className="h-6 w-6 md:h-7 w-7" />
          </button>
        </div>
        <div className="text-sm md:text-base text-gray-350 space-y-3">
          <p>
            ApostasPortugal.com opera como um serviço gratuito, dedicado a ajudá-lo a descobrir plataformas de apostas
            respeitáveis e licenciadas. Recebemos uma comissão das marcas apresentadas, o que pode influenciar o seu
            posicionamento e visibilidade no nosso site.
          </p>
          <p>
            Todos os sites apresentados na nossa plataforma são rigorosamente licenciados por autoridades estimadas.
            Embora nos esforcemos pela precisão absoluta, não podemos ser responsabilizados por quaisquer imprecisões ou
            omissões inadvertidas.
          </p>
          <p>
            Note que os bónus e ofertas promocionais estão sujeitos a alterações sem aviso prévio. Aconselhamos
            vivamente que leia sempre completamente os termos e condições diretamente no website do operador antes de
            reclamar qualquer oferta.
          </p>
        </div>
        <div className="mt-5 md:mt-8 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-emerald-700 hover:bg-emerald-800 text-sm md:text-base py-2.5 px-5 md:py-3 md:px-6 text-white"
          >
            Compreendido
          </Button>
        </div>
      </div>
    </div>
  )
}
