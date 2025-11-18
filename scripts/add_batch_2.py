#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json

with open('/home/user/suplementaj-/data/artigos.json', 'r', encoding='utf-8') as f:
    artigos = json.load(f)

# Lote 2: Mais 6 artigos

artigos_novos = [
    {
        "slug": "probioticos-intestino-flora-intestinal",
        "titulo": "Probióticos: Guia Completo para Saúde Intestinal e Imunidade",
        "descricao": "Tudo sobre probióticos: bilhões de UFC, cepas certas, quando tomar, benefícios e como escolher o melhor.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-01-31",
        "categoria": "Saúde Intestinal",
        "tags": ["probióticos", "intestino", "flora intestinal", "imunidade", "digestão"],
        "tempo_leitura": "11 min",
        "imagem": "/images/blog/probioticos.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "success",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Para que serve**: Saúde intestinal, imunidade, digestão, reduz diarreia (antibióticos)\n• **Dose**: 10-50 bilhões UFC/dia (manutenção) | 50-100 bilhões (tratamento)\n• **Cepas importantes**: Lactobacillus acidophilus, Bifidobacterium lactis, Lactobacillus rhamnosus GG\n• **Quando tomar**: Em jejum (30 min antes café) OU antes de dormir\n• **Refrigeração**: Nem sempre necessária (depende da cepa/tecnologia)\n• **Tempo para efeito**: 2-4 semanas (flora normalizar)\n• **Quem precisa**: Pós-antibióticos, SII, intestino irritável, baixa imunidade\n• **Alimentos**: Iogurte, kefir, chucrute, kimchi (mas doses menores)\n• **Custo**: R$40-100/mês"
            }
        ]
    },
    {
        "slug": "vitamina-k2-d3-calcio-ossos-coracao",
        "titulo": "Vitamina K2 + D3: A Dupla Essencial para Ossos e Coração",
        "descricao": "Por que vitamina K2 é crítica com D3, como prevenir calcificação arterial e dose ideal de K2 MK-7.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-02-01",
        "categoria": "Vitaminas",
        "tags": ["vitamina k2", "vitamina d3", "calcio", "ossos", "coração", "mk-7"],
        "tempo_leitura": "10 min",
        "imagem": "/images/blog/vitamina-k2.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "danger",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **CRÍTICO**: Tomar D3 SEM K2 pode calcificar artérias (perigoso!)\n• **Função**: K2 direciona cálcio para ossos (bom) e REMOVE de artérias (proteção)\n• **Dose**: 100-200 mcg/dia (K2 MK-7)\n• **Sempre com**: Vitamina D3 (qualquer dose >2.000 UI precisa K2)\n• **MK-7 vs MK-4**: MK-7 é melhor (meia-vida longa, dose 1x/dia)\n• **Quando tomar**: Com refeição gordurosa (lipossolúvel)\n• **Benefícios**: Reduz calcificação arterial, melhora densidade óssea, saúde cardiovascular\n• **Alimentos**: Natto (100 mcg/porção), queijos fermentados, gema de ovo\n• **Tempo para efeito**: 3-6 meses (marcadores ósseos/cardiovasculares)\n• **Custo**: R$30-60/mês"
            }
        ]
    },
    {
        "slug": "iodo-tireoide-hipotireoidismo-dose",
        "titulo": "Iodo para Tireoide: Previne Hipotireoidismo? Dose e Riscos",
        "descricao": "Descubra se você precisa suplementar iodo, dose ideal, relação com hipotireoidismo e quando evitar.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-02-02",
        "categoria": "Minerais",
        "tags": ["iodo", "tireoide", "hipotireoidismo", "tsh", "hormônios"],
        "tempo_leitura": "9 min",
        "imagem": "/images/blog/iodo.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "warning",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Função**: Essencial para produção de hormônios tireoidianos (T3, T4)\n• **Dose**: 150 mcg/dia (adultos) | 220 mcg (gestantes) | 290 mcg (lactantes)\n• **Deficiência**: Causa hipotireoidismo, bócio, fadiga, ganho de peso\n• **Excesso**: Também causa hipotireoidismo ou hipertireoidismo (paradoxal)\n• **Quem precisa**: Gestantes, veganos, pessoas que não usam sal iodado\n• **Alimentos**: Algas marinhas, peixe, ovos, leite, sal iodado\n• **Cuidado**: NÃO suplementar se tiver Hashimoto ou hipertireoidismo (pode piorar)\n• **Exame**: TSH (triagem), T3/T4 livre, iodo urinário\n• **Tempo para efeito**: 4-8 semanas (TSH normalizar)\n• **Custo**: R$15-30/mês"
            }
        ]
    },
    {
        "slug": "selenio-tireoide-imunidade-antioxidante",
        "titulo": "Selênio: Tireoide, Imunidade e Poder Antioxidante",
        "descricao": "Benefícios do selênio para tireoide, imunidade e fertilidade. Dose de 200 mcg, castanha do pará e suplementação.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-02-03",
        "categoria": "Minerais",
        "tags": ["selênio", "tireoide", "imunidade", "antioxidante", "castanha do pará"],
        "tempo_leitura": "8 min",
        "imagem": "/images/blog/selenio.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "info",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Benefícios**: Tireoide (converte T4 em T3), imunidade, antioxidante potente, fertilidade\n• **Dose**: 55-200 mcg/dia (não exceder 400 mcg)\n• **Castanha do Pará**: 1-2 unidades/dia = 200 mcg (SUFICIENTE!)\n• **Deficiência**: Comum no Brasil (solo pobre), causa hipotireoidismo, baixa imunidade\n• **Hashimoto**: Selênio reduz anticorpos tireoidianos em 50% (200 mcg/dia)\n• **Fertilidade**: Essencial para produção de esperma (homens)\n• **Forma**: Selenometionina (orgânica) > Selenito de sódio\n• **Toxicidade**: >400 mcg/dia causa queda de cabelo, unhas quebradiças, hálito de alho\n• **Tempo para efeito**: 8-12 semanas (tireoide, imunidade)\n• **Custo**: R$0-25/mês (se comer castanhas = grátis!)"
            }
        ]
    },
    {
        "slug": "vitamina-e-antioxidante-pele-fertilidade",
        "titulo": "Vitamina E: Antioxidante para Pele, Fertilidade e Coração",
        "descricao": "Benefícios da vitamina E, dose ideal, tocoferóis vs tocotrienóis, e quando suplementar.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-02-04",
        "categoria": "Vitaminas",
        "tags": ["vitamina e", "antioxidante", "pele", "fertilidade", "tocoferol"],
        "tempo_leitura": "8 min",
        "imagem": "/images/blog/vitamina-e.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "info",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Benefícios**: Antioxidante potente, pele saudável, fertilidade, proteção cardiovascular\n• **Dose**: 15 mg/dia (22.5 UI) necessidade | 200-400 mg (suplementação)\n• **Forma**: d-alfa-tocoferol (natural) > dl-alfa-tocoferol (sintético)\n• **Tocotrienóis**: Forma superior (mais antioxidante), mas mais cara\n• **Quando tomar**: Com refeição gordurosa (lipossolúvel)\n• **Deficiência**: Rara (principalmente má absorção de gorduras)\n• **Sinais**: Fraqueza muscular, problemas de visão, formigamento\n• **Cuidado**: Doses >400 UI podem aumentar risco de AVC hemorrágico\n• **Alimentos**: Amêndoas, avelãs, abacate, espinafre, azeite\n• **Custo**: R$20-40/mês"
            }
        ]
    },
    {
        "slug": "curcuma-curcumina-inflamacao-articulacoes",
        "titulo": "Cúrcuma/Curcumina: Anti-inflamatório Natural para Articulações",
        "descricao": "Benefícios da curcumina, dose com piperina, efeitos anti-inflamatórios e quando realmente funciona.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-02-05",
        "categoria": "Anti-inflamatórios",
        "tags": ["cúrcuma", "curcumina", "inflamação", "articulações", "piperina"],
        "tempo_leitura": "10 min",
        "imagem": "/images/blog/curcuma.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "success",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Benefícios**: Anti-inflamatório potente, dor articular (osteoartrite), digestão\n• **Dose**: 500-1.000 mg curcumina/dia (NÃO cúrcuma em pó, baixa absorção)\n• **CRÍTICO**: Precisa PIPERINA (pimenta preta) - aumenta absorção em 2.000%!\n• **Melhor forma**: Curcumina com Bioperine (piperina padronizada)\n• **Quando tomar**: Com refeição gordurosa\n• **Osteoartrite**: Eficácia similar a ibuprofeno (1.000 mg/dia)\n• **Tempo para efeito**: 4-8 semanas (dor articular)\n• **Efeitos colaterais**: Desconforto gástrico (raro), pode afinar sangue (cuidado com anticoagulantes)\n• **Alimentos**: Açafrão-da-terra (3-5% curcumina) - precisa MUITA quantidade\n• **Custo**: R$30-60/mês"
            }
        ]
    }
]

for novo in artigos_novos:
    artigos.append(novo)

with open('/home/user/suplementaj-/data/artigos.json', 'w', encoding='utf-8') as f:
    json.dump(artigos, f, ensure_ascii=False, indent=2)

print(f"✅ Adicionados mais 6 artigos!")
print(f"Total agora: {len(artigos)} artigos")
