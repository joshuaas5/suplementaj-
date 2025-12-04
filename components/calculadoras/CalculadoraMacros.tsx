'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export function CalculadoraMacros() {
  const [calorias, setCalorias] = useState('')
  const [objetivo, setObjetivo] = useState('manutencao')
  const [resultado, setResultado] = useState<{
    proteina: { gramas: number; calorias: number; percentual: number }
    carboidrato: { gramas: number; calorias: number; percentual: number }
    gordura: { gramas: number; calorias: number; percentual: number }
  } | null>(null)

  const calcular = () => {
    const cal = parseFloat(calorias)
    if (cal > 0) {
      let protPercent: number
      let carbPercent: number
      let fatPercent: number

      switch (objetivo) {
        case 'perder':
          protPercent = 0.35 // Alta proteína para preservar músculo
          carbPercent = 0.35
          fatPercent = 0.30
          break
        case 'ganhar':
          protPercent = 0.25
          carbPercent = 0.50 // Mais carbs para energia e crescimento
          fatPercent = 0.25
          break
        case 'lowcarb':
          protPercent = 0.30
          carbPercent = 0.15 // Muito baixo carb
          fatPercent = 0.55
          break
        default: // manutenção
          protPercent = 0.25
          carbPercent = 0.45
          fatPercent = 0.30
      }

      const protCal = cal * protPercent
      const carbCal = cal * carbPercent
      const fatCal = cal * fatPercent

      setResultado({
        proteina: {
          gramas: Math.round(protCal / 4), // 4 cal/g
          calorias: Math.round(protCal),
          percentual: Math.round(protPercent * 100)
        },
        carboidrato: {
          gramas: Math.round(carbCal / 4), // 4 cal/g
          calorias: Math.round(carbCal),
          percentual: Math.round(carbPercent * 100)
        },
        gordura: {
          gramas: Math.round(fatCal / 9), // 9 cal/g
          calorias: Math.round(fatCal),
          percentual: Math.round(fatPercent * 100)
        }
      })
    }
  }

  return (
    <Card className="bg-purple-400">
      <CardHeader>
        <CardTitle className="text-2xl text-black">🍽️ Calculadora de Macros</CardTitle>
        <p className="text-black font-bold text-sm">
          Proteína, Carboidrato e Gordura ideais
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Input Calorias */}
        <div>
          <label className="block text-black font-black uppercase text-sm mb-2">
            Suas Calorias Diárias (kcal)
          </label>
          <input
            type="number"
            value={calorias}
            onChange={(e) => setCalorias(e.target.value)}
            placeholder="Ex: 2000"
            className="w-full p-3 border-4 border-black bg-white text-black font-bold text-lg focus:outline-none focus:ring-4 focus:ring-black"
          />
          <p className="text-xs text-black mt-1 font-bold">
            💡 Use a Calculadora de Calorias para descobrir seu gasto diário
          </p>
        </div>

        {/* Objetivo */}
        <div>
          <label className="block text-black font-black uppercase text-sm mb-2">
            Seu Objetivo
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { value: 'perder', label: '📉 Perder Gordura', desc: 'Alta proteína' },
              { value: 'ganhar', label: '💪 Ganhar Massa', desc: 'Mais carboidratos' },
              { value: 'manutencao', label: '⚖️ Manter Peso', desc: 'Equilibrado' },
              { value: 'lowcarb', label: '🥑 Low Carb', desc: 'Alta gordura' },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setObjetivo(opt.value)}
                className={`p-3 border-4 border-black text-left transition-all ${
                  objetivo === opt.value
                    ? 'bg-black text-purple-400'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                <div className="font-bold text-sm">{opt.label}</div>
                <div className={`text-xs ${objetivo === opt.value ? 'text-purple-300' : 'text-gray-600'}`}>
                  {opt.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Botão */}
        <Button
          onClick={calcular}
          variant="primary"
          size="lg"
          className="w-full text-lg"
        >
          Calcular Macros
        </Button>

        {/* Resultado */}
        {resultado && (
          <div className="space-y-3 mt-4">
            {/* Proteína */}
            <div className="bg-pink-400 border-4 border-black p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-black text-black uppercase">🥩 Proteína</div>
                  <div className="text-3xl font-black text-black">{resultado.proteina.gramas}g</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-black">{resultado.proteina.percentual}%</div>
                  <div className="text-xs text-black font-bold">{resultado.proteina.calorias} kcal</div>
                </div>
              </div>
            </div>

            {/* Carboidrato */}
            <div className="bg-yellow-400 border-4 border-black p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-black text-black uppercase">🍚 Carboidrato</div>
                  <div className="text-3xl font-black text-black">{resultado.carboidrato.gramas}g</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-black">{resultado.carboidrato.percentual}%</div>
                  <div className="text-xs text-black font-bold">{resultado.carboidrato.calorias} kcal</div>
                </div>
              </div>
            </div>

            {/* Gordura */}
            <div className="bg-lime-400 border-4 border-black p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-black text-black uppercase">🥑 Gordura</div>
                  <div className="text-3xl font-black text-black">{resultado.gordura.gramas}g</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-black">{resultado.gordura.percentual}%</div>
                  <div className="text-xs text-black font-bold">{resultado.gordura.calorias} kcal</div>
                </div>
              </div>
            </div>

            {/* Dica */}
            <div className="bg-white border-4 border-black p-3">
              <p className="text-xs text-black font-bold">
                💡 <strong>Dica:</strong> 1g de proteína = 4 kcal | 1g de carb = 4 kcal | 1g de gordura = 9 kcal
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
