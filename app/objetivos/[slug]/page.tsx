
import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ArrowRight, Calculator, BookOpen, ExternalLink, Moon, Shield, Zap, Flame, BicepsFlexed } from 'lucide-react'
import objetivosData from '@/data/objetivos.json'
import nutrientesData from '@/data/nutrientes.json'
import artigosData from '@/data/artigos.json'
import { notFound } from 'next/navigation'

// Mapeamento de emojis para componentes Lucide
const iconMap: Record<string, React.ElementType> = {
    '😴': Moon,
    '🛡️': Shield,
    '⚡': Zap,
    '🔥': Flame,
    '💪': BicepsFlexed
}

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const objetivo = objetivosData.find((o) => o.slug === params.slug)
    if (!objetivo) return { title: 'Objetivo não encontrado' }

    return {
        title: `${objetivo.titulo}: Nutrientes e Dicas Essenciais | Suplementa Já`,
        description: objetivo.descricao,
        openGraph: {
            title: `${objetivo.titulo} - Guia Completo`,
            description: objetivo.descricao,
            type: 'article',
        }
    }
}

export async function generateStaticParams() {
    return objetivosData.map((objetivo) => ({
        slug: objetivo.slug,
    }))
}

export default function ObjetivoPage({ params }: Props) {
    const objetivo = objetivosData.find((o) => o.slug === params.slug)

    if (!objetivo) {
        notFound()
    }

    const IconComponent = iconMap[objetivo.emoji] || Zap

    // 1. Filtrar Nutrientes
    const nutrientesRecomendados = Object.values(nutrientesData).filter(
        (n) => 'objetivos' in n && n.objetivos.includes(objetivo.slug)
    )

    // 2. Filtrar Artigos
    // Prioridade: Artigos com tag explícita > Artigos com keywords no título
    let artigosRelacionados = artigosData.filter((artigo) =>
        'objetivos' in artigo && artigo.objetivos && artigo.objetivos.includes(objetivo.slug)
    )

    const keywords = objetivo.slug === 'ganho-de-massa' ? ['hipertrofia', 'massa', 'creatina', 'whey', 'bulking'] :
        objetivo.slug === 'emagrecimento' ? ['emagrecer', 'perder peso', 'déficit', 'cutting', 'calorias'] :
            objetivo.slug === 'sono' ? ['sono', 'dormir', 'melatonina'] :
                objetivo.slug === 'imunidade' ? ['imunidade', 'gripe', 'vitamina c'] :
                    objetivo.slug === 'performance' ? ['energia', 'treino', 'foco'] : []

    const artigosPorKeyword = artigosData.filter((artigo) => {
        const texto = (artigo.titulo + ' ' + artigo.tags?.join(' ')).toLowerCase()
        return keywords.some(k => texto.includes(k))
    })

    // Combinar e remover duplicatas
    artigosRelacionados = [...artigosRelacionados, ...artigosPorKeyword]
        .filter((artigo, index, self) =>
            index === self.findIndex((a) => a.slug === artigo.slug)
        )
        .slice(0, 4)

    // 3. Calculadoras sugeridas
    const calculadoras = [
        { nome: 'Calculadora de Calorias (TDEE)', slug: 'calorias', relevante: ['emagrecimento', 'ganho-de-massa', 'performance'] },
        { nome: 'Calculadora de Proteína', slug: 'proteina', relevante: ['ganho-de-massa', 'emagrecimento', 'performance', 'imunidade'] },
        { nome: 'Calculadora de Creatina', slug: 'creatina', relevante: ['performance', 'ganho-de-massa'] },
        { nome: 'Calculadora de Água', slug: 'agua', relevante: ['performance', 'emagrecimento', 'imunidade'] },
        { nome: 'Calculadora de Sono', slug: 'sono', relevante: ['sono', 'performance', 'imunidade'] }, // Supondo que existe ou existirá
        { nome: 'Calculadora de IMC', slug: 'imc', relevante: ['emagrecimento'] }
    ].filter(c => c.relevante.includes(objetivo.slug))

    return (
        <div className="container mx-auto py-12 px-4 max-w-6xl">
            {/* Header */}
            <div className={`rounded-3xl p-8 mb-12 text-white ${objetivo.cor || 'bg-blue-600'} shadow-xl`}>
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                        <IconComponent size={48} className="text-white" />
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">{objetivo.titulo}</h1>
                        <p className="text-xl opacity-90 max-w-2xl">{objetivo.descricao}</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Coluna Principal (2/3) */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Seção Nutrientes */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <LeafIcon />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Nutrientes Essenciais</h2>
                        </div>

                        {nutrientesRecomendados.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {nutrientesRecomendados.map((nutriente) => (
                                    <Link key={nutriente.slug} href={`/nutrientes/${nutriente.slug}`} className="group">
                                        <Card className="h-full hover:shadow-lg transition-all border-l-4 border-l-transparent hover:border-l-green-500">
                                            <CardContent className="p-5 flex items-start gap-4">
                                                <span className="text-3xl">{nutriente.emoji}</span>
                                                <div>
                                                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-green-600 transition-colors">
                                                        {nutriente.nome}
                                                    </h3>
                                                    <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                                                        {nutriente.descricao_curta}
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500 italic">Em breve adicionaremos nutrientes para este objetivo.</p>
                        )}
                    </section>

                    {/* Seção Artigos */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <BookOpen size={20} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Guias e Artigos</h2>
                        </div>

                        {artigosRelacionados.length > 0 ? (
                            <div className="space-y-4">
                                {artigosRelacionados.map((artigo) => (
                                    <Link key={artigo.slug} href={`/blog/${artigo.slug}`} className="block group">
                                        <Card className="hover:shadow-md transition-all">
                                            <CardContent className="p-5 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                                                <div>
                                                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                                                        {artigo.titulo}
                                                    </h3>
                                                    <p className="text-sm text-gray-500 line-clamp-2 max-w-2xl">
                                                        {artigo.descricao}
                                                    </p>
                                                </div>
                                                <ArrowRight className="text-gray-300 group-hover:text-blue-600 transition-colors shrink-0" />
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500 italic">Em breve adicionaremos artigos para este objetivo.</p>
                        )}
                    </section>
                </div>

                {/* Sidebar (1/3) */}
                <div className="space-y-8">
                    {/* Calculadoras Box */}
                    <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-none shadow-sm sticky top-24">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calculator className="text-primary" size={20} />
                                Calculadoras Úteis
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {calculadoras.map((calc) => (
                                <Link key={calc.slug} href={`/calculadoras/${calc.slug}`} className="block">
                                    <div className="bg-white p-3 rounded-xl border border-gray-200 hover:border-primary hover:shadow-md transition-all flex items-center justify-between group">
                                        <span className="font-medium text-gray-700 group-hover:text-primary">{calc.nome}</span>
                                        <ExternalLink size={14} className="text-gray-400 group-hover:text-primary" />
                                    </div>
                                </Link>
                            ))}
                            {calculadoras.length === 0 && (
                                <p className="text-sm text-gray-500">Nenhuma calculadora específica no momento.</p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

function LeafIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
    )
}
