'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Perfil } from '@/types/perfil'

interface AvaliacaoContextType {
  perfil: Partial<Perfil>
  updatePerfil: (data: Partial<Perfil>) => void
  resetPerfil: () => void
  passoAtual: number
  setPassoAtual: (passo: number) => void
}

const AvaliacaoContext = createContext<AvaliacaoContextType | undefined>(undefined)

const PERFIL_INICIAL: Partial<Perfil> = {
  condicoes_saude: [],
  medicamentos: [],
  cirurgias: [],
  sintomas: [],
}

export function AvaliacaoProvider({ children }: { children: ReactNode }) {
  const [perfil, setPerfil] = useState<Partial<Perfil>>(PERFIL_INICIAL)
  const [passoAtual, setPassoAtual] = useState(1)

  const updatePerfil = (data: Partial<Perfil>) => {
    setPerfil(prev => ({ ...prev, ...data }))
  }

  const resetPerfil = () => {
    setPerfil(PERFIL_INICIAL)
    setPassoAtual(1)
  }

  return (
    <AvaliacaoContext.Provider value={{ perfil, updatePerfil, resetPerfil, passoAtual, setPassoAtual }}>
      {children}
    </AvaliacaoContext.Provider>
  )
}

export function useAvaliacao() {
  const context = useContext(AvaliacaoContext)
  if (!context) {
    throw new Error('useAvaliacao deve ser usado dentro de AvaliacaoProvider')
  }
  return context
}
