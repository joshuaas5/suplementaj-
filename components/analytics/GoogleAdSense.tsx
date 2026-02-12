'use client'

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export function GoogleAdSense() {
  const adsenseId = 'ca-pub-4642150915962893'
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Lazy load: carregar AdSense após interação ou 2s
    let loaded = false
    
    const loadAds = () => {
      if (loaded) return
      loaded = true
      setShouldLoad(true)
    }

    // Carregar após 3s OU primeira interação (otimização LCP)
    const timer = setTimeout(loadAds, 3000)
    const events = ['scroll', 'mousemove', 'touchstart', 'click']
    
    events.forEach(event => {
      window.addEventListener(event, loadAds, { once: true, passive: true })
    })

    return () => {
      clearTimeout(timer)
      events.forEach(event => {
        window.removeEventListener(event, loadAds)
      })
    }
  }, [])

  useEffect(() => {
    if (!shouldLoad) return

    const script = document.createElement('script')
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`
    script.async = true
    script.crossOrigin = 'anonymous'
    script.onload = () => console.log('✅ AdSense carregado')
    script.onerror = () => console.error('❌ Erro ao carregar AdSense')
    document.head.appendChild(script)
  }, [shouldLoad, adsenseId])

  return null
}
