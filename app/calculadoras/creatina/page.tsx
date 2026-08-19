import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CalculadoraCreatina } from '@/components/calculadoras'
import { AdUnit } from '@/components/layout/AdUnit'
import { NutrientQuickLinks } from '@/components/content/NutrientQuickLinks'

export const metadata: Metadata = {
  title: 'Calculadora de Creatina por Peso: Dose Diária',
  description: 'CALCULE GRÁTIS sua dose ideal de creatina! Quanto tomar por kg de peso? Precisa de fase de carga? Descubra em segundos.',
  keywords: ['calculadora creatina', 'dose creatina', 'quantos gramas creatina', 'creatina por kg', 'saturação creatina', 'creatina monohidratada'],
  alternates: {
    canonical: '/calculadoras/creatina',
  },
  openGraph: {
    title: 'Calculadora de Creatina - Dose Ideal Por Peso',
    description: 'Descubra quantos gramas de creatina você deve tomar por dia baseado no seu peso corporal.',
    type: 'website',
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Precisa de fase de carga na creatina?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não é obrigatório. Com 3-5g por dia, a saturação muscular acontece em 3-4 semanas. A fase de carga (20g/dia por 5-7 dias) satura mais rápido, mas causa mais retenção de líquido e desconforto gástrico. A manutenção diária é igualmente eficaz a longo prazo."
      }
    },
    {
      "@type": "Question",
      "name": "Creatina engorda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Creatina pode causar 0.5-1.5kg de retenção de água intramuscular (não é gordura). Isso é normal e benéfico: mais água no músculo = melhor performance. Não confunda retenção hídrica com ganho de gordura."
      }
    },
    {
      "@type": "Question",
      "name": "Qual o melhor horário para tomar creatina?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O horário tem impacto mínimo. O mais importante é tomar todos os dias. Se quiser otimizar, tomar pós-treino com carboidrato e proteína pode melhorar a absorção em cerca de 5-10%. Mas a diferença prática é pequena."
      }
    },
    {
      "@type": "Question",
      "name": "Creatina faz mal para os rins?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não, em pessoas saudáveis. Mais de 700 estudos e uma meta-análise de 2023 confirmam que creatina não prejudica a função renal. Pessoas com doença renal pré-existente devem consultar um médico antes de usar."
      }
    },
    {
      "@type": "Question",
      "name": "Posso tomar creatina com café?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim! A combinação é segura e pode até ser benéfica. Estudos mostram que cafeína não anula os efeitos da creatina. Apenas evite doses muito altas de cafeína (500mg+) que podem causar desconforto gástrico quando combinadas."
      }
    }
  ]
}

