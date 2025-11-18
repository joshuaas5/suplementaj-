#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json

with open('/home/user/suplementaj-/data/artigos.json', 'r', encoding='utf-8') as f:
    artigos = json.load(f)

magnesio = {
    "slug": "magnesio-ansiedade-sono-tipos",
    "titulo": "Magnésio: Guia Completo para Ansiedade, Sono e Relaxamento Muscular",
    "descricao": "Descubra qual tipo de magnésio é melhor para ansiedade, insônia, cãibras e enxaqueca. Glicinato, treonato, citrato ou óxido?",
    "autor": "Equipe Suplementa Já",
    "data": "2025-01-23",
    "categoria": "Minerais",
    "tags": ["magnésio", "ansiedade", "sono", "insônia", "cãibras", "glicinato", "treonato"],
    "tempo_leitura": "11 min",
    "imagem": "/images/blog/magnesio.jpg",
    "conteudo": [
        {
            "tipo": "alerta",
            "variante": "success",
            "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Para Que Serve**: Ansiedade, sono, relaxamento muscular, enxaqueca, constipação, pressão arterial\n• **Deficiência**: 50-70% dos brasileiros consomem menos magnésio que o recomendado\n• **Dose**: 200-400 mg/dia | 400-600 mg/dia (deficiência ou atletas)\n• **GLICINATO**: Ansiedade, sono, relaxamento (não causa diarreia) ⭐ MELHOR PARA MAIORIA\n• **TREONATO**: Cérebro, memória, função cognitiva (mais caro)\n• **CITRATO**: Constipação, efeito laxante leve\n• **ÓXIDO**: Baixa absorção, só para laxante forte (EVITAR)\n• **Quando Tomar**: À noite (ajuda no sono) | Glicinato ou treonato\n• **Tempo para Efeito**: 1-2 semanas (ansiedade, sono) | 4-8 semanas (enxaqueca)\n• **Sintomas de Deficiência**: Cãibras, pálpebra tremendo, ansiedade, insônia, fadiga\n• **Custo**: R$30-60/mês"
        },
        {
            "tipo": "paragrafo",
            "texto": "Magnésio é o quarto mineral mais abundante no corpo humano, envolvido em mais de 600 reações enzimáticas - incluindo produção de energia, síntese de DNA, contração muscular e neurotransmissão. Apesar disso, 50-70% dos brasileiros consomem MENOS magnésio do que o recomendado, tornando a deficiência subclínica extremamente comum."
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Benefícios do Magnésio Comprovados pela Ciência"
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "1. Ansiedade e Saúde Mental"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Reduz ansiedade em 30-40%** em pessoas com deficiência",
                "Regula o eixo HPA (hipotálamo-pituitária-adrenal) - sistema de estresse",
                "Bloqueia receptores NMDA (efeito calmante similar ao magnésio endovenoso para eclâmpsia)",
                "Aumenta GABA (neurotransmissor inibitório/calmante)",
                "Dose para ansiedade: 200-400 mg/dia de glicinato ou treonato",
                "Tempo para efeito: 1-3 semanas"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "2. Sono e Insônia"
        },
        {
            "tipo": "lista",
            "itens": [
                "Melhora qualidade do sono em 40-50% (estudos com idosos)",
                "Aumenta melatonina naturalmente",
                "Reduz tempo para pegar no sono (latência do sono)",
                "Aumenta sono profundo (ondas delta)",
                "**Magnésio glicinato é IDEAL**: Glicina também promove sono",
                "Dose: 200-400 mg 1-2h antes de dormir"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "3. Relaxamento Muscular e Cãibras"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Elimina cãibras noturnas em 70-80%** dos casos",
                "Regula contração/relaxamento muscular (antagonista do cálcio)",
                "Reduz tensão muscular e dor miofascial",
                "Ideal para atletas (perdem magnésio no suor)",
                "Dose: 300-500 mg/dia",
                "Também eficaz topicamente (óleo de magnésio, banho de sais de Epsom)"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "4. Enxaqueca e Dores de Cabeça"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Reduz frequência de enxaquecas em 40-50%**",
                "Previne vasoconstrição cerebral",
                "Bloqueia receptores de dor (NMDA)",
                "Dose preventiva: 400-600 mg/dia (dividida em 2 doses)",
                "Forma: Óxido de magnésio funciona bem para enxaqueca (mesmo com baixa absorção)",
                "Tempo para efeito: 8-12 semanas mínimo"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "5. Pressão Arterial e Saúde Cardiovascular"
        },
        {
            "tipo": "lista",
            "itens": [
                "Reduz pressão arterial em 3-5 mmHg (modesto mas significativo)",
                "Relaxa vasos sanguíneos (vasodilatação)",
                "Reduz arritmias cardíacas",
                "Melhora sensibilidade à insulina",
                "Dose: 300-400 mg/dia"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "6. Cognição e Memória (Treonato Especificamente)"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Magnésio L-treonato** atravessa barreira hematoencefálica",
                "Aumenta densidade sináptica (conexões neurais)",
                "Melhora memória de curto e longo prazo",
                "Pode prevenir declínio cognitivo relacionado à idade",
                "Dose: 1.500-2.000 mg/dia de treonato (equivale a ~140 mg magnésio elementar)",
                "Tempo para efeito: 6-12 semanas"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Sintomas de Deficiência de Magnésio"
        },
        {
            "tipo": "lista",
            "itens": [
                "Cãibras musculares (especialmente à noite)",
                "Pálpebra tremendo (fasciculação)",
                "Ansiedade e irritabilidade",
                "Insônia ou sono não-reparador",
                "Fadiga crônica",
                "Constipação",
                "Dores de cabeça e enxaquecas frequentes",
                "Arritmias cardíacas",
                "Síndrome pré-menstrual (TPM) severa",
                "Fraqueza muscular"
            ]
        },
        {
            "tipo": "alerta",
            "variante": "info",
            "texto": "💡 **IMPORTANTE**: Magnésio sérico (exame de sangue) NÃO é confiável para detectar deficiência - só 1% do magnésio corporal está no sangue. Magnésio intracelular ou teste de carga de magnésio são melhores, mas caros. Melhor estratégia: **teste terapêutico** (suplementar 2-4 semanas e ver se sintomas melhoram)."
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Tipos de Magnésio: Qual Escolher?"
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "🏆 Magnésio GLICINATO (Melhor para Maioria)"
        },
        {
            "tipo": "lista",
            "itens": [
                "✅ Alta biodisponibilidade (80-90%)",
                "✅ NÃO causa diarreia (quelado)",
                "✅ Glicina adiciona efeito calmante e melhora sono",
                "✅ Ideal para: ansiedade, sono, relaxamento muscular",
                "✅ Melhor tolerado",
                "❌ Mais caro que citrato/óxido (R$40-70/mês)",
                "**Dose**: 200-400 mg de magnésio elementar (= ~2.000-4.000 mg de bisglicinato)"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "🧠 Magnésio L-TREONATO (Para Cérebro)"
        },
        {
            "tipo": "lista",
            "itens": [
                "✅ Único que atravessa barreira hematoencefálica eficientemente",
                "✅ Melhora memória, cognição e função cerebral",
                "✅ Ideal para: declínio cognitivo, Alzheimer precoce, estudantes",
                "❌ MUITO caro (R$80-150/mês)",
                "❌ Doses altas necessárias (1.500-2.000 mg para 140 mg de Mg elementar)",
                "**Dose**: 1.500-2.000 mg/dia (dividir em 2 doses)"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "💩 Magnésio CITRATO (Laxante Leve)"
        },
        {
            "tipo": "lista",
            "itens": [
                "✅ Boa absorção (30-40%)",
                "✅ Barato (R$20-35/mês)",
                "✅ Efeito laxante leve - ideal para constipação",
                "❌ Causa diarreia em doses >300 mg",
                "❌ Não ideal se você já tem intestino solto",
                "**Ideal para**: Constipação + suplementação de magnésio"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "🚫 Magnésio ÓXIDO (Evitar, EXCETO...)"
        },
        {
            "tipo": "lista",
            "itens": [
                "✅ Muito barato (R$10-20/mês)",
                "✅ Eficaz para enxaqueca (estudos usaram óxido)",
                "❌ Absorção PÉSSIMA (4-5%)",
                "❌ Forte efeito laxante/diarreia",
                "❌ Não recomendado para ansiedade/sono",
                "**Use APENAS se**: Constipação severa OU enxaqueca (evidência específica)"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "Outras Formas"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Magnésio Taurato**: Bom para coração (taurina + magnésio), mais caro",
                "**Magnésio Malato**: Energia (ácido málico no ciclo de Krebs), bom para fadiga/fibromialgia",
                "**Cloreto de Magnésio**: Boa absorção, barato, mas sabor horrível (uso tópico OK)",
                "**Sulfato de Magnésio (Sal de Epsom)**: Uso tópico (banho relaxante), não tomar oralmente"
            ]
        },
        {
            "tipo": "alerta",
            "variante": "success",
            "texto": "💡 **RECOMENDAÇÃO FINAL:**\n\n• **Ansiedade, sono, cãibras**: Magnésio GLICINATO 200-400 mg à noite\n• **Memória, cérebro, Alzheimer**: Magnésio L-TREONATO 1.500-2.000 mg/dia\n• **Constipação**: Magnésio CITRATO 300-500 mg/dia\n• **Enxaqueca**: Magnésio ÓXIDO 400-600 mg/dia (ou glicinato se tolerar)"
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Como Tomar Magnésio Para Máxima Eficácia"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Melhor horário**: À noite, 1-2h antes de dormir (efeito relaxante)",
                "**Com ou sem alimento**: Pode tomar com comida (reduz desconforto gástrico) sem perder absorção significativa",
                "**Dividir dose**: Se >400 mg/dia, dividir em 2 doses (absorção tem limite ~200 mg/vez)",
                "**Evitar com cálcio em altas doses**: Competem pela absorção (esperar 2h se tomar suplemento de cálcio)",
                "**Evitar com fibras em excesso**: Fitatos reduzem absorção",
                "**Combinar com vitamina D**: Magnésio ativa vitamina D, vitamina D melhora absorção de magnésio (sinergia)"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Fontes Alimentares de Magnésio"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Sementes de abóbora**: 550 mg por 100g (fonte mais rica)",
                "**Amêndoas**: 270 mg por 100g",
                "**Espinafre cozido**: 80 mg por 100g",
                "**Castanha de caju**: 260 mg por 100g",
                "**Abacate**: 30 mg por unidade",
                "**Chocolate amargo (70%+)**: 230 mg por 100g",
                "**Feijão preto**: 60 mg por 100g (cozido)",
                "**Banana**: 30 mg por unidade"
            ]
        },
        {
            "tipo": "alerta",
            "variante": "warning",
            "texto": "⚠️ **PROBLEMA**: Solo brasileiro é pobre em magnésio, reduzindo conteúdo em vegetais. Processamento de alimentos remove 80-95% do magnésio. Mesmo com dieta 'saudável', atingir 400 mg/dia é difícil. **Suplementação é recomendada para maioria.**"
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Quanto Magnésio Você Precisa?"
        },
        {
            "tipo": "tabela",
            "colunas": ["Grupo", "Dose Diária Recomendada"],
            "linhas": [
                ["Homens adultos", "400-420 mg"],
                ["Mulheres adultas", "310-320 mg"],
                ["Gestantes", "350-400 mg"],
                ["Atletas/Treino intenso", "500-600 mg"],
                ["Ansiedade/Insônia", "200-400 mg (à noite)"],
                ["Enxaqueca (prevenção)", "400-600 mg"],
                ["Constipação", "300-500 mg (citrato)"]
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Efeitos Colaterais e Contraindicações"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Diarreia**: Efeito colateral mais comum (especialmente citrato e óxido). Reduzir dose ou trocar para glicinato",
                "**Náusea**: Tomar com alimento",
                "**Hipotensão**: Cuidado se tomar medicação para pressão (pode potencializar)",
                "**Toxicidade**: Rara em pessoas com função renal normal. Sintomas: diarreia severa, fraqueza muscular, respiração lenta",
                "**Contraindicação**: Insuficiência renal severa (risco de hipermagnesemia)"
            ]
        },
        {
            "tipo": "alerta",
            "variante": "info",
            "texto": "💡 **SEGURANÇA**: Limite superior tolerável é 350 mg de magnésio suplementar (além da dieta). Doses terapêuticas de 400-600 mg são geralmente seguras, mas começar com 200 mg e aumentar gradualmente."
        },
        {
            "tipo": "cta",
            "texto": "Descubra se você precisa suplementar magnésio com nossa avaliação personalizada!",
            "botao": "Fazer Avaliação Gratuita",
            "link": "/avaliacao"
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Conclusão: Magnésio é o 'Mineral Calmante'"
        },
        {
            "tipo": "paragrafo",
            "texto": "Magnésio é absolutamente essencial para ansiedade, sono, relaxamento muscular e centenas de funções corporais. A deficiência subclínica é epidêmica no Brasil (50-70% da população), e a suplementação é uma das intervenções mais seguras e eficazes para melhorar qualidade de vida."
        },
        {
            "tipo": "paragrafo",
            "texto": "**Protocolo resumido:**\n\n• **Ansiedade + Sono**: Magnésio glicinato 200-400 mg à noite\n• **Cognição**: Magnésio L-treonato 1.500-2.000 mg/dia\n• **Constipação**: Magnésio citrato 300-500 mg/dia\n• **Enxaqueca**: Magnésio óxido ou glicinato 400-600 mg/dia\n• **Horário**: 1-2h antes de dormir\n• **Tempo para efeito**: 1-3 semanas (sintomas agudos) | 8-12 semanas (enxaqueca)"
        },
        {
            "tipo": "paragrafo",
            "texto": "Glicinato é rei para maioria. Treonato é rei para cérebro (se puder pagar). Citrato é rei para intestino preso."
        }
    ]
}

artigos.append(magnesio)

with open('/home/user/suplementaj-/data/artigos.json', 'w', encoding='utf-8') as f:
    json.dump(artigos, f, ensure_ascii=False, indent=2)

print(f"✅ Artigo '{magnesio['titulo']}' adicionado com sucesso!")
print(f"Total de artigos: {len(artigos)}")
