'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export function GoogleAdSense() {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID

  useEffect(() => {
    if (!adsenseId) return

    // Verificar se o script já existe
    const existingScript = document.querySelector(`script[src*="adsbygoogle"]`)
    if (existingScript) return

    // Criar e adicionar o script manualmente (sem data-nscript do Next.js)
    const script = document.createElement('script')
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`
    script.async = true
    script.crossOrigin = 'anonymous'
    document.head.appendChild(script)

    // Ativar Auto Ads quando o script carregar
    script.onload = () => {
      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: adsenseId,
          enable_page_level_ads: true,
        })
      } catch (err) {
        console.error('AdSense Auto Ads error:', err)
      }
    }
  }, [adsenseId])

  // Se não tiver ID configurado, não renderiza nada
  if (!adsenseId) return null

  return null
}
