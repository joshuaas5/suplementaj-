#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json

with open('/home/user/suplementaj-/data/artigos.json', 'r', encoding='utf-8') as f:
    artigos = json.load(f)

# Lote 3: Últimos 11 artigos para chegar a 30

artigos_novos = [
    {
        "slug": "spirulina-superalimento-proteina-vegana",
        "titulo": "Spirulina: Superalimento ou Hype? Proteína, B12 e Detox",
        "descricao": "Verdade sobre spirulina: benefícios reais, mitos (B12 não funciona!), dose ideal e quando vale a pena.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-02-06",
        "categoria": "Superalimentos",
        "tags": ["spirulina", "proteína vegana", "superalimento", "algas", "detox"],
        "tempo_leitura": "9 min",
        "imagem": "/images/blog/spirulina.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "warning",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Benefícios REAIS**: Proteína completa (60-70%), antioxidantes, reduz colesterol\n• **MITO**: B12 da spirulina NÃO é biodisponível (não serve para veganos)\n• **Dose**: 3-5g/dia (manutenção) | 10g/dia (atletas)\n• **Proteína**: 3g spirulina = 2g proteína (não substitui whey/alimentos)\n• **Detox**: SEM evidência científica sólida\n• **Quando vale**: Veganos (proteína extra), antioxidantes, reduzir colesterol\n• **Qualidade**: Comprar de fontes confiáveis (contaminação por metais)\n• **Sabor**: HORRÍVEL (melhor em cápsulas ou smoothies)\n• **Tempo para efeito**: 4-8 semanas (colesterol, energia)\n• **Custo**: R$40-80/mês"
            }
        ]
    },
    {
        "slug": "maca-peruana-libido-energia-hormônios",
        "titulo": "Maca Peruana: Libido, Energia e Equilíbrio Hormonal",
        "descricao": "Benefícios da maca peruana para libido, energia, fertilidade e hormônios. Dose ideal e cores (amarela, vermelha, preta).",
        "autor": "Equipe Suplementa Já",
        "data": "2025-02-07",
        "categoria": "Adaptógenos",
        "tags": ["maca peruana", "libido", "energia", "fertilidade", "adaptógeno"],
        "tempo_leitura": "8 min",
        "imagem": "/images/blog/maca-peruana.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "info",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Benefícios**: Aumenta libido (homens e mulheres), energia, fertilidade masculina\n• **Dose**: 1.500-3.000 mg/dia (pó ou extrato)\n• **Cores**: Amarela (energia), Vermelha (mulheres, próstata), Preta (homens, fertilidade)\n• **Libido**: Aumenta em 40-50% após 8-12 semanas (evidência moderada)\n• **Fertilidade**: Melhora contagem/motilidade espermática (maca preta)\n• **NÃO é**: Hormônio. Não aumenta testosterona diretamente\n• **Quando tomar**: Pela manhã (pode dar energia/insônia)\n• **Tempo para efeito**: 4-8 semanas (libido), 8-12 semanas (fertilidade)\n• **Efeitos colaterais**: Insônia (se tomar à noite), desconforto gástrico\n• **Custo**: R$30-60/mês"
            }
        ]
    },
    {
        "slug": "tribulus-terrestris-testosterona-libido",
        "titulo": "Tribulus Terrestris: Aumenta Testosterona? Libido e Performance",
        "descricao": "Verdade sobre tribulus: realmente aumenta testosterona? Dose, saponinas, benefícios e limitações.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-02-08",
        "categoria": "Testosterona",
        "tags": ["tribulus terrestris", "testosterona", "libido", "saponinas", "performance"],
        "tempo_leitura": "8 min",
        "imagem": "/images/blog/tribulus.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "warning",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Testosterona**: NÃO aumenta testosterona em homens com níveis normais\n• **Libido**: PODE aumentar libido (via outros mecanismos, não testosterona)\n• **Dose**: 750-1.500 mg/dia (40-45% saponinas)\n• **Funciona para**: Disfunção erétil leve, libido baixa\n• **NÃO funciona para**: Ganho muscular, força (sem efeito anabólico)\n• **Quem pode se beneficiar**: Homens com libido baixa (não hipogonadismo)\n• **Melhor extrato**: 40-45% saponinas (protodioscina)\n• **Tempo para efeito**: 4-8 semanas\n• **Efeitos colaterais**: Desconforto gástrico, insônia\n• **Custo**: R$30-50/mês"
            }
        ]
    },
    {
        "slug": "zma-zinco-magnesio-b6-sono-testosterona",
        "titulo": "ZMA (Zinco + Magnésio + B6): Sono, Testosterona e Recuperação",
        "descricao": "Benefícios do ZMA para atletas: melhora sono, testosterona e recuperação muscular. Dose ideal e quando tomar.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-02-09",
        "categoria": "Suplementos Esportivos",
        "tags": ["zma", "zinco", "magnésio", "vitamina b6", "sono", "testosterona"],
        "tempo_leitura": "7 min",
        "imagem": "/images/blog/zma.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "success",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Composição**: Zinco (30mg) + Magnésio (450mg) + B6 (10.5mg)\n• **Benefícios**: Melhora qualidade do sono, recuperação muscular, testosterona (SE deficiente)\n• **Quem precisa**: Atletas (perdem zinco/magnésio no suor), veganos\n• **Quando tomar**: 30-60 min antes de dormir, ESTÔMAGO VAZIO\n• **Testosterona**: Só aumenta se houver deficiência de zinco/magnésio\n• **Sono**: Magnésio é o principal responsável (efeito relaxante)\n• **Vale a pena?**: Se for atleta ou deficiente em Zn/Mg. Senão, tomar separado é OK\n• **Tempo para efeito**: 1-2 semanas (sono), 4-8 semanas (recuperação/testosterona)\n• **Efeitos colaterais**: Sonhos vívidos (B6), náusea (se tomar com comida)\n• **Custo**: R$40-70/mês"
            }
        ]
    },
    {
        "slug": "bcaa-aminoacidos-massa-muscular-funciona",
        "titulo": "BCAA: Vale a Pena ou é Desperdício de Dinheiro?",
        "descricao": "Verdade sobre BCAA: benefícios reais, quando vale a pena vs quando whey protein é melhor e mais barato.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-02-10",
        "categoria": "Suplementos Esportivos",
        "tags": ["bcaa", "aminoácidos", "massa muscular", "whey protein", "leucina"],
        "tempo_leitura": "9 min",
        "imagem": "/images/blog/bcaa.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "warning",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Composição**: Leucina + Isoleucina + Valina (aminoácidos essenciais)\n• **Benefícios**: Reduz fadiga muscular, PODE prevenir catabolismo (jejum)\n• **Dose**: 5-10g (proporção 2:1:1 leucina:iso:val)\n• **VERDADE DURA**: Whey protein contém BCAA + outros 17 aminoácidos (MELHOR!)\n• **Quando vale**: Treino em jejum, veganos (sem proteína suficiente)\n• **NÃO vale**: Se você já toma whey/come proteína adequada (desperdício de $$$)\n• **Timing**: Intra-treino (durante) OU pré-treino (jejum)\n• **Sabor**: Melhor que whey (não precisa misturar com leite)\n• **Evidência**: FRACA para ganho muscular vs proteína completa\n• **Custo**: R$60-120/mês (CARO vs whey)"
            }
        ]
    },
    {
        "slug": "glucosamina-condroitina-articulacoes-artrite",
        "titulo": "Glucosamina e Condroitina: Funciona para Articulações?",
        "descricao": "Evidências sobre glucosamina/condroitina para osteoartrite, dose ideal, quanto tempo tomar e limitações.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-02-11",
        "categoria": "Articulações",
        "tags": ["glucosamina", "condroitina", "articulações", "osteoartrite", "cartilagem"],
        "tempo_leitura": "10 min",
        "imagem": "/images/blog/glucosamina.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "info",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Funciona?**: Evidência MISTA. Benefício modesto em osteoartrite leve a moderada\n• **Dose**: Glucosamina 1.500mg + Condroitina 1.200mg/dia\n• **Forma**: Sulfato de glucosamina (melhor que HCl)\n• **Tempo para efeito**: 8-12 semanas MÍNIMO (pode levar 6 meses)\n• **Benefícios**: Reduz dor articular em 20-30%, PODE retardar progressão\n• **NÃO é**: Cura. Não regenera cartilagem já perdida\n• **Quem se beneficia**: Osteoartrite leve-moderada de joelho\n• **Limitação**: Não funciona para todos (resposta individual)\n• **Efeitos colaterais**: Raros (desconforto gástrico leve)\n• **Custo**: R$50-100/mês"
            }
        ]
    },
    {
        "slug": "coenzima-q10-coq10-energia-coracao",
        "titulo": "Coenzima Q10 (CoQ10): Energia, Coração e Anti-Envelhecimento",
        "descricao": "Benefícios da CoQ10 para energia mitocondrial, coração, estatinas e dose ideal de ubiquinol vs ubiquinona.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-02-12",
        "categoria": "Energia",
        "tags": ["coenzima q10", "coq10", "energia", "coração", "mitocôndrias", "ubiquinol"],
        "tempo_leitura": "9 min",
        "imagem": "/images/blog/coq10.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "success",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Função**: Produção de energia mitocondrial (ATP), antioxidante\n• **Dose**: 100-200 mg/dia (manutenção) | 300-600 mg/dia (insuficiência cardíaca)\n• **Ubiquinol vs Ubiquinona**: Ubiquinol é forma ativa (melhor para 40+)\n• **CRÍTICO**: Quem toma estatinas (Sinvastatina, Atorvastatina) DEVE tomar CoQ10\n• **Benefícios**: Energia, saúde cardiovascular, fertilidade masculina, enxaqueca\n• **Quando tomar**: Com refeição gordurosa (absorção 3x maior)\n• **Deficiência**: Fadiga, fraqueza muscular, dor (comum com estatinas)\n• **Tempo para efeito**: 4-8 semanas (energia), 8-12 semanas (cardíaco)\n• **Efeitos colaterais**: Raros (desconforto gástrico leve)\n• **Custo**: R$60-120/mês (ubiquinol mais caro)"
            }
        ]
    },
    {
        "slug": "acido-folico-b9-gestantes-gravidez",
        "titulo": "Ácido Fólico (B9): Essencial para Gestantes e Prevenção de Defeitos",
        "descricao": "Por que gestantes DEVEM tomar ácido fólico, dose ideal, metilfolato vs ácido fólico, e mutação MTHFR.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-02-13",
        "categoria": "Vitaminas",
        "tags": ["ácido fólico", "vitamina b9", "gestantes", "gravidez", "metilfolato", "mthfr"],
        "tempo_leitura": "10 min",
        "imagem": "/images/blog/acido-folico.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "danger",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **OBRIGATÓRIO**: Gestantes devem tomar ANTES de engravidar (previne defeitos tubo neural em 70%)\n• **Dose**: 400-800 mcg/dia (gestantes) | 400 mcg/dia (mulheres em idade fértil)\n• **Quando começar**: 3 meses ANTES de engravidar (tubo neural fecha 4 semanas gestação)\n• **Metilfolato vs Ácido Fólico**: Metilfolato é forma ativa (melhor para MTHFR)\n• **MTHFR**: 40% da população tem mutação (não converte ácido fólico bem)\n• **Benefícios**: Previne espinha bífida, anencefalia, lábio leporino\n• **Outros usos**: Reduz homocisteína (saúde cardiovascular), anemia megaloblástica\n• **Alimentos**: Folhas verdes, feijão, lentilha, fígado\n• **Tempo para efeito**: Imediato (proteção desde início)\n• **Custo**: R$10-30/mês"
            }
        ]
    },
    {
        "slug": "vitamina-a-retinol-visao-pele-imunidade",
        "titulo": "Vitamina A (Retinol): Visão, Pele, Imunidade e Quando Evitar",
        "descricao": "Benefícios da vitamina A, diferença entre retinol e beta-caroteno, dose ideal e toxicidade em gestantes.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-02-14",
        "categoria": "Vitaminas",
        "tags": ["vitamina a", "retinol", "beta-caroteno", "visão", "pele", "imunidade"],
        "tempo_leitura": "9 min",
        "imagem": "/images/blog/vitamina-a.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "warning",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Benefícios**: Visão noturna, pele saudável, imunidade, reprodução\n• **Dose**: 700-900 mcg/dia (2.300-3.000 UI)\n• **Retinol vs Beta-caroteno**: Retinol (animal) é ativo. Beta-caroteno (vegetal) precisa conversão (50% das pessoas convertem mal)\n• **CUIDADO GESTANTES**: >3.000 mcg/dia (10.000 UI) causa defeitos congênitos\n• **Deficiência**: Cegueira noturna, pele seca, baixa imunidade, infecções frequentes\n• **Toxicidade**: >10.000 UI/dia cronicamente = dor de cabeça, náusea, queda de cabelo\n• **Alimentos**: Fígado (muito rico!), cenoura, batata-doce, espinafre\n• **Forma**: Beta-caroteno é mais seguro (sem risco toxicidade)\n• **Tempo para efeito**: 2-4 semanas (visão, pele)\n• **Custo**: R$15-30/mês"
            }
        ]
    },
    {
        "slug": "l-carnitina-queima-gordura-performance",
        "titulo": "L-Carnitina: Queima Gordura? Performance e Dose Ideal",
        "descricao": "Verdade sobre L-carnitina para emagrecimento, performance atlética, dose, quando tomar e evidências científicas.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-02-15",
        "categoria": "Emagrecimento",
        "tags": ["l-carnitina", "queima gordura", "emagrecimento", "performance", "energia"],
        "tempo_leitura": "8 min",
        "imagem": "/images/blog/l-carnitina.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "warning",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Queima gordura?**: Evidência FRACA. Efeito mínimo em emagrecimento (0.5-1kg em 8-12 semanas)\n• **Dose**: 500-2.000 mg/dia\n• **Função**: Transporta ácidos graxos para mitocôndrias (produção de energia)\n• **Performance**: PODE melhorar recuperação e reduzir fadiga em atletas\n• **Quando tomar**: Pré-treino (com carboidratos para absorção)\n• **Quem pode se beneficiar**: Veganos (L-carnitina vem de carne), idosos\n• **Limitação**: Corpo produz L-carnitina (não é essencial)\n• **Efeitos colaterais**: Náusea, diarreia (doses >3g), odor corporal\n• **Tempo para efeito**: 4-8 semanas\n• **Custo**: R$40-70/mês | Melhor investir em dieta/treino"
            }
        ]
    },
    {
        "slug": "cafeina-performance-dose-pre-treino",
        "titulo": "Cafeína: Performance, Dose Ideal e Timing para Treino",
        "descricao": "Benefícios da cafeína para performance, dose ergogênica, quando tomar, tolerância e efeitos colaterais.",
        "autor": "Equipe Suplementa Já",
        "data": "2025-02-16",
        "categoria": "Suplementos Esportivos",
        "tags": ["cafeína", "performance", "pré-treino", "energia", "foco"],
        "tempo_leitura": "9 min",
        "imagem": "/images/blog/cafeina.jpg",
        "conteudo": [
            {
                "tipo": "alerta",
                "variante": "success",
                "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Benefícios**: Aumenta força em 5-10%, resistência em 10-20%, foco mental\n• **Dose ergogênica**: 3-6 mg/kg (210-420mg para 70kg)\n• **Quando tomar**: 30-60 min ANTES do treino (pico de absorção)\n• **Tolerância**: Sim. Ciclar 1-2 semanas sem cafeína restaura sensibilidade\n• **Meia-vida**: 5-6 horas (evitar após 14h se dorme 22h)\n• **Efeitos colaterais**: Ansiedade, tremores, insônia, dependência\n• **Melhor que**: Pre-workout caro (cafeína é principal ativo)\n• **Fontes**: Café (80-100mg/xícara), pílulas (100-200mg), pré-treino\n• **Tempo para efeito**: 30-60 minutos (pico)\n• **Custo**: R$10-30/mês (pílulas) | R$0 (café)"
            }
        ]
    }
]

for novo in artigos_novos:
    artigos.append(novo)

with open('/home/user/suplementaj-/data/artigos.json', 'w', encoding='utf-8') as f:
    json.dump(artigos, f, ensure_ascii=False, indent=2)

print(f"✅ Adicionados últimos 11 artigos!")
print(f"🎉 TOTAL FINAL: {len(artigos)} artigos!")
