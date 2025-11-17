'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useAvaliacao } from '@/context/AvaliacaoContext'
import { ProgressBar } from '@/components/avaliacao/ProgressBar'
import { Checkbox } from '@/components/ui/Checkbox'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ArrowLeft } from 'lucide-react'

const medicamentos = [
  { id: 'metformina', label: 'Metformina (diabetes)' },
  { id: 'omeprazol', label: 'Omeprazol / Pantoprazol (IBP - estômago)' },
  { id: 'antiácidos', label: 'Antiácidos (azia)' },
  { id: 'varfarina', label: 'Varfarina (anticoagulante)' },
  { id: 'aspirina', label: 'AAS / Aspirina' },
  { id: 'estatinas', label: 'Estatinas (colesterol)' },
  { id: 'corticosteroides', label: 'Corticosteroides (anti-inflamatórios)' },
  { id: 'diureticos', label: 'Diuréticos (pressão alta)' },
  { id: 'levotiroxina', label: 'Levotiroxina (hormônio da tireoide)' },
  { id: 'antibioticos', label: 'Antibióticos (uso contínuo)' },
  { id: 'anticonvulsivantes', label: 'Anticonvulsivantes' },
]

const cirurgias = [
  { id: 'bariátrica', label: 'Cirurgia bariátrica (redução de estômago)' },
  { id: 'gastrectomia', label: 'Gastrectomia (retirada parcial/total do estômago)' },
]

export default function Passo4Page() {
  const router = useRouter()
  const { perfil, updatePerfil, setPassoAtual } = useAvaliacao()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      medicamentos: perfil.medicamentos || [],
      cirurgias: perfil.cirurgias || [],
    },
  })

  const onSubmit = (data: { medicamentos: string[]; cirurgias: string[] }) => {
    updatePerfil({
      medicamentos: data.medicamentos || [],
      cirurgias: data.cirurgias || [],
    })
    setPassoAtual(5)
    router.push('/avaliacao/passo-5')
  }

  const handleBack = () => {
    setPassoAtual(3)
    router.push('/avaliacao/passo-3')
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <ProgressBar currentStep={4} totalSteps={6} />

      <Card className="p-4 sm:p-8 bg-cyan-400">
        <div className="bg-black px-4 sm:px-6 py-2 sm:py-3 mb-4 inline-block border-2 border-black sm:rotate-1">
          <h1 className="text-xl sm:text-3xl font-black text-cyan-400 uppercase">Medicamentos e Cirurgias</h1>
        </div>
        <div className="bg-white border-4 border-black p-4 mb-6">
          <p className="text-black font-bold">
            Selecione os medicamentos que você usa regularmente e cirurgias que já fez
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <div className="bg-black px-4 py-2 mb-4 inline-block border-2 border-black">
              <h2 className="text-base sm:text-lg font-black text-cyan-400 uppercase">Medicamentos de uso contínuo</h2>
            </div>
            <div className="space-y-3">
              {medicamentos.map((medicamento) => (
                <Checkbox
                  key={medicamento.id}
                  label={medicamento.label}
                  value={medicamento.id}
                  {...register('medicamentos')}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="bg-black px-4 py-2 mb-4 inline-block border-2 border-black">
              <h2 className="text-base sm:text-lg font-black text-cyan-400 uppercase">Cirurgias realizadas</h2>
            </div>
            <div className="space-y-3">
              {cirurgias.map((cirurgia) => (
                <Checkbox
                  key={cirurgia.id}
                  label={cirurgia.label}
                  value={cirurgia.id}
                  {...register('cirurgias')}
                />
              ))}
            </div>
          </div>

          <div className="bg-yellow-400 border-4 border-black shadow-[4px_4px_0_0_#000] p-4">
            <p className="text-sm text-black font-bold">
              ⚠️ <span className="bg-black text-yellow-400 px-2 py-1 font-black">IMPORTANTE:</span> Alguns medicamentos podem interferir na absorção de nutrientes.
              Vamos considerar isso nas recomendações.
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
