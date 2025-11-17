'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useAvaliacao } from '@/context/AvaliacaoContext'
import { ProgressBar } from '@/components/avaliacao/ProgressBar'
import { Checkbox } from '@/components/ui/Checkbox'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ArrowLeft } from 'lucide-react'

const condicoes = [
  { id: 'osteoporose', label: 'Osteoporose' },
  { id: 'osteopenia', label: 'Osteopenia' },
  { id: 'diabetes', label: 'Diabetes tipo 2' },
  { id: 'cardiovascular', label: 'Doença cardiovascular' },
  { id: 'hipertensao', label: 'Hipertensão (pressão alta)' },
  { id: 'depressao', label: 'Depressão' },
  { id: 'ansiedade', label: 'Ansiedade' },
  { id: 'anemia', label: 'Anemia' },
  { id: 'hipotireoidismo', label: 'Hipotireoidismo (tireoide)' },
  { id: 'hemocromatose', label: 'Hemocromatose (excesso de ferro)' },
  { id: 'doenca_celiaca', label: 'Doença celíaca' },
  { id: 'doenca_crohn', label: 'Doença de Crohn' },
  { id: 'gastrite', label: 'Gastrite' },
]

export default function Passo3Page() {
  const router = useRouter()
  const { perfil, updatePerfil, setPassoAtual } = useAvaliacao()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      condicoes: perfil.condicoes_saude || [],
    },
  })

  const onSubmit = (data: { condicoes: string[] }) => {
    updatePerfil({
      condicoes_saude: data.condicoes || [],
    })
    setPassoAtual(4)
    router.push('/avaliacao/passo-4')
  }

  const handleBack = () => {
    setPassoAtual(2)
    router.push('/avaliacao/passo-2')
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <ProgressBar currentStep={3} totalSteps={6} />

      <Card className="p-4 sm:p-8 bg-pink-500">
        <div className="bg-black px-4 sm:px-6 py-2 sm:py-3 mb-4 inline-block border-2 border-black sm:-rotate-1">
          <h1 className="text-xl sm:text-3xl font-black text-pink-500 uppercase">Condições de Saúde</h1>
        </div>
        <div className="bg-white border-4 border-black p-4 mb-6">
          <p className="text-black font-bold">
            Selecione as condições de saúde que você tem (se houver). Deixe em branco se não tiver nenhuma.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-3">
            {condicoes.map((condicao) => (
              <Checkbox
                key={condicao.id}
                label={condicao.label}
                value={condicao.id}
                {...register('condicoes')}
              />
            ))}
          </div>

          <div className="bg-cyan-400 border-4 border-black shadow-[4px_4px_0_0_#000] p-4">
            <p className="text-sm text-black font-bold">
              💡 <span className="bg-black text-cyan-400 px-2 py-1 font-black">DICA:</span> Essas informações são importantes para identificar necessidades específicas
              e evitar contraindicações.
            </p>
          </div>

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={handleBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <Button type="submit" size="lg" variant="success">
              Próximo →
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
