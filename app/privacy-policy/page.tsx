import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Política de Privacidade | ApostasPortugal",
  description: "Descubra como o ApostasPortugal trata e protege responsavelmente os seus dados pessoais.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-zinc-950 text-white">
      <SiteHeader />
      <section className="pt-36 pb-16 flex-grow">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-red-400 mb-10 text-center">
            O Nosso Compromisso com a Sua Privacidade
          </h1>
          <div className="space-y-8 text-gray-350 leading-relaxed">
            <p className="text-sm text-gray-550">Última atualização: Janeiro 2025</p>
            <p>
              No SitesDeCasinosPT, proteger a sua privacidade é fundamental para a nossa missão. Esta Política de
              Privacidade detalha meticulosamente como recolhemos, utilizamos e protegemos rigorosamente as suas
              informações enquanto explora o nosso website.
            </p>
            <h2 className="text-2xl font-bold text-amber-450 pt-6">1. Informações que Recolhemos Responsavelmente</h2>
            <p>Podemos recolher os seguintes tipos de informação, sempre com a sua privacidade em mente:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong>Dados de Utilização:</strong> Recolhemos automaticamente informações não pessoais sobre as suas
                interações com o nosso website, como páginas visualizadas, tempo gasto nas páginas e tipo de dispositivo
                utilizado. Estes dados valiosos ajudam-nos a compreender como o nosso site é navegado e a melhorar
                continuamente a sua funcionalidade e experiência.
              </li>
              <li>
                <strong>Cookies e Tecnologias Similares:</strong> Utilizamos cookies para melhorar significativamente a
                sua experiência de navegação. Para uma compreensão abrangente, consulte a nossa Política de Cookies
                dedicada.
              </li>
            </ul>
            <h2 className="text-2xl font-bold text-amber-450 pt-6">2. Como Utilizamos as Suas Informações</h2>
            <p>
              As informações que recolhemos são estrategicamente utilizadas para vários propósitos essenciais,
              incluindo:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>Operar e manter meticulosamente a funcionalidade perfeita do ApostasPortugal.</li>
              <li>
                Melhorar continuamente o conteúdo, funcionalidades e experiência geral do utilizador do nosso website.
              </li>
              <li>
                Analisar o tráfego do website e comportamento do utilizador para melhorar inteligentemente os nossos
                serviços.
              </li>
              <li>Garantir a segurança e integridade inabaláveis do nosso website em todos os momentos.</li>
            </ul>
            <h2 className="text-2xl font-bold text-amber-450 pt-6">
              3. Nosso Aproach ao Compartilhamento de Informações
            </h2>
            <p>
              Mantemos uma política rigorosa: não vendemos, negociamos ou transferimos de outra forma as suas
              informações pessoais para terceiros. Podemos, no entanto, compartilhar dados não pessoais, agregados com
              parceiros de confiança para fins analíticos, mas pode ter certeza de que estes dados não podem ser usados
              para identificar pessoalmente você. Também podemos revelar informações se legalmente exigido ou para
              diligentemente proteger nossos direitos e segurança.
            </p>
            <h2 className="text-2xl font-bold text-amber-450 pt-6">4. Nossas Medidas de Segurança de Dados Robustas</h2>
            <p>
              Implementamos medidas técnicas e organizacionais de ponta para proteger rigorosamente as suas informações
              de acesso não autorizado, alteração, divulgação ou destruição. No entanto, é importante reconhecer que
              nenhum método de transmissão pela Internet ou armazenamento eletrónico pode ser garantido como 100%
              seguro, e portanto, não podemos garantir segurança absoluta.
            </p>
            <h2 className="text-2xl font-bold text-amber-450 pt-6">5. Seus Direitos em Relação aos Seus Dados</h2>
            <p>
              Dependendo da sua localização geográfica, você pode possuir certos direitos em relação aos seus dados,
              como o direito de acessar, corrigir ou solicitar a exclusão das suas informações. Como recolhemos
              principalmente dados de utilização não pessoais e preferências de cookies, esses direitos se referem
              principalmente aos dados recolhidos através de cookies, que você pode gerir facilmente através das
              configurações do seu navegador ou do nosso banner intuitivo de consentimento de cookies.
            </p>
            <h2 className="text-2xl font-bold text-amber-450 pt-6">
              6. Atualizações para Esta Política de Privacidade
            </h2>
            <p>
              Podemos atualizar periodicamente esta Política de Privacidade para refletir práticas evoluídas ou novos
              requisitos legais. Notificaremos-o imediatamente de quaisquer alterações significativas ao publicar o novo
              acordo nesta página com uma data de atualização "Última atualização" atualizada. Encorajamos-o fortemente
              a revisar esta política regularmente para ficar informado.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
