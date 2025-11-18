# 🎯 RECOMENDAÇÕES DETALHADAS - SUPLEMENTA JÁ

## PRIORIDADE 1: EXECUTAR NOS PRÓXIMOS 7 DIAS

### 1.1 CRIAR PÁGINAS LEGAIS (4-6 HORAS)

#### A) `/app/sobre/page.tsx`
```typescript
// Deve incluir:
- Logo + Tagline
- "Missão" - Ajudar pessoas a entender suplementação
- "Visão" - Ser referência em recomendações baseadas em ciência
- "Como funciona" - Resumo do algoritmo
- "Dados" - 40 nutrientes, 100+ referências científicas
- "Time" - Quem criou (pode ser anônimo ou fictício)
- "Disclaimer" - Não é substituto de médico
```

**Exemplo de estrutura:**
```markdown
# Sobre Suplementa Já

## Nossa Missão
Democratizar recomendações de suplementação baseadas em evidências científicas.

## Como Funciona?
Algoritmo analisa 40+ fatores sobre você e recomenda suplementos personalizados.

## Dados
- 40 nutrientes com dados completos
- 100+ referências científicas
- Atualizado regularmente

## Time
Desenvolvido por [seu nome/anônimo] apaixonado por saúde e tecnologia.

## Disclaimer
⚠️ Informações educativas. Consulte um médico antes de iniciar qualquer suplementação.
```

#### B) `/app/privacidade/page.tsx`
```typescript
// LGPD Compliance - Deve incluir:
- Como coletamos dados (localStorage, comportamento de clique)
- O que coletamos (respostas do questionário, navegação)
- Como protegemos (HTTPS, sem server-side storage por padrão)
- Cookies (apenas rastreamento com consentimento)
- Seus direitos (LGPD art. 17-18)
- Contato para questões de privacidade
- Retenção de dados (7 dias no localStorage)
```

**Exemplo:
```markdown
# Política de Privacidade

## Dados Coletados
- Respostas do questionário (idade, dieta, condições)
- Comportamento (cliques, tempo na página via Google Analytics)
- Dispositivo (IP anônimizado via GA)

## Como Armazenamos
- Localmente no seu navegador (localStorage)
- Não enviamos para servidor por padrão
- Google Analytics armazena no Google

## Seus Direitos (LGPD)
- Direito de acesso
- Direito de exclusão
- Direito de correção
- Contato: privacidade@suplementaja.com

## Cookies
Usamos:
- Google Analytics (análise de uso)
- Google AdSense (publicidade)
- Seu consentimento é solicitado
```

#### C) `/app/termos/page.tsx`
```typescript
// Deve incluir:
- Aceitação dos termos
- Responsabilidade (educativo apenas)
- Uso aceitável (sem spam, bots)
- Propriedade intelectual
- Limitações (sem guarantee)
- Indenizações
- Links afiliados (disclosure)
```

**Exemplo:**
```markdown
# Termos de Uso

## 1. Aceitação
Ao usar este site, você aceita estes termos.

## 2. Uso Apropriado
- Não é consulta médica
- Não substitui diagnóstico profissional
- Use apenas para informação pessoal
- Não venda ou distribua recomendações

## 3. Responsabilidade
Fornecemos informações "como estão" sem garantias. Não somos responsáveis por:
- Decisões médicas baseadas neste site
- Reações adversas a suplementos
- Perdas por uso inadequado

## 4. Links Afiliados
Podemos ganhar comissão via Amazon Associates. Isso não afeta o preço para você.

## 5. Limitações
- Máximo 5 avaliações por dia por IP (prevenção de abuso)
- Sem scrapy ou bots
- Sem revenda de dados

## 6. Indenização
Você concorda em indenizar-nos contra reclamações por violação destes termos.

## 7. Lei
Estes termos são regidos pelas leis brasileiras.
```

