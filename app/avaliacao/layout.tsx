import { AvaliacaoProvider } from '@/context/AvaliacaoContext'
import { ReactNode } from 'react'

export default function AvaliacaoLayout({ children }: { children: ReactNode }) {
  return (
    <AvaliacaoProvider>
      <div className="bg-gray-50 min-h-screen">
        {children}
      </div>
    </AvaliacaoProvider>
  )
}
