# 📋 O que Falta Implementar no VitaGuia

Este documento lista todas as funcionalidades e melhorias que ainda podem ser implementadas no VitaGuia para torná-lo uma plataforma completa.

---

## ✅ **JÁ IMPLEMENTADO**

### Core Features
- ✅ Homepage moderna e atraente com design profissional
- ✅ Sistema de questionário completo (6 passos)
- ✅ Algoritmo de recomendação personalizado
- ✅ Página de resultados com priorização
- ✅ 15 nutrientes com dados completos
- ✅ Listagem de nutrientes categorizada
- ✅ Páginas de detalhes individuais dos nutrientes
- ✅ Context API para gerenciamento de estado
- ✅ Validação de formulários com Zod
- ✅ TypeScript strict mode
- ✅ Design responsivo
- ✅ Componentes UI reutilizáveis
- ✅ Animações e hover effects
- ✅ Build otimizado para produção

---

## 🚧 **FALTA IMPLEMENTAR**

### 1. Páginas Legais e Institucionais (Prioridade: ALTA)

#### `/app/sobre/page.tsx` - Página Sobre
- [ ] História e missão do VitaGuia
- [ ] Equipe (pode ser fictícia ou só texto)
- [ ] Valores e diferenciais
- [ ] FAQ sobre o projeto

#### `/app/termos/page.tsx` - Termos de Uso
- [ ] Termos de uso do serviço
- [ ] Limitações de responsabilidade
- [ ] Disclaimer médico legal
- [ ] Política de privacidade de dados

#### `/app/privacidade/page.tsx` - Política de Privacidade
- [ ] Como os dados são coletados (localStorage)
- [ ] Quais dados coletamos
- [ ] Como protegemos os dados
- [ ] Cookies e tracking
- [ ] Conformidade LGPD

**Tempo estimado:** 2-3 horas

---

### 2. Blog para SEO (Prioridade: MÉDIA-ALTA)

#### `/app/blog/page.tsx` - Lista de Artigos
- [ ] Grid de cards com artigos
- [ ] Categorias (Vitaminas, Minerais, Saúde, Nutrição)
- [ ] Busca de artigos
- [ ] Paginação

#### `/app/blog/[slug]/page.tsx` - Artigo Individual
- [ ] Layout de artigo completo
- [ ] Índice do conteúdo
- [ ] Compartilhamento social
- [ ] Artigos relacionados
- [ ] Schema markup para SEO

#### `/data/artigos.json` - Conteúdo dos Artigos
- [ ] Pelo menos 5 artigos SEO-otimizados sobre:
  - "Vitamina D: O que você precisa saber"
  - "Suplementação de B12 para vegetarianos"
  - "Como escolher um multivitamínico"
  - "Sinais de deficiência de ferro"
  - "Ômega-3: Benefícios comprovados pela ciência"

**Tempo estimado:** 6-8 horas

---

### 3. API Routes com Supabase (Prioridade: MÉDIA)

Atualmente o app usa `localStorage`. Para ter histórico e analytics, precisamos:

#### `/app/api/avaliacoes/route.ts` - POST
- [ ] Salvar avaliação no Supabase
- [ ] Gerar ID único
- [ ] Retornar link compartilhável

#### `/app/api/avaliacoes/[id]/route.ts` - GET
- [ ] Buscar avaliação por ID
- [ ] Servir resultados salvos

#### `/app/api/analytics/route.ts` - POST
- [ ] Rastrear uso do sistema
- [ ] Métricas de recomendações
- [ ] Nutrientes mais recomendados

