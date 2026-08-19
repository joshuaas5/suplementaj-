import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CalculadoraMacros } from '@/components/calculadoras'
import { AdUnit } from '@/components/layout/AdUnit'
import { NutrientQuickLinks } from '@/components/content/NutrientQuickLinks'

export const metadata: Metadata = {
  title: 'Calculadora de Macros: Proteína, Carboidratos e Gorduras',
  description: 'CALCULE GRÁTIS seus macros ideais! Descubra quantos gramas de proteína, carboidrato e gordura comer por dia para emagrecer ou ganhar massa.',
  keywords: ['calculadora macros', 'macronutrientes', 'proteina carboidrato gordura', 'dieta macros', 'divisão macros', 'calcular macros'],
  alternates: {
    canonical: '/calculadoras/macros',
  },
  openGraph: {
    title: 'Calculadora de Macros - Proteína, Carbo e Gordura',
    description: 'Descubra quantos gramas de proteína, carboidrato e gordura você precisa por dia.',
    type: 'website',
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como dividir macros para cutting (secar)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para cutting: proteína 2-2.4g/kg, gordura 0.8-1g/kg, carboidrato o restante das calorias. Mantenha déficit de 300-500 kcal. A proteína alta preserva massa muscular enquanto perde gordura."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a divisão ideal de macros para bulking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para bulking: proteína 1.6-2.2g/kg, gordura 0.8-1.2g/kg, carboidrato o restante (geralmente 4-6g/kg). Superávit de 300-500 kcal. Foque em aumentar carboidrato para treinar mais forte."
      }
    },
    {
      "@type": "Question",
      "name": "Preciso contar macros ou só calorias?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para a maioria das pessoas, contar apenas calorias + proteína já resolve. Contar macros é útil para atletas, quem quer ganhar massa magra sem gordura, ou quem tem dificuldade em perder os últimos quilos."
      }
    },
    {
      "@type": "Question",
      "name": "O que acontece se comer pouca gordura na dieta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gordura abaixo de 0.6g/kg pode prejudicar produção hormonal (testosterona cai), absorção de vitaminas lipossolúveis (A, D, E, K), saúde da pele e cabelo, e regulação da temperatura corporal."
      }
    },
    {
      "@type": "Question",
      "name": "Posso trocar carboidrato por gordura ou vice-versa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Em parte, sim. Proteína e gordura são essenciais (não pode reduzir muito). Carboidrato é o macro flexível: se precisa de mais energia para treinar, aumente carbo; se prefere dieta low-carb, aumente gordura, mas mantenha pelo menos 0.8g/kg de gordura."
      }
    }
  ]
}

