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

interface VitaminaDResult {
  producaoDiaria: number
  percentualNecessidade: number
  categoria: string
  cor: string
  recomendacao: string
  suplementacaoNecessaria: boolean
  doseSugerida: number
  tempExposicaoIdeal: string
  melhorHorario: string
  dicas: string[]
}

function calcularVitaminaD(
  tempoExposicao: number,
  areaExposta: string,
  tonePele: string,
  latitude: string,
  estacao: string
): VitaminaDResult {
  // Produção base em UI (unidades internacionais)
  let producao = 0

  // Fator de área exposta
  const fatoresArea: {[key: string]: number} = {
    rostoMaos: 0.3,  // 10% do corpo
    bracosPernas: 0.6, // 30% do corpo
    corpoTodo: 1.0     // 70%+ do corpo
  }

  // Fator de tom de pele (melanina reduz produção)
  const fatoresPele: {[key: string]: number} = {
    clara: 1.0,
    media: 0.7,
    escura: 0.5,
    muitoEscura: 0.3
  }

  // Fator de latitude (ângulo solar)
  const fatoresLatitude: {[key: string]: number} = {
    norte: 0.5,      // >23°S (menos sol direto)
    nordeste: 0.9,   // 0-15°S (sol forte ano todo)
    centro: 0.8,     // 15-20°S
    sudeste: 0.7,    // 20-25°S
    sul: 0.6         // >25°S (menos sol no inverno)
  }

  // Fator de estação
  const fatoresEstacao: {[key: string]: number} = {
    verao: 1.2,
    primavera: 1.0,
    outono: 0.8,
    inverno: 0.5
  }

  // Cálculo (assume 200 UI/min em condições ideais)
  producao = tempoExposicao * 200 * fatoresArea[areaExposta] * fatoresPele[tonePele] * fatoresLatitude[latitude] * fatoresEstacao[estacao]

  // Necessidade diária: 2000-4000 UI
  const necessidadeMedia = 3000
  const percentualNecessidade = Math.round((producao / necessidadeMedia) * 100)

  let categoria: string
  let cor: string
  let recomendacao: string
  let suplementacaoNecessaria: boolean
  let doseSugerida: number

  if (percentualNecessidade >= 80) {
    categoria = 'Excelente'
    cor = 'success'
    recomendacao = 'Sua exposição solar está adequada! Continue assim.'
    suplementacaoNecessaria = false
    doseSugerida = 0
  } else if (percentualNecessidade >= 50) {
    categoria = 'Moderada'
    cor = 'warning'
    recomendacao = 'Você produz alguma vitamina D, mas pode se beneficiar de suplementação leve.'
    suplementacaoNecessaria = true
    doseSugerida = 1000
  } else if (percentualNecessidade >= 25) {
    categoria = 'Baixa'
    cor = 'warning'
    recomendacao = 'Sua produção é insuficiente. Suplementação é altamente recomendada.'
    suplementacaoNecessaria = true
    doseSugerida = 2000
  } else {
    categoria = 'Muito Baixa'
    cor = 'danger'
    recomendacao = 'Produção muito baixa. Suplementação é essencial!'
    suplementacaoNecessaria = true
    doseSugerida = 4000
  }

  // Tempo ideal de exposição (ajustado por fatores)
  const minutosPara1000UI = Math.round(1000 / (200 * fatoresArea[areaExposta] * fatoresPele[tonePele] * fatoresLatitude[latitude] * fatoresEstacao[estacao]))
  const tempExposicaoIdeal = `${minutosPara1000UI}-${minutosPara1000UI * 3} minutos`

  const melhorHorario = latitude === 'sul' && estacao === 'inverno'
    ? '11h-13h (sol mais forte no inverno)'
    : '10h-11h ou 15h-16h (evite 11h-15h)'

  const dicas = [
    'Nunca use protetor solar durante exposição para vitamina D',
    'Após o tempo ideal, use protetor solar',
    'Exponha braços e pernas sempre que possível',
    'Janelas de vidro bloqueiam raios UVB (não produz vitamina D)',
    'Quanto mais pele exposta, menor o tempo necessário',
    'Pessoas de pele escura precisam de 3-5x mais exposição',
    'No inverno, suplementação é quase sempre necessária',
    'Faça exame de sangue para verificar níveis (ideal: 30-50 ng/ml)'
  ]

  return {
    producaoDiaria: Math.round(producao),
    percentualNecessidade,
    categoria,
    cor,
    recomendacao,
    suplementacaoNecessaria,
    doseSugerida,
    tempExposicaoIdeal,
    melhorHorario,
    dicas
  }
}

