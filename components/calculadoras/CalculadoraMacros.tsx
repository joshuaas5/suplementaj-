'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export function CalculadoraMacros() {
  const [calorias, setCalorias] = useState('')
  const [objetivo, setObjetivo] = useState('manutencao')
  const [resultado, setResultado] = useState<{
    proteina: { g: number; kcal: number; pct: number }
    carb: { g: number; kcal: number; pct: number }
    gordura: { g: number; kcal: number; pct: number }
  } | null>(null)

  // Distribuição baseada em guidelines do ISSN e ACSM
  const distribuicoes: Record<string, { prot: number; carb: number; fat: number; fonte: string }> = {
    manutencao: { prot: 0.25, carb: 0.45, fat: 0.30, fonte: 'Dietary Guidelines 2020-2025' },
    perder: { prot: 0.35, carb: 0.35, fat: 0.30, fonte: 'ISSN Fat Loss Guidelines' },
    ganhar: { prot: 0.25, carb: 0.50, fat: 0.25, fonte: 'ISSN Muscle Gain Guidelines' },
    lowcarb: { prot: 0.30, carb: 0.20, fat: 0.50, fonte: 'Low-Carb Research' },
    keto: { prot: 0.20, carb: 0.05, fat: 0.75, fonte: 'Ketogenic Diet Studies' },
  }

  const calcular = () => {
    const cal = parseFloat(calorias)
    if (cal <= 0) return

    const dist = distribuicoes[objetivo]
    
    const protKcal = cal * dist.prot
    const carbKcal = cal * dist.carb
    const fatKcal = cal * dist.fat

    setResultado({
      proteina: { g: Math.round(protKcal / 4), kcal: Math.round(protKcal), pct: Math.round(dist.prot * 100) },
      carb: { g: Math.round(carbKcal / 4), kcal: Math.round(carbKcal), pct: Math.round(dist.carb * 100) },
      gordura: { g: Math.round(fatKcal / 9), kcal: Math.round(fatKcal), pct: Math.round(dist.fat * 100) }
    })
  }

  return (
    <Card className="bg-purple-400 hover:shadow-[8px_8px_0_0_#000] transition-all">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl text-black">🍽️ Calculadora de Macros</CardTitle>
          <Badge variant="info">Gratuito</Badge>
        </div>
        <p className="text-black font-bold text-sm">
          Proteína, Carboidrato e Gordura ideais
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Calorias */}
          <div>
            <label className="block text-black font-black uppercase text-sm mb-2">
              Suas Calorias Diárias
            </label>
            <input
              type="number"
              value={calorias}
              onChange={(e) => setCalorias(e.target.value)}
              placeholder="Ex: 2000"
              className="w-full p-3 border-4 border-black font-bold text-lg"
            />
            <p className="text-xs text-black mt-1 font-bold">
              💡 Use a Calculadora de Calorias primeiro
            </p>
          </div>

          {/* Objetivo - Visual mais claro */}
          <div>
            <label className="block text-black font-black uppercase text-sm mb-2">Objetivo</label>
            <div className="space-y-2">
              {[
                { id: 'manutencao', emoji: '⚖️', label: 'Manter Peso', desc: '25% prot | 45% carb | 30% gord' },
                { id: 'perder', emoji: '📉', label: 'Emagrecer', desc: '35% prot | 35% carb | 30% gord' },
                { id: 'ganhar', emoji: '💪', label: 'Ganhar Massa', desc: '25% prot | 50% carb | 25% gord' },
                { id: 'lowcarb', emoji: '🥑', label: 'Low Carb', desc: '30% prot | 20% carb | 50% gord' },
                { id: 'keto', emoji: '🥓', label: 'Cetogênica', desc: '20% prot | 5% carb | 75% gord' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setObjetivo(opt.id)}
                  className={`w-full p-3 border-4 border-black text-left flex items-center gap-3 ${
                    objetivo === opt.id ? 'bg-black text-purple-400' : 'bg-white text-black'
                  }`}
                >
                  <span className="text-xl">{opt.emoji}</span>
                  <div>
                    <div className="font-bold">{opt.label}</div>
                    <div className={`text-xs ${objetivo === opt.id ? 'text-purple-300' : 'text-gray-500'}`}>
                      {opt.desc}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <Button onClick={calcular} variant="primary" size="lg" className="w-full">
            Calcular Macros
          </Button>

          {resultado && (
            <div className="bg-white border-4 border-black p-4 space-y-3">
              {/* Proteína */}
              <div className="bg-pink-400 p-3 border-2 border-black">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-black text-sm">🥩 PROTEÍNA</p>
                    <p className="text-3xl font-black text-black">{resultado.proteina.g}g</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-black">{resultado.proteina.pct}%</p>
                    <p className="text-xs text-black">{resultado.proteina.kcal} kcal</p>
                  </div>
                </div>
              </div>

              {/* Carboidrato */}
              <div className="bg-yellow-400 p-3 border-2 border-black">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-black text-sm">🍚 CARBOIDRATO</p>
                    <p className="text-3xl font-black text-black">{resultado.carb.g}g</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-black">{resultado.carb.pct}%</p>
                    <p className="text-xs text-black">{resultado.carb.kcal} kcal</p>
                  </div>
                </div>
              </div>

              {/* Gordura */}
              <div className="bg-lime-400 p-3 border-2 border-black">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-black text-sm">🥑 GORDURA</p>
                    <p className="text-3xl font-black text-black">{resultado.gordura.g}g</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-black">{resultado.gordura.pct}%</p>
                    <p className="text-xs text-black">{resultado.gordura.kcal} kcal</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-600 bg-gray-100 p-2 border border-black">
                📚 <strong>Fonte:</strong> {distribuicoes[objetivo].fonte}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
