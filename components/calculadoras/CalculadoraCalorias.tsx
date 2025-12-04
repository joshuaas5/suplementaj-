'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export function CalculadoraCalorias() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState<'M' | 'F'>('M')
  const [atividade, setAtividade] = useState('1.55')
  const [resultado, setResultado] = useState<{
    tmb: number
    tdee: number
    perder: number
    ganhar: number
  } | null>(null)

  const calcular = () => {
    const p = parseFloat(peso)
    const a = parseFloat(altura)
    const i = parseFloat(idade)
    const fa = parseFloat(atividade)

    if (p > 0 && a > 0 && i > 0) {
      // Fórmula Mifflin-St Jeor (mais precisa que Harris-Benedict)
      // Fonte: Mifflin MD et al. Am J Clin Nutr 1990
      let tmb: number
      if (sexo === 'M') {
        tmb = (10 * p) + (6.25 * a) - (5 * i) + 5
      } else {
        tmb = (10 * p) + (6.25 * a) - (5 * i) - 161
      }

      const tdee = Math.round(tmb * fa)

      setResultado({
        tmb: Math.round(tmb),
        tdee,
        perder: Math.round(tdee - 500), // Déficit seguro ~0.5kg/sem
        ganhar: Math.round(tdee + 300)  // Superávit moderado
      })
    }
  }

  return (
    <Card className="bg-orange-400 hover:shadow-[8px_8px_0_0_#000] transition-all">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl text-black">🔥 Calculadora de Calorias</CardTitle>
          <Badge variant="danger">Gratuito</Badge>
        </div>
        <p className="text-black font-bold text-sm">
          Fórmula Mifflin-St Jeor (mais precisa)
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Sexo */}
          <div>
            <label className="block text-black font-black uppercase text-sm mb-2">Sexo</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setSexo('M')}
                className={`p-2 border-4 border-black font-bold ${
                  sexo === 'M' ? 'bg-black text-orange-400' : 'bg-white text-black'
                }`}
              >
                ♂️ Masculino
              </button>
              <button
                onClick={() => setSexo('F')}
                className={`p-2 border-4 border-black font-bold ${
                  sexo === 'F' ? 'bg-black text-orange-400' : 'bg-white text-black'
                }`}
              >
                ♀️ Feminino
              </button>
            </div>
          </div>

          {/* Dados básicos */}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-black font-black uppercase text-xs mb-1">Idade</label>
              <input
                type="number"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                placeholder="30"
                className="w-full p-2 border-4 border-black font-bold"
              />
            </div>
            <div>
              <label className="block text-black font-black uppercase text-xs mb-1">Peso (kg)</label>
              <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                placeholder="70"
                className="w-full p-2 border-4 border-black font-bold"
              />
            </div>
            <div>
              <label className="block text-black font-black uppercase text-xs mb-1">Altura (cm)</label>
              <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                placeholder="175"
                className="w-full p-2 border-4 border-black font-bold"
              />
            </div>
          </div>

          {/* Atividade */}
          <div>
            <label className="block text-black font-black uppercase text-sm mb-2">Atividade</label>
            <select
              value={atividade}
              onChange={(e) => setAtividade(e.target.value)}
              className="w-full p-3 border-4 border-black font-bold bg-white"
            >
              <option value="1.2">🛋️ Sedentário (sem exercício)</option>
              <option value="1.375">🚶 Leve (1-3x/semana)</option>
              <option value="1.55">🏃 Moderado (3-5x/semana)</option>
              <option value="1.725">🏋️ Intenso (6-7x/semana)</option>
              <option value="1.9">💪 Atleta (2x/dia)</option>
            </select>
          </div>

          <Button onClick={calcular} variant="primary" size="lg" className="w-full">
            Calcular Calorias
          </Button>

          {resultado && (
            <div className="bg-white border-4 border-black p-4 space-y-3">
              {/* TMB */}
              <div className="bg-gray-100 p-3 border-2 border-black">
                <p className="text-xs font-bold text-gray-600 uppercase">TMB (em repouso)</p>
                <p className="text-2xl font-black text-black">{resultado.tmb} kcal</p>
              </div>

              {/* TDEE - Destaque */}
              <div className="bg-lime-400 p-4 border-4 border-black">
                <p className="text-sm font-black text-black uppercase">⚡ Seu Gasto Diário</p>
                <p className="text-4xl font-black text-black">{resultado.tdee} kcal</p>
                <p className="text-xs text-black font-bold">calorias para manter seu peso</p>
              </div>

              {/* Objetivos */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-cyan-400 p-3 border-2 border-black text-center">
                  <p className="text-xs font-bold text-black uppercase">📉 Emagrecer</p>
                  <p className="text-xl font-black text-black">{resultado.perder}</p>
                  <p className="text-xs text-black">kcal/dia</p>
                </div>
                <div className="bg-pink-400 p-3 border-2 border-black text-center">
                  <p className="text-xs font-bold text-black uppercase">💪 Ganhar Massa</p>
                  <p className="text-xl font-black text-black">{resultado.ganhar}</p>
                  <p className="text-xs text-black">kcal/dia</p>
                </div>
              </div>

              <p className="text-xs text-gray-600 bg-gray-100 p-2 border border-black">
                📚 Fórmula Mifflin-St Jeor - Am J Clin Nutr 1990
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
