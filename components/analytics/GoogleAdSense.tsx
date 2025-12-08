'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export function GoogleAdSense() {
  // ID do AdSense fixo para garantir que sempre carregue
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID || 'ca-pub-4642150915962893'

  useEffect(() => {
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

  return null
}
