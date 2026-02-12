# -*- coding: utf-8 -*-
import json

# Carregar nutrientes existentes
with open('data/nutrientes.json', 'r', encoding='utf-8-sig') as f:
    nutrientes = json.load(f)

# EXPANDIR NUTRIENTE: PROTEINA
nutrientes['proteina'] = {
    "slug": "proteina",
    "objetivos": ["ganho-de-massa", "emagrecimento", "performance", "saude"],
    "nome": "Proteína",
    "nome_cientifico": "Polipeptídeos (Cadeias de Aminoácidos)",
    "categoria": "macronutriente",
    "emoji": "",
    "descricao_curta": "O macronutriente construtor: essencial para músculos, imunidade, hormônios e praticamente toda função corporal.",
    "descricao_longa": "A proteína é um dos três macronutrientes essenciais e provavelmente o mais importante para quem busca transformação corporal. Ela é formada por cadeias de aminoácidos - os ''tijolos'' que constroem músculos, anticorpos, hormônios, enzimas, pele, cabelo e unhas. Diferente de gorduras e carboidratos, o corpo não consegue armazenar proteína em excesso, por isso a ingestão diária consistente é crucial. Para hipertrofia, a ciência recomenda 1,6g a 2,2g por kg de peso corporal por dia.",
    "funcoes_corporais": [
        "Síntese e reparo do tecido muscular (hipertrofia e recuperação)",
        "Produção de anticorpos e células de defesa (sistema imunológico)",
        "Formação de hormônios (insulina, hormônio do crescimento)",
        "Produção de enzimas digestivas e metabólicas",
        "Formação de colágeno (pele, tendões, cartilagens)",
        "Transporte de nutrientes no sangue (albumina, hemoglobina)",
        "Manutenção do equilíbrio de fluidos corporais",
        "Saciedade e controle do apetite (efeito termogênico alto)"
    ],
    "fontes_alimentares": [
        {"alimento": "Peito de frango (100g)", "quantidade": 31, "unidade": "g", "percentual_vd": 62},
        {"alimento": "Carne bovina magra (100g)", "quantidade": 26, "unidade": "g", "percentual_vd": 52},
        {"alimento": "Salmão (100g)", "quantidade": 25, "unidade": "g", "percentual_vd": 50},
        {"alimento": "Ovos (2 unidades)", "quantidade": 12, "unidade": "g", "percentual_vd": 24},
        {"alimento": "Whey Protein (1 dose)", "quantidade": 24, "unidade": "g", "percentual_vd": 48},
        {"alimento": "Iogurte grego (170g)", "quantidade": 17, "unidade": "g", "percentual_vd": 34},
        {"alimento": "Queijo cottage (100g)", "quantidade": 11, "unidade": "g", "percentual_vd": 22},
        {"alimento": "Lentilha cozida (100g)", "quantidade": 9, "unidade": "g", "percentual_vd": 18},
        {"alimento": "Tofu firme (100g)", "quantidade": 8, "unidade": "g", "percentual_vd": 16}
    ],
    "dosagem": {
        "rda": {
            "sedentarios": {"valor": 0.8, "unidade": "g/kg", "nota": "Mínimo para manutenção básica (não ótimo)"},
            "ativos_moderados": {"valor": 1.2, "unidade": "g/kg", "nota": "Exercício regular 3-4x/semana"},
            "hipertrofia": {"valor": 1.6, "unidade": "g/kg", "nota": "Faixa ideal para ganho de massa (1.6-2.2g/kg)"},
            "atletas_intensos": {"valor": 2.0, "unidade": "g/kg", "nota": "Treino intenso, 2x/dia ou competição"},
            "idosos": {"valor": 1.2, "unidade": "g/kg", "nota": "Maior necessidade devido à resistência anabólica"}
        },
        "suplementacao_preventiva": {"min": 20, "max": 40, "unidade": "g/dose", "nota": "Dose típica de 1-2 scoops de Whey"},
        "suplementacao_terapeutica": {"min": 40, "max": 60, "unidade": "g/dose", "nota": "Pós-cirúrgico, queimados, sarcopenia severa"},
        "limite_superior": None,
        "nota_limite": "Não há limite tóxico estabelecido. Doses até 3g/kg são seguras em pessoas saudáveis. Excesso não causa dano renal em rins saudáveis - este é um mito."
    },
    "deficiencia": {
        "prevalencia": "Rara em países desenvolvidos, mas comum em: idosos, dietas restritivas, pós-bariátrica, veganos mal planejados",
        "sintomas": [
            "Perda de massa muscular (atrofia/sarcopenia)",
            "Fraqueza e fadiga persistente",
            "Queda de cabelo e unhas quebradiças",
            "Imunidade baixa (infecções frequentes)",
            "Cicatrização lenta de feridas",
            "Fome constante e dificuldade de saciedade",
            "Edema (inchaço) em casos graves (kwashiorkor)",
            "Perda de densidade óssea"
        ],
        "causas": [
            "Ingestão alimentar insuficiente",
            "Dietas muito restritivas (crash diets)",
            "Vegetarianismo/veganismo mal planejado",
            "Idade avançada (anorexia do envelhecimento)",
            "Cirurgia bariátrica (redução da absorção)",
            "Doenças intestinais (doença celíaca, Crohn)",
            "Alcoolismo crônico",
            "Câncer e doenças consumptivas"
        ]
    },
    "excesso": {
        "toxicidade": "Muito baixa em pessoas saudáveis",
        "sintomas": [
            "Desidratação (ureia aumenta necessidade de água)",
            "Desconforto gastrointestinal (gases, inchaço)",
            "Ganho de gordura (excesso calórico)",
            "Mau hálito (cetose proteica em casos extremos)"
        ],
        "nota": "MITO DESMENTIDO: Proteína alta NÃO causa dano renal em pessoas com rins saudáveis. Dezenas de estudos confirmam isso. Apenas quem JÁ tem doença renal deve limitar."
    },
    "interacoes": {
        "medicamentos_reduzem_absorcao": [],
        "nutrientes_sinergicos": [
            "Carboidratos - liberam insulina que potencializa absorção de aminoácidos",
            "Leucina - aminoácido que ativa a síntese proteica (mTOR)",
            "Vitamina D - melhora eficiência da síntese muscular",
            "Creatina - aumenta força e volume celular, sinérgico com proteína",
            "HMB - pode reduzir catabolismo em déficit calórico"
        ],
        "nota_importante": "A proteína deve ser distribuída ao longo do dia (20-40g por refeição) para máxima síntese. Doses únicas muito altas (>60g) não são tão eficientes."
    },
    "grupos_risco": [
        {"grupo": "Idosos (60+ anos)", "motivo": "Resistência anabólica - precisam de mais proteína para o mesmo estímulo", "prevalencia": "40-50% têm ingestão inadequada"},
        {"grupo": "Veganos/vegetarianos", "motivo": "Fontes vegetais são menos densas e menos biodisponíveis", "prevalencia": "Risco moderado se não planejado"},
        {"grupo": "Pós-bariátrica", "motivo": "Capacidade gástrica reduzida, má absorção", "prevalencia": "70%+ têm deficiência sem suplementação"},
        {"grupo": "Atletas de endurance", "motivo": "Catabolismo aumentado por treinos longos", "prevalencia": "Comum se dieta não for ajustada"},
        {"grupo": "Pessoas em dieta restritiva", "motivo": "Déficit calórico severo leva a perda muscular", "prevalencia": "Alta se proteína não for priorizada"}
    ],
    "formas_suplemento": [
        {"forma": "Whey Protein (Concentrado/Isolado/Hidrolisado)", "descricao": "Proteína do soro do leite. Absorção rápida, alto valor biológico.", "nota": "Melhor para pós-treino e ao acordar. A escolha nº1."},
        {"forma": "Caseína Micelar", "descricao": "Proteína do leite de absorção lenta (6-7 horas).", "nota": "Ideal antes de dormir. Anti-catabólica."},
        {"forma": "Albumina (Clara de Ovo)", "descricao": "Proteína da clara desidratada. Absorção média.", "nota": "Melhor custo-benefício. Pode causar gases."},
        {"forma": "Proteína Vegetal (Ervilha + Arroz)", "descricao": "Combinação que fornece perfil completo de aminoácidos.", "nota": "Ideal para veganos. Hipoalergênica."},
        {"forma": "Beef Protein (Carne)", "descricao": "Proteína isolada da carne bovina.", "nota": "Para intolerantes/alérgicos ao leite."},
        {"forma": "Colágeno Hidrolisado", "descricao": "Proteína estrutural.", "nota": "Foco em pele, cabelo, articulações. NÃO para hipertrofia (baixa leucina)."}
    ],
    "evidencias": [
        {
            "id": "ref-prot-001",
            "titulo": "A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains",
            "autores": "Morton RW, Murphy KT, et al.",
            "revista": "British Journal of Sports Medicine",
            "ano": 2018,
            "tipo": "Meta-análise",
            "doi": "10.1136/bjsports-2017-097608",
            "citacao_chave": "Suplementação de proteína aumenta significativamente os ganhos de massa muscular e força durante treinamento de resistência, com benefício máximo até ~1.6g/kg/dia.",
            "relevancia": ["hipertrofia", "forca", "dosagem"]
        },
        {
            "id": "ref-prot-002",
            "titulo": "Dietary protein and muscle mass: translating science to application and health benefit",
            "autores": "Phillips SM, et al.",
            "revista": "Nutrients",
            "ano": 2019,
            "tipo": "Revisão",
            "citacao_chave": "A distribuição de proteína ao longo do dia (20-40g por refeição) é mais eficaz para síntese muscular do que grandes doses únicas.",
            "relevancia": ["timing", "distribuicao"]
        },
        {
            "id": "ref-prot-003",
            "titulo": "A High Protein Diet Has No Harmful Effects: A One-Year Crossover Study in Resistance-Trained Males",
            "autores": "Antonio J, et al.",
            "revista": "Journal of Nutrition and Metabolism",
            "ano": 2016,
            "tipo": "Estudo Clínico",
            "citacao_chave": "Ingestão de até 2.5-3.0g/kg/dia de proteína por 1 ano não causou efeitos adversos em marcadores renais, hepáticos ou lipídicos.",
            "relevancia": ["seguranca", "rins"]
        }
    ],
    "mitos_e_verdades": [
        {
            "mito": "Proteína em excesso causa pedra nos rins",
            "verdade": "FALSO em pessoas saudáveis. Estudos com até 3g/kg/dia não mostraram dano renal. Apenas quem JÁ tem doença renal pré-existente deve limitar.",
            "fonte": "Antonio J et al., 2016"
        },
        {
            "mito": "O corpo só absorve 30g de proteína por vez",
            "verdade": "PARCIALMENTE FALSO. O corpo absorve toda a proteína ingerida. O que é verdade é que a síntese muscular máxima ocorre com 20-40g por refeição. O excesso é usado para outras funções ou oxidado como energia.",
            "fonte": "Schoenfeld BJ, Aragon AA, 2018"
        },
        {
            "mito": "Proteína vegetal não serve para ganhar massa",
            "verdade": "FALSO. Quando a dose é equalizada e combinações são feitas (ex: ervilha + arroz), proteínas vegetais são tão eficazes quanto animais para hipertrofia.",
            "fonte": "Messina M et al., 2018"
        }
    ],
    "seo": {
        "meta_title": "Proteína: O Guia Completo - Quanto Comer, Fontes, Suplementos e Mitos",
        "meta_description": "Tudo sobre proteína: quanto você precisa por dia para ganhar massa (1.6-2.2g/kg), melhores fontes alimentares, diferença entre Whey/Caseína/Albumina, e mitos desmentidos pela ciência.",
        "keywords": ["proteína", "proteína para ganhar massa", "quanto de proteína por dia", "whey protein", "suplemento de proteína", "proteína e hipertrofia", "proteína para emagrecer"]
    },
    "afiliados": {
        "amazon": [
            {"nome": "Whey Protein Concentrado Dux 900g", "link": "https://www.amazon.com.br/s?k=whey+protein+dux&tag=105c91-20", "badge": "Melhor Sabor", "preco_aprox": 149},
            {"nome": "Whey Protein Growth 1kg", "link": "https://www.amazon.com.br/s?k=whey+protein+growth&tag=105c91-20", "badge": "Custo Benefício", "preco_aprox": 115},
            {"nome": "Caseína Probiótica 900g", "link": "https://www.amazon.com.br/s?k=caseina+probiotica&tag=105c91-20", "badge": "Para Dormir", "preco_aprox": 150}
        ]
    }
}

