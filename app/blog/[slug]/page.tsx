import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, User, ArrowLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Alert } from '@/components/ui/Alert'
import artigosData from '@/data/artigos.json'
import type { Artigo, BlocoConteudo } from '@/types/artigo'

const artigos = artigosData as Artigo[]

export async function generateStaticParams() {
  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const artigo = artigos.find((a) => a.slug === params.slug)

  if (!artigo) {
    return {
      title: 'Artigo Não Encontrado',
    }
  }

  return {
    title: `${artigo.titulo} - Blog Suplementa Já`,
    description: artigo.descricao,
    keywords: artigo.tags.join(', '),
    openGraph: {
      title: artigo.titulo,
      description: artigo.descricao,
      type: 'article',
      publishedTime: artigo.data,
      authors: [artigo.autor],
      tags: artigo.tags,
    },
  }
}

// Componente especial para RESUMO RÁPIDO
function ResumoRapido({ texto }: { texto: string }) {
  // Extrair bullets do texto
  const linhas = texto.split('\n').filter((l) => l.trim())
  const bullets = linhas
    .filter((l) => l.trim().startsWith('•'))
    .map((l) => l.trim().substring(1).trim())

  return (
    <div className="my-8 bg-gradient-to-br from-yellow-400 via-yellow-300 to-lime-400 border-4 border-black shadow-[8px_8px_0_0_#000] p-1">
      <div className="bg-white border-2 border-black p-6 sm:p-8">
        {/* Cabeçalho */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">📋</span>
          <h3 className="text-2xl sm:text-3xl font-black text-black uppercase">
            RESUMO RÁPIDO
          </h3>
        </div>

        {/* Bullets */}
        <div className="grid gap-3">
          {bullets.map((bullet, index) => {
            // Separar label (antes do :) do conteúdo
            const match = bullet.match(/\*\*(.*?)\*\*:\s*(.+)/)
            if (match) {
              const [, label, conteudo] = match
              return (
                <div
                  key={index}
                  className="bg-cyan-50 border-2 border-black p-4 hover:bg-cyan-100 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl font-black text-black shrink-0">•</span>
                    <div className="flex-1">
                      <span className="bg-yellow-400 px-2 py-1 font-black text-black uppercase text-sm border-2 border-black">
                        {label}
                      </span>
                      <span className="ml-2 text-black font-bold">{conteudo}</span>
                    </div>
                  </div>
                </div>
              )
            }

            // Caso não tenha label (formato simples)
            return (
              <div
                key={index}
                className="bg-cyan-50 border-2 border-black p-4 hover:bg-cyan-100 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl font-black text-black shrink-0">•</span>
                  <span
                    className="text-black font-bold flex-1"
                    dangerouslySetInnerHTML={{
                      __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong class="bg-yellow-400 px-1">$1</strong>'),
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Rodapé */}
        <div className="mt-6 pt-4 border-t-2 border-black">
          <p className="text-sm text-gray-700 font-bold text-center">
            ⏱️ Sem tempo para ler tudo? Este resumo tem as informações essenciais!
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ArtigoPage({ params }: { params: { slug: string } }) {
  const artigo = artigos.find((a) => a.slug === params.slug)

  if (!artigo) {
    notFound()
  }

  // Schema markup para Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: artigo.titulo,
    description: artigo.descricao,
    author: {
      '@type': 'Organization',
      name: artigo.autor,
    },
    datePublished: artigo.data,
    dateModified: artigo.data,
    publisher: {
      '@type': 'Organization',
      name: 'Suplementa Já',
      logo: {
        '@type': 'ImageObject',
        url: 'https://suplementaja.vercel.app/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://suplementaja.vercel.app/blog/${artigo.slug}`,
    },
    keywords: artigo.tags.join(', '),
  }

  return (
    <div className="min-h-screen bg-white py-12">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Voltar */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 mb-8 text-black font-bold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o Blog
        </Link>

        {/* Header do Artigo */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="success">{artigo.categoria}</Badge>
            {artigo.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-cyan-400 border-2 border-black px-2 py-1 font-bold"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="inline-block bg-yellow-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] px-6 py-4 mb-6 sm:-rotate-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase">
              {artigo.titulo}
            </h1>
          </div>

          <div className="bg-white border-4 border-black p-4 mb-6">
            <p className="text-lg text-black font-bold leading-relaxed">
              {artigo.descricao}
            </p>
          </div>

          {/* Meta informações */}
          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-black font-bold">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {artigo.autor}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {artigo.tempo_leitura} de leitura
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="prose prose-lg max-w-none">
          {artigo.conteudo.map((bloco, index) => (
            <RenderBloco key={index} bloco={bloco} />
          ))}
        </article>

        {/* Footer - Links relacionados */}
        <div className="mt-16 pt-8 border-t-4 border-black">
          <div className="bg-lime-400 border-4 border-black shadow-[6px_6px_0_0_#000] p-8 text-center">
            <div className="bg-black px-6 py-3 mb-4 inline-block">
              <h3 className="text-2xl font-black text-lime-400 uppercase">
                Gostou do Artigo?
              </h3>
            </div>
            <p className="text-black font-bold mb-6 text-lg">
              Descubra quais nutrientes você realmente precisa com nossa avaliação personalizada gratuita!
            </p>
            <Link href="/avaliacao">
              <Button variant="primary" size="lg" className="text-xl px-10 py-6">
                Fazer Avaliação Gratuita →
              </Button>
            </Link>
          </div>
        </div>

        {/* Mais artigos */}
        <div className="mt-12">
          <h3 className="text-2xl font-black text-black uppercase mb-6 border-b-4 border-black pb-3">
            📖 Outros Artigos
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {artigos
              .filter((a) => a.slug !== artigo.slug)
              .slice(0, 2)
              .map((artigoRelacionado) => (
                <Link
                  key={artigoRelacionado.slug}
                  href={`/blog/${artigoRelacionado.slug}`}
                  className="bg-cyan-400 border-4 border-black shadow-[4px_4px_0_0_#000] p-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000] transition-all"
                >
                  <Badge variant="success" size="sm" className="mb-3">
                    {artigoRelacionado.categoria}
                  </Badge>
                  <h4 className="text-xl font-black text-black mb-2 line-clamp-2">
                    {artigoRelacionado.titulo}
                  </h4>
                  <p className="text-sm text-black font-bold line-clamp-2">
                    {artigoRelacionado.descricao}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function RenderBloco({ bloco }: { bloco: BlocoConteudo }) {
  switch (bloco.tipo) {
    case 'paragrafo':
      return (
        <p className="text-black font-medium leading-relaxed mb-6">
          {bloco.texto}
        </p>
      )

    case 'heading':
      if (bloco.nivel === 2) {
        return (
          <div className="mt-12 mb-6">
            <div className="bg-black px-6 py-3 inline-block border-2 border-black sm:-rotate-1">
              <h2 className="text-2xl sm:text-3xl font-black text-yellow-400 uppercase">
                {bloco.texto}
              </h2>
            </div>
          </div>
        )
      }
      return (
        <h3 className="text-xl sm:text-2xl font-black text-black uppercase mt-8 mb-4 border-l-4 border-black pl-4">
          {bloco.texto}
        </h3>
      )

    case 'lista':
      return (
        <ul className="space-y-3 mb-6">
          {bloco.itens.map((item, i) => (
            <li key={i} className="flex items-start gap-3 bg-white border-2 border-black p-4">
              <span className="text-black font-black mt-1">•</span>
              <span
                className="text-black font-bold flex-1"
                dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="bg-yellow-400 px-1">$1</strong>') }}
              />
            </li>
          ))}
        </ul>
      )

    case 'tabela':
      return (
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-4 border-black">
            <thead>
              <tr className="bg-lime-400">
                {bloco.colunas.map((col, i) => (
                  <th
                    key={i}
                    className="border-2 border-black px-4 py-3 text-left font-black text-black uppercase"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bloco.linhas.map((linha, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-cyan-100'}>
                  {linha.map((celula, j) => (
                    <td
                      key={j}
                      className="border-2 border-black px-4 py-3 text-black font-bold"
                    >
                      {celula}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'alerta':
      // Detectar se é um RESUMO RÁPIDO e renderizar de forma especial
      if (bloco.texto.includes('RESUMO RÁPIDO')) {
        return <ResumoRapido texto={bloco.texto} />
      }

      return (
        <Alert variant={bloco.variante} className="mb-6">
          <div
            dangerouslySetInnerHTML={{
              __html: bloco.texto.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
            }}
          />
        </Alert>
      )

    case 'cta':
      return (
        <Card className="bg-yellow-400 my-8">
          <CardContent className="p-8 text-center">
            <p className="text-black font-bold text-lg mb-6">{bloco.texto}</p>
            <Link href={bloco.link}>
              <Button variant="primary" size="lg">
                {bloco.botao}
              </Button>
            </Link>
          </CardContent>
        </Card>
      )

    default:
      return null
  }
}
