'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export function GoogleAdSense() {
  // ID do AdSense para suplementaja.vercel.app e suplementaja.com
  const adsenseId = 'ca-pub-4642150915962893'

  useEffect(() => {
    // Carregar AdSense imediatamente
    const script = document.createElement('script')
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`
    script.async = true
    script.crossOrigin = 'anonymous'
    script.onload = () => {
      console.log('✅ AdSense script carregado')
    }
    script.onerror = () => {
      console.error('❌ Erro ao carregar AdSense script')
    }
    document.head.appendChild(script)
  }, [adsenseId])

  return null
}