# EXPANDIR NUTRIENTE: BCAA
nutrientes['bcaa'] = {
    "slug": "bcaa",
    "objetivos": ["performance", "ganho-de-massa", "recuperacao"],
    "nome": "BCAA",
    "nome_cientifico": "Aminoácidos de Cadeia Ramificada (L-Leucina, L-Isoleucina, L-Valina)",
    "categoria": "aminoacido",
    "emoji": "",
    "descricao_curta": "O trio de aminoácidos essenciais mais importantes para síntese muscular - mas você realmente precisa?",
    "descricao_longa": "Os BCAAs (Branched-Chain Amino Acids) são três aminoácidos essenciais: Leucina, Isoleucina e Valina. Eles representam ~35% dos aminoácidos essenciais no músculo e têm uma característica única: são metabolizados diretamente no músculo, não no fígado. A Leucina é especialmente importante por ser o principal ativador da via mTOR (síntese proteica). MAS - e esse é um grande MAS - se você já consome proteína suficiente (especialmente Whey), suplementar BCAA isolado é redundante e provavelmente dinheiro jogado fora.",
    "funcoes_corporais": [
        "Ativação da via mTOR (gatilho para síntese proteica muscular) - principalmente pela LEUCINA",
        "Redução da fadiga central durante exercício (compete com triptofano no cérebro)",
        "Fonte de energia muscular durante exercício prolongado",
        "Redução da dor muscular pós-treino (DOMS) - evidência moderada",
        "Preservação de massa magra em déficit calórico - evidência limitada"
    ],
    "fontes_alimentares": [
        {"alimento": "Peito de frango (100g)", "quantidade": 5.5, "unidade": "g de BCAA", "percentual_vd": 0},
        {"alimento": "Carne bovina (100g)", "quantidade": 5.2, "unidade": "g de BCAA", "percentual_vd": 0},
        {"alimento": "Whey Protein (1 dose 30g)", "quantidade": 5.5, "unidade": "g de BCAA", "percentual_vd": 0},
        {"alimento": "Ovos (2 unidades)", "quantidade": 2.6, "unidade": "g de BCAA", "percentual_vd": 0},
        {"alimento": "Salmão (100g)", "quantidade": 4.5, "unidade": "g de BCAA", "percentual_vd": 0},
        {"alimento": "Leite (300ml)", "quantidade": 2, "unidade": "g de BCAA", "percentual_vd": 0}
    ],
    "dosagem": {
        "rda": {"adultos": {"valor": 0, "unidade": "g", "nota": "Não há RDA específica - incluído na necessidade proteica total"}},
        "suplementacao_preventiva": {"min": 5, "max": 10, "unidade": "g", "nota": "Se for suplementar, esta é a dose padrão"},
        "suplementacao_terapeutica": {"min": 10, "max": 20, "unidade": "g", "nota": "Atletas de endurance extremo ou treino em jejum prolongado"},
        "limite_superior": None,
        "nota_limite": "Seguro em doses normais. Não há toxicidade conhecida."
    },
    "deficiencia": {
        "prevalencia": "Extremamente rara se você come proteína suficiente",
        "sintomas": ["Os mesmos da deficiência proteica geral (perda muscular, fadiga, imunidade baixa)"]
    },
    "excesso": {
        "toxicidade": "Muito baixa",
        "sintomas": ["Desconforto gástrico em doses muito altas", "Competição na absorção de outros aminoácidos"]
    },
    "interacoes": {
        "medicamentos_reduzem_absorcao": [],
        "nutrientes_sinergicos": [
            "Carboidratos - a insulina liberada ajuda na captação muscular dos BCAAs",
            "Vitamina B6 - necessária para metabolismo de aminoácidos"
        ]
    },
    "grupos_risco": [],
    "formas_suplemento": [
        {"forma": "BCAA em Pó", "descricao": "Melhor custo-benefício, absorção rápida, sabores variados.", "nota": "Ideal para beber durante o treino"},
        {"forma": "BCAA em Cápsulas", "descricao": "Prático, mas caro. Precisa de muitas cápsulas para dose efetiva.", "nota": "4-6 cápsulas = ~3g de BCAA"}
    ],
    "evidencias": [
        {
            "id": "ref-bcaa-001",
            "titulo": "Branched-chain amino acids and muscle protein synthesis in humans: myth or reality?",
            "autores": "Wolfe RR",
            "revista": "Journal of the International Society of Sports Nutrition",
            "ano": 2017,
            "tipo": "Revisão Crítica",
            "citacao_chave": "A suplementação de BCAAs isolados não é capaz de promover síntese proteica muscular máxima porque faltam os outros aminoácidos essenciais. Um Whey Protein completo é superior.",
            "relevancia": ["eficacia", "comparacao"]
        },
        {
            "id": "ref-bcaa-002",
            "titulo": "Effects of BCAA supplementation on exercise performance and fatigue",
            "revista": "Nutrients",
            "ano": 2020,
            "tipo": "Meta-análise",
            "citacao_chave": "BCAAs podem reduzir a percepção de fadiga durante exercício prolongado, mas não melhoram performance de força ou hipertrofia comparado a proteína completa.",
            "relevancia": ["fadiga", "performance"]
        }
    ],
    "quando_faz_sentido": [
        " Treino em JEJUM prolongado (>12h) - previne catabolismo",
        " Exercício de endurance muito longo (>2h) - reduz fadiga central",
        " Incapacidade de consumir proteína completa no peri-treino",
        " Você GOSTA do sabor e usa como ''bebida de treino'' (ok, mas saiba que é opcional)"
    ],
    "quando_nao_faz_sentido": [
        " Você já toma Whey Protein (o Whey já tem ~5.5g de BCAA por dose)",
        " Você come proteína suficiente ao longo do dia (já está coberto)",
        " Seu objetivo é hipertrofia e você treina alimentado (não precisa)",
        " Você quer ''economizar'' trocando Whey por BCAA (péssima ideia - Whey é melhor)"
    ],
    "seo": {
        "meta_title": "BCAA: Funciona ou É Dinheiro Jogado Fora? A Verdade Científica",
        "meta_description": "BCAA vale a pena? Entenda quando ele funciona (treino em jejum, endurance) e quando é redundante. Comparação honesta com Whey Protein. Guia baseado em ciência.",
        "keywords": ["bcaa", "bcaa funciona", "leucina", "aminoacidos essenciais", "bcaa ou whey", "bcaa para que serve", "suplemento bcaa"]
    },
    "afiliados": {
        "amazon": [
            {"nome": "BCAA 2400 - 100 Cápsulas - Probiótica", "link": "https://www.amazon.com.br/s?k=BCAA+2400+Probiotica&tag=105c91-20", "badge": "Mais Vendido", "preco_aprox": 35},
            {"nome": "BCAA Powder 300g - Max Titanium", "link": "https://www.amazon.com.br/s?k=BCAA+powder+max+titanium&tag=105c91-20", "badge": "Melhor em Pó", "preco_aprox": 55}
        ]
    },
    "veredicto_honesto": "Para a maioria das pessoas que já consome proteína adequada (1.6g+/kg) e toma Whey, BCAA é redundante. O Whey já contém todos os BCAAs necessários. BCAA faz sentido em nichos específicos: treino em jejum, endurance extremo, ou impossibilidade de consumir proteína completa. Se você tem orçamento limitado, invista em Whey, não em BCAA."
}

