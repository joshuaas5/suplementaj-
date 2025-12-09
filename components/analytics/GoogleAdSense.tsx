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
    // Carregar AdSense com delay de 3s para não bloquear FCP/LCP
    const timer = setTimeout(() => {
      const script = document.createElement('script')
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`
      script.async = true
      script.crossOrigin = 'anonymous'
      document.head.appendChild(script)
    }, 3000)

    return () => clearTimeout(timer)
  }, [adsenseId])

  return null
}
