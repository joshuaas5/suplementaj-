#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import sys

def load_artigos():
    with open('data/artigos.json', 'r', encoding='utf-8') as f:
        return json.load(f)

def save_artigos(artigos):
    with open('data/artigos.json', 'w', encoding='utf-8') as f:
        json.dump(artigos, f, ensure_ascii=False, indent=2)
    print("✅ Artigos salvos com sucesso!")

def get_vitamina_c_content():
    return [
        {
            "tipo": "paragrafo",
            "texto": "Vitamina C é provavelmente o suplemento mais popular quando o assunto é imunidade e prevenção de gripes. Mas será que ela realmente funciona? E qual a dose ideal: 500mg, 1g ou 2g por dia? Vamos analisar o que a ciência diz."
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Vitamina C Previne Gripes e Resfriados?"
        },
        {
            "tipo": "paragrafo",
            "texto": "A resposta curta é: NÃO para a maioria das pessoas. Estudos mostram que suplementação regular de vitamina C NÃO reduz a incidência de resfriados na população geral."
        },
        {
            "tipo": "paragrafo",
            "texto": "PORÉM, há benefícios comprovados:"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Reduz a duração**: Encurta resfriados em 8% em adultos e 14% em crianças (cerca de 1-2 dias menos)",
                "**Previne em atletas**: Redução de 50% na incidência em pessoas sob estresse físico extremo (maratonistas, soldados, esquiadores)",
                "**Reduz severidade**: Sintomas menos intensos quando consumida regularmente",
                "**Terapêutico**: Tomar logo no início dos sintomas pode ajudar (doses mais altas de 1-2g/dia)"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Qual a Dose Ideal?"
        },
        {
            "tipo": "tabela",
            "colunas": ["Objetivo", "Dose Diária", "Quando Tomar"],
            "linhas": [
                ["Manutenção geral", "500-1.000 mg", "Uma vez ao dia, com refeição"],
                ["Imunidade reforçada", "1.000-2.000 mg", "Dividir em 2x (manhã e noite)"],
                ["Resfriado ativo", "1.000-2.000 mg", "2-3x ao dia (dividido)"],
                ["Atletas/estresse alto", "1.000-2.000 mg", "Diariamente"],
                ["Fumantes", "1.000-1.500 mg", "Diariamente (maior necessidade)"]
            ]
        },
        {
            "tipo": "alerta",
            "variante": "warning",
            "texto": "⚠️ **Mega doses (>2g/dia)**: Podem causar diarreia, náusea e cálculos renais em pessoas predispostas. O excesso é eliminado pela urina - não há benefício em tomar mais de 2g/dia."
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Ácido Ascórbico vs Ester-C: Qual o Melhor?"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Ácido Ascórbico**: Forma mais comum e barata. Funciona perfeitamente. Pode causar acidez estomacal em doses altas.",
                "**Ester-C (ascorbato de cálcio)**: Tamponado, menos ácido, mais suave para o estômago. Ideal para quem tem sensibilidade gástrica.",
                "**Com bioflavonoides**: Podem aumentar absorção em até 35%. Procure por produtos com citrus bioflavonoids.",
                "**Lipossomal**: Absorção superior (até 90% vs 20% do ácido ascórbico), mas muito mais cara. Vale a pena apenas para doses terapêuticas."
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Outros Benefícios Comprovados"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Antioxidante potente**: Protege células contra danos oxidativos",
                "**Produção de colágeno**: Essencial para pele, cartilagens, ossos e vasos sanguíneos",
                "**Absorção de ferro**: Aumenta absorção de ferro não-heme (de vegetais) em até 3x",
                "**Pressão arterial**: Redução modesta (2-4 mmHg) comprovada em estudos",
                "**Saúde da pele**: Anti-envelhecimento, reduz manchas (uso tópico + oral)"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Quando Tomar e Como Maximizar Absorção"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Dividir a dose**: 500mg 2x ao dia é melhor que 1g de uma vez (melhor absorção)",
                "**Com refeições**: Reduz desconforto estomacal",
                "**Evitar com café**: Pode reduzir absorção",
                "**Junto com ferro**: Se você suplementa ferro, tome vitamina C junto para triplicar absorção"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Fontes Alimentares (Para Complementar)"
        },
        {
            "tipo": "lista",
            "itens": [
                "Acerola: 1.678 mg por 100g (campeã absoluta)",
                "Goiaba: 228 mg por 100g",
                "Pimentão vermelho: 190 mg por 100g",
                "Kiwi: 93 mg por 100g",
                "Laranja: 53 mg por 100g (não é tão rica quanto pensamos!)",
                "Brócolis cozido: 65 mg por 100g"
            ]
        },
        {
            "tipo": "alerta",
            "variante": "info",
            "texto": "💡 **Dica**: Para atingir 1g de vitamina C apenas com alimentos, você precisaria comer 19 laranjas por dia. Suplementação é prática e econômica."
        },
        {
            "tipo": "cta",
            "texto": "Quer descobrir quais suplementos você realmente precisa? Faça nossa avaliação gratuita!",
            "botao": "Fazer Avaliação Gratuita",
            "link": "/avaliacao"
        }
    ]

