#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json

# Ler arquivo atual
with open('/home/user/suplementaj-/data/artigos.json', 'r', encoding='utf-8') as f:
    artigos = json.load(f)

# Artigo: Zinco
zinco = {
    "slug": "zinco-imunidade-testosterona-pele",
    "titulo": "Zinco: O Mineral da Imunidade, Testosterona e Pele Saudável",
    "descricao": "Tudo sobre zinco: benefícios para imunidade, testosterona, acne, queda de cabelo, doses ideais e como evitar deficiência.",
    "autor": "Equipe Suplementa Já",
    "data": "2025-01-22",
    "categoria": "Minerais",
    "tags": ["zinco", "imunidade", "testosterona", "acne", "gripes", "queda de cabelo"],
    "tempo_leitura": "10 min",
    "imagem": "/images/blog/zinco.jpg",
    "conteudo": [
        {
            "tipo": "alerta",
            "variante": "info",
            "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Para Que Serve**: Imunidade (reduz resfriados em 33%), testosterona, pele/acne, cicatrização, paladar/olfato\n• **Dose**: 15-30 mg/dia (prevenção) | 40-50 mg/dia (deficiência, máx 3 meses)\n• **Melhor Forma**: Bisglicinato de zinco > Picolinato > Gluconato > Óxido de zinco (evitar)\n• **Quando Tomar**: Longe de refeições (2h antes/depois) | Longe de ferro e cálcio\n• **Sintomas de Deficiência**: Gripes frequentes, feridas que não cicatrizam, queda de cabelo, acne, perda de paladar\n• **Tempo para Efeito**: 1-2 semanas (imunidade) | 8-12 semanas (acne, cabelo, testosterona)\n• **Cuidado**: >40 mg/dia por longo prazo pode causar deficiência de cobre\n• **Grupos de Risco**: Vegetarianos (fitatos bloqueiam absorção), idosos, alcoolistas\n• **Custo**: R$20-40/mês"
        },
        {
            "tipo": "paragrafo",
            "texto": "Zinco é o segundo mineral mais abundante no corpo humano (depois do ferro), envolvido em mais de 300 reações enzimáticas. Ele é absolutamente crucial para imunidade, produção hormonal, síntese de proteínas e saúde da pele. Estima-se que 17-30% da população global tenha deficiência de zinco, especialmente vegetarianos, idosos e pessoas com doenças gastrointestinais."
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Benefícios do Zinco Comprovados pela Ciência"
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "1. Imunidade e Prevenção de Gripes/Resfriados"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Reduz duração de resfriados em 33%** se tomado nas primeiras 24h de sintomas",
                "**Reduz frequência de resfriados em 28%** com suplementação regular",
                "Essencial para função de células T e NK (natural killers)",
                "Doses de 75-100 mg/dia durante infecção (máx 2 semanas)",
                "**Pastilhas de zinco** (15-25 mg a cada 2-3h) são mais eficazes para garganta inflamada"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "2. Testosterona e Fertilidade Masculina"
        },
        {
            "tipo": "lista",
            "itens": [
                "Deficiência de zinco reduz testosterona em 40-75%",
                "Suplementação aumenta testosterona em homens deficientes (não em níveis normais)",
                "Melhora contagem, motilidade e morfologia espermática",
                "Bloqueia conversão de testosterona em estrogênio (inibe aromatase)",
                "Dose: 25-30 mg/dia para homens ativos ou com sinais de deficiência"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "3. Acne e Saúde da Pele"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Reduz acne inflamatória em 50-60%** (similar a antibióticos)",
                "Reduz produção de sebo e inflamação",
                "Acelera cicatrização de feridas e queimaduras",
                "Dose para acne: 30-50 mg/dia por 3-6 meses",
                "Pode ser combinado com vitamina A para efeito sinérgico"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "4. Queda de Cabelo"
        },
        {
            "tipo": "lista",
            "itens": [
                "Deficiência de zinco causa eflúvio telógeno (queda difusa)",
                "Essencial para síntese de queratina",
                "Dose: 25-50 mg/dia se deficiência comprovada",
                "Combinar com biotina para melhores resultados",
                "Tempo para efeito: 3-6 meses mínimo"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "5. Outros Benefícios Com Evidência"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Paladar e olfato**: Restaura sentidos perdidos por deficiência ou COVID",
                "**Diabetes**: Melhora sensibilidade à insulina e controle glicêmico",
                "**Visão**: Protege contra degeneração macular (fórmula AREDS2)",
                "**TDAH em crianças**: Doses de 15 mg/dia melhoram sintomas",
                "**Depressão**: Efeito antidepressivo modesto (adjuvante)",
                "**Performance atlética**: Previne queda de testosterona por overtraining"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Sintomas de Deficiência de Zinco"
        },
        {
            "tipo": "lista",
            "itens": [
                "Gripes e resfriados frequentes (>3-4 por ano)",
                "Feridas que demoram para cicatrizar",
                "Acne persistente e inflamação de pele",
                "Queda de cabelo difusa",
                "Unhas com manchas brancas",
                "Perda ou diminuição de paladar e olfato",
                "Diarreia crônica",
                "Baixa libido e disfunção erétil (homens)",
                "Atraso no crescimento (crianças)",
                "Olhos secos e problemas de visão noturna"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Quanto Zinco Você Precisa?"
        },
        {
            "tipo": "tabela",
            "colunas": ["Situação", "Dose de Zinco", "Duração"],
            "linhas": [
                ["Manutenção (homens)", "15-20 mg/dia", "Contínuo"],
                ["Manutenção (mulheres)", "10-15 mg/dia", "Contínuo"],
                ["Atletas/Treino intenso", "25-30 mg/dia", "Contínuo"],
                ["Deficiência comprovada", "40-50 mg/dia", "3-6 meses, depois reduzir"],
                ["Acne/Pele", "30-50 mg/dia", "3-6 meses"],
                ["Resfriado agudo", "75-100 mg/dia (pastilhas)", "5-7 dias máximo"],
                ["Vegetarianos", "20-30 mg/dia", "Contínuo (maior necessidade)"],
                ["Gestantes", "11-15 mg/dia", "Durante gestação"]
            ]
        },
        {
            "tipo": "alerta",
            "variante": "warning",
            "texto": "⚠️ **LIMITE SEGURO**: Não exceder 40 mg/dia por períodos prolongados (>3 meses) sem supervisão. Doses altas crônicas causam deficiência de cobre, supressão imune e anemia."
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Formas de Zinco: Qual Escolher?"
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "Bisglicinato de Zinco (Zinco Quelado)"
        },
        {
            "tipo": "lista",
            "itens": [
                "✅ Melhor absorção (até 40%)",
                "✅ Menor desconforto gástrico",
                "✅ Não causa náusea",
                "❌ Mais caro (R$30-50/mês)"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "Picolinato de Zinco"
        },
        {
            "tipo": "lista",
            "itens": [
                "✅ Boa absorção (20-30%)",
                "✅ Bem estudado",
                "✅ Preço moderado",
                "❌ Pode causar leve náusea em alguns"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "Gluconato de Zinco"
        },
        {
            "tipo": "lista",
            "itens": [
                "✅ Barato (R$15-25/mês)",
                "✅ Eficaz em pastilhas para resfriados",
                "❌ Absorção moderada (10-15%)",
                "❌ Sabor metálico em pastilhas"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "Óxido de Zinco"
        },
        {
            "tipo": "lista",
            "itens": [
                "✅ Mais barato",
                "❌ Absorção muito baixa (<5%)",
                "❌ Não recomendado para suplementação oral",
                "✅ OK para uso tópico (pomadas)"
            ]
        },
        {
            "tipo": "alerta",
            "variante": "info",
            "texto": "💡 **Veredicto**: Bisglicinato de zinco é a melhor escolha para uso diário. Gluconato é ótimo para pastilhas de resfriado. Evite óxido de zinco."
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Como Tomar Zinco Para Máxima Absorção"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Longe de refeições**: 1-2h antes ou 2h depois (absorção 3x maior)",
                "**Se causar náusea**: Tomar com pequena refeição (mesmo que reduza absorção)",
                "**NUNCA com café/chá**: Taninos bloqueiam absorção",
                "**LONGE de ferro e cálcio**: Competem pela mesma via de absorção (esperar 2-4h)",
                "**LONGE de fibras e fitatos**: Reduzem absorção (não tomar com cereais integrais)",
                "**Melhor horário**: Antes de dormir OU ao acordar em jejum",
                "**Com proteína**: Aminoácidos facilitam absorção quelada"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Fontes Alimentares de Zinco"
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "Fontes Animais (Melhor Absorção)"
        },
        {
            "tipo": "lista",
            "itens": [
                "Ostras: 74 mg por 100g (fonte mais rica!)",
                "Carne vermelha: 4-8 mg por 100g",
                "Fígado bovino: 5 mg por 100g",
                "Frango (coxas): 2-3 mg por 100g",
                "Ovos: 1 mg por ovo grande"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "Fontes Vegetais (Absorção Reduzida por Fitatos)"
        },
        {
            "tipo": "lista",
            "itens": [
                "Sementes de abóbora: 7-10 mg por 100g",
                "Castanha de caju: 6 mg por 100g",
                "Grão de bico: 3 mg por 100g (cozido)",
                "Lentilha: 1.3 mg por 100g (cozida)",
                "Quinoa: 1.1 mg por 100g (cozida)"
            ]
        },
        {
            "tipo": "alerta",
            "variante": "warning",
            "texto": "⚠️ **VEGETARIANOS**: Necessidades são 50% MAIORES (22 mg/dia homens, 12 mg/dia mulheres) porque fitatos em grãos/legumes bloqueiam absorção em 50-70%. Deixar de molho e germinar grãos ajuda, mas suplementação é recomendada."
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Zinco e Cobre: O Equilíbrio é Crucial"
        },
        {
            "tipo": "paragrafo",
            "texto": "Zinco e cobre competem pela mesma via de absorção intestinal. Doses altas de zinco (>40 mg/dia por >3 meses) podem causar deficiência de cobre, levando a:"
        },
        {
            "tipo": "lista",
            "itens": [
                "Anemia microcítica (similar à deficiência de ferro)",
                "Neutropenia (baixa imunidade)",
                "Problemas neurológicos (mielopatia)",
                "Fadiga e fraqueza"
            ]
        },
        {
            "tipo": "alerta",
            "variante": "info",
            "texto": "💡 **SOLUÇÃO**: Se tomar >30 mg zinco/dia cronicamente, adicione 1-2 mg de cobre/dia. Proporção ideal: 15:1 ou 10:1 (zinco:cobre)."
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Efeitos Colaterais e Contraindicações"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Náusea**: Efeito colateral mais comum (tomar com alimento ou trocar para bisglicinato)",
                "**Gosto metálico**: Especialmente com pastilhas",
                "**Deficiência de cobre**: Doses >40 mg/dia por >3 meses",
                "**Supressão imune**: Paradoxalmente, doses >100 mg/dia suprimem imunidade",
                "**Interferência medicamentosa**: Antibióticos (tetraciclinas, quinolonas) - esperar 2-4h"
            ]
        },
        {
            "tipo": "cta",
            "texto": "Descubra se você precisa suplementar zinco com nossa avaliação personalizada!",
            "botao": "Fazer Avaliação Gratuita",
            "link": "/avaliacao"
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Conclusão: Zinco é Essencial, Mas Equilíbrio é Tudo"
        },
        {
            "tipo": "paragrafo",
            "texto": "Zinco é absolutamente crucial para imunidade, hormônios, pele e centenas de funções corporais. A deficiência é comum, especialmente em vegetarianos, idosos e pessoas com má absorção intestinal."
        },
        {
            "tipo": "paragrafo",
            "texto": "**Protocolo resumido:**\n\n• **Prevenção geral**: 15-25 mg/dia (bisglicinato)\n• **Horário**: Antes de dormir, longe de refeições\n• **Evitar**: Café, chá, cálcio, ferro por 2h\n• **Cuidado**: Não exceder 40 mg/dia cronicamente sem adicionar cobre\n• **Resfriados**: 75 mg/dia em pastilhas nas primeiras 24h (máx 5-7 dias)"
        },
        {
            "tipo": "paragrafo",
            "texto": "Dose correta + forma certa + timing adequado = imunidade forte, pele saudável e hormônios equilibrados."
        }
    ]
}

artigos.append(zinco)

with open('/home/user/suplementaj-/data/artigos.json', 'w', encoding='utf-8') as f:
    json.dump(artigos, f, ensure_ascii=False, indent=2)

print(f"✅ Artigo '{zinco['titulo']}' adicionado com sucesso!")
print(f"Total de artigos: {len(artigos)}")
