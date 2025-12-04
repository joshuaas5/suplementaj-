'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export function CalculadoraAgua() {
  const [peso, setPeso] = useState('')
  const [sexo, setSexo] = useState<'M' | 'F'>('M')
  const [atividade, setAtividade] = useState<'sedentario' | 'leve' | 'moderado' | 'intenso'>('moderado')
  const [clima, setClima] = useState<'frio' | 'ameno' | 'quente'>('ameno')
  const [resultado, setResultado] = useState<{
    litros: number
    copos: number
    garrafas: number
    base: string
  } | null>(null)

  const calcular = () => {
    const pesoNum = parseFloat(peso)
    if (isNaN(pesoNum) || pesoNum <= 0) return

    // Base científica: Institute of Medicine (IOM) recomenda:
    // Homens: 3.7L/dia (incluindo alimentos ~20%)
    // Mulheres: 2.7L/dia (incluindo alimentos ~20%)
    // Ajuste por peso: ~30-35ml/kg para adultos saudáveis
    
    // Fórmula base ajustada por sexo
    let mlPorKg = sexo === 'M' ? 35 : 31 // Homens precisam mais devido maior massa muscular

    // Ajuste por atividade física (baseado em estudos de sudorese)
    // Fonte: American College of Sports Medicine
    switch (atividade) {
      case 'sedentario':
        mlPorKg -= 5
        break
      case 'leve':
        // mantém base
        break
      case 'moderado':
        mlPorKg += 5
        break
      case 'intenso':
        mlPorKg += 15 // Atletas podem perder 1-2L/hora em exercício
        break
    }

    // Ajuste por clima (termorregulaçao)
    if (clima === 'quente') mlPorKg += 10
    else if (clima === 'frio') mlPorKg -= 3

    const totalMl = pesoNum * mlPorKg
    const litros = Math.round(totalMl / 100) / 10

    // Comparar com recomendações IOM
    const minIOM = sexo === 'M' ? 2.5 : 2.0 // Líquidos bebidos (excluindo alimentos)
    const maxIOM = sexo === 'M' ? 4.5 : 3.5

    setResultado({
      litros: Math.max(minIOM, Math.min(litros, maxIOM)), // Limitar entre min e max seguros
      copos: Math.round(totalMl / 250),
      garrafas: Math.round(totalMl / 500),
      base: sexo === 'M' ? '3.7L' : '2.7L'
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
          Baseado nas recomendações do Institute of Medicine (IOM)
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Sexo */}
          <div>
            <label className="block text-black font-black uppercase text-sm mb-2">Sexo Biológico</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSexo('M')}
                className={`p-3 border-4 border-black font-bold transition-all ${
                  sexo === 'M' ? 'bg-black text-blue-400' : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                ♂️ Masculino
              </button>
              <button
                type="button"
                onClick={() => setSexo('F')}
                className={`p-3 border-4 border-black font-bold transition-all ${
                  sexo === 'F' ? 'bg-black text-blue-400' : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                ♀️ Feminino
              </button>
            </div>
          </div>

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
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'sedentario', label: '🛋️ Sedentário', desc: 'Sem exercício' },
                { id: 'leve', label: '🚶 Leve', desc: '1-2x/semana' },
                { id: 'moderado', label: '🏃 Moderado', desc: '3-5x/semana' },
                { id: 'intenso', label: '🏋️ Intenso', desc: '6-7x/semana' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setAtividade(opt.id as typeof atividade)}
                  className={`p-2 border-4 border-black font-bold text-sm transition-all text-left ${
                    atividade === opt.id
                      ? 'bg-black text-blue-400'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  <div>{opt.label}</div>
                  <div className={`text-xs ${atividade === opt.id ? 'text-blue-300' : 'text-gray-500'}`}>{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Clima */}
          <div>
            <label className="block text-black font-black uppercase text-sm mb-2">
              Clima
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
          <Button onClick={calcular} variant="primary" size="lg" className="w-full">
            Calcular Hidratação
          </Button>

          {/* Resultado */}
          {resultado && (
            <div className="bg-white border-4 border-black p-4 mt-4">
              <h4 className="font-black text-black uppercase mb-3">📊 Resultado:</h4>
              <div className="bg-cyan-500 p-4 border-2 border-black mb-4">
                <div className="text-center">
                  <span className="font-black text-4xl text-white">{resultado.litros}L</span>
                  <p className="text-white font-bold text-sm">de água por dia</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-center mb-3">
                <div className="bg-yellow-400 p-3 border-2 border-black">
                  <div className="font-black text-2xl text-black">{resultado.copos}</div>
                  <div className="text-xs font-bold text-black">copos (250ml)</div>
                </div>
                <div className="bg-lime-400 p-3 border-2 border-black">
                  <div className="font-black text-2xl text-black">{resultado.garrafas}</div>
                  <div className="text-xs font-bold text-black">garrafas (500ml)</div>
                </div>
              </div>

              <div className="bg-gray-100 p-2 border-2 border-black text-xs">
                <p className="text-gray-700">📚 <strong>Fonte:</strong> IOM recomenda {resultado.base}/dia total para {sexo === 'M' ? 'homens' : 'mulheres'}.</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
