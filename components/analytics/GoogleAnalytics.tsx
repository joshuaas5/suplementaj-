'use client'

import Script from 'next/script'

export function GoogleAnalytics() {
  const gaId = 'G-HZ95NQC0C1'

  return (
    <>
      {/* Google tag (gtag.js) - Lazy load */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  )
}
