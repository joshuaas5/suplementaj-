'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CalculadoraWrapper } from '@/components/calculadoras/CalculadoraWrapper'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { trackEvent } from '@/lib/analytics'
import { getAmazonProductUrl } from '@/lib/amazon-products'
import { ExternalLink } from 'lucide-react'

interface HidratacaoResult {
  litros: number
  copos: number
  distribuicao: string[]
  dicas: string[]
  sinaisDesidratacao: string[]
  suplementos: Array<{nome: string; slug: string; razao: string}>
}

function calcularHidratacao(peso: number, atividade: string, clima: string): HidratacaoResult {
  // Fórmula base: 35ml por kg
  let mlPorKg = 35

  // Ajustar por atividade física
  if (atividade === 'moderado') mlPorKg += 5
  if (atividade === 'intenso') mlPorKg += 10

  // Ajustar por clima
  if (clima === 'quente') mlPorKg += 5
  if (clima === 'muitoQuente') mlPorKg += 10

  const totalMl = peso * mlPorKg
  const litros = parseFloat((totalMl / 1000).toFixed(1))
  const copos = Math.round(totalMl / 250) // 1 copo = 250ml

  const distribuicao = [
    `Ao acordar: ${Math.round(totalMl * 0.15)}ml (1-2 copos)`,
    `Manhã: ${Math.round(totalMl * 0.20)}ml (2 copos)`,
    `Almoço: ${Math.round(totalMl * 0.15)}ml (1-2 copos)`,
    `Tarde: ${Math.round(totalMl * 0.20)}ml (2 copos)`,
    `Jantar: ${Math.round(totalMl * 0.15)}ml (1-2 copos)`,
    `Noite: ${Math.round(totalMl * 0.15)}ml (1 copo)`
  ]

  const dicas = [
    'Tenha sempre uma garrafa de água por perto',
    'Beba 1-2 copos antes de cada refeição',
    'Durante exercício: 200-300ml a cada 15-20 minutos',
    'Urina clara indica boa hidratação',
    'Evite esperar sentir sede para beber',
    'Aumente consumo em dias quentes ou treinos intensos'
  ]

  const sinaisDesidratacao = [
    'Urina amarelo escuro',
    'Boca seca',
    'Fadiga e tontura',
    'Dor de cabeça',
    'Pele seca',
    'Redução de performance física'
  ]

  const suplementos = [
    { nome: 'Eletrólitos', slug: 'eletrolitos', razao: 'Repõe minerais perdidos no suor' },
    { nome: 'Magnésio', slug: 'magnesio', razao: 'Auxilia na hidratação celular' },
    { nome: 'Potássio', slug: 'potassio', razao: 'Regula equilíbrio hídrico' },
    { nome: 'Sódio', slug: 'sodio', razao: 'Essencial para hidratação em exercícios longos' }
  ]

  return { litros, copos, distribuicao, dicas, sinaisDesidratacao, suplementos }
}

export default function CalculadoraHidratacaoPage() {
  const [peso, setPeso] = useState('')
  const [atividade, setAtividade] = useState('leve')
  const [clima, setClima] = useState('moderado')
  const [resultado, setResultado] = useState<HidratacaoResult | null>(null)

  const handleCalcular = () => {
    const pesoNum = parseFloat(peso)
    if (isNaN(pesoNum) || pesoNum <= 0 || pesoNum < 30 || pesoNum > 300) {
      alert('Peso inválido')
      return
    }

    const result = calcularHidratacao(pesoNum, atividade, clima)
    setResultado(result)
    trackEvent('calculator_used', { calculator_type: 'hidratacao', litros: result.litros })
  }

  return (
    <CalculadoraWrapper
      title="Calculadora de Hidratação"
      description="Descubra quanto de água você deve beber por dia baseado no seu peso e atividade"
      emoji="💧"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-black mb-2 uppercase">Peso (kg)</label>
            <Input type="number" placeholder="Ex: 70" value={peso} onChange={(e) => setPeso(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-bold text-black mb-2 uppercase">Nível de Atividade</label>
            <select className="w-full px-3 py-2 border-2 border-black rounded font-bold bg-white" value={atividade} onChange={(e) => setAtividade(e.target.value)}>
              <option value="sedentario">Sedentário</option>
              <option value="leve">Leve (1-3x/semana)</option>
              <option value="moderado">Moderado (3-5x/semana)</option>
              <option value="intenso">Intenso (6-7x/semana)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-black mb-2 uppercase">Clima onde você vive</label>
            <select className="w-full px-3 py-2 border-2 border-black rounded font-bold bg-white" value={clima} onChange={(e) => setClima(e.target.value)}>
              <option value="frio">Frio</option>
              <option value="moderado">Moderado</option>
              <option value="quente">Quente</option>
              <option value="muitoQuente">Muito Quente</option>
            </select>
          </div>
        </div>

        <Button onClick={handleCalcular} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold uppercase">
          Calcular Hidratação
        </Button>

        {resultado && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-4 border-black">
              <CardContent className="p-6 text-center">
                <div className="text-6xl font-black text-black mb-2">{resultado.litros}L</div>
                <p className="text-lg text-gray-700 mb-2">Água por Dia</p>
                <Badge variant="info" className="text-sm px-4 py-2">≈ {resultado.copos} copos de 250ml</Badge>
              </CardContent>
            </Card>

            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-black text-black mb-4 uppercase text-xl">⏰ Distribuição ao Longo do Dia</h3>
              <div className="space-y-2">
                {resultado.distribuicao.map((dist, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <span className="text-blue-600 font-bold">💧</span>
                    <span className="text-gray-700">{dist}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-black p-6">
              <h3 className="font-black text-black mb-4 uppercase text-xl">💡 Dicas de Hidratação</h3>
              <div className="space-y-2">
                {resultado.dicas.map((dica, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-yellow-600 font-bold">✓</span>
                    <span className="text-gray-700">{dica}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border-2 border-black p-6">
              <h3 className="font-black text-black mb-4 uppercase text-xl">⚠️ Sinais de Desidratação</h3>
              <div className="grid md:grid-cols-2 gap-2">
                {resultado.sinaisDesidratacao.map((sinal, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <span className="text-red-600 font-bold">⚠</span>
                    <span className="text-gray-700">{sinal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-pink-50 border-2 border-black p-6">
              <h3 className="font-black text-black mb-4 uppercase text-xl">💊 Suplementos para Hidratação</h3>
              <div className="space-y-3">
                {resultado.suplementos.map((sup, idx) => (
                  <div key={idx} className="bg-white border-2 border-black p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-black">{sup.nome}</h4>
                      <div className="flex gap-2">
                        <Link href={`/nutrientes/${sup.slug}`}>
                          <Badge variant="neutral" className="uppercase text-xs">
                            Saiba Mais
                          </Badge>
                        </Link>
                        <a
                          href={getAmazonProductUrl(sup.slug)}
                          target="_blank"
                          rel="noopener noreferrer nofollow sponsored"
                        >
                          <Badge variant="success" className="uppercase text-xs flex items-center gap-1">
                            <ExternalLink className="w-3 h-3" />
                            Comprar
                          </Badge>
                        </a>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{sup.razao}</p>
                    <a
                      href={getAmazonProductUrl(sup.slug)}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                      className="block"
                    >
                      <Button variant="primary" size="sm" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver na Amazon
                      </Button>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculadoraWrapper>
  )
}
