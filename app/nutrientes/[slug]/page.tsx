import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ManualDisplayAd } from '@/components/ads/ManualDisplayAd'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Alert } from '@/components/ui/Alert'
import { Button } from '@/components/ui/Button'
import { DisclaimerBanner } from '@/components/layout/DisclaimerBanner'
import { ArrowLeft, ExternalLink, ShoppingCart } from 'lucide-react'
import { addAmazonAffiliateTag } from '@/lib/affiliate'
import nutrientesData from '@/data/nutrientes.json'
import artigosData from '@/data/artigos.json'
import type { Nutriente } from '@/types/nutriente'
import type { Artigo } from '@/types/artigo'
import { RelatedContent } from '@/components/content/RelatedContent'
import { getArtigosRelacionados } from '@/lib/related-content'

const nutrientes = nutrientesData as Record<string, Nutriente>
const artigos = artigosData as Artigo[]

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return Object.keys(nutrientes).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const nutriente = nutrientes[params.slug]

  if (!nutriente) {
    return {
      title: 'Nutriente não encontrado',
    }
  }

  return {
    title: `${nutriente.nome} (${nutriente.nome_cientifico}) - Suplementa Já`,
    description: nutriente.descricao_curta,
    keywords: nutriente.seo?.keywords?.join(', '),
  }
}

