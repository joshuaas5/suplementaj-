import Link from 'next/link'
import { Pill } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      {/* Disclaimer Banner */}
      <div className="bg-warning-50 border-y border-warning-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-warning-800 text-center">
            ⚠️ <strong>IMPORTANTE:</strong> As informações fornecidas neste site são exclusivamente educativas
            e não substituem consulta, diagnóstico ou tratamento médico profissional. Sempre
            consulte um nutricionista, nutrólogo ou médico qualificado antes de iniciar
            qualquer suplementação. Este site não vende produtos e as recomendações são
            baseadas em evidências científicas gerais, não constituindo prescrição médica.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Pill className="w-8 h-8 text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">
                Vita<span className="text-primary-600">Guia</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Recomendações personalizadas de suplementação vitamínica e mineral baseadas em evidências científicas.
            </p>
            <p className="text-gray-500 text-xs">
              © {currentYear} VitaGuia. Todos os direitos reservados.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/avaliacao" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  Fazer Avaliação
                </Link>
              </li>
              <li>
                <Link href="/nutrientes" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  Nutrientes
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/termos" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Este site participa do Programa de Associados da Amazon, um programa de publicidade de afiliados
            projetado para fornecer um meio para sites ganharem taxas de publicidade através de links para Amazon.com.br.
            As compras feitas através desses links não geram custo adicional para você.
          </p>
        </div>
      </div>
    </footer>
  )
}
