'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAvaliacao } from '@/context/AvaliacaoContext'
import { ProgressBar } from '@/components/avaliacao/ProgressBar'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ArrowLeft } from 'lucide-react'

const schema = z.object({
  status_reprodutivo: z.enum(['menstruacao_regular', 'menstruacao_irregular', 'menopausa', 'pos_menopausa', 'gravida', 'lactante', 'tentando_engravidar', 'nao_aplicavel']).optional(),
  dieta: z.enum(['onivora', 'vegetariana', 'vegana'], { message: 'Selecione sua dieta' }),
  exposicao_solar: z.enum(['minima', 'moderada', 'frequente'], { message: 'Selecione a exposição solar' }),
  atividade_fisica: z.enum(['sedentario', 'leve', 'moderado', 'intenso'], { message: 'Selecione o nível de atividade' }),
  alcool: z.enum(['nao', 'ocasional', 'moderado', 'frequente']).optional(),
  tabagismo: z.enum(['nao', 'ex_fumante', 'sim']).optional(),
})

type FormData = z.infer<typeof schema>

export default function Passo2Page() {
  const router = useRouter()
  const { perfil, updatePerfil, setPassoAtual } = useAvaliacao()

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      status_reprodutivo: perfil.status_reprodutivo || undefined,
      dieta: perfil.dieta || undefined,
      exposicao_solar: perfil.exposicao_solar || undefined,
      atividade_fisica: perfil.atividade_fisica || undefined,
      alcool: perfil.alcool || undefined,
      tabagismo: perfil.tabagismo || undefined,
    },
  })

  const sexo = perfil.sexo
  const showStatusReprodutivo = sexo === 'F'

  const onSubmit = (data: FormData) => {
    updatePerfil({
      status_reprodutivo: data.status_reprodutivo || undefined,
      dieta: data.dieta,
      exposicao_solar: data.exposicao_solar,
      atividade_fisica: data.atividade_fisica,
      alcool: data.alcool || undefined,
      tabagismo: data.tabagismo || undefined,
    })
    setPassoAtual(3)
    router.push('/avaliacao/passo-3')
  }

  const handleBack = () => {
    setPassoAtual(1)
    router.push('/avaliacao/passo-1')
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <ProgressBar currentStep={2} totalSteps={6} />

      <Card className="p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Estilo de Vida</h1>
        <p className="text-gray-600 mb-6">Informações sobre sua rotina e hábitos</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {showStatusReprodutivo && (
            <Select
              label="Status reprodutivo"
              {...register('status_reprodutivo')}
              options={[
                { value: '', label: 'Selecione...' },
                { value: 'menstruacao_regular', label: 'Menstruação regular' },
                { value: 'menstruacao_irregular', label: 'Menstruação irregular' },
                { value: 'menopausa', label: 'Menopausa' },
                { value: 'pos_menopausa', label: 'Pós-menopausa' },
                { value: 'gravida', label: 'Grávida' },
                { value: 'lactante', label: 'Amamentando' },
                { value: 'tentando_engravidar', label: 'Tentando engravidar' },
              ]}
              helpText="Importante para recomendações personalizadas"
            />
          )}

          <Select
            label="Dieta *"
            {...register('dieta')}
            error={errors.dieta?.message}
            options={[
              { value: '', label: 'Selecione...' },
              { value: 'onivora', label: 'Onívora (como de tudo)' },
              { value: 'vegetariana', label: 'Vegetariana (sem carne, mas como ovos/laticínios)' },
              { value: 'vegana', label: 'Vegana (100% vegetal)' },
            ]}
          />

          <Select
            label="Exposição solar *"
            {...register('exposicao_solar')}
            error={errors.exposicao_solar?.message}
            options={[
              { value: '', label: 'Selecione...' },
              { value: 'minima', label: 'Mínima (quase sempre em ambientes fechados)' },
              { value: 'moderada', label: 'Moderada (saio de casa, mas com protetor solar)' },
              { value: 'frequente', label: 'Frequente (fico ao ar livre regularmente)' },
            ]}
            helpText="Importante para avaliar vitamina D"
          />

          <Select
            label="Atividade física *"
            {...register('atividade_fisica')}
            error={errors.atividade_fisica?.message}
            options={[
              { value: '', label: 'Selecione...' },
              { value: 'sedentario', label: 'Sedentário (quase nenhuma atividade)' },
              { value: 'leve', label: 'Leve (caminhadas ocasionais)' },
              { value: 'moderado', label: 'Moderado (exercícios 2-3x por semana)' },
              { value: 'intenso', label: 'Intenso (exercícios 4+ vezes por semana)' },
            ]}
          />

          <Select
            label="Consumo de álcool"
            {...register('alcool')}
            options={[
              { value: '', label: 'Selecione...' },
              { value: 'nao', label: 'Não consumo' },
              { value: 'ocasional', label: 'Ocasional (1-2x por mês)' },
              { value: 'moderado', label: 'Moderado (1-2x por semana)' },
              { value: 'frequente', label: 'Frequente (3+ vezes por semana)' },
            ]}
          />

          <Select
            label="Tabagismo"
            {...register('tabagismo')}
            options={[
              { value: '', label: 'Selecione...' },
              { value: 'nao', label: 'Não fumo' },
              { value: 'ex_fumante', label: 'Ex-fumante' },
              { value: 'sim', label: 'Fumante' },
            ]}
          />

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={handleBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <Button type="submit" size="lg">
              Próximo →
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
