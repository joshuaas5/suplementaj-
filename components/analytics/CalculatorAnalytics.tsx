'use client'

import { useCallback, useEffect } from 'react'
import { trackCalculatorComplete, trackCalculatorView } from '@/lib/analytics'

/** Instrumenta uma calculadora sem capturar entradas ou resultados numéricos. */
export function useCalculatorAnalytics(calculatorName: string) {
  useEffect(() => {
    trackCalculatorView(calculatorName)
  }, [calculatorName])

  return useCallback(() => {
    trackCalculatorComplete(calculatorName)
  }, [calculatorName])
}
