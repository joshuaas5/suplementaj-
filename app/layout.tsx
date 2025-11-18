import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Suplementa Já - Recomendações Personalizadas de Suplementação",
  description: "Descubra quais vitaminas e minerais você realmente precisa através de recomendações personalizadas baseadas em evidências científicas. Gratuito e sem cadastro.",
  keywords: ["suplementação", "vitaminas", "minerais", "saúde", "nutrição", "vitamina d", "b12", "cálcio", "magnésio"],
  authors: [{ name: "Suplementa Já" }],
  openGraph: {
    title: "Suplementa Já - Recomendações Personalizadas de Suplementação",
    description: "Descubra quais vitaminas e minerais você realmente precisa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
