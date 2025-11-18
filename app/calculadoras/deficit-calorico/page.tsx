'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CalculadoraWrapper } from '@/components/calculadoras/CalculadoraWrapper'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Alert } from '@/components/ui/Alert'
import { trackEvent } from '@/lib/analytics'

interface CaloriasResult {
  tmb: number
  tdee: number
  deficitLeve: number
  deficitModerado: number
  deficitAgressivo: number
  perdaSemanalLeve: string
  perdaSemanalModerado: string
  perdaSemanalAgressivo: string
  suplementos: Array<{nome: string; slug: string; razao: string}>
}

function calcularCalorias(peso: number, altura: number, idade: number, sexo: string, atividade: string): CaloriasResult {
  // TMB (Fórmula Mifflin-St Jeor)
  let tmb: number
  if (sexo === 'masculino') {
    tmb = (10 * peso) + (6.25 * altura * 100) - (5 * idade) + 5
  } else {
    tmb = (10 * peso) + (6.25 * altura * 100) - (5 * idade) - 161
  }

  // TDEE (TMB x fator de atividade)
  const fatores: {[key: string]: number} = {
    sedentario: 1.2,
    leve: 1.375,
    moderado: 1.55,
    intenso: 1.725,
    muitoIntenso: 1.9
  }

  const tdee = Math.round(tmb * fatores[atividade])

  // Deficits calóricos
  const deficitLeve = Math.round(tdee - 300)
  const deficitModerado = Math.round(tdee - 500)
  const deficitAgressivo = Math.round(tdee - 750)

  // Perda de peso semanal estimada (7700 kcal = 1kg)
  const perdaSemanalLeve = ((300 * 7) / 7700).toFixed(2)
  const perdaSemanalModerado = ((500 * 7) / 7700).toFixed(2)
  const perdaSemanalAgressivo = ((750 * 7) / 7700).toFixed(2)

  const suplementos = [
    { nome: 'Whey Protein', slug: 'proteina', razao: 'Preserva massa muscular durante deficit calórico' },
    { nome: 'Ômega-3', slug: 'omega-3', razao: 'Reduz inflamação e melhora saúde metabólica' },
    { nome: 'Vitamina D', slug: 'vitamina-d', razao: 'Evita deficiência comum em dietas restritivas' },
    { nome: 'Multivitamínico', slug: 'multivitaminico', razao: 'Cobre possíveis deficiências nutricionais' },
    { nome: 'Magnésio', slug: 'magnesio', razao: 'Melhora sono e recuperação' }
  ]

  return {
    tmb: Math.round(tmb),
    tdee,
    deficitLeve,
    deficitModerado,
    deficitAgressivo,
    perdaSemanalLeve,
    perdaSemanalModerado,
    perdaSemanalAgressivo,
    suplementos
  }
}

