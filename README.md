# 🌟 Suplementa Já - Plataforma de Suplementação Personalizada

Aplicação web completa que fornece recomendações personalizadas de suplementação vitamínica e mineral baseadas em perfil individual do usuário, com fundamentação científica completa.

## 📋 Sobre o Projeto

**Suplementa Já** é uma plataforma educativa que ajuda pessoas a entenderem suas necessidades de suplementação através de:

- ✅ Questionário personalizado (6 etapas com validação)
- ✅ Algoritmo de recomendações baseado em evidências científicas
- ✅ Base de dados com **40 nutrientes completos**
- ✅ **30 artigos científicos** sobre suplementação
- ✅ Geração de PDF com recomendações personalizadas
- ✅ Referências científicas completas (DOI/PMID)
- ✅ Design neobrutalism responsivo e moderno
- ✅ Google Analytics integrado

## 💻 Stack Tecnológico

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS 3.x + Design Neobrutalism
- **Validação:** Zod + React Hook Form
- **PDF:** jsPDF
- **Storage:** LocalStorage (Supabase opcional)
- **Analytics:** Google Analytics (GA4) + Google AdSense
- **Monetização:** Amazon Associates
- **Deployment:** Vercel

## 🚀 Como Rodar o Projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Google Analytics (Obrigatório para tracking)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Base URL (Obrigatório para sitemap e compartilhamento)
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Google AdSense (Obrigatório para monetização via anúncios)
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX

# Amazon Affiliate Tag (Obrigatório para links de afiliados funcionarem)
NEXT_PUBLIC_AMAZON_TAG=your-amazon-tag-20

# Supabase (OPCIONAL - sistema funciona com localStorage)
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url-here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key-here
```

### 3. Rodar em desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## ✅ Status de Implementação

### ✅ 100% Completo - Pronto para Produção

**Aplicação:**
- [x] Setup Next.js 14 + TypeScript + Tailwind
- [x] Design system Neobrutalism completo
- [x] Tipos TypeScript strict mode
- [x] Questionário completo (6 passos com validação Zod)
- [x] Algoritmo de recomendações funcionando
- [x] Geração de PDF personalizado
- [x] Sistema de localStorage para persistência

**Conteúdo:**
- [x] **40 nutrientes completos** com dados científicos
- [x] **30 artigos de blog** SEO-otimizados
- [x] 10 multivitamínicos recomendados
- [x] Evidências científicas com DOI/PMID

**Páginas:**
- [x] Homepage com hero e features
- [x] Página de resultados personalizados
- [x] 40 páginas dinâmicas de nutrientes
- [x] 30 páginas dinâmicas de artigos
- [x] Páginas legais (Sobre, Termos, Privacidade, FAQ)

**SEO & Analytics:**
- [x] Google Analytics (GA4) configurado
- [x] Sitemap dinâmico (91 URLs)
- [x] robots.txt configurado
- [x] Schema.org markup (Organization, WebSite, Article)
- [x] Open Graph tags básicos

**Monetização:**
- [x] Google AdSense integrado
- [x] Amazon Associates links nos produtos
- [x] ads.txt configurado

### 🔧 Próximos Passos (Pós-Lançamento)

- [ ] Aguardar aprovação Google AdSense (1-7 dias)
- [ ] Monitorar Analytics e ajustar baseado em dados
- [ ] Adicionar mais nutrientes (expandir para 50+)
- [ ] Implementar testes automatizados
- [ ] Integração opcional com Supabase para cloud storage

## 📁 Estrutura do Projeto

```
suplementaj-/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Homepage
│   ├── avaliacao/           # Questionário (6 passos)
│   ├── resultados/local/    # Página de resultados
│   ├── nutrientes/          # Lista + [slug] dinâmico (40 páginas)
│   ├── blog/                # Lista + [slug] dinâmico (30 páginas)
│   ├── sobre/               # Página Sobre
│   ├── termos/              # Termos de Uso
│   ├── privacidade/         # Política de Privacidade
│   ├── faq/                 # FAQ
│   ├── sitemap.ts           # Sitemap dinâmico
│   └── api/subscribe/       # API de newsletter
├── components/
│   ├── ui/                  # Button, Input, Select, Badge, Card, Alert, etc
│   ├── layout/              # Header, Footer, DisclaimerBanner, AdUnit
│   ├── resultados/          # CardNutriente, BadgePrioridade, etc
│   ├── analytics/           # GoogleAnalytics, GoogleAdSense
│   ├── marketing/           # EmailCapture, SocialShare
│   └── ads/                 # DisplayAd, RewardedAdModal
├── lib/
│   ├── recomendacoes.ts     # Algoritmo de recomendações
│   ├── pdf.ts               # Geração de PDF
│   ├── analytics.ts         # Funções de tracking
│   ├── supabase.ts          # Cliente Supabase (opcional)
│   └── utils.ts             # Utilitários
├── types/                    # Tipos TypeScript
├── data/
│   ├── nutrientes.json       # 40 nutrientes completos
│   ├── artigos.json          # 30 artigos de blog
│   └── multivitaminicos.json # 10 multivitamínicos
└── public/
    ├── robots.txt
    └── ads.txt
