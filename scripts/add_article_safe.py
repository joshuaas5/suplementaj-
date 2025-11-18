#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Script para adicionar artigos de forma segura ao artigos.json
"""

import json
import sys

def add_article(article):
    # Ler arquivo atual
    with open('/home/user/suplementaj-/data/artigos.json', 'r', encoding='utf-8') as f:
        artigos = json.load(f)

    # Validar que não existe slug duplicado
    existing_slugs = [a['slug'] for a in artigos]
    if article['slug'] in existing_slugs:
        print(f"❌ ERRO: Slug '{article['slug']}' já existe!")
        sys.exit(1)

    # Adicionar novo artigo
    artigos.append(article)

    # Salvar com validação JSON
    try:
        with open('/home/user/suplementaj-/data/artigos.json', 'w', encoding='utf-8') as f:
            json.dump(artigos, f, ensure_ascii=False, indent=2)
        print(f"✅ Artigo '{article['titulo']}' adicionado com sucesso!")
        print(f"Total de artigos: {len(artigos)}")
        return True
    except Exception as e:
        print(f"❌ ERRO ao salvar: {e}")
        return False

# Artigo 1: Ferro para Anemia
ferro = {
    "slug": "ferro-anemia-deficiencia-tratamento",
    "titulo": "Ferro para Anemia: Guia Completo de Suplementação e Tratamento",
    "descricao": "Tudo sobre deficiência de ferro: sintomas de anemia, quanto suplementar, sulfato vs bisglicinato, quando tomar e como aumentar absorção.",
    "autor": "Equipe Suplementa Já",
    "data": "2025-01-21",
    "categoria": "Minerais",
    "tags": ["ferro", "anemia", "ferritina", "sulfato ferroso", "bisglicinato", "cansaço"],
    "tempo_leitura": "12 min",
    "imagem": "/images/blog/ferro-anemia.jpg",
    "conteudo": [
        {
            "tipo": "alerta",
            "variante": "danger",
            "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Problema**: Anemia ferropriva é a deficiência nutricional mais comum do mundo (30% das mulheres)\n• **Sintomas**: Cansaço extremo, palidez, unhas quebradiças, queda de cabelo, falta de ar\n• **Dose**: 30-60 mg ferro elementar/dia (prevenção) | 100-200 mg/dia (anemia)\n• **Melhor Forma**: Bisglicinato ferroso (sem constipação) > Sulfato ferroso (mais barato)\n• **Quando Tomar**: Em jejum com vitamina C | Longe de café, chá, cálcio (bloqueiam absorção)\n• **Tempo para Efeito**: 2-4 semanas (energia) | 2-3 meses (ferritina normalizar)\n• **Exame**: Ferritina (ideal >30 ng/mL para mulheres, >50 ng/mL ótimo)\n• **Grupos de Risco**: Mulheres menstruando, gestantes, veganos, doadores de sangue\n• **Custo**: R$15-40/mês"
        },
        {
            "tipo": "paragrafo",
            "texto": "A deficiência de ferro é a deficiência nutricional MAIS COMUM no mundo, afetando 30% das mulheres em idade reprodutiva e 42% das gestantes globalmente. No Brasil, estima-se que 25-35% das mulheres tenham anemia ferropriva. E o pior: muitas pessoas vivem com deficiência de ferro SEM anemia (ferritina baixa mas hemoglobina ainda normal), sofrendo fadiga crônica sem saber a causa."
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Por Que a Deficiência de Ferro é Tão Comum?"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Menstruação**: Mulheres perdem 30-80 mg de ferro por ciclo menstrual",
                "**Dieta pobre em carne vermelha**: Ferro heme (de carnes) é 5x mais absorvível que ferro não-heme (vegetais)",
                "**Vegetarianismo/Veganismo**: Risco 2-3x maior de deficiência",
                "**Gravidez**: Necessidades aumentam 50% (27 mg/dia vs 18 mg/dia)",
                "**Doação de sangue**: Cada doação remove 200-250 mg de ferro",
                "**Problemas gastrointestinais**: Celíaca, Crohn, H. pylori reduzem absorção",
                "**Uso de antiácidos**: IBP (Omeprazol) reduzem absorção em 40-60%"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Sintomas de Deficiência (Que Você Pode Estar Ignorando)"
        },
        {
            "tipo": "paragrafo",
            "texto": "A deficiência de ferro tem 3 estágios progressivos:"
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "Estágio 1: Depleção de Ferro (Ferritina Baixa)"
        },
        {
            "tipo": "lista",
            "itens": [
                "Fadiga leve a moderada (especialmente à tarde)",
                "Dificuldade de concentração e 'névoa mental'",
                "Intolerância ao frio (mãos e pés gelados)",
                "Menor performance em exercícios"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "Estágio 2: Eritropoiese Deficiente (Começando Anemia)"
        },
        {
            "tipo": "lista",
            "itens": [
                "Fadiga severa e fraqueza muscular",
                "Palidez (pele, lábios, parte interna das pálpebras)",
                "Unhas quebradiças, fracas, com estrias",
                "Queda de cabelo acentuada",
                "Palpitações e falta de ar ao esforço"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "Estágio 3: Anemia Ferropriva Severa"
        },
        {
            "tipo": "lista",
            "itens": [
                "Fadiga incapacitante (dificulta atividades diárias)",
                "Tontura e desmaios",
                "Síndrome das pernas inquietas",
                "Picofagia (desejo de comer gelo, terra, amido)",
                "Glossite (língua inchada e dolorida)",
                "Queilite angular (rachaduras nos cantos da boca)",
                "Comprometimento cognitivo (em crianças, pode ser irreversível)"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Ferritina vs Hemoglobina: Entenda a Diferença"
        },
        {
            "tipo": "tabela",
            "colunas": ["Marcador", "O Que Mede", "Valores Ideais", "Quando Cai"],
            "linhas": [
                ["Ferritina", "Estoques de ferro no corpo", "Mulheres: 30-150 ng/mL (ótimo >50) | Homens: 50-200 ng/mL", "PRIMEIRO indicador a cair"],
                ["Hemoglobina", "Ferro nos glóbulos vermelhos", "Mulheres: >12 g/dL | Homens: >13 g/dL", "Cai DEPOIS (já é anemia)"],
                ["Saturação de Transferrina", "Ferro sendo transportado", ">20%", "Estágio intermediário"],
                ["VCM (Volume Corpuscular Médio)", "Tamanho dos glóbulos vermelhos", "80-100 fL", "Reduz na anemia avançada"]
            ]
        },
        {
            "tipo": "alerta",
            "variante": "warning",
            "texto": "⚠️ **CRÍTICO**: Você pode ter deficiência de ferro (ferritina baixa) MAS hemoglobina normal. Isso significa que seus estoques estão vazios, mas o corpo ainda não está anêmico. Trate AGORA antes de progredir para anemia."
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Quanto Ferro Você Precisa Suplementar?"
        },
        {
            "tipo": "tabela",
            "colunas": ["Situação", "Dose de Ferro Elementar", "Forma Recomendada"],
            "linhas": [
                ["Prevenção (grupos de risco)", "30-60 mg/dia", "Bisglicinato ferroso"],
                ["Deficiência leve (ferritina 15-30)", "60-100 mg/dia", "Bisglicinato ou sulfato"],
                ["Anemia moderada (Hb 10-12)", "100-200 mg/dia", "Sulfato ferroso dividido 2x/dia"],
                ["Anemia severa (Hb <10)", "200 mg/dia OU ferro IV", "Sob supervisão médica"],
                ["Gestantes", "27-60 mg/dia", "Bisglicinato (menos efeitos colaterais)"],
                ["Veganos/Vegetarianos", "30-60 mg/dia", "Bisglicinato com vitamina C"]
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Sulfato Ferroso vs Bisglicinato Ferroso: Qual Escolher?"
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "Sulfato Ferroso"
        },
        {
            "tipo": "lista",
            "itens": [
                "✅ Mais barato (R$10-20/mês)",
                "✅ Alta biodisponibilidade",
                "✅ Disponível no SUS",
                "❌ Efeitos colaterais: constipação (50%), náusea, dor estomacal, fezes escuras",
                "❌ Precisa ser tomado em jejum (desconforto gástrico)"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "Bisglicinato Ferroso (Ferro Quelado)"
        },
        {
            "tipo": "lista",
            "itens": [
                "✅ Absorção superior (70-90% vs 10-15% do sulfato)",
                "✅ SEM constipação ou náusea (forma quelada)",
                "✅ Pode ser tomado com alimentos",
                "✅ Não compete com outros minerais",
                "❌ Mais caro (R$30-60/mês)",
                "❌ Doses de ferro elementar geralmente menores por cápsula"
            ]
        },
        {
            "tipo": "alerta",
            "variante": "info",
            "texto": "💡 **Veredicto**: Bisglicinato é superior para uso prolongado (menos desistência por efeitos colaterais). Sulfato ferroso funciona bem se você tolerar os efeitos colaterais e for mais acessível."
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Como Tomar Ferro Para Máxima Absorção"
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "AUMENTAM a Absorção:"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Vitamina C (ácido ascórbico)**: Aumenta absorção em até 300%. Tome 100-200 mg vitamina C junto",
                "**Estômago vazio**: Absorção 2-3x maior (mas pode causar desconforto com sulfato)",
                "**Alimentos ácidos**: Suco de laranja, limão, tomate",
                "**Carne vermelha**: Se comer carne, combinar com suplemento potencializa"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "BLOQUEIAM a Absorção (Evite por 2h Antes/Depois):"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Café e chá**: Taninos reduzem absorção em 60-90%",
                "**Cálcio**: Compete pela absorção. Não tome ferro com leite, queijo ou suplemento de cálcio",
                "**Antiácidos e IBP**: Omeprazol, pantoprazol reduzem absorção em 40-60%",
                "**Fitatos**: Presente em grãos integrais, leguminosas. Deixar de molho ajuda",
                "**Ovos**: Fosvitina no ovo inibe absorção",
                "**Zinco**: Doses altas de zinco competem com ferro"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Protocolo Ideal de Suplementação"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Dose**: Dividir em 2 tomadas se >100 mg/dia (absorção tem limite)",
                "**Horário**: Acordar em jejum com 200 ml de água + 100 mg vitamina C",
                "**Esperar**: 1 hora antes de tomar café da manhã",
                "**Ou**: 2 horas após almoço/jantar se não tolerar em jejum",
                "**Evitar**: Café, chá, leite por 2 horas antes/depois",
                "**Duração**: Mínimo 3 meses (ferritina demora a subir), depois redosar",
                "**Manutenção**: Após normalizar, reduzir para dose preventiva"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Fontes Alimentares de Ferro"
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "Ferro HEME (Mais Biodisponível - 15-35%)"
        },
        {
            "tipo": "lista",
            "itens": [
                "Fígado bovino: 7 mg por 100g",
                "Carne vermelha: 2-3 mg por 100g",
                "Frango (coxas escuras): 1.5 mg por 100g",
                "Peixes (atum, sardinha): 1-2 mg por 100g"
            ]
        },
        {
            "tipo": "heading",
            "nivel": 3,
            "texto": "Ferro NÃO-HEME (Baixa Biodisponibilidade - 2-10%)"
        },
        {
            "tipo": "lista",
            "itens": [
                "Feijão: 1.5 mg por 100g (cozido)",
                "Lentilha: 3 mg por 100g (cozida)",
                "Espinafre: 2.7 mg por 100g",
                "Quinoa: 1.5 mg por 100g",
                "Castanha de caju: 6 mg por 100g"
            ]
        },
        {
            "tipo": "alerta",
            "variante": "warning",
            "texto": "⚠️ **VEGETARIANOS/VEGANOS**: Suas necessidades de ferro são 1.8x MAIORES devido à baixa absorção de ferro não-heme. Recomendação: 32 mg/dia (mulheres) ou 14 mg/dia (homens). Suplementação é altamente recomendada."
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Efeitos Colaterais e Como Minimizá-los"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Constipação (50% com sulfato)**: Aumentar fibras, água, trocar para bisglicinato",
                "**Náusea**: Tomar com pequena quantidade de alimento (mesmo que reduza absorção)",
                "**Fezes escuras/pretas**: Normal com sulfato ferroso, não se assuste",
                "**Dor estomacal**: Reduzir dose, dividir em 2x/dia, trocar para bisglicinato",
                "**Diarreia**: Menos comum, reduzir dose"
            ]
        },
        {
            "tipo": "alerta",
            "variante": "danger",
            "texto": "🚨 **TOXICIDADE**: Doses >45 mg/kg (3.000+ mg) podem ser FATAIS, especialmente em crianças. Mantenha suplementos fora do alcance. Se ingerir acidentalmente, procure emergência IMEDIATAMENTE."
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Quando NÃO Suplementar Ferro (Sem Exame)"
        },
        {
            "tipo": "lista",
            "itens": [
                "**Homens adultos saudáveis**: Risco de sobrecarga de ferro (hemocromatose)",
                "**Pós-menopausa**: A menos que tenha deficiência comprovada",
                "**Doenças inflamatórias ativas**: Ferro pode piorar inflamação (dosar ferritina E PCR)",
                "**Hemocromatose hereditária**: Condição genética de acúmulo de ferro",
                "**Infecções ativas**: Ferro pode alimentar bactérias"
            ]
        },
        {
            "tipo": "cta",
            "texto": "Quer saber se você precisa suplementar ferro? Descubra com nossa avaliação personalizada!",
            "botao": "Fazer Avaliação Gratuita",
            "link": "/avaliacao"
        },
        {
            "tipo": "heading",
            "nivel": 2,
            "texto": "Conclusão: Ferro é Crucial, Mas Precisa de Estratégia"
        },
        {
            "tipo": "paragrafo",
            "texto": "A deficiência de ferro é a causa mais comum de fadiga crônica tratável. Se você é mulher em idade reprodutiva, vegetariano, doador de sangue, gestante ou tem sintomas de deficiência, FAÇA EXAMES (ferritina + hemoglobina completo)."
        },
        {
            "tipo": "paragrafo",
            "texto": "**Protocolo resumido:**\n\n1. Dosar ferritina e hemograma\n2. Se ferritina <30 ng/mL: suplementar 60-100 mg ferro elementar/dia\n3. Tomar em jejum com vitamina C\n4. Evitar café/chá por 2h antes/depois\n5. Redosar após 3 meses\n6. Ajustar para dose de manutenção quando normalizar"
        },
        {
            "tipo": "paragrafo",
            "texto": "Bisglicinato ferroso é a melhor escolha para uso prolongado. Seu corpo (e seu intestino) agradecem."
        }
    ]
}

add_article(ferro)
