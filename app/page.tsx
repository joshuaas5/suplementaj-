import Link from 'next/link'
import { ArrowRight, CheckCircle2, Shield, Sparkles, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { DisclaimerBanner } from '@/components/layout/DisclaimerBanner'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Descubra os <span className="text-primary-600">Suplementos Certos</span><br />
            para Você
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Recomendações personalizadas de suplementação vitamínica e mineral baseadas em
            evidências científicas. Responda um questionário rápido e receba orientações
            adaptadas ao seu perfil de saúde.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/avaliacao">
              <Button size="lg" className="group">
                Fazer Avaliação Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/nutrientes">
              <Button variant="outline" size="lg">
                Explorar Nutrientes
              </Button>
            </Link>
          </div>

          <DisclaimerBanner />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card hover>
            <CardHeader>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary-600" />
              </div>
              <CardTitle>Personalizado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Algoritmo inteligente analisa seu perfil individual: idade, dieta, condições
                de saúde, medicamentos e sintomas para recomendações precisas.
              </p>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-success-600" />
              </div>
              <CardTitle>Baseado em Ciência</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Todas as recomendações são fundamentadas em estudos científicos e incluem
                referências clicáveis para você verificar as evidências.
              </p>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <div className="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-warning-600" />
              </div>
              <CardTitle>Seguro e Informativo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Identifica contraindicações importantes e alerta sobre interações
                medicamentosas para sua segurança.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Como Funciona
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Responda o Questionário</h3>
              <p className="text-gray-600">
                6 passos rápidos sobre sua saúde, dieta e estilo de vida (2-3 minutos)
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Receba Recomendações</h3>
              <p className="text-gray-600">
                Algoritmo analisa seu perfil e gera recomendações personalizadas com dosagens
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Consulte seu Médico</h3>
              <p className="text-gray-600">
                Leve os resultados para discussão com seu nutricionista ou médico
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Por que usar o VitaGuia?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Economia de tempo:</strong>
                  <p className="text-gray-600">Evite comprar suplementos desnecessários</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Segurança:</strong>
                  <p className="text-gray-600">Alertas sobre contraindicações e interações medicamentosas</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Educação:</strong>
                  <p className="text-gray-600">Entenda cada nutriente e suas funções no corpo</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">Gratuito:</strong>
                  <p className="text-gray-600">100% gratuito e sem necessidade de cadastro</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">15 Nutrientes Analisados</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>• Vitamina B12</div>
              <div>• Vitamina D</div>
              <div>• Cálcio</div>
              <div>• Magnésio</div>
              <div>• Ferro</div>
              <div>• Ômega-3</div>
              <div>• Vitamina C</div>
              <div>• Vitamina E</div>
              <div>• Zinco</div>
              <div>• Ácido Fólico</div>
              <div>• Vitamina B6</div>
              <div>• Vitamina K2</div>
              <div>• Iodo</div>
              <div>• Selênio</div>
              <div>• Vitamina A</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Descobrir Suas Necessidades?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Faça sua avaliação gratuita agora e receba recomendações personalizadas em minutos
          </p>
          <Link href="/avaliacao">
            <Button size="lg" variant="secondary" className="group">
              Começar Avaliação Gratuita
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
