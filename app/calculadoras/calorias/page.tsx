import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CalculadoraCalorias } from '@/components/calculadoras'
import { AdUnit } from '@/components/layout/AdUnit'

export const metadata: Metadata = {
  title: 'Calculadora de Calorias Online Grátis - TMB e TDEE | Suplementa Já',
  description: 'Calcule quantas calorias você gasta por dia (TMB e TDEE). Descubra suas calorias para emagrecer ou ganhar massa muscular. Fórmula Mifflin-St Jeor.',
  keywords: ['calculadora calorias', 'tmb', 'tdee', 'gasto calorico', 'quantas calorias', 'metabolismo basal', 'calorias para emagrecer', 'calorias para ganhar massa'],
  openGraph: {
    title: 'Calculadora de Calorias - TMB e Gasto Diário',
    description: 'Descubra quantas calorias você gasta por dia usando a fórmula científica Mifflin-St Jeor.',
    type: 'website',
  }
}

export default function CalculadoraCaloriasPage() {
  const adSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_CALORIAS?.trim()
  const canShowAds = Boolean(process.env.NEXT_PUBLIC_ADSENSE_ID && adSlot)

  return (
    <div className="min-h-screen bg-orange-100 py-8">
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
            🔥 Calculadora de Calorias
          </h1>
          <p className="text-black font-bold mb-4">
            Calcule sua <strong>Taxa Metabólica Basal (TMB)</strong> e seu <strong>Gasto Energético Total (TDEE)</strong> 
            para saber quantas calorias você precisa por dia.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-lime-400 px-3 py-1 border-2 border-black font-bold text-sm">✅ Grátis</span>
            <span className="bg-cyan-400 px-3 py-1 border-2 border-black font-bold text-sm">🔬 Fórmula científica</span>
            <span className="bg-yellow-400 px-3 py-1 border-2 border-black font-bold text-sm">⚡ Instantâneo</span>
          </div>
        </div>

        {/* AdSense display ad */}
        {canShowAds ? (
          <AdUnit slot={adSlot!} className="my-6" />
        ) : process.env.NODE_ENV === 'development' ? (
          <div className="my-6 bg-gray-100 border-4 border-dashed border-gray-300 p-4 text-center text-sm font-bold text-gray-600">
            Configure NEXT_PUBLIC_ADSENSE_ID e NEXT_PUBLIC_ADSENSE_SLOT_CALORIAS para exibir o anúncio aqui.
          </div>
        ) : null}

        {/* Calculadora */}
        <CalculadoraCalorias />

        {/* Conteúdo SEO */}
        <div className="bg-white border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mt-8">
          <h2 className="text-2xl font-black text-black uppercase mb-4">📚 O que é TMB e TDEE?</h2>
          
          <div className="space-y-4">
            <div className="bg-orange-100 border-2 border-black p-4">
              <h3 className="font-black text-black">TMB - Taxa Metabólica Basal</h3>
              <p className="text-black text-sm">
                Calorias que seu corpo gasta em repouso absoluto (respirar, digestão, batimentos cardíacos).
              </p>
            </div>

            <div className="bg-lime-100 border-2 border-black p-4">
              <h3 className="font-black text-black">TDEE - Gasto Energético Total</h3>
              <p className="text-black text-sm">
                TMB × Fator de Atividade = Total de calorias que você gasta por dia.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-black text-black uppercase mt-6 mb-3">Fórmula Mifflin-St Jeor</h3>
          <div className="bg-yellow-400 border-2 border-black p-4 mb-4">
            <p className="font-bold text-black text-sm mb-2">Homens:</p>
            <p className="font-mono text-black">TMB = (10 × peso) + (6.25 × altura) - (5 × idade) + 5</p>
            <p className="font-bold text-black text-sm mt-3 mb-2">Mulheres:</p>
            <p className="font-mono text-black">TMB = (10 × peso) + (6.25 × altura) - (5 × idade) - 161</p>
          </div>

          <h3 className="text-xl font-black text-black uppercase mb-3">Fatores de Atividade</h3>
          <table className="w-full border-4 border-black mb-4 text-sm">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2 text-left">Nível</th>
                <th className="p-2 text-left">Fator</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-black"><td className="p-2 font-bold">Sedentário</td><td className="p-2">× 1.2</td></tr>
              <tr className="border-b-2 border-black"><td className="p-2 font-bold">Leve (1-3x/sem)</td><td className="p-2">× 1.375</td></tr>
              <tr className="border-b-2 border-black"><td className="p-2 font-bold">Moderado (3-5x/sem)</td><td className="p-2">× 1.55</td></tr>
              <tr className="border-b-2 border-black"><td className="p-2 font-bold">Intenso (6-7x/sem)</td><td className="p-2">× 1.725</td></tr>
              <tr><td className="p-2 font-bold">Atleta</td><td className="p-2">× 1.9</td></tr>
            </tbody>
          </table>

          <div className="bg-gray-100 border-2 border-black p-4">
            <p className="text-sm text-gray-700">
              <strong>📚 Fonte:</strong> Mifflin MD, et al. &quot;A new predictive equation for resting energy expenditure 
              in healthy individuals.&quot; Am J Clin Nutr. 1990.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-orange-500 border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mt-8 text-center">
          <h3 className="text-xl font-black text-white uppercase mb-3">
            Próximo passo: calcule seus macros!
          </h3>
          <Link href="/calculadoras/macros">
            <Button variant="primary" size="lg">
              Calculadora de Macros →
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
            <Link href="/calculadoras/macros" className="bg-purple-400 border-4 border-black p-4 text-center hover:shadow-[4px_4px_0_0_#000] transition-all">
              <span className="text-2xl">🍽️</span>
              <p className="font-bold text-black text-sm mt-1">Macros</p>
            </Link>
            <Link href="/calculadoras/proteina" className="bg-lime-400 border-4 border-black p-4 text-center hover:shadow-[4px_4px_0_0_#000] transition-all">
              <span className="text-2xl">🥩</span>
              <p className="font-bold text-black text-sm mt-1">Proteína</p>
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
