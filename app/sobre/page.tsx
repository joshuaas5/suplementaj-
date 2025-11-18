import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight, Heart, Shield, Users, Sparkles, Target, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Sobre | Suplementa Já',
  description: 'Conheça o Suplementa Já - plataforma gratuita de recomendações personalizadas de suplementação baseadas em evidências científicas.',
}

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] px-6 py-3 mb-6 sm:rotate-1">
            <h1 className="text-3xl sm:text-5xl font-black text-black uppercase">Sobre o Suplementa Já</h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-800 font-bold max-w-2xl mx-auto">
            Democratizando o acesso à informação de qualidade sobre suplementação nutricional
          </p>
        </div>

        {/* Missão */}
        <Card className="mb-8 bg-lime-400">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black border-2 border-black flex items-center justify-center">
                <Target className="w-6 h-6 text-lime-400" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl">Nossa Missão</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-black font-bold text-base sm:text-lg leading-relaxed">
              O <strong>Suplementa Já</strong> nasceu da necessidade de tornar a suplementação nutricional mais acessível e baseada em ciência.
              Acreditamos que todos merecem recomendações personalizadas de qualidade, sem precisar pagar consultas caras ou
              confiar em informações não verificadas da internet.
            </p>
          </CardContent>
        </Card>

        {/* O que fazemos */}
        <Card className="mb-8 bg-cyan-400">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black border-2 border-black flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl">O Que Fazemos</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white border-4 border-black p-4">
              <h3 className="font-black text-lg mb-2 uppercase">🎯 Análise Personalizada</h3>
              <p className="text-black font-bold">
                Nosso algoritmo avalia mais de <strong>40 fatores</strong> do seu perfil: idade, sexo, dieta, condições de saúde,
                medicamentos e sintomas para gerar recomendações ultra-precisas.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-4">
              <h3 className="font-black text-lg mb-2 uppercase">📚 Baseado em Ciência</h3>
              <p className="text-black font-bold">
                Todas as recomendações são fundamentadas em <strong>estudos científicos</strong> publicados em revistas médicas.
                Incluímos referências clicáveis com DOI para você verificar.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-4">
              <h3 className="font-black text-lg mb-2 uppercase">🛡️ Segurança em Primeiro Lugar</h3>
              <p className="text-black font-bold">
                Alertamos sobre <strong>contraindicações importantes</strong>, interações medicamentosas perigosas e
                dosagens seguras para cada perfil específico.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Por que gratuito */}
        <Card className="mb-8 bg-pink-500">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black border-2 border-black flex items-center justify-center">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl text-white">Por Que É Gratuito?</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-white font-bold text-base sm:text-lg leading-relaxed mb-4">
              Acreditamos que <strong>informação de qualidade sobre saúde deve ser acessível a todos</strong>, não apenas
              a quem pode pagar. O Suplementa Já é 100% gratuito e sempre será.
            </p>
            <p className="text-white font-bold text-base sm:text-lg leading-relaxed">
              Mantemos o projeto através de links de afiliados para produtos recomendados na Amazon. Se você decidir comprar
              através dos nossos links, ganhamos uma pequena comissão (sem custo extra para você), o que nos ajuda a continuar
              fornecendo este serviço gratuitamente.
            </p>
          </CardContent>
        </Card>

        {/* Como funciona */}
        <Card className="mb-8 bg-yellow-400">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black border-2 border-black flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-yellow-400" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl">Nossa Metodologia</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-3 items-start bg-white border-2 border-black p-3">
              <Badge variant="info" size="lg">1</Badge>
              <div>
                <strong className="font-black text-black">Coleta de Dados</strong>
                <p className="text-black font-bold text-sm">
                  Você responde um questionário detalhado sobre seu perfil de saúde
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start bg-white border-2 border-black p-3">
              <Badge variant="success" size="lg">2</Badge>
              <div>
                <strong className="font-black text-black">Análise Inteligente</strong>
                <p className="text-black font-bold text-sm">
                  Nosso algoritmo cruza seus dados com nossa base de conhecimento científico
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start bg-white border-2 border-black p-3">
              <Badge variant="danger" size="lg">3</Badge>
              <div>
                <strong className="font-black text-black">Recomendações Personalizadas</strong>
                <p className="text-black font-bold text-sm">
                  Você recebe sugestões específicas com dosagens, prioridades e justificativas
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Limitações e Disclaimers */}
        <Card className="mb-8 bg-white border-4 border-pink-500">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-pink-500 border-2 border-black flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl">⚠️ Importante Saber</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-pink-100 border-2 border-pink-500 p-4">
              <p className="text-black font-bold text-sm leading-relaxed">
                <strong className="font-black">Não somos médicos:</strong> O Suplementa Já é uma ferramenta educacional.
                Nossas recomendações NÃO substituem consulta médica ou nutricional.
              </p>
            </div>

            <div className="bg-pink-100 border-2 border-pink-500 p-4">
              <p className="text-black font-bold text-sm leading-relaxed">
                <strong className="font-black">Sempre consulte um profissional:</strong> Use nossos resultados como base
                para conversar com seu médico ou nutricionista antes de iniciar qualquer suplementação.
              </p>
            </div>

            <div className="bg-pink-100 border-2 border-pink-500 p-4">
              <p className="text-black font-bold text-sm leading-relaxed">
                <strong className="font-black">Não fazemos diagnósticos:</strong> Nosso sistema identifica necessidades
                potenciais baseadas em evidências gerais, não diagnostica deficiências específicas.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Nossa Equipe */}
        <Card className="mb-8 bg-cyan-400">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black border-2 border-black flex items-center justify-center">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl">Transparência Total</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-black font-bold text-base sm:text-lg leading-relaxed mb-4">
              O Suplementa Já é desenvolvido por profissionais apaixonados por saúde e tecnologia. Nossa base de dados é
              constantemente atualizada com as últimas pesquisas científicas.
            </p>
            <p className="text-black font-bold text-base sm:text-lg leading-relaxed">
              <strong>Fontes de Informação:</strong> Meta-análises, revisões sistemáticas, guidelines de organizações médicas
              (WHO, FDA, ANVISA), estudos randomizados controlados e consensos científicos internacionais.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="bg-yellow-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] p-6 sm:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-black uppercase mb-4">
            Pronto para Descobrir Suas Necessidades?
          </h2>
          <p className="text-black font-bold mb-6">
            Faça sua avaliação gratuita agora e receba recomendações personalizadas em 2 minutos
          </p>
          <Link href="/avaliacao" className="inline-block w-full sm:w-auto">
            <Button size="lg" variant="primary" className="w-full sm:w-auto">
              Fazer Avaliação Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/privacidade" className="text-black font-bold hover:underline">
              Política de Privacidade
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/termos" className="text-black font-bold hover:underline">
              Termos de Uso
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/faq" className="text-black font-bold hover:underline">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
