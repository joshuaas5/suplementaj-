'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const faqs = [
  {
    categoria: 'Sobre o Serviço',
    perguntas: [
      {
        q: 'O Suplementa Já é gratuito mesmo?',
        a: 'Sim! O Suplementa Já é 100% gratuito e sempre será. Não cobramos nada para você fazer a avaliação e receber recomendações personalizadas. Mantemos o projeto através de links de afiliados da Amazon.'
      },
      {
        q: 'Preciso criar conta ou fornecer e-mail?',
        a: 'NÃO! Você não precisa criar conta, fornecer e-mail ou fazer qualquer tipo de cadastro. Basta responder o questionário e receber suas recomendações imediatamente.'
      },
      {
        q: 'Como o Suplementa Já gera as recomendações?',
        a: 'Usamos um algoritmo que analisa mais de 40 fatores do seu perfil (idade, sexo, dieta, condições de saúde, medicamentos, sintomas) e cruza com nossa base de dados científica contendo informações sobre 40 nutrientes essenciais. As recomendações são baseadas em estudos científicos publicados em revistas médicas.'
      },
      {
        q: 'O Suplementa Já substitui consulta com nutricionista?',
        a: 'NÃO! Somos uma ferramenta educacional, não um serviço médico. Nossas recomendações devem ser usadas como base para conversar com seu médico ou nutricionista, não como substituto de consulta profissional.'
      }
    ]
  },
  {
    categoria: 'Segurança e Confiabilidade',
    perguntas: [
      {
        q: 'As recomendações são baseadas em ciência?',
        a: 'Sim! Todas as recomendações são fundamentadas em estudos científicos publicados em revistas médicas, meta-análises, revisões sistemáticas e guidelines de organizações médicas internacionais. Incluímos referências clicáveis com DOI para você verificar.'
      },
      {
        q: 'O sistema detecta contraindicações e interações?',
        a: 'Sim! Nosso algoritmo identifica contraindicações importantes (ex: gestação, condições médicas específicas) e interações medicamentosas perigosas (ex: vitamina K2 com warfarina). Você receberá alertas claros sobre nutrientes que NÃO deve tomar.'
      },
      {
        q: 'Meus dados de saúde estão seguros?',
        a: 'Sim! Seus dados do questionário ficam armazenados APENAS no seu navegador (localStorage). NÃO enviamos suas informações de saúde para servidores externos. As recomendações são geradas localmente no seu dispositivo.'
      },
      {
        q: 'Posso confiar nas dosagens recomendadas?',
        a: 'As dosagens são baseadas em guidelines científicos e adaptadas ao seu perfil. No entanto, SEMPRE consulte um profissional de saúde antes de iniciar suplementação. Apenas um médico ou nutricionista pode avaliar sua situação específica e solicitar exames.'
      }
    ]
  },
  {
    categoria: 'Como Usar',
    perguntas: [
      {
        q: 'Quanto tempo leva para fazer a avaliação?',
        a: 'O questionário tem 6 passos e leva aproximadamente 2-3 minutos para completar. Você receberá suas recomendações instantaneamente ao finalizar.'
      },
      {
        q: 'Posso voltar e editar minhas respostas?',
        a: 'Sim! Durante o questionário, você pode usar os botões "Voltar" para revisar e editar suas respostas. Depois de finalizar, você pode fazer uma nova avaliação a qualquer momento.'
      },
      {
        q: 'Posso salvar ou imprimir meus resultados?',
        a: 'Sim! Na página de resultados, você tem a opção de baixar um PDF completo com todas as recomendações, dosagens e referências científicas. Você também pode compartilhar o link dos resultados.'
      },
      {
        q: 'Preciso responder todas as perguntas?',
        a: 'Algumas perguntas são obrigatórias (marcadas com *) para gerar recomendações básicas. Outras são opcionais mas ajudam a deixar as recomendações mais precisas. Quanto mais informações você fornecer, melhor será a personalização.'
      }
    ]
  },
  {
    categoria: 'Resultados e Recomendações',
    perguntas: [
      {
        q: 'Por que alguns nutrientes têm prioridade "Alta"?',
        a: 'A prioridade é baseada em diversos fatores: deficiências comuns no seu perfil, condições de saúde reportadas, sintomas, dieta, e evidências científicas. Prioridade ALTA significa que há forte indicação de necessidade baseada no seu perfil.'
      },
      {
        q: 'Por que alguns nutrientes aparecem como "Não Recomendados"?',
        a: 'Identificamos contraindicações específicas para você. Por exemplo: ferro para quem tem hemocromatose, vitamina K2 para quem usa warfarina, etc. NUNCA tome nutrientes marcados como "Não Recomendados" sem supervisão médica.'
      },
      {
        q: 'As recomendações consideram minha dieta?',
        a: 'Sim! Se você é vegetariano ou vegano, priorizamos nutrientes com risco de deficiência (B12, ferro, zinco, etc.). Se você consome carne, peixes e laticínios regularmente, as necessidades são diferentes.'
      },
      {
        q: 'Devo tomar TODOS os suplementos recomendados?',
        a: 'NÃO necessariamente! Comece pelos de prioridade ALTA e discuta com seu médico. Ele pode solicitar exames para confirmar deficiências reais antes de você gastar dinheiro com suplementos desnecessários.'
      }
    ]
  },
  {
    categoria: 'Compra e Produtos',
    perguntas: [
      {
        q: 'Vocês vendem suplementos?',
        a: 'NÃO! Não vendemos nenhum produto. Fornecemos apenas recomendações e links para produtos na Amazon como afiliados. Você compra diretamente da Amazon, não de nós.'
      },
      {
        q: 'Os links são de afiliados?',
        a: 'Sim, são transparentes sobre isso. Os links para produtos na Amazon são links de afiliados. Se você comprar através deles, ganhamos uma pequena comissão (sem custo extra para você), o que nos ajuda a manter o serviço gratuito.'
      },
      {
        q: 'Vocês recomendam produtos específicos por comissão?',
        a: 'NÃO! Os produtos são selecionados com base em critérios de qualidade (dosagem adequada, forma biodisponível, marca confiável), não por comissão. Recomendamos o que consideramos apropriado cientificamente.'
      },
      {
        q: 'Sou obrigado a comprar pela Amazon?',
        a: 'Claro que não! Você pode comprar em qualquer lugar que preferir (farmácias, lojas de suplementos, outras lojas online). Os links da Amazon são apenas sugestões convenientes.'
      }
    ]
  },
  {
    categoria: 'Limitações e Avisos',
    perguntas: [
      {
        q: 'O sistema pode errar?',
        a: 'Sim! Embora nos baseemos em ciência, nosso sistema não substitui avaliação médica individualizada. Fatores únicos da sua situação podem não ser captados pelo questionário. Por isso SEMPRE consulte um profissional antes de suplementar.'
      },
      {
        q: 'Suplementos podem fazer mal?',
        a: 'SIM! Suplementos em excesso podem causar toxicidade. Alguns interagem com medicamentos de forma perigosa. Outros são contraindicados para certas condições. NUNCA inicie suplementação sem orientação médica.'
      },
      {
        q: 'Posso usar se estou grávida ou amamentando?',
        a: 'Você pode usar a ferramenta, mas é ESSENCIAL consultar seu obstetra antes de tomar qualquer suplemento durante gestação ou lactação. Algumas vitaminas/minerais podem ser perigosas nessas fases.'
      },
      {
        q: 'Crianças podem usar?',
        a: 'A ferramenta aceita qualquer idade, mas recomendações para menores de 18 anos devem ser discutidas com pediatra. Pais/responsáveis devem supervisionar o uso por menores.'
      }
    ]
  },
  {
    categoria: 'Privacidade e Dados',
    perguntas: [
      {
        q: 'Vocês vendem meus dados de saúde?',
        a: 'NUNCA! Não vendemos, compartilhamos ou enviamos seus dados de saúde para terceiros. Suas respostas do questionário ficam armazenadas apenas no seu navegador (localStorage).'
      },
      {
        q: 'Como posso deletar meus dados?',
        a: 'Como seus dados ficam no seu navegador, basta limpar os dados de navegação (localStorage) nas configurações do navegador. Você também pode fazer uma nova avaliação que sobrescreve a anterior.'
      },
      {
        q: 'Vocês usam cookies?',
        a: 'Usamos cookies essenciais para funcionamento (armazenar sua avaliação) e cookies de análise do Google Analytics (dados agregados, sem informações de saúde). Veja nossa Política de Privacidade para detalhes.'
      }
    ]
  },
  {
    categoria: 'Outros',
    perguntas: [
      {
        q: 'Vocês atendem apenas no Brasil?',
        a: 'O site está em português brasileiro e seguimos legislação brasileira (LGPD), mas qualquer pessoa pode usar. As recomendações são baseadas em ciência internacional.'
      },
      {
        q: 'Como posso entrar em contato?',
        a: 'Para dúvidas, sugestões ou exercer seus direitos sob a LGPD, envie e-mail para suplementaja@gmail.com. Respondemos em até 15 dias úteis.'
      },
      {
        q: 'Vocês têm app mobile?',
        a: 'Ainda não, mas o site é 100% responsivo e funciona perfeitamente em celulares e tablets. Você pode adicionar o site à tela inicial do seu celular para acesso rápido.'
      },
      {
        q: 'Posso sugerir melhorias ou reportar erros?',
        a: 'Sim! Adoramos feedback. Envie suas sugestões, dúvidas ou relatos de bugs para suplementaja@gmail.com. Sua contribuição nos ajuda a melhorar o serviço.'
      }
    ]
  }
]

