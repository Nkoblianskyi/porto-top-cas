"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5">
      {" "}
      {/* Adjusted background opacity and padding */}
      <div className="relative w-full max-w-md bg-zinc-900 rounded-lg shadow-xl p-5 md:p-8 border border-zinc-750">
        {" "}
        {/* Adjusted shadow, padding, and border */}
        <div className="flex items-center justify-between mb-4">
          {" "}
          {/* Adjusted margin */}
          <div className="flex items-center">
            <div className="bg-amber-500 p-2 rounded mr-3">
              {" "}
              {/* Adjusted margin and border radius */}
              <span className="text-white font-bold text-sm">18+</span>
            </div>
            <h2 className="text-base md:text-xl font-bold text-white">Verificação de Idade Obrigatória</h2>{" "}
          </div>
          <button onClick={onClose} className="text-gray-450 hover:text-white" aria-label="Fechar verificação de idade">
            {" "}
            <X className="h-6 w-6 md:h-7 w-7" /> {/* Adjusted icon size */}
          </button>
        </div>
        <div className="text-sm md:text-base text-gray-350 space-y-3">
          {" "}
          {/* Adjusted text color and spacing */}
          <p>
            Este website é exclusivamente destinado a indivíduos com 18 anos de idade ou mais. Ao prosseguir para usar o
            nosso site, confirma inequivocamente que cumpre este requisito essencial de idade.
          </p>
          <p>
            O jogo deve sempre ser abordado apenas como uma forma de entretenimento. É crucial nunca apostar com fundos
            que não pode confortavelmente permitir-se perder.
          </p>
          <p>
            Se está a enfrentar desafios relacionados com o jogo, encorajamos vivamente a procurar assistência imediata
            e confidencial de organizações como o SICAD ou outros serviços de apoio dedicados.
          </p>
        </div>
        <div className="mt-5 md:mt-8 flex justify-end">
          {" "}
          {/* Adjusted margin */}
          <Button
            onClick={onClose}
            className="bg-amber-500 hover:bg-amber-600 text-sm md:text-base py-2.5 px-5 md:py-3 md:px-6 text-white" // Adjusted colors and padding
          >
            Confirmo a Minha Idade
          </Button>{" "}
        </div>
      </div>
    </div>
  )
}
