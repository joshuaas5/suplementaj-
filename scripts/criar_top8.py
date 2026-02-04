import json

conteudo = r'''import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Star, ExternalLink, Award, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Top 8 Melhores Suplementos 2025 - Ranking Atualizado | Suplementa Já',
  description: 'Ranking dos 8 melhores suplementos de 2025. Creatina, Whey, Vitaminas e mais. Análises honestas baseadas em ciência e custo-benefício.',
  keywords: 'melhores suplementos 2025, ranking suplementos, melhor creatina, melhor whey, melhor vitamina d',
}

const SUPLEMENTOS = [
  {
    posicao: 1,
    nome: 'Creatina Monohidratada',
    categoria: 'Performance',
    nota: 9.8,
    descricao: 'O suplemento mais estudado e comprovado. Aumenta força, massa muscular e performance cognitiva.',
    beneficios: ['Ganho de força', 'Aumento muscular', 'Melhora cognitiva'],
    paraQuem: 'Atletas, praticantes de musculação, pessoas 50+',
    linkArtigo: '/blog/guia-completo-creatina-2026',
    linkAfiliado: 'https://www.amazon.com.br/s?k=creatina+monohidratada&tag=105c91-20',
    destaque: true,
  },
  {
    posicao: 2,
    nome: 'Vitamina D3',
    categoria: 'Saúde Geral',
    nota: 9.6,
    descricao: '90% dos brasileiros têm deficiência. Essencial para imunidade, ossos e humor.',
    beneficios: ['Imunidade forte', 'Saúde óssea', 'Energia e humor'],
    paraQuem: 'Quem trabalha em escritório, idosos, todos no inverno',
    linkArtigo: '/blog/vitamina-d-deficiencia-brasileiros',
    linkAfiliado: 'https://www.amazon.com.br/s?k=vitamina+d3+2000ui&tag=105c91-20',
    destaque: true,
  },
  {
    posicao: 3,
    nome: 'Ômega-3 (EPA/DHA)',
    categoria: 'Saúde Geral',
    nota: 9.4,
    descricao: 'Anti-inflamatório natural. Protege coração, cérebro e articulações.',
    beneficios: ['Saúde cardíaca', 'Função cerebral', 'Anti-inflamatório'],
    paraQuem: 'Todos, especialmente quem come pouco peixe',
    linkArtigo: '/blog/omega-3-beneficios-comprovados',
    linkAfiliado: 'https://www.amazon.com.br/s?k=omega+3+1000mg&tag=105c91-20',
  },
  {
    posicao: 4,
    nome: 'Whey Protein Isolado',
    categoria: 'Performance',
    nota: 9.2,
    descricao: 'Proteína de alta qualidade para recuperação muscular. Ideal pós-treino.',
    beneficios: ['Recuperação muscular', 'Praticidade', 'Alta absorção'],
    paraQuem: 'Atletas, quem treina pesado, dificuldade em bater proteína',
    linkArtigo: '/blog/whey-isolado-vs-concentrado',
    linkAfiliado: 'https://www.amazon.com.br/s?k=whey+protein+isolado&tag=105c91-20',
  },
  {
    posicao: 5,
    nome: 'Magnésio Quelato',
    categoria: 'Minerais',
    nota: 9.0,
    descricao: '80% têm deficiência. Melhora sono, ansiedade, câimbras e energia.',
    beneficios: ['Qualidade do sono', 'Reduz ansiedade', 'Menos câimbras'],
    paraQuem: 'Ansiosos, insones, atletas, estressados',
    linkArtigo: '/blog/magnesio-ansiedade-sono-tipos',
    linkAfiliado: 'https://www.amazon.com.br/s?k=magnesio+quelato&tag=105c91-20',
  },
  {
    posicao: 6,
    nome: 'Vitamina B12',
    categoria: 'Vitaminas',
    nota: 8.8,
    descricao: 'Essencial para energia e sistema nervoso. Obrigatória para veganos.',
    beneficios: ['Energia', 'Sistema nervoso', 'Formação de sangue'],
    paraQuem: 'Veganos, vegetarianos, idosos 50+',
    linkArtigo: '/blog/vitamina-b12-vegetarianos-veganos',
    linkAfiliado: 'https://www.amazon.com.br/s?k=vitamina+b12+metilcobalamina&tag=105c91-20',
  },
  {
    posicao: 7,
    nome: 'Zinco Quelato',
    categoria: 'Minerais',
    nota: 8.6,
    descricao: 'Fundamental para imunidade, testosterona e saúde da pele.',
    beneficios: ['Imunidade', 'Testosterona', 'Pele saudável'],
    paraQuem: 'Homens, atletas, quem fica doente frequentemente',
    linkArtigo: '/blog/zinco-imunidade-testosterona-pele',
    linkAfiliado: 'https://www.amazon.com.br/s?k=zinco+quelato&tag=105c91-20',
  },
  {
    posicao: 8,
    nome: 'Melatonina',
    categoria: 'Sono',
    nota: 8.4,
    descricao: 'Hormônio do sono. Ajuda a dormir mais rápido e ter sono de qualidade.',
    beneficios: ['Adormecer rápido', 'Sono profundo', 'Jet lag'],
    paraQuem: 'Insones, trabalhadores noturnos, viajantes',
    linkArtigo: '/blog/melatonina-sono-insonia-dose-ideal',
    linkAfiliado: 'https://www.amazon.com.br/s?k=melatonina&tag=105c91-20',
  },
]

export default function MelhoresSuplementosPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-400 border-4 border-black shadow-[8px_8px_0_0_#000] px-8 py-4 mb-6 -rotate-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase">
               Top 8 Suplementos 2025
            </h1>
          </div>
          <p className="text-xl text-black font-bold max-w-3xl mx-auto">
            Ranking baseado em CIÊNCIA, eficácia comprovada e custo-benefício. 
            Sem propaganda, apenas fatos.
          </p>
        </div>

        {/* Lista de Suplementos */}
        <div className="space-y-6">
          {SUPLEMENTOS.map((suplemento) => (
            <div
              key={suplemento.posicao}
              className={
                border-4 border-black shadow-[6px_6px_0_0_#000] p-6
                
              }
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Posicao */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className={
                    w-20 h-20 border-4 border-black flex items-center justify-center font-black text-4xl
                    
                  }>
                    #{suplemento.posicao}
                  </div>
                </div>

                {/* Conteudo */}
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

                  {/* Beneficios */}
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

                  {/* Botoes */}
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
                      Ver Preço <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Nota */}
                <div className="flex-shrink-0 flex flex-col items-center justify-center bg-black p-4">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={i < Math.round(suplemento.nota/2) ? 'text-yellow-400 fill-yellow-400 w-5 h-5' : 'text-gray-600 w-5 h-5'}
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

        {/* CTA Final */}
        <div className="mt-16 bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-black shadow-[8px_8px_0_0_#000] p-8 text-center">
          <h3 className="text-2xl font-black text-black uppercase mb-4">
            Não sabe por onde começar?
          </h3>
          <p className="text-black font-bold mb-6">
            Faça nossa avaliação gratuita e descubra quais suplementos VOCÊ realmente precisa!
          </p>
          <Link href="/avaliacao">
            <Button variant="primary" size="lg" className="text-xl">
              Fazer Avaliação Gratuita 
            </Button>
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-8 text-center">
          * Este ranking é baseado em nossa análise de estudos científicos e custo-benefício. 
          Links de afiliado: você não paga nada a mais e nos ajuda a manter o site.
          Consulte um profissional de saúde antes de iniciar suplementação.
        </p>
      </div>
    </div>
  )
}
'''

with open('app/melhores-suplementos/page.tsx', 'w', encoding='utf-8') as f:
    f.write(conteudo)
print('TOP 8 criado!')