export default function CalculadoraMacrosPage() {
  const adSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_MACROS?.trim()
  const canShowAds = Boolean(process.env.NEXT_PUBLIC_ADSENSE_ID && adSlot)

  return (
    <div className="min-h-screen bg-yellow-100 py-8">
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
            🍽️ Quais São Meus Macros Ideais?
          </h1>
          <p className="text-black font-bold mb-4">
            Descubra a <strong>divisão ideal de proteína, carboidrato e gordura</strong> para seu objetivo:{' '}
            emagrecer, ganhar massa ou manter peso. Em gramas por dia!
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-pink-400 px-3 py-1 border-2 border-black font-bold text-sm">🥩 Proteína</span>
            <span className="bg-orange-400 px-3 py-1 border-2 border-black font-bold text-sm">🍚 Carboidrato</span>
            <span className="bg-yellow-400 px-3 py-1 border-2 border-black font-bold text-sm">🧈 Gordura</span>
          </div>
        </div>

        {/* AdSense display ad */}
        {canShowAds ? (
          <AdUnit slot={adSlot!} className="my-6" />
        ) : process.env.NODE_ENV === 'development' ? (
          <div className="my-6 bg-gray-100 border-4 border-dashed border-gray-300 p-4 text-center text-sm font-bold text-gray-600">
            Configure NEXT_PUBLIC_ADSENSE_ID e NEXT_PUBLIC_ADSENSE_SLOT_MACROS para exibir o anúncio aqui.
          </div>
        ) : null}

        {/* Calculadora */}
        <CalculadoraMacros />

        {/* Conteúdo SEO */}
        <div className="bg-white border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mt-8">
          <h2 className="text-2xl font-black text-black uppercase mb-4">📚 O Que São Macronutrientes?</h2>

          <p className="text-black mb-4">
            Os <strong>macronutrientes</strong> são os 3 nutrientes que fornecem energia (calorias):
            <strong>Proteína, Carboidrato e Gordura</strong>. A proporção entre eles afeta diretamente
            sua composição corporal e desempenho.
          </p>

          <div className="grid gap-4 mb-6">
            <div className="bg-pink-100 border-2 border-black p-4">
              <h3 className="font-black text-black">🥩 PROTEÍNA (4 kcal/g)</h3>
              <p className="text-black text-sm mt-1">
                Constrói e repara músculos. Essencial para quem treina.
                Mantém a saciedade. <strong>1.6-2.2g/kg</strong> para hipertrofia.
              </p>
              <p className="text-xs text-gray-600 mt-2">Fontes: frango, carne, peixe, ovos, whey, leguminosas</p>
            </div>
            <div className="bg-orange-100 border-2 border-black p-4">
              <h3 className="font-black text-black">🍚 CARBOIDRATO (4 kcal/g)</h3>
              <p className="text-black text-sm mt-1">
                Principal fonte de energia para treinos intensos.
                Recuperação muscular pós-treino. <strong>3-7g/kg</strong> dependendo da atividade.
              </p>
              <p className="text-xs text-gray-600 mt-2">Fontes: arroz, batata, aveia, frutas, pão integral</p>
            </div>
            <div className="bg-yellow-100 border-2 border-black p-4">
              <h3 className="font-black text-black">🧈 GORDURA (9 kcal/g)</h3>
              <p className="text-black text-sm mt-1">
                Produção hormonal (testosterona!). Absorção de vitaminas.
                <strong>Mínimo 0.5g/kg</strong> - nunca zerar a gordura!
              </p>
              <p className="text-xs text-gray-600 mt-2">Fontes: azeite, castanhas, abacate, ovos, peixes gordos</p>
            </div>
          </div>

          <h3 className="text-xl font-black text-black uppercase mb-3">Divisão Por Objetivo</h3>
          <table className="w-full border-4 border-black mb-4">
            <thead className="bg-yellow-400">
              <tr>
                <th className="p-2 border-r-2 border-black font-black text-left">Objetivo</th>
                <th className="p-2 border-r-2 border-black font-black text-center">Proteína</th>
                <th className="p-2 border-r-2 border-black font-black text-center">Carbo</th>
                <th className="p-2 font-black text-center">Gordura</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t-2 border-black bg-green-50">
                <td className="p-2 border-r-2 border-black font-bold">Ganhar Massa</td>
                <td className="p-2 border-r-2 border-black text-center">25-30%</td>
                <td className="p-2 border-r-2 border-black text-center">45-55%</td>
                <td className="p-2 text-center">20-25%</td>
              </tr>
              <tr className="border-t-2 border-black bg-orange-50">
                <td className="p-2 border-r-2 border-black font-bold">Emagrecer</td>
                <td className="p-2 border-r-2 border-black text-center">30-40%</td>
                <td className="p-2 border-r-2 border-black text-center">30-40%</td>
                <td className="p-2 text-center">25-30%</td>
              </tr>
              <tr className="border-t-2 border-black bg-blue-50">
                <td className="p-2 border-r-2 border-black font-bold">Manter</td>
                <td className="p-2 border-r-2 border-black text-center">25-30%</td>
                <td className="p-2 border-r-2 border-black text-center">40-50%</td>
                <td className="p-2 text-center">25-30%</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-black text-black uppercase mb-3">Erros Comuns</h3>
          <div className="space-y-2 mb-4">
            <div className="bg-red-100 border-2 border-black p-3">
              <p className="text-sm"><strong>❌ Cortar carboidrato totalmente:</strong> Prejudica o treino, humor e sono</p>
            </div>
            <div className="bg-red-100 border-2 border-black p-3">
              <p className="text-sm"><strong>❌ Comer pouca gordura:</strong> Derruba hormônios como testosterona</p>
            </div>
            <div className="bg-red-100 border-2 border-black p-3">
              <p className="text-sm"><strong>❌ Exagerar na proteína:</strong> Acima de 2.2g/kg não traz mais benefícios</p>
            </div>
            <div className="bg-red-100 border-2 border-black p-3">
              <p className="text-sm"><strong>❌ Focar só em macros:</strong> Micronutrientes (vitaminas, minerais) também importam!</p>
            </div>
          </div>

          <h3 className="text-xl font-black text-black uppercase mb-3">Dicas Práticas</h3>
          <div className="bg-lime-100 border-2 border-black p-4 mb-4">
            <ul className="space-y-2 text-sm">
              <li><strong>📊 Pesagem:</strong> Uma balança de cozinha ajuda muito no começo</li>
              <li><strong>📱 Apps:</strong> MyFitnessPal ou FatSecret para rastrear</li>
              <li><strong>🔄 Flexibilidade:</strong> Varie ±5% entre os dias</li>
              <li><strong>⏰ Timing:</strong> Carbo antes/após treino, proteína distribuída ao dia</li>
              <li><strong>🍽️ Prioridade:</strong> Proteína &gt; Gordura &gt; Carboidrato (ajuste o carbo conforme sobrar)</li>
            </ul>
          </div>

          <div className="bg-gray-100 border-2 border-black p-4">
            <p className="text-sm text-gray-700">
              <strong>📚 Fontes:</strong><br />
              • Morton RW, et al. A systematic review of protein intake. 2018<br />
              • ISSN Position Stand: Diets and body composition. 2017<br />
              • Helms ER, et al. Evidence-based recommendations for contest preparation. 2014
            </p>
          </div>

          <h3 className="text-xl font-black text-black uppercase mt-6 mb-3">❓ Perguntas Frequentes</h3>

          <div className="space-y-4">
            <div className="bg-purple-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">Macros são mais importantes que calorias?</h4>
              <p className="text-black text-sm">
                <strong>Não.</strong> Calorias determinam se você emagrece/ganha peso. Macros determinam COMO você perde (gordura ou músculo).
                Ordem de importância: 1º Calorias, 2º Proteína, 3º Gordura, 4º Carboidrato.
                Exemplo: 2.000 kcal com 40% proteína é melhor que 1.800 kcal com 15% proteína (você perde músculo).
              </p>
            </div>

            <div className="bg-orange-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">Low carb ou high carb para emagrecer?</h4>
              <p className="text-black text-sm">
                <strong>Tanto faz - o que importa é o déficit calórico.</strong> Low carb funciona porque tira comidas calóricas (pão, massa, doce).
                Se você treina pesado, high carb é melhor (mais energia). Se é sedentário, low carb facilita.
                O importante: manter a proteína alta (2g/kg) e o déficit calórico (300-500 kcal).
              </p>
            </div>

            <div className="bg-yellow-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">Como contar macros na prática?</h4>
              <p className="text-black text-sm">
                Use apps: <strong>MyFitnessPal</strong> (grátis), FatSecret, Cronometer.
                Passos: 1) Pese a comida crua, 2) Adicione no app, 3) Veja se bateu a meta.
                Dica: Não precisa ser perfeito. ±10g de proteína ou carbo não faz diferença.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-orange-500 border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mt-8 text-center">
          <h3 className="text-xl font-black text-black uppercase mb-3">
            Precisa saber suas calorias primeiro?
          </h3>
          <p className="text-black font-bold mb-4">
            Calcule seu gasto calórico diário (TMB) antes de dividir os macros!
          </p>
          <Link href="/calculadoras/calorias">
            <Button variant="primary" size="lg">
              Calculadora de Calorias →
            </Button>
          </Link>
        </div>

        <NutrientQuickLinks
          items={[
            { slug: 'proteina', title: 'Proteina', description: 'A base do calculo de macros para hipertrofia.' },
            { slug: 'caseina', title: 'Caseina', description: 'Proteina de absorcao lenta para rotina alimentar.' },
            { slug: 'creatina', title: 'Creatina', description: 'Complementa rotina de treino e ganho de forca.' },
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
            <Link href="/calculadoras/creatina" className="bg-cyan-400 border-4 border-black p-4 text-center hover:shadow-[4px_4px_0_0_#000] transition-all">
              <span className="text-2xl">💪</span>
              <p className="font-bold text-black text-sm mt-1">Creatina</p>
            </Link>
            <Link href="/calculadoras/agua" className="bg-blue-400 border-4 border-black p-4 text-center hover:shadow-[4px_4px_0_0_#000] transition-all">
              <span className="text-2xl">💧</span>
              <p className="font-bold text-black text-sm mt-1">Água</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
