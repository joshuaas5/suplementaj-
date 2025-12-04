'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export function CalculadoraCalorias() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState<'M' | 'F'>('M')
  const [atividade, setAtividade] = useState('1.2')
  const [resultado, setResultado] = useState<{
    tmb: number
    manutencao: number
    perder: number
    ganhar: number
  } | null>(null)

  const calcular = () => {
    const pesoNum = parseFloat(peso)
    const alturaNum = parseFloat(altura)
    const idadeNum = parseFloat(idade)
    const fatorAtividade = parseFloat(atividade)

    if (pesoNum > 0 && alturaNum > 0 && idadeNum > 0) {
      // Fórmula de Mifflin-St Jeor (mais precisa)
      let tmb: number
      if (sexo === 'M') {
        tmb = (10 * pesoNum) + (6.25 * alturaNum) - (5 * idadeNum) + 5
      } else {
        tmb = (10 * pesoNum) + (6.25 * alturaNum) - (5 * idadeNum) - 161
      }

      const manutencao = tmb * fatorAtividade
      const perder = manutencao - 500 // Déficit para perder ~0.5kg/semana
      const ganhar = manutencao + 300 // Superávit para ganhar massa

      setResultado({
        tmb: Math.round(tmb),
        manutencao: Math.round(manutencao),
        perder: Math.round(perder),
        ganhar: Math.round(ganhar)
      })
    }
  }

  return (
    <Card className="bg-orange-400">
      <CardHeader>
        <CardTitle className="text-2xl text-black">🔥 Calculadora de Calorias</CardTitle>
        <p className="text-black font-bold text-sm">
          Taxa Metabólica Basal + Gasto Diário
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Sexo */}
        <div>
          <label className="block text-black font-black uppercase text-sm mb-2">Sexo</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setSexo('M')}
              className={`p-3 border-4 border-black font-bold text-lg transition-all ${
                sexo === 'M' 
                  ? 'bg-black text-orange-400' 
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              ♂️ Masculino
            </button>
            <button
              type="button"
              onClick={() => setSexo('F')}
              className={`p-3 border-4 border-black font-bold text-lg transition-all ${
                sexo === 'F' 
                  ? 'bg-black text-orange-400' 
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              ♀️ Feminino
            </button>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block text-black font-black uppercase text-xs mb-1">Peso (kg)</label>
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              placeholder="70"
              className="w-full p-2 border-4 border-black bg-white text-black font-bold focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-black font-black uppercase text-xs mb-1">Altura (cm)</label>
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder="175"
              className="w-full p-2 border-4 border-black bg-white text-black font-bold focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-black font-black uppercase text-xs mb-1">Idade</label>
            <input
              type="number"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              placeholder="30"
              className="w-full p-2 border-4 border-black bg-white text-black font-bold focus:outline-none"
            />
          </div>
        </div>

        {/* Nível de Atividade */}
        <div>
          <label className="block text-black font-black uppercase text-sm mb-2">
            Nível de Atividade
          </label>
          <select
            value={atividade}
            onChange={(e) => setAtividade(e.target.value)}
            className="w-full p-3 border-4 border-black bg-white text-black font-bold focus:outline-none"
          >
            <option value="1.2">Sedentário (escritório, sem exercício)</option>
            <option value="1.375">Leve (exercício 1-3x/semana)</option>
            <option value="1.55">Moderado (exercício 3-5x/semana)</option>
            <option value="1.725">Intenso (exercício 6-7x/semana)</option>
            <option value="1.9">Muito Intenso (atleta, trabalho braçal)</option>
          </select>
        </div>

        {/* Botão */}
        <Button
          onClick={calcular}
          variant="primary"
          size="lg"
          className="w-full text-lg"
        >
          Calcular Calorias
        </Button>

        {/* Resultado */}
        {resultado && (
          <div className="space-y-3 mt-4">
            {/* TMB */}
            <div className="bg-white border-4 border-black p-4">
              <div className="text-sm font-black text-black uppercase mb-1">🔬 Taxa Metabólica Basal (TMB)</div>
              <div className="text-3xl font-black text-black">{resultado.tmb} kcal</div>
              <p className="text-xs text-black font-bold">Calorias que seu corpo gasta em repouso</p>
            </div>

            {/* Gasto Total */}
            <div className="bg-lime-400 border-4 border-black p-4">
              <div className="text-sm font-black text-black uppercase mb-1">⚡ Gasto Diário Total (TDEE)</div>
              <div className="text-4xl font-black text-black">{resultado.manutencao} kcal</div>
              <p className="text-xs text-black font-bold">Para manter seu peso atual</p>
            </div>

            {/* Objetivos */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-cyan-400 border-4 border-black p-3 text-center">
                <div className="text-xs font-black text-black uppercase">📉 Perder peso</div>
                <div className="text-2xl font-black text-black">{resultado.perder}</div>
                <div className="text-xs text-black font-bold">kcal/dia</div>
              </div>
              <div className="bg-pink-400 border-4 border-black p-3 text-center">
                <div className="text-xs font-black text-black uppercase">📈 Ganhar massa</div>
                <div className="text-2xl font-black text-black">{resultado.ganhar}</div>
                <div className="text-xs text-black font-bold">kcal/dia</div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
