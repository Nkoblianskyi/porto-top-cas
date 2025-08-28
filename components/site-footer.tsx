import Link from "next/link"
import { Info, AlertTriangle, Crown, Phone, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Top Section: Logo + Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-gray-800 pb-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12 bg-gradient-to-br from-amber-600 to-yellow-500 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                <Crown className="h-6 w-6 text-black relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none font-serif">CasinoRei</span>
                <span className="text-sm text-gray-400">Casinos Licenciados SRIJ</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              O seu guia para os melhores casinos online licenciados em Portugal. Análises imparciais e jogo
              responsável.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link href="#rating" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Classificação
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidade" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">info@casinorei.pt</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">+351 21 000 0000</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">Lisboa, Portugal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Gambling Partners */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-6 text-center text-white">Organizações Parceiras</h4>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/srij.svg" alt="SRIJ" className="h-8 w-auto object-contain opacity-60" />
            </Link>
            <Link
              href="https://www.sicad.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/icad.png" alt="ICAD" className="h-8 w-auto object-contain opacity-60" />
            </Link>
            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/jogo2.png" alt="Jogo Responsável" className="h-8 w-auto object-contain opacity-60" />
            </Link>
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/gamecare.svg" alt="GamCare" className="h-8 w-auto object-contain opacity-60" />
            </Link>
          </div>
        </div>

        {/* Age Verification and Disclaimer */}
        <div className="text-center text-sm text-gray-400 space-y-3">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="bg-red-600 text-white px-3 py-1 rounded font-bold text-xs">18+</div>
            <span className="text-xs">Apenas para maiores de 18 anos</span>
          </div>

          <div className="flex items-start justify-center gap-2 max-w-3xl mx-auto">
            <Info className="h-4 w-4 text-gray-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-left">
              CasinoRei fornece informações apenas para fins informativos. Todo o conteúdo é destinado a indivíduos com
              mais de 18 anos residentes em Portugal. O jogo envolve risco e deve ser sempre abordado de forma
              responsável.
            </p>
          </div>

          <p className="flex items-center justify-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-400" />
            <span className="text-xs">O jogo pode causar dependência. Jogue com responsabilidade.</span>
          </p>

          <p className="text-xs">© 2025 CasinoRei. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
