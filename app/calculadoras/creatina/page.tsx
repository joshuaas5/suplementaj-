import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CalculadoraCreatina } from '@/components/calculadoras'

export const metadata: Metadata = {
  title: 'Calculadora de Creatina - Quantos Gramas Tomar? | Suplementa Já',
  description: 'Calcule a dose ideal de creatina para seu peso. Fase de saturação vs manutenção. Baseado em estudos do ISSN. 3-5g por dia é realmente suficiente?',
  keywords: ['calculadora creatina', 'dose creatina', 'quantos gramas creatina', 'creatina por kg', 'saturação creatina', 'creatina monohidratada'],
  openGraph: {
    title: 'Calculadora de Creatina - Dose Ideal Por Peso',
    description: 'Descubra quantos gramas de creatina você deve tomar por dia baseado no seu peso corporal.',
    type: 'website',
  }
}

export default function CalculadoraCreatinaPage() {
  return (
    <div className="min-h-screen bg-yellow-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Navegação */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/calculadoras">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> Todas Calculadoras
            </Button>
          </Link>
          <Link href="/avaliacao">
            <Button variant="primary" size="sm">
              Avaliação Completa →
            </Button>
          </Link>
        </div>

        {/* Header SEO */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-black uppercase mb-4">
            💪 Calculadora de Creatina
          </h1>
          <p className="text-black font-bold mb-4">
            Calcule a <strong>dose ideal de creatina</strong> baseada no seu peso corporal. 
            Manutenção ou fase de saturação - qual usar?
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-400 px-3 py-1 border-2 border-black font-bold text-sm">🔬 ISSN Guidelines</span>
            <span className="bg-lime-400 px-3 py-1 border-2 border-black font-bold text-sm">✅ Grátis</span>
            <span className="bg-cyan-400 px-3 py-1 border-2 border-black font-bold text-sm">⚡ Personalizado</span>
          </div>
        </div>

        {/* Calculadora */}
        <CalculadoraCreatina />

        {/* Conteúdo SEO */}
        <div className="bg-white border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mt-8">
          <h2 className="text-2xl font-black text-black uppercase mb-4">📚 Quanta Creatina Tomar?</h2>
          
          <p className="text-black mb-4">
            A creatina monohidratada é o suplemento mais estudado do mundo. A dose ideal 
            depende do seu <strong>peso corporal</strong> e se você está em <strong>fase de saturação</strong> ou <strong>manutenção</strong>.
          </p>

          <h3 className="text-xl font-black text-black uppercase mt-6 mb-3">Duas Estratégias</h3>
          <div className="grid gap-4 mb-4">
            <div className="bg-yellow-100 border-2 border-black p-4">
              <h4 className="font-black text-black">⚡ Fase de Saturação (5-7 dias)</h4>
              <p className="text-black text-sm mt-1">
                <strong>0.3g/kg de peso</strong> por dia, dividido em 4 doses.<br />
                Ex: 70kg = 21g/dia (5g, 4x ao dia)
              </p>
              <p className="text-xs text-gray-600 mt-2">Satura os músculos rapidamente, mas pode causar desconforto gástrico.</p>
            </div>
            <div className="bg-lime-100 border-2 border-black p-4">
              <h4 className="font-black text-black">🔄 Manutenção (uso contínuo)</h4>
              <p className="text-black text-sm mt-1">
                <strong>0.03g/kg de peso</strong> por dia = geralmente 3-5g/dia<br />
                Ex: 70kg = 2.1g/dia (arredondar para 3g)
              </p>
              <p className="text-xs text-gray-600 mt-2">Leva 3-4 semanas para saturar, mas sem efeitos colaterais.</p>
            </div>
          </div>

          <h3 className="text-xl font-black text-black uppercase mb-3">Mitos vs Fatos</h3>
          <table className="w-full border-4 border-black mb-4 text-sm">
            <tbody>
              <tr className="border-b-2 border-black">
                <td className="p-2 bg-red-100 font-bold">❌ Precisa ciclar</td>
                <td className="p-2 bg-green-100">✅ Pode usar continuamente</td>
              </tr>
              <tr className="border-b-2 border-black">
                <td className="p-2 bg-red-100 font-bold">❌ Faz mal para rins</td>
                <td className="p-2 bg-green-100">✅ Segura para rins saudáveis</td>
              </tr>
              <tr className="border-b-2 border-black">
                <td className="p-2 bg-red-100 font-bold">❌ Causa queda de cabelo</td>
                <td className="p-2 bg-green-100">✅ Sem evidências</td>
              </tr>
              <tr>
                <td className="p-2 bg-red-100 font-bold">❌ Só funciona pós-treino</td>
                <td className="p-2 bg-green-100">✅ Horário não importa</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-black text-black uppercase mb-3">Qual Tipo de Creatina?</h3>
          <div className="bg-yellow-100 border-2 border-black p-4 mb-4">
            <p className="font-bold text-black">🏆 Creatina Monohidratada</p>
            <p className="text-black text-sm mt-1">
              A mais estudada, mais barata e mais eficaz. Não precisa de versões &quot;fancy&quot; 
              (HCL, Kre-Alkalyn, etc) - são marketing.
            </p>
          </div>

          <h3 className="text-xl font-black text-black uppercase mb-3">Dicas de Uso</h3>
          <div className="space-y-2 mb-4">
            <div className="bg-cyan-100 border-2 border-black p-2">
              <p className="text-sm"><strong>💧 Aumente a água:</strong> +500ml por dia</p>
            </div>
            <div className="bg-pink-100 border-2 border-black p-2">
              <p className="text-sm"><strong>🍚 Com carboidrato:</strong> Melhora absorção em 20%</p>
            </div>
            <div className="bg-lime-100 border-2 border-black p-2">
              <p className="text-sm"><strong>📅 Consistência:</strong> Todo dia, mesmo sem treinar</p>
            </div>
          </div>

          <div className="bg-gray-100 border-2 border-black p-4">
            <p className="text-sm text-gray-700">
              <strong>📚 Fontes:</strong><br />
              • Kreider RB, et al. ISSN Position Stand: Safety and Efficacy of Creatine. 2017<br />
              • Antonio J, Ciccone V. The effects of pre versus post workout supplementation of creatine. 2013
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-yellow-500 border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mt-8 text-center">
          <h3 className="text-xl font-black text-black uppercase mb-3">
            Creatina combina com proteína!
          </h3>
          <p className="text-black font-bold mb-4">
            Calcule também sua necessidade diária de proteína.
          </p>
          <Link href="/calculadoras/proteina">
            <Button variant="primary" size="lg">
              Calculadora de Proteína →
            </Button>
          </Link>
        </div>

        {/* Outras calculadoras */}
        <div className="mt-8">
          <h3 className="text-xl font-black text-black uppercase mb-4">🧮 Outras Calculadoras</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link href="/calculadoras/imc" className="bg-pink-400 border-4 border-black p-4 text-center hover:shadow-[4px_4px_0_0_#000] transition-all">
              <span className="text-2xl">⚖️</span>
              <p className="font-bold text-black text-sm mt-1">IMC</p>
            </Link>
            <Link href="/calculadoras/calorias" className="bg-orange-400 border-4 border-black p-4 text-center hover:shadow-[4px_4px_0_0_#000] transition-all">
              <span className="text-2xl">🔥</span>
              <p className="font-bold text-black text-sm mt-1">Calorias</p>
            </Link>
            <Link href="/calculadoras/proteina" className="bg-lime-400 border-4 border-black p-4 text-center hover:shadow-[4px_4px_0_0_#000] transition-all">
              <span className="text-2xl">🥩</span>
              <p className="font-bold text-black text-sm mt-1">Proteína</p>
            </Link>
            <Link href="/calculadoras/macros" className="bg-purple-400 border-4 border-black p-4 text-center hover:shadow-[4px_4px_0_0_#000] transition-all">
              <span className="text-2xl">🍽️</span>
              <p className="font-bold text-black text-sm mt-1">Macros</p>
            </Link>
            <Link href="/calculadoras/agua" className="bg-blue-400 border-4 border-black p-4 text-center hover:shadow-[4px_4px_0_0_#000] transition-all">
              <span className="text-2xl">💧</span>
              <p className="font-bold text-black text-sm mt-1">Água</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