#### D) `/app/faq/page.tsx` (Opcional, mas recomendado)
```markdown
# Perguntas Frequentes

## Sobre Suplementos
**P: Os suplementos são seguros?**
R: Geralmente sim, mas sempre consulte um médico. Podem interagir com medicamentos.

**P: Quanto tempo até sentir efeitos?**
R: Varia de semanas a meses dependendo do nutriente e condição.

**P: Posso tomar vários ao mesmo tempo?**
R: Sim, mas há interações possíveis. O algoritmo já avalia isso.

## Sobre o Site
**P: Vocês vendem suplementos?**
R: Não. Recomendamos via links afiliados da Amazon.

**P: Meus dados são seguros?**
R: Sim. Ficam apenas no seu navegador a menos que você compartilhe.

**P: Como funciona o algoritmo?**
R: Analisa 40+ fatores (dieta, condições, medicamentos) e recomenda baseado em evidências.

## Sobre Recomendações
**P: Por que não é recomendado ferro para mim?**
R: Mulheres pós-menopausa não precisam (risco de sobrecarga de ferro).

**P: Posso discordar da recomendação?**
R: Sim! Converse com seu médico. Este site é educativo, não prescritivo.
```

---

### 1.2 CONFIGURAR GOOGLE ANALYTICS (1-2 HORAS)

#### Passo 1: Criar Propriedade GA4
1. Ir para `analytics.google.com`
2. Clique "Começar"
3. Preencha:
   - Nome da conta: "Suplementa Já"
   - Nome da propriedade: "suplementaj.vercel.app"
   - Timezone: "São Paulo" (UTC-3)
4. Copie o **Measurement ID** (ex: G-XXXXXXXXXX)

#### Passo 2: Atualizar `.env.local`
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

#### Passo 3: Instalar no `app/layout.tsx`
```typescript
import { useEffect } from 'react'
import Script from 'next/script'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
```

#### Passo 4: Adicionar Eventos Customizados
```typescript
// Em /lib/analytics.ts
export function rastrearEvento(nome: string, dados?: any) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', nome, dados)
  }
}

// Usar em passo-1:
const handleAvaliacao = () => {
  rastrearEvento('avaliacao_iniciada', {
    passo: 1,
    timestamp: new Date().toISOString()
  })
}

// Em passo-6:
const handleSubmit = () => {
  rastrearEvento('avaliacao_completada', {
    idade: perfil.idade,
    dieta: perfil.dieta,
    condicoes: perfil.condicoes_saude?.length || 0
  })
}

// Em /nutrientes/[slug]:
const handleVisitaNutriente = (slug: string) => {
  rastrearEvento('nutriente_visualizado', {
    nutriente: slug
  })
}
```

**Eventos a Rastrear:**
- `avaliacao_iniciada` - Quando clica em "Fazer Avaliação"
- `avaliacao_completada` - Quando gera recomendações
- `nutriente_visualizado` - Cada nutriente clicado
- `link_afiliado_clicado` - Clique em produto Amazon
- `pdf_download` - Download dos resultados

---

### 1.3 PREPARAR AMAZON ASSOCIATES (2-3 HORAS)

#### Passo 1: Criar Conta
1. Ir para `associates.amazon.com.br`
2. Registre-se com CPF/CNPJ
3. Preencha informações de website:
   - Site: `https://suplementaj.vercel.app`
   - Tipo: "Blog sobre saúde/nutrição"
   - Como planeja gerar tráfego: "Recomendações de suplementos"
4. Aguarde aprovação (1-2 dias)

#### Passo 2: Gerar Links Afiliados
Para cada nutriente, procure produtos reais:

**Exemplo para Vitamina B12:**
1. Procure "Vitamina B12 cápsula 1000mcg" na Amazon
2. Copie o link
3. Use o tool Amazon Associates para adicionar seu tag

**Seu tag:** `seuusername-20` (você recebe no email)

#### Passo 3: Atualizar `/data/nutrientes.json`
```json
{
  "vitamina-b12": {
    // ... dados existentes
    "amazon_url": "https://www.amazon.com.br/s?k=vitamina+b12&i=hpc&__mk_pt_BR=AAAAAAA&crid=1F5K7Q9Z5XZ7F&sprefix=vitamina+b12&sr=1-1&tag=seuusername-20",
    "produtos_recomendados": [
      {
        "nome": "Nature Made Vitamin B12 1000mcg",
        "preco_aprox": "R$ 89,90",
        "link": "https://amazon.com.br/...?tag=seuusername-20"
      }
    ]
  }
}
```

#### Passo 4: Atualizar `.env.local`
```env
NEXT_PUBLIC_AMAZON_TAG=seuusername-20
```

