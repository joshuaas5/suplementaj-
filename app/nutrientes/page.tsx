import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight } from 'lucide-react'
import nutrientesData from '@/data/nutrientes.json'
import type { Nutriente } from '@/types/nutriente'

const nutrientes = Object.values(nutrientesData) as Nutriente[]

export default function NutrientesPage() {
  // Categorizar nutrientes
  const vitaminas = nutrientes.filter(n => n.categoria === 'vitamina')
  const minerais = nutrientes.filter(n => n.categoria === 'mineral')

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Biblioteca de Nutrientes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore informações detalhadas sobre vitaminas, minerais e outros nutrientes essenciais.
            Descubra funções, fontes alimentares, dosagens recomendadas e evidências científicas.
          </p>
        </div>

        {/* Vitaminas */}
        {vitaminas.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-primary-600 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Vitaminas</h2>
              <Badge variant="info">{vitaminas.length}</Badge>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {vitaminas.map((nutriente) => (
                <NutrienteCard key={nutriente.slug} nutriente={nutriente} />
              ))}
            </div>
          </section>
        )}

        {/* Minerais */}
        {minerais.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-success-600 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Minerais</h2>
              <Badge variant="success">{minerais.length}</Badge>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {minerais.map((nutriente) => (
                <NutrienteCard key={nutriente.slug} nutriente={nutriente} />
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">
            Descubra Quais Nutrientes Você Precisa
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Faça nossa avaliação personalizada e receba recomendações específicas para seu perfil.
          </p>
          <Link
            href="/avaliacao"
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Fazer Avaliação Gratuita
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

interface NutrienteCardProps {
  nutriente: Nutriente
}

function NutrienteCard({ nutriente }: NutrienteCardProps) {
  return (
    <Link href={`/nutrientes/${nutriente.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <span className="text-4xl">{nutriente.emoji}</span>
            <Badge variant={nutriente.categoria === 'vitamina' ? 'info' : 'success'}>
              {nutriente.subcategoria}
            </Badge>
          </div>
          <CardTitle className="text-xl">
            {nutriente.nome}
          </CardTitle>
          {nutriente.nome_cientifico && (
            <p className="text-sm text-gray-500 italic">
              {nutriente.nome_cientifico}
            </p>
          )}
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {nutriente.descricao_curta}
          </p>

          {/* Principais funções */}
          {nutriente.funcoes_corporais && nutriente.funcoes_corporais.length > 0 && (
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-700 mb-2">Principais funções:</p>
              <ul className="text-xs text-gray-600 space-y-1">
                {nutriente.funcoes_corporais.slice(0, 3).map((funcao, idx) => (
                  <li key={idx} className="flex items-start gap-1">
                    <span className="text-success-600 mt-0.5">✓</span>
                    <span className="line-clamp-1">{funcao}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <span className="text-sm font-medium text-primary-600">
              Ver detalhes completos
            </span>
            <ArrowRight className="w-4 h-4 text-primary-600" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
