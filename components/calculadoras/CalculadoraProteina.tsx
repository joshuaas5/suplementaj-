'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export function CalculadoraProteina() {
  const [peso, setPeso] = useState('')
  const [sexo, setSexo] = useState<'M' | 'F'>('M')
  const [idade, setIdade] = useState<'jovem' | 'adulto' | 'idoso'>('adulto')
  const [objetivo, setObjetivo] = useState<'manter' | 'ganhar' | 'perder'>('manter')
  const [atividade, setAtividade] = useState<'sedentario' | 'moderado' | 'intenso'>('moderado')
  const [resultado, setResultado] = useState<{
    minimo: number
    ideal: number
    maximo: number
    porRefeicao: number
    fonte: string
  } | null>(null)

  const calcular = () => {
    const pesoNum = parseFloat(peso)
    if (isNaN(pesoNum) || pesoNum <= 0) return

    // Base científica: ISSN (International Society of Sports Nutrition) 2017
    // RDA básico: 0.8g/kg (sedentário saudável)
    // Atletas: 1.4-2.0g/kg
    // Idosos: 1.0-1.2g/kg (sarcopenia prevention)
    // Perda de peso: 1.6-2.4g/kg (preservar massa muscular)
    
    let fatorMin = 0.8
    let fatorIdeal = 1.0
    let fatorMax = 1.2
    let fonte = 'RDA (Recommended Dietary Allowance)'

    // Ajuste por idade (idosos precisam mais - Journal of Gerontology)
    if (idade === 'idoso') {
      fatorMin = 1.0
      fatorIdeal = 1.2
      fatorMax = 1.5
      fonte = 'PROT-AGE Study Group'
    }

    // Ajuste por objetivo
    if (objetivo === 'ganhar') {
      fatorMin = 1.6
      fatorIdeal = 1.8
      fatorMax = 2.2
      fonte = 'ISSN Position Stand (2017)'
    } else if (objetivo === 'perder') {
      // Alta proteína preserva músculo em déficit calórico
      fatorMin = 1.6
      fatorIdeal = 2.0
      fatorMax = 2.4
      fonte = 'Meta-análise Helms et al. (2014)'
    }

    // Ajuste por atividade
    if (atividade === 'intenso') {
      fatorMin += 0.2
      fatorIdeal += 0.2
      fatorMax += 0.2
    } else if (atividade === 'sedentario' && objetivo === 'manter') {
      // Sedentários mantendo peso = RDA é suficiente
      fatorMin = 0.8
      fatorIdeal = 1.0
      fatorMax = 1.2
    }

    // Mulheres podem ter necessidade ~10% menor (menor massa muscular média)
    // Mas durante gestação/lactação seria maior
    const ajusteSexo = sexo === 'F' ? 0.95 : 1.0

    const minimo = Math.round(pesoNum * fatorMin * ajusteSexo)
    const ideal = Math.round(pesoNum * fatorIdeal * ajusteSexo)
    const maximo = Math.round(pesoNum * fatorMax * ajusteSexo)

    // Distribuição: 20-40g por refeição para síntese proteica ótima (Schoenfeld 2018)
    const porRefeicao = Math.round(ideal / 4) // 4 refeições

    setResultado({ minimo, ideal, maximo, porRefeicao, fonte })
  }

  return (
    <Card className="bg-lime-400 hover:shadow-[8px_8px_0_0_#000] transition-all">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl text-black">🥩 Calculadora de Proteína</CardTitle>
          <Badge variant="info">Gratuito</Badge>
        </div>
        <p className="text-black font-bold text-sm">
          Baseado em estudos do ISSN e meta-análises
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Sexo */}
          <div>
            <label className="block text-black font-black uppercase text-sm mb-2">Sexo</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSexo('M')}
                className={`p-2 border-4 border-black font-bold transition-all ${
                  sexo === 'M' ? 'bg-black text-lime-400' : 'bg-white text-black'
                }`}
              >
                ♂️ Masculino
              </button>
              <button
                type="button"
                onClick={() => setSexo('F')}
                className={`p-2 border-4 border-black font-bold transition-all ${
                  sexo === 'F' ? 'bg-black text-lime-400' : 'bg-white text-black'
                }`}
              >
                ♀️ Feminino
              </button>
            </div>
          </div>

          {/* Peso */}
          <div>
            <label className="block text-black font-black uppercase text-sm mb-2">Peso (kg)</label>
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              placeholder="Ex: 70"
              className="w-full p-3 border-4 border-black text-black font-bold text-lg focus:outline-none"
            />
          </div>

          {/* Idade */}
          <div>
            <label className="block text-black font-black uppercase text-sm mb-2">Faixa Etária</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'jovem', label: '18-30' },
                { id: 'adulto', label: '31-59' },
                { id: 'idoso', label: '60+' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setIdade(opt.id as typeof idade)}
                  className={`p-2 border-4 border-black font-bold text-sm ${
                    idade === opt.id ? 'bg-black text-lime-400' : 'bg-white text-black'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Objetivo */}
          <div>
            <label className="block text-black font-black uppercase text-sm mb-2">Objetivo</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'perder', label: '📉 Emagrecer' },
                { id: 'manter', label: '⚖️ Manter' },
                { id: 'ganhar', label: '💪 Hipertrofia' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setObjetivo(opt.id as typeof objetivo)}
                  className={`p-2 border-4 border-black font-bold text-sm ${
                    objetivo === opt.id ? 'bg-black text-lime-400' : 'bg-white text-black'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Atividade */}
          <div>
            <label className="block text-black font-black uppercase text-sm mb-2">Treino</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'sedentario', label: 'Não treino' },
                { id: 'moderado', label: '2-4x/sem' },
                { id: 'intenso', label: '5-7x/sem' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setAtividade(opt.id as typeof atividade)}
                  className={`p-2 border-4 border-black font-bold text-sm ${
                    atividade === opt.id ? 'bg-black text-lime-400' : 'bg-white text-black'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <Button onClick={calcular} variant="success" size="lg" className="w-full">
            Calcular Proteína
          </Button>

          {resultado && (
            <div className="bg-white border-4 border-black p-4 mt-4">
              <div className="bg-pink-500 p-4 border-2 border-black mb-4 text-center">
                <p className="text-white font-bold text-sm uppercase">Sua necessidade diária</p>
                <span className="font-black text-4xl text-white">{resultado.ideal}g</span>
                <p className="text-white text-xs mt-1">faixa: {resultado.minimo}g - {resultado.maximo}g</p>
              </div>

              <div className="bg-yellow-400 p-3 border-2 border-black mb-3 text-center">
                <p className="font-bold text-black text-sm">Por refeição (4x/dia)</p>
                <span className="font-black text-2xl text-black">{resultado.porRefeicao}g</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center mb-3">
                <div className="bg-gray-100 p-2 border-2 border-black">
                  <div className="font-black text-lg text-black">{Math.round(resultado.ideal / 6)}</div>
                  <div className="text-xs text-black">ovos</div>
                </div>
                <div className="bg-gray-100 p-2 border-2 border-black">
                  <div className="font-black text-lg text-black">{Math.round(resultado.ideal / 0.31)}g</div>
                  <div className="text-xs text-black">frango</div>
                </div>
                <div className="bg-gray-100 p-2 border-2 border-black">
                  <div className="font-black text-lg text-black">{Math.round(resultado.ideal / 25)}</div>
                  <div className="text-xs text-black">scoops whey</div>
                </div>
              </div>

              <p className="text-xs text-gray-600 bg-gray-100 p-2 border border-black">
                📚 <strong>Fonte:</strong> {resultado.fonte}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
