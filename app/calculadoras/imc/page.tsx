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

interface IMCResult {
  imc: number
  categoria: string
  cor: string
  descricao: string
  recomendacoes: string[]
  suplementos: Array<{
    nome: string
    slug: string
    razao: string
  }>
}

function calcularIMC(peso: number, altura: number): IMCResult {
  const imc = peso / (altura * altura)

  let categoria: string
  let cor: string
  let descricao: string
  let recomendacoes: string[]
  let suplementos: Array<{nome: string; slug: string; razao: string}>

  if (imc < 18.5) {
    categoria = 'Abaixo do Peso'
    cor = 'warning'
    descricao = 'Você está abaixo do peso ideal. Consulte um nutricionista para ganhar peso de forma saudável.'
    recomendacoes = [
      'Aumente gradualmente a ingestão calórica com alimentos nutritivos',
      'Priorize proteínas de qualidade em todas as refeições',
      'Considere suplementação para otimizar ganho de massa',
      'Faça exercícios de força para ganhar massa muscular',
      'Monitore deficiências nutricionais comuns'
    ]
    suplementos = [
      { nome: 'Proteína (Whey)', slug: 'proteina', razao: 'Facilita atingir meta proteica para ganho de massa' },
      { nome: 'Creatina', slug: 'creatina', razao: 'Aumenta força e massa muscular' },
      { nome: 'Ômega-3', slug: 'omega-3', razao: 'Reduz inflamação e melhora apetite' },
      { nome: 'Vitamina B12', slug: 'vitamina-b12', razao: 'Essencial para metabolismo energético' },
      { nome: 'Vitamina D', slug: 'vitamina-d', razao: 'Importante para saúde óssea e muscular' }
    ]
  } else if (imc < 25) {
    categoria = 'Peso Normal'
    cor = 'success'
    descricao = 'Parabéns! Você está dentro do peso ideal. Mantenha hábitos saudáveis.'
    recomendacoes = [
      'Mantenha uma alimentação balanceada e variada',
      'Pratique exercícios regularmente (150min/semana)',
      'Hidrate-se adequadamente (2-3L água/dia)',
      'Durma 7-9 horas por noite',
      'Faça check-ups preventivos anuais'
    ]
    suplementos = [
      { nome: 'Vitamina D', slug: 'vitamina-d', razao: 'Prevenção de deficiência comum' },
      { nome: 'Ômega-3', slug: 'omega-3', razao: 'Saúde cardiovascular e cerebral' },
      { nome: 'Magnésio', slug: 'magnesio', razao: 'Qualidade do sono e recuperação muscular' },
      { nome: 'Probióticos', slug: 'probioticos', razao: 'Saúde intestinal e imunidade' }
    ]
  } else if (imc < 30) {
    categoria = 'Sobrepeso'
    cor = 'warning'
    descricao = 'Você está acima do peso ideal. Pequenas mudanças podem fazer grande diferença.'
    recomendacoes = [
      'Crie um deficit calórico moderado (300-500 kcal/dia)',
      'Aumente consumo de proteínas e fibras',
      'Reduza alimentos ultraprocessados e açúcar',
      'Pratique exercícios aeróbicos e musculação',
      'Beba água antes das refeições'
    ]
    suplementos = [
      { nome: 'Ômega-3', slug: 'omega-3', razao: 'Reduz inflamação associada ao excesso de peso' },
      { nome: 'Vitamina D', slug: 'vitamina-d', razao: 'Comum deficiência em pessoas com sobrepeso' },
      { nome: 'Magnésio', slug: 'magnesio', razao: 'Melhora sensibilidade à insulina' },
      { nome: 'Probióticos', slug: 'probioticos', razao: 'Otimiza metabolismo e saúde intestinal' },
      { nome: 'Cromo', slug: 'cromo', razao: 'Ajuda no controle glicêmico' }
    ]
  } else {
    categoria = 'Obesidade'
    cor = 'danger'
    descricao = 'Obesidade aumenta risco de várias doenças. Procure acompanhamento profissional.'
    recomendacoes = [
      'Consulte um médico e nutricionista para plano personalizado',
      'Comece com pequenas mudanças sustentáveis',
      'Foque em alimentos integrais e nutritivos',
      'Inicie atividade física gradualmente',
      'Considere acompanhamento psicológico se necessário'
    ]
    suplementos = [
      { nome: 'Vitamina D', slug: 'vitamina-d', razao: 'Deficiência muito comum em obesidade' },
      { nome: 'Ômega-3', slug: 'omega-3', razao: 'Reduz inflamação crônica' },
      { nome: 'Magnésio', slug: 'magnesio', razao: 'Melhora sensibilidade à insulina' },
      { nome: 'Vitamina B12', slug: 'vitamina-b12', razao: 'Otimiza metabolismo energético' },
      { nome: 'Cromo', slug: 'cromo', razao: 'Auxilia controle de açúcar no sangue' }
    ]
  }

  return { imc, categoria, cor, descricao, recomendacoes, suplementos }
}

