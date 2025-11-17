# 🌟 VitaGuia - Plataforma de Suplementação Personalizada

Aplicação web completa que fornece recomendações personalizadas de suplementação vitamínica e mineral baseadas em perfil individual do usuário, com fundamentação científica completa.

## 📋 Sobre o Projeto

**VitaGuia** é uma plataforma educativa que ajuda pessoas a entenderem suas necessidades de suplementação através de:

- ✅ Questionário personalizado (6 etapas)
- ✅ Algoritmo de recomendações baseado em evidências científicas
- ✅ Base de dados com 15 nutrientes completos
- ✅ Referências científicas clicáveis
- ✅ Design responsivo e acessível

## 💻 Stack Tecnológico

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS 3.x
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel

## 🚀 Como Rodar o Projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Preencha o arquivo `.env.local` com suas credenciais:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url-here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key-here

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google AdSense
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX

# Amazon Affiliate Tag
NEXT_PUBLIC_AMAZON_TAG=your-amazon-tag-20
```

### 3. Rodar em desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## ✅ Status de Implementação

### ✅ Completado

- [x] Setup Next.js 14 + TypeScript + Tailwind
- [x] Design system customizado (Tailwind config)
- [x] Tipos TypeScript completos (/types)
- [x] Base de dados com 15 nutrientes (/data/nutrientes.json)
- [x] Componentes UI base (Button, Input, Select, Badge, Card, Alert, Checkbox)
- [x] Componentes de layout (Header, Footer, DisclaimerBanner, AdUnit)
- [x] Algoritmo completo de recomendações (lib/recomendacoes.ts)
- [x] Cliente Supabase (lib/supabase.ts)

### 🚧 Pendente (próximos passos)

- [ ] AvaliacaoContext (React Context para questionário)
- [ ] Questionário completo (6 passos com validação Zod)
- [ ] Componentes de resultados (CardNutriente, BadgePrioridade, etc)
- [ ] Página de resultados dinâmica
- [ ] Páginas de nutrientes individuais
- [ ] API Routes (POST /api/avaliacoes, GET /api/recomendacoes)
- [ ] Páginas legais (Termos, Privacidade, Sobre)
- [ ] Homepage
- [ ] Blog (artigos SEO)

## 📁 Estrutura do Projeto

```
vitaguia/
├── app/                   # Next.js App Router
├── components/
│   ├── ui/               # Button, Input, Select, Badge, Card, etc
│   └── layout/           # Header, Footer, DisclaimerBanner, AdUnit
├── lib/
│   ├── supabase.ts       # Cliente Supabase
│   ├── recomendacoes.ts  # Algoritmo de recomendações
│   └── utils.ts          # Utilit áris
├── types/                 # Tipos TypeScript
├── data/
│   └── nutrientes.json    # 15 nutrientes completos
└── public/
```

## 🗄️ Nutrientes Incluídos

Os 15 nutrientes com dados completos:

1. Vitamina B12
2. Vitamina D
3. Cálcio
4. Magnésio
5. Ferro
6. Ômega-3
7. Vitamina C
8. Vitamina E
9. Zinco
10. Ácido Fólico
11. Vitamina B6
12. Vitamina K2
13. Iodo
14. Selênio
15. Vitamina A

## ⚠️ Disclaimer

**IMPORTANTE**: Plataforma EDUCATIVA. Não substitui consulta médica profissional.

---

**Desenvolvido com ❤️ para ajudar pessoas a cuidarem melhor da sua saúde.**
