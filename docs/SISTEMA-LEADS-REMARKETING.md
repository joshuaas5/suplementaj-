# 📊 Sistema de Captura de Leads - Guia Completo

## ✅ O Que Foi Implementado

### 1. **Captura Automática de Leads**
- ✅ Popup aparece após **8 segundos** na página
- ✅ Aceita **EMAIL ou TELEFONE** (validação automática)
- ✅ Download **IMEDIATO** do PDF (sem envio de email)
- ✅ Salva lead em arquivo JSON para remarketing

### 2. **Painel Administrativo**
- **URL de Acesso:** `https://suplementaja.vercel.app/admin/leads`
- **API de Dados:** `/api/admin/leads`

### 3. **Dados Salvos de Cada Lead**
```json
{
  "id": "LEAD_1733789234567",
  "contact": "joao@email.com" ou "(11) 99999-9999",
  "contactType": "email" ou "phone",
  "leadMagnet": "top-10-suplementos-2025",
  "source": "popup",
  "timestamp": "2024-12-09T14:30:00.000Z",
  "userAgent": "Mozilla/5.0...",
  "referer": "https://suplementaja.vercel.app/blog/creatina"
}
```

---

## 🎯 Como Usar os Leads Para Remarketing

### **1. Exportar CSV (Para Upload em Ferramentas)**

No painel `/admin/leads`, clique em **"Exportar CSV"**.

O arquivo gerado contém:
- ID do lead
- Tipo (Email ou Telefone)
- Contato
- Lead Magnet baixado
- Data/Hora
- Página de origem

---

### **2. Email Marketing (Mailchimp, ConvertKit, etc.)**

**Passo a passo:**

1. **Exportar leads do painel** (filtrar apenas emails)
2. **Importar no Mailchimp:**
   - Dashboard → Audience → Import contacts
   - Upload CSV
   - Mapear colunas (Email → Email, Nome → Vazio)
3. **Criar sequência:**
   - Email 1 (imediato): "Você baixou o PDF? Aqui estão os 3 melhores suplementos"
   - Email 2 (+3 dias): "Erro #1 que iniciantes cometem"
   - Email 3 (+7 dias): Oferta de consultoria/produto digital

**Custo Mailchimp:** Grátis até 500 contatos.

---

### **3. WhatsApp Business (Para Telefones)**

**Opção A: Manual (Começar Hoje)**
1. Exportar CSV com telefones
2. Adicionar contatos no celular
3. Criar lista de transmissão no WhatsApp Business
4. Enviar mensagem:
   ```
   Oi! 👋 Você baixou nosso PDF "Top 10 Suplementos 2025".
   
   Vi que você tem interesse em suplementação. 
   Posso te ajudar com dúvidas? 💊
   ```

**Opção B: Automatizado (WhatsApp Business API)**
- Custo: ~R$ 50-150/mês
- Ferramentas: Twilio, MessageBird, Z-API
- Permite envio automático + chatbot

---

### **4. Facebook Ads - Custom Audience (Remarketing)**

**Por que usar:** Pessoas que baixaram o PDF já têm INTERESSE. Taxa de conversão 3-5x maior.

**Passo a passo:**

1. **Exportar CSV** do painel de leads
2. **Facebook Ads Manager:**
   - Audiences → Create Audience → Custom Audience
   - Customer List → Upload CSV
   - Mapear: Email → Email, Phone → Phone
3. **Criar campanha de remarketing:**
   - Público: Só quem baixou o PDF
   - Objetivo: Conversão (venda de consultoria/produto digital)
   - Mensagem: "Você baixou nosso PDF. Agora descubra SEU plano personalizado"

**Vantagem:** CPM (custo por mil impressões) 50-70% menor para audiências personalizadas.

---

### **5. Google Ads - Customer Match**

Mesmo processo do Facebook. Upload de emails/telefones para remarketing.

**Vantagem:** Aparecer em pesquisas do Google quando lead buscar "comprar creatina" ou "whey barato".

