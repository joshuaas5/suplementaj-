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

    const enableMobileAnchorAd = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches
      if (!isMobile) return

      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: adsenseId,
          enable_page_level_ads: true,
          overlays: { bottom: true },
        })
      } catch {
        // AdSense can reject duplicate page-level pushes on navigation.
      }
    }

    const script = document.createElement('script')
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`
    script.async = true
    script.crossOrigin = 'anonymous'
    script.onload = enableMobileAnchorAd
    script.onerror = () => console.error('Erro ao carregar AdSense')
    document.head.appendChild(script)
  }, [shouldLoad, adsenseId])

  return null
}