# EXPANDIR NUTRIENTE: GLUTAMINA
nutrientes['glutamina'] = {
    "slug": "glutamina",
    "objetivos": ["imunidade", "saude-intestinal", "recuperacao"],
    "nome": "Glutamina",
    "nome_cientifico": "L-Glutamina",
    "categoria": "aminoacido",
    "emoji": "",
    "descricao_curta": "O aminoácido mais abundante do corpo - combustível para intestino e sistema imune, mas talvez não para músculos.",
    "descricao_longa": "A Glutamina é o aminoácido livre mais abundante no plasma humano (~60% do pool de aminoácidos). Ela é considerada ''condicionalmente essencial'' - em situações de estresse extremo (trauma, queimaduras, cirurgias, overtraining), a demanda supera a produção e a suplementação faz sentido. Sua função principal NÃO é construir músculo, mas sim alimentar células de divisão rápida: enterócitos (células intestinais) e leucócitos (células de defesa). Por isso é usada em protocolos de saúde intestinal e imunidade, não hipertrofia.",
    "funcoes_corporais": [
        "Combustível primário para enterócitos (células intestinais) - manutenção da barreira intestinal",
        "Combustível para linfócitos e macrófagos (sistema imunológico)",
        "Precursor de glutationa (antioxidante mestre do corpo)",
        "Regulação do equilíbrio ácido-base renal",
        "Transporte de nitrogênio entre tecidos",
        "Pode ter papel na recuperação muscular em condições de estresse extremo"
    ],
    "fontes_alimentares": [
        {"alimento": "Carne bovina (100g)", "quantidade": 1.2, "unidade": "g", "percentual_vd": 0},
        {"alimento": "Frango (100g)", "quantidade": 1.0, "unidade": "g", "percentual_vd": 0},
        {"alimento": "Peixe (100g)", "quantidade": 0.9, "unidade": "g", "percentual_vd": 0},
        {"alimento": "Ovos (2 unidades)", "quantidade": 0.8, "unidade": "g", "percentual_vd": 0},
        {"alimento": "Leite (200ml)", "quantidade": 0.5, "unidade": "g", "percentual_vd": 0},
        {"alimento": "Whey Protein (1 dose)", "quantidade": 4.0, "unidade": "g", "percentual_vd": 0}
    ],
    "dosagem": {
        "rda": {"adultos": {"valor": 0, "unidade": "g", "nota": "Não essencial em condições normais - corpo produz suficiente"}},
        "suplementacao_preventiva": {"min": 5, "max": 10, "unidade": "g", "nota": "Para imunidade ou saúde intestinal"},
        "suplementacao_terapeutica": {"min": 15, "max": 30, "unidade": "g", "nota": "Protocolos hospitalares (queimados, UTI)"},
        "limite_superior": None,
        "nota_limite": "Seguro até 40g/dia em doses fracionadas"
    },
    "deficiencia": {
        "prevalencia": "Rara em condições normais. Comum em: trauma, queimaduras, cirurgias, overtraining, maratonistas",
        "sintomas": [
            "Infecções recorrentes (gripes frequentes após treinos intensos)",
            "Permeabilidade intestinal aumentada (''leaky gut'')",
            "Má absorção de nutrientes",
            "Catabolismo muscular acentuado"
        ]
    },
    "excesso": {
        "toxicidade": "Nenhuma conhecida em doses normais",
        "sintomas": ["Sede excessiva (muito raro)"]
    },
    "interacoes": {
        "medicamentos_reduzem_absorcao": [],
        "nutrientes_sinergicos": [
            "Probióticos - efeito sinérgico na saúde intestinal",
            "Zinco - potencializa efeitos na imunidade",
            "Vitamina D - trabalham juntos no sistema imune"
        ]
    },
    "grupos_risco": [
        {"grupo": "Atletas de endurance", "motivo": "Supressão imunológica pós-exercício prolongado", "prevalencia": "Alta"},
        {"grupo": "Pacientes hospitalares", "motivo": "Catabolismo severo", "prevalencia": "Muito alta"},
        {"grupo": "Pessoas com SII ou disbiose", "motivo": "Necessidade aumentada para reparo intestinal", "prevalencia": "Moderada"}
    ],
    "formas_suplemento": [
        {"forma": "L-Glutamina em pó (100% pura)", "descricao": "Sem sabor, alta pureza, melhor custo.", "nota": "A forma recomendada. Misture com água ou suco."},
        {"forma": "Glutamina em cápsulas", "descricao": "Conveniente mas cara.", "nota": "Muitas cápsulas para dose efetiva"}
    ],
    "evidencias": [
        {
            "id": "ref-glut-001",
            "titulo": "Glutamine as an immunomodulator in critically ill patients",
            "revista": "Critical Care Medicine",
            "ano": 2021,
            "tipo": "Revisão",
            "citacao_chave": "Suplementação de glutamina reduz complicações infecciosas e tempo de internação em pacientes críticos.",
            "relevancia": ["imunidade", "hospitalar"]
        },
        {
            "id": "ref-glut-002",
            "titulo": "Effects of glutamine supplementation on exercise-induced immunodepression",
            "revista": "Journal of Applied Physiology",
            "ano": 2019,
            "tipo": "Estudo Clínico",
            "citacao_chave": "Maratonistas suplementando glutamina tiveram menor incidência de infecções respiratórias nas 2 semanas pós-prova.",
            "relevancia": ["endurance", "imunidade"]
        },
        {
            "id": "ref-glut-003",
            "titulo": "Glutamine supplementation and resistance training",
            "revista": "Journal of Strength and Conditioning Research",
            "ano": 2018,
            "tipo": "Revisão",
            "citacao_chave": "Não há evidência de que glutamina melhore hipertrofia ou força em atletas de musculação bem nutridos.",
            "relevancia": ["hipertrofia", "musculacao"]
        }
    ],
    "quando_faz_sentido": [
        " Atletas de endurance (maratonistas, triatletas) - reduz infecções pós-prova",
        " Síndrome do intestino irritável (SII) ou permeabilidade intestinal",
        " Pós-operatório ou recuperação de trauma",
        " Overtraining - sinais de supressão imune (gripes recorrentes)",
        " Uso prolongado de anti-inflamatórios (danificam mucosa intestinal)"
    ],
    "quando_nao_faz_sentido": [
        " Objetivo é HIPERTROFIA e você está bem nutrido (glutamina não ajuda)",
        " Você já toma Whey Protein (tem ~4g de glutamina por dose)",
        " Você é saudável, treina moderadamente e não tem problemas intestinais",
        " Você espera que glutamina ''construa músculo'' (não é a função dela)"
    ],
    "seo": {
        "meta_title": "Glutamina: Para Que Serve? Imunidade, Intestino e Mitos Sobre Hipertrofia",
        "meta_description": "Glutamina funciona para ganhar massa? NÃO. Funciona para imunidade e intestino? SIM. Entenda a ciência por trás, quando suplementar, e quando é dinheiro jogado fora.",
        "keywords": ["glutamina", "l-glutamina", "glutamina para que serve", "glutamina intestino", "glutamina imunidade", "glutamina hipertrofia"]
    },
    "afiliados": {
        "amazon": [
            {"nome": "Glutamina 300g - Max Titanium", "link": "https://www.amazon.com.br/s?k=glutamina+max+titanium&tag=105c91-20", "badge": "Mais Vendida", "preco_aprox": 49},
            {"nome": "L-Glutamina 300g - Probiótica", "link": "https://www.amazon.com.br/s?k=glutamina+probiotica&tag=105c91-20", "badge": "Boa Qualidade", "preco_aprox": 45}
        ]
    },
    "veredicto_honesto": "Glutamina NÃO é para hipertrofia - esqueça esse uso. Mas ela tem valor real para: (1) atletas de endurance preocupados com quedas de imunidade pós-prova, (2) pessoas com problemas intestinais (SII, leaky gut), (3) recuperação de traumas/cirurgias. Se você é um praticante casual de musculação sem problemas de saúde, provavelmente não precisa."
}

