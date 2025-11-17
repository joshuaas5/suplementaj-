import Link from 'next/link'
import { ArrowRight, CheckCircle2, Shield, Sparkles, Users, Star, TrendingUp, Clock, Award } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { DisclaimerBanner } from '@/components/layout/DisclaimerBanner'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            {/* Trust Badges */}
            <div className="flex justify-center gap-3 mb-8 flex-wrap">
              <Badge variant="success" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Star className="w-3 h-3 mr-1" /> Baseado em Ciência
              </Badge>
              <Badge variant="info" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Shield className="w-3 h-3 mr-1" /> 100% Gratuito
              </Badge>
              <Badge variant="warning" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Award className="w-3 h-3 mr-1" /> Sem Cadastro
              </Badge>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Descubra os Suplementos<br />
              <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                Certos para Você
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Recomendações personalizadas de vitaminas e minerais baseadas em
              <span className="font-semibold text-white"> evidências científicas</span>.
              <br />Responda 6 perguntas e receba seu plano em 2 minutos.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">39</div>
                <div className="text-sm text-primary-200">Nutrientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-primary-200">Condições</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">2min</div>
                <div className="text-sm text-primary-200">Avaliação</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/avaliacao">
                <Button
                  size="lg"
                  variant="secondary"
                  className="group shadow-2xl shadow-black/20 text-lg px-8 py-6 hover:scale-105 transition-transform"
                >
                  Fazer Avaliação Gratuita
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/nutrientes">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-6 transition-all"
                >
                  Explorar Nutrientes
                </Button>
              </Link>
            </div>

            <p className="text-sm text-primary-200 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              Resultado instantâneo • Nenhum e-mail necessário
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <DisclaimerBanner />
      </div>

      {/* Features Section with Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Por que escolher o Suplementa Já?
          </h2>
          <p className="text-xl text-gray-600">
            Tecnologia e ciência trabalhando para sua saúde
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-primary-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">100% Personalizado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nosso algoritmo inteligente analisa <strong>50+ fatores</strong>{' '}
                do seu perfil: idade, sexo, dieta, condições de saúde, medicamentos e sintomas{' '}
                para recomendações ultra-precisas.
              </p>
              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-primary-800 font-medium">
                  ✓ Análise de interações medicamentosas<br />
                  ✓ Identificação de contraindicações<br />
                  ✓ Dosagens personalizadas
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-success-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-success-500 to-success-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Baseado em Ciência</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg leading-relaxed">
                Todas as recomendações são fundamentadas em <strong>estudos científicos</strong>{' '}
                publicados em revistas médicas. Incluímos referências clicáveis com DOI para
                você verificar.
              </p>
              <div className="mt-6 p-4 bg-success-50 rounded-lg">
                <p className="text-sm text-success-800 font-medium">
                  ✓ Revisões sistemáticas e meta-análises<br />
                  ✓ Guidelines de organizações médicas<br />
                  ✓ Estudos randomizados controlados
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-warning-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-warning-500 to-warning-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Seguro e Completo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg leading-relaxed">
                Alertas automáticos sobre <strong>contraindicações</strong>{' '}
                importantes, interações medicamentosas perigosas e dosagens seguras para cada perfil.
              </p>
              <div className="mt-6 p-4 bg-warning-50 rounded-lg">
                <p className="text-sm text-warning-800 font-medium">
                  ✓ Alertas de contraindicação (ex: K2 + warfarin)<br />
                  ✓ Limites superiores toleráveis<br />
                  ✓ Recomendações de timing
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works - Timeline Style */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600">
              3 passos simples para resultados personalizados
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-300 via-primary-400 to-primary-500" />

            <div className="space-y-16">
              {/* Step 1 */}
              <div className="relative flex items-center md:justify-end">
                <div className="md:w-5/12 md:pr-12">
                  <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary-200">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                        1
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Responda o Questionário</h3>
                    </div>
                    <p className="text-gray-600 text-lg">
                      6 passos rápidos sobre sua saúde, dieta e estilo de vida.{' '}
                      Leva apenas <strong>2-3 minutos</strong>{' '}
                      para completar.
                    </p>
                    <div className="mt-4 flex gap-2 flex-wrap">
                      <Badge variant="info">Dados demográficos</Badge>
                      <Badge variant="info">Estilo de vida</Badge>
                      <Badge variant="info">Condições de saúde</Badge>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-white shadow-lg" />
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center md:justify-start">
                <div className="md:w-5/12 md:ml-auto md:pl-12">
                  <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-success-200">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-success-500 to-success-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                        2
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Receba Recomendações</h3>
                    </div>
                    <p className="text-gray-600 text-lg">
                      Nosso algoritmo analisa seu perfil e gera <strong>recomendações instantâneas</strong>{' '}
                      com dosagens específicas, prioridades e justificativas científicas.
                    </p>
                    <div className="mt-4 flex gap-2 flex-wrap">
                      <Badge variant="success">Dosagens personalizadas</Badge>
                      <Badge variant="success">Priorização clara</Badge>
                      <Badge variant="success">Links científicos</Badge>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-success-500 rounded-full border-4 border-white shadow-lg" />
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center md:justify-end">
                <div className="md:w-5/12 md:pr-12">
                  <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-warning-200">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-warning-500 to-warning-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                        3
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Consulte seu Médico</h3>
                    </div>
                    <p className="text-gray-600 text-lg">
                      Use os resultados como <strong>base para conversar</strong>{' '}
                      com seu nutricionista ou médico. Nosso relatório facilita a discussão.
                    </p>
                    <div className="mt-4 flex gap-2 flex-wrap">
                      <Badge variant="warning">Relatório completo</Badge>
                      <Badge variant="warning">Justificativas claras</Badge>
                      <Badge variant="warning">Referências científicas</Badge>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-warning-500 rounded-full border-4 border-white shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrients Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Benefits */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Análise Completa de 39 Nutrientes Essenciais
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Cada nutriente é avaliado considerando seu perfil único de saúde
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-success-600" />
                </div>
                <div>
                  <strong className="text-lg text-gray-900 block mb-1">Economia Inteligente</strong>
                  <p className="text-gray-600">
                    Evite gastar dinheiro com suplementos que você não precisa.
                    Focamos apenas no que é essencial para você.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-warning-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-warning-600" />
                </div>
                <div>
                  <strong className="text-lg text-gray-900 block mb-1">Máxima Segurança</strong>
                  <p className="text-gray-600">
                    Alertas automáticos sobre contraindicações e interações perigosas
                    com medicamentos que você usa.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <strong className="text-lg text-gray-900 block mb-1">Educação Contínua</strong>
                  <p className="text-gray-600">
                    Aprenda sobre cada nutriente: funções, fontes alimentares,
                    deficiências e evidências científicas.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <strong className="text-lg text-gray-900 block mb-1">100% Gratuito</strong>
                  <p className="text-gray-600">
                    Sem pegadinhas, sem cadastro obrigatório, sem limites de uso.
                    Queremos democratizar acesso à informação de qualidade.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right - Nutrients Grid */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Nutrientes Analisados
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Vitamina B12', emoji: '💉' },
                  { name: 'Vitamina D', emoji: '☀️' },
                  { name: 'Cálcio', emoji: '🦴' },
                  { name: 'Magnésio', emoji: '⚡' },
                  { name: 'Ferro', emoji: '🩸' },
                  { name: 'Ômega-3', emoji: '🐟' },
                  { name: 'Vitamina C', emoji: '🍊' },
                  { name: 'Vitamina E', emoji: '🌰' },
                  { name: 'Zinco', emoji: '🛡️' },
                  { name: 'Ácido Fólico', emoji: '🤰' },
                  { name: 'Vitamina B6', emoji: '🧠' },
                  { name: 'Vitamina K2', emoji: '🫀' },
                  { name: 'Iodo', emoji: '🦋' },
                  { name: 'Selênio', emoji: '💪' },
                  { name: 'Vitamina A', emoji: '👁️' }
                ].map((nutrient, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-white hover:bg-white/20 transition-all cursor-pointer"
                  >
                    <div className="text-2xl mb-2">{nutrient.emoji}</div>
                    <div className="text-sm font-medium">{nutrient.name}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link href="/nutrientes">
                  <button className="text-white border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary-600 transition-all font-semibold">
                    Explorar Todos os Nutrientes →
                  </button>
                </Link>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl" />
          </div>
        </div>
      </section>

      {/* CTA Final - More Engaging */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-700 to-purple-700 text-white py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4">
          <div className="inline-block mb-6">
            <Badge variant="success" className="bg-yellow-400 text-gray-900 border-yellow-500 text-base px-4 py-2">
              ⚡ Gratuito e Sem Cadastro
            </Badge>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Pronto para Descobrir Suas<br />Necessidades Nutricionais?
          </h2>

          <p className="text-xl sm:text-2xl mb-10 text-primary-100 leading-relaxed">
            Milhares de pessoas já usaram o Suplementa Já para tomar decisões mais informadas
            sobre suplementação. Faça sua avaliação agora e receba resultados em 2 minutos.
          </p>

          <Link href="/avaliacao">
            <Button
              size="lg"
              variant="secondary"
              className="group shadow-2xl shadow-black/30 text-xl px-10 py-7 hover:scale-105 transition-transform"
            >
              Começar Avaliação Gratuita
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>

          <p className="mt-6 text-primary-200 flex items-center justify-center gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4" />
            Sem e-mail • Sem cadastro • Resultado instantâneo
          </p>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-400/20 rounded-full blur-3xl" />
      </section>
    </div>
  )
}
