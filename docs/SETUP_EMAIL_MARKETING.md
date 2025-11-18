# 📧 Setup de Email Marketing com Brevo

## O Que Foi Implementado

✅ API endpoint `/api/subscribe` que captura emails e envia para Brevo
✅ Popup de email atualizado para usar a API
✅ Fallback: se Brevo não estiver configurado, o site ainda funciona (mas não salva emails)

---

## 🚀 Como Configurar (15 minutos)

### **PASSO 1: Criar Conta no Brevo** (3 min)

1. Acesse: https://www.brevo.com/
2. Clique em "Sign Up Free"
3. Preencha dados:
   - Email: seu@email.com
   - Nome da empresa: "Suplementa Já"
   - País: Brasil
4. Confirme email

**PLANO GRÁTIS:**
- ✅ Até 300 emails/dia
- ✅ Contatos ilimitados
- ✅ API completa
- ✅ Automações básicas

---

### **PASSO 2: Obter API Key** (2 min)

1. Faça login no Brevo
2. Clique no seu nome (canto superior direito)
3. Vá em **"SMTP & API"**
4. Clique em **"API Keys"**
5. Clique em **"Create a new API Key"**
6. Nome: "Suplementa Já Production"
7. **COPIE A CHAVE** (você só verá uma vez!)
   - Formato: `xkeysib-abc123...`

---

### **PASSO 3: Criar Lista de Contatos** (2 min)

1. No Brevo, vá em **"Contacts"** (menu lateral)
2. Clique em **"Lists"**
3. Clique em **"Create a list"**
4. Nome da lista: "Leads - Popup Homepage"
5. **ANOTE O ID DA LISTA** (número que aparece ao lado do nome)
   - Exemplo: Lista #3 → ID = 3

---

### **PASSO 4: Configurar Variáveis de Ambiente no Vercel** (5 min)

1. Acesse: https://vercel.com/
2. Vá no seu projeto "suplementaj"
3. Clique em **"Settings"**
4. Vá em **"Environment Variables"**
5. Adicione 2 variáveis:

**Variável 1:**
```
Name: BREVO_API_KEY
Value: xkeysib-abc123... (cole sua API key aqui)
Environment: Production, Preview, Development (marque todas)
```

**Variável 2:**
```
Name: BREVO_LIST_ID
Value: 3 (ou o ID da sua lista)
Environment: Production, Preview, Development (marque todas)
```

6. Clique em **"Save"**

---

### **PASSO 5: Re-deploy no Vercel** (2 min)

1. Vá em **"Deployments"** no Vercel
2. Clique nos 3 pontinhos do último deploy
3. Clique em **"Redeploy"**
4. Aguarde build completar (~2 min)

**PRONTO!** 🎉 Agora os emails vão direto para o Brevo!

---

## 🧪 Como Testar

1. Abra seu site: https://suplementaja.vercel.app
2. Aguarde 15 segundos OU mova mouse para fora da janela
3. Popup de email aparece
4. Preencha nome e email de teste
5. Clique em "Quero Receber Grátis"
6. **Verificar no Brevo:**
   - Vá em "Contacts" → "Lists"
   - Clique na lista "Leads - Popup Homepage"
   - Deve aparecer o email que você cadastrou!

---

## 📊 Como Visualizar Leads no Brevo

### Opção 1: Ver Lista Completa
1. Brevo → "Contacts" → "Lists"
2. Clique na lista "Leads - Popup Homepage"
3. Veja todos os emails capturados

### Opção 2: Exportar para Excel/CSV
1. Vá na lista de contatos
2. Clique em "Export" (canto superior direito)
3. Escolha formato: CSV ou Excel
4. Download do arquivo

### Opção 3: Ver em Tempo Real (Atividades)
1. Brevo → "Contacts" → "Recent activity"
2. Veja últimos contatos adicionados

---

## 📧 Próximo Passo: Criar Email de Boas-Vindas Automático

### Opção A: Automation no Brevo (Recomendado)

1. Brevo → "Automations"
2. Clique em "Create an automation"
3. Escolha trigger: "Contact enters a list"
4. Selecione lista: "Leads - Popup Homepage"
5. Adicione ação: "Send an email"
6. Crie template de email:

**ASSUNTO:** Bem-vindo ao Suplementa Já! 🚀