#### Passo 5: Usar em Componentes
```typescript
// Em components/resultados/CardNutriente.tsx
import { addAmazonAffiliateTag } from '@/lib/affiliate'

const amazonUrl = addAmazonAffiliateTag(
  nutriente_completo.amazon_url,
  process.env.NEXT_PUBLIC_AMAZON_TAG || ''
)

// Já implementado em lib/affiliate.ts
```

---

### 1.4 CONFIGURAR SITEMAP & ROBOTS.TXT (1 HORA)

#### A) `/public/robots.txt`
```
User-agent: *
Allow: /
Disallow: /api/*
Disallow: /resultados/*

Sitemap: https://suplementaj.vercel.app/sitemap.xml
```

#### B) Next.js Auto-gera Sitemap (Verificar)
Em `app/layout.tsx` ou `next.config.mjs`:
```typescript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 14 auto-gera sitemap
  // Verificar em https://suplementaj.vercel.app/sitemap.xml
};

export default nextConfig;
```

#### C) Meta Tags (SEO)
Adicionar em cada página importante:
```typescript
// app/nutrientes/[slug]/page.tsx
export async function generateMetadata({ params }: PageProps) {
  const nutriente = nutrientes[params.slug]
  
  return {
    title: `${nutriente.nome} - Suplementa Já`,
    description: nutriente.descricao_curta,
    keywords: [nutriente.nome, 'suplemento', 'vitamina', 'mineral'],
    openGraph: {
      title: `${nutriente.nome} - Recomendações Personalizadas`,
      description: nutriente.descricao_curta,
      type: 'article',
      url: `https://suplementaj.vercel.app/nutrientes/${params.slug}`,
    },
  }
}
```

---

## PRIORIDADE 2: DEPOIS DE LANÇAR (1-2 SEMANAS)

### 2.1 CRIAR 5 ARTIGOS DE BLOG (8-10 HORAS)

**Tópicos com alto SEO:**

1. **"Vitamina D: Tudo que você precisa saber"**
   - Deficiência, sintomas, dosagem
   - Keywords: "vitamina d benefícios", "vitamina d deficiência"
   - Link interno: /nutrientes/vitamina-d

2. **"Vitamina B12 para vegetarianos e veganos"**
   - Por que deficiência é comum
   - Alimentos e suplementos
   - Keywords: "b12 vegano", "b12 vegetariano"

3. **"Sinais que você pode estar com deficiência de ferro"**
   - Fadiga, queda de cabelo, palidez
   - Quando suplementar
   - Keywords: "deficiência de ferro", "anemia"

4. **"Como escolher um bom suplemento"**
   - O que olhar em rótulos
   - Interações importantes
   - Keywords: "escolher suplemento", "suplemento de qualidade"

5. **"Menopausa: Suplementos que ajudam"**
   - Cálcio, Magnésio, Vitamina D, Isoflavona
   - Dosagens recomendadas
   - Keywords: "menopausa suplementos", "cálcio menopausa"

**Estrutura de artigo:**
```markdown
---
title: "Vitamina D: Tudo que você precisa saber"
date: "2025-11-18"
category: "vitaminas"
author: "Suplementa Já"
slug: "vitamina-d-tudo-que-precisa-saber"
---

# Vitamina D: Tudo que Você Precisa Saber

## Introdução
A vitamina D é...

## O que é Vitamina D?
...

## Deficiência: Sintomas e Sinais
...

## Dosagem Recomendada
...

## Alimentos Ricos em Vitamina D
...

## Quando Suplementar
...

## Links Úteis
- [Descubra seus nutrientes personalizados](/avaliacao)
- [Saiba mais sobre Vitamina D](/nutrientes/vitamina-d)
```

**Publicar em:**
1. `/app/blog/page.tsx` - Lista de artigos
2. `/app/blog/[slug]/page.tsx` - Artigo individual
3. `/data/artigos.json` - Dados

---

### 2.2 FEEDBACK FORM (2-3 HORAS)

Adicionar em `/app/feedback/page.tsx`:

```typescript
// Formulário simples
- Email (opcional)
- Classificação (1-5 stars)
- Comentário (textarea)
- Tipo: "Bug", "Feature Request", "Geral"
- Enviar para: seu email via SendGrid/Nodemailer

