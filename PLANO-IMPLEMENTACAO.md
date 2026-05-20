# PLANO DE IMPLEMENTACAO - SUPLEMENTAJA.COM
# Gerado em: 20/05/2026 | Baseado em analise profunda do Search Console + Codebase

================================================================================
DIAGNOSTICO RESUMIDO
================================================================================

TRAFFICO: 44 cliques em 5 meses (~0.3/dia) | ~13K impressoes | CTR 0.16-0.61%
INDEXACAO: Colapso de 142 para ~31 paginas indexadas (-78%)
POSICAO MEDIA BR: 24.47 (pagina 3+ = invisivel)
ADSENSE: HorizontalAd SEM data-ad-slot = $0 RPM

O QUE JA FOI FEITO (parcialmente):
- SEO basico em 6 calculadoras (titles/descriptions bons)
- 44 nutrientes com keywords no JSON (mas titles fracos)
- AdSense integrado (5 slots, mas HorizontalAd quebrado)
- 27/44 nutrientes com afiliados Amazon
- Related content system (mas so 36/82 artigos mapeados)
- FAQ Schema: so 1 artigo + 1 calculadora
- BreadcrumbList + Article Schema em blog/nutrientes
- Exit intent + Email capture popups
- 25+ Pinterest pins criados

O QUE NAO FOI FEITO (gaps criticos):
1. 34 paginas 404 SEM redirect
2. 93 paginas "rastreadas mas nao indexadas"
3. Nutrientes com meta_title fraco ("Ferro", "Omega-3" = CTR zero)
4. 81/82 artigos SEM FAQ Schema
5. 82/82 artigos SEM campo "relacionados" preenchido
6. 5/6 calculadoras SEM FAQ Schema
7. HorizontalAd SEM data-ad-slot (dinheiro jogado fora)
8. 17 nutrientes SEM afiliados Amazon
9. 46/82 artigos NAO mapeados em related-content.ts
10. Canonical nao usa meta_title do JSON nos nutrientes

================================================================================
FASE 1 - EMERGENCIA (Hoje, impacto imediato)
================================================================================

1.1 CORRIGIR HorizontalAd SEM data-ad-slot
    - Arquivo: components/ads/DisplayAd.tsx
    - Adicionar slot "3400740255" ao HorizontalAd
    - Impacto: AdSense comeca a gerar receita

1.2 NUTRIENTE PAGE: Usar meta_title do JSON ao inves de "Nome (Cientifico)"
    - Arquivo: app/nutrientes/[slug]/page.tsx
    - Mudar title de `${nutriente.nome} (${nutriente.nome_cientifico})` para
      `${nutriente.seo?.meta_title || nutriente.nome}`
    - Impacto: CTR melhora em paginas de nutrientes

1.3 MELHORAR meta_title dos nutrientes com titles fracos
    - Arquivo: data/nutrientes.json
    - Ferro: "Ferro" -> "Ferro: Sintomas de Anemia, Dose e Melhor Suplemento"
    - Omega-3: "Omega-3" -> "Omega-3: Beneficios Comprovados, Dose e Como Escolher"
    - + outros com title generico

1.4 ADICIONAR FAQ Schema nas 5 calculadoras restantes
    - Arquivos: app/calculadoras/{imc,agua,macros,creatina,proteina}/page.tsx
    - 3-5 perguntas cada com FAQPage JSON-LD
    - Impacto: Rich snippets no Google = +5-15% CTR

1.5 ADICIONAR redirect 301 para as 34 paginas 404 mapeadas
    - Arquivo: next.config.mjs
    - Mapear cada 404 para pagina relevante mais proxima
    - Impacto: Google para de perder crawl budget

================================================================================
FASE 2 - SEO ON-PAGE (Semana 1, alto ROI)
================================================================================

2.1 OTIMIZAR meta titles das 20 paginas com mais impressoes
    - Baseado nos dados do Search Console
    - Usar formula: [Beneficio] + [Keyword] + [Gatilho]
    - Exemplos:
      * "Calculadora de Calorias" -> "Calculadora de Calorias: Quanto Comer para Secar ou Ganhar Massa | Grátis"
      * "Creatina: Para Que Serve" -> "Creatina Para Que Serve? 7 Benefícios Comprovados pela Ciência"
      * "Melhor Marca Creatina" -> "Melhor Creatina 2026: Ranking das 5 Marcas Testadas no Brasil"

2.2 ADICIONAR campo "relacionados" em TODOS os 82 artigos
    - Arquivo: data/artigos.json
    - 2-3 artigos relacionados por artigo
    - Impacto: +pageviews, +tempo no site, +link juice interno

2.3 COMPLETAR related-content.ts com 46 artigos faltantes
    - Arquivo: lib/related-content.ts
    - Mapear artigos restantes para nutrientes
    - Impacto: Melhor cross-linking entre conteudo

2.4 ADICIONAR HowTo Schema nas calculadoras
    - Passo a passo de como usar cada calculadora
    - Rich snippets com steps

2.5 MELHORAR meta_description dos nutrientes com descricoes fracas
    - "Guia sobre ferro" -> "Guia completo sobre ferro: sintomas de anemia, melhores fontes, dose diária e quando suplementar. Baseado em evidências."
    - 15+ nutrientes com desc generica