**CORPO:**
```html
<h1>Olá {{contact.FIRSTNAME}}!</h1>

<p>Obrigado por se cadastrar no Suplementa Já!</p>

<p>Você está a um passo de descobrir suas deficiências nutricionais e melhorar sua saúde.</p>

<h2>👉 Faça Sua Avaliação Gratuita Agora:</h2>
<a href="https://suplementaja.vercel.app/avaliacao" style="background: #FFD700; color: black; padding: 15px 30px; text-decoration: none; font-weight: bold;">
  FAZER AVALIAÇÃO GRÁTIS
</a>

<hr>

<p><strong>O que você vai receber:</strong></p>
<ul>
  <li>✅ Análise personalizada de deficiências nutricionais</li>
  <li>✅ Recomendações de suplementos específicos para você</li>
  <li>✅ Artigos educacionais sobre saúde e suplementação</li>
  <li>✅ Ofertas exclusivas (em breve)</li>
</ul>

<p>Um abraço,<br>Equipe Suplementa Já</p>
```

7. Ative a automation

**PRONTO!** Todo novo lead recebe email automático 🎉

---

### Opção B: Email Programático (Avançado)

Se preferir enviar email direto do código (sem automation), descomente o código em:
`app/api/subscribe/route.ts` (linhas 67-87)

**IMPORTANTE:** Precisa configurar email de remetente verificado no Brevo antes:
1. Brevo → "Senders & IP" → "Senders"
2. Adicione seu email: contato@suplementaja.com
3. Verifique email (Brevo envia link de confirmação)

---

## 🎯 Métricas para Acompanhar

### No Brevo Dashboard:
- **Contatos totais**: Quantos leads você tem
- **Taxa de crescimento**: Novos leads por dia/semana
- **Taxa de abertura**: % que abre emails (ideal: >20%)
- **Taxa de clique**: % que clica em links (ideal: >2%)

### No Google Analytics:
- Evento: `generate_lead`
- Veja quantos visitantes preenchem o popup
- Taxa de conversão: (leads / visitantes totais)

---

## ❓ Troubleshooting

### Erro: "BREVO_API_KEY não configurada"
- Verifique se adicionou variáveis de ambiente no Vercel
- Faça re-deploy após adicionar variáveis

### Erro: "duplicate_parameter"
- Email já existe na lista (isso é OK, não é erro)
- Brevo só atualiza os dados

### Email não chega no Brevo
1. Verifique API key está correta
2. Verifique ID da lista está correto
3. Veja logs do Vercel: Deployments → View Function Logs

### Como testar localmente (desenvolvimento)?
1. Crie arquivo `.env.local` na raiz do projeto:
```
BREVO_API_KEY=xkeysib-abc123...
BREVO_LIST_ID=3
```
2. Reinicie servidor de desenvolvimento: `npm run dev`
3. Teste popup em http://localhost:3000

---

## 📈 Próximos Passos (Após Setup Básico)

### 1. Criar Sequência de Emails (Email Drip Campaign)
- Email 1 (imediato): Boas-vindas + CTA para fazer quiz
- Email 2 (dia 3): "Você já fez sua avaliação?" + artigo sobre deficiência comum
- Email 3 (dia 7): Conteúdo educacional (ex: "5 sinais de deficiência de vitamina D")
- Email 4 (dia 14): Recomendações de produtos (afiliados Amazon)

### 2. Segmentação de Listas
Criar listas separadas por interesse:
- "Leads - Veganos" (quem se identificou como vegano no quiz)
- "Leads - Atletas" (quem treina frequentemente)
- "Leads - Mulheres 30+" (nicho específico)

### 3. A/B Testing de Emails
Testar variações de:
- Assunto do email
- CTA (call to action)
- Design/layout

### 4. Integrar com Quiz
Capturar email no final do quiz (além do popup)

---

## 💰 Quando Fazer Upgrade do Plano Grátis?

**Plano Grátis:** 300 emails/dia = 9.000 emails/mês

Se você tem:
- **1.000 leads** enviando 1 email/semana = 250 emails/dia ✅ OK no grátis
- **5.000 leads** enviando 1 email/semana = 715 emails/dia ❌ Precisa upgrade

**Plano Starter (€25/mês):**
- 20.000 emails/mês
- Sem limite diário
- Suporte prioritário

---

## 🔐 Segurança

✅ **API key nunca é exposta no frontend** (fica nas variáveis de ambiente do servidor)
✅ **Validação de email** no backend
✅ **Rate limiting**: Vercel limita requisições automaticamente
✅ **HTTPS obrigatório**: Vercel usa SSL

---

## 📞 Suporte

**Brevo:**
- Docs: https://developers.brevo.com/
- Suporte: help@brevo.com
- Chat ao vivo (dentro da plataforma)

**Problemas com integração?**
- Verifique logs no Vercel: Deployments → Function Logs
- Teste API diretamente: https://api.brevo.com/v3/account (com sua API key no header)

---

**Pronto para capturar leads de verdade! 🚀📧**
