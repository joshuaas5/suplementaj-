'use client'

import Script from 'next/script'

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export function GoogleAdSense() {
  // ID do AdSense para suplementaja.vercel.app e suplementaja.com
  const adsenseId = 'ca-pub-4642150915962893'

  return (
    <>
      {/* Script principal do AdSense - Auto Ads */}
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  )
}