export default function CalculadoraDeficitCaloricoPage() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState('masculino')
  const [atividade, setAtividade] = useState('moderado')
  const [resultado, setResultado] = useState<CaloriasResult | null>(null)

  const handleCalcular = () => {
    const pesoNum = parseFloat(peso)
    const alturaNum = parseFloat(altura)
    const idadeNum = parseInt(idade)

    if (isNaN(pesoNum) || isNaN(alturaNum) || isNaN(idadeNum)) {
      alert('Por favor, preencha todos os campos corretamente')
      return
    }

    if (pesoNum < 30 || pesoNum > 300 || alturaNum < 1.0 || alturaNum > 2.5 || idadeNum < 18 || idadeNum > 120) {
      alert('Valores fora dos limites aceitáveis')
      return
    }

    const result = calcularCalorias(pesoNum, alturaNum, idadeNum, sexo, atividade)
    setResultado(result)

    trackEvent('calculator_used', {
      calculator_type: 'deficit_calorico',
      tdee: result.tdee,
      sexo,
      atividade
    })
  }

  const handleReset = () => {
    setPeso('')
    setAltura('')
    setIdade('')
    setSexo('masculino')
    setAtividade('moderado')
    setResultado(null)
  }

  return (
    <CalculadoraWrapper
      title="Calculadora de Deficit Calórico"
      description="Calcule suas calorias de manutenção e deficit para perda de peso saudável"
      emoji="🔥"
    >
      <div className="space-y-6">
        {/* Formulário */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-black mb-2 uppercase">Peso (kg)</label>
            <Input type="number" placeholder="Ex: 70" value={peso} onChange={(e) => setPeso(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-bold text-black mb-2 uppercase">Altura (m)</label>
            <Input type="number" placeholder="Ex: 1.75" value={altura} onChange={(e) => setAltura(e.target.value)} step="0.01" />
          </div>
          <div>
            <label className="block text-sm font-bold text-black mb-2 uppercase">Idade</label>
            <Input type="number" placeholder="Ex: 30" value={idade} onChange={(e) => setIdade(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-bold text-black mb-2 uppercase">Sexo</label>
            <select className="w-full px-3 py-2 border-2 border-black rounded font-bold bg-white" value={sexo} onChange={(e) => setSexo(e.target.value)}>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-black mb-2 uppercase">Nível de Atividade</label>
            <select className="w-full px-3 py-2 border-2 border-black rounded font-bold bg-white" value={atividade} onChange={(e) => setAtividade(e.target.value)}>
              <option value="sedentario">Sedentário (pouco ou nenhum exercício)</option>
              <option value="leve">Leve (exercício 1-3x/semana)</option>
              <option value="moderado">Moderado (exercício 3-5x/semana)</option>
              <option value="intenso">Intenso (exercício 6-7x/semana)</option>
              <option value="muitoIntenso">Muito Intenso (2x/dia ou trabalho físico)</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3">
          <Button onClick={handleCalcular} className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase">
            Calcular Calorias
          </Button>
          {resultado && (
            <Button onClick={handleReset} variant="outline" className="uppercase font-bold">Limpar</Button>
          )}
        </div>

        {/* Resultado */}
        {resultado && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Métricas Principais */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-4 border-black">
                <CardContent className="p-6 text-center">
                  <div className="text-sm font-bold text-gray-600 mb-1 uppercase">TMB (Taxa Metabólica Basal)</div>
                  <div className="text-4xl font-black text-black">{resultado.tmb}</div>
                  <div className="text-xs text-gray-600 mt-1">kcal/dia em repouso</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-100 to-green-200 border-4 border-black">
                <CardContent className="p-6 text-center">
                  <div className="text-sm font-bold text-gray-600 mb-1 uppercase">TDEE (Gasto Total)</div>
                  <div className="text-4xl font-black text-black">{resultado.tdee}</div>
                  <div className="text-xs text-gray-600 mt-1">kcal/dia com atividade</div>
                </CardContent>
              </Card>
            </div>

            {/* Opções de Deficit */}
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-black text-black mb-4 uppercase text-xl">🎯 Opções de Deficit Calórico</h3>
              <div className="space-y-3">
                <div className="bg-green-100 border-2 border-black p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-black">Deficit Leve (-300 kcal)</h4>
                    <Badge variant="success">Recomendado</Badge>
                  </div>
                  <div className="text-3xl font-black text-black mb-2">{resultado.deficitLeve} kcal/dia</div>
                  <p className="text-sm text-gray-700">Perda estimada: ~{resultado.perdaSemanalLeve}kg/semana</p>
                  <p className="text-xs text-gray-600 mt-2">✓ Mais sustentável | ✓ Preserva massa muscular | ✓ Menos fome</p>
                </div>

                <div className="bg-yellow-100 border-2 border-black p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-black">Deficit Moderado (-500 kcal)</h4>
                    <Badge variant="warning">Moderado</Badge>
                  </div>
                  <div className="text-3xl font-black text-black mb-2">{resultado.deficitModerado} kcal/dia</div>
                  <p className="text-sm text-gray-700">Perda estimada: ~{resultado.perdaSemanalModerado}kg/semana</p>
                  <p className="text-xs text-gray-600 mt-2">⚠️ Requer disciplina | ⚠️ Pode causar fome | ✓ Resultados mais rápidos</p>
                </div>

                <div className="bg-red-100 border-2 border-black p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-black">Deficit Agressivo (-750 kcal)</h4>
                    <Badge variant="danger">Avançado</Badge>
                  </div>
                  <div className="text-3xl font-black text-black mb-2">{resultado.deficitAgressivo} kcal/dia</div>
                  <p className="text-sm text-gray-700">Perda estimada: ~{resultado.perdaSemanalAgressivo}kg/semana</p>
                  <p className="text-xs text-gray-600 mt-2">❌ Não sustentável | ❌ Risco de perder músculo | ❌ Só curto prazo</p>
                </div>
              </div>
            </div>

            {/* Suplementos */}
            <div className="bg-pink-50 border-2 border-black p-6">
              <h3 className="font-black text-black mb-4 uppercase text-xl">💊 Suplementos para Deficit Calórico</h3>
              <div className="space-y-3">
                {resultado.suplementos.map((sup, idx) => (
                  <div key={idx} className="bg-white border-2 border-black p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-black">{sup.nome}</h4>
                      <Link href={`/nutrientes/${sup.slug}`}>
                        <Badge variant="neutral" className="uppercase text-xs">Ver Detalhes</Badge>
                      </Link>
                    </div>
                    <p className="text-sm text-gray-600">{sup.razao}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Alert variant="info">
              <p className="font-bold mb-2">Quer um plano completo de emagrecimento?</p>
              <p className="text-sm mb-4">Faça nossa avaliação e descubra TODOS os nutrientes que você precisa!</p>
              <Link href="/avaliacao">
                <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold uppercase">
                  Fazer Avaliação Completa
                </Button>
              </Link>
            </Alert>
          </div>
        )}
      </div>
    </CalculadoraWrapper>
  )
}
