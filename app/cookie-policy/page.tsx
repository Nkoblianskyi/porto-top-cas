import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Política de Cookies | ApostasPortugal",
  description: "Compreenda como o ApostasPortugal utiliza cookies e como pode gerir as suas preferências.",
}

export default function CookiePolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-zinc-950 text-white">
      <SiteHeader />
      <section className="pt-36 pb-16 flex-grow">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-red-400 mb-10 text-center">
            A Nossa Utilização de Cookies Explicada
          </h1>
          <div className="space-y-8 text-gray-350 leading-relaxed">
            <p className="text-sm text-gray-550">Última atualização: Janeiro 2025</p>
            <p>
              Esta Política de Cookies fornece uma explicação clara de como o ApostasPortugal emprega cookies e
              tecnologias similares para o reconhecer durante as suas visitas ao nosso website. Esclarece o que são
              estas tecnologias, as nossas razões para as utilizar e os seus direitos para controlar a sua aplicação.
            </p>
            <h2 className="text-2xl font-bold text-gold-450 pt-6">1. O Que São Cookies?</h2>
            <p>
              Cookies são pequenos ficheiros de dados colocados estratégicamente no seu computador ou dispositivo móvel
              quando acede a um website. Eles são universalmente adotados pelos proprietários de websites para garantir
              que as suas plataformas funcionem de forma fluida e eficiente, além de fornecer insights valiosos de
              relatórios.
            </p>
            <h2 className="text-2xl font-bold text-gold-450 pt-6">2. Como Utilizamos Cookies</h2>
            <p>Utilizamos cookies para várias razões distintas e benéficas:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong>Cookies Essenciais:</strong> Estes cookies são absolutamente indispensáveis para fornecer-lhe os
                serviços principais disponíveis através do nosso website e ativar funcionalidades cruciais, como o
                acesso a áreas seguras.
              </li>
              <li>
                <strong>Cookies de Desempenho e Análise:</strong> Estes cookies recolhem informações anónimas sobre como
                os visitantes interagem com o nosso website—por exemplo, quais páginas são mais frequentemente visitadas
                e se os utilizadores encontram mensagens de erro. Esta informação é vital para nós melhorar
                continuamente o desempenho do website e a experiência do utilizador.
              </li>
              <li>
                <strong>Cookies de Funcionalidade:</strong> Estes cookies permitem ao nosso website lembrar as suas
                escolhas específicas (como o seu idioma preferido ou região geográfica) e oferecer funcionalidades
                enriquecidas e mais personalizadas adaptadas às suas necessidades.
              </li>
            </ul>
            <h2 className="text-2xl font-bold text-gold-450 pt-6">3. Cookies de Terceiros Explicados</h2>
            <p>
              Além dos nossos cookies próprios, também podemos integrar vários cookies de terceiros. Estes são
              utilizados para relatar estatísticas de utilização completas do website, facilitar a entrega de anúncios
              relevantes no website e para outros fins relacionados. Estes terceiros podem utilizar informações sobre as
              suas visitas a este e a outros websites para apresentar anúncios sobre bens e serviços que realmente lhe
              são de interesse.
            </p>
            <h2 className="text-2xl font-bold text-gold-450 pt-6">4. O Seu Controlo sobre Cookies</h2>
            <p>
              Você tem o direito absoluto de decidir se aceita ou rejeita cookies. Você pode exercer as suas
              preferências de cookie ao configurar ou alterar os controlos do seu navegador web para aceitar ou rejeitar
              cookies. Se optar por rejeitar cookies, ainda poderá navegar no nosso website, embora o seu acesso a
              certas funcionalidades e áreas específicas do nosso website possa ser limitado.
            </p>
            <p>
              A maioria dos navegadores web está configurada para aceitar cookies por padrão. Se preferir, normalmente
              tem a opção de configurar o seu navegador para remover ou rejeitar cookies do navegador. Por favor, esteja
              ciente de que se escolher remover ou rejeitar cookies, esta ação pode potencialmente afetar a
              disponibilidade e a funcionalidade geral do nosso website.
            </p>
            <h2 className="text-2xl font-bold text-gold-450 pt-6">5. Revisões desta Política</h2>
            <p>
              Podemos periodicamente atualizar a nossa Política de Cookies para refletir práticas em evolução ou novos
              requisitos legais. Informaremos-o imediatamente de quaisquer alterações ao publicar a Política de Cookies
              revisada desta página e atualizar a data de "Última atualização". Recomendamos-lhe que revise esta
              Política de Cookies regularmente por quaisquer modificações.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