#### Database Schema (Supabase)
```sql
-- Tabela de avaliações
CREATE TABLE avaliacoes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  perfil JSONB NOT NULL,
  recomendacoes JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  ip_hash TEXT
);

-- Tabela de analytics
CREATE TABLE analytics (
  id BIGSERIAL PRIMARY KEY,
  event_type TEXT NOT NULL,
  event_data JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Tempo estimado:** 4-5 horas

---

### 4. Melhorias de UX/UI (Prioridade: MÉDIA)

#### Página de Resultados
- [ ] Botão "Download PDF" funcional (usar jsPDF ou react-pdf)
- [ ] Botão "Compartilhar" com URL encurtada
- [ ] Gráfico visual das deficiências (opcional)
- [ ] Comparativo "antes e depois" se usuário refizer

#### Questionário
- [ ] Indicador de progresso mais visual
- [ ] Tooltips explicativos em cada campo
- [ ] Opção de salvar rascunho
- [ ] Voltar e editar respostas anteriores
- [ ] Animações de transição entre passos

#### Páginas de Nutrientes
- [ ] Comparador de nutrientes (selecionar 2-3)
- [ ] Filtros (categoria, deficiência comum, etc)
- [ ] Busca por nome

**Tempo estimado:** 6-8 horas

---

### 5. Funcionalidades Avançadas (Prioridade: BAIXA)

#### Sistema de Alertas
- [ ] Newsletter opt-in
- [ ] Lembretes de suplementação (se implementar conta)
- [ ] Alertas de novas evidências científicas

#### Gamificação (Opcional)
- [ ] Badges por completar avaliação
- [ ] Streak de acompanhamento
- [ ] Compartilhamento social

#### Multi-idioma
- [ ] Inglês (EN)
- [ ] Espanhol (ES)

**Tempo estimado:** 8-12 horas

---

### 6. Monetização (Prioridade: ALTA para receita)

#### Google AdSense
- [ ] Criar conta Google AdSense
- [ ] Submeter site para aprovação
- [ ] Adicionar código do AdSense nos componentes `AdUnit`
- [ ] Testar ads em produção
- [ ] Otimizar placement dos anúncios

#### Links Afiliados Amazon
- [ ] Criar conta Amazon Associates (Brasil)
- [ ] Gerar links afiliados reais para produtos
- [ ] Substituir placeholders em `data/nutrientes.json`
- [ ] Adicionar disclaimer de afiliados (já tem)
- [ ] Tracking de cliques (opcional)

**Tempo estimado:** 3-4 horas (+ tempo de aprovação)

---

### 7. Analytics e Tracking (Prioridade: MÉDIA)

#### Google Analytics 4
- [ ] Criar propriedade GA4
- [ ] Instalar `gtag` no `app/layout.tsx`
- [ ] Configurar eventos customizados:
  - `avaliacao_iniciada`
  - `avaliacao_completada`
  - `nutriente_visualizado`
  - `link_afiliado_clicado`
- [ ] Configurar conversões

#### Meta Pixel (Facebook/Instagram)
- [ ] Adicionar Meta Pixel para remarketing
- [ ] Eventos de conversão

**Tempo estimado:** 2-3 horas

---

### 8. SEO e Performance (Prioridade: ALTA)

#### SEO Técnico
- [ ] Adicionar `sitemap.xml` (Next.js já gera automaticamente, mas verificar)
- [ ] Adicionar `robots.txt`
- [ ] Meta tags Open Graph completas em todas as páginas
- [ ] Schema.org markup (WebSite, Article, FAQPage)
- [ ] Canonical URLs

#### Performance
- [ ] Otimizar imagens (se adicionar)
- [ ] Lazy loading de componentes pesados
- [ ] Prefetch de rotas críticas
- [ ] Code splitting otimizado

#### Acessibilidade
- [ ] ARIA labels completos
- [ ] Navegação por teclado
- [ ] Skip links
- [ ] Contraste de cores (WCAG AA)
- [ ] Screen reader testing

**Tempo estimado:** 3-4 horas

---

### 9. Testes (Prioridade: MÉDIA)

#### Unit Tests
- [ ] Testar algoritmo de recomendações
- [ ] Testar componentes UI
- [ ] Testar validações Zod

#### Integration Tests
- [ ] Testar fluxo completo do questionário
- [ ] Testar geração de resultados

#### E2E Tests
- [ ] Cypress ou Playwright
- [ ] Testar user journey completo

**Tempo estimado:** 6-8 horas

---

### 10. Infraestrutura e Deploy (Prioridade: MÉDIA)

#### Vercel (já configurado)
- [x] Deploy automático
- [ ] Variáveis de ambiente production
- [ ] Custom domain (se houver)
- [ ] Analytics Vercel

#### Monitoring
- [ ] Sentry para error tracking
- [ ] Uptime monitoring
- [ ] Performance monitoring

**Tempo estimado:** 2-3 horas

---

## 📊 **RESUMO DE PRIORIDADES**

### Para MVP Completo (Launch Ready):
1. **Páginas Legais** (sobre, termos, privacidade) - 3h
2. **Google AdSense Setup** - 4h
3. **Links Afiliados Reais** - 2h
4. **SEO Básico** (sitemap, robots, meta tags) - 2h
5. **Google Analytics** - 2h

**Total para MVP:** ~13 horas

### Para Crescimento:
6. **Blog com 5 artigos** - 8h
7. **API Routes + Supabase** - 5h
8. **Download PDF dos resultados** - 3h
9. **Melhorias de UX** - 6h

**Total para Crescimento:** ~22 horas adicionais

### Opcional (Nice to Have):
10. **Testes automatizados** - 8h
11. **Multi-idioma** - 12h
12. **Gamificação** - 10h

---

## 💡 **RECOMENDAÇÕES**

### Ordem de Implementação Sugerida:

**Fase 1 - Lançamento (1-2 semanas):**
1. Criar páginas legais (LGPD compliance)
2. Configurar Google Analytics
3. Setup Google AdSense
4. Adicionar links afiliados reais
5. SEO técnico básico
6. **LANÇAR!** 🚀

**Fase 2 - Crescimento (2-4 semanas):**
7. Escrever 5 artigos de blog otimizados para SEO
8. Implementar API routes com Supabase
9. Adicionar download PDF
10. Melhorar UX baseado em feedback

**Fase 3 - Escala (1-2 meses):**
11. Expandir blog (20-30 artigos)
12. Implementar testes
13. Multi-idioma (se houver demanda)
14. Features avançadas baseadas em analytics

---

## 🎯 **PRÓXIMOS PASSOS IMEDIATOS**

1. **Criar páginas legais** (sobre, termos, privacidade)
2. **Adicionar Google Analytics**
3. **Configurar Google AdSense**
4. **Gerar links afiliados reais da Amazon**
5. **Verificar SEO técnico**

Após isso, o site estará **100% pronto para lançamento** e começar a gerar tráfego orgânico e receita com ads + afiliados! 💰

---

**Última atualização:** $(date +"%Y-%m-%d")
