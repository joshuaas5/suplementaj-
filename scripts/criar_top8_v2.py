codigo = r'''import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Star, ExternalLink, Award, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Top 8 Melhores Suplementos 2025 - Ranking Atualizado',
  description: 'Ranking dos 8 melhores suplementos de 2025.',
}

const SUPLEMENTOS = [
  { posicao: 1, nome: 'Creatina Monohidratada', categoria: 'Performance', nota: 9.8, descricao: 'O suplemento mais estudado.', beneficios: ['Forca', 'Musculos'], paraQuem: 'Atletas', linkArtigo: '/blog/guia-completo-creatina-2026', linkAfiliado: 'https://www.amazon.com.br/s?k=creatina&tag=105c91-20', destaque: true },
  { posicao: 2, nome: 'Vitamina D3', categoria: 'Saude', nota: 9.6, descricao: 'Essencial para imunidade.', beneficios: ['Imunidade', 'Ossos'], paraQuem: 'Todos', linkArtigo: '/blog/vitamina-d-deficiencia-brasileiros', linkAfiliado: 'https://www.amazon.com.br/s?k=vitamina+d3&tag=105c91-20', destaque: true },
  { posicao: 3, nome: 'Omega-3', categoria: 'Saude', nota: 9.4, descricao: 'Protege coracao e cerebro.', beneficios: ['Coracao', 'Cerebro'], paraQuem: 'Todos', linkArtigo: '/blog/omega-3-beneficios-comprovados', linkAfiliado: 'https://www.amazon.com.br/s?k=omega+3&tag=105c91-20' },
  { posicao: 4, nome: 'Whey Protein', categoria: 'Performance', nota: 9.2, descricao: 'Proteina para musculos.', beneficios: ['Recuperacao', 'Musculos'], paraQuem: 'Atletas', linkArtigo: '/blog/whey-isolado-vs-concentrado', linkAfiliado: 'https://www.amazon.com.br/s?k=whey+protein&tag=105c91-20' },
  { posicao: 5, nome: 'Magnesio', categoria: 'Minerais', nota: 9.0, descricao: 'Melhora sono e ansiedade.', beneficios: ['Sono', 'Calma'], paraQuem: 'Ansiosos', linkArtigo: '/blog/magnesio-ansiedade-sono-tipos', linkAfiliado: 'https://www.amazon.com.br/s?k=magnesio&tag=105c91-20' },
  { posicao: 6, nome: 'Vitamina B12', categoria: 'Vitaminas', nota: 8.8, descricao: 'Energia e nervos.', beneficios: ['Energia', 'Nervos'], paraQuem: 'Veganos', linkArtigo: '/blog/vitamina-b12-vegetarianos-veganos', linkAfiliado: 'https://www.amazon.com.br/s?k=vitamina+b12&tag=105c91-20' },
  { posicao: 7, nome: 'Zinco', categoria: 'Minerais', nota: 8.6, descricao: 'Imunidade e testosterona.', beneficios: ['Imunidade', 'Hormonio'], paraQuem: 'Homens', linkArtigo: '/blog/zinco-imunidade-testosterona-pele', linkAfiliado: 'https://www.amazon.com.br/s?k=zinco&tag=105c91-20' },
  { posicao: 8, nome: 'Melatonina', categoria: 'Sono', nota: 8.4, descricao: 'Hormonio do sono.', beneficios: ['Dormir', 'Qualidade'], paraQuem: 'Insones', linkArtigo: '/blog/melatonina-sono-insonia-dose-ideal', linkAfiliado: 'https://www.amazon.com.br/s?k=melatonina&tag=105c91-20' },
]

export default function MelhoresSuplementosPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-400 border-4 border-black shadow-[8px_8px_0_0_#000] px-8 py-4 mb-6 -rotate-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase">Top 8 Suplementos 2025</h1>
          </div>
          <p className="text-xl text-black font-bold max-w-3xl mx-auto">Ranking baseado em ciencia e custo-beneficio.</p>
        </div>
        <div className="space-y-6">
          {SUPLEMENTOS.map((sup) => (
            <div key={sup.posicao} className={order-4 border-black shadow-[6px_6px_0_0_#000] p-6 }>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className={w-20 h-20 border-4 border-black flex items-center justify-center font-black text-4xl }>#{sup.posicao}</div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-2xl font-black text-black">{sup.nome}</h2>
                    <Badge variant={sup.destaque ? 'danger' : 'success'}>{sup.categoria}</Badge>
                    {sup.destaque && <span className="flex items-center gap-1 bg-black text-yellow-400 px-2 py-1 text-xs font-black uppercase"><Award className="w-4 h-4" /> DESTAQUE</span>}
                  </div>
                  <p className="text-black font-medium mb-4">{sup.descricao}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {sup.beneficios.map((b, i) => <span key={i} className="flex items-center gap-1 bg-lime-100 border border-lime-400 px-2 py-1 text-sm font-bold text-lime-800"><CheckCircle className="w-4 h-4" /> {b}</span>)}
                  </div>
                  <p className="text-sm text-gray-600 mb-4"><strong>Para quem:</strong> {sup.paraQuem}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link href={sup.linkArtigo}><Button variant="primary" size="sm">Ler Guia</Button></Link>
                    <a href={sup.linkAfiliado} target="_blank" rel="noopener noreferrer sponsored" className="bg-lime-400 border-2 border-black shadow-[3px_3px_0_0_#000] hover:shadow-[1px_1px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all px-4 py-2 font-bold text-black flex items-center gap-2">Ver Preco <ExternalLink className="w-4 h-4" /></a>
                  </div>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center justify-center bg-black p-4">
                  <div className="flex items-center gap-1 mb-1">{[...Array(5)].map((_, i) => <Star key={i} className={i < Math.round(sup.nota/2) ? 'text-yellow-400 fill-yellow-400 w-5 h-5' : 'text-gray-600 w-5 h-5'} />)}</div>
                  <div className="text-3xl font-black text-yellow-400">{sup.nota}</div>
                  <div className="text-xs text-white font-bold">/10</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-black shadow-[8px_8px_0_0_#000] p-8 text-center">
          <h3 className="text-2xl font-black text-black uppercase mb-4">Nao sabe por onde comecar?</h3>
          <p className="text-black font-bold mb-6">Faca nossa avaliacao gratuita!</p>
          <Link href="/avaliacao"><Button variant="primary" size="lg" className="text-xl">Fazer Avaliacao</Button></Link>
        </div>
        <p className="text-xs text-gray-500 mt-8 text-center">Links de afiliado: voce nao paga nada a mais.</p>
      </div>
    </div>
  )
}
'''

with open('app/melhores-suplementos/page.tsx', 'w', encoding='utf-8') as f:
    f.write(codigo)
print('OK!')
