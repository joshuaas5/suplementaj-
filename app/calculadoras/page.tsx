import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { 
  CalculadoraCreatina, 
  CalculadoraProteina, 
  CalculadoraAgua,
  CalculadoraIMC,
  CalculadoraCalorias,
  CalculadoraMacros
} from '@/components/calculadoras'

export const metadata: Metadata = {
  title: 'Calculadoras de Saúde e Suplementação - Suplementa Já',
  description: 'Calculadoras gratuitas: IMC, calorias (TMB), macros, creatina, proteína e hidratação. Ferramentas baseadas em ciência para otimizar sua saúde.',
  keywords: ['calculadora imc', 'calculadora calorias', 'calculadora macros', 'calculadora creatina', 'calculadora proteína', 'tmb', 'gasto calórico'],
}

export default function CalculadorasPage() {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              calcular suas necessidades de suplementação. Resultados instantâneos!
            </p>
          </div>
        </div>

        {/* Seção 1: Calculadoras de Corpo */}
        <div className="mb-10">
          <div className="inline-block bg-pink-500 border-4 border-black px-4 py-2 mb-6 -rotate-1">
            <h2 className="text-xl font-black text-white uppercase">⚖️ Corpo & Composição</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CalculadoraIMC />
            <CalculadoraCalorias />
            <CalculadoraMacros />
          </div>
        </div>

        {/* Seção 2: Calculadoras de Suplementação */}
        <div className="mb-12">
          <div className="inline-block bg-cyan-400 border-4 border-black px-4 py-2 mb-6 rotate-1">
            <h2 className="text-xl font-black text-black uppercase">💊 Suplementação</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CalculadoraCreatina />
            <CalculadoraProteina />
            <CalculadoraAgua />
          </div>
        </div>

        {/* CTA */}
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