export default function NutrienteDetailPage({ params }: PageProps) {
  const nutriente = nutrientes[params.slug]

  if (!nutriente) {
    notFound()
  }

  const categoryColor = nutriente.categoria === 'vitamina' ? 'cyan-400' :
    nutriente.categoria === 'mineral' ? 'lime-400' : 'pink-500'
  const categoryTextColor = nutriente.categoria === 'outro' ? 'text-white' : 'text-black'

  // BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.suplementaja.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Nutrientes',
        item: 'https://www.suplementaja.com/nutrientes',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: nutriente.nome,
        item: `https://www.suplementaja.com/nutrientes/${params.slug}`,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white py-8">
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb - NEOBRUTALISM */}
        <div className="mb-8">
          <Link href="/nutrientes">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Nutrientes
            </Button>
          </Link>
        </div>

        {/* Header - NEOBRUTALISM */}
        <div className={`bg-${categoryColor} border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] p-4 sm:p-6 md:p-8 mb-8 transform sm:-rotate-1`}>
          <div className="flex items-start gap-6 mb-4">
            <div className="w-24 h-24 bg-black border-4 border-black flex items-center justify-center text-6xl flex-shrink-0">
              {nutriente.emoji}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <h1 className={`text-2xl sm:text-4xl md:text-5xl font-black ${categoryTextColor} uppercase`}>
                  {nutriente.nome}
                </h1>
                <Badge variant={nutriente.categoria === 'vitamina' ? 'info' : nutriente.categoria === 'mineral' ? 'success' : 'danger'} size="lg">
                  {nutriente.categoria}
                </Badge>
              </div>
              {nutriente.nome_cientifico && (
                <p className={`text-lg font-bold italic mb-2 ${categoryTextColor}`}>
                  {nutriente.nome_cientifico}
                </p>
              )}
              <Badge variant="neutral" size="lg">{nutriente.subcategoria}</Badge>
            </div>
          </div>
          <div className="bg-white border-4 border-black p-4 mt-4">
            <p className="text-base font-bold text-black leading-relaxed">
              {nutriente.descricao_longa}
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <DisclaimerBanner
          variant="warning"
          message="As informações nesta página são educacionais. O ideal é consultar um profissional de saúde para orientação personalizada."
        />

        {/* Anúncio Display */}
        <ManualDisplayAd className="my-8" />

        {/* Funções Corporais */}
        {nutriente.funcoes_corporais && nutriente.funcoes_corporais.length > 0 && (
          <Card className="mb-8 bg-lime-400">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl">🎯 Funções no Organismo</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3 sm:grid-cols-2">
                {nutriente.funcoes_corporais.map((funcao, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white border-2 border-black p-3">
                    <span className="text-black font-black mt-1 flex-shrink-0">✓</span>
                    <span className="text-black font-bold">{funcao}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Fontes Alimentares */}
        {nutriente.fontes_alimentares && nutriente.fontes_alimentares.length > 0 && (
          <Card className="mb-8 bg-cyan-400">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl">🍽️ Fontes Alimentares</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-4 border-black">
                  <thead>
                    <tr className="border-b-4 border-black bg-black">
                      <th className="text-left py-4 px-4 font-black text-cyan-400 uppercase">Alimento</th>
                      <th className="text-right py-4 px-4 font-black text-cyan-400 uppercase">Quantidade</th>
                      <th className="text-right py-4 px-4 font-black text-cyan-400 uppercase">% VD</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {nutriente.fontes_alimentares.map((fonte, idx) => (
                      <tr key={idx} className="border-b-2 border-black">
                        <td className="py-3 px-4 text-black font-bold">{fonte.alimento}</td>
                        <td className="py-3 px-4 text-right text-black font-bold">
                          {fonte.quantidade} {fonte.unidade}
                        </td>
                        <td className="py-3 px-4 text-right">
                          {fonte.percentual_vd === 0 ? (
                            <Badge variant="neutral">N/A</Badge>
                          ) : (
                            <Badge variant={fonte.percentual_vd >= 100 ? 'success' : 'neutral'}>
                              {fonte.percentual_vd}%
                            </Badge>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {nutriente.fontes_alimentares.some(f => f.percentual_vd === 0) && (
                <div className="mt-4 bg-yellow-400 border-2 border-black p-3">
                  <p className="text-xs text-black font-bold">
                    💡 N/A = Não é possível calcular % do Valor Diário pois este nutriente não possui RDA estabelecida.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Dosagens */}
        {nutriente.dosagem && (
          <Card className="mb-8 bg-yellow-400">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl">💊 Dosagens Recomendadas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* RDA */}
              {nutriente.dosagem.rda && (
                <div>
                  <div className="bg-black border-4 border-black px-4 py-2 mb-4 inline-block">
                    <h3 className="font-black text-yellow-400 uppercase">Ingestão Diária Recomendada (RDA)</h3>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {nutriente.dosagem.rda.adultos && (
                      <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] p-4">
                        <p className="text-sm font-black text-black mb-2 uppercase">Adultos</p>
                        {nutriente.dosagem.rda.adultos.valor === 0 && nutriente.dosagem.rda.adultos.nota ? (
                          <div>
                            <p className="text-xl font-black text-black mb-2 bg-cyan-400 border-2 border-black p-3 inline-block">
                              {nutriente.dosagem.rda.adultos.nota}
                            </p>
                            <p className="text-xs text-black font-bold mt-2">
                              Este nutriente não possui RDA estabelecida, pois não é classificado como essencial.
                            </p>
                          </div>
                        ) : (
                          <p className="text-3xl font-black text-black">
                            {nutriente.dosagem.rda.adultos.valor} {nutriente.dosagem.rda.adultos.unidade}
                          </p>
                        )}
                      </div>
                    )}
                    {nutriente.dosagem.rda.gestantes && (
                      <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] p-4">
                        <p className="text-sm font-black text-black mb-2 uppercase">Gestantes</p>
                        <p className="text-3xl font-black text-black">
                          {nutriente.dosagem.rda.gestantes.valor} {nutriente.dosagem.rda.gestantes.unidade}
                        </p>
                      </div>
                    )}
                    {nutriente.dosagem.rda.lactantes && (
                      <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] p-4">
                        <p className="text-sm font-black text-black mb-2 uppercase">Lactantes</p>
                        <p className="text-3xl font-black text-black">
                          {nutriente.dosagem.rda.lactantes.valor} {nutriente.dosagem.rda.lactantes.unidade}
                        </p>
                      </div>
                    )}
                    {nutriente.dosagem.rda.idosos_50_plus && (
                      <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] p-4">
                        <p className="text-sm font-black text-black mb-2 uppercase">Idosos 50+</p>
                        <p className="text-3xl font-black text-black">
                          {nutriente.dosagem.rda.idosos_50_plus.valor} {nutriente.dosagem.rda.idosos_50_plus.unidade}
                        </p>
                        {nutriente.dosagem.rda.idosos_50_plus.nota && (
                          <p className="text-xs text-black font-bold mt-2">{nutriente.dosagem.rda.idosos_50_plus.nota}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Suplementação Preventiva */}
              {nutriente.dosagem.suplementacao_preventiva && (
                <div>
                  <div className="bg-black border-4 border-black px-4 py-2 mb-4 inline-block">
                    <h3 className="font-black text-lime-400 uppercase">Suplementação Preventiva</h3>
                  </div>
                  <div className="bg-lime-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] p-6">
                    <p className="text-3xl font-black text-black mb-2">
                      {nutriente.dosagem.suplementacao_preventiva.min} - {nutriente.dosagem.suplementacao_preventiva.max} {nutriente.dosagem.suplementacao_preventiva.unidade}
                    </p>
                    {nutriente.dosagem.suplementacao_preventiva.nota && (
                      <p className="text-sm font-bold text-black">{nutriente.dosagem.suplementacao_preventiva.nota}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Suplementação Terapêutica */}
              {nutriente.dosagem.suplementacao_terapeutica && (
                <div>
                  <div className="bg-black border-4 border-black px-4 py-2 mb-4 inline-block">
                    <h3 className="font-black text-cyan-400 uppercase">Suplementação Terapêutica</h3>
                  </div>
                  <div className="bg-cyan-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] p-6">
                    <p className="text-3xl font-black text-black mb-2">
                      {nutriente.dosagem.suplementacao_terapeutica.min} - {nutriente.dosagem.suplementacao_terapeutica.max} {nutriente.dosagem.suplementacao_terapeutica.unidade}
                    </p>
                    {nutriente.dosagem.suplementacao_terapeutica.nota && (
                      <p className="text-sm font-bold text-black">{nutriente.dosagem.suplementacao_terapeutica.nota}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Limite Superior */}
              {nutriente.dosagem.limite_superior && (
                <Alert variant="danger">
                  <div>
                    <strong className="font-black">Limite Superior Tolerável:</strong> {nutriente.dosagem.limite_superior.valor} {nutriente.dosagem.limite_superior.unidade}
                    {nutriente.dosagem.nota_limite && (
                      <p className="text-sm font-bold mt-2">{nutriente.dosagem.nota_limite}</p>
                    )}
                  </div>
                </Alert>
              )}

              {!nutriente.dosagem.limite_superior && nutriente.dosagem.nota_limite && (
                <Alert variant="info">
                  <p className="text-sm font-bold">{nutriente.dosagem.nota_limite}</p>
                </Alert>
              )}
            </CardContent>
          </Card>
        )}

        {/* Deficiência */}
        {nutriente.deficiencia && (
          <Card className="mb-8 bg-pink-500">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-white">⚠️ Deficiência</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {nutriente.deficiencia.prevalencia && (
                <div>
                  <div className="bg-black px-4 py-2 mb-3 inline-block border-2 border-black">
                    <h3 className="font-black text-pink-500 uppercase">Prevalência</h3>
                  </div>
                  <p className="font-bold bg-white border-4 border-black p-4 text-black">{nutriente.deficiencia.prevalencia}</p>
                </div>
              )}

              {nutriente.deficiencia.sintomas && nutriente.deficiencia.sintomas.length > 0 && (
                <div>
                  <div className="bg-black px-4 py-2 mb-3 inline-block border-2 border-black">
                    <h3 className="font-black text-pink-500 uppercase">Sintomas</h3>
                  </div>
                  <ul className="space-y-2">
                    {nutriente.deficiencia.sintomas.map((sintoma, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-white border-2 border-black p-3">
                        <span className="text-black font-black">•</span>
                        <span className="text-black font-bold">{sintoma}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Excesso */}
        {nutriente.excesso && (
          <Card className="mb-8 bg-pink-500">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-white">🔴 Excesso e Toxicidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {nutriente.excesso.toxicidade && (
                <Alert variant="danger">
                  <strong className="font-black">Nível de Toxicidade:</strong> {nutriente.excesso.toxicidade}
                </Alert>
              )}

              {nutriente.excesso.sintomas && nutriente.excesso.sintomas.length > 0 && (
                <div>
                  <div className="bg-black px-4 py-2 mb-3 inline-block border-2 border-black">
                    <h3 className="font-black text-pink-500 uppercase">Sintomas de Excesso</h3>
                  </div>
                  <ul className="space-y-2">
                    {nutriente.excesso.sintomas.map((sintoma, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-white border-2 border-black p-3">
                        <span className="text-black font-black">•</span>
                        <span className="text-black font-bold">{sintoma}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Interações */}
        {nutriente.interacoes && (
          <Card className="mb-8 bg-yellow-400">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl">🔄 Interações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {nutriente.interacoes.medicamentos && nutriente.interacoes.medicamentos.length > 0 && (
                <div>
                  <div className="bg-black px-4 py-2 mb-4 inline-block border-2 border-black">
                    <h3 className="font-black text-yellow-400 uppercase">Com Medicamentos</h3>
                  </div>
                  <div className="space-y-3">
                    {nutriente.interacoes.medicamentos.map((interacao, idx) => (
                      <div key={idx} className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] p-4">
                        <p className="font-black text-black mb-2 uppercase">{interacao.nome}</p>
                        <p className="text-sm text-black font-bold mb-2">{interacao.efeito}</p>
                        {interacao.recomendacao && (
                          <p className="text-sm text-black bg-pink-500 text-white border-2 border-black p-2">
                            <strong className="font-black">Recomendação:</strong> {interacao.recomendacao}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {nutriente.interacoes.nutrientes_sinergicos && nutriente.interacoes.nutrientes_sinergicos.length > 0 && (
                <div>
                  <div className="bg-black px-4 py-2 mb-4 inline-block border-2 border-black">
                    <h3 className="font-black text-lime-400 uppercase">Nutrientes Sinérgicos</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {nutriente.interacoes.nutrientes_sinergicos.map((nutrienteSin, idx) => (
                      <Badge key={idx} variant="success" size="lg">{nutrienteSin}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-black font-bold bg-white border-2 border-black p-3">Esses nutrientes funcionam melhor quando combinados</p>
                </div>
              )}

              {nutriente.interacoes.nutrientes_antagonistas && nutriente.interacoes.nutrientes_antagonistas.length > 0 && (
                <div>
                  <div className="bg-black px-4 py-2 mb-4 inline-block border-2 border-black">
                    <h3 className="font-black text-pink-500 uppercase">Nutrientes Antagonistas</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {nutriente.interacoes.nutrientes_antagonistas.map((nutrienteAnt, idx) => (
                      <Badge key={idx} variant="danger" size="lg">{nutrienteAnt}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-black font-bold bg-white border-2 border-black p-3">Evite tomar esses nutrientes ao mesmo tempo</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Formas de Suplemento */}
        {nutriente.formas_suplemento && nutriente.formas_suplemento.length > 0 && (
          <Card className="mb-8 bg-cyan-400">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl">💊 Formas de Suplemento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nutriente.formas_suplemento.map((forma, idx) => (
                  <div key={idx} className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] p-4">
                    <h3 className="font-black text-black text-lg mb-2 uppercase">{forma.forma}</h3>
                    {forma.descricao && (
                      <p className="text-sm text-black font-bold mb-3">{forma.descricao}</p>
                    )}
                    {forma.vantagens && forma.vantagens.length > 0 && (
                      <div className="mb-3 bg-lime-400 border-2 border-black p-3">
                        <p className="text-xs font-black text-black mb-2 uppercase">Vantagens:</p>
                        <ul className="text-xs text-black space-y-1">
                          {forma.vantagens.map((vantagem, vIdx) => (
                            <li key={vIdx} className="font-bold">✓ {vantagem}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {forma.desvantagens && forma.desvantagens.length > 0 && (
                      <div className="mb-3 bg-pink-500 border-2 border-black p-3">
                        <p className="text-xs font-black text-white mb-2 uppercase">Desvantagens:</p>
                        <ul className="text-xs text-white space-y-1">
                          {forma.desvantagens.map((desvantagem, dIdx) => (
                            <li key={dIdx} className="font-bold">• {desvantagem}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {forma.nota && (
                      <p className="text-xs text-black font-bold bg-yellow-400 border-2 border-black p-2">💡 {forma.nota}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Evidências Científicas */}
        {nutriente.evidencias && nutriente.evidencias.length > 0 && (
          <Card className="mb-8 bg-lime-400">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl">🔬 Evidências Científicas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nutriente.evidencias.map((evidencia, idx) => (
                  <div key={idx} className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] p-6">
                    <div className="mb-3">
                      <h3 className="font-black text-black text-lg uppercase">{evidencia.titulo}</h3>
                      {evidencia.autores && (
                        <p className="text-xs text-black font-bold mt-2">{evidencia.autores} ({evidencia.ano})</p>
                      )}
                    </div>
                    {evidencia.conclusao && (
                      <p className="text-sm text-black font-bold mb-3">{evidencia.conclusao}</p>
                    )}
                    {evidencia.citacao_chave && (
                      <p className="text-sm text-black italic mb-3 bg-cyan-400 border-2 border-black p-3 font-bold">&ldquo;{evidencia.citacao_chave}&rdquo;</p>
                    )}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="neutral">{evidencia.tipo}</Badge>
                      {evidencia.revista && (
                        <Badge variant="info" size="sm">{evidencia.revista}</Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {evidencia.doi && (
                        <a
                          href={`https://doi.org/${evidencia.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="primary" size="sm">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Ver artigo completo (DOI)
                          </Button>
                        </a>
                      )}
                      {evidencia.pmid && (
                        <a
                          href={`https://pubmed.ncbi.nlm.nih.gov/${evidencia.pmid}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="success" size="sm">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            PubMed
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Suplementos Recomendados */}
        {nutriente.afiliados?.amazon && nutriente.afiliados.amazon.length > 0 && (
          <Card className="mb-8 bg-yellow-400">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl">🛒 Suplementos Recomendados</CardTitle>
            </CardHeader>
            <CardContent>
              <Alert variant="info" className="mb-6">
                <p className="text-sm font-bold">
                  ⚠️ Consulte sempre um profissional de saúde antes de iniciar qualquer suplementação. As dosagens e indicações são apenas informativas.
                </p>
              </Alert>
              <div className="grid gap-4 sm:grid-cols-2">
                {nutriente.afiliados.amazon.slice(0, 4).map((produto, idx) => (
                  <div key={idx} className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] p-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000] transition-all">
                    <h4 className="font-black text-black mb-2 text-lg uppercase">{produto.nome}</h4>
                    {produto.badge && (
                      <Badge variant="success" size="sm" className="mb-3">{produto.badge}</Badge>
                    )}
                    {produto.preco_aprox && (
                      <p className="text-sm text-black font-bold mb-4">Aprox. R$ {produto.preco_aprox.toFixed(2)}</p>
                    )}
                    <a
                      href={addAmazonAffiliateTag(produto.link)}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                    >
                      <Button variant="primary" size="sm" className="w-full">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Ver na Amazon
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </Button>
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Calculadoras Relacionadas */}
        <div className="mb-8">
          <div className="bg-black px-6 py-3 mb-6 inline-block sm:-rotate-1 border-4 border-black">
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
              🧮 Calculadoras Úteis
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/calculadoras/calorias" className="block group">
              <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] p-4 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[2px_2px_0_0_#000] transition-all">
                <span className="text-2xl mb-2 block">🔥</span>
                <p className="font-black text-black uppercase">Gasto Calórico Diário</p>
                <p className="text-xs text-gray-700 font-bold mt-1">Descubra quanto você gasta</p>
              </div>
            </Link>
            <Link href="/calculadoras/proteina" className="block group">
              <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] p-4 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[2px_2px_0_0_#000] transition-all">
                <span className="text-2xl mb-2 block">🥩</span>
                <p className="font-black text-black uppercase">Proteína Diária</p>
                <p className="text-xs text-gray-700 font-bold mt-1">Quanto comer por dia</p>
              </div>
            </Link>
            <Link href="/calculadoras/creatina" className="block group">
              <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] p-4 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[2px_2px_0_0_#000] transition-all">
                <span className="text-2xl mb-2 block">💪</span>
                <p className="font-black text-black uppercase">Dose de Creatina</p>
                <p className="text-xs text-gray-700 font-bold mt-1">Calcule sua carga e manutenção</p>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Final - NEOBRUTALISM */}
        <div className="bg-pink-500 border-8 border-black shadow-[12px_12px_0_0_#000] p-6 sm:p-8 md:p-12 text-center mb-8">
          <div className="bg-black px-6 py-3 mb-6 inline-block sm:-rotate-1 border-4 border-black">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-pink-500 uppercase">
              Descubra Se Você Precisa de {nutriente.nome}
            </h3>
          </div>
          <div className="bg-white border-4 border-black p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-lg text-black font-bold leading-relaxed">
              Faça nossa avaliação personalizada e receba recomendações específicas para seu perfil de saúde.
            </p>
          </div>
          <Link href="/avaliacao">
            <Button variant="secondary" size="lg" className="text-xl px-10 py-6">
              Fazer Avaliação Gratuita
            </Button>
          </Link>
        </div>

        {/* Conteúdo Relacionado */}
        {(() => {
          const artigosRelacionados = getArtigosRelacionados(params.slug)
            .map((artigoSlug) => {
              const artigo = artigos.find((a) => a.slug === artigoSlug)
              if (!artigo) return null
              return {
                type: 'artigo' as const,
                slug: artigo.slug,
                titulo: artigo.titulo,
                descricao: artigo.descricao,
                categoria: artigo.categoria,
              }
            })
            .filter((item) => item !== null)
            .slice(0, 3) as Array<{ type: 'artigo'; slug: string; titulo: string; descricao: string; categoria: string }>

          return artigosRelacionados.length > 0 ? (
            <RelatedContent
              items={artigosRelacionados}
              title="📚 Artigos Relacionados Sobre Este Nutriente"
            />
          ) : null
        })()}

        {/* Back to list */}
        <div className="text-center">
          <Link href="/nutrientes">
            <Button variant="outline" size="lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Todos os Nutrientes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
