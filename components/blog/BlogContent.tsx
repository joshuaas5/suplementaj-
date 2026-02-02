'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Clock, ArrowRight, Search } from 'lucide-react'
import type { Artigo } from '@/types/artigo'

// Define topics based on common search patterns
const TOPICS = [
    { id: 'todos', label: 'Todos', keywords: [] },
    { id: 'creatina', label: '💪 Creatina', keywords: ['creatina', 'creapure'] },
    { id: 'whey', label: '🥛 Whey Protein', keywords: ['whey', 'proteína', 'proteina'] },
    { id: 'vitaminas', label: '💊 Vitaminas', keywords: ['vitamina', 'vitaminas', 'multivitamínico'] },
    { id: 'emagrecimento', label: '🔥 Emagrecimento', keywords: ['emagrecer', 'emagrecimento', 'gordura', 'termogênico'] },
    { id: 'massa', label: '🏋️ Ganho de Massa', keywords: ['massa', 'hipertrofia', 'músculo', 'musculo'] },
    { id: 'saude', label: '❤️ Saúde Geral', keywords: ['saúde', 'imunidade', 'sono', 'energia'] },
]

interface BlogContentProps {
    artigos: Artigo[]
}

export function BlogContent({ artigos }: BlogContentProps) {
    const [activeTopic, setActiveTopic] = useState('todos')
    const [searchQuery, setSearchQuery] = useState('')

    // Filter articles based on topic and search
    const filteredArtigos = useMemo(() => {
        let filtered = [...artigos]

        // Filter by topic
        if (activeTopic !== 'todos') {
            const topic = TOPICS.find(t => t.id === activeTopic)
            if (topic) {
                filtered = filtered.filter(artigo => {
                    const searchableText = `${artigo.titulo} ${artigo.descricao} ${artigo.tags.join(' ')} ${artigo.categoria}`.toLowerCase()
                    return topic.keywords.some(keyword => searchableText.includes(keyword.toLowerCase()))
                })
            }
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            filtered = filtered.filter(artigo => {
                const searchableText = `${artigo.titulo} ${artigo.descricao} ${artigo.tags.join(' ')}`.toLowerCase()
                return searchableText.includes(query)
            })
        }

        // Sort by date (newest first)
        return filtered.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
    }, [artigos, activeTopic, searchQuery])

    return (
        <>
            {/* Search Bar */}
            <div className="mb-8 max-w-xl mx-auto">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Buscar artigos..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 border-4 border-black font-bold text-black placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-yellow-400"
                    />
                </div>
            </div>

            {/* Topic Filters */}
            <div className="mb-12">
                <div className="flex flex-wrap gap-3 justify-center">
                    {TOPICS.map(topic => (
                        <button
                            key={topic.id}
                            onClick={() => setActiveTopic(topic.id)}
                            className={`
                px-4 py-2 sm:px-6 sm:py-3 font-black uppercase text-sm sm:text-base
                border-4 border-black transition-all
                ${activeTopic === topic.id
                                    ? 'bg-black text-yellow-400 shadow-none translate-x-1 translate-y-1'
                                    : 'bg-yellow-400 text-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]'
                                }
              `}
                        >
                            {topic.label}
                            {topic.id !== 'todos' && (
                                <span className="ml-2 text-xs opacity-80">
                                    ({artigos.filter(a => {
                                        const searchableText = `${a.titulo} ${a.descricao} ${a.tags.join(' ')} ${a.categoria}`.toLowerCase()
                                        return topic.keywords.some(k => searchableText.includes(k.toLowerCase()))
                                    }).length})
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results Count */}
            <div className="mb-6 text-center">
                <span className="bg-white border-2 border-black px-4 py-2 font-bold text-black inline-block">
                    {filteredArtigos.length} artigo{filteredArtigos.length !== 1 ? 's' : ''} encontrado{filteredArtigos.length !== 1 ? 's' : ''}
                </span>
            </div>

            {/* No Results */}
            {filteredArtigos.length === 0 && (
                <div className="text-center py-16">
                    <div className="bg-cyan-400 border-4 border-black shadow-[6px_6px_0_0_#000] p-8 max-w-md mx-auto">
                        <p className="text-2xl font-black text-black mb-4">😕 Nenhum artigo encontrado</p>
                        <p className="text-black font-bold mb-6">Tente outra busca ou categoria</p>
                        <button
                            onClick={() => { setActiveTopic('todos'); setSearchQuery('') }}
                            className="bg-yellow-400 border-4 border-black px-6 py-3 font-black text-black hover:bg-yellow-300"
                        >
                            Ver Todos os Artigos
                        </button>
                    </div>
                </div>
            )}

            {/* Grid de Artigos */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredArtigos.map((artigo, index) => (
                    <ArtigoCard key={artigo.slug} artigo={artigo} index={index} />
                ))}
            </div>
        </>
    )
}

interface ArtigoCardProps {
    artigo: Artigo
    index: number
}

function ArtigoCard({ artigo, index }: ArtigoCardProps) {
    const cores = [
        'bg-cyan-400',
        'bg-yellow-400',
        'bg-pink-400',
        'bg-lime-400',
        'bg-purple-400',
        'bg-orange-400',
    ]

    const corCard = cores[index % cores.length]

    return (
        <Link href={`/blog/${artigo.slug}`}>
            <Card className={`h-full ${corCard} hover:-rotate-1 transition-all cursor-pointer`}>
                <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                        <Badge variant="success" size="sm">
                            {artigo.categoria}
                        </Badge>
                        <div className="flex items-center gap-2 text-xs text-black font-bold">
                            <Clock className="w-4 h-4" />
                            {artigo.tempo_leitura}
                        </div>
                    </div>
                    <CardTitle className="text-2xl text-black line-clamp-3">
                        {artigo.titulo}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-black text-sm mb-4 line-clamp-3 font-bold leading-relaxed">
                        {artigo.descricao}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {artigo.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="text-xs bg-white border-2 border-black px-2 py-1 font-bold"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t-4 border-black">
                        <span className="text-sm font-black uppercase text-black">
                            Ler artigo completo
                        </span>
                        <ArrowRight className="w-5 h-5 text-black" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