def get_calcio_content():
    return [
        {
            "tipo": "paragrafo",
            "texto": "Osteoporose afeta 10 milhões de brasileiros e é responsável por 200 mil fraturas por ano. O cálcio é a base da saúde óssea, mas suplementar errado pode fazer mais mal do que bem. Vamos descobrir o que você precisa saber."
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Você Realmente Precisa Suplementar Cálcio?"
        },
        {
            "tipo": "paragrafo",
            "texto": "Antes de sair comprando cálcio, considere:"
        },
        {
            "tipo": "lista",
            "itens": [
                "A maioria das pessoas consegue cálcio suficiente através da dieta",
                "Suplementação excessiva pode AUMENTAR risco cardiovascular",
                "Vitaminas D e K2 são tão importantes quanto o cálcio em si",
                "Exercícios de impacto são essenciais (suplemento sozinho não resolve)"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Quanto Cálcio Você Precisa Por Dia?"
        },
        {
            "tipo": "tabela",
            "colunas": ["Grupo", "Necessidade Diária", "Observação"],
            "linhas": [
                ["Adultos 19-50 anos", "1.000 mg", "Homens e mulheres"],
                ["Mulheres 51+ anos", "1.200 mg", "Pós-menopausa (maior perda óssea)"],
                ["Homens 71+ anos", "1.200 mg", "Risco aumentado de osteoporose"],
                ["Adolescentes 14-18", "1.300 mg", "Formação óssea crítica"],
                ["Gestantes", "1.000 mg", "Manter dieta equilibrada"]
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Citrato vs Carbonato: Qual o Melhor?"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Carbonato de Cálcio**: 40% de cálcio elementar. DEVE ser tomado COM refeição (precisa de ácido gástrico). Mais barato. Pode causar gases/constipação.",
                "**Citrato de Cálcio**: 21% de cálcio elementar. PODE ser tomado com estômago vazio. Melhor absorção. Ideal para idosos ou quem usa antiácidos. Mais caro.",
                "**Recomendação**: Citrato para idosos 60+ ou problemas digestivos. Carbonato para adultos jovens (mais econômico)."
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "A Dupla Essencial: Vitamina D3 + K2"
        },
        {
            "tipo": "paragrafo",
            "texto": "Cálcio SOZINHO pode ser perigoso. Você PRECISA de:"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Vitamina D3**: Sem ela, você absorve apenas 10-15% do cálcio consumido. Com D3, absorção sobe para 30-40%.",
                "**Vitamina K2**: Direciona o cálcio para os ossos e dentes, IMPEDINDO que se deposite nas artérias (calcificação arterial)."
            ]
        },
        {
            "tipo": "alerta",
            "variante": "warning",
            "texto": "⚠️ **CRÍTICO**: Suplementar cálcio sem K2 pode aumentar risco cardiovascular. Estudos mostram associação entre suplementação isolada de cálcio e aumento de 20-30% no risco de infarto."
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Dose Ideal e Como Tomar"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Dose máxima por vez**: 500-600mg (absorção satura acima disso)",
                "**Dividir a dose**: 500mg manhã + 500mg noite é melhor que 1.000mg de uma vez",
                "**Evitar com ferro**: Competem pela absorção. Tomar em horários separados.",
                "**Tomar com magnésio**: Proporção ideal 2:1 (cálcio:magnésio). Ex: 1.000mg cálcio + 500mg magnésio"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Fontes Alimentares (Sempre Preferir!)"
        },
        {
            "tipo": "lista",
            "itens": [
                "Queijos (parmesão, mussarela): 500-1.000 mg por 100g",
                "Iogurte natural: 150 mg por 100g",
                "Leite: 120 mg por 100ml (1 copo = 240mg)",
                "Sardinha com ossos: 380 mg por 100g",
                "Tofu firme: 350 mg por 100g",
                "Brócolis cozido: 40 mg por 100g",
                "Amêndoas: 264 mg por 100g"
            ]
        },
        {
            "tipo": "paragrafo",
            "texto": "**Exemplo prático**: 1 copo de leite (240mg) + 1 fatia de queijo (200mg) + 1 iogurte (150mg) + alimentação normal = facilmente 800-1.000mg/dia SEM suplementação."
        },
        {
            "tipo": "alerta",
            "variante": "info",
            "texto": "💡 **Quando suplementar?**: Apenas se você NÃO consome laticínios, é vegano, idoso com baixa ingestão alimentar, ou tem osteoporose diagnosticada."
        },
        {
            "tipo": "cta",
            "texto": "Descubra se você precisa suplementar cálcio com nossa avaliação personalizada!",
            "botao": "Fazer Avaliação Gratuita",
            "link": "/avaliacao"
        }
    ]

# Vou adicionar as funções para os outros artigos em partes...
# (continua abaixo)

print("Script carregado. Executando em partes para não travar...")
