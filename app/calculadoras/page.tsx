import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calculator, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { AdUnit } from '@/components/layout/AdUnit'

export const metadata: Metadata = {
  title: 'Calculadoras de Saúde e Suplementação - Suplementa Já',
  description: 'Calculadoras gratuitas: IMC, calorias (TMB), macros, creatina, proteína e hidratação. Ferramentas baseadas em ciência para otimizar sua saúde.',
  keywords: ['calculadora imc', 'calculadora calorias', 'calculadora macros', 'calculadora creatina', 'calculadora proteína', 'tmb', 'gasto calórico'],
}

const calculadoras = [
  {
    id: 'imc',
    emoji: '⚖️',
    title: 'Calculadora de IMC',
    description: 'Descubra seu Índice de Massa Corporal e veja se está no peso ideal.',
    color: 'bg-pink-400',
    href: '/calculadoras/imc',
    tags: ['Peso Ideal', 'Obesidade', 'Saúde']
  },
  {
    id: 'calorias',
    emoji: '🔥',
    title: 'Calculadora de Calorias',
    description: 'Calcule sua Taxa Metabólica Basal (TMB) e gasto calórico diário.',
    color: 'bg-orange-400',
    href: '/calculadoras/calorias',
    tags: ['TMB', 'TDEE', 'Emagrecimento']
  },
  {
    id: 'macros',
    emoji: '🍽️',
    title: 'Calculadora de Macros',
    description: 'Proteína, carboidrato e gordura: quanto você precisa por dia?',
    color: 'bg-purple-400',
    href: '/calculadoras/macros',
    tags: ['Proteína', 'Carbo', 'Gordura']
  },
  {
    id: 'proteina',
    emoji: '🥩',
    title: 'Calculadora de Proteína',
    description: 'Quanto de proteína você precisa para seu objetivo? Baseado no ISSN.',
    color: 'bg-lime-400',
    href: '/calculadoras/proteina',
    tags: ['Hipertrofia', 'Cutting', 'Manutenção']
  },
  {
    id: 'creatina',
    emoji: '💪',
    title: 'Calculadora de Creatina',
    description: 'Dose ideal de creatina para seu peso. Saturação ou manutenção?',
    color: 'bg-cyan-400',
    href: '/calculadoras/creatina',
    tags: ['Saturação', 'Manutenção', '3-5g']
  },
  {
    id: 'agua',
    emoji: '💧',
    title: 'Calculadora de Água',
    description: 'Quantos litros de água você deve beber por dia? Baseado no IOM.',
    color: 'bg-blue-400',
    href: '/calculadoras/agua',
    tags: ['Hidratação', 'Litros', 'Copos']
  },
]

export default function CalculadorasPage() {
  const adSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_CALCULADORAS?.trim()
  const canShowAds = Boolean(process.env.NEXT_PUBLIC_ADSENSE_ID && adSlot)

  return (
    <div className="min-h-screen bg-yellow-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Voltar */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Início
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-400 border-4 border-black shadow-[8px_8px_0_0_#000] px-8 py-4 mb-6 rotate-1">
            <div className="flex items-center justify-center gap-3">
              <Calculator className="w-10 h-10 text-black" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase">
                Calculadoras
              </h1>
            </div>
          </div>
          <div className="bg-white border-4 border-black shadow-[6px_6px_0_0_#000] px-6 py-6 max-w-3xl mx-auto">
            <p className="text-lg text-black font-bold leading-relaxed">
              Ferramentas <span className="bg-cyan-400 px-2 py-1">gratuitas e baseadas em ciência</span> para 
              calcular suas necessidades. Clique em uma calculadora para usar!
            </p>
          </div>
        </div>

        {/* AdSense display ad */}
        {canShowAds ? (
          <AdUnit slot={adSlot!} className="my-8" />
        ) : process.env.NODE_ENV === 'development' ? (
          <div className="my-8 bg-gray-100 border-4 border-dashed border-gray-300 p-4 text-center text-sm font-bold text-gray-600">
            Configure NEXT_PUBLIC_ADSENSE_ID e NEXT_PUBLIC_ADSENSE_SLOT_CALCULADORAS para exibir o anúncio aqui.
          </div>
        ) : null}

        {/* Grid de Calculadoras */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {calculadoras.map((calc) => (
            <Link key={calc.id} href={calc.href}>
              <div className={`${calc.color} border-4 border-black shadow-[6px_6px_0_0_#000] p-6 h-full hover:shadow-[8px_8px_0_0_#000] hover:-translate-y-1 transition-all cursor-pointer group`}>
                <div className="text-5xl mb-4">{calc.emoji}</div>
                <h2 className="text-xl font-black text-black uppercase mb-2">{calc.title}</h2>
                <p className="text-black font-bold text-sm mb-4">{calc.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {calc.tags.map((tag) => (
                    <span key={tag} className="bg-white/80 px-2 py-1 text-xs font-bold text-black border-2 border-black">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-black font-black uppercase text-sm group-hover:gap-3 transition-all">
                  Usar Calculadora <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Final */}
        <div className="bg-pink-500 border-4 border-black shadow-[8px_8px_0_0_#000] p-8 text-center">
          <div className="inline-block bg-black px-6 py-3 mb-4 -rotate-1">
            <h3 className="text-2xl font-black text-pink-500 uppercase">
              Quer uma Análise Completa?
            </h3>
          </div>
          <p className="text-white font-bold mb-6 text-lg max-w-2xl mx-auto">
            Nossa avaliação personalizada analisa seu perfil completo e recomenda 
            os suplementos ideais para você, com dosagens específicas.
          </p>
          <Link href="/avaliacao">
            <Button variant="primary" size="lg" className="text-xl px-10 py-6">
              Fazer Avaliação Gratuita →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
