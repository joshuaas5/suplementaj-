import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CalculadoraAgua } from '@/components/calculadoras'
import { AdUnit } from '@/components/layout/AdUnit'
import { NutrientQuickLinks } from '@/components/content/NutrientQuickLinks'

export const metadata: Metadata = {
  title: 'Calculadora de Água Grátis 2026 - Quantos Litros Por Dia? | Suplementa Já',
  description: 'CALCULE GRÁTIS quantos litros de água você deve beber por dia! Baseado no seu peso e atividade física. Resultado instantâneo.',
  keywords: ['calculadora agua', 'quantos litros agua', 'hidratação', 'agua por dia', 'beber agua', 'IOM agua', 'hidratação diária'],
  alternates: {
    canonical: '/calculadoras/agua',
  },
  openGraph: {
    title: 'Calculadora de Água - Quantos Litros Por Dia?',
    description: 'Descubra sua necessidade hídrica diária baseada em estudos do Institute of Medicine.',
    type: 'website',
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quantos litros de água devo beber por dia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A recomendação geral é de 30-35ml por kg de peso corporal. Por exemplo, uma pessoa de 70kg precisa de 2,1 a 2,45 litros por dia. Quem pratica exercício precisa de mais, cerca de 35-40ml por kg."
      }
    },
    {
      "@type": "Question",
      "name": "Beber muita água faz mal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, em excesso pode causar hiponatremia (sódio baixo no sangue), que é perigoso. Não beba mais de 1 litro por hora. Distribua ao longo do dia e respeite a sede."
      }
    },
    {
      "@type": "Question",
      "name": "Água com gás conta como hidratação?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim! Água com gás hidrata tanto quanto a natural. Café e chás também contam, embora em menor proporção. A exceção é álcool, que desidrata."
      }
    },
    {
      "@type": "Question",
      "name": "Como saber se estou desidratado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sinais de desidratação: urina escura (deveria ser amarelo claro), sede intensa, boca seca, dor de cabeça, cansaço e pele seca. Se sua urina está clara ou amarelo bem claro, você está bem hidratado."
      }
    },
    {
      "@type": "Question",
      "name": "Preciso beber água durante o treino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Beba 200-300ml 30 minutos antes do treino, e 150-250ml a cada 15-20 minutos durante. Para treinos acima de 1 hora, considere uma bebida isotônica para repor eletrólitos."
      }
    }
  ]
}

export default function CalculadoraAguaPage() {
  const adSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_AGUA?.trim()
  const canShowAds = Boolean(process.env.NEXT_PUBLIC_ADSENSE_ID && adSlot)

  return (
    <div className="min-h-screen bg-blue-100 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
            💧 Quanta Água Devo Beber?
          </h1>
          <p className="text-black font-bold mb-4">
            Descubra <strong>quantos litros de água</strong> você deve beber diariamente{' '}
            baseado no seu peso, atividade física e clima. Hidrátese corretamente!
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

          <h3 className="text-xl font-black text-black uppercase mt-6 mb-3">❓ Perguntas Frequentes</h3>

          <div className="space-y-4">
            <div className="bg-blue-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">Beber muita água faz mal?</h4>
              <p className="text-black text-sm">
                <strong>Só em casos extremos</strong> (intoxicação por água/hiponatremia). Você precisaria beber 6-7 litros em poucas horas.
                Para pessoas normais, o máximo seria uns 4-5 litros/dia (se você treina pesado em clima quente).
                Sinal de alerta: urina completamente transparente o dia todo = pode estar exagerando.
              </p>
            </div>

            <div className="bg-cyan-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">Chá, café e refrigerante contam como água?</h4>
              <p className="text-black text-sm">
                <strong>Sim, mas com ressalvas.</strong> Chá e café (sem açúcar) contam. Refrigerante tecnicamente hidrata, mas tem muito açúcar.
                O ideal: 70-80% de água pura, 20-30% pode ser chás, café, água de coco.
                Evite: refrigerantes, sucos industrializados (muito açúcar), bebidas alcoólicas (desidratam).
              </p>
            </div>

            <div className="bg-lime-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">Preciso beber 2 litros mesmo se não tiver sede?</h4>
              <p className="text-black text-sm">
                <strong>Não force.</strong> A sede é um mecanismo eficiente. O problema é que muita gente confunde sede com fome.
                Dica prática: Olhe a cor da urina. Amarelo claro = hidratado. Amarelo escuro = beba mais.
                Quem treina ou vive em clima quente precisa de mais (aí sim, programe-se para beber mesmo sem sede).
              </p>
            </div>
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

        <NutrientQuickLinks
          items={[
            { slug: 'potassio', title: 'Potassio', description: 'Equilibrio hidrico, pressao e funcao muscular.' },
            { slug: 'magnesio', title: 'Magnesio', description: 'Contracao muscular, relaxamento e sono.' },
            { slug: 'creatina', title: 'Creatina', description: 'Ajuda performance e depende de boa hidratacao.' },
          ]}
        />

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
