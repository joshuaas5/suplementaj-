import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { FileCheck, BookOpen, Users, Shield, ExternalLink, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata = {
    title: 'Política Editorial',
    description: 'Conheça nossa metodologia, fontes científicas e processo de revisão de conteúdo. Transparência e compromisso com evidências científicas.',
    alternates: {
        canonical: '/editorial',
    },
}

export default function EditorialPage() {
    return (
        <div className="min-h-screen bg-white py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-block bg-lime-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] px-6 py-3 mb-6 sm:rotate-1">
                        <h1 className="text-3xl sm:text-5xl font-black text-black uppercase">Política Editorial</h1>
                    </div>
                    <p className="text-lg sm:text-xl text-gray-800 font-bold max-w-2xl mx-auto">
                        Nosso compromisso com a ciência, transparência e informação de qualidade
                    </p>
                </div>

                {/* Missão Editorial */}
                <Card className="mb-8 bg-cyan-400">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-black border-2 border-black flex items-center justify-center">
                                <FileCheck className="w-6 h-6 text-cyan-400" />
                            </div>
                            <CardTitle className="text-2xl sm:text-3xl">Nossa Missão Editorial</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-black font-bold text-base sm:text-lg leading-relaxed mb-4">
                            O <strong>Suplementa Já</strong> tem como missão fornecer informações sobre suplementação nutricional
                            que sejam <strong>baseadas em evidências científicas</strong>, acessíveis e práticas para o público geral.
                        </p>
                        <p className="text-black font-bold text-base sm:text-lg leading-relaxed">
                            Cada conteúdo publicado passa por um rigoroso processo de pesquisa, redação e revisão para garantir
                            precisão, atualidade e relevância.
                        </p>
                    </CardContent>
                </Card>

                {/* Como Criamos Nosso Conteúdo */}
                <Card className="mb-8 bg-yellow-400">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-black border-2 border-black flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-yellow-400" />
                            </div>
                            <CardTitle className="text-2xl sm:text-3xl">Como Criamos Nosso Conteúdo</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-white border-4 border-black p-4">
                            <div className="flex items-start gap-3">
                                <Badge variant="info" size="lg">1</Badge>
                                <div>
                                    <h3 className="font-black text-lg mb-2 uppercase">Pesquisa em Fontes Primárias</h3>
                                    <p className="text-black font-bold">
                                        Consultamos estudos clínicos, meta-análises e revisões sistemáticas publicadas em periódicos
                                        científicos revisados por pares (PubMed, Cochrane Library, etc.).
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border-4 border-black p-4">
                            <div className="flex items-start gap-3">
                                <Badge variant="success" size="lg">2</Badge>
                                <div>
                                    <h3 className="font-black text-lg mb-2 uppercase">Verificação de Evidências</h3>
                                    <p className="text-black font-bold">
                                        Priorizamos evidências de alta qualidade: ensaios clínicos randomizados controlados (RCTs),
                                        meta-análises e guidelines de organizações médicas reconhecidas.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border-4 border-black p-4">
                            <div className="flex items-start gap-3">
                                <Badge variant="warning" size="lg">3</Badge>
                                <div>
                                    <h3 className="font-black text-lg mb-2 uppercase">Redação Clara e Acessível</h3>
                                    <p className="text-black font-bold">
                                        Traduzimos a linguagem científica para um formato compreensível, sem perder a precisão
                                        das informações originais.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border-4 border-black p-4">
                            <div className="flex items-start gap-3">
                                <Badge variant="danger" size="lg">4</Badge>
                                <div>
                                    <h3 className="font-black text-lg mb-2 uppercase">Revisão e Atualização</h3>
                                    <p className="text-black font-bold">
                                        Todo conteúdo é revisado periodicamente para incorporar novas descobertas científicas
                                        e garantir que as informações permaneçam atualizadas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Nossas Fontes */}
                <Card className="mb-8 bg-lime-400">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-black border-2 border-black flex items-center justify-center">
                                <ExternalLink className="w-6 h-6 text-lime-400" />
                            </div>
                            <CardTitle className="text-2xl sm:text-3xl">Nossas Fontes Científicas</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-black font-bold text-base sm:text-lg leading-relaxed mb-6">
                            Utilizamos exclusivamente fontes científicas confiáveis e verificáveis:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-white border-4 border-black p-4">
                                <h4 className="font-black text-black uppercase mb-2">📚 Bases de Dados</h4>
                                <ul className="text-black font-bold text-sm space-y-1">
                                    <li>• PubMed / MEDLINE</li>
                                    <li>• Cochrane Library</li>
                                    <li>• SciELO</li>
                                    <li>• Google Scholar</li>
                                </ul>
                            </div>
                            <div className="bg-white border-4 border-black p-4">
                                <h4 className="font-black text-black uppercase mb-2">🏥 Organizações</h4>
                                <ul className="text-black font-bold text-sm space-y-1">
                                    <li>• World Health Organization (WHO)</li>
                                    <li>• ANVISA</li>
                                    <li>• FDA</li>
                                    <li>• NIH Office of Dietary Supplements</li>
                                </ul>
                            </div>
                            <div className="bg-white border-4 border-black p-4">
                                <h4 className="font-black text-black uppercase mb-2">📖 Tipos de Estudos</h4>
                                <ul className="text-black font-bold text-sm space-y-1">
                                    <li>• Meta-análises</li>
                                    <li>• Revisões sistemáticas</li>
                                    <li>• Ensaios clínicos randomizados</li>
                                    <li>• Guidelines médicos</li>
                                </ul>
                            </div>
                            <div className="bg-white border-4 border-black p-4">
                                <h4 className="font-black text-black uppercase mb-2">🔗 Referências</h4>
                                <ul className="text-black font-bold text-sm space-y-1">
                                    <li>• Links DOI para artigos</li>
                                    <li>• PubMed IDs (PMID)</li>
                                    <li>• Citações completas</li>
                                    <li>• Acesso verificável</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Equipe e Revisão */}
                <Card className="mb-8 bg-pink-500">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-black border-2 border-black flex items-center justify-center">
                                <Users className="w-6 h-6 text-pink-500" />
                            </div>
                            <CardTitle className="text-2xl sm:text-3xl text-white">Equipe Suplementa Já</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-white font-bold text-base sm:text-lg leading-relaxed mb-4">
                            Nossa equipe é composta por profissionais com formação em áreas relacionadas à saúde,
                            comprometidos com a <strong>educação em saúde baseada em evidências</strong>.
                        </p>
                        <div className="bg-white border-4 border-black p-4">
                            <h4 className="font-black text-black uppercase mb-3">📋 Processo de Revisão</h4>
                            <ul className="text-black font-bold space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-lime-600">✓</span>
                                    <span>Verificação de fontes e referências científicas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-lime-600">✓</span>
                                    <span>Revisão de precisão das dosagens e recomendações</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-lime-600">✓</span>
                                    <span>Verificação de contraindicações e interações</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-lime-600">✓</span>
                                    <span>Atualização periódica conforme novas pesquisas</span>
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* Transparência e Conflitos */}
                <Card className="mb-8 bg-white border-4 border-pink-500">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-pink-500 border-2 border-black flex items-center justify-center">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <CardTitle className="text-2xl sm:text-3xl">Transparência e Conflitos de Interesse</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-pink-100 border-2 border-pink-500 p-4">
                            <h4 className="font-black text-black uppercase mb-2">💰 Monetização</h4>
                            <p className="text-black font-bold text-sm leading-relaxed">
                                O Suplementa Já é mantido através de <strong>links de afiliados</strong> (Amazon Associates) e
                                <strong> anúncios</strong> (Google AdSense). Isso significa que podemos receber uma comissão
                                quando você compra produtos através dos nossos links, sem custo adicional para você.
                            </p>
                        </div>

                        <div className="bg-pink-100 border-2 border-pink-500 p-4">
                            <h4 className="font-black text-black uppercase mb-2">🎯 Independência Editorial</h4>
                            <p className="text-black font-bold text-sm leading-relaxed">
                                Nossa monetização <strong>NÃO influencia</strong> nossas recomendações. As sugestões são baseadas
                                exclusivamente em evidências científicas, não em acordos comerciais. Recomendamos produtos que
                                consideramos úteis, independentemente de termos links de afiliados para eles.
                            </p>
                        </div>

                        <div className="bg-pink-100 border-2 border-pink-500 p-4">
                            <h4 className="font-black text-black uppercase mb-2">⚠️ Limitações</h4>
                            <p className="text-black font-bold text-sm leading-relaxed">
                                Nossas informações são <strong>educacionais</strong> e NÃO substituem aconselhamento médico
                                profissional. Sempre consulte um profissional de saúde antes de iniciar qualquer suplementação.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* CTA */}
                <div className="bg-cyan-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] p-6 sm:p-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-black text-black uppercase mb-4">
                        Dúvidas ou Sugestões?
                    </h2>
                    <p className="text-black font-bold mb-6">
                        Se encontrou algum erro ou tem sugestões para melhorar nosso conteúdo, entre em contato conosco.
                    </p>
                    <Link href="/sobre" className="inline-block w-full sm:w-auto">
                        <Button size="lg" variant="primary" className="w-full sm:w-auto">
                            Conheça Nossa Equipe
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>

                {/* Footer Links */}
                <div className="mt-8 text-center">
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/sobre" className="text-black font-bold hover:underline">
                            Sobre Nós
                        </Link>
                        <span className="text-gray-400">•</span>
                        <Link href="/privacidade" className="text-black font-bold hover:underline">
                            Política de Privacidade
                        </Link>
                        <span className="text-gray-400">•</span>
                        <Link href="/termos" className="text-black font-bold hover:underline">
                            Termos de Uso
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
