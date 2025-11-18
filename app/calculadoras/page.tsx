import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Calculator, Activity, Apple, Droplet, Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calculadoras de Saúde e Nutrição | Suplementa Já',
  description: 'Calculadoras gratuitas de IMC, proteína, deficit calórico, hidratação e vitamina D. Receba recomendações personalizadas de suplementação.',
  keywords: ['calculadora imc', 'calculadora proteina', 'calculadora calorias', 'calculadora hidratação', 'vitamina d']
}

const calculadoras = [
  {
    slug: 'imc',
    title: 'Calculadora de IMC',
    description: 'Calcule seu Índice de Massa Corporal e receba recomendações personalizadas de suplementação',
    emoji: '⚖️',
    icon: Activity,
    color: 'bg-cyan-100 border-cyan-500',
    buttonColor: 'bg-cyan-500 hover:bg-cyan-600'
  },
  {
    slug: 'proteina',
    title: 'Necessidade Proteica',
    description: 'Descubra quantos gramas de proteína você precisa por dia baseado no seu objetivo',
    emoji: '🥩',
    icon: Apple,
    color: 'bg-pink-100 border-pink-500',
    buttonColor: 'bg-pink-500 hover:bg-pink-600'
  },
  {
    slug: 'deficit-calorico',
    title: 'Deficit Calórico',
    description: 'Calcule suas calorias de manutenção e deficit para perda de peso saudável',
    emoji: '🔥',
    icon: Calculator,
    color: 'bg-orange-100 border-orange-500',
    buttonColor: 'bg-orange-500 hover:bg-orange-600'
  },
  {
    slug: 'hidratacao',
    title: 'Hidratação Diária',
    description: 'Calcule quanto de água você deve beber por dia baseado no seu peso e atividade',
    emoji: '💧',
    icon: Droplet,
    color: 'bg-blue-100 border-blue-500',
    buttonColor: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    slug: 'vitamina-d',
    title: 'Vitamina D Solar',
    description: 'Estime sua produção de vitamina D baseado na exposição solar e localização',
    emoji: '☀️',
    icon: Sun,
    color: 'bg-yellow-100 border-yellow-500',
    buttonColor: 'bg-yellow-500 hover:bg-yellow-600'
  }
]

export default function CalculadorasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-pink-50 to-yellow-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">🧮</div>
          <h1 className="text-5xl md:text-6xl font-black text-black mb-6 uppercase">
            Calculadoras de Saúde
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
            Ferramentas gratuitas e baseadas em ciência para otimizar sua saúde e nutrição
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <div className="px-4 py-2 bg-white border-2 border-black font-bold text-sm">
              ✅ 100% Gratuito
            </div>
            <div className="px-4 py-2 bg-white border-2 border-black font-bold text-sm">
              🔬 Baseado em Ciência
            </div>
            <div className="px-4 py-2 bg-white border-2 border-black font-bold text-sm">
              📊 Resultados Instantâneos
            </div>
            <div className="px-4 py-2 bg-white border-2 border-black font-bold text-sm">
              💊 Recomendações de Suplementos
            </div>
          </div>
        </div>

        {/* Grid de calculadoras */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {calculadoras.map((calc) => {
            const Icon = calc.icon
            return (
              <Card
                key={calc.slug}
                className={`${calc.color} border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all`}
              >
                <CardHeader>
                  <div className="text-5xl mb-3">{calc.emoji}</div>
                  <CardTitle className="text-2xl font-black uppercase text-black">
                    {calc.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 min-h-[60px]">
                    {calc.description}
                  </p>
                  <Link href={`/calculadoras/${calc.slug}`}>
                    <Button
                      className={`w-full ${calc.buttonColor} text-white border-2 border-black font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      Calcular Agora
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white border-4 border-black p-8 max-w-3xl mx-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-3xl font-black text-black mb-4 uppercase">
            Quer Recomendações Completas?
          </h2>
          <p className="text-gray-700 mb-6">
            Faça nossa avaliação completa e receba um plano personalizado com todos os nutrientes que você precisa!
          </p>
          <Link href="/avaliacao">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-black uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              Fazer Avaliação Completa
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
