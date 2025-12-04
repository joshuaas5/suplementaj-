import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CalculadoraIMC } from '@/components/calculadoras'

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
            ⚖️ Calculadora de IMC
          </h1>
          <p className="text-black font-bold mb-4">
            O <strong>Índice de Massa Corporal (IMC)</strong> é uma medida internacional usada para 
            avaliar se uma pessoa está no peso ideal. Calcule o seu agora!
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-lime-400 px-3 py-1 border-2 border-black font-bold text-sm">✅ Grátis</span>
            <span className="bg-cyan-400 px-3 py-1 border-2 border-black font-bold text-sm">⚡ Instantâneo</span>
            <span className="bg-yellow-400 px-3 py-1 border-2 border-black font-bold text-sm">🔒 Sem cadastro</span>
          </div>
        </div>

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
