import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { GoogleAdSense } from '@/components/analytics/GoogleAdSense'
import { FacebookPixel } from '@/components/analytics/FacebookPixel'
import { ExitIntentPopup } from '@/components/marketing/ExitIntentPopup'
import { Analytics } from "@vercel/analytics/next"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.suplementaja.com'),
  title: {
    default: "Suplementa Já - Recomendações Personalizadas de Suplementação",
    template: "%s | Suplementa Já"
  },
  other: {
    'preconnect': 'https://pagead2.googlesyndication.com',
  },
  description: "Descubra quais vitaminas e minerais você realmente precisa através de recomendações personalizadas baseadas em evidências científicas. Gratuito e sem cadastro.",
  keywords: ["suplementação", "vitaminas", "minerais", "saúde", "nutrição", "vitamina d", "b12", "cálcio", "magnésio", "creatina", "whey protein", "omega 3"],
  authors: [{ name: "Suplementa Já" }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Suplementa Já - Recomendações Personalizadas de Suplementação",
    description: "Descubra quais vitaminas e minerais você realmente precisa através de recomendações personalizadas baseadas em evidências científicas",
    url: 'https://suplementaja.com',
    siteName: 'Suplementa Já',
    locale: 'pt_BR',
    type: "website",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Suplementa Já - Recomendações Personalizadas de Suplementação',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suplementa Já - Recomendações Personalizadas',
    description: 'Descubra quais vitaminas e minerais você realmente precisa',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: "4DA9xw0IDScqFxPZ0yI6TYuuXBes9ekaeu1ENTtS6Sg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* CSS crítico inline para eliminar render-blocking */}
        <style dangerouslySetInnerHTML={{__html: `
          :root{--background:#fff;--foreground:#000}
          body{color:#000;background:#fff;margin:0;padding:0}
          *{box-sizing:border-box}
          .text-5xl{font-size:3rem;line-height:1}
          .text-6xl{font-size:3.75rem;line-height:1}
          .font-black{font-weight:900}
          .text-black{color:#000}
          .bg-yellow-400{background-color:#facc15}
          .bg-black{background-color:#000}
          .text-yellow-400{color:#facc15}
          .uppercase{text-transform:uppercase}
          .leading-tight{line-height:1.25}
        `}} />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <GoogleAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAdSense />
        <FacebookPixel />
        <ExitIntentPopup />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