# EXPANDIR NUTRIENTE: CASEINA
nutrientes['caseina'] = {
    "slug": "caseina",
    "objetivos": ["ganho-de-massa", "saciedade", "recuperacao"],
    "nome": "Caseína",
    "nome_cientifico": "Fosfoproteína Micelar do Leite",
    "categoria": "proteina",
    "emoji": "",
    "descricao_curta": "A proteína do sono: absorção lenta de 6-7 horas, ideal para alimentar seus músculos enquanto você dorme.",
    "descricao_longa": "A caseína representa 80% da proteína do leite (o Whey são os outros 20%). Sua característica única é a formação de um ''gel'' no estômago ao entrar em contato com o ácido gástrico. Isso faz a digestão ser extremamente lenta - os aminoácidos são liberados gradualmente por 5-7 horas. Por isso, a caseína é conhecida como proteína ''time-release'' ou ''anti-catabólica'', sendo a escolha ideal para antes de dormir, quando você passará 6-8 horas sem comer.",
    "funcoes_corporais": [
        "Fornecimento lento e sustentado de aminoácidos (5-7 horas)",
        "Prevenção do catabolismo muscular durante jejum prolongado (sono)",
        "Alta saciedade - ajuda em dietas de emagrecimento",
        "Fonte rica de cálcio (bom para ossos)",
        "Síntese proteica muscular durante o sono"
    ],
    "fontes_alimentares": [
        {"alimento": "Queijo cottage (100g)", "quantidade": 11, "unidade": "g de caseína", "percentual_vd": 0},
        {"alimento": "Iogurte grego (170g)", "quantidade": 14, "unidade": "g de caseína", "percentual_vd": 0},
        {"alimento": "Leite integral (200ml)", "quantidade": 5, "unidade": "g de caseína", "percentual_vd": 0},
        {"alimento": "Queijos em geral (30g)", "quantidade": 6, "unidade": "g de caseína", "percentual_vd": 0},
        {"alimento": "Ricota (100g)", "quantidade": 9, "unidade": "g de caseína", "percentual_vd": 0}
    ],
    "dosagem": {
        "rda": {"adultos": {"valor": 0, "unidade": "g", "nota": "Parte da necessidade proteica total"}},
        "suplementacao_preventiva": {"min": 30, "max": 40, "unidade": "g", "nota": "Dose padrão antes de dormir"},
        "suplementacao_terapeutica": {"min": 0, "max": 0, "unidade": "g", "nota": "Não há uso terapêutico específico"},
        "limite_superior": None,
        "nota_limite": "Mesma segurança de qualquer proteína do leite"
    },
    "deficiencia": {
        "prevalencia": "Não existe deficiência de caseína especificamente - apenas deficiência proteica geral",
        "sintomas": []
    },
    "excesso": {
        "toxicidade": "Nenhuma",
        "sintomas": ["Inchaço e gases (se intolerante à lactose)", "Reação alérgica (se APLV)"]
    },
    "interacoes": {
        "medicamentos_reduzem_absorcao": [],
        "nutrientes_sinergicos": [
            "Zinco e Magnésio (ZMA) - também tomados à noite",
            "Melatonina - se tiver dificuldade para dormir"
        ]
    },
    "grupos_risco": [
        {"grupo": "Alergia à proteína do leite (APLV)", "motivo": "Caseína é a principal proteína alergênica do leite", "prevalencia": "2-3% da população", "nota": "NÃO PODE USAR"}
    ],
    "formas_suplemento": [
        {"forma": "Caseína Micelar", "descricao": "Forma natural, não desnaturada. Digestão mais lenta.", "nota": "A MELHOR OPÇÃO - mais lenta e natural"},
        {"forma": "Caseinato de Cálcio/Sódio", "descricao": "Processada quimicamente. Absorção levemente mais rápida.", "nota": "Mais barata, mas menos eficaz"}
    ],
    "evidencias": [
        {
            "id": "ref-cas-001",
            "titulo": "Pre-sleep protein ingestion to improve the skeletal muscle adaptive response to exercise training",
            "autores": "Snijders T, et al.",
            "revista": "Nutrients",
            "ano": 2015,
            "tipo": "Revisão",
            "citacao_chave": "Ingerir 30-40g de caseína antes de dormir aumenta a síntese proteica muscular noturna e melhora a recuperação e os ganhos a longo prazo.",
            "relevancia": ["sono", "hipertrofia", "recuperacao"]
        },
        {
            "id": "ref-cas-002",
            "titulo": "Protein Ingestion before Sleep Increases Muscle Mass and Strength Gains",
            "autores": "Snijders T, et al.",
            "revista": "Medicine & Science in Sports & Exercise",
            "ano": 2015,
            "tipo": "Estudo Clínico",
            "citacao_chave": "12 semanas de suplementação de 27.5g de caseína antes de dormir resultou em maior ganho de massa muscular e força comparado a placebo.",
            "relevancia": ["hipertrofia", "forca", "estudo clinico"]
        }
    ],
    "quando_usar": [
        " ANTES DE DORMIR - O momento clássico e mais estudado",
        " Períodos longos sem comer (viagens, dias muito ocupados)",
        " Dietas de emagrecimento - dá muita saciedade",
        " PÓS-TREINO - Não é ideal (você quer absorção rápida, use Whey)",
        " Ao acordar - Não é ideal (você quer quebrar o jejum rápido, use Whey)"
    ],
    "caseina_vs_whey": {
        "caseina": ["Absorção lenta (5-7h)", "Ideal antes de dormir", "Mais saciante", "Anti-catabólica"],
        "whey": ["Absorção rápida (30-60min)", "Ideal pós-treino/ao acordar", "Menos saciante", "Pró-anabólica (pico)"]
    },
    "seo": {
        "meta_title": "Caseína: A Proteína Para Tomar Antes de Dormir (Guia Completo)",
        "meta_description": "Caseína é a proteína de absorção lenta ideal para antes de dormir. Entenda como funciona, diferenças para o Whey, doses recomendadas e melhores marcas.",
        "keywords": ["caseína", "caseina micelar", "proteina antes de dormir", "caseina ou whey", "caseina para que serve", "suplemento caseina"]
    },
    "afiliados": {
        "amazon": [
            {"nome": "100% Casein Gold Standard - Optimum Nutrition", "link": "https://www.amazon.com.br/s?k=casein+optimum+nutrition&tag=105c91-20", "badge": "Melhor do Mundo", "preco_aprox": 350},
            {"nome": "Caseína Micelar 900g - Probiótica", "link": "https://www.amazon.com.br/s?k=caseina+probiotica&tag=105c91-20", "badge": "Melhor Nacional", "preco_aprox": 150}
        ]
    },
    "veredicto_honesto": "Caseína é um suplemento sólido e bem estudado para ANTES DE DORMIR. Se você quer maximizar a síntese proteica 24h por dia, adicionar caseína ao seu arsenal (junto com Whey no pós-treino) faz sentido. Não é obrigatória, mas é a única proteína especificamente projetada para o período de sono."
}

