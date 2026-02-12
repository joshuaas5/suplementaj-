import { AvaliacaoProvider } from '@/context/AvaliacaoContext'
import { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Avaliação Personalizada',
  description: 'Responda 10 perguntas e descubra quais vitaminas e minerais você realmente precisa. Baseado em mais de 1.000 estudos científicos. Gratuito e sem cadastro.',
  alternates: {
    canonical: '/avaliacao',
  },
  openGraph: {
    title: 'Avaliação Personalizada - Suplementa Já',
    description: 'Descubra quais vitaminas e minerais você realmente precisa em 3 minutos',
    url: 'https://www.suplementaja.com/avaliacao',
  },
}

export default function AvaliacaoLayout({ children }: { children: ReactNode }) {
  return (
    <AvaliacaoProvider>
      <div className="bg-gray-50 min-h-screen">
        {children}
      </div>
    </AvaliacaoProvider>
  )
}
