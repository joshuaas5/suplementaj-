'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export function CalculadoraAgua() {
  const [peso, setPeso] = useState('')
  const [atividade, setAtividade] = useState<'baixa' | 'moderada' | 'alta'>('moderada')
  const [clima, setClima] = useState<'frio' | 'ameno' | 'quente'>('ameno')
  const [resultado, setResultado] = useState<{
    litros: number
    copos: number
    garrafas: number
  } | null>(null)

  const calcular = () => {
    const pesoNum = parseFloat(peso)
    if (isNaN(pesoNum) || pesoNum <= 0) return

    // Base: 35ml por kg
    let mlPorKg = 35

    // Ajuste por atividade
    if (atividade === 'alta') mlPorKg += 15
    else if (atividade === 'baixa') mlPorKg -= 5

    // Ajuste por clima
    if (clima === 'quente') mlPorKg += 10
    else if (clima === 'frio') mlPorKg -= 5

    const totalMl = pesoNum * mlPorKg
    const litros = Math.round(totalMl / 100) / 10 // Arredonda para 1 casa decimal

    setResultado({
      litros,
      copos: Math.round(totalMl / 250), // Copo de 250ml
      garrafas: Math.round(totalMl / 500), // Garrafas de 500ml
    })
  }

  return (
    <Card className="bg-blue-400 hover:shadow-[8px_8px_0_0_#000] transition-all">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl text-black">💧 Calculadora de Água</CardTitle>
          <Badge variant="danger">Gratuito</Badge>
        </div>
        <p className="text-black font-bold text-sm">
          Descubra quantos litros de água você deve beber por dia
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

          {/* Nível de Atividade */}
          <div>
            <label className="block text-black font-black uppercase text-sm mb-2">
              Atividade Física
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'baixa', label: 'Baixa' },
                { id: 'moderada', label: 'Moderada' },
                { id: 'alta', label: 'Alta' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setAtividade(opt.id as typeof atividade)}
                  className={`p-2 border-4 border-black font-bold text-sm transition-all ${
                    atividade === opt.id
                      ? 'bg-black text-blue-400'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Clima */}
          <div>
            <label className="block text-black font-black uppercase text-sm mb-2">
              Clima da Região
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'frio', label: '❄️ Frio' },
                { id: 'ameno', label: '🌤️ Ameno' },
                { id: 'quente', label: '☀️ Quente' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setClima(opt.id as typeof clima)}
                  className={`p-2 border-4 border-black font-bold text-sm transition-all ${
                    clima === opt.id
                      ? 'bg-black text-blue-400'
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
            variant="primary"
            size="lg"
            className="w-full"
          >
            Calcular Hidratação
          </Button>

          {/* Resultado */}
          {resultado && (
            <div className="bg-white border-4 border-black p-4 mt-4">
              <h4 className="font-black text-black uppercase mb-3">📊 Sua Hidratação Diária:</h4>
              <div className="bg-cyan-500 p-4 border-2 border-black mb-4">
                <div className="text-center">
                  <span className="font-black text-4xl text-white">
                    {resultado.litros}L
                  </span>
                  <p className="text-white font-bold text-sm">por dia</p>
                </div>
              </div>
              
              <h5 className="font-black text-black uppercase mb-2 text-sm">Isso equivale a:</h5>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="bg-yellow-400 p-3 border-2 border-black">
                  <div className="font-black text-2xl text-black">{resultado.copos}</div>
                  <div className="text-xs font-bold text-black">copos (250ml)</div>
                </div>
                <div className="bg-lime-400 p-3 border-2 border-black">
                  <div className="font-black text-2xl text-black">{resultado.garrafas}</div>
                  <div className="text-xs font-bold text-black">garrafas (500ml)</div>
                </div>
              </div>
              <p className="text-xs text-gray-700 mt-3 font-bold">
                💡 Dica: Distribua ao longo do dia. Beba mais se usar creatina ou treinar.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
