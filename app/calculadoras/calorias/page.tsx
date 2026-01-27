import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CalculadoraCalorias } from '@/components/calculadoras'
import { AdUnit } from '@/components/layout/AdUnit'

export const metadata: Metadata = {
  title: 'Calculadora de Calorias Online Grátis - TMB e TDEE 2026 | Suplementa Já',
  description: 'Calcule quantas calorias você gasta por dia (TMB e TDEE). Descubra suas calorias para emagrecer ou ganhar massa muscular. Fórmula Mifflin-St Jeor atualizada 2026.',
  keywords: ['calculadora calorias', 'tmb', 'tdee', 'gasto calorico', 'quantas calorias', 'metabolismo basal', 'calorias para emagrecer', 'calorias para ganhar massa', 'deficit calorico', 'calcular tdee'],
  openGraph: {
    title: 'Calculadora de Calorias - TMB e Gasto Diário 2026',
    description: 'Descubra quantas calorias você gasta por dia usando a fórmula científica Mifflin-St Jeor. Grátis e instantâneo.',
    type: 'website',
  }
}

// FAQ Schema para rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quantas calorias devo comer para emagrecer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para emagrecer de forma saudável, consuma 300-500 calorias a menos que seu TDEE (gasto diário total). Exemplo: Se seu TDEE é 2.000 kcal, coma 1.500-1.700 kcal/dia para perder 0,5-1kg por semana. Déficits maiores que 500 kcal podem causar perda de massa muscular."
      }
    },
    {
      "@type": "Question",
      "name": "Quantas calorias para ganhar massa muscular?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para hipertrofia, consuma 300-500 calorias a mais que seu TDEE, combinado com treino de força e 1,6-2g de proteína por kg de peso. Exemplo: TDEE de 2.500 kcal = coma 2.800-3.000 kcal/dia. Ganho saudável: 0,5-1kg por mês."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a diferença entre TMB e TDEE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TMB (Taxa Metabólica Basal) são as calorias que seu corpo gasta em repouso absoluto. TDEE (Gasto Energético Total Diário) é a TMB multiplicada pelo seu fator de atividade, representando o total de calorias que você realmente gasta por dia."
      }
    },
    {
      "@type": "Question",
      "name": "Por que minha calculadora de calorias dá errado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As calculadoras usam estimativas baseadas em médias populacionais. Seu metabolismo individual pode variar 10-15%. Use o resultado como ponto de partida, ajuste após 2-3 semanas observando seu peso. Se não emagrecer, reduza 100-200 kcal."
      }
    },
    {
      "@type": "Question",
      "name": "Devo contar calorias ou macros?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Comece contando apenas calorias (mais simples). Para 80% das pessoas, calorias + proteína alta já resolve. Evoluir para macros (proteína, carboidrato, gordura) é útil para atletas, quem quer ganhar massa magra, ou tem dificuldade em perder gordura."
      }
    }
  ]
}