```

## 🗄️ Nutrientes Incluídos

**40 nutrientes completos** com dados científicos, dosagens, contraindicações e evidências:

**Vitaminas:**
1. Vitamina A
2. Vitamina B1 (Tiamina)
3. Vitamina B2 (Riboflavina)
4. Vitamina B3 (Niacina)
5. Vitamina B5 (Ácido Pantotênico)
6. Vitamina B6 (Piridoxina)
7. Vitamina B7 (Biotina)
8. Vitamina B12 (Cobalamina)
9. Vitamina C
10. Vitamina D
11. Vitamina E
12. Vitamina K2
13. Ácido Fólico (B9)

**Minerais:**
14. Cálcio
15. Cobre
16. Cromo
17. Ferro
18. Fósforo
19. Iodo
20. Magnésio
21. Manganês
22. Molibdênio
23. Potássio
24. Selênio
25. Zinco

**Outros Suplementos:**
26. Astaxantina
27. Coenzima Q10
28. Colágeno
29. Creatina
30. Glucosamina
31. Glutamina
32. L-Carnitina
33. Luteína e Zeaxantina
34. MSM
35. NAC (N-Acetilcisteína)
36. Ômega-3
37. Probióticos
38. Quercetina
39. Resveratrol
40. Taurina

## 🚀 Deploy em Produção

### Build

```bash
npm run build
```

Build gera **91 páginas estáticas**:
- 1 homepage
- 10 páginas estáticas (avaliação, resultados, sobre, etc)
- 40 páginas de nutrientes
- 30 páginas de artigos
- sitemap.xml dinâmico

### Deploy na Vercel

1. Push para GitHub
2. Conecte o repositório na Vercel
3. Configure as variáveis de ambiente no painel
4. Deploy automático! 🎉

**URL atual:** https://suplementaja.vercel.app

## 📊 Estatísticas do Projeto

- **Linhas de código:** ~15.000+
- **Componentes:** 40+
- **Páginas geradas:** 91
- **Tamanho do bundle:** ~87 KB (shared)
- **Build time:** ~30 segundos
- **Performance:** SSG (Static Site Generation)

## 📝 Checklist Pré-Lançamento

✅ Aplicação completa e funcional
✅ 40 nutrientes + 30 artigos
✅ Google Analytics configurado
✅ SEO completo (sitemap, robots.txt, schema.org)
✅ Páginas legais (LGPD compliant)
⚠️ Configurar Amazon Affiliate Tag
⚠️ Aguardar aprovação Google AdSense
⚠️ Testes manuais completos

## ⚠️ Disclaimer

**IMPORTANTE**: Plataforma EDUCATIVA. Não substitui consulta médica profissional.

---

**Desenvolvido com ❤️ para ajudar pessoas a cuidarem melhor da sua saúde.**
