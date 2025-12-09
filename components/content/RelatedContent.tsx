'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight, BookOpen, Pill } from 'lucide-react'

interface RelatedContent {
  type: 'artigo' | 'nutriente'
  slug: string
  titulo: string
  descricao: string
  categoria?: string
  tags?: string[]
}

interface RelatedContentProps {
  items: RelatedContent[]
  title?: string
}

export function RelatedContent({ items, title = "📚 Conteúdo Relacionado" }: RelatedContentProps) {
  if (items.length === 0) return null

  return (
    <div className="mt-12 mb-8">
      <div className="bg-gradient-to-r from-purple-400 to-pink-400 border-4 border-black shadow-[8px_8px_0_0_#000] p-1 mb-6">
        <div className="bg-white border-2 border-black p-4">
          <h2 className="text-2xl sm:text-3xl font-black text-black uppercase flex items-center gap-3">
            {title}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => {
          const Icon = item.type === 'artigo' ? BookOpen : Pill
          const href = item.type === 'artigo' ? `/blog/${item.slug}` : `/nutrientes/${item.slug}`
          const bgColor = item.type === 'artigo' ? 'bg-cyan-400' : 'bg-lime-400'

          return (
            <Link key={item.slug} href={href}>
              <Card className="h-full hover:shadow-[6px_6px_0_0_#000] transition-all hover:-translate-y-1 cursor-pointer border-4 border-black">
                <CardHeader className={`${bgColor} border-b-4 border-black`}>
                  <div className="flex items-start gap-3">
                    <Icon className="w-6 h-6 flex-shrink-0 mt-1" />
                    <CardTitle className="text-lg font-black uppercase line-clamp-2">
                      {item.titulo}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-gray-700 line-clamp-3 mb-4">
                    {item.descricao}
                  </p>
                  {item.categoria && (
                    <Badge variant={item.type === 'artigo' ? 'info' : 'success'} size="sm">
                      {item.categoria}
                    </Badge>
                  )}
                  <div className="mt-4 flex items-center gap-2 text-sm font-bold text-black">
                    Ler mais <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
