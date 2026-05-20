import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { AlertTriangle, FileText, Scale, Shield, XCircle } from 'lucide-react'

export const metadata = {
  title: 'Termos de Uso | Suplementa Já',
  description: 'Termos de Uso e Condições de Serviço do Suplementa Já.',
  alternates: {
    canonical: '/termos',
  },
}

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-pink-500 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] px-6 py-3 mb-6 sm:-rotate-1">
            <h1 className="text-3xl sm:text-5xl font-black text-white uppercase">Termos de Uso</h1>
          </div>
          <p className="text-sm text-gray-600 font-bold">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        {/* Disclaimer Médico PRINCIPAL */}
        <Card className="mb-6 bg-pink-500 border-4 border-black">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-pink-500" />
              </div>
              <CardTitle className="text-xl sm:text-2xl text-white">⚠️ AVISO MÉDICO IMPORTANTE</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-white border-4 border-black p-4">
              <p className="text-black font-black text-base leading-relaxed uppercase">
                O SUPLEMENTA JÁ NÃO É UM SERVIÇO MÉDICO E NÃO SUBSTITUI CONSULTA PROFISSIONAL
              </p>
            </div>
            <div className="bg-white border-4 border-black p-4">
              <ul className="space-y-2 text-sm font-bold text-black">
                <li>❌ <strong>NÃO fazemos diagnósticos</strong> médicos</li>
                <li>❌ <strong>NÃO prescrevemos</strong> tratamentos</li>
                <li>❌ <strong>NÃO substituímos</strong> médicos, nutricionistas ou nutrólogos</li>
                <li>❌ <strong>NÃO garantimos</strong> resultados específicos de saúde</li>
              </ul>
            </div>
            <div className="bg-white border-4 border-black p-4">
              <p className="text-black font-bold text-sm leading-relaxed">
                ✅ <strong>Somos uma ferramenta educacional</strong> que fornece informações baseadas em evidências
                científicas para você <strong>discutir com seu médico</strong>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Aceitação */}
        <Card className="mb-6 bg-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center">
                <FileText className="w-5 h-5 text-yellow-400" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">1. Aceitação dos Termos</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-black font-bold leading-relaxed">
              Ao acessar e usar o <strong>Suplementa Já</strong>, você concorda com estes Termos de Uso e nossa
              Política de Privacidade. Se você não concorda com qualquer parte destes termos,
              <strong> não utilize nosso serviço</strong>.
            </p>
          </CardContent>
        </Card>

        {/* Natureza do Serviço */}
        <Card className="mb-6 bg-yellow-400">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">2. Natureza do Serviço</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white border-4 border-black p-4">
              <h3 className="font-black text-base mb-2">📚 Ferramenta Educacional</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                O Suplementa Já é uma <strong>plataforma educacional</strong> que fornece informações gerais sobre
                suplementação nutricional baseadas em evidências científicas publicadas. Não oferecemos aconselhamento
                médico, diagnóstico ou tratamento.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-4">
              <h3 className="font-black text-base mb-2">🤖 Recomendações Automatizadas</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                Nossas recomendações são geradas por <strong>algoritmo automatizado</strong> baseado nas informações
                que você fornece e em diretrizes científicas gerais. Não substituem avaliação individualizada por
                profissional de saúde qualificado.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-4">
              <h3 className="font-black text-base mb-2">⚕️ Consulte Sempre um Profissional</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                <strong className="text-pink-500">OBRIGATÓRIO:</strong> Antes de iniciar qualquer suplementação,
                consulte um médico, nutricionista ou nutrólogo. Eles podem avaliar sua situação específica,
                solicitar exames e fornecer orientação personalizada.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Responsabilidades do Usuário */}
        <Card className="mb-6 bg-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center">
                <Shield className="w-5 h-5 text-cyan-400" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">3. Suas Responsabilidades</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-black font-bold mb-4">Ao usar o Suplementa Já, você concorda em:</p>
            <div className="space-y-3">
              <div className="flex gap-3 bg-gray-50 border-2 border-black p-3">
                <span className="font-black">1.</span>
                <span className="font-bold text-sm">
                  Fornecer <strong>informações verdadeiras e precisas</strong> no questionário
                </span>
              </div>
              <div className="flex gap-3 bg-gray-50 border-2 border-black p-3">
                <span className="font-black">2.</span>
                <span className="font-bold text-sm">
                  <strong>Consultar um profissional de saúde</strong> antes de iniciar qualquer suplementação
                </span>
              </div>
              <div className="flex gap-3 bg-gray-50 border-2 border-black p-3">
                <span className="font-black">3.</span>
                <span className="font-bold text-sm">
                  <strong>Não usar</strong> nossas recomendações como substituto de aconselhamento médico
                </span>
              </div>
              <div className="flex gap-3 bg-gray-50 border-2 border-black p-3">
                <span className="font-black">4.</span>
                <span className="font-bold text-sm">
                  Informar seu médico sobre <strong>todos os suplementos</strong> que você toma ou pretende tomar
                </span>
              </div>
              <div className="flex gap-3 bg-gray-50 border-2 border-black p-3">
                <span className="font-black">5.</span>
                <span className="font-bold text-sm">
                  Usar o serviço apenas para <strong>fins legítimos e legais</strong>
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Limitações e Exclusões */}
        <Card className="mb-6 bg-pink-500">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center">
                <XCircle className="w-6 h-6 text-pink-500" />
              </div>
              <CardTitle className="text-xl sm:text-2xl text-white">4. Limitações e Isenções</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white border-4 border-black p-4">
              <h3 className="font-black text-base mb-2 text-pink-500">⚠️ Não Garantimos Precisão Absoluta</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                Embora nos esforcemos para fornecer informações precisas baseadas em pesquisas científicas,
                <strong> não garantimos que as informações estejam sempre completas, precisas ou atualizadas</strong>.
                A ciência da nutrição está em constante evolução.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-4">
              <h3 className="font-black text-base mb-2 text-pink-500">🚫 Isenção de Responsabilidade Médica</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                <strong>NÃO SOMOS RESPONSÁVEIS</strong> por quaisquer consequências decorrentes do uso de suplementos
                baseados em nossas recomendações. Você assume total responsabilidade por suas decisões de saúde.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-4">
              <h3 className="font-black text-base mb-2 text-pink-500">⚡ Emergências Médicas</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                <strong className="text-pink-500">EM CASO DE EMERGÊNCIA MÉDICA</strong>, procure atendimento médico
                imediato. Não use o Suplementa Já para situações urgentes ou que exijam avaliação médica imediata.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-4">
              <h3 className="font-black text-base mb-2 text-pink-500">💊 Interações e Reações Adversas</h3>
              <p className="text-black font-bold text-sm leading-relaxed">
                Suplementos podem causar <strong>efeitos colaterais e interagir com medicamentos</strong>. Sempre
                informe seu médico sobre todos os suplementos que você toma. Interrompa o uso e procure atendimento
                médico se tiver reações adversas.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Informações Fornecidas Pelo Usuário */}
        <Card className="mb-6 bg-cyan-400">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">5. Informações Fornecidas por Você</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-black font-bold mb-4">
              A <strong>qualidade das recomendações depende da precisão</strong> das informações que você fornece.
            </p>
            <div className="bg-white border-4 border-black p-4">
              <ul className="space-y-2 text-sm font-bold text-black">
                <li>• Forneça informações <strong>completas e verdadeiras</strong></li>
                <li>• Atualize o questionário se sua situação de saúde mudar</li>
                <li>• Não omita condições médicas ou medicamentos importantes</li>
                <li>• Informações imprecisas podem levar a recomendações inadequadas</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Links de Afiliados */}
        <Card className="mb-6 bg-lime-400">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">6. Links de Afiliados</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-black font-bold leading-relaxed">
              O Suplementa Já contém <strong>links de afiliados da Amazon</strong>. Se você comprar produtos através
              desses links, podemos receber uma pequena comissão sem custo adicional para você. Isso nos ajuda a
              manter o serviço gratuito.
            </p>
            <div className="bg-white border-4 border-black p-4 mt-4">
              <p className="text-black font-bold text-sm">
                <strong>Transparência:</strong> Os produtos recomendados são selecionados com base em critérios
                científicos, não por comissão. Recomendamos produtos que consideramos apropriados independentemente
                de serem links de afiliados ou não.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Propriedade Intelectual */}
        <Card className="mb-6 bg-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center">
                <Scale className="w-5 h-5 text-yellow-400" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">7. Propriedade Intelectual</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-black font-bold leading-relaxed">
              Todo o conteúdo do Suplementa Já (textos, algoritmos, design, base de dados) é protegido por direitos
              autorais e propriedade intelectual. Você pode usar o serviço para <strong>fins pessoais não comerciais</strong>.
            </p>
            <div className="bg-gray-100 border-2 border-gray-300 p-4 mt-4">
              <p className="text-black font-bold text-sm">
                <strong>Proibido:</strong> Copiar, reproduzir, modificar ou distribuir nosso conteúdo sem autorização
                expressa por escrito.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Modificações */}
        <Card className="mb-6 bg-yellow-400">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">8. Modificações dos Termos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-black font-bold leading-relaxed">
              Reservamos o direito de modificar estes Termos de Uso a qualquer momento. Mudanças significativas serão
              notificadas através de aviso no site. O uso continuado após modificações constitui aceitação dos novos termos.
            </p>
          </CardContent>
        </Card>

        {/* Legislação Aplicável */}
        <Card className="mb-6 bg-white">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">9. Legislação Aplicável</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-black font-bold leading-relaxed">
              Estes Termos são regidos pelas leis da <strong>República Federativa do Brasil</strong>, incluindo a
              Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018). Disputas serão resolvidas nos tribunais
              brasileiros competentes.
            </p>
          </CardContent>
        </Card>

        {/* Contato */}
        <Card className="mb-8 bg-pink-500">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-white">10. Contato</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white border-4 border-black p-4">
              <p className="text-black font-bold mb-3">
                Dúvidas sobre estes Termos de Uso?
              </p>
              <p className="text-black font-bold text-sm">
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
            <Link href="/faq" className="text-black font-bold hover:underline">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
