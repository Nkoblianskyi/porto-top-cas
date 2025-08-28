"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Os casinos online são legais em Portugal?",
    answer:
      "Sim, os casinos online são completamente legais em Portugal desde que os operadores possuam licença válida do SRIJ (Serviço de Regulação e Inspeção de Jogos). Todos os casinos que recomendamos são licenciados e regulamentados pelo SRIJ, garantindo total segurança e conformidade legal.",
  },
  {
    question: "Como escolher o melhor casino online em Portugal?",
    answer:
      "Para escolher o melhor casino online, considere fatores como licenciamento SRIJ, variedade de jogos, RTP dos slots, métodos de pagamento seguros, bónus atrativos e suporte ao cliente em português. As nossas análises detalhadas ajudam-no a tomar a decisão mais informada.",
  },
  {
    question: "Como funcionam os bónus de boas-vindas nos casinos?",
    answer:
      "Os bónus de boas-vindas são ofertas promocionais para novos jogadores, geralmente incluindo rodadas grátis ou bónus de depósito. É essencial ler sempre os termos e condições, especialmente os requisitos de rollover, antes de aceitar qualquer bónus.",
  },
  {
    question: "Os meus dados pessoais e financeiros estão seguros?",
    answer:
      "Os casinos licenciados pelo SRIJ utilizam tecnologias de encriptação avançadas (SSL) para proteger os seus dados. Recomendamos apenas operadores que demonstram compromisso rigoroso com medidas de segurança e políticas de privacidade robustas.",
  },
  {
    question: "O que fazer se tiver problemas com o jogo?",
    answer:
      "Se você ou alguém que conhece está enfrentando problemas com o jogo, procure ajuda imediatamente. Organizações como SICAD, Jogo Responsável Portugal e a linha SOS Jogo (213 950 787) oferecem apoio gratuito e confidencial. Defendemos sempre práticas de jogo responsável.",
  },
  {
    question: "Posso jogar pelo telemóvel?",
    answer:
      "Absolutamente! A maioria dos casinos modernos oferece aplicações móveis dedicadas ou websites totalmente otimizados para dispositivos móveis. Pode desfrutar de uma experiência de jogo completa no seu smartphone ou tablet, com acesso a todos os jogos e funcionalidades.",
  },
  {
    question: "Quais são os métodos de pagamento mais seguros?",
    answer:
      "Os métodos mais seguros incluem cartões de crédito/débito, MB WAY, transferências bancárias e carteiras digitais como PayPal e Skrill. Todos os casinos licenciados pelo SRIJ oferecem métodos de pagamento seguros e processamento rápido de levantamentos.",
  },
  {
    question: "Que tipos de jogos posso encontrar nos casinos portugueses?",
    answer:
      "Os casinos portugueses oferecem uma vasta gama de jogos incluindo slots, roleta, blackjack, bacará, poker, jogos ao vivo com dealers reais e muito mais. Encontrará jogos de fornecedores renomados com gráficos de alta qualidade e RTPs competitivos.",
  },
]

export function FaqSection() {
  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center font-serif">
          Perguntas Frequentes sobre Casinos em Portugal
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800 mb-4">
              <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-white hover:no-underline hover:text-yellow-400 transition-colors duration-300 py-6">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base md:text-lg py-4 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