# EXPANDIR NUTRIENTE: ALBUMINA
nutrientes['albumina'] = {
    "slug": "albumina",
    "objetivos": ["ganho-de-massa", "custo-beneficio"],
    "nome": "Albumina",
    "nome_cientifico": "Ovoalbumina (Proteína da Clara do Ovo)",
    "categoria": "proteina",
    "emoji": "",
    "descricao_curta": "A proteína original dos fisiculturistas: barata, eficaz, mas com um preço - o gosto e os gases.",
    "descricao_longa": "A Albumina é a proteína extraída e desidratada da clara do ovo. Antes do Whey dominar o mercado (anos 90), era O suplemento proteico por excelência dos fisiculturistas. Seu Valor Biológico (100) é a referência padrão contra a qual outras proteínas são medidas. Ela tem absorção intermediária (2-3 horas) - mais lenta que Whey, mais rápida que Caseína. Principal vantagem: PREÇO. Principal desvantagem: SABOR (ruim) e GASES (o famoso colateral).",
    "funcoes_corporais": [
        "Síntese proteica muscular (hipertrofia)",
        "Saciedade moderada",
        "Alternativa para intolerantes à lactose (zero leite)",
        "Perfil completo de aminoácidos essenciais"
    ],
    "fontes_alimentares": [
        {"alimento": "Clara de ovo crua (1 unidade)", "quantidade": 3.6, "unidade": "g", "percentual_vd": 7},
        {"alimento": "Clara de ovo cozida (1 unidade)", "quantidade": 3.6, "unidade": "g", "percentual_vd": 7},
        {"alimento": "Albumina em pó (30g - 1 dose)", "quantidade": 24, "unidade": "g", "percentual_vd": 48}
    ],
    "dosagem": {
        "rda": {"adultos": {"valor": 0, "unidade": "g", "nota": "Parte da necessidade proteica total"}},
        "suplementacao_preventiva": {"min": 20, "max": 30, "unidade": "g", "nota": "1 dose padrão"},
        "suplementacao_terapeutica": {"min": 0, "max": 0, "unidade": "g", "nota": ""},
        "limite_superior": None,
        "nota_limite": "Segura em qualquer dose razoável"
    },
    "deficiencia": {
        "prevalencia": "Não existe deficiência de albumina especificamente",
        "sintomas": []
    },
    "excesso": {
        "toxicidade": "Nenhuma",
        "sintomas": ["FLATULÊNCIA - O efeito colateral mais famoso", "Desconforto abdominal em alguns"]
    },
    "interacoes": {
        "medicamentos_reduzem_absorcao": [],
        "nutrientes_sinergicos": [
            "Iogurte ou frutas - para mascarar o sabor"
        ]
    },
    "grupos_risco": [
        {"grupo": "Alérgicos a ovo", "motivo": "Albumina é proteína de ovo", "prevalencia": "1-2%", "nota": "NÃO PODE USAR"}
    ],
    "formas_suplemento": [
        {"forma": "Albumina em pó (sem sabor)", "descricao": "A mais barata. Sabor de ovo cozido.", "nota": "Misture com frutas ou iogurte"},
        {"forma": "Albumina saborizada", "descricao": "Sabores como chocolate, baunilha.", "nota": "Mais cara, sabor ainda não é ótimo"}
    ],
    "evidencias": [
        {
            "id": "ref-alb-001",
            "titulo": "Egg protein as a source of power, strength, and energy",
            "revista": "Nutrition Today",
            "ano": 2012,
            "tipo": "Revisão",
            "citacao_chave": "A proteína do ovo é uma fonte completa de alta qualidade, com Valor Biológico 100, sendo eficaz para suporte ao treinamento de força.",
            "relevancia": ["qualidade", "hipertrofia"]
        }
    ],
    "vantagens": [
        " PREÇO - A mais barata do mercado (R$60-90/kg)",
        " ZERO LACTOSE - Perfeita para intolerantes",
        " VALOR BIOLÓGICO 100 - Referência de qualidade",
        " ABSORÇÃO MÉDIA - Versátil para vários momentos",
        " PROTEÍNA COMPLETA - Todos os aminoácidos essenciais"
    ],
    "desvantagens": [
        " SABOR - Gosto de ovo cozido (ruim mesmo nas saborizadas)",
        " GASES - O efeito colateral mais notório",
        " MENOS LEUCINA - ~8% vs ~10% do Whey",
        " TEXTURA - Pode ficar ''arenosa'' se não misturar bem"
    ],
    "dicas_para_usar": [
        "Comece com doses pequenas (10-15g) e aumente gradualmente - reduz gases",
        "Misture com iogurte, frutas ou achocolatado para mascarar o sabor",
        "Use em receitas (panquecas, bolos) onde o sabor é disfarçado",
        "Tome bastante água - ajuda na digestão",
        "Pode misturar Albumina + Whey para economizar (50/50)"
    ],
    "seo": {
        "meta_title": "Albumina: O Suplemento Mais Barato - Vale a Pena? (Prós, Contras e Dicas)",
        "meta_description": "Albumina é a proteína mais barata do mercado. Entenda se vale a pena, como evitar os gases, dicas de consumo, e comparação com Whey Protein.",
        "keywords": ["albumina", "albumina clara de ovo", "albumina suplemento", "albumina gases", "albumina ou whey", "proteina barata", "albumina para que serve"]
    },
    "afiliados": {
        "amazon": [
            {"nome": "Albumina Naturovos 500g", "link": "https://www.amazon.com.br/s?k=albumina+naturovos&tag=105c91-20", "badge": "Mais Barata", "preco_aprox": 40},
            {"nome": "Albumina Max Titanium 500g", "link": "https://www.amazon.com.br/s?k=albumina+max+titanium&tag=105c91-20", "badge": "Saborizada", "preco_aprox": 55}
        ]
    },
    "veredicto_honesto": "Albumina é a opção de CUSTO-BENEFÍCIO máximo. Se seu orçamento é limitado e você consegue lidar com o sabor e os gases, ela entrega proteína de qualidade por metade do preço do Whey. Dica: muita gente mistura Albumina com Whey (50/50) para economizar sem sacrificar totalmente o sabor."
}

# Salvar
with open('data/nutrientes.json', 'w', encoding='utf-8') as f:
    json.dump(nutrientes, f, ensure_ascii=False, indent=2)

print("Nutrientes atualizados com sucesso!")
print(f"Nutrientes expandidos: proteina, bcaa, glutamina, caseina, albumina")
