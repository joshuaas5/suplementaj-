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
import { Tooltip } from '@/components/ui/Tooltip'
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

      <Card className="p-4 sm:p-8 bg-lime-400">
        <div className="bg-black px-4 sm:px-6 py-2 sm:py-3 mb-4 inline-block border-2 border-black sm:rotate-1">
          <h1 className="text-xl sm:text-3xl font-black text-lime-400 uppercase">Estilo de Vida</h1>
        </div>
        <div className="bg-white border-4 border-black p-4 mb-6">
          <p className="text-black font-bold">
            Informações sobre sua rotina e hábitos
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {showStatusReprodutivo && (
            <div>
              <div className="flex items-center gap-2 mb-1">
                <label className="block text-sm font-black text-black uppercase">
                  Status reprodutivo
                </label>
                <Tooltip content="Diferentes fases do ciclo reprodutivo alteram necessidades nutricionais. Gravidez e lactação aumentam necessidade de ferro, ácido fólico, cálcio e iodo. Menopausa aumenta necessidade de cálcio e vitamina D para prevenir osteoporose." />
              </div>
              <Select
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
              />
            </div>
          )}

          <div>
            <div className="flex items-center gap-2 mb-1">
              <label className="block text-sm font-black text-black uppercase">
                Dieta *
              </label>
              <Tooltip content="Dietas vegetarianas e veganas têm maior risco de deficiência de B12 (só em produtos animais), ferro (menor absorção do ferro vegetal), ômega-3 (EPA/DHA só em peixes), zinco, cálcio e vitamina D. Veganos também precisam de taurina e carnitina." />
            </div>
            <Select
              {...register('dieta')}
              error={errors.dieta?.message}
              options={[
                { value: '', label: 'Selecione...' },
                { value: 'onivora', label: 'Onívora (como de tudo)' },
                { value: 'vegetariana', label: 'Vegetariana (sem carne, mas como ovos/laticínios)' },
                { value: 'vegana', label: 'Vegana (100% vegetal)' },
              ]}
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <label className="block text-sm font-black text-black uppercase">
                Exposição solar *
              </label>
              <Tooltip content="O sol é a principal fonte de vitamina D. 90% da vitamina D vem da exposição solar. Exposição mínima (sempre em ambientes fechados ou com protetor solar total) leva à deficiência. São necessários 15-30 minutos de sol direto nos braços e pernas, 2-3x por semana." />
            </div>
            <Select
              {...register('exposicao_solar')}
              error={errors.exposicao_solar?.message}
              options={[
                { value: '', label: 'Selecione...' },
                { value: 'minima', label: 'Mínima (quase sempre em ambientes fechados)' },
                { value: 'moderada', label: 'Moderada (saio de casa, mas com protetor solar)' },
                { value: 'frequente', label: 'Frequente (fico ao ar livre regularmente)' },
              ]}
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <label className="block text-sm font-black text-black uppercase">
                Atividade física *
              </label>
              <Tooltip content="Atividade física intensa aumenta necessidades de magnésio (contração muscular), vitaminas B (energia), ferro (transporte de oxigênio), antioxidantes, glutamina (recuperação), carnitina (queima de gordura) e CoQ10 (energia mitocondrial)." />
            </div>
            <Select
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
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <label className="block text-sm font-black text-black uppercase">
                Consumo de álcool
              </label>
              <Tooltip content="O álcool depleta vitaminas do complexo B (especialmente B1, B6, B9 e B12), magnésio, zinco e antioxidantes. Também interfere na absorção de nutrientes e sobrecarrega o fígado. Consumo frequente requer suplementação de vitaminas B e antioxidantes (NAC, glutationa)." />
            </div>
            <Select
              {...register('alcool')}
              options={[
                { value: '', label: 'Selecione...' },
                { value: 'nao', label: 'Não consumo' },
                { value: 'ocasional', label: 'Ocasional (1-2x por mês)' },
                { value: 'moderado', label: 'Moderado (1-2x por semana)' },
                { value: 'frequente', label: 'Frequente (3+ vezes por semana)' },
              ]}
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <label className="block text-sm font-black text-black uppercase">
                Tabagismo
              </label>
              <Tooltip content="Fumantes têm necessidade MUITO aumentada de vitamina C (fumante perde 25-40mg de vitamina C por cigarro), antioxidantes (vitamina E, beta-caroteno, NAC), e vitaminas B. O tabaco também danifica pulmões - NAC é mucolítico e protetor pulmonar essencial." />
            </div>
            <Select
              {...register('tabagismo')}
              options={[
                { value: '', label: 'Selecione...' },
                { value: 'nao', label: 'Não fumo' },
                { value: 'ex_fumante', label: 'Ex-fumante' },
                { value: 'sim', label: 'Fumante' },
              ]}
            />
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
