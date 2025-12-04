import Script from 'next/script'

export function GoogleAdSense() {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID

  // Se não tiver ID configurado, não renderiza nada
  if (!adsenseId) return null

  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      {/* Auto Ads - o Google decide onde exibir anúncios automaticamente */}
      <Script
        id="adsense-auto-ads"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "${adsenseId}",
              enable_page_level_ads: true
            });
          `,
        }}
      />
    </>
  )
}
