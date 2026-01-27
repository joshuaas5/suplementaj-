import Link from 'next/link'
import { Pill } from 'lucide-react'
import { MultiplexAd } from '@/components/ads/AdSenseUnits'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t-8 border-yellow-400 mt-16">
      {/* Multiplex Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MultiplexAd />
      </div>

      {/* Disclaimer Banner */}
      <div className="bg-pink-500 border-b-4 border-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-white text-center font-bold">
            ⚠️ <span className="bg-black px-2 py-1">IMPORTANTE:</span> As informações fornecidas neste site são exclusivamente educativas
            e não substituem consulta, diagnóstico ou tratamento médico profissional. O ideal é
            consultar um nutricionista, nutrólogo ou médico qualificado para orientação personalizada.
            Este site não vende produtos e as recomendações são baseadas em evidências científicas gerais.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-yellow-400 p-2 border-2 border-yellow-400 rotate-3">
                <Pill className="w-8 h-8 text-black" />
              </div>
              <span className="text-3xl font-black text-yellow-400 uppercase tracking-tighter">
                Suplementa <span className="bg-yellow-400 text-black px-2">Já</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4 font-medium">
              Recomendações personalizadas de suplementação vitamínica e mineral baseadas em evidências científicas.
            </p>
            <p className="text-gray-400 text-xs font-bold uppercase">
              © {currentYear} Suplementa Já. Todos os direitos reservados.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-black text-cyan-400 mb-4 uppercase text-lg">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/avaliacao" className="text-gray-300 hover:text-yellow-400 text-sm font-bold uppercase transition-colors">
                  → Fazer Avaliação
                </Link>
              </li>
              <li>
                <Link href="/nutrientes" className="text-gray-300 hover:text-yellow-400 text-sm font-bold uppercase transition-colors">
                  → Nutrientes
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-yellow-400 text-sm font-bold uppercase transition-colors">
                  → Blog
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-yellow-400 text-sm font-bold uppercase transition-colors">
                  → Sobre
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-black text-lime-400 mb-4 uppercase text-lg">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/termos" className="text-gray-300 hover:text-yellow-400 text-sm font-bold uppercase transition-colors">
                  → Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-gray-300 hover:text-yellow-400 text-sm font-bold uppercase transition-colors">
                  → Privacidade
                </Link>
              </li>
              <li>
                <Link href="/editorial" className="text-gray-300 hover:text-yellow-400 text-sm font-bold uppercase transition-colors">
                  → Política Editorial
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-yellow-400 text-sm font-bold uppercase transition-colors">
                  → FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-8 pt-8 border-t-4 border-yellow-400">
          <p className="text-xs text-gray-400 text-center font-bold uppercase">
            Este site participa do Programa de Associados da Amazon. As compras feitas através dos nossos links{' '}
            <span className="text-yellow-400">não geram custo adicional</span> para você.
          </p>
        </div>
      </div>
    </footer>
  )
}
