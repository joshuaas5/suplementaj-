import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Star, ExternalLink, Award, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Melhores Suplementos 2025 - Ranking Atualizado | Suplementa Ja',
  description: 'Ranking dos melhores suplementos de 2025. Creatina, Whey, Vitaminas e mais. Analises honestas baseadas em ciencia e custo-beneficio.',
  keywords: 'melhores suplementos 2025, ranking suplementos, melhor creatina, melhor whey, melhor vitamina d',
}

const SUPLEMENTOS = [
  {
    posicao: 1,
    nome: 'Creatina Monohidratada',
    categoria: 'Performance',
    nota: 9.8,
    descricao: 'O suplemento mais estudado e comprovado. Aumenta forca, massa muscular e performance cognitiva.',
    beneficios: ['Ganho de forca', 'Aumento muscular', 'Melhora cognitiva'],
    paraQuem: 'Atletas, praticantes de musculacao, pessoas 50+',
    linkArtigo: '/blog/guia-completo-creatina-2026',
    linkAfiliado: 'https://www.amazon.com.br/s?k=creatina+monohidratada&tag=105c91-20',
    destaque: true,
  },
  {
    posicao: 2,
    nome: 'Vitamina D3',
    categoria: 'Saude',
    nota: 9.6,
    descricao: '90 por cento dos brasileiros tem deficiencia. Essencial para imunidade, ossos e humor.',
    beneficios: ['Imunidade forte', 'Saude ossea', 'Energia e humor'],
    paraQuem: 'Quem trabalha em escritorio, idosos, todos no inverno',
    linkArtigo: '/blog/vitamina-d-deficiencia-brasileiros',
    linkAfiliado: 'https://www.amazon.com.br/s?k=vitamina+d3+2000ui&tag=105c91-20',
    destaque: true,
  },
  {
    posicao: 3,
    nome: 'Omega-3 EPA DHA',
    categoria: 'Saude',
    nota: 9.4,
    descricao: 'Anti-inflamatorio natural. Protege coracao, cerebro e articulacoes.',
    beneficios: ['Saude cardiaca', 'Funcao cerebral', 'Anti-inflamatorio'],
    paraQuem: 'Todos, especialmente quem come pouco peixe',
    linkArtigo: '/blog/omega-3-beneficios-comprovados',
    linkAfiliado: 'https://www.amazon.com.br/s?k=omega+3+1000mg&tag=105c91-20',
    destaque: false,
  },
  {
    posicao: 4,
    nome: 'Whey Protein Isolado',
    categoria: 'Performance',
    nota: 9.2,
    descricao: 'Proteina de alta qualidade para recuperacao muscular. Ideal pos-treino.',
    beneficios: ['Recuperacao muscular', 'Praticidade', 'Alta absorcao'],
    paraQuem: 'Atletas, quem treina pesado',
    linkArtigo: '/blog/whey-isolado-vs-concentrado',
    linkAfiliado: 'https://www.amazon.com.br/s?k=whey+protein+isolado&tag=105c91-20',
    destaque: false,
  },
  {
    posicao: 5,
    nome: 'Magnesio Quelato',
    categoria: 'Minerais',
    nota: 9.0,
    descricao: '80 por cento tem deficiencia. Melhora sono, ansiedade, caimbras e energia.',
    beneficios: ['Qualidade do sono', 'Reduce ansiedade', 'Menos caimbras'],
    paraQuem: 'Ansiosos, insones, atletas, estressados',
    linkArtigo: '/blog/magnesio-ansiedade-sono-tipos',
    linkAfiliado: 'https://www.amazon.com.br/s?k=magnesio+quelato&tag=105c91-20',
    destaque: false,
  },
]

export default function MelhoresSuplementosPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-400 border-4 border-black shadow-[8px_8px_0_0_#000] px-8 py-4 mb-6 -rotate-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase">
              TOP 5 Suplementos 2025
            </h1>
          </div>
          <p className="text-xl text-black font-bold max-w-3xl mx-auto">
            Ranking baseado em CIENCIA, eficacia comprovada e custo-beneficio.
          </p>
        </div>

        <div className="space-y-6">
          {SUPLEMENTOS.map((suplemento) => (
            <div
              key={suplemento.posicao}
              className={suplemento.destaque 
                ? "border-4 border-black shadow-[6px_6px_0_0_#000] p-6 bg-gradient-to-r from-yellow-400 to-orange-400"
                : "border-4 border-black shadow-[6px_6px_0_0_#000] p-6 bg-white"
              }
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className={suplemento.posicao <= 3 
                    ? "w-20 h-20 border-4 border-black flex items-center justify-center font-black text-4xl bg-yellow-400 text-black"
                    : "w-20 h-20 border-4 border-black flex items-center justify-center font-black text-4xl bg-gray-100 text-gray-700"
                  }>
                    #{suplemento.posicao}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-2xl font-black text-black">{suplemento.nome}</h2>
                    <Badge variant={suplemento.destaque ? 'danger' : 'success'}>
                      {suplemento.categoria}
                    </Badge>
                    {suplemento.destaque && (
                      <span className="flex items-center gap-1 bg-black text-yellow-400 px-2 py-1 text-xs font-black uppercase">
                        <Award className="w-4 h-4" /> DESTAQUE
                      </span>
                    )}
                  </div>

                  <p className="text-black font-medium mb-4">{suplemento.descricao}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {suplemento.beneficios.map((beneficio, i) => (
                      <span key={i} className="flex items-center gap-1 bg-lime-100 border border-lime-400 px-2 py-1 text-sm font-bold text-lime-800">
                        <CheckCircle className="w-4 h-4" /> {beneficio}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Para quem:</strong> {suplemento.paraQuem}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Link href={suplemento.linkArtigo}>
                      <Button variant="primary" size="sm">
                        Ler Guia Completo
                      </Button>
                    </Link>
                    <a 
                      href={suplemento.linkAfiliado}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="bg-lime-400 border-2 border-black shadow-[3px_3px_0_0_#000] hover:shadow-[1px_1px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all px-4 py-2 font-bold text-black flex items-center gap-2"
                    >
                      Ver Preco <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex-shrink-0 flex flex-col items-center justify-center bg-black p-4">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={i < Math.round(suplemento.nota/2) ? "w-5 h-5 text-yellow-400 fill-yellow-400" : "w-5 h-5 text-gray-600"}
                      />
                    ))}
                  </div>
                  <div className="text-3xl font-black text-yellow-400">{suplemento.nota}</div>
                  <div className="text-xs text-white font-bold">/10</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-black shadow-[8px_8px_0_0_#000] p-8 text-center">
          <h3 className="text-2xl font-black text-black uppercase mb-4">
            Nao sabe por onde comecar?
          </h3>
          <p className="text-black font-bold mb-6">
            Faca nossa avaliacao gratuita e descubra quais suplementos VOCE realmente precisa!
          </p>
          <Link href="/avaliacao">
            <Button variant="primary" size="lg" className="text-xl">
              Fazer Avaliacao Gratuita
            </Button>
          </Link>
        </div>

        <p className="text-xs text-gray-500 mt-8 text-center">
          * Links de afiliado: voce nao paga nada a mais e nos ajuda a manter o site.
        </p>
      </div>
    </div>
  )
}