export default function CalculadoraCreatinaPage() {
  const adSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_CREATINA?.trim()
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
            💪 Qual Minha Dose de Creatina?
          </h1>
          <p className="text-black font-bold mb-4">
            Descubra a <strong>dose exata de creatina</strong> que você deve tomar baseado no seu peso.{' '}
            Manutenção ou fase de saturação? Calcule agora!
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-400 px-3 py-1 border-2 border-black font-bold text-sm">🔬 ISSN Guidelines</span>
            <span className="bg-lime-400 px-3 py-1 border-2 border-black font-bold text-sm">✅ Grátis</span>
            <span className="bg-cyan-400 px-3 py-1 border-2 border-black font-bold text-sm">⚡ Personalizado</span>
          </div>
        </div>

        {/* AdSense display ad (guarded to avoid blank on missing env) */}
        {canShowAds ? (
          <AdUnit slot={adSlot!} className="my-6" />
        ) : process.env.NODE_ENV === 'development' ? (
          <div className="my-6 bg-gray-100 border-4 border-dashed border-gray-300 p-4 text-center text-sm font-bold text-gray-600">
            Configure NEXT_PUBLIC_ADSENSE_ID e NEXT_PUBLIC_ADSENSE_SLOT_CREATINA para exibir o anúncio aqui.
          </div>
        ) : null}

        {/* Calculadora */}
        <CalculadoraCreatina />

        {/* Conteúdo SEO */}
        <div className="bg-white border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mt-8">
          <h2 className="text-2xl font-black text-black uppercase mb-4">📚 Quanta Creatina Tomar?</h2>

          <p className="text-black mb-4">
            A creatina monohidratada é o suplemento mais estudado do mundo. A dose ideal
            depende do seu <strong>peso corporal</strong> e se você está em <strong>fase de saturação</strong> ou <strong>manutenção</strong>.
          </p>

          <h3 className="text-xl font-black text-black uppercase mt-6 mb-3">Duas Estratégias</h3>
          <div className="grid gap-4 mb-4">
            <div className="bg-yellow-100 border-2 border-black p-4">
              <h4 className="font-black text-black">⚡ Fase de Saturação (5-7 dias)</h4>
              <p className="text-black text-sm mt-1">
                <strong>0.3g/kg de peso</strong> por dia, dividido em 4 doses.<br />
                Ex: 70kg = 21g/dia (5g, 4x ao dia)
              </p>
              <p className="text-xs text-gray-600 mt-2">Satura os músculos rapidamente, mas pode causar desconforto gástrico.</p>
            </div>
            <div className="bg-lime-100 border-2 border-black p-4">
              <h4 className="font-black text-black">🔄 Manutenção (uso contínuo)</h4>
              <p className="text-black text-sm mt-1">
                <strong>0.03g/kg de peso</strong> por dia = geralmente 3-5g/dia<br />
                Ex: 70kg = 2.1g/dia (arredondar para 3g)
              </p>
              <p className="text-xs text-gray-600 mt-2">Leva 3-4 semanas para saturar, mas sem efeitos colaterais.</p>
            </div>
          </div>

          <h3 className="text-xl font-black text-black uppercase mb-3">Mitos vs Fatos</h3>
          <table className="w-full border-4 border-black mb-4 text-sm">
            <tbody>
              <tr className="border-b-2 border-black">
                <td className="p-2 bg-red-100 font-bold">❌ Precisa ciclar</td>
                <td className="p-2 bg-green-100">✅ Pode usar continuamente</td>
              </tr>
              <tr className="border-b-2 border-black">
                <td className="p-2 bg-red-100 font-bold">❌ Faz mal para rins</td>
                <td className="p-2 bg-green-100">✅ Segura para rins saudáveis</td>
              </tr>
              <tr className="border-b-2 border-black">
                <td className="p-2 bg-red-100 font-bold">❌ Causa queda de cabelo</td>
                <td className="p-2 bg-green-100">✅ Sem evidências</td>
              </tr>
              <tr>
                <td className="p-2 bg-red-100 font-bold">❌ Só funciona pós-treino</td>
                <td className="p-2 bg-green-100">✅ Horário não importa</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-black text-black uppercase mb-3">Qual Tipo de Creatina?</h3>
          <div className="bg-yellow-100 border-2 border-black p-4 mb-4">
            <p className="font-bold text-black">🏆 Creatina Monohidratada</p>
            <p className="text-black text-sm mt-1">
              A mais estudada, mais barata e mais eficaz. Não precisa de versões &quot;fancy&quot;
              (HCL, Kre-Alkalyn, etc) - são marketing.
            </p>
          </div>

          <h3 className="text-xl font-black text-black uppercase mb-3">Dicas de Uso</h3>
          <div className="space-y-2 mb-4">
            <div className="bg-cyan-100 border-2 border-black p-2">
              <p className="text-sm"><strong>💧 Aumente a água:</strong> +500ml por dia</p>
            </div>
            <div className="bg-pink-100 border-2 border-black p-2">
              <p className="text-sm"><strong>🍚 Com carboidrato:</strong> Melhora absorção em 20%</p>
            </div>
            <div className="bg-lime-100 border-2 border-black p-2">
              <p className="text-sm"><strong>📅 Consistência:</strong> Todo dia, mesmo sem treinar</p>
            </div>
          </div>

          <div className="bg-gray-100 border-2 border-black p-4">
            <p className="text-sm text-gray-700">
              <strong>📚 Fontes:</strong><br />
              • Kreider RB, et al. ISSN Position Stand: Safety and Efficacy of Creatine. 2017<br />
              • Antonio J, Ciccone V. The effects of pre versus post workout supplementation of creatine. 2013
            </p>
          </div>

          <h3 className="text-xl font-black text-black uppercase mt-6 mb-3">❓ Perguntas Frequentes</h3>

          <div className="space-y-4">
            <div className="bg-yellow-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">Creatina antes ou depois do treino?</h4>
              <p className="text-black text-sm">
                <strong>Tanto faz.</strong> Estudos mostram que o timing não importa - o que importa é tomar TODO DIA.
                A creatina funciona por saturação muscular (acumula nos músculos ao longo dos dias).
                Dica prática: Tome junto com a refeição pós-treino (a insulina ajuda na absorção).
              </p>
            </div>

            <div className="bg-lime-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">Creatina causa queda de cabelo?</h4>
              <p className="text-black text-sm">
                <strong>Não há evidências sólidas.</strong> Existe apenas 1 estudo de 2009 que mostrou aumento de DHT (hormônio ligado à calvície),
                mas nenhum participante ficou calvo. Mais de 1.000 estudos posteriores não confirmaram isso.
                Se você tem histórico familiar de calvície, fique atento, mas é muito provável que seja seguro.
              </p>
            </div>

            <div className="bg-orange-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">Posso tomar creatina todos os dias?</h4>
              <p className="text-black text-sm">
                <strong>Sim e DEVE.</strong> Creatina precisa de uso contínuo para manter os músculos saturados.
                Se você parar, os níveis voltam ao normal em 3-4 semanas (e você perde os benefícios).
                É seguro tomar por anos - estudos de longo prazo (até 5 anos) não mostram efeitos colaterais.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-yellow-500 border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mt-8 text-center">
          <h3 className="text-xl font-black text-black uppercase mb-3">
            Creatina combina com proteína!
          </h3>
          <p className="text-black font-bold mb-4">
            Calcule também sua necessidade diária de proteína.
          </p>
          <Link href="/calculadoras/proteina">
            <Button variant="primary" size="lg">
              Calculadora de Proteína →
            </Button>
          </Link>
        </div>

        <NutrientQuickLinks
          items={[
            { slug: 'creatina', title: 'Creatina', description: 'Guia completo de dose, beneficios e seguranca.' },
            { slug: 'proteina', title: 'Proteina', description: 'Combina com treino para recuperacao muscular.' },
            { slug: 'magnesio', title: 'Magnesio', description: 'Funcao muscular, sono e recuperacao.' },
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