---

## 🔒 Segurança e Privacidade

### **Avisos Importantes:**

1. **LGPD:** Você PODE usar esses contatos para marketing porque:
   - ✅ Lead forneceu voluntariamente
   - ✅ Há interesse legítimo (baixou material sobre suplementos)
   - ✅ Precisa ter opt-out (botão "cancelar inscrição" nos emails)

2. **Não vender/compartilhar dados:** Ilegal e antiético.

3. **Backup dos dados:**
   - Arquivo: `data/leads.json`
   - **IMPORTANTE:** Fazer backup semanal (exportar CSV)
   - Se limpar servidor Vercel, dados serão perdidos

4. **Migração futura para banco de dados:**
   - Atual: Arquivo JSON (simples, funcional)
   - Futuro: Supabase/Prisma (escalável, seguro)
   - Recomendado quando passar de 1.000 leads

---

## 📈 Métricas e Análise

### **O Que Monitorar:**

1. **Taxa de conversão do popup:**
   - Visitas na página ÷ Leads capturados
   - Meta: 3-8%

2. **Origem dos leads:**
   - Ver campo `referer` no painel
   - Quais artigos geram mais leads?
   - Otimizar artigos com baixa conversão

3. **Email vs Telefone:**
   - Se 80%+ fornecem email → Focar em email marketing
   - Se 50%+ fornecem telefone → WhatsApp é prioridade

---

## 🚀 Próximos Passos

### **Imediato (Esta Semana):**
- [ ] Acessar `/admin/leads` todo dia
- [ ] Exportar CSV ao final da semana
- [ ] Criar lista de transmissão no WhatsApp Business (se tiver telefones)

### **Curto Prazo (1-2 Semanas):**
- [ ] Criar conta Mailchimp gratuita
- [ ] Importar emails
- [ ] Criar sequência de 3 emails

### **Médio Prazo (1 Mês):**
- [ ] Upload de Custom Audience no Facebook Ads
- [ ] Criar campanha de remarketing (orçamento: R$ 10/dia)
- [ ] Testar diferentes ofertas (consultoria, curso, produto físico)

### **Longo Prazo (3 Meses):**
- [ ] Migrar para banco de dados (quando passar de 500 leads)
- [ ] Integrar WhatsApp Business API (automação)
- [ ] A/B testing de mensagens de remarketing

---

## 🛠️ Integrações Futuras (Quando Escalar)

### **Email Marketing Automático:**
```typescript
// Já deixei o código preparado em app/api/lead-magnet/route.ts
// Só descomentar quando tiver Mailchimp configurado

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
await mailchimp.lists.addListMember(MAILCHIMP_LIST_ID, {
  email_address: contact,
  status: 'subscribed',
  tags: ['lead-magnet-pdf'],
});
```

### **WhatsApp Automático:**
```typescript
// Integração com Z-API ou Twilio
if (contactType === 'phone') {
  await whatsapp.sendTemplate(contact, 'welcome_message');
}
```

---

## ❓ FAQ - Perguntas Comuns

**P: Onde os leads são salvos?**
R: `data/leads.json` no servidor. Também visível em `/admin/leads`.

**P: E se perder os dados?**
R: Exportar CSV semanalmente como backup.

**P: Preciso de autenticação no painel admin?**
R: Por enquanto não (URL não é divulgada). Quando tiver muitos leads, adicionar senha.

**P: Posso enviar email marketing SEM ferramenta paga?**
R: Sim! Google Sheets + Google Apps Script (100% grátis).

**P: Como saber se vale a pena investir em ads?**
R: Teste quando tiver 100+ leads orgânicos primeiro.

---

## 📞 Suporte

Dúvidas? Acesse o painel e veja os dados em tempo real:
**https://suplementaja.vercel.app/admin/leads**

---

**Última atualização:** 09/12/2024
**Tag Afiliado Amazon:** 105c91-20
