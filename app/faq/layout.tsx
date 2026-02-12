import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perguntas Frequentes (FAQ)',
  description: 'Tire suas dúvidas sobre o Suplementa Já: como funciona a avaliação, segurança dos dados, base científica, dosagens recomendadas e muito mais.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Perguntas Frequentes - Suplementa Já',
    description: 'Tire suas dúvidas sobre recomendações personalizadas de suplementação baseadas em ciência',
    url: 'https://www.suplementaja.com/faq',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // FAQ Schema for rich snippets in Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O Suplementa Já é gratuito mesmo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! O Suplementa Já é 100% gratuito e sempre será. Não cobramos nada para você fazer a avaliação e receber recomendações personalizadas. Mantemos o projeto através de links de afiliados da Amazon."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso criar conta ou fornecer e-mail?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NÃO! Você não precisa criar conta, fornecer e-mail ou fazer qualquer tipo de cadastro. Basta responder o questionário e receber suas recomendações imediatamente."
        }
      },
      {
        "@type": "Question",
        "name": "Como o Suplementa Já gera as recomendações?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usamos um algoritmo que analisa mais de 40 fatores do seu perfil (idade, sexo, dieta, condições de saúde, medicamentos, sintomas) e cruza com nossa base de dados científica contendo informações sobre 40 nutrientes essenciais. As recomendações são baseadas em estudos científicos publicados em revistas médicas."
        }
      },
      {
        "@type": "Question",
        "name": "O Suplementa Já substitui consulta com nutricionista?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NÃO! Somos uma ferramenta educacional, não um serviço médico. Nossas recomendações devem ser usadas como base para conversar com seu médico ou nutricionista, não como substituto de consulta profissional."
        }
      },
      {
        "@type": "Question",
        "name": "As recomendações são baseadas em ciência?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Todas as recomendações são fundamentadas em estudos científicos publicados em revistas médicas, meta-análises, revisões sistemáticas e guidelines de organizações médicas internacionais. Incluímos referências clicáveis com DOI para você verificar."
        }
      },
      {
        "@type": "Question",
        "name": "O sistema detecta contraindicações e interações?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Nosso algoritmo identifica contraindicações importantes (ex: gestação, condições médicas específicas) e interações medicamentosas perigosas (ex: vitamina K2 com warfarina). Você receberá alertas claros sobre nutrientes que NÃO deve tomar."
        }
      },
      {
        "@type": "Question",
        "name": "Meus dados de saúde estão seguros?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Seus dados do questionário ficam armazenados APENAS no seu navegador (localStorage). NÃO enviamos suas informações de saúde para servidores externos. As recomendações são geradas localmente no seu dispositivo."
        }
      },
      {
        "@type": "Question",
        "name": "Posso confiar nas dosagens recomendadas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As dosagens são baseadas em guidelines científicos e adaptadas ao seu perfil. No entanto, SEMPRE consulte um profissional de saúde antes de iniciar suplementação. Apenas um médico ou nutricionista pode avaliar sua situação específica e solicitar exames."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo leva para fazer a avaliação?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A avaliação completa leva entre 3 a 5 minutos. São perguntas simples e diretas sobre seu perfil de saúde, dieta e estilo de vida."
        }
      },
      {
        "@type": "Question",
        "name": "Os links são de afiliados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Usamos links de afiliados da Amazon. Se você comprar através dos nossos links, recebemos uma pequena comissão (5-10% do valor) SEM custo adicional para você. É assim que mantemos o projeto gratuito."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
