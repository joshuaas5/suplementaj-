'use client'

import { useEffect, useState } from 'react'
import { ADSENSE_CLIENT_ID } from '@/lib/adsense'

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export function GoogleAdSense() {
  const adsenseId = ADSENSE_CLIENT_ID
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    let loaded = false

    const loadAds = () => {
      if (loaded) return
      loaded = true
      setShouldLoad(true)
    }

    const timer = setTimeout(loadAds, 3000)
    const events = ['scroll', 'mousemove', 'touchstart', 'click']

    events.forEach((event) => {
      window.addEventListener(event, loadAds, { once: true, passive: true })
    })

    return () => {
      clearTimeout(timer)
      events.forEach((event) => {
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
    script.onerror = () => console.error('Erro ao carregar AdSense')
    document.head.appendChild(script)
  }, [shouldLoad, adsenseId])

  return null
}