export default function CalculadoraVitaminaDPage() {
  const [tempoExposicao, setTempoExposicao] = useState('')
  const [areaExposta, setAreaExposta] = useState('bracosPernas')
  const [tonePele, setTonePele] = useState('media')
  const [latitude, setLatitude] = useState('sudeste')
  const [estacao, setEstacao] = useState('verao')
  const [resultado, setResultado] = useState<VitaminaDResult | null>(null)

  const handleCalcular = () => {
    const tempo = parseInt(tempoExposicao)
    if (isNaN(tempo) || tempo <= 0 || tempo > 240) {
      alert('Tempo de exposição inválido (0-240 minutos)')
      return
    }

    const result = calcularVitaminaD(tempo, areaExposta, tonePele, latitude, estacao)
    setResultado(result)
    trackEvent('calculator_used', {
      calculator_type: 'vitamina_d',
      producao: result.producaoDiaria,
      categoria: result.categoria
    })
  }

  return (
    <CalculadoraWrapper
      title="Calculadora de Vitamina D"
      description="Estime sua produção de vitamina D baseado na exposição solar e localização"
      emoji="☀️"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-black mb-2 uppercase">Tempo de Exposição Solar Diária (minutos)</label>
            <Input type="number" placeholder="Ex: 15" value={tempoExposicao} onChange={(e) => setTempoExposicao(e.target.value)} />
            <p className="text-xs text-gray-600 mt-1">Tempo médio diário que você fica no sol SEM protetor solar</p>
          </div>

          <div>
            <label className="block text-sm font-bold text-black mb-2 uppercase">Área do Corpo Exposta</label>
            <select className="w-full px-3 py-2 border-2 border-black rounded font-bold bg-white" value={areaExposta} onChange={(e) => setAreaExposta(e.target.value)}>
              <option value="rostoMaos">Apenas rosto e mãos</option>
              <option value="bracosPernas">Braços e pernas (recomendado)</option>
              <option value="corpoTodo">Corpo todo (praia, piscina)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-black mb-2 uppercase">Tom de Pele</label>
            <select className="w-full px-3 py-2 border-2 border-black rounded font-bold bg-white" value={tonePele} onChange={(e) => setTonePele(e.target.value)}>
              <option value="clara">Clara (queima fácil)</option>
              <option value="media">Média (morena clara)</option>
              <option value="escura">Escura (morena)</option>
              <option value="muitoEscura">Muito escura (preta)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-black mb-2 uppercase">Região do Brasil</label>
            <select className="w-full px-3 py-2 border-2 border-black rounded font-bold bg-white" value={latitude} onChange={(e) => setLatitude(e.target.value)}>
              <option value="norte">Norte (AM, PA, AC, RR, AP, RO, TO)</option>
              <option value="nordeste">Nordeste (MA, PI, CE, RN, PB, PE, AL, SE, BA)</option>
              <option value="centro">Centro-Oeste (MT, MS, GO, DF)</option>
              <option value="sudeste">Sudeste (SP, RJ, MG, ES)</option>
              <option value="sul">Sul (PR, SC, RS)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-black mb-2 uppercase">Estação do Ano Atual</label>
            <select className="w-full px-3 py-2 border-2 border-black rounded font-bold bg-white" value={estacao} onChange={(e) => setEstacao(e.target.value)}>
              <option value="verao">Verão (Dez-Mar)</option>
              <option value="outono">Outono (Mar-Jun)</option>
              <option value="inverno">Inverno (Jun-Set)</option>
              <option value="primavera">Primavera (Set-Dez)</option>
            </select>
          </div>
        </div>

        <Button onClick={handleCalcular} className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold uppercase">
          Calcular Vitamina D
        </Button>

        {resultado && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="bg-gradient-to-br from-yellow-100 to-yellow-200 border-4 border-black">
              <CardContent className="p-6 text-center">
                <div className="text-6xl font-black text-black mb-2">{resultado.producaoDiaria} UI</div>
                <p className="text-lg text-gray-700 mb-2">Produção Diária Estimada</p>
                <Badge variant={resultado.cor as 'success' | 'warning' | 'danger'} className="text-sm px-4 py-2 font-black uppercase mb-2">
                  {resultado.categoria}
                </Badge>
                <div className="text-sm text-gray-700">
                  {resultado.percentualNecessidade}% da necessidade diária (3000 UI)
                </div>
              </CardContent>
            </Card>

            <Alert variant={resultado.suplementacaoNecessaria ? 'warning' : 'success'}>
              <p className="font-bold mb-2">{resultado.recomendacao}</p>
              {resultado.suplementacaoNecessaria && (
                <p className="text-sm">
                  <strong>Dose sugerida:</strong> {resultado.doseSugerida} UI/dia de suplemento de vitamina D3
                </p>
              )}
            </Alert>

            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-black text-black mb-4 uppercase text-xl">☀️ Exposição Solar Ideal</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-bold text-gray-600 mb-1">Tempo Recomendado:</div>
                  <div className="text-2xl font-black text-black">{resultado.tempExposicaoIdeal}</div>
                  <p className="text-xs text-gray-600 mt-1">Para produzir ~1000-3000 UI/dia</p>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-600 mb-1">Melhor Horário:</div>
                  <div className="text-lg font-bold text-black">{resultado.melhorHorario}</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-black p-6">
              <h3 className="font-black text-black mb-4 uppercase text-xl">💡 Dicas Importantes</h3>
              <div className="space-y-2">
                {resultado.dicas.map((dica, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-yellow-600 font-bold mt-0.5">☀️</span>
                    <span className="text-gray-700">{dica}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-pink-50 border-2 border-black p-6">
              <h3 className="font-black text-black mb-4 uppercase text-xl">💊 Suplementação de Vitamina D</h3>
              <div className="bg-white border-2 border-black p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold text-black text-lg">Vitamina D3 (Colecalciferol)</h4>
                    {resultado.suplementacaoNecessaria && (
                      <Badge variant="warning" className="mt-2">Suplementação Recomendada</Badge>
                    )}
                  </div>
                  <Link href="/nutrientes/vitamina-d">
                    <Badge variant="neutral" className="uppercase text-xs">Ver Detalhes</Badge>
                  </Link>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Dose ideal:</strong> {resultado.doseSugerida > 0 ? `${resultado.doseSugerida} UI/dia` : 'Não necessária (exposição solar suficiente)'}</p>
                  <p><strong>Melhor forma:</strong> D3 (mais eficaz que D2)</p>
                  <p><strong>Quando tomar:</strong> Junto com refeição que contenha gordura</p>
                  <p><strong>Segurança:</strong> Até 4000 UI/dia é seguro sem supervisão médica</p>
                  <p className="text-xs text-gray-600 mt-2">⚠️ Faça exame de 25(OH)D para verificar seus níveis reais (ideal: 30-50 ng/ml)</p>
                </div>
              </div>
            </div>

            <Alert variant="info">
              <p className="font-bold mb-2">Quer saber TODOS os nutrientes que você precisa?</p>
              <p className="text-sm mb-4">Faça nossa avaliação completa e receba recomendações personalizadas!</p>
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
