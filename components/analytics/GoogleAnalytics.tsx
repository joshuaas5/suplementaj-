'use client'

import Script from 'next/script'

export function GoogleAnalytics() {
  // Usar o novo ID do Google Analytics para suplementaja.vercel.app
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-HZ95NQC0C1'

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
