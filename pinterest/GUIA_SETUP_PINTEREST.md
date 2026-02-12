# 🚀 GUIA: CRIAR CONTA PINTEREST BUSINESS

## PASSO 1: Criar/Converter Conta (5 min)

### Se NÃO tem conta Pinterest:
1. Acesse: https://br.pinterest.com/business/create/
2. Clique **"Criar conta gratuita"**
3. Preencha:
   - **Email:** seu@email.com (use email profissional se possível)
   - **Senha:** (forte, 8+ caracteres)
   - **Data de nascimento:** (pra compliance)
   - **Nome da empresa:** Suplementaja
4. Clique **"Criar conta"**

### Se JÁ tem conta Pinterest pessoal:
1. Acesse: https://br.pinterest.com/settings/
2. No menu esquerdo: **"Conversão de conta"**
3. Clique **"Converter em conta comercial"**
4. Preencha:
   - **Nome da empresa:** Suplementaja
   - **Site:** https://suplementaja.com
   - **País:** Brasil
   - **Idioma:** Português (Brasil)
   - **Tipo de negócio:** Publicador / Criador de Conteúdo
5. Clique **"Concluir"**

---

## PASSO 2: Verificar Site (10 min)

### Opção A: Tag HTML (RECOMENDADO)

1. No Pinterest: Settings → Claim → **"Claim your website"**
2. Digite: `suplementaja.com`
3. Escolha: **"Add HTML tag"**
4. Copie o código (algo como):
   ```html
   <meta name="p:domain_verify" content="abc123xyz..."/>
   ```

5. **COLE NO SEU SITE:**
   - Abra: `/home/ubuntu/.openclaw/workspace/suplementaj-/app/layout.tsx`
   - Adicione na tag `<head>`:

```tsx
<head>
  {/* ... outros metas ... */}
  <meta name="p:domain_verify" content="CODIGO_QUE_VOCE_COPIOU"/>
</head>
```

6. **Commit e deploy:**
```bash
cd /home/ubuntu/.openclaw/workspace/suplementaj-
git add app/layout.tsx
git commit -m "feat: adiciona verificação Pinterest"
git push origin main
```

7. **Aguarde 2-3 minutos** (Vercel fazer deploy)

8. **Volte no Pinterest** → Clique **"Verificar"**

✅ **Sucesso:** Aparece checkmark verde ao lado de suplementaja.com

---

### Opção B: Upload de Arquivo (se HTML não funcionar)

1. Pinterest te dá um arquivo `pinterest-xxxxx.html`
2. Baixe o arquivo
3. Coloque em `/home/ubuntu/.openclaw/workspace/suplementaj-/public/`
4. Commit e push
5. Verifica se funciona: `https://suplementaja.com/pinterest-xxxxx.html`
6. Clique "Verificar" no Pinterest

---

## PASSO 3: Configurar Rich Pins (5 min)

Rich Pins = Pins com metadados extras (título, descrição, autor) que aparecem automaticamente.

### 3.1 Verificar se já tem Open Graph

Abra: `/home/ubuntu/.openclaw/workspace/suplementaj-/app/blog/[slug]/page.tsx`

Procure por tags `<meta property="og:...">`. Se JÁ TEM, pule pra 3.2.

Se NÃO TEM, adicione no `generateMetadata()`:

```tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artigo = artigosData.find((a) => a.slug === params.slug)
  
  if (!artigo) return { title: 'Artigo não encontrado' }

  return {
    title: artigo.titulo,
    description: artigo.descricao,
    openGraph: {
      title: artigo.titulo,
      description: artigo.descricao,
      url: `https://suplementaja.com/blog/${artigo.slug}`,
      siteName: 'Suplementa Já',
      images: [
        {
          url: artigo.imagem,
          width: 1200,
          height: 630,
        },
      ],
      type: 'article',
      publishedTime: artigo.data,
      authors: [artigo.autor],
    },
  }
}
```

### 3.2 Validar Rich Pins

1. Acesse: https://developers.pinterest.com/tools/url-debugger/
2. Cole URL de teste: `https://suplementaja.com/blog/monjaro-vs-ozempic-qual-emagrece-mais-comparacao`
3. Clique **"Validate"**
4. Deve aparecer: ✅ **"Rich Pins validated"**
5. Clique **"Apply Now"**

Aguarde ~24h pra Pinterest aprovar (geralmente instantâneo).

---

## PASSO 4: Criar Perfil Atrativo (5 min)

### 4.1 Foto de Perfil
- Upload logo Suplementaja (500x500px, PNG)
- Fundo: Transparente ou branco

### 4.2 Nome de Exibição
```
Suplementa Já | Suplementos e Saúde
```
(47 caracteres - usa keyword "suplementos")

### 4.3 Sobre
```
Guias completos sobre suplementos, vitaminas e emagrecimento saudável. 💊

✓ Calculadoras grátis (calorias, proteína, IMC)
✓ Reviews honestas (Monjaro, whey, creatina)
✓ Informação baseada em ciência

📍 Brasil | 🔗 suplementaja.com
```
(240 caracteres - limite 500)

### 4.4 Username
- Tente: `@suplementaja` (se disponível)
- Se não: `@suplementajaoficial` ou `@suplementajabrasil`

---

