import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Alert } from '@/components/ui/Alert'
import { Button } from '@/components/ui/Button'
import { DisclaimerBanner } from '@/components/layout/DisclaimerBanner'
import { ArrowLeft, ExternalLink, ShoppingCart } from 'lucide-react'
import nutrientesData from '@/data/nutrientes.json'
import type { Nutriente } from '@/types/nutriente'
import { addAmazonAffiliateTag } from '@/lib/affiliate'

const nutrientes = nutrientesData as Record<string, Nutriente>

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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/nutrientes"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Nutrientes
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-6xl">{nutriente.emoji}</span>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold text-gray-900">
                  {nutriente.nome}
                </h1>
                <Badge variant={nutriente.categoria === 'vitamina' ? 'info' : 'success'}>
                  {nutriente.categoria}
                </Badge>
              </div>
              {nutriente.nome_cientifico && (
                <p className="text-lg text-gray-600 italic mb-2">
                  {nutriente.nome_cientifico}
                </p>
              )}
              <Badge variant="neutral">{nutriente.subcategoria}</Badge>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            {nutriente.descricao_longa}
          </p>
        </div>

        {/* Disclaimer */}
        <DisclaimerBanner
          variant="warning"
          message="As informações nesta página são educacionais. O ideal é consultar um profissional de saúde para orientação personalizada."
        />

        {/* Funções Corporais */}
        {nutriente.funcoes_corporais && nutriente.funcoes_corporais.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>🎯 Funções no Organismo</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3 sm:grid-cols-2">
                {nutriente.funcoes_corporais.map((funcao, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-success-600 mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{funcao}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Fontes Alimentares */}
        {nutriente.fontes_alimentares && nutriente.fontes_alimentares.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>🍽️ Fontes Alimentares</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Alimento</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-700">Quantidade</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-700">% VD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nutriente.fontes_alimentares.map((fonte, idx) => (
                      <tr key={idx} className="border-b border-gray-100">
                        <td className="py-3 px-4 text-gray-700">{fonte.alimento}</td>
                        <td className="py-3 px-4 text-right text-gray-700">
                          {fonte.quantidade} {fonte.unidade}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <Badge variant={fonte.percentual_vd >= 100 ? 'success' : 'neutral'}>
                            {fonte.percentual_vd}%
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Dosagens */}
        {nutriente.dosagem && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>💊 Dosagens Recomendadas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* RDA */}
              {nutriente.dosagem.rda && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Ingestão Diária Recomendada (RDA)</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {nutriente.dosagem.rda.adultos && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Adultos</p>
                        <p className="text-2xl font-bold text-primary-600">
                          {nutriente.dosagem.rda.adultos.valor} {nutriente.dosagem.rda.adultos.unidade}
                        </p>
                      </div>
                    )}
                    {nutriente.dosagem.rda.gestantes && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Gestantes</p>
                        <p className="text-2xl font-bold text-primary-600">
                          {nutriente.dosagem.rda.gestantes.valor} {nutriente.dosagem.rda.gestantes.unidade}
                        </p>
                      </div>
                    )}
                    {nutriente.dosagem.rda.lactantes && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Lactantes</p>
                        <p className="text-2xl font-bold text-primary-600">
                          {nutriente.dosagem.rda.lactantes.valor} {nutriente.dosagem.rda.lactantes.unidade}
                        </p>
                      </div>
                    )}
                    {nutriente.dosagem.rda.idosos_50_plus && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Idosos 50+</p>
                        <p className="text-2xl font-bold text-primary-600">
                          {nutriente.dosagem.rda.idosos_50_plus.valor} {nutriente.dosagem.rda.idosos_50_plus.unidade}
                        </p>
                        {nutriente.dosagem.rda.idosos_50_plus.nota && (
                          <p className="text-xs text-gray-500 mt-2">{nutriente.dosagem.rda.idosos_50_plus.nota}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Suplementação Preventiva */}
              {nutriente.dosagem.suplementacao_preventiva && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Suplementação Preventiva</h3>
                  <div className="bg-success-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-success-700 mb-2">
                      {nutriente.dosagem.suplementacao_preventiva.min} - {nutriente.dosagem.suplementacao_preventiva.max} {nutriente.dosagem.suplementacao_preventiva.unidade}
                    </p>
                    {nutriente.dosagem.suplementacao_preventiva.nota && (
                      <p className="text-sm text-gray-600">{nutriente.dosagem.suplementacao_preventiva.nota}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Suplementação Terapêutica */}
              {nutriente.dosagem.suplementacao_terapeutica && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Suplementação Terapêutica</h3>
                  <div className="bg-warning-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-warning-700 mb-2">
                      {nutriente.dosagem.suplementacao_terapeutica.min} - {nutriente.dosagem.suplementacao_terapeutica.max} {nutriente.dosagem.suplementacao_terapeutica.unidade}
                    </p>
                    {nutriente.dosagem.suplementacao_terapeutica.nota && (
                      <p className="text-sm text-gray-600">{nutriente.dosagem.suplementacao_terapeutica.nota}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Limite Superior */}
              {nutriente.dosagem.limite_superior && (
                <Alert variant="warning">
                  <div>
                    <strong>Limite Superior Tolerável:</strong> {nutriente.dosagem.limite_superior.valor} {nutriente.dosagem.limite_superior.unidade}
                    {nutriente.dosagem.nota_limite && (
                      <p className="text-sm mt-2">{nutriente.dosagem.nota_limite}</p>
                    )}
                  </div>
                </Alert>
              )}

              {!nutriente.dosagem.limite_superior && nutriente.dosagem.nota_limite && (
                <Alert variant="info">
                  <p className="text-sm">{nutriente.dosagem.nota_limite}</p>
                </Alert>
              )}
            </CardContent>
          </Card>
        )}

        {/* Deficiência */}
        {nutriente.deficiencia && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>⚠️ Deficiência</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {nutriente.deficiencia.prevalencia && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Prevalência</h3>
                  <p className="text-gray-700">{nutriente.deficiencia.prevalencia}</p>
                </div>
              )}

              {nutriente.deficiencia.sintomas && nutriente.deficiencia.sintomas.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sintomas</h3>
                  <ul className="space-y-2">
                    {nutriente.deficiencia.sintomas.map((sintoma, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-danger-600 mt-1">•</span>
                        <span className="text-gray-700">{sintoma}</span>
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
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>🔴 Excesso e Toxicidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {nutriente.excesso.toxicidade && (
                <Alert variant="danger">
                  <strong>Nível de Toxicidade:</strong> {nutriente.excesso.toxicidade}
                </Alert>
              )}

              {nutriente.excesso.sintomas && nutriente.excesso.sintomas.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sintomas de Excesso</h3>
                  <ul className="space-y-2">
                    {nutriente.excesso.sintomas.map((sintoma, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-danger-600 mt-1">•</span>
                        <span className="text-gray-700">{sintoma}</span>
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
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>🔄 Interações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {nutriente.interacoes.medicamentos && nutriente.interacoes.medicamentos.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Com Medicamentos</h3>
                  <div className="space-y-3">
                    {nutriente.interacoes.medicamentos.map((interacao, idx) => (
                      <div key={idx} className="bg-warning-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900 mb-1">{interacao.nome}</p>
                        <p className="text-sm text-gray-700 mb-2">{interacao.efeito}</p>
                        {interacao.recomendacao && (
                          <p className="text-sm text-warning-800">
                            <strong>Recomendação:</strong> {interacao.recomendacao}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {nutriente.interacoes.nutrientes_sinergicos && nutriente.interacoes.nutrientes_sinergicos.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Nutrientes Sinérgicos</h3>
                  <div className="flex flex-wrap gap-2">
                    {nutriente.interacoes.nutrientes_sinergicos.map((nutrienteSin, idx) => (
                      <Badge key={idx} variant="success">{nutrienteSin}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Esses nutrientes funcionam melhor quando combinados</p>
                </div>
              )}

              {nutriente.interacoes.nutrientes_antagonistas && nutriente.interacoes.nutrientes_antagonistas.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Nutrientes Antagonistas</h3>
                  <div className="flex flex-wrap gap-2">
                    {nutriente.interacoes.nutrientes_antagonistas.map((nutrienteAnt, idx) => (
                      <Badge key={idx} variant="warning">{nutrienteAnt}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Evite tomar esses nutrientes ao mesmo tempo</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Formas de Suplemento */}
        {nutriente.formas_suplemento && nutriente.formas_suplemento.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>💊 Formas de Suplemento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nutriente.formas_suplemento.map((forma, idx) => (
                  <div key={idx} className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{forma.forma}</h3>
                    {forma.descricao && (
                      <p className="text-sm text-gray-700 mb-2">{forma.descricao}</p>
                    )}
                    {forma.vantagens && forma.vantagens.length > 0 && (
                      <div className="mb-2">
                        <p className="text-xs font-semibold text-success-700 mb-1">Vantagens:</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {forma.vantagens.map((vantagem, vIdx) => (
                            <li key={vIdx}>✓ {vantagem}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {forma.desvantagens && forma.desvantagens.length > 0 && (
                      <div className="mb-2">
                        <p className="text-xs font-semibold text-warning-700 mb-1">Desvantagens:</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {forma.desvantagens.map((desvantagem, dIdx) => (
                            <li key={dIdx}>• {desvantagem}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {forma.nota && (
                      <p className="text-xs text-blue-600 mt-2">💡 {forma.nota}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Evidências Científicas */}
        {nutriente.evidencias && nutriente.evidencias.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>🔬 Evidências Científicas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nutriente.evidencias.map((evidencia, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                    <div className="mb-2">
                      <h3 className="font-semibold text-gray-900">{evidencia.titulo}</h3>
                      {evidencia.autores && (
                        <p className="text-xs text-gray-600 mt-1">{evidencia.autores} ({evidencia.ano})</p>
                      )}
                    </div>
                    {evidencia.conclusao && (
                      <p className="text-sm text-gray-700 mb-2">{evidencia.conclusao}</p>
                    )}
                    {evidencia.citacao_chave && (
                      <p className="text-sm text-gray-600 italic mb-2">&ldquo;{evidencia.citacao_chave}&rdquo;</p>
                    )}
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="neutral">{evidencia.tipo}</Badge>
                      {evidencia.revista && (
                        <Badge variant="info" size="sm">{evidencia.revista}</Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-3">
                      {evidencia.doi && (
                        <a
                          href={`https://doi.org/${evidencia.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium underline"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Ver artigo completo (DOI)
                        </a>
                      )}
                      {evidencia.pmid && (
                        <a
                          href={`https://pubmed.ncbi.nlm.nih.gov/${evidencia.pmid}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-success-600 hover:text-success-700 font-medium underline"
                        >
                          <ExternalLink className="w-3 h-3" />
                          PubMed
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Links Afiliados Amazon */}
        {nutriente.afiliados.amazon && nutriente.afiliados.amazon.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>🛒 Suplementos Recomendados</CardTitle>
            </CardHeader>
            <CardContent>
              <Alert variant="info" className="mb-4">
                <p className="text-sm">
                  Os links abaixo são afiliados da Amazon. Ao comprar através deles, você ajuda a manter o Suplementa Já
                  sem custo adicional. O ideal é consultar um profissional de saúde para orientação personalizada.
                </p>
              </Alert>
              <div className="grid gap-4 sm:grid-cols-2">
                {nutriente.afiliados.amazon.slice(0, 4).map((produto, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 mb-2">{produto.nome}</h4>
                    {produto.badge && (
                      <Badge variant="success" size="sm" className="mb-2">{produto.badge}</Badge>
                    )}
                    {produto.preco_aprox && (
                      <p className="text-sm text-gray-600 mb-3">Aprox. R$ {produto.preco_aprox.toFixed(2)}</p>
                    )}
                    <a
                      href={addAmazonAffiliateTag(produto.link)}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Ver na Amazon
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">
            Descubra Se Você Precisa de {nutriente.nome}
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Faça nossa avaliação personalizada e receba recomendações específicas para seu perfil de saúde.
          </p>
          <Link href="/avaliacao">
            <Button variant="secondary" size="lg">
              Fazer Avaliação Gratuita
            </Button>
          </Link>
        </div>

        {/* Back to list */}
        <div className="text-center mt-8">
          <Link href="/nutrientes">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Todos os Nutrientes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
