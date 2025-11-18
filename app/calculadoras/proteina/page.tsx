'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CalculadoraWrapper } from '@/components/calculadoras/CalculadoraWrapper'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Alert } from '@/components/ui/Alert'
import { trackEvent } from '@/lib/analytics'

interface ProteinaResult {
  gramas: number
  gramasPorKg: number
  objetivo: string
  distribuicao: {
    cafeManha: number
    almoco: number
    lanche: number
    jantar: number
  }
  fontes: string[]
  suplementos: Array<{nome: string; slug: string; razao: string}>
}

function calcularProteina(peso: number, objetivo: string, atividade: string): ProteinaResult {
  let fator: number

  // Determinar fator baseado em objetivo e atividade
  if (objetivo === 'perda') {
    fator = atividade === 'sedentario' ? 1.6 : atividade === 'moderado' ? 1.8 : 2.0
  } else if (objetivo === 'manutencao') {
    fator = atividade === 'sedentario' ? 1.2 : atividade === 'moderado' ? 1.6 : 1.8
  } else { // ganho
    fator = atividade === 'sedentario' ? 1.8 : atividade === 'moderado' ? 2.0 : 2.2
  }

  const gramas = Math.round(peso * fator)

  // Distribuição em 4 refeições
  const distribuicao = {
    cafeManha: Math.round(gramas * 0.25),
    almoco: Math.round(gramas * 0.30),
    lanche: Math.round(gramas * 0.15),
    jantar: Math.round(gramas * 0.30)
  }

  const fontes = [
    'Peito de frango (100g = 31g proteína)',
    'Ovo (unidade = 6g proteína)',
    'Salmão (100g = 25g proteína)',
    'Carne vermelha magra (100g = 26g proteína)',
    'Feijão (100g = 9g proteína)',
    'Iogurte grego (100g = 10g proteína)',
    'Queijo cottage (100g = 11g proteína)',
    'Tofu (100g = 8g proteína)'
  ]

  let suplementos: Array<{nome: string; slug: string; razao: string}>

  if (objetivo === 'ganho' && gramas > 120) {
    suplementos = [
      { nome: 'Whey Protein', slug: 'proteina', razao: 'Facilita atingir meta proteica elevada' },
      { nome: 'Creatina', slug: 'creatina', razao: 'Potencializa ganho de massa muscular' },
      { nome: 'BCAA', slug: 'bcaa', razao: 'Recuperação muscular pós-treino' },
      { nome: 'Glutamina', slug: 'glutamina', razao: 'Recuperação e saúde intestinal' }
    ]
  } else if (objetivo === 'perda') {
    suplementos = [
      { nome: 'Whey Protein', slug: 'proteina', razao: 'Saciedade e preservação de massa magra' },
      { nome: 'Ômega-3', slug: 'omega-3', razao: 'Reduz inflamação durante deficit calórico' },
      { nome: 'Vitamina D', slug: 'vitamina-d', razao: 'Preserva massa muscular' },
      { nome: 'Magnésio', slug: 'magnesio', razao: 'Recuperação e qualidade do sono' }
    ]
  } else {
    suplementos = [
      { nome: 'Whey Protein', slug: 'proteina', razao: 'Conveniência para atingir meta proteica' },
      { nome: 'Creatina', slug: 'creatina', razao: 'Performance e recuperação muscular' },
      { nome: 'Ômega-3', slug: 'omega-3', razao: 'Saúde geral e recuperação' }
    ]
  }

  return {
    gramas,
    gramasPorKg: parseFloat(fator.toFixed(1)),
    objetivo,
    distribuicao,
    fontes,
    suplementos
  }
}