## PASSO 5: Criar 10 Boards Iniciais (15 min)

Vou listar os 10 boards sugeridos com descrições prontas:

### Board 1: Emagrecimento Saudável
**Nome:** Emagrecimento Saudável: Monjaro, Ozempic e Medicamentos

**Descrição:**
```
Guias completos sobre medicamentos emagrecedores: Monjaro (tirzepatida), Ozempic, Wegovy, Saxenda. Comparações honestas, preços, efeitos colaterais e resultados reais. Informação baseada em estudos científicos para perda de peso segura e sustentável. #monjaro #ozempic #emagrecimento #perdadepeso
```

**Capa:** Escolher depois (1º pin que criar)

---

### Board 2: Suplementos Esportivos
**Nome:** Suplementos Esportivos: Whey, Creatina, BCAA e Ganho de Massa

**Descrição:**
```
Tudo sobre suplementação esportiva: whey protein, creatina, BCAA, glutamina, albumina. Doses corretas, quando tomar, qual escolher, comparações e reviews honestas. Informação científica para ganho de massa muscular e performance. #whey #creatina #suplementos #hipertrofia
```

---

### Board 3: Vitaminas e Minerais
**Nome:** Vitaminas e Minerais: Guias Completos e Deficiências

**Descrição:**
```
Guias sobre vitaminas (D, B12, C, complexo B) e minerais (zinco, magnésio, ferro, cálcio). Sinais de deficiência, doses recomendadas, melhores marcas e quando suplementar. Informação baseada em estudos para saúde plena. #vitaminad #vitaminas #minerais #saude
```

---

### Board 4: Calculadoras de Saúde
**Nome:** Calculadoras de Saúde: Calorias, Proteína, IMC e Macros

**Descrição:**
```
Ferramentas gratuitas para calcular: gasto calórico (TMB/TDEE), proteína ideal, IMC, macronutrientes, água diária e dose de creatina. Calculadoras simples e científicas para planejar sua dieta e suplementação. #calculadoracalorias #dieta #macros #nutricao
```

---

### Board 5: Diabetes e Controle Glicêmico
**Nome:** Diabetes Tipo 2: Monjaro, Ozempic e Controle Glicêmico

**Descrição:**
```
Guias sobre controle de diabetes tipo 2: Monjaro vs insulina, Ozempic, hemoglobina glicada (HbA1c), suplementos (cromo, berberina), dieta low carb. Informação científica para controlar glicemia e reverter resistência à insulina. #diabetes #monjaro #ozempic #glicemia
```

---

### Board 6: Energia e Foco
**Nome:** Energia e Foco: Cafeína, Vitaminas B e Suplementos

**Descrição:**
```
Suplementos para energia, foco e combater fadiga: cafeína, taurina, vitaminas do complexo B, coenzima Q10, ginseng. Doses, horários e combinações para máxima produtividade sem prejuízo ao sono. #energia #foco #cafeina #vitaminab
```

---

### Board 7: Sono e Recuperação
**Nome:** Sono e Recuperação: Melatonina, Magnésio e Relaxamento

**Descrição:**
```
Guias sobre melhora do sono: melatonina (dose, horário), magnésio, ashwagandha, chá de camomila, GABA. Suplementos e técnicas para dormir melhor, recuperar músculos e reduzir estresse. #sono #melatonina #magnesio #insonia
```

---

### Board 8: Beleza e Antienvelhecimento
**Nome:** Beleza e Pele: Colágeno, Biotina e Antioxidantes

**Descrição:**
```
Suplementos para beleza: colágeno hidrolisado, biotina, vitamina C, ácido hialurônico, resveratrol, astaxantina. Informação científica sobre o que REALMENTE funciona para pele, cabelo e unhas. #colageno #biotina #beleza #antienvelhecimento
```

---

### Board 9: Imunidade e Saúde Intestinal
**Nome:** Imunidade: Vitamina C, D, Zinco e Probióticos

**Descrição:**
```
Suplementos para fortalecer imunidade: vitamina C, D, zinco, probióticos, própolis, equinácea. Doses preventivas, o que tomar em gripes/resfriados e como manter saúde intestinal forte. #imunidade #vitaminac #probioticos #saudeintestinal
```

---

### Board 10: Receitas e Dicas Fit
**Nome:** Receitas Fit e Dicas de Nutrição Saudável

**Descrição:**
```
Receitas saudáveis: smoothies proteicos, refeições low carb, lanches fit, preparo de whey protein. Dicas de nutrição para emagrecimento, ganho de massa e saúde. Informação prática e saborosa. #receitasfit #dietasaudavel #lowcarb #smoothie
```

---

## ✅ CHECKLIST FINAL

Antes de criar pins, confirme:

- [ ] Conta Business criada
- [ ] Site verificado (checkmark verde)
- [ ] Rich Pins validados
- [ ] Perfil completo (foto, bio, username)
- [ ] 10 boards criados com descrições
- [ ] Logo do Suplementaja salvo (pra usar nos pins)

---

## 🎯 PRÓXIMO PASSO

Assim que completar setup, me avisa!

Aí vou:
1. Criar os 30 pins
2. Te mandar arquivo Canva pronto
3. Ensinar a agendar via Later

**Qualquer dúvida, me chama!** 💜
