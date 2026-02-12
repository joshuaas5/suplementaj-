import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Calculadoras de Saúde',
  description: 'Ferramentas gratuitas para calcular suas necessidades: IMC, calorias diárias, proteína, creatina, macros e água. Baseado em fórmulas científicas validadas.',
  alternates: {
    canonical: '/calculadoras',
  },
  openGraph: {
    title: 'Calculadoras de Saúde - Suplementa Já',
    description: 'Calcule IMC, calorias, proteína, creatina e mais. Ferramentas gratuitas baseadas em ciência.',
    url: 'https://www.suplementaja.com/calculadoras',
  },
}

export default function CalculadorasLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
