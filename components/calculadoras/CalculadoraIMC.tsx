'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export function CalculadoraIMC() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState<{
    imc: number
    classificacao: string
    cor: string
    descricao: string
    emoji: string
  } | null>(null)

  const calcular = () => {
    const pesoNum = parseFloat(peso)
    const alturaNum = parseFloat(altura) / 100 // converter cm para metros

    if (pesoNum > 0 && alturaNum > 0) {
      const imc = pesoNum / (alturaNum * alturaNum)
      
      let classificacao = ''
      let cor = ''
      let descricao = ''
      let emoji = ''

      if (imc < 18.5) {
        classificacao = 'Abaixo do peso'
        cor = 'bg-cyan-400'
        descricao = 'Considere consultar um nutricionista para ganho de peso saudável.'
        emoji = '⚠️'
      } else if (imc < 25) {
        classificacao = 'Peso normal'
        cor = 'bg-lime-400'
        descricao = 'Parabéns! Mantenha hábitos saudáveis.'
        emoji = '✅'
      } else if (imc < 30) {
        classificacao = 'Sobrepeso'
        cor = 'bg-yellow-400'
        descricao = 'Atenção à alimentação e atividade física.'
        emoji = '⚡'
      } else if (imc < 35) {
        classificacao = 'Obesidade Grau I'
        cor = 'bg-orange-400'
        descricao = 'Consulte um profissional de saúde para orientação.'
        emoji = '🔶'
      } else if (imc < 40) {
        classificacao = 'Obesidade Grau II'
        cor = 'bg-pink-500'
        descricao = 'Acompanhamento médico é importante.'
        emoji = '🔴'
      } else {
        classificacao = 'Obesidade Grau III'
        cor = 'bg-pink-600'
        descricao = 'Procure acompanhamento multidisciplinar.'
        emoji = '🚨'
      }

      setResultado({ imc, classificacao, cor, descricao, emoji })
    }
  }

  return (
    <Card className="bg-pink-400">
      <CardHeader>
        <CardTitle className="text-2xl text-black">⚖️ Calculadora de IMC</CardTitle>
        <p className="text-black font-bold text-sm">
          Descubra seu Índice de Massa Corporal
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Input Peso */}
        <div>
          <label className="block text-black font-black uppercase text-sm mb-2">
            Seu peso (kg)
          </label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
            className="w-full p-3 border-4 border-black bg-white text-black font-bold text-lg focus:outline-none focus:ring-4 focus:ring-black"
          />
        </div>

        {/* Input Altura */}
        <div>
          <label className="block text-black font-black uppercase text-sm mb-2">
            Sua altura (cm)
          </label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 175"
            className="w-full p-3 border-4 border-black bg-white text-black font-bold text-lg focus:outline-none focus:ring-4 focus:ring-black"
          />
        </div>

        {/* Botão Calcular */}
        <Button
          onClick={calcular}
          variant="primary"
          size="lg"
          className="w-full text-lg"
        >
          Calcular IMC
        </Button>

        {/* Resultado */}
        {resultado && (
          <div className={`${resultado.cor} border-4 border-black p-4 mt-4`}>
            <div className="text-center">
              <div className="text-5xl font-black text-black mb-2">
                {resultado.emoji} {resultado.imc.toFixed(1)}
              </div>
              <div className="text-xl font-black text-black uppercase mb-2">
                {resultado.classificacao}
              </div>
              <p className="text-black font-bold text-sm">
                {resultado.descricao}
              </p>
            </div>

            {/* Tabela de Referência */}
            <div className="mt-4 bg-white border-2 border-black p-3">
              <p className="text-xs font-bold text-black uppercase mb-2">Tabela de Referência:</p>
              <div className="text-xs text-black space-y-1">
                <div className="flex justify-between"><span>Abaixo do peso:</span><span>&lt; 18.5</span></div>
                <div className="flex justify-between"><span>Normal:</span><span>18.5 - 24.9</span></div>
                <div className="flex justify-between"><span>Sobrepeso:</span><span>25 - 29.9</span></div>
                <div className="flex justify-between"><span>Obesidade I:</span><span>30 - 34.9</span></div>
                <div className="flex justify-between"><span>Obesidade II:</span><span>35 - 39.9</span></div>
                <div className="flex justify-between"><span>Obesidade III:</span><span>≥ 40</span></div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
