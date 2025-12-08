import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CalculadoraAgua } from '@/components/calculadoras'
import { AdUnit } from '@/components/layout/AdUnit'

export const metadata: Metadata = {
  title: 'Calculadora de Água - Quantos Litros Beber Por Dia? | Suplementa Já',
  description: 'Calcule quantos litros de água você deve beber por dia. Baseado nas recomendações do IOM. Considera sexo, peso, atividade física e clima.',
  keywords: ['calculadora agua', 'quantos litros agua', 'hidratação', 'agua por dia', 'beber agua', 'IOM agua', 'hidratação diária'],
  openGraph: {
    title: 'Calculadora de Água - Quantos Litros Por Dia?',
    description: 'Descubra sua necessidade hídrica diária baseada em estudos do Institute of Medicine.',
    type: 'website',
  }
}

export default function CalculadoraAguaPage() {
  const adSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_AGUA?.trim()
  const canShowAds = Boolean(process.env.NEXT_PUBLIC_ADSENSE_ID && adSlot)

  return (
    <div className="min-h-screen bg-blue-100 py-8">
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
            💧 Calculadora de Água
          </h1>
          <p className="text-black font-bold mb-4">
            Descubra <strong>quantos litros de água</strong> você deve beber diariamente 
            baseado no seu sexo, peso, atividade física e clima.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-400 px-3 py-1 border-2 border-black font-bold text-sm">🔬 IOM Guidelines</span>
            <span className="bg-lime-400 px-3 py-1 border-2 border-black font-bold text-sm">✅ Personalizado</span>
            <span className="bg-yellow-400 px-3 py-1 border-2 border-black font-bold text-sm">⚡ Instantâneo</span>
          </div>
        </div>

        {/* AdSense display ad */}
        {canShowAds ? (
          <AdUnit slot={adSlot!} className="my-6" />
        ) : process.env.NODE_ENV === 'development' ? (
          <div className="my-6 bg-gray-100 border-4 border-dashed border-gray-300 p-4 text-center text-sm font-bold text-gray-600">
            Configure NEXT_PUBLIC_ADSENSE_ID e NEXT_PUBLIC_ADSENSE_SLOT_AGUA para exibir o anúncio aqui.
          </div>
        ) : null}

        {/* Calculadora */}
        <CalculadoraAgua />

        {/* Conteúdo SEO */}
        <div className="bg-white border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mt-8">
          <h2 className="text-2xl font-black text-black uppercase mb-4">📚 Quanta Água Beber Por Dia?</h2>
          
          <p className="text-black mb-4">
            A necessidade de água varia entre <strong>homens e mulheres</strong> devido a diferenças 
            em composição corporal e metabolismo. Veja as recomendações oficiais:
          </p>

          <h3 className="text-xl font-black text-black uppercase mt-6 mb-3">Recomendações do IOM</h3>
          <table className="w-full border-4 border-black mb-4 text-sm">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2 text-left">Sexo</th>
                <th className="p-2 text-left">Água Total/Dia</th>
                <th className="p-2 text-left">Apenas Líquidos</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-black bg-blue-50">
                <td className="p-2 font-bold">♂️ Homens</td>
                <td className="p-2">3.7 litros</td>
                <td className="p-2">~3.0 litros</td>
              </tr>
              <tr className="bg-pink-50">
                <td className="p-2 font-bold">♀️ Mulheres</td>
                <td className="p-2">2.7 litros</td>
                <td className="p-2">~2.2 litros</td>
              </tr>
            </tbody>
          </table>

          <div className="bg-yellow-100 border-2 border-black p-4 mb-4">
            <p className="font-bold text-black mb-2">⚠️ Quando aumentar a ingestão:</p>
            <ul className="text-black text-sm space-y-1">
              <li>• <strong>Exercício intenso:</strong> +500ml a 1L por hora de treino</li>
              <li>• <strong>Clima quente:</strong> +500ml a 1L por dia</li>
              <li>• <strong>Uso de creatina:</strong> +500ml por dia</li>
              <li>• <strong>Dieta alta em proteína:</strong> +300ml por dia</li>
              <li>• <strong>Gestação:</strong> +300ml por dia</li>
              <li>• <strong>Amamentação:</strong> +700ml por dia</li>
            </ul>
          </div>

          <h3 className="text-xl font-black text-black uppercase mb-3">Por que Homens Precisam de Mais?</h3>
          <div className="bg-blue-100 border-2 border-black p-4 mb-4">
            <ul className="text-black text-sm space-y-2">
              <li>• <strong>Maior massa muscular:</strong> Músculos são 75% água</li>
              <li>• <strong>Taxa metabólica maior:</strong> Mais processos = mais água</li>
              <li>• <strong>Maior volume sanguíneo:</strong> Precisa mais hidratação</li>
              <li>• <strong>Maior sudorese:</strong> Perdem mais líquido em atividades</li>
            </ul>
          </div>

          <h3 className="text-xl font-black text-black uppercase mb-3">Sinais de Desidratação</h3>
          <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
            <div className="bg-yellow-100 border-2 border-black p-2">
              <p className="font-bold">🟡 Urina amarela escura</p>
            </div>
            <div className="bg-orange-100 border-2 border-black p-2">
              <p className="font-bold">😴 Fadiga e cansaço</p>
            </div>
            <div className="bg-red-100 border-2 border-black p-2">
              <p className="font-bold">🤕 Dor de cabeça</p>
            </div>
            <div className="bg-pink-100 border-2 border-black p-2">
              <p className="font-bold">🏜️ Boca seca</p>
            </div>
          </div>

          <div className="bg-gray-100 border-2 border-black p-4">
            <p className="text-sm text-gray-700">
              <strong>📚 Fonte:</strong> Institute of Medicine. Dietary Reference Intakes for Water, 
              Potassium, Sodium, Chloride, and Sulfate. National Academies Press, 2005.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-500 border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mt-8 text-center">
          <h3 className="text-xl font-black text-white uppercase mb-3">
            Dica: Quem treina precisa de mais água!
          </h3>
          <p className="text-white font-bold mb-4">
            Calcule também sua creatina - ela aumenta a retenção de água muscular.
          </p>
          <Link href="/calculadoras/creatina">
            <Button variant="primary" size="lg">
              Calculadora de Creatina →
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
            <Link href="/calculadoras/proteina" className="bg-lime-400 border-4 border-black p-4 text-center hover:shadow-[4px_4px_0_0_#000] transition-all">
              <span className="text-2xl">🥩</span>
              <p className="font-bold text-black text-sm mt-1">Proteína</p>
            </Link>
            <Link href="/calculadoras/macros" className="bg-purple-400 border-4 border-black p-4 text-center hover:shadow-[4px_4px_0_0_#000] transition-all">
              <span className="text-2xl">🍽️</span>
              <p className="font-bold text-black text-sm mt-1">Macros</p>
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
