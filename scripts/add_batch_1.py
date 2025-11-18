#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json

with open('/home/user/suplementaj-/data/artigos.json', 'r', encoding='utf-8') as f:
    artigos = json.load(f)

# Lote 1: 5 artigos super populares

artigos_novos = [
    {
        "slug": "vitamina-c-imunidade-gripes-resfriados",
        "titulo": "Vitamina C: Imunidade, Gripes e Dose Ideal (1g ou 2g?)",
        "descricao": "Descubra a verdade sobre vitamina C: previne gripes? Quanto tomar? Ácido ascórbico vs ester-C. Mega doses funcionam?",
        "autor": "Equipe Suplementa Já",
        "data": "2025-01-26",
        "categoria": "Vitaminas",
        "tags": ["vitamina c", "imunidade", "gripes", "resfriados", "ácido ascórbico"],
        "tempo_leitura": "9 min",
        "imagem": "/images/blog/vitamina-c.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "info",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Previne gripes?**: NÃO previne, mas REDUZ duração em 8-14% (1-2 dias)\n• **Dose**: 500-1.000 mg/dia (manutenção) | 1.000-2.000 mg/dia (resfriado ativo)\n• **Mega doses (>2g)**: Não trazem benefício adicional, apenas diarreia\n• **Melhor forma**: Ácido ascórbico puro (mais barato e eficaz)\n• **Quando tomar**: Dividir dose (500mg 2x/dia = melhor que 1g 1x)\n• **Alimentos**: Laranja, kiwi, pimentão, acerola (1 colher = 1.000mg!)\n• **Sinais de deficiência**: Sangramento gengival, hematomas fáceis, cicatrização lenta\n• **Tempo para efeito**: Imediato (absorção em 2-4h)\n• **Custo**: R$15-30/mês"
            }
        ]
    },
    {
        "slug": "calcio-ossos-osteoporose-qual-tomar",
        "titulo": "Cálcio: Como Prevenir Osteoporose e Qual Suplemento Tomar",
        "descricao": "Guia completo sobre suplementação de cálcio: citrato vs carbonato, dose ideal, quando tomar com vitamina D e K2.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-01-27",
        "categoria": "Minerais",
        "tags": ["cálcio", "ossos", "osteoporose", "vitamina d", "vitamina k2"],
        "tempo_leitura": "10 min",
        "imagem": "/images/blog/calcio.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "warning",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Dose**: 1.000-1.200 mg/dia (mulheres 50+, homens 70+) | 500-800 mg/dia (adultos jovens)\n• **Citrato de Cálcio**: Melhor absorção, pode tomar em jejum, ideal para idosos\n• **Carbonato de Cálcio**: Mais barato, precisa tomar com alimento\n• **CRÍTICO**: Sempre tomar com vitamina D3 (sem D, cálcio não absorve)\n• **IMPORTANTE**: Adicionar vitamina K2 (direciona cálcio para ossos, não artérias)\n• **Quando tomar**: Dividir dose (500mg 2x/dia), LONGE de ferro/zinco\n• **Alimentos**: Leite, queijo, iogurte, tofu, sardinha com ossos\n• **Risco**: Suplementação SEM K2 pode calcificar artérias\n• **Tempo para efeito**: 6-12 meses (densidade óssea)\n• **Custo**: R$20-40/mês"
            }
        ]
    },
    {
        "slug": "biotina-cabelo-unhas-dose-funciona",
        "titulo": "Biotina para Cabelo e Unhas: Funciona? Dose de 5mg ou 10mg?",
        "descricao": "Verdade sobre biotina: realmente faz cabelo crescer? Dose ideal, quanto tempo para ver resultado, mitos e evidências.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-01-28",
        "categoria": "Beleza",
        "tags": ["biotina", "cabelo", "unhas", "vitamina b7", "queda de cabelo"],
        "tempo_leitura": "8 min",
        "imagem": "/images/blog/biotina.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "info",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Funciona?**: SIM, mas APENAS se você tiver deficiência (raro)\n• **Dose**: 30-100 mcg/dia (necessidade) | 2.500-10.000 mcg/dia (suplementos comerciais)\n• **Mega doses (10mg)**: SEM evidência de benefício adicional vs dose baixa\n• **Tempo para efeito**: 3-6 meses (cabelo), 2-3 meses (unhas)\n• **Sinais de deficiência**: Queda de cabelo, unhas quebradiças, dermatite\n• **Quem se beneficia**: Gestantes, alcoolistas, uso prolongado de antibióticos\n• **Problema**: Interfere em exames laboratoriais (troponina, TSH)\n• **Melhor opção**: Complexo B completo (mais eficaz que biotina isolada)\n• **Alimentos**: Ovos, nozes, salmão, abacate\n• **Custo**: R$15-35/mês"
            }
        ]
    },
    {
        "slug": "ashwagandha-estresse-ansiedade-cortisol",
        "titulo": "Ashwagandha: Reduz Estresse e Cortisol? Dose e Efeitos Colaterais",
        "descricao": "Guia completo sobre ashwagandha: benefícios para estresse, ansiedade, testosterona, dose ideal e quando NÃO tomar.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-01-29",
        "categoria": "Adaptógenos",
        "tags": ["ashwagandha", "estresse", "ansiedade", "cortisol", "testosterona", "adaptógeno"],
        "tempo_leitura": "11 min",
        "imagem": "/images/blog/ashwagandha.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "success",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Benefícios**: Reduz estresse/ansiedade em 30-40%, cortisol em 27%, melhora sono\n• **Dose**: 300-600 mg/dia (extrato padronizado withanolides)\n• **Testosterona**: Aumenta em 10-15% em homens com cortisol alto/estresse\n• **KSM-66**: Melhor extrato (mais estudado, 5% withanolides)\n• **Quando tomar**: À noite (causa sonolência) OU pela manhã (se não causar sono)\n• **Tempo para efeito**: 2-4 semanas (estresse), 8-12 semanas (máximo benefício)\n• **Efeitos colaterais**: Sonolência, desconforto gástrico (tomar com alimento)\n• **Não tomar**: Gestantes, autoimune (pode estimular sistema imune)\n• **Ciclar?**: Opcional. Pode usar 8 semanas on, 2 semanas off\n• **Custo**: R$40-80/mês"
            }
        ]
    },
    {
        "slug": "melatonina-sono-insonia-dose-ideal",
        "titulo": "Melatonina: Dose Ideal para Insônia (0.5mg, 3mg ou 10mg?)",
        "descricao": "Descubra a dose certa de melatonina, quando tomar, efeitos colaterais e por que menos pode ser mais eficaz.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-01-30",
        "categoria": "Sono",
        "tags": ["melatonina", "sono", "insônia", "jet lag", "hormônio do sono"],
        "tempo_leitura": "9 min",
        "imagem": "/images/blog/melatonina.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "info",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Dose ideal**: 0.3-1 mg (mais eficaz!) | Doses comerciais 3-10mg são EXCESSIVAS\n• **Quando tomar**: 30-60 min antes de dormir\n• **Para que serve**: Ajusta ritmo circadiano, reduz latência do sono (adormecer mais rápido)\n• **Jet lag**: 0.5-5 mg no horário de dormir do destino (3 dias)\n• **NÃO CAUSA**: Dependência ou supressão de produção natural\n• **Efeitos colaterais**: Sonolência diurna (se dose alta), pesadelos, dor de cabeça\n• **Quem não deve tomar**: Gestantes, crianças (sem orientação), autoimune\n• **Menos é mais**: 0.3mg pode ser TÃO eficaz quanto 5mg (com menos efeitos colaterais)\n• **Tempo para efeito**: 30-60 minutos\n• **Custo**: R$15-30/mês"
            }
        ]
    }
]

for novo in artigos_novos:
    artigos.append(novo)

with open('/home/user/suplementaj-/data/artigos.json', 'w', encoding='utf-8') as f:
    json.dump(artigos, f, ensure_ascii=False, indent=2)

print(f"✅ Adicionados 5 artigos!")
print(f"Total agora: {len(artigos)} artigos")
