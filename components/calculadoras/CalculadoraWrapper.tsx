import { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

interface CalculadoraWrapperProps {
  title: string
  description: string
  emoji: string
  children: ReactNode
}

export function CalculadoraWrapper({ title, description, emoji, children }: CalculadoraWrapperProps) {
  return (
    <div className="min-h-screen bg-cyan-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back button */}
        <Link href="/calculadoras">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Calculadoras
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{emoji}</div>
          <h1 className="text-4xl md:text-5xl font-black text-black mb-4 uppercase">
            {title}
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Calculator content */}
        <Card className="p-6 md:p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {children}
        </Card>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-yellow-100 border-4 border-black">
          <p className="text-sm text-black">
            <strong>⚠️ AVISO:</strong> Esta calculadora fornece estimativas baseadas em fórmulas científicas padrão.
            Os resultados não substituem avaliação médica ou nutricional profissional. Consulte um especialista para
            recomendações personalizadas.
          </p>
        </div>
      </div>
    </div>
  )
}