function FAQItem({ pergunta, resposta }: { pergunta: string; resposta: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white border-4 border-black shadow-[3px_3px_0_0_#000]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 sm:p-6 flex justify-between items-start gap-4 hover:bg-yellow-50 transition-colors"
      >
        <span className="font-black text-base sm:text-lg text-black flex-1">{pergunta}</span>
        <div className="flex-shrink-0 w-8 h-8 bg-black flex items-center justify-center">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-yellow-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-yellow-400" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t-4 border-black">
          <p className="text-black font-bold text-sm sm:text-base leading-relaxed mt-4">{resposta}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-lime-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] px-6 py-3 mb-6 sm:rotate-1">
            <h1 className="text-3xl sm:text-5xl font-black text-black uppercase flex items-center justify-center gap-3">
              <HelpCircle className="w-8 sm:w-12 h-8 sm:h-12" />
              FAQ
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-800 font-bold">
            Perguntas Frequentes sobre o Suplementa Já
          </p>
        </div>

        {/* Categories */}
        {faqs.map((categoria, idx) => (
          <div key={idx} className="mb-12">
            <div className="bg-yellow-400 border-4 border-black shadow-[4px_4px_0_0_#000] px-4 sm:px-6 py-2 sm:py-3 mb-6 inline-block">
              <h2 className="text-xl sm:text-2xl font-black text-black uppercase">{categoria.categoria}</h2>
            </div>

            <div className="space-y-4">
              {categoria.perguntas.map((faq, faqIdx) => (
                <FAQItem key={faqIdx} pergunta={faq.q} resposta={faq.a} />
              ))}
            </div>
          </div>
        ))}

        {/* Ainda com dúvidas */}
        <Card className="mb-8 bg-cyan-400 border-4 border-black">
          <CardContent className="p-6 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-black uppercase mb-4">
              Ainda com Dúvidas?
            </h2>
            <p className="text-black font-bold text-base sm:text-lg mb-6">
              Se sua pergunta não foi respondida aqui, entre em contato conosco!
            </p>
            <div className="bg-white border-4 border-black p-4 inline-block">
              <p className="text-black font-bold">
                📧 <strong>E-mail:</strong> suplementaja@gmail.com
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer Links */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/sobre" className="text-black font-bold hover:underline">
              Sobre
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/privacidade" className="text-black font-bold hover:underline">
              Política de Privacidade
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/termos" className="text-black font-bold hover:underline">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
