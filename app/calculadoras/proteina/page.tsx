import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CalculadoraProteina } from '@/components/calculadoras'
import { AdUnit } from '@/components/layout/AdUnit'

export const metadata: Metadata = {
  title: 'Calculadora de Proteína - Quantos Gramas Por Dia? | Suplementa Já',
  description: 'Calcule quantos gramas de proteína você precisa por dia para ganhar massa, emagrecer ou manter peso. Baseado em estudos do ISSN. Resultado personalizado!',
  keywords: ['calculadora proteina', 'quantos gramas proteina', 'proteina por kg', 'proteina hipertrofia', 'proteina para emagrecer', 'whey protein', 'necessidade proteica'],
  openGraph: {
    title: 'Calculadora de Proteína - Quantos Gramas Você Precisa?',
    description: 'Descubra sua necessidade diária de proteína baseada em estudos científicos do ISSN.',
    type: 'website',
  }
}

export default function CalculadoraProteinaPage() {
  const adSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_PROTEINA?.trim()
  const canShowAds = Boolean(process.env.NEXT_PUBLIC_ADSENSE_ID && adSlot)

  return (
    <div className="min-h-screen bg-lime-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Navegação */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/calculadoras">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> Todas Calculadoras
            </Button>
          </Link>
          <Link href="/avaliacao">
            <Button variant="primary" size="sm">
              Avaliação Completa →
            </Button>
          </Link>
        </div>

        {/* Header SEO */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-black uppercase mb-4">
            🥩 Calculadora de Proteína
          </h1>
          <p className="text-black font-bold mb-4">
            Descubra <strong>quantos gramas de proteína</strong> você precisa consumir por dia 
            baseado no seu objetivo, nível de atividade e idade.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-lime-400 px-3 py-1 border-2 border-black font-bold text-sm">🔬 ISSN Guidelines</span>
            <span className="bg-cyan-400 px-3 py-1 border-2 border-black font-bold text-sm">✅ Grátis</span>
            <span className="bg-yellow-400 px-3 py-1 border-2 border-black font-bold text-sm">👤 Personalizado</span>
          </div>
        </div>

        {/* AdSense display ad */}
        {canShowAds ? (
          <AdUnit slot={adSlot!} className="my-6" />
        ) : process.env.NODE_ENV === 'development' ? (
          <div className="my-6 bg-gray-100 border-4 border-dashed border-gray-300 p-4 text-center text-sm font-bold text-gray-600">
            Configure NEXT_PUBLIC_ADSENSE_ID e NEXT_PUBLIC_ADSENSE_SLOT_PROTEINA para exibir o anúncio aqui.
          </div>
        ) : null}

        {/* Calculadora */}
        <CalculadoraProteina />

        {/* Conteúdo SEO */}
        <div className="bg-white border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mt-8">
          <h2 className="text-2xl font-black text-black uppercase mb-4">📚 Quanta Proteína Por Dia?</h2>
          
          <p className="text-black mb-4">
            A quantidade de proteína ideal varia conforme seu <strong>objetivo</strong>, <strong>idade</strong> e 
            <strong> nível de atividade física</strong>. Veja as recomendações baseadas em ciência:
          </p>

          <h3 className="text-xl font-black text-black uppercase mt-6 mb-3">Por Objetivo</h3>
          <table className="w-full border-4 border-black mb-4 text-sm">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2 text-left">Objetivo</th>
                <th className="p-2 text-left">g/kg de peso</th>
                <th className="p-2 text-left">Fonte</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-black bg-gray-50">
                <td className="p-2 font-bold">Manter peso (sedentário)</td>
                <td className="p-2">0.8 - 1.0</td>
                <td className="p-2 text-xs">RDA</td>
              </tr>
              <tr className="border-b-2 border-black bg-lime-50">
                <td className="p-2 font-bold">Ganhar massa</td>
                <td className="p-2">1.6 - 2.2</td>
                <td className="p-2 text-xs">ISSN 2017</td>
              </tr>
              <tr className="border-b-2 border-black bg-cyan-50">
                <td className="p-2 font-bold">Emagrecer</td>
                <td className="p-2">1.6 - 2.4</td>
                <td className="p-2 text-xs">Helms et al.</td>
              </tr>
              <tr className="bg-pink-50">
                <td className="p-2 font-bold">Idosos (60+)</td>
                <td className="p-2">1.0 - 1.5</td>
                <td className="p-2 text-xs">PROT-AGE</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-black text-black uppercase mb-3">Distribuição nas Refeições</h3>
          <div className="bg-yellow-100 border-2 border-black p-4 mb-4">
            <p className="font-bold text-black mb-2">📊 Para melhor síntese proteica:</p>
            <ul className="text-black text-sm space-y-1">
              <li>• <strong>20-40g por refeição</strong> (Schoenfeld 2018)</li>
              <li>• <strong>4-5 refeições</strong> espaçadas ao longo do dia</li>
              <li>• <strong>Proteína pós-treino</strong> dentro de 2 horas (não precisa ser imediato)</li>
            </ul>
          </div>

          <h3 className="text-xl font-black text-black uppercase mb-3">Fontes de Proteína</h3>
          <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
            <div className="bg-pink-100 border-2 border-black p-2">
              <p className="font-bold">🥚 Ovo</p>
              <p>6g por unidade</p>
            </div>
            <div className="bg-orange-100 border-2 border-black p-2">
              <p className="font-bold">🍗 Frango</p>
              <p>31g por 100g</p>
            </div>
            <div className="bg-red-100 border-2 border-black p-2">
              <p className="font-bold">🥩 Carne</p>
              <p>26g por 100g</p>
            </div>
            <div className="bg-purple-100 border-2 border-black p-2">
              <p className="font-bold">🥛 Whey</p>
              <p>~25g por scoop</p>
            </div>
          </div>

          <div className="bg-gray-100 border-2 border-black p-4">
            <p className="text-sm text-gray-700">
              <strong>📚 Referências:</strong><br />
              • Jäger R, et al. ISSN Position Stand: Protein and Exercise. 2017<br />
              • Helms ER, et al. A systematic review of dietary protein during caloric restriction. 2014<br />
              • Schoenfeld BJ. How much protein can the body use in a meal? 2018
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-lime-500 border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mt-8 text-center">
          <h3 className="text-xl font-black text-white uppercase mb-3">
            Precisa de whey protein?
          </h3>
          <p className="text-white font-bold mb-4">
            Nossa avaliação indica se você precisa suplementar proteína.
          </p>
          <Link href="/avaliacao">
            <Button variant="primary" size="lg">
              Fazer Avaliação Gratuita →
            </Button>
          </Link>
        </div>

        {/* Outras calculadoras */}
        <div className="mt-8">
          <h3 className="text-xl font-black text-black uppercase mb-4">🧮 Outras Calculadoras</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link href="/calculadoras/imc" className="bg-pink-400 border-4 border-black p-4 text-center hover:shadow-[4px_4px_0_0_#000] transition-all">
              <span className="text-2xl">⚖️</span>
              <p className="font-bold text-black text-sm mt-1">IMC</p>
            </Link>
            <Link href="/calculadoras/calorias" className="bg-orange-400 border-4 border-black p-4 text-center hover:shadow-[4px_4px_0_0_#000] transition-all">
              <span className="text-2xl">🔥</span>
              <p className="font-bold text-black text-sm mt-1">Calorias</p>
            </Link>
            <Link href="/calculadoras/macros" className="bg-purple-400 border-4 border-black p-4 text-center hover:shadow-[4px_4px_0_0_#000] transition-all">
              <span className="text-2xl">🍽️</span>
              <p className="font-bold text-black text-sm mt-1">Macros</p>
            </Link>
            <Link href="/calculadoras/agua" className="bg-blue-400 border-4 border-black p-4 text-center hover:shadow-[4px_4px_0_0_#000] transition-all">
              <span className="text-2xl">💧</span>
              <p className="font-bold text-black text-sm mt-1">Água</p>
            </Link>
            <Link href="/calculadoras/creatina" className="bg-yellow-400 border-4 border-black p-4 text-center hover:shadow-[4px_4px_0_0_#000] transition-all">
              <span className="text-2xl">💪</span>
              <p className="font-bold text-black text-sm mt-1">Creatina</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