export default function CalculadoraCaloriasPage() {
  const adSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_CALORIAS?.trim()
  const canShowAds = Boolean(process.env.NEXT_PUBLIC_ADSENSE_ID && adSlot)

  return (
    <div className="min-h-screen bg-orange-100 py-8">
      {/* FAQ Schema JSON-LD */}
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
            🔥 Gasto Calórico Diário (TDEE) e Manutenção
          </h1>
          <p className="text-black font-bold mb-4">
            Use nossa <strong>calculadora de calorias online grátis</strong> para descobrir seu <strong>gasto calórico diário</strong> exato.
            Saiba <strong>quantas calorias devo comer por dia</strong> para emagrecer, suas <strong>calorias de manutenção</strong> ou para ganhar massa muscular.
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

          <h3 className="text-xl font-black text-black uppercase mt-6 mb-3">❓ Perguntas Frequentes</h3>

          <div className="space-y-4">
            <div className="bg-lime-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">Quantas calorias para emagrecer?</h4>
              <p className="text-black text-sm">
                Para emagrecer de forma saudável, consuma <strong>300-500 calorias a menos</strong> que seu TDEE.
                Exemplo: Se seu TDEE é 2.000 kcal, coma 1.500-1.700 kcal/dia. Você vai perder 0,5-1kg por semana.
                Evite déficits maiores que 500 kcal para não perder massa muscular.
              </p>
            </div>

            <div className="bg-orange-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">Quantas calorias para ganhar massa?</h4>
              <p className="text-black text-sm">
                Para hipertrofia, coma <strong>300-500 calorias a mais</strong> que seu TDEE + treine pesado.
                Exemplo: TDEE de 2.500 kcal = coma 2.800-3.000 kcal/dia. Combine com 1,6-2g de proteína por kg.
                Ganho ideal: 0,5-1kg por mês (mais que isso é gordura).
              </p>
            </div>

            <div className="bg-yellow-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">O que é melhor: contar calorias ou macros?</h4>
              <p className="text-black text-sm">
                <strong>Comece contando calorias</strong> (mais simples). Depois evolua para macros (proteína, carbo, gordura).
                Macros importam mais para: atletas, quem quer ganhar massa magra, ou tem dificuldade de perder gordura.
                Para 80% das pessoas, calorias + proteína alta já resolve.
              </p>
            </div>

            <div className="bg-cyan-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">Posso usar só a TMB?</h4>
              <p className="text-black text-sm">
                <strong>Não.</strong> A TMB é o gasto em repouso absoluto (como se você dormisse 24h).
                Na prática, você precisa do <strong>TDEE</strong> (TMB × fator de atividade).
                Mesmo sedentários gastam 20-30% a mais que a TMB caminhando, trabalhando, etc.
              </p>
            </div>
          </div>
        </div>

        {/* Exemplos Práticos */}
        <div className="bg-lime-400 border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mt-8">
          <h3 className="text-xl font-black text-black uppercase mb-4">📊 Exemplos Práticos de Calorias</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black text-sm bg-white">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-2 text-left">Perfil</th>
                  <th className="p-2 text-left">TDEE</th>
                  <th className="p-2 text-left">Emagrecer</th>
                  <th className="p-2 text-left">Ganhar Massa</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-black">
                  <td className="p-2 font-bold">Mulher 60kg sedentária</td>
                  <td className="p-2">~1.500 kcal</td>
                  <td className="p-2 text-red-600 font-bold">1.200 kcal</td>
                  <td className="p-2 text-green-600 font-bold">1.800 kcal</td>
                </tr>
                <tr className="border-b-2 border-black bg-gray-50">
                  <td className="p-2 font-bold">Mulher 65kg moderada</td>
                  <td className="p-2">~1.900 kcal</td>
                  <td className="p-2 text-red-600 font-bold">1.500 kcal</td>
                  <td className="p-2 text-green-600 font-bold">2.200 kcal</td>
                </tr>
                <tr className="border-b-2 border-black">
                  <td className="p-2 font-bold">Homem 75kg sedentário</td>
                  <td className="p-2">~2.000 kcal</td>
                  <td className="p-2 text-red-600 font-bold">1.600 kcal</td>
                  <td className="p-2 text-green-600 font-bold">2.400 kcal</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 font-bold">Homem 80kg intenso</td>
                  <td className="p-2">~2.800 kcal</td>
                  <td className="p-2 text-red-600 font-bold">2.300 kcal</td>
                  <td className="p-2 text-green-600 font-bold">3.200 kcal</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-black text-sm mt-3 font-bold">
            ⚠️ Valores aproximados para idade ~30 anos. Use a calculadora acima para seu valor exato.
          </p>
        </div>

        {/* Artigos Relacionados */}
        <div className="bg-white border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mt-8">
          <h3 className="text-xl font-black text-black uppercase mb-4">📖 Aprenda Mais Sobre Calorias</h3>
          <div className="grid gap-3">
            <Link href="/blog/guia-completo-creatina-2026" className="flex items-center gap-3 bg-cyan-100 border-2 border-black p-3 hover:bg-cyan-200 transition-colors">
              <span className="text-2xl">💪</span>
              <div>
                <p className="font-black text-black">Creatina: O Suplemento Mais Estudado</p>
                <p className="text-sm text-gray-700">Melhora performance e pode ajudar no gasto calórico</p>
              </div>
            </Link>
            <Link href="/blog/whey-isolado-vs-concentrado" className="flex items-center gap-3 bg-orange-100 border-2 border-black p-3 hover:bg-orange-200 transition-colors">
              <span className="text-2xl">🥤</span>
              <div>
                <p className="font-black text-black">Whey Isolado vs Concentrado</p>
                <p className="text-sm text-gray-700">Proteína ajuda a preservar massa muscular no déficit</p>
              </div>
            </Link>
            <Link href="/calculadoras/macros" className="flex items-center gap-3 bg-lime-100 border-2 border-black p-3 hover:bg-lime-200 transition-colors">
              <span className="text-2xl">🍽️</span>
              <div>
                <p className="font-black text-black">Calculadora de Macros</p>
                <p className="text-sm text-gray-700">Distribua suas calorias em proteína, carbo e gordura</p>
              </div>
            </Link>
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