// Salvar também em Supabase se configurado
```

---

### 2.3 NEWSLETTER (2 HORAS)

Adicionar em Footer:
```typescript
<form onSubmit={handleNewsletter}>
  <input 
    type="email" 
    placeholder="seu@email.com"
    required
  />
  <button>Inscrever</button>
</form>

// Integrar com:
// - SendGrid / Mailchimp / Brevo
// - Guardar emails em Supabase
```

---

## PRIORIDADE 3: PÓS-LANÇAMENTO (ESCALABILIDADE)

### 3.1 SUPABASE & API ROUTES (8-10 HORAS)

```sql
-- Criar tabelas em Supabase

CREATE TABLE avaliacoes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  perfil JSONB NOT NULL,
  recomendacoes JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  ip_hash TEXT,
  user_agent TEXT
);

CREATE TABLE artigos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  titulo TEXT NOT NULL,
  conteudo TEXT NOT NULL,
  categoria TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_avaliacoes_created ON avaliacoes(created_at DESC);
CREATE INDEX idx_artigos_slug ON artigos(slug);
```

**API Routes:**
```typescript
// app/api/avaliacoes/route.ts - POST
// app/api/avaliacoes/[id]/route.ts - GET
// app/api/newsletter/route.ts - POST
// app/api/feedback/route.ts - POST
```

---

### 3.2 MELHORIAS DE UX (6-8 HORAS)

- [ ] Breadcrumbs em nutrientes
- [ ] Busca de nutrientes (search)
- [ ] Filtros por categoria
- [ ] Comparador 2-3 nutrientes
- [ ] "Voltar e editar" no questionário
- [ ] Animações suaves
- [ ] Loading skeletons

---

## CHECKLIST DE LANÇAMENTO (30 MIN ANTES)

```
[ ] npm run build - Sem erros
[ ] Variáveis de ambiente em Vercel:
    - NEXT_PUBLIC_GA_ID
    - NEXT_PUBLIC_ADSENSE_ID
    - NEXT_PUBLIC_AMAZON_TAG
[ ] Testar homepage em mobile
[ ] Testar flow completo:
    Passo 1 → Passo 2 → ... → Resultados → PDF
[ ] Testar links do footer (nenhum 404)
[ ] Testar links internos (nutrientes, etc)
[ ] Verificar disclaimers visíveis
[ ] Google Analytics carregando
[ ] Firebase/Supabase conectado (se using)
[ ] Domain apontando corretamente
[ ] SSL/HTTPS ativo
[ ] Meta tags aparecem ao compartilhar
[ ] OG image configurada
[ ] Robots.txt acessível
[ ] Sitemap.xml acessível
```

---

## MONITORAMENTO PÓS-LANÇAMENTO

**Primeira Semana:**
- Quantos usuários iniciaram avaliação
- Taxa de conclusão
- Nutrientes mais visualizados
- Tempo médio na página
- Bounce rate

**Primeira Mês:**
- Conversão de links afiliados
- Páginas mais acessadas
- Palavras-chave que trazem tráfego
- Feedback de usuários

**Usar dados para:**
- Melhorar UX onde tem drop-off
- Criar mais conteúdo sobre nutrientes populares
- Otimizar ads se Google AdSense aprovado

---

## ESTIMATIVAS FINAIS

| Tarefa | Horas | Prioridade |
|--------|-------|-----------|
| Páginas Legais | 4-6 | CRÍTICO |
| Google Analytics | 1-2 | CRÍTICO |
| Amazon Associates | 2-3 | CRÍTICO |
| Sitemap & Robots | 1 | CRÍTICO |
| **TOTAL PRÉ-LANÇAMENTO** | **8-12** | **CRÍTICO** |
| ↓ |  |  |
| Blog (5 artigos) | 8-10 | Importante |
| Feedback Form | 2-3 | Importante |
| Newsletter | 2 | Importante |
| Melhorias UX | 6-8 | Importante |
| **TOTAL PÓS-LANÇAMENTO** | **18-23** | **Importante** |
| ↓ |  |  |
| Supabase & API | 8-10 | Escalabilidade |
| Testes | 6-8 | Qualidade |
| Multi-idioma | 12-15 | Nice-to-have |
| **TOTAL ESCALABILIDADE** | **26-33** | **Nice-to-have** |

---

**Pode lançar em 5-7 dias se trabalhar 2-3h/dia nas tarefas críticas!**
