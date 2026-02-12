# Fase 0 — Análise de Canibalização de Conteúdo

**Data:** 27/01/2026  
**Prioridade:** ALTA  
**Objetivo:** Evitar competição interna por keywords

---

## 🚨 CANIBALIZAÇÕES IDENTIFICADAS

### 1. CREATINA (3 artigos competindo)

| Artigo | Intenção Principal |
|--------|---------------------|
| `guia-completo-creatina-2026` | "creatina guia", "creatina 2026" |
| `creatina-guia-completo-ganho-muscular` | "creatina guia", "creatina ganho muscular" |

**❌ PROBLEMA:** Dois guias "completos" competindo pela mesma keyword.

**✅ SOLUÇÃO:**
- **MANTER** → `guia-completo-creatina-2026` (URL canônica)
- **REDIRECT 301** → `creatina-guia-completo-ganho-muscular` → `guia-completo-creatina-2026`
- Mesclar o conteúdo único no artigo principal

---

### 2. CUTTING (2 artigos competindo)

| Artigo | Intenção Principal |
|--------|---------------------|
| `cutting-modelo-calorias-macros` | "cutting", "dieta cutting" |
| `dieta-cutting` (se existir) | "cutting", "dieta cutting" |

**✅ SOLUÇÃO:**
- **MANTER** → `cutting-modelo-calorias-macros` como guia pilar
- Verificar se existe `dieta-cutting` duplicado

---

### 3. BULKING (2 artigos competindo)

| Artigo | Intenção Principal |
|--------|---------------------|
| `bulking-calorias-superavit` | "bulking", "dieta bulking" |
| `bulking-guia-inteligente` (se existir) | "bulking guia" |

**✅ SOLUÇÃO:**
- **MANTER** → 1 URL canônica para "bulking"
- Os outros viram satélites específicos ou redirect

---

### 4. DÉFICIT CALÓRICO (possível sobreposição)

| Artigo | Intenção Principal |
|--------|---------------------|
| `deficit-calorico-quanto-cortar` | "déficit calórico", "quanto cortar calorias" |
| `deficit-calorico-guia-completo` (novos artigos) | "déficit calórico" |

**✅ SOLUÇÃO:**
- Verificar se os dois existem
- Se sim, consolidar em 1 URL

---

### 5. MACROS (2 artigos OK - são específicos)

| Artigo | Intenção Principal |
|--------|---------------------|
| `macros-para-definicao-muscular` | "macros cutting", "macros definição" |
| `macros-para-ganho-massa` | "macros bulking", "macros ganho massa" |

**✅ STATUS:** OK - São intenções diferentes (cutting vs bulking)

---

### 6. WHEY (4 artigos OK - são específicos)

| Artigo | Intenção Principal |
|--------|---------------------|
| `whey-isolado-vs-concentrado` | "whey isolado ou concentrado" |
| `whey-antes-ou-depois-treino` | "whey antes ou depois treino" |
| `whey-com-leite-ou-agua` | "whey leite ou água" |
| `whey-engorda-ou-emagrece` | "whey engorda" |

**✅ STATUS:** OK - Cada artigo responde uma pergunta específica diferente

---

### 7. TDEE / CALORIAS (possível sobreposição)

| Artigo | Intenção Principal |
|--------|---------------------|
| `o-que-e-tdee-como-calcular` | "tdee o que é", "como calcular tdee" |
| `tdee-o-que-e-como-calcular` | (pode ser duplicado) |

**✅ SOLUÇÃO:** Verificar se são o mesmo ou diferentes

---

## 📋 AÇÕES PRIORITÁRIAS

### IMEDIATO (antes de publicar mais):

1. **CONSOLIDAR CREATINA**
   - Redirect `creatina-guia-completo-ganho-muscular` → `guia-completo-creatina-2026`

2. **VERIFICAR DUPLICADOS**
   - Checar se existem 2 artigos de cutting
   - Checar se existem 2 artigos de bulking
   - Checar se existem 2 artigos de déficit

3. **DEFINIR PILARES**
   - Creatina: 1 guia principal + 3 satélites (fase carga, retenção, contraindicações) ✅
   - Whey: 1 guia principal + 4 satélites (timing, leite/água, engorda, isolado/concentrado) ✅
   - Calorias: 1 calculadora pilar + 10 satélites ✅

---

## 🔍 COMO MONITORAR (pós-lançamento)

1. **Search Console → Desempenho → Consultas**
   - Filtrar por query
   - Ver se 2+ páginas aparecem para a mesma query
   - Se sim = canibalização

2. **Ferramenta gratuita:**
   - Screaming Frog SEO Spider (até 500 URLs grátis)
   - Ahrefs Webmaster Tools

---

## ✅ STATUS DO CONTEÚDO ATUAL

| Categoria | Total | Canibalizando? |
|-----------|-------|----------------|
| Creatina | 4 | ⚠️ 2 guias "completos" |
| Whey | 5 | ✅ OK (específicos) |
| Calorias | 10 | ✅ OK (satélites) |
| Macros | 2 | ✅ OK (cutting vs bulking) |
| Vitaminas | 7 | ✅ OK |

---

*Documento gerado para revisão antes de publicar mais conteúdo.*
