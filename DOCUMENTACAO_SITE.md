# Suplementa Já - Documentação Completa do Site

**URL:** suplementaja.com  
**Stack:** Next.js 14, TypeScript, Tailwind CSS, Vercel  
**Data:** 27/01/2026

---

## 1. FUNCIONALIDADES PRINCIPAIS

### 🧮 Calculadoras (6)
| Calculadora | URL | Descrição |
|-------------|-----|-----------|
| Calorias/TDEE | /calculadoras/calorias | Calcula gasto calórico diário (TMB + atividade) |
| Macronutrientes | /calculadoras/macros | Divide calorias em proteína, carbo e gordura |
| Proteína | /calculadoras/proteina | Calcula necessidade diária de proteína por peso |
| Creatina | /calculadoras/creatina | Dose ideal de creatina por peso corporal |
| IMC | /calculadoras/imc | Índice de Massa Corporal |
| Água | /calculadoras/agua | Hidratação diária recomendada |

### 📋 Avaliação de Suplementos
| Página | URL | Descrição |
|--------|-----|-----------|
| Questionário | /avaliacao | Quiz de 2 minutos com 15+ perguntas |
| Resultados | /resultados | Recomendações personalizadas de suplementos |

### 📚 Blog
| Página | URL | Descrição |
|--------|-----|-----------|
| Lista de Artigos | /blog | Todos os artigos organizados |
| Artigo Individual | /blog/[slug] | Artigo completo com CTAs |

### 🔬 Nutrientes
| Página | URL | Descrição |
|--------|-----|-----------|
| Lista de Nutrientes | /nutrientes | 40+ nutrientes catalogados |
| Nutriente Individual | /nutrientes/[slug] | Página completa com dosagens, evidências, produtos |

### 📄 Páginas Institucionais
| Página | URL |
|--------|-----|
| Home | / |
| Sobre | /sobre |
| FAQ | /faq |
| Política Editorial | /editorial |
| Termos de Uso | /termos |
| Privacidade | /privacidade |

---

## 2. ARTIGOS DO BLOG (38 artigos)

### Vitaminas (7 artigos)
1. `vitamina-d-deficiencia-brasileiros` - Vitamina D: Por Que 75% dos Brasileiros São Deficientes
2. `suplementos-imunidade` - 5 Suplementos Para Imunidade Que Realmente Funcionam
3. `suplementos-terceira-idade` - Suplementos Para Terceira Idade: Guia Completo
4. `suplementos-vegetarianos-veganos` - Suplementos Para Vegetarianos e Veganos
5. `suplementos-sono` - 7 Suplementos Para Melhorar o Sono
6. `suplementos-energia` - Os 8 Melhores Suplementos Para Energia
7. `vitaminas-cabelo-pele-unha` - Vitaminas Para Cabelo, Pele e Unhas

### Suplementos (10 artigos)
1. `guia-completo-creatina-2026` - Guia Completo de Creatina 2026
2. `creatina-fase-carga-necessaria` - Creatina: Fase de Carga é Realmente Necessária?
3. `creatina-retencao-liquido` - Creatina Causa Retenção de Líquido?
4. `creatina-quem-nao-deve-tomar` - Quem NÃO Deve Tomar Creatina
5. `whey-isolado-vs-concentrado` - Whey Isolado vs Concentrado 2026
6. `whey-antes-ou-depois-treino` - Whey: Antes ou Depois do Treino?
7. `whey-com-leite-ou-agua` - Whey com Leite ou Água?
8. `whey-engorda-ou-emagrece` - Whey Engorda ou Emagrece?
9. `suplementos-iniciantes` - Suplementos Para Iniciantes 2026
10. `pre-treino-funciona` - Pré-Treino Funciona?

### Nutrição (15 artigos)
1. `proteina-por-kg` - Quanta Proteína Por Kg de Peso?
2. `jejum-intermitente-guia` - Jejum Intermitente: Guia Completo
3. `dieta-cutting` - Dieta Cutting: Como Fazer
4. `dieta-bulking` - Dieta Bulking: Como Fazer
5. `tdee-o-que-e-como-calcular` - TDEE: O Que É e Como Calcular
6. `deficit-calorico-guia-completo` - Déficit Calórico: Guia Completo
7. `neat-fator-oculto-emagrecimento` - NEAT: O Fator Oculto do Emagrecimento
8. `plateau-dieta-como-quebrar` - Plateau na Dieta: Como Quebrar
9. `cutting-guia-completo` - Cutting: Guia Completo
10. `bulking-guia-inteligente` - Bulking Inteligente: Guia Completo
11. `dieta-reversa-guia` - Dieta Reversa: Guia Completo
12. `refeed-day-o-que-e` - Refeed Day: O Que É
13. `erros-contagem-calorias` - 10 Erros na Contagem de Calorias
14. `calorias-manutencao-como-encontrar` - Como Encontrar Suas Calorias de Manutenção
15. `macros-para-definicao-muscular` - Macros Para Definição Muscular
16. `macros-para-ganho-massa` - Macros Para Ganho de Massa

### Saúde (3 artigos)
1. `colesterol-suplementos` - Suplementos Para Colesterol
2. `ansiedade-suplementos` - Suplementos Para Ansiedade
3. `inflamacao-cronica-suplementos` - Suplementos Para Inflamação Crônica

### Iniciantes (1 artigo)
1. `o-que-comprar-primeiro` - O Que Comprar Primeiro?

### Treinamento (2 artigos)
1. `recuperacao-muscular` - Suplementos Para Recuperação Muscular
2. `suplementos-crossfit` - Melhores Suplementos Para CrossFit

---

## 3. INTEGRAÇÕES & MONETIZAÇÃO

### AdSense
- ✅ Aprovado e configurado
- Slots posicionados em: header, sidebar, dentro de artigos, calculadoras

### Amazon Afiliados
- **Tag:** `105c91-20`
- **Formato:** `https://www.amazon.com.br/dp/CODIGO?tag=105c91-20`
- Links presentes em: páginas de nutrientes, artigos selecionados, resultados de avaliação

### Analytics
- Google Analytics 4
- Facebook Pixel
- Eventos customizados (lead capture, affiliate clicks, quiz completion)

---

## 4. LEAD MAGNETS

| Nome | Formato | Download |
|------|---------|----------|
| Top 10 Suplementos 2026 | PDF | /downloads/top-10-suplementos-2025.pdf |
| Guia de Creatina | PDF | Incluso no artigo |

---

## 5. ESTRUTURA TÉCNICA

### Páginas Dinâmicas
- `/blog/[slug]` - 38 artigos
- `/nutrientes/[slug]` - 40+ nutrientes
- `/calculadoras/*` - 6 calculadoras

### APIs
- `/api/newsletter` - Captura de leads
- `/api/sitemap` - Geração dinâmica de sitemap

### SEO Implementado
- ✅ Meta tags dinâmicas
- ✅ Open Graph
- ✅ FAQ Schema (calculadora de calorias)
- ✅ Sitemap.xml
- ✅ Robots.txt

---

## 6. RESUMO NUMÉRICO

| Métrica | Quantidade |
|---------|------------|
| Páginas totais | 100+ |
| Artigos de blog | 38 |
| Calculadoras | 6 |
| Nutrientes catalogados | 40+ |
| Lead magnets | 2 |

---

*Documento gerado em 27/01/2026 para análise interna.*
