'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export function CalculadoraProteina() {
  const [peso, setPeso] = useState('')
  const [objetivo, setObjetivo] = useState<'manter' | 'ganhar' | 'perder'>('manter')
  const [atividade, setAtividade] = useState<'sedentario' | 'moderado' | 'intenso'>('moderado')
  const [resultado, setResultado] = useState<{
    minimo: number
    maximo: number
    ovos: number
    frango: number
    whey: number
  } | null>(null)

  const calcular = () => {
    const pesoNum = parseFloat(peso)
    if (isNaN(pesoNum) || pesoNum <= 0) return

    let fatorMin = 0.8
    let fatorMax = 1.0

    // Ajuste por objetivo
    if (objetivo === 'ganhar') {
      fatorMin = 1.6
      fatorMax = 2.2
    } else if (objetivo === 'perder') {
      fatorMin = 1.2
      fatorMax = 1.6
    }

    // Ajuste por atividade
    if (atividade === 'intenso') {
      fatorMin += 0.2
      fatorMax += 0.3
    } else if (atividade === 'sedentario') {
      fatorMin -= 0.1
      fatorMax -= 0.1
    }

    const minimo = Math.round(pesoNum * fatorMin)
    const maximo = Math.round(pesoNum * fatorMax)
    const media = (minimo + maximo) / 2

    setResultado({
      minimo,
      maximo,
      ovos: Math.round(media / 6), // 6g de proteína por ovo
      frango: Math.round(media / 31 * 100), // 31g de proteína por 100g de frango
      whey: Math.round(media / 24), // 24g de proteína por scoop
    })
  }

  return (
    <Card className="bg-lime-400 hover:shadow-[8px_8px_0_0_#000] transition-all">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl text-black">🥩 Calculadora de Proteína</CardTitle>
          <Badge variant="info">Gratuito</Badge>
        </div>
        <p className="text-black font-bold text-sm">
          Calcule quanto de proteína você precisa por dia
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Input de Peso */}
          <div>
            <label className="block text-black font-black uppercase text-sm mb-2">
              Seu Peso (kg)
            </label>
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              placeholder="Ex: 70"
              className="w-full p-4 border-4 border-black text-black font-bold text-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Objetivo */}
          <div>
            <label className="block text-black font-black uppercase text-sm mb-2">
              Objetivo
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'perder', label: 'Emagrecer' },
                { id: 'manter', label: 'Manter' },
                { id: 'ganhar', label: 'Ganhar Massa' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setObjetivo(opt.id as typeof objetivo)}
                  className={`p-2 border-4 border-black font-bold text-sm transition-all ${
                    objetivo === opt.id
                      ? 'bg-black text-lime-400'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Nível de Atividade */}
          <div>
            <label className="block text-black font-black uppercase text-sm mb-2">
              Nível de Atividade
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'sedentario', label: 'Sedentário' },
                { id: 'moderado', label: 'Moderado' },
                { id: 'intenso', label: 'Intenso' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setAtividade(opt.id as typeof atividade)}
                  className={`p-2 border-4 border-black font-bold text-sm transition-all ${
                    atividade === opt.id
                      ? 'bg-black text-lime-400'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Botão Calcular */}
          <Button
            onClick={calcular}
            variant="success"
            size="lg"
            className="w-full"
          >
            Calcular Proteína
          </Button>

          {/* Resultado */}
          {resultado && (
            <div className="bg-white border-4 border-black p-4 mt-4">
              <h4 className="font-black text-black uppercase mb-3">📊 Sua Necessidade Diária:</h4>
              <div className="bg-pink-500 p-4 border-2 border-black mb-4">
                <div className="text-center">
                  <span className="font-black text-3xl text-white">
                    {resultado.minimo}g - {resultado.maximo}g
                  </span>
                  <p className="text-white font-bold text-sm">de proteína por dia</p>
                </div>
              </div>
              
              <h5 className="font-black text-black uppercase mb-2 text-sm">Equivale a (por dia):</h5>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-yellow-400 p-2 border-2 border-black">
                  <div className="font-black text-xl text-black">{resultado.ovos}</div>
                  <div className="text-xs font-bold text-black">ovos</div>
                </div>
                <div className="bg-cyan-400 p-2 border-2 border-black">
                  <div className="font-black text-xl text-black">{resultado.frango}g</div>
                  <div className="text-xs font-bold text-black">frango</div>
                </div>
                <div className="bg-purple-400 p-2 border-2 border-black">
                  <div className="font-black text-xl text-black">{resultado.whey}</div>
                  <div className="text-xs font-bold text-black">scoops whey</div>
                </div>
              </div>
              <p className="text-xs text-gray-700 mt-3 font-bold">
                ⚠️ Valores aproximados. Consulte um nutricionista para um plano personalizado.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