export default function CalculadoraIMCPage() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState<IMCResult | null>(null)

  const handleAlturaChange = (value: string) => {
    // Remove caracteres não numéricos exceto ponto
    const cleanValue = value.replace(/[^\d.]/g, '')

    // Se estiver vazio, só atualiza
    if (!cleanValue) {
      setAltura('')
      return
    }

    const numValue = parseFloat(cleanValue)

    // Se digitar >= 10 (ex: 175), assume que é cm e converte para metros
    if (numValue >= 10) {
      const metros = (numValue / 100).toFixed(2)
      setAltura(metros)
    } else {
      // Já está em metros, mantém
      setAltura(cleanValue)
    }
  }

  const handleCalcular = () => {
    const pesoNum = parseFloat(peso)
    const alturaNum = parseFloat(altura)

    if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
      alert('Por favor, preencha os campos corretamente')
      return
    }

    if (pesoNum < 30 || pesoNum > 300) {
      alert('Peso deve estar entre 30kg e 300kg')
      return
    }

    if (alturaNum < 1.0 || alturaNum > 2.5) {
      alert('Altura deve estar entre 1.0m e 2.5m')
      return
    }

    const result = calcularIMC(pesoNum, alturaNum)
    setResultado(result)

    trackEvent('calculator_used', {
      calculator_type: 'imc',
      imc_value: result.imc.toFixed(1),
      category: result.categoria
    })
  }

  const handleReset = () => {
    setPeso('')
    setAltura('')
    setResultado(null)
  }

  return (
    <CalculadoraWrapper
      title="Calculadora de IMC"
      description="Calcule seu Índice de Massa Corporal e receba recomendações personalizadas de suplementação"
      emoji="⚖️"
    >
      <div className="space-y-6">
        {/* Formulário */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-black mb-2 uppercase">
              Peso (kg)
            </label>
            <Input
              type="number"
              placeholder="Ex: 70"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              min="30"
              max="300"
              step="0.1"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-black mb-2 uppercase">
              Altura (digite em cm ou m)
            </label>
            <Input
              type="text"
              placeholder="Ex: 175 ou 1.75"
              value={altura}
              onChange={(e) => handleAlturaChange(e.target.value)}
            />
            <p className="text-xs text-gray-600 mt-1">
              Digite 175 (converte para 1.75m automaticamente)
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={handleCalcular}
            className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-bold uppercase"
          >
            Calcular IMC
          </Button>
          {resultado && (
            <Button
              onClick={handleReset}
              variant="outline"
              className="uppercase font-bold"
            >
              Limpar
            </Button>
          )}
        </div>

        {/* Resultado */}
        {resultado && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* IMC Card */}
            <Card className="bg-gradient-to-br from-cyan-100 to-cyan-200 border-4 border-black">
              <CardContent className="p-6 text-center">
                <div className="text-6xl font-black text-black mb-2">
                  {resultado.imc.toFixed(1)}
                </div>
                <Badge
                  variant={resultado.cor as 'success' | 'warning' | 'danger'}
                  className="text-lg px-4 py-2 font-black uppercase"
                >
                  {resultado.categoria}
                </Badge>
                <p className="mt-4 text-gray-700">{resultado.descricao}</p>
              </CardContent>
            </Card>

            {/* Tabela de Referência */}
            <div className="bg-white border-2 border-black p-4">
              <h3 className="font-black text-black mb-3 uppercase">Tabela de Referência</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Abaixo do peso</span>
                  <span className="font-bold">{'< 18.5'}</span>
                </div>
                <div className="flex justify-between bg-green-100 px-2 py-1">
                  <span>Peso normal</span>
                  <span className="font-bold">18.5 - 24.9</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobrepeso</span>
                  <span className="font-bold">25.0 - 29.9</span>
                </div>
                <div className="flex justify-between">
                  <span>Obesidade</span>
                  <span className="font-bold">≥ 30.0</span>
                </div>
              </div>
            </div>

            {/* Recomendações */}
            <div className="bg-yellow-50 border-2 border-black p-6">
              <h3 className="font-black text-black mb-4 uppercase text-xl">
                📋 Recomendações para Você
              </h3>
              <ul className="space-y-2">
                {resultado.recomendacoes.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suplementos Recomendados */}
            <div className="bg-pink-50 border-2 border-black p-6">
              <h3 className="font-black text-black mb-4 uppercase text-xl">
                💊 Suplementos Recomendados
              </h3>
              <div className="space-y-3">
                {resultado.suplementos.map((sup, idx) => (
                  <div key={idx} className="bg-white border-2 border-black p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-black">{sup.nome}</h4>
                      <Link href={`/nutrientes/${sup.slug}`}>
                        <Badge variant="neutral" className="uppercase text-xs">
                          Ver Detalhes
                        </Badge>
                      </Link>
                    </div>
                    <p className="text-sm text-gray-600">{sup.razao}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Alert variant="info">
              <p className="font-bold mb-2">Quer recomendações ainda mais personalizadas?</p>
              <p className="text-sm mb-4">
                Faça nossa avaliação completa e receba um plano detalhado com TODOS os nutrientes que você precisa!
              </p>
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