export default function CalculadoraProteinaPage() {
  const [peso, setPeso] = useState('')
  const [objetivo, setObjetivo] = useState('manutencao')
  const [atividade, setAtividade] = useState('moderado')
  const [resultado, setResultado] = useState<ProteinaResult | null>(null)

  const handleCalcular = () => {
    const pesoNum = parseFloat(peso)

    if (isNaN(pesoNum) || pesoNum <= 0) {
      alert('Por favor, preencha o peso corretamente')
      return
    }

    if (pesoNum < 30 || pesoNum > 300) {
      alert('Peso deve estar entre 30kg e 300kg')
      return
    }

    const result = calcularProteina(pesoNum, objetivo, atividade)
    setResultado(result)

    trackEvent('calculator_used', {
      calculator_type: 'proteina',
      protein_grams: result.gramas,
      objetivo,
      atividade
    })
  }

  const handleReset = () => {
    setPeso('')
    setObjetivo('manutencao')
    setAtividade('moderado')
    setResultado(null)
  }

  return (
    <CalculadoraWrapper
      title="Calculadora de Proteína"
      description="Descubra quantos gramas de proteína você precisa por dia baseado no seu objetivo"
      emoji="🥩"
    >
      <div className="space-y-6">
        {/* Formulário */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-black mb-2 uppercase">
              Peso (kg)
            </label>
            <Input
              type="number"
              placeholder="Ex: 70"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              min="30"
              max="300"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-black mb-2 uppercase">
              Objetivo
            </label>
            <select className="w-full px-3 py-2 border-2 border-black rounded font-bold bg-white"
              value={objetivo}
              onChange={(e) => setObjetivo(e.target.value)}
            >
              <option value="perda">Perda de Peso</option>
              <option value="manutencao">Manutenção</option>
              <option value="ganho">Ganho de Massa Muscular</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-black mb-2 uppercase">
              Nível de Atividade Física
            </label>
            <select className="w-full px-3 py-2 border-2 border-black rounded font-bold bg-white"
              value={atividade}
              onChange={(e) => setAtividade(e.target.value)}
            >
              <option value="sedentario">Sedentário (0-1x/semana)</option>
              <option value="moderado">Moderado (2-4x/semana)</option>
              <option value="intenso">Intenso (5-7x/semana)</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={handleCalcular}
            className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-bold uppercase"
          >
            Calcular Proteína
          </Button>
          {resultado && (
            <Button
              onClick={handleReset}
              variant="outline"
              className="uppercase font-bold"
            >
              Limpar
            </Button>
          )}
        </div>

        {/* Resultado */}
        {resultado && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Resultado Principal */}
            <Card className="bg-gradient-to-br from-pink-100 to-pink-200 border-4 border-black">
              <CardContent className="p-6 text-center">
                <div className="text-6xl font-black text-black mb-2">
                  {resultado.gramas}g
                </div>
                <p className="text-lg text-gray-700 mb-2">
                  Proteína Total por Dia
                </p>
                <Badge variant="neutral" className="text-sm px-4 py-2">
                  {resultado.gramasPorKg}g por kg de peso corporal
                </Badge>
              </CardContent>
            </Card>

            {/* Distribuição por Refeição */}
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-black text-black mb-4 uppercase text-xl">
                🍽️ Distribuição Sugerida
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-cyan-100 border-2 border-black p-3 text-center">
                  <div className="text-2xl font-black text-black">{resultado.distribuicao.cafeManha}g</div>
                  <div className="text-xs font-bold uppercase mt-1">Café da Manhã</div>
                </div>
                <div className="bg-yellow-100 border-2 border-black p-3 text-center">
                  <div className="text-2xl font-black text-black">{resultado.distribuicao.almoco}g</div>
                  <div className="text-xs font-bold uppercase mt-1">Almoço</div>
                </div>
                <div className="bg-orange-100 border-2 border-black p-3 text-center">
                  <div className="text-2xl font-black text-black">{resultado.distribuicao.lanche}g</div>
                  <div className="text-xs font-bold uppercase mt-1">Lanche</div>
                </div>
                <div className="bg-purple-100 border-2 border-black p-3 text-center">
                  <div className="text-2xl font-black text-black">{resultado.distribuicao.jantar}g</div>
                  <div className="text-xs font-bold uppercase mt-1">Jantar</div>
                </div>
              </div>
            </div>

            {/* Fontes de Proteína */}
            <div className="bg-yellow-50 border-2 border-black p-6">
              <h3 className="font-black text-black mb-4 uppercase text-xl">
                🍗 Melhores Fontes de Proteína
              </h3>
              <div className="grid md:grid-cols-2 gap-2">
                {resultado.fontes.map((fonte, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <span className="text-pink-600 font-bold">✓</span>
                    <span className="text-gray-700">{fonte}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suplementos Recomendados */}
            <div className="bg-pink-50 border-2 border-black p-6">
              <h3 className="font-black text-black mb-4 uppercase text-xl">
                💊 Suplementos Recomendados
              </h3>
              <div className="space-y-3">
                {resultado.suplementos.map((sup, idx) => (
                  <div key={idx} className="bg-white border-2 border-black p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-black">{sup.nome}</h4>
                      <Link href={`/nutrientes/${sup.slug}`}>
                        <Badge variant="neutral" className="uppercase text-xs">
                          Ver Detalhes
                        </Badge>
                      </Link>
                    </div>
                    <p className="text-sm text-gray-600">{sup.razao}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Alert variant="info">
              <p className="font-bold mb-2">Quer um plano nutricional completo?</p>
              <p className="text-sm mb-4">
                Faça nossa avaliação e receba recomendações de TODOS os nutrientes que você precisa!
              </p>
              <Link href="/avaliacao">
                <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold uppercase">
                  Fazer Avaliação Completa
                </Button>
              </Link>
            </Alert>
          </div>
        )}
      </div>
    </CalculadoraWrapper>
  )
}
