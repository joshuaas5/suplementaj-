# 📄 GUIA: CONVERTER MDX → PDF PROFISSIONAL

## 🎨 OPÇÃO 1: CANVA (RECOMENDADO - Mais Fácil)

### Passo a Passo:

1. **Acessar:** [canva.com](https://canva.com)
2. **Criar:** "Documento" → "E-book" ou "Guia"
3. **Template:** Buscar "Ebook Moderno" ou "Guia Profissional"
4. **Cores:** Verde/Teal (#10b981, #14b8a6) - identidade Suplementa Já
5. **Copiar conteúdo:** De `docs/PDF-TOP-10-SUPLEMENTOS-2025.md`
6. **Formatar:**
   - Títulos: Fonte bold, 32-48pt
   - Subtítulos: 24-32pt
   - Texto: 14-16pt, linha 1.5
   - Tabelas: Copiar dados e criar tabela visual no Canva
7. **Imagens:** Adicionar fotos de suplementos (Unsplash grátis)
8. **Exportar:** PDF de Alta Qualidade (300 DPI)

**Tempo:** 2-3 horas  
**Custo:** Grátis (versão free) ou R$ 13/mês (Pro com templates premium)

---

## 💻 OPÇÃO 2: FIGMA (Design Profissional)

### Passo a Passo:

1. **Template:** Buscar "Ebook Template" no Figma Community
2. **Exemplo:** [Ebook Kit by Zoltan Ban](https://figma.com/@zoltanban)
3. **Editar:** Substituir textos e cores
4. **Exportar:** PDF (Settings → Export → PDF)

**Tempo:** 3-4 horas  
**Custo:** Grátis

---

## ⚡ OPÇÃO 3: MARKDOWN → PDF (Automatizado)

### Usando Pandoc + LaTeX:

```bash
# Instalar Pandoc
# Windows: https://pandoc.org/installing.html

# Converter
pandoc docs/PDF-TOP-10-SUPLEMENTOS-2025.md -o top-10-suplementos-2025.pdf \
  --pdf-engine=xelatex \
  --variable mainfont="Arial" \
  --variable geometry:margin=2cm \
  --toc \
  --number-sections

```

**Vantagens:** Rápido, automatizado  
**Desvantagens:** Visual básico (sem design sofisticado)

**Tempo:** 15 minutos  
**Custo:** Grátis

---

## 🎯 OPÇÃO 4: CONTRATAR DESIGNER (Qualidade Máxima)

### Plataformas:

1. **Fiverr:** R$ 50-150 (design + diagramação)
   - Buscar: "ebook design português"
   - Link: [fiverr.com/gigs/ebook-design](https://fiverr.com)

2. **99designs:** R$ 200-500 (concurso de design)
   - Link: [99designs.com.br](https://99designs.com.br)

3. **Workana:** R$ 100-300 (freelancer BR)
   - Link: [workana.com](https://workana.com)

**Tempo:** 3-5 dias  
**Custo:** R$ 50-500

---

## 📋 CHECKLIST FINAL DO PDF

Antes de publicar, verificar:

- [ ] **Capa atraente** com título grande e visual profissional
- [ ] **Sumário clicável** (hyperlinks funcionando)
- [ ] **Tabelas formatadas** (não copiar/colar texto bruto)
- [ ] **Links afiliados funcionando** (testar todos)
- [ ] **Imagens de qualidade** (mínimo 300 DPI)
- [ ] **Sem erros de português** (revisar 2x)
- [ ] **Logo Suplementa Já** em rodapé de todas as páginas
- [ ] **CTA no final** direcionando para avaliação
- [ ] **Disclaimer legal** sobre links afiliados
- [ ] **Tamanho:** <5MB (otimizar para download rápido)

---

## 🚀 APÓS CRIAR O PDF

### 1. Upload no Site

```bash
# Criar pasta pública
mkdir public/downloads

# Adicionar PDF
# Colocar arquivo: public/downloads/top-10-suplementos-2025.pdf
```

### 2. Testar Download

```tsx
// components/marketing/ExitIntentPopup.tsx (linha 62)
window.open('/downloads/top-10-suplementos-2025.pdf', '_blank');
```

### 3. Enviar por Email (Automatizado)

Integrar com serviço de email:

```typescript
// app/api/lead-magnet/route.ts
// Após capturar lead, enviar email automático:

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  }
});

await transporter.sendMail({
  from: '"Suplementa Já" <contato@suplementaja.com>',
  to: email,
  subject: '📥 Seu PDF: Os 10 Melhores Suplementos 2025',
  html: `
    <h1>Obrigado por baixar nosso guia!</h1>
    <p>Clique no botão abaixo para acessar:</p>
    <a href="https://suplementaja.com/downloads/top-10-suplementos-2025.pdf">
      Baixar PDF Agora
    </a>
  `
});
```

---

## 💡 ALTERNATIVA RÁPIDA: USAR IA

### ChatGPT + DALL-E 3:

1. Pedir para ChatGPT gerar layout de cada página
2. DALL-E 3 criar imagens customizadas
3. Montar no Canva/Figma

**Tempo:** 1-2 horas  
**Custo:** R$ 20 (ChatGPT Plus por 1 mês)

---

## 📌 RECOMENDAÇÃO FINAL

**Para começar rápido:**
→ Use **CANVA** (2-3 horas, grátis, visual bom)

**Para resultado profissional:**
→ Contrate designer no **Fiverr** (R$ 50-100, 3 dias)

**Para automatizar:**
→ Use **Pandoc** (15 min, mas visual básico)

---

**Qualquer opção que escolher: o CONTEÚDO já está pronto em `docs/PDF-TOP-10-SUPLEMENTOS-2025.md`. Só precisa dar cara visual!**
