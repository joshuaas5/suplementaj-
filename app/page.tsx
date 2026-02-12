import Link from 'next/link'
import { ArrowRight, CheckCircle2, Shield, Sparkles, Users, Star, TrendingUp, Clock, Award, Brain, Calculator, Scale, Flame, Utensils, Dumbbell, Drumstick, Droplets } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { DisclaimerBanner } from '@/components/layout/DisclaimerBanner'
import { HorizontalAd } from '@/components/ads/DisplayAd'
import { ManualDisplayAd } from '@/components/ads/ManualDisplayAd'

export default function Home() {
  // Schema markup para rich snippets do Google
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Suplementa Já',
    url: 'https://www.suplementaja.com',
    logo: 'https://www.suplementaja.com/logo.png',
    description:
      'Plataforma gratuita de recomendações personalizadas de suplementação baseadas em evidências científicas',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'Portuguese',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Suplementa Já',
    url: 'https://www.suplementaja.com',
    description:
      'Descubra quais vitaminas e minerais você realmente precisa através de recomendações personalizadas baseadas em evidências científicas',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.suplementaja.com/nutrientes?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {/* Hero Section - NEOBRUTALISM */}
      <section className="relative overflow-hidden bg-yellow-400 border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="text-center">
            {/* Trust Badges */}
            <div className="flex justify-center gap-3 mb-8 flex-wrap">
              <Badge variant="success" size="lg">
                <Star className="w-4 h-4 mr-1" /> Baseado em Ciência
              </Badge>
              <Badge variant="info" size="lg">
                <Shield className="w-4 h-4 mr-1" /> 100% Gratuito
              </Badge>
              <Badge variant="danger" size="lg">
                <Award className="w-4 h-4 mr-1" /> Sem Cadastro
              </Badge>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black mb-6 leading-tight uppercase">
              Descubra os Suplementos{' '}
              <span className="bg-black text-yellow-400 px-3 py-2 inline-block sm:rotate-1">
                Certos
              </span>{' '}
              para Você
            </h1>

            <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] p-4 sm:p-6 max-w-3xl mx-auto mb-10">
              <p className="text-xl sm:text-2xl text-black font-bold leading-relaxed">
                Receba uma lista personalizada de suplementos em{' '}
                <span className="bg-cyan-400 px-2 py-1">menos de 2 minutos</span>.
                <br />Grátis, sem cadastro, sem enrolação.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto mb-12">
              <div className="bg-cyan-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000] p-4 transform sm:-rotate-1">
                <div className="text-4xl sm:text-5xl font-black text-black mb-1">44</div>
                <div className="text-sm font-bold uppercase text-black">Nutrientes</div>
              </div>
              <div className="bg-lime-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000] p-4 transform sm:rotate-1">
                <div className="text-4xl sm:text-5xl font-black text-black mb-1">50+</div>
                <div className="text-sm font-bold uppercase text-black">Condições</div>
              </div>
              <div className="bg-pink-500 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000] p-4 transform sm:-rotate-1">
                <div className="text-4xl sm:text-5xl font-black text-white mb-1">2min</div>
                <div className="text-sm font-bold uppercase text-white">Avaliação</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/avaliacao" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="primary"
                  className="text-base sm:text-xl px-6 sm:px-10 py-4 sm:py-7 w-full sm:w-auto"
                >
                  Descobrir Meus Suplementos Ideais (Grátis)
                  <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </Link>
              <Link href="/calculadoras" className="w-full sm:w-auto">
                <Button
                  variant="success"
                  size="lg"
                  className="text-base sm:text-xl px-6 sm:px-10 py-4 sm:py-7 w-full sm:w-auto"
                >
                  <Calculator className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
                  Calculadoras Gratuitas
                </Button>
              </Link>
            </div>

            <div className="bg-black border-4 border-black p-4 inline-block">
              <p className="text-sm text-yellow-400 flex items-center gap-2 font-bold uppercase">
                <Clock className="w-4 h-4" />
                Resultado instantâneo • Nenhum e-mail necessário
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Calculadoras Destaque */}
      <section className="bg-cyan-400 border-y-8 border-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-black px-8 py-4 mb-6 -rotate-1">
              <h2 className="text-3xl sm:text-4xl font-black text-cyan-400 uppercase flex items-center gap-4">
                <Calculator className="w-8 h-8 sm:w-10 sm:h-10" />
                6 Calculadoras Gratuitas
              </h2>
            </div>
            <p className="text-black font-bold text-xl max-w-2xl mx-auto leading-relaxed">
              Ferramentas essenciais para otimizar sua dieta e treino.
              <span className="bg-white px-2 py-1 ml-1 border-2 border-black">Sem cadastro.</span>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
            <Link href="/calculadoras/imc" className="group bg-pink-400 border-4 border-black shadow-[4px_4px_0_0_#000] p-4 sm:p-6 hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] transition-all text-center flex flex-col items-center h-full">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Scale className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="font-black text-black uppercase text-sm sm:text-base leading-tight">Peso Ideal (IMC)</h3>
            </Link>

            <Link href="/calculadoras/calorias" className="group bg-orange-400 border-4 border-black shadow-[4px_4px_0_0_#000] p-4 sm:p-6 hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] transition-all text-center flex flex-col items-center h-full">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Flame className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="font-black text-black uppercase text-sm sm:text-base leading-tight">Gasto Calórico</h3>
            </Link>

            <Link href="/calculadoras/macros" className="group bg-purple-400 border-4 border-black shadow-[4px_4px_0_0_#000] p-4 sm:p-6 hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] transition-all text-center flex flex-col items-center h-full">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Utensils className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="font-black text-black uppercase text-sm sm:text-base leading-tight">Calculadora Macros</h3>
            </Link>

            <Link href="/calculadoras/creatina" className="group bg-lime-400 border-4 border-black shadow-[4px_4px_0_0_#000] p-4 sm:p-6 hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] transition-all text-center flex flex-col items-center h-full">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Dumbbell className="w-8 h-8 text-lime-400" />
              </div>
              <h3 className="font-black text-black uppercase text-sm sm:text-base leading-tight">Dose Creatina</h3>
            </Link>

            <Link href="/calculadoras/proteina" className="group bg-yellow-400 border-4 border-black shadow-[4px_4px_0_0_#000] p-4 sm:p-6 hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] transition-all text-center flex flex-col items-center h-full">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Drumstick className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="font-black text-black uppercase text-sm sm:text-base leading-tight">Dose Proteína</h3>
            </Link>

            <Link href="/calculadoras/agua" className="group bg-white border-4 border-black shadow-[4px_4px_0_0_#000] p-4 sm:p-6 hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] transition-all text-center flex flex-col items-center h-full">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-black uppercase text-sm sm:text-base leading-tight">Água Diária</h3>
            </Link>
          </div>

          <div className="text-center">
            <Link href="/calculadoras">
              <Button variant="primary" size="lg" className="text-xl px-10 py-6 border-b-8 active:border-b-4 hover:-translate-y-1 transition-all">
                Ver Todas as Ferramentas
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <DisclaimerBanner />
      </div>

      {/* Anúncio após o Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HorizontalAd />
        <ManualDisplayAd className="mt-4" />
      </div>

      {/* Features Section - NEOBRUTALISM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block bg-cyan-400 border-4 border-black shadow-[6px_6px_0_0_#000] px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:rotate-1">
            <h2 className="text-2xl sm:text-4xl font-black text-black uppercase">
              Por que Suplementa Já?
            </h2>
          </div>
          <p className="text-xl text-gray-800 font-bold">
            Tecnologia e ciência trabalhando para sua saúde
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Feature 1 */}
          <Card className="transform -rotate-1 hover:rotate-0 transition-all bg-lime-400">
            <CardHeader>
              <div className="w-16 h-16 bg-black border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0_0_#000]">
                <Sparkles className="w-8 h-8 text-lime-400" />
              </div>
              <CardTitle className="text-2xl">100% Personalizado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black text-base leading-relaxed font-bold">
                Nosso algoritmo inteligente analisa <span className="bg-black text-lime-400 px-2 py-1">50+ fatores</span>{' '}
                do seu perfil: idade, sexo, dieta, condições de saúde, medicamentos e sintomas{' '}
                para recomendações ultra-precisas.
              </p>
              <div className="mt-6 p-4 bg-white border-4 border-black">
                <p className="text-sm text-black font-bold uppercase leading-relaxed">
                  ✓ Análise de interações medicamentosas<br />
                  ✓ Identificação de contraindicações<br />
                  ✓ Dosagens personalizadas
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="transform rotate-1 hover:rotate-0 transition-all bg-cyan-400">
            <CardHeader>
              <div className="w-16 h-16 bg-black border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0_0_#000]">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <CardTitle className="text-2xl">Baseado em Ciência</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black text-base leading-relaxed font-bold">
                Todas as recomendações são fundamentadas em <span className="bg-black text-cyan-400 px-2 py-1">estudos científicos</span>{' '}
                publicados em revistas médicas. Incluímos referências clicáveis com DOI para
                você verificar.
              </p>
              <div className="mt-6 p-4 bg-white border-4 border-black">
                <p className="text-sm text-black font-bold uppercase leading-relaxed">
                  ✓ Revisões sistemáticas e meta-análises<br />
                  ✓ Guidelines de organizações médicas<br />
                  ✓ Estudos randomizados controlados
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="transform -rotate-1 hover:rotate-0 transition-all bg-pink-500">
            <CardHeader>
              <div className="w-16 h-16 bg-black border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0_0_#000]">
                <Users className="w-8 h-8 text-pink-500" />
              </div>
              <CardTitle className="text-2xl">Seguro e Completo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white text-base leading-relaxed font-bold">
                Alertas automáticos sobre <span className="bg-black text-pink-500 px-2 py-1">contraindicações</span>{' '}
                importantes, interações medicamentosas perigosas e dosagens seguras para cada perfil.
              </p>
              <div className="mt-6 p-4 bg-white border-4 border-black">
                <p className="text-sm text-black font-bold uppercase leading-relaxed">
                  ✓ Alertas de contraindicação (ex: K2 + warfarin)<br />
                  ✓ Limites superiores toleráveis<br />
                  ✓ Recomendações de timing
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works - NEOBRUTALISM */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-400 border-4 border-black shadow-[6px_6px_0_0_#000] px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:-rotate-1">
              <h2 className="text-2xl sm:text-4xl font-black text-black uppercase">
                Como Funciona
              </h2>
            </div>
            <p className="text-xl text-gray-800 font-bold">
              3 passos simples para resultados personalizados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-cyan-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] p-4 sm:p-6 md:p-8 transform sm:rotate-1">
                <div className="w-16 h-16 bg-black text-cyan-400 border-4 border-black flex items-center justify-center text-3xl font-black shadow-[4px_4px_0_0_#000] mb-6">
                  1
                </div>
                <h3 className="text-2xl font-black text-black uppercase mb-4">Responda o Questionário</h3>
                <p className="text-black font-bold mb-4 leading-relaxed">
                  6 passos rápidos sobre sua saúde, dieta e estilo de vida.{' '}
                  Leva apenas <span className="bg-black text-cyan-400 px-2 py-1">2-3 minutos</span>{' '}
                  para completar.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="info" size="sm">Dados demográficos</Badge>
                  <Badge variant="info" size="sm">Estilo de vida</Badge>
                  <Badge variant="info" size="sm">Condições de saúde</Badge>
                </div>
              </div>
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-black" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-lime-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] p-4 sm:p-6 md:p-8 transform sm:-rotate-1">
                <div className="w-16 h-16 bg-black text-lime-400 border-4 border-black flex items-center justify-center text-3xl font-black shadow-[4px_4px_0_0_#000] mb-6">
                  2
                </div>
                <h3 className="text-2xl font-black text-black uppercase mb-4">Receba Recomendações</h3>
                <p className="text-black font-bold mb-4 leading-relaxed">
                  Nosso algoritmo analisa seu perfil e gera <span className="bg-black text-lime-400 px-2 py-1">recomendações instantâneas</span>{' '}
                  com dosagens específicas, prioridades e justificativas científicas.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="success" size="sm">Dosagens personalizadas</Badge>
                  <Badge variant="success" size="sm">Priorização clara</Badge>
                  <Badge variant="success" size="sm">Links científicos</Badge>
                </div>
              </div>
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-black" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-pink-500 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] p-4 sm:p-6 md:p-8 transform sm:rotate-1">
              <div className="w-16 h-16 bg-black text-pink-500 border-4 border-black flex items-center justify-center text-3xl font-black shadow-[4px_4px_0_0_#000] mb-6">
                3
              </div>
              <h3 className="text-2xl font-black text-white uppercase mb-4">Consulte seu Médico</h3>
              <p className="text-white font-bold mb-4 leading-relaxed">
                Use os resultados como <span className="bg-black text-pink-500 px-2 py-1">base para conversar</span>{' '}
                com seu nutricionista ou médico. Nosso relatório facilita a discussão.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="danger" size="sm">Relatório completo</Badge>
                <Badge variant="danger" size="sm">Justificativas claras</Badge>
                <Badge variant="danger" size="sm">Referências científicas</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anúncio entre seções */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HorizontalAd />
      </div>

      {/* Nutrients Showcase - NEOBRUTALISM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-block bg-lime-400 border-4 border-black shadow-[6px_6px_0_0_#000] px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:rotate-1">
            <h2 className="text-2xl sm:text-4xl font-black text-black uppercase">
              44 Nutrientes Essenciais
            </h2>
          </div>
          <p className="text-xl text-gray-800 font-bold">
            Cada nutriente é avaliado considerando seu perfil único
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left - Benefits */}
          <div className="space-y-6">
            <Card className="bg-cyan-400 hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0_0_#000] transition-all">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <strong className="text-lg text-black block mb-2 font-black uppercase">Economia Inteligente</strong>
                    <p className="text-black font-bold">
                      Evite gastar dinheiro com suplementos que você não precisa.
                      Focamos apenas no que é essencial para você.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-lime-400 hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0_0_#000] transition-all">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-lime-400" />
                  </div>
                  <div>
                    <strong className="text-lg text-black block mb-2 font-black uppercase">Máxima Segurança</strong>
                    <p className="text-black font-bold">
                      Alertas automáticos sobre contraindicações e interações perigosas
                      com medicamentos que você usa.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-400 hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0_0_#000] transition-all">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <strong className="text-lg text-black block mb-2 font-black uppercase">Educação Contínua</strong>
                    <p className="text-black font-bold">
                      Aprenda sobre cada nutriente: funções, fontes alimentares,
                      deficiências e evidências científicas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-pink-500 hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0_0_#000] transition-all">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <strong className="text-lg text-white block mb-2 font-black uppercase">100% Gratuito</strong>
                    <p className="text-white font-bold">
                      Sem pegadinhas, sem cadastro obrigatório, sem limites de uso.
                      Queremos democratizar acesso à informação de qualidade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Nutrients Grid */}
          <div>
            <div className="bg-yellow-400 border-4 border-black shadow-[6px_6px_0_0_#000] sm:shadow-[12px_12px_0_0_#000] p-4 sm:p-6 md:p-8">
              <h3 className="text-3xl font-black text-black mb-6 uppercase text-center">
                Nutrientes Analisados
              </h3>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { name: 'B12', emoji: '💉', color: 'bg-cyan-400' },
                  { name: 'D', emoji: '☀️', color: 'bg-lime-400' },
                  { name: 'Cálcio', emoji: '🦴', color: 'bg-pink-500' },
                  { name: 'Mg', emoji: '⚡', color: 'bg-cyan-400' },
                  { name: 'Ferro', emoji: '🩸', color: 'bg-lime-400' },
                  { name: 'Ω-3', emoji: '🐟', color: 'bg-pink-500' },
                  { name: 'C', emoji: '🍊', color: 'bg-cyan-400' },
                  { name: 'E', emoji: '🌰', color: 'bg-lime-400' },
                  { name: 'Zinco', emoji: '🛡️', color: 'bg-pink-500' },
                  { name: 'Folato', emoji: '🤰', color: 'bg-cyan-400' },
                  { name: 'B6', emoji: '🧠', color: 'bg-lime-400' },
                  { name: 'K2', emoji: '🫀', color: 'bg-pink-500' },
                  { name: 'Iodo', emoji: '🦋', color: 'bg-cyan-400' },
                  { name: 'Se', emoji: '💪', color: 'bg-lime-400' },
                  { name: 'A', emoji: '👁️', color: 'bg-pink-500' }
                ].map((nutrient, idx) => (
                  <div
                    key={idx}
                    className={`${nutrient.color} border-2 border-black shadow-[3px_3px_0_0_#000] p-3 text-center hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000] transition-all cursor-pointer`}
                  >
                    <div className="text-2xl mb-1">{nutrient.emoji}</div>
                    <div className="text-xs font-black uppercase text-black">{nutrient.name}</div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link href="/nutrientes">
                  <Button variant="primary" size="lg" className="w-full">
                    Ver Todos os 44 Nutrientes →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - NEOBRUTALISM */}
      <section className="relative overflow-hidden bg-pink-500 border-t-8 border-black border-b-8 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="inline-block mb-8">
            <Badge variant="warning" size="lg" className="text-xl px-6 py-3">
              ⚡ Gratuito e Sem Cadastro
            </Badge>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black mb-8 text-white uppercase leading-tight">
            Pronto para Descobrir{' '}
            <span className="bg-black text-pink-500 px-3 py-2 inline-block sm:-rotate-1">
              Suas Necessidades
            </span>{' '}
            Nutricionais?
          </h2>

          <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] p-4 sm:p-6 mb-10 max-w-2xl mx-auto">
            <p className="text-xl text-black font-bold leading-relaxed">
              Milhares de pessoas já usaram o Suplementa Já para tomar decisões mais informadas
              sobre suplementação. Faça sua avaliação agora e receba resultados em 2 minutos.
            </p>
          </div>

          <Link href="/avaliacao" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg sm:text-2xl px-8 sm:px-12 py-5 sm:py-8 w-full sm:w-auto"
            >
              Começar Avaliação Gratuita
              <ArrowRight className="ml-2 sm:ml-3 w-6 sm:w-8 h-6 sm:h-8" />
            </Button>
          </Link>

          <div className="mt-8 bg-black border-4 border-black p-4 inline-block">
            <p className="text-pink-500 flex items-center gap-2 font-bold uppercase">
              <CheckCircle2 className="w-5 h-5" />
              Sem e-mail • Sem cadastro • Resultado instantâneo
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
