import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CalculadoraIMC } from '@/components/calculadoras'
import { AdUnit } from '@/components/layout/AdUnit'

export const metadata: Metadata = {
  title: 'Calculadora de IMC Online Grátis - Índice de Massa Corporal | Suplementa Já',
  description: 'Calcule seu IMC (Índice de Massa Corporal) online e grátis. Descubra se você está no peso ideal, abaixo do peso, sobrepeso ou obesidade. Resultado instantâneo!',
  keywords: ['calculadora imc', 'imc online', 'calcular imc', 'índice massa corporal', 'peso ideal', 'imc grátis', 'obesidade', 'sobrepeso'],
  openGraph: {
    title: 'Calculadora de IMC Online Grátis',
    description: 'Descubra seu Índice de Massa Corporal em segundos. Ferramenta gratuita e sem cadastro.',
    type: 'website',
  }
}

export default function CalculadoraIMCPage() {
  const adSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_IMC?.trim()
  const canShowAds = Boolean(process.env.NEXT_PUBLIC_ADSENSE_ID && adSlot)

  return (
    <div className="min-h-screen bg-pink-100 py-8">
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
            ⚖️ Estou no Peso Ideal?
          </h1>
          <p className="text-black font-bold mb-4">
            Descubra agora se seu peso está adequado para sua altura usando o{' '}
            <strong>Índice de Massa Corporal (IMC)</strong>. Calcule em 10 segundos!
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-lime-400 px-3 py-1 border-2 border-black font-bold text-sm">✅ Grátis</span>
            <span className="bg-cyan-400 px-3 py-1 border-2 border-black font-bold text-sm">⚡ Instantâneo</span>
            <span className="bg-yellow-400 px-3 py-1 border-2 border-black font-bold text-sm">🔒 Sem cadastro</span>
          </div>
        </div>

        {/* AdSense display ad */}
        {canShowAds ? (
          <AdUnit slot={adSlot!} className="my-6" />
        ) : process.env.NODE_ENV === 'development' ? (
          <div className="my-6 bg-gray-100 border-4 border-dashed border-gray-300 p-4 text-center text-sm font-bold text-gray-600">
            Configure NEXT_PUBLIC_ADSENSE_ID e NEXT_PUBLIC_ADSENSE_SLOT_IMC para exibir o anúncio aqui.
          </div>
        ) : null}

        {/* Calculadora */}
        <CalculadoraIMC />

        {/* Conteúdo SEO */}
        <div className="bg-white border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mt-8">
          <h2 className="text-2xl font-black text-black uppercase mb-4">📚 O que é IMC?</h2>
          <p className="text-black mb-4">
            O <strong>IMC (Índice de Massa Corporal)</strong> é calculado dividindo o peso (kg) pela 
            altura ao quadrado (m²). É uma forma rápida de avaliar se o peso está adequado para a altura.
          </p>
          
          <h3 className="text-xl font-black text-black uppercase mb-3">Fórmula do IMC</h3>
          <div className="bg-yellow-400 border-2 border-black p-4 mb-4 text-center">
            <p className="font-black text-xl">IMC = Peso (kg) ÷ Altura² (m)</p>
          </div>

          <h3 className="text-xl font-black text-black uppercase mb-3">Tabela de Classificação</h3>
          <table className="w-full border-4 border-black mb-4">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2 text-left">IMC</th>
                <th className="p-2 text-left">Classificação</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-cyan-100 border-b-2 border-black"><td className="p-2 font-bold">&lt; 18.5</td><td className="p-2">Abaixo do peso</td></tr>
              <tr className="bg-lime-100 border-b-2 border-black"><td className="p-2 font-bold">18.5 - 24.9</td><td className="p-2">Peso normal</td></tr>
              <tr className="bg-yellow-100 border-b-2 border-black"><td className="p-2 font-bold">25 - 29.9</td><td className="p-2">Sobrepeso</td></tr>
              <tr className="bg-orange-100 border-b-2 border-black"><td className="p-2 font-bold">30 - 34.9</td><td className="p-2">Obesidade Grau I</td></tr>
              <tr className="bg-pink-100 border-b-2 border-black"><td className="p-2 font-bold">35 - 39.9</td><td className="p-2">Obesidade Grau II</td></tr>
              <tr className="bg-pink-200"><td className="p-2 font-bold">≥ 40</td><td className="p-2">Obesidade Grau III</td></tr>
            </tbody>
          </table>

          <div className="bg-gray-100 border-2 border-black p-4">
            <p className="text-sm text-gray-700">
              <strong>⚠️ Importante:</strong> O IMC é apenas um indicador. Não considera massa muscular, 
              idade, sexo ou distribuição de gordura. Para uma avaliação completa, consulte um profissional de saúde.
            </p>
          </div>

          <h3 className="text-xl font-black text-black uppercase mt-6 mb-3">❓ Perguntas Frequentes sobre IMC</h3>
          
          <div className="space-y-4">
            <div className="bg-cyan-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">Qual é o peso ideal para minha altura?</h4>
              <p className="text-black text-sm">
                O peso ideal varia conforme o IMC. Para estar no &quot;peso normal&quot;, seu IMC deve estar entre 18,5 e 24,9.
                Por exemplo, se você tem 1,70m, seu peso ideal está entre 53kg e 72kg. Use a calculadora acima para descobrir seu IMC atual!
              </p>
            </div>

            <div className="bg-lime-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">IMC 25 é ruim?</h4>
              <p className="text-black text-sm">
                IMC 25 está no início do sobrepeso. Não é grave, mas indica que você pode estar um pouco acima do peso ideal.
                O ideal é tentar manter entre 18,5 e 24,9 para reduzir riscos de saúde como diabetes e hipertensão.
              </p>
            </div>

            <div className="bg-yellow-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">IMC funciona para quem treina musculação?</h4>
              <p className="text-black text-sm">
                <strong>Não muito bem.</strong> Atletas e praticantes de musculação têm mais massa muscular, o que aumenta o peso.
                Um fisiculturista pode ter IMC 28 (sobrepeso) mas ter apenas 8% de gordura corporal. Nesses casos, o percentual de gordura é mais preciso.
              </p>
            </div>

            <div className="bg-orange-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">Como calcular IMC infantil?</h4>
              <p className="text-black text-sm">
                Para crianças e adolescentes, o cálculo é o mesmo (peso ÷ altura²), mas a interpretação é diferente.
                Usa-se uma tabela com curvas de crescimento por idade. Consulte um pediatra para avaliação correta.
              </p>
            </div>

            <div className="bg-pink-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">Qual IMC para começar a se preocupar?</h4>
              <p className="text-black text-sm">
                <strong>IMC acima de 30</strong> (obesidade) é quando os riscos de saúde aumentam significativamente:
                diabetes tipo 2, pressão alta, problemas cardíacos e apneia do sono. Se você está nessa faixa, 
                procure orientação médica para um plano de emagrecimento seguro.
              </p>
            </div>

            <div className="bg-purple-100 border-2 border-black p-4">
              <h4 className="font-black text-black mb-2">IMC baixo (abaixo de 18,5) é perigoso?</h4>
              <p className="text-black text-sm">
                Sim. IMC muito baixo pode indicar desnutrição, perda de massa muscular e óssea, anemia e sistema imunológico fraco.
                Se seu IMC está abaixo de 18,5, consulte um nutricionista para avaliar sua alimentação.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-black text-black uppercase mt-6 mb-3">🎯 Como melhorar seu IMC?</h3>
          <div className="bg-white border-2 border-black p-4 mb-4">
            <p className="text-black mb-3">
              <strong>Se você está acima do peso (IMC &gt; 25):</strong>
            </p>
            <ul className="list-disc list-inside text-black text-sm space-y-1 mb-4">
              <li>Calcule quantas calorias você gasta por dia (use nossa <a href="/calculadoras/calorias" className="underline font-bold">Calculadora de Calorias</a>)</li>
              <li>Coma 300-500 calorias a menos que seu gasto diário</li>
              <li>Aumente o consumo de proteína (1,6-2g por kg de peso)</li>
              <li>Pratique exercício 3-4x por semana (musculação + cardio)</li>
              <li>Durma 7-8 horas por noite</li>
            </ul>

            <p className="text-black mb-3">
              <strong>Se você está abaixo do peso (IMC &lt; 18,5):</strong>
            </p>
            <ul className="list-disc list-inside text-black text-sm space-y-1">
              <li>Calcule seu gasto calórico e coma 300-500 calorias a mais</li>
              <li>Foque em alimentos calóricos e nutritivos (castanhas, abacate, azeite)</li>
              <li>Faça musculação para ganhar massa magra, não apenas gordura</li>
              <li>Considere suplementar com whey protein e creatina</li>
              <li>Consulte um nutricionista se tiver dificuldade de ganhar peso</li>
            </ul>
          </div>

          <h3 className="text-xl font-black text-black uppercase mt-6 mb-3">📊 IMC vs Percentual de Gordura: Qual é Melhor?</h3>
          <div className="bg-gray-50 border-2 border-black p-4">
            <p className="text-black text-sm mb-3">
              O IMC é prático e rápido, mas tem limitações. Já o <strong>percentual de gordura corporal</strong> é mais preciso
              porque diferencia gordura de músculo.
            </p>
            <p className="text-black text-sm mb-3">
              <strong>Exemplo prático:</strong> Um homem de 1,80m e 90kg:<br />
              • IMC = 27,7 (sobrepeso)<br />
              • Mas se ele tem 12% de gordura corporal, está em ótima forma!<br />
              • Se ele tem 28% de gordura, realmente precisa emagrecer.
            </p>
            <p className="text-black text-sm">
              <strong>Como medir gordura corporal?</strong> Bioimpedância, adipômetro (caliper), ou DEXA scan (mais preciso).
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-pink-500 border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mt-8 text-center">
          <h3 className="text-xl font-black text-white uppercase mb-3">
            Quer uma análise mais completa?
          </h3>
          <p className="text-white font-bold mb-4">
            Nossa avaliação personalizada analisa 50+ fatores de saúde.
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
            <Link href="/calculadoras/calorias" className="bg-orange-400 border-4 border-black p-4 text-center hover:shadow-[4px_4px_0_0_#000] transition-all">
              <span className="text-2xl">🔥</span>
              <p className="font-bold text-black text-sm mt-1">Calorias</p>
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