================================================================================
FASE 3 - CONTEUDO E CONVERSAO (Semana 2-3)
================================================================================

3.1 ADICIONAR FAQ nos 15 artigos com mais impressoes
    - 3-5 perguntas com FAQ Schema cada
    - Artigos prioritarios: creatina, whey, macros, calorias, deficit calorico
    - Impacto: Rich snippets + featured snippets

3.2 ADICIONAR afiliados Amazon nos 17 nutrientes sem afiliados
    - Cromo, Coenzima Q10, Taurina, MSM, Resveratrol, Quercetina, NAC,
      Astaxantina, Luteína/Zeaxantina, Molibdenio, Manganês, Cobre,
      Fósforo, Potássio, Vitamina K2, Iodo, Selênio

3.3 CRIAR paginas de "lista" para keywords de alto volume
    - "calculadora deficit calorico" (pagina dedicada)
    - "creatina com cafe pode" (conteudo expandido)
    - "whey protein engorda" (artigo dedicado)

3.4 OTIMIZAR CTA de conversao nas calculadoras
    - Adicionar "Resultado salvo" com opcao de email
    - Botao de compartilhar resultado
    - Link para avaliacao completa mais proeminente

3.5 IMPLEMENTAR breadcrumb visual em TODAS as paginas
    - Blog, Nutrientes, Calculadoras
    - Schema BreadcrumbList ja existe, falta o visual

================================================================================
FASE 4 - ADSENSE E MONETIZACAO (Semana 2-3)
================================================================================

4.1 CORRIGIR e OTIMIZAR todas as unidades de anuncio
    - HorizontalAd: adicionar slot (FASE 1.1)
    - Adicionar sticky ad no mobile (bottom anchor)
    - Adicionar sidebar ad nas paginas de nutrientes (desktop)
    - Usar InFeedAd na listagem do blog

4.2 CRIAR unidades AdSense dedicadas por tipo de pagina
    - Calculadoras: ad entre formulario e resultado
    - Blog: in-article no meio do conteudo (ja existe)
    - Nutrientes: rectangle ad na sidebar
    - Resultados: ad apos recomendacoes

4.3 IMPLEMENTAR AdSense Auto Ads como complemento
    - Ativar no painel do AdSense
    - Deixar Google otimizar posicoes extras

4.4 ADICIONAR data-ad-region para anchor ads no mobile
    - Melhora RPM no mobile (onde esta 61% do trafego)

================================================================================
FASE 5 - LINK BUILDING E AUTORIDADE (Mes 2+)
================================================================================

5.1 LINK BUILDING INTERNO (imediato)
    - Adicionar "Artigos Relacionados" no final de cada nutriente
    - Adicionar "Calculadoras Relacionadas" em cada artigo de blog
    - Adicionar "Nutrientes Relacionados" nas calculadoras
    - Cross-link entre clusters de conteudo

5.2 CLUSTER DE CONTEUDO
    - Cluster "Creatina": hub page + 8 artigos satelite
    - Cluster "Whey Protein": hub page + 5 artigos satelite
    - Cluster "Emagrecimento": hub page + 6 artigos satelite
    - Cluster "Calculadoras": hub page + 6 ferramentas

5.3 LINK BUILDING EXTERNO
    - Guest posts em blogs de saude/fitness
    - HARO (Help a Reporter Out) responses
    - Reddit/Quora answers com links
    - Parcerias com influenciadores

5.4 SOCIAL SIGNALS
    - Continuar Pinterest (ja tem 25+ pins)
    - Criar carrossels para Instagram/LinkedIn
    - Compartilhar calculadoras em grupos de fitness

================================================================================
PRIORIDADE DE EXECUCAO (ORDEM DE IMPACTO)
================================================================================

IMEDIATO (hoje):
  [1] Corrigir HorizontalAd sem slot
  [2] Corrigir meta_title dos nutrientes (usar JSON)
  [3] Adicionar FAQ Schema nas 5 calculadoras
  [4] Melhorar meta_titles dos nutrientes com title fraco
  [5] Adicionar redirects 301 para 404s conhecidos

ESTA SEMANA:
  [6] Otimizar meta titles das top 20 paginas
  [7] Adicionar campo "relacionados" nos artigos
  [8] Completar related-content.ts
  [9] Melhorar meta_description dos nutrientes

SEMANA 2:
  [10] Adicionar FAQ nos 15 artigos principais
  [11] Adicionar afiliados nos 17 nutrientes
  [12] Otimizar CTAs de conversao
  [13] Melhorar ad placement

MES 2+:
  [14] Cluster de conteudo
  [15] Link building externo
  [16] Social signals

================================================================================
METRICAS DE SUCESSO (3 meses)
================================================================================

Impressoes: 13K -> 100K/mes (8x)
Cliques: 44 -> 2000/mes (45x)
CTR: 0.3% -> 2%+
Posicao media BR: 24 -> 12
Paginas indexadas: 31 -> 180+
AdSense RPM: $0 -> $2-5/1000 impressoes
Receita afiliados: base atual -> 3x
