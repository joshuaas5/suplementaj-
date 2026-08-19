'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { useCalculatorAnalytics } from '@/components/analytics/CalculatorAnalytics'

export function CalculadoraCreatina() {
  const trackComplete = useCalculatorAnalytics('creatina')
  const [peso, setPeso] = useState('')
  const [fase, setFase] = useState<'manutencao' | 'saturacao'>('manutencao')
  const [resultado, setResultado] = useState<{
    dose: number
    agua: number
    duracao?: string
  } | null>(null)

  const calcular = () => {
    const pesoNum = parseFloat(peso)
    if (isNaN(pesoNum) || pesoNum <= 0) return

    trackComplete()

    if (fase === 'manutencao') {
      // 0.03g a 0.05g por kg - usando 0.04g como média (ou mínimo de 3g)
      const dose = Math.max(3, Math.round(pesoNum * 0.04 * 10) / 10)
      const agua = Math.round(pesoNum * 35 / 100) * 100 // 35ml por kg, arredondado
      setResultado({ dose, agua: Math.max(2000, agua) })
    } else {
      // Fase de saturação: 0.3g por kg por 5-7 dias
      const dose = Math.round(pesoNum * 0.3 * 10) / 10
      const agua = Math.round(pesoNum * 40 / 100) * 100 // Mais água na saturação
      setResultado({ dose, agua: Math.max(2500, agua), duracao: '5-7 dias' })
    }
  }

  return (
    <Card className="bg-cyan-400 hover:shadow-[8px_8px_0_0_#000] transition-all">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl text-black">💪 Calculadora de Creatina</CardTitle>
          <Badge variant="success">Gratuito</Badge>
        </div>
        <p className="text-black font-bold text-sm">
          Descubra a dose ideal de creatina para o seu peso corporal
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

          {/* Seleção de Fase */}
          <div>
            <label className="block text-black font-black uppercase text-sm mb-2">
              Fase
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setFase('manutencao')}
                className={`p-3 border-4 border-black font-bold transition-all ${
                  fase === 'manutencao'
                    ? 'bg-black text-cyan-400'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                Manutenção
              </button>
              <button
                onClick={() => setFase('saturacao')}
                className={`p-3 border-4 border-black font-bold transition-all ${
                  fase === 'saturacao'
                    ? 'bg-black text-cyan-400'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                Saturação
              </button>
            </div>
          </div>

          {/* Botão Calcular */}
          <Button
            onClick={calcular}
            variant="primary"
            size="lg"
            className="w-full"
          >
            Calcular Minha Dose
          </Button>

          {/* Resultado */}
          {resultado && (
            <div className="bg-white border-4 border-black p-4 mt-4">
              <h4 className="font-black text-black uppercase mb-3">📊 Seu Resultado:</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-lime-400 p-3 border-2 border-black">
                  <span className="font-bold text-black">Dose diária:</span>
                  <span className="font-black text-2xl text-black">{resultado.dose}g</span>
                </div>
                <div className="flex justify-between items-center bg-blue-400 p-3 border-2 border-black">
                  <span className="font-bold text-black">Água mínima:</span>
                  <span className="font-black text-2xl text-black">{resultado.agua}ml</span>
                </div>
                {resultado.duracao && (
                  <div className="flex justify-between items-center bg-yellow-400 p-3 border-2 border-black">
                    <span className="font-bold text-black">Duração:</span>
                    <span className="font-black text-xl text-black">{resultado.duracao}</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-700 mt-3 font-bold">
                ⚠️ Consulte um profissional de saúde antes de iniciar qualquer suplementação.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
