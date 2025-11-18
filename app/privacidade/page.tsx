import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Shield, Lock, Eye, Trash2, FileText, Mail } from 'lucide-react'

export const metadata = {
  title: 'Política de Privacidade | Suplementa Já',
  description: 'Política de Privacidade e proteção de dados pessoais do Suplementa Já em conformidade com a LGPD.',
}

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-cyan-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] px-6 py-3 mb-6 sm:rotate-1">
            <h1 className="text-3xl sm:text-5xl font-black text-black uppercase">Política de Privacidade</h1>
          </div>
          <p className="text-sm text-gray-600 font-bold">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
          <p className="text-base text-gray-800 font-bold mt-4">
            Em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)
          </p>
        </div>

        {/* Introdução */}
        <Card className="mb-6 bg-lime-400">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center">
                <Shield className="w-5 h-5 text-lime-400" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">1. Introdução</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-black font-bold leading-relaxed">
              O <strong>Suplementa Já</strong> (&quot;nós&quot;, &quot;nosso&quot; ou &quot;plataforma&quot;) respeita sua privacidade
              e está comprometido em proteger seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos,
              armazenamos e protegemos suas informações.
            </p>
          </CardContent>
        </Card>

        {/* Dados Coletados */}
        <Card className="mb-6 bg-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center">
                <FileText className="w-5 h-5 text-yellow-400" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">2. Dados Que Coletamos</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-yellow-100 border-2 border-yellow-400 p-4">
              <h3 className="font-black text-base mb-2">📊 Dados Fornecidos Voluntariamente:</h3>
              <ul className="space-y-2 text-sm font-bold text-black">
                <li>• <strong>Dados demográficos:</strong> idade, sexo, peso, altura</li>
                <li>• <strong>Dados de saúde:</strong> condições médicas, sintomas, medicamentos em uso, cirurgias prévias</li>
                <li>• <strong>Dados de estilo de vida:</strong> dieta, atividade física, exposição solar, consumo de álcool/tabaco</li>
              </ul>
            </div>

            <div className="bg-cyan-100 border-2 border-cyan-400 p-4">
              <h3 className="font-black text-base mb-2">🔍 Dados Coletados Automaticamente:</h3>
              <ul className="space-y-2 text-sm font-bold text-black">
                <li>• <strong>Dados técnicos:</strong> endereço IP, tipo de navegador, sistema operacional</li>
                <li>• <strong>Dados de uso:</strong> páginas visitadas, tempo de sessão, interações com o site</li>
                <li>• <strong>Cookies:</strong> usamos cookies para melhorar sua experiência (veja seção específica)</li>
              </ul>
            </div>

            <div className="bg-pink-100 border-2 border-pink-500 p-4">
              <h3 className="font-black text-base mb-2">⚠️ Dados Sensíveis (LGPD Art. 5º, II):</h3>
              <p className="text-sm font-bold text-black">
                Coletamos dados sobre sua <strong>saúde</strong> para fornecer recomendações personalizadas.
                O tratamento destes dados sensíveis é realizado <strong>com seu consentimento explícito</strong> e
                exclusivamente para a finalidade de gerar as recomendações de suplementação.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Como Usamos os Dados */}
        <Card className="mb-6 bg-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center">
                <Eye className="w-5 h-5 text-cyan-400" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">3. Como Usamos Seus Dados</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-black font-bold mb-4">Utilizamos seus dados para:</p>
            <ul className="space-y-3">
              <li className="flex gap-3 bg-gray-50 border-2 border-black p-3">
                <span className="font-black">1.</span>
                <span className="font-bold text-sm">
                  <strong>Gerar recomendações personalizadas</strong> de suplementação baseadas no seu perfil
                </span>
              </li>
              <li className="flex gap-3 bg-gray-50 border-2 border-black p-3">
                <span className="font-black">2.</span>
                <span className="font-bold text-sm">
                  <strong>Melhorar nosso serviço</strong> através de análises agregadas e anônimas
                </span>
              </li>
              <li className="flex gap-3 bg-gray-50 border-2 border-black p-3">
                <span className="font-black">3.</span>
                <span className="font-bold text-sm">
                  <strong>Identificar contraindicações e interações</strong> medicamentosas perigosas
                </span>
              </li>
              <li className="flex gap-3 bg-gray-50 border-2 border-black p-3">
                <span className="font-black">4.</span>
                <span className="font-bold text-sm">
                  <strong>Cumprir obrigações legais</strong> quando aplicável
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Armazenamento */}
        <Card className="mb-6 bg-yellow-400">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center">
                <Lock className="w-5 h-5 text-yellow-400" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">4. Armazenamento e Segurança</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white border-4 border-black p-4">
              <h3 className="font-black text-base mb-2">💾 Onde Armazenamos:</h3>
              <p className="text-black font-bold text-sm">
                Seus dados do questionário são armazenados <strong>localmente no seu navegador</strong> (localStorage).
                NÃO enviamos seus dados pessoais de saúde para servidores externos. As recomendações são geradas
                localmente no seu dispositivo.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-4">
              <h3 className="font-black text-base mb-2">🔒 Como Protegemos:</h3>
              <ul className="space-y-2 text-sm font-bold text-black">
                <li>• Conexão HTTPS criptografada em todas as páginas</li>
                <li>• Processamento local dos dados sensíveis</li>
                <li>• Não compartilhamos seus dados de saúde com terceiros</li>
                <li>• Monitoramento contínuo de segurança</li>
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-4">
              <h3 className="font-black text-base mb-2">⏱️ Tempo de Retenção:</h3>
              <p className="text-black font-bold text-sm">
                Seus dados ficam armazenados no seu navegador até você limpá-los manualmente ou desinstalar o navegador.
                Você pode excluir seus dados a qualquer momento através das configurações do seu navegador.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Compartilhamento */}
        <Card className="mb-6 bg-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center">
                <Mail className="w-5 h-5 text-pink-500" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">5. Compartilhamento de Dados</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-black font-bold mb-4">
              <strong className="text-pink-500">NÃO vendemos ou compartilhamos seus dados pessoais de saúde com terceiros.</strong>
            </p>
            <div className="bg-gray-100 border-2 border-gray-300 p-4">
              <p className="text-black font-bold text-sm mb-3">
                Podemos compartilhar dados não identificáveis com:
              </p>
              <ul className="space-y-2 text-sm font-bold text-black">
                <li>• <strong>Google Analytics:</strong> dados agregados de uso (sem dados de saúde)</li>
                <li>• <strong>Amazon Associates:</strong> quando você clica em links de produtos (sem dados de saúde)</li>
                <li>• <strong>Autoridades legais:</strong> apenas se legalmente obrigados</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="mb-6 bg-pink-500">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-white">6. Cookies e Tecnologias Similares</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white font-bold mb-4">
              Utilizamos cookies para:
            </p>
            <ul className="space-y-2 text-sm font-bold text-white">
              <li>• <strong>Cookies essenciais:</strong> necessários para funcionamento básico (armazenar sua avaliação)</li>
              <li>• <strong>Cookies de análise:</strong> Google Analytics para entender como você usa o site</li>
              <li>• <strong>Cookies de publicidade:</strong> Amazon Associates para rastrear comissões de afiliados</li>
            </ul>
            <p className="text-white font-bold mt-4 text-sm">
              Você pode desabilitar cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site.
            </p>
          </CardContent>
        </Card>

        {/* Direitos do Titular (LGPD) */}
        <Card className="mb-6 bg-lime-400">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">7. Seus Direitos (LGPD)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-black font-bold mb-4">
              Conforme a LGPD, você tem direito de:
            </p>
            <div className="grid gap-3">
              <div className="bg-white border-2 border-black p-3">
                <strong className="font-black text-sm">📋 Confirmação e Acesso:</strong>
                <p className="text-sm font-bold">Confirmar se tratamos seus dados e acessá-los</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <strong className="font-black text-sm">✏️ Correção:</strong>
                <p className="text-sm font-bold">Corrigir dados incompletos ou desatualizados</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <strong className="font-black text-sm">🗑️ Exclusão:</strong>
                <p className="text-sm font-bold">Solicitar eliminação de dados desnecessários</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <strong className="font-black text-sm">🚫 Revogação:</strong>
                <p className="text-sm font-bold">Revogar consentimento a qualquer momento</p>
              </div>
              <div className="bg-white border-2 border-black p-3">
                <strong className="font-black text-sm">📤 Portabilidade:</strong>
                <p className="text-sm font-bold">Solicitar portabilidade dos dados</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Crianças */}
        <Card className="mb-6 bg-white">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">8. Menores de Idade</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-black font-bold">
              Nosso serviço não é direcionado a menores de 18 anos. Se você tem menos de 18 anos, recomendamos
              usar a plataforma <strong>com o consentimento e supervisão de um responsável legal</strong>.
            </p>
          </CardContent>
        </Card>

        {/* Alterações */}
        <Card className="mb-6 bg-cyan-400">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">9. Alterações na Política</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-black font-bold">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas
              através de um aviso destacado no site. A data da última atualização estará sempre no topo desta página.
            </p>
          </CardContent>
        </Card>

        {/* Contato */}
        <Card className="mb-8 bg-yellow-400">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-yellow-400" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">10. Como Exercer Seus Direitos</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-white border-4 border-black p-4">
              <p className="text-black font-bold mb-3">
                Para exercer seus direitos sob a LGPD ou esclarecer dúvidas sobre esta Política:
              </p>
              <div className="space-y-2 text-sm font-bold text-black">
                <p><strong>📧 E-mail:</strong> [SEU EMAIL DE CONTATO]</p>
                <p><strong>⏱️ Prazo de resposta:</strong> até 15 dias úteis</p>
              </div>
            </div>
            <div className="bg-pink-100 border-2 border-pink-500 p-4 mt-4">
              <p className="text-black font-bold text-sm">
                <strong>💡 Dica:</strong> Como seus dados são armazenados localmente no navegador, você pode
                excluí-los imediatamente através das configurações do navegador (limpar dados de navegação/localStorage).
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
