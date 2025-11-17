#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json

# Ler o arquivo atual
with open('/home/user/suplementaj-/data/nutrientes-backup.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Adicionar Magnésio
data["magnesio"] = {
    "slug": "magnesio",
    "nome": "Magnésio",
    "nome_cientifico": "Mg",
    "categoria": "mineral",
    "emoji": "⚡",
    "descricao_curta": "Mineral essencial para energia, músculos e função nervosa",
    "descricao_longa": "O magnésio é o quarto mineral mais abundante no corpo humano, essencial para mais de 300 reações enzimáticas.",
    "funcoes_corporais": [
        "Produção de energia (ATP)",
        "Função muscular e prevenção de cãibras",
        "Transmissão nervosa"
    ],
    "fontes_alimentares": [
        {"alimento": "Sementes de abóbora (30g)", "quantidade": 150, "unidade": "mg", "percentual_vd": 37},
        {"alimento": "Espinafre cozido (1 xícara)", "quantidade": 157, "unidade": "mg", "percentual_vd": 39}
    ],
    "dosagem": {
        "rda": {
            "mulheres": {"valor": 320, "unidade": "mg"},
            "homens": {"valor": 420, "unidade": "mg"}
        },
        "suplementacao_preventiva": {"min": 300, "max": 400, "unidade": "mg"},
        "limite_superior": {"valor": 350, "unidade": "mg"}
    },
    "deficiencia": {"sintomas": ["Cãibras musculares", "Fadiga", "Insônia"]},
    "excesso": {"toxicidade": "Rara", "sintomas": ["Diarreia"]},
    "interacoes": {"nutrientes_sinergicos": ["Vitamina D", "Cálcio"]},
    "grupos_risco": [{"grupo": "Diabéticos", "motivo": "Perda urinária aumentada"}],
    "formas_suplemento": [{"forma": "Glicinato de magnésio", "nota": "Melhor absorção"}],
    "evidencias": [{"id": "ref-mg-001", "titulo": "Magnesium and diabetes", "ano": 2021, "tipo": "Meta-análise"}],
    "seo": {"meta_title": "Magnésio", "meta_description": "Guia sobre magnésio", "keywords": ["magnésio"]},
    "afiliados": {"amazon": [{"nome": "Magnésio Glicinato 400mg", "link": "https://amzn.to/EXEMPLO6", "preco_aprox": 45}]}
}

# Adicionar Ferro
data["ferro"] = {
    "slug": "ferro",
    "nome": "Ferro",
    "nome_cientifico": "Fe",
    "categoria": "mineral",
    "emoji": "🩸",
    "descricao_curta": "Mineral essencial para transporte de oxigênio",
    "descricao_longa": "O ferro é fundamental para formação da hemoglobina.",
    "funcoes_corporais": ["Transporte de oxigênio", "Produção de energia"],
    "fontes_alimentares": [
        {"alimento": "Fígado (100g)", "quantidade": 5, "unidade": "mg", "percentual_vd": 27},
        {"alimento": "Carne vermelha (100g)", "quantidade": 2.7, "unidade": "mg", "percentual_vd": 15}
    ],
    "dosagem": {
        "rda": {
            "mulheres_menstruadas": {"valor": 18, "unidade": "mg"},
            "homens": {"valor": 8, "unidade": "mg"}
        },
        "suplementacao_preventiva": {"min": 14, "max": 18, "unidade": "mg"},
        "limite_superior": {"valor": 45, "unidade": "mg"}
    },
    "deficiencia": {"sintomas": ["Fadiga", "Anemia", "Palidez"]},
    "excesso": {"toxicidade": "Perigoso", "sintomas": ["Náusea", "Danos ao fígado"]},
    "interacoes": {"nutrientes_sinergicos": ["Vitamina C"]},
    "grupos_risco": [{"grupo": "Mulheres menstruadas", "motivo": "Perda mensal de sangue"}],
    "formas_suplemento": [{"forma": "Ferro quelado", "nota": "Melhor tolerado"}],
    "nota_importante": "CONTRAINDICADO para hemocromatose",
    "evidencias": [{"id": "ref-fe-001", "titulo": "Iron and anemia", "ano": 2020, "tipo": "Meta-análise"}],
    "seo": {"meta_title": "Ferro", "meta_description": "Guia sobre ferro", "keywords": ["ferro", "anemia"]},
    "afiliados": {"amazon": [{"nome": "Ferro Quelado 14mg", "link": "https://amzn.to/EXEMPLO7", "preco_aprox": 32}]}
}

# Adicionar Ômega-3
data["omega-3"] = {
    "slug": "omega-3",
    "nome": "Ômega-3",
    "nome_cientifico": "EPA e DHA",
    "categoria": "vitamina",
    "subcategoria": "ácido graxo",
    "emoji": "🐟",
    "descricao_curta": "Ácidos graxos essenciais para saúde cardiovascular",
    "descricao_longa": "Ômega-3 são ácidos graxos essenciais com efeitos anti-inflamatórios.",
    "funcoes_corporais": ["Saúde cardiovascular", "Função cerebral", "Redução de inflamação"],
    "fontes_alimentares": [
        {"alimento": "Salmão (100g)", "quantidade": 2260, "unidade": "mg", "percentual_vd": 100},
        {"alimento": "Sardinha (100g)", "quantidade": 1480, "unidade": "mg", "percentual_vd": 65}
    ],
    "dosagem": {
        "rda": {"adultos": {"valor": 250, "unidade": "mg"}},
        "suplementacao_preventiva": {"min": 1000, "max": 2000, "unidade": "mg"},
        "limite_superior": {"valor": 3000, "unidade": "mg"}
    },
    "deficiencia": {"sintomas": ["Pele seca", "Fadiga", "Problemas de memória"]},
    "excesso": {"toxicidade": "Baixa", "sintomas": ["Sangramento prolongado"]},
    "interacoes": {"medicamentos": [{"nome": "Anticoagulantes", "efeito": "Potencializa efeito"}]},
    "grupos_risco": [{"grupo": "Baixo consumo de peixe", "motivo": "Principal fonte"}],
    "formas_suplemento": [{"forma": "Óleo de peixe", "nota": "Preferir purificado"}],
    "evidencias": [{"id": "ref-omega-001", "titulo": "Omega-3 and CVD", "ano": 2021, "tipo": "Meta-análise"}],
    "seo": {"meta_title": "Ômega-3", "meta_description": "Guia sobre ômega-3", "keywords": ["ômega-3", "EPA", "DHA"]},
    "afiliados": {"amazon": [{"nome": "Ômega-3 1000mg", "link": "https://amzn.to/EXEMPLO8", "preco_aprox": 48}]}
}

# Adicionar Vitamina C
data["vitamina-c"] = {
    "slug": "vitamina-c",
    "nome": "Vitamina C",
    "nome_cientifico": "Ácido Ascórbico",
    "categoria": "vitamina",
    "subcategoria": "hidrossolúvel",
    "emoji": "🍊",
    "descricao_curta": "Vitamina antioxidante essencial para imunidade e produção de colágeno",
    "descricao_longa": "A vitamina C é um potente antioxidante, essencial para síntese de colágeno, função imunológica e absorção de ferro.",
    "funcoes_corporais": ["Síntese de colágeno", "Antioxidante", "Função imunológica", "Absorção de ferro"],
    "fontes_alimentares": [
        {"alimento": "Acerola (100g)", "quantidade": 1800, "unidade": "mg", "percentual_vd": 2000},
        {"alimento": "Laranja (1 média)", "quantidade": 70, "unidade": "mg", "percentual_vd": 77},
        {"alimento": "Morango (1 xícara)", "quantidade": 90, "unidade": "mg", "percentual_vd": 100}
    ],
    "dosagem": {
        "rda": {
            "mulheres": {"valor": 75, "unidade": "mg"},
            "homens": {"valor": 90, "unidade": "mg"},
            "fumantes": {"valor": 125, "unidade": "mg", "nota": "+35mg para fumantes"}
        },
        "suplementacao_preventiva": {"min": 500, "max": 1000, "unidade": "mg"},
        "limite_superior": {"valor": 2000, "unidade": "mg"}
    },
    "deficiencia": {"sintomas": ["Fadiga", "Sangramento gengival", "Má cicatrização", "Escorbuto (casos graves)"]},
    "excesso": {"toxicidade": "Baixa (hidrossolúvel)", "sintomas": ["Diarreia", "Náusea", "Cálculos renais (doses muito altas)"]},
    "interacoes": {"nutrientes_sinergicos": ["Ferro - aumenta absorção"]},
    "grupos_risco": [
        {"grupo": "Fumantes", "motivo": "Necessidade aumentada"},
        {"grupo": "Idosos", "motivo": "Ingestão inadequada"}
    ],
    "formas_suplemento": [
        {"forma": "Ácido ascórbico", "nota": "Forma padrão"},
        {"forma": "Ester-C", "nota": "Menos ácida, melhor tolerada"}
    ],
    "evidencias": [{"id": "ref-c-001", "titulo": "Vitamin C and immune function", "ano": 2020, "tipo": "Revisão sistemática"}],
    "seo": {"meta_title": "Vitamina C", "meta_description": "Guia sobre vitamina C", "keywords": ["vitamina c", "imunidade"]},
    "afiliados": {"amazon": [{"nome": "Vitamina C 1000mg", "link": "https://amzn.to/EXEMPLO9", "preco_aprox": 28}]}
}

# Adicionar Vitamina E
data["vitamina-e"] = {
    "slug": "vitamina-e",
    "nome": "Vitamina E",
    "nome_cientifico": "Tocoferol",
    "categoria": "vitamina",
    "subcategoria": "lipossolúvel",
    "emoji": "🌰",
    "descricao_curta": "Antioxidante lipossolúvel que protege células",
    "descricao_longa": "A vitamina E é um antioxidante que protege membranas celulares da oxidação.",
    "funcoes_corporais": ["Antioxidante", "Proteção celular", "Saúde cardiovascular"],
    "fontes_alimentares": [
        {"alimento": "Sementes de girassol (30g)", "quantidade": 10, "unidade": "mg", "percentual_vd": 66},
        {"alimento": "Amêndoas (30g)", "quantidade": 7.3, "unidade": "mg", "percentual_vd": 48}
    ],
    "dosagem": {
        "rda": {"adultos": {"valor": 15, "unidade": "mg"}},
        "suplementacao_preventiva": {"min": 100, "max": 400, "unidade": "UI"},
        "limite_superior": {"valor": 1000, "unidade": "mg"}
    },
    "deficiencia": {"sintomas": ["Fraqueza muscular", "Problemas de visão", "Neuropatia"]},
    "excesso": {"toxicidade": "Rara", "sintomas": ["Pode aumentar risco de sangramento"]},
    "interacoes": {"medicamentos": [{"nome": "Anticoagulantes", "efeito": "Potencializa"}]},
    "grupos_risco": [{"grupo": "Má absorção de gorduras", "motivo": "Vitamina E é lipossolúvel"}],
    "formas_suplemento": [{"forma": "d-alfa-tocoferol", "nota": "Forma natural"}],
    "evidencias": [{"id": "ref-e-001", "titulo": "Vitamin E and oxidative stress", "ano": 2019, "tipo": "Revisão"}],
    "seo": {"meta_title": "Vitamina E", "meta_description": "Guia sobre vitamina E", "keywords": ["vitamina e"]},
    "afiliados": {"amazon": [{"nome": "Vitamina E 400 UI", "link": "https://amzn.to/EXEMPLO10", "preco_aprox": 35}]}
}

# Adicionar Zinco
data["zinco"] = {
    "slug": "zinco",
    "nome": "Zinco",
    "nome_cientifico": "Zn",
    "categoria": "mineral",
    "emoji": "🛡️",
    "descricao_curta": "Mineral essencial para imunidade, cicatrização e metabolismo",
    "descricao_longa": "O zinco é essencial para mais de 300 enzimas, crucial para imunidade, cicatrização e síntese de proteínas.",
    "funcoes_corporais": ["Função imunológica", "Cicatrização", "Síntese de proteínas", "Paladar e olfato"],
    "fontes_alimentares": [
        {"alimento": "Ostras (6 unidades)", "quantidade": 32, "unidade": "mg", "percentual_vd": 290},
        {"alimento": "Carne vermelha (100g)", "quantidade": 4.8, "unidade": "mg", "percentual_vd": 43}
    ],
    "dosagem": {
        "rda": {
            "mulheres": {"valor": 8, "unidade": "mg"},
            "homens": {"valor": 11, "unidade": "mg"}
        },
        "suplementacao_preventiva": {"min": 15, "max": 30, "unidade": "mg"},
        "limite_superior": {"valor": 40, "unidade": "mg"}
    },
    "deficiencia": {"sintomas": ["Imunidade baixa", "Perda de paladar", "Queda de cabelo", "Má cicatrização"]},
    "excesso": {"toxicidade": "Possível", "sintomas": ["Náusea", "Reduz cobre"]},
    "interacoes": {"nutrientes_antagonistas": ["Cálcio e Ferro - competem por absorção"]},
    "grupos_risco": [
        {"grupo": "Vegetarianos", "motivo": "Zinco vegetal tem menor biodisponibilidade"},
        {"grupo": "Idosos", "motivo": "Absorção reduzida"}
    ],
    "formas_suplemento": [{"forma": "Quelato de zinco", "nota": "Melhor absorção"}],
    "evidencias": [{"id": "ref-zn-001", "titulo": "Zinc and immune function", "ano": 2020, "tipo": "Meta-análise"}],
    "seo": {"meta_title": "Zinco", "meta_description": "Guia sobre zinco", "keywords": ["zinco", "imunidade"]},
    "afiliados": {"amazon": [{"nome": "Zinco Quelado 30mg", "link": "https://amzn.to/EXEMPLO11", "preco_aprox": 25}]}
}

# Adicionar Ácido Fólico
data["acido-folico"] = {
    "slug": "acido-folico",
    "nome": "Ácido Fólico",
    "nome_cientifico": "Vitamina B9 / Folato",
    "categoria": "vitamina",
    "subcategoria": "hidrossolúvel",
    "emoji": "🤰",
    "descricao_curta": "Vitamina essencial para formação do DNA e prevenção de defeitos do tubo neural",
    "descricao_longa": "O ácido fólico é crucial para síntese de DNA, formação de células sanguíneas e prevenção de defeitos congênitos.",
    "funcoes_corporais": ["Síntese de DNA", "Formação de glóbulos vermelhos", "Prevenção de defeitos do tubo neural"],
    "fontes_alimentares": [
        {"alimento": "Fígado (100g)", "quantidade": 290, "unidade": "mcg", "percentual_vd": 72},
        {"alimento": "Lentilhas (1 xícara)", "quantidade": 358, "unidade": "mcg", "percentual_vd": 89},
        {"alimento": "Espinafre (1 xícara)", "quantidade": 263, "unidade": "mcg", "percentual_vd": 65}
    ],
    "dosagem": {
        "rda": {
            "adultos": {"valor": 400, "unidade": "mcg"},
            "gestantes": {"valor": 600, "unidade": "mcg"},
            "lactantes": {"valor": 500, "unidade": "mcg"}
        },
        "suplementacao_preventiva": {"min": 400, "max": 800, "unidade": "mcg"},
        "limite_superior": {"valor": 1000, "unidade": "mcg"}
    },
    "deficiencia": {"sintomas": ["Anemia megaloblástica", "Fadiga", "Defeitos do tubo neural no feto"]},
    "excesso": {"toxicidade": "Baixa", "nota": "Excesso pode mascarar deficiência de B12"},
    "interacoes": {"nutrientes_sinergicos": ["Vitamina B12 - trabalham juntos"]},
    "grupos_risco": [
        {"grupo": "Gestantes", "motivo": "ESSENCIAL para prevenção de defeitos congênitos"},
        {"grupo": "Mulheres tentando engravidar", "motivo": "Iniciar antes da concepção"}
    ],
    "formas_suplemento": [
        {"forma": "Ácido fólico (sintético)", "nota": "Forma padrão"},
        {"forma": "Metilfolato", "nota": "Forma ativa"}
    ],
    "evidencias": [{"id": "ref-b9-001", "titulo": "Folic acid and neural tube defects", "ano": 2020, "tipo": "Meta-análise"}],
    "seo": {"meta_title": "Ácido Fólico", "meta_description": "Guia sobre ácido fólico", "keywords": ["ácido fólico", "gravidez", "B9"]},
    "afiliados": {"amazon": [{"nome": "Ácido Fólico 800mcg", "link": "https://amzn.to/EXEMPLO12", "preco_aprox": 18}]}
}

# Adicionar Vitamina B6
data["vitamina-b6"] = {
    "slug": "vitamina-b6",
    "nome": "Vitamina B6",
    "nome_cientifico": "Piridoxina",
    "categoria": "vitamina",
    "subcategoria": "hidrossolúvel",
    "emoji": "🧠",
    "descricao_curta": "Vitamina essencial para metabolismo de proteínas e função neurológica",
    "descricao_longa": "A vitamina B6 é crucial para metabolismo de aminoácidos, produção de neurotransmissores e função imunológica.",
    "funcoes_corporais": ["Metabolismo de proteínas", "Produção de neurotransmissores", "Função imunológica"],
    "fontes_alimentares": [
        {"alimento": "Grão-de-bico (1 xícara)", "quantidade": 1.1, "unidade": "mg", "percentual_vd": 55},
        {"alimento": "Frango (100g)", "quantidade": 0.5, "unidade": "mg", "percentual_vd": 25}
    ],
    "dosagem": {
        "rda": {
            "adultos": {"valor": 1.3, "unidade": "mg"},
            "idosos_50_plus": {"valor": 1.7, "unidade": "mg"}
        },
        "suplementacao_preventiva": {"min": 10, "max": 50, "unidade": "mg"},
        "limite_superior": {"valor": 100, "unidade": "mg"}
    },
    "deficiencia": {"sintomas": ["Irritabilidade", "Depressão", "Confusão", "Anemia"]},
    "excesso": {"toxicidade": "Doses muito altas podem causar neuropatia", "sintomas": ["Formigamento", "Danos nervosos"]},
    "interacoes": {"nutrientes_sinergicos": ["Vitaminas B12 e B9"]},
    "grupos_risco": [{"grupo": "Idosos", "motivo": "Absorção reduzida"}],
    "formas_suplemento": [{"forma": "Piridoxina HCl", "nota": "Forma padrão"}],
    "evidencias": [{"id": "ref-b6-001", "titulo": "Vitamin B6 and cognition", "ano": 2021, "tipo": "Estudo"}],
    "seo": {"meta_title": "Vitamina B6", "meta_description": "Guia sobre vitamina B6", "keywords": ["vitamina b6", "piridoxina"]},
    "afiliados": {"amazon": [{"nome": "Vitamina B6 50mg", "link": "https://amzn.to/EXEMPLO13", "preco_aprox": 22}]}
}

# Adicionar Vitamina K2
data["vitamina-k2"] = {
    "slug": "vitamina-k2",
    "nome": "Vitamina K2",
    "nome_cientifico": "Menaquinona",
    "categoria": "vitamina",
    "subcategoria": "lipossolúvel",
    "emoji": "🦴",
    "descricao_curta": "Vitamina que direciona cálcio para ossos (não artérias)",
    "descricao_longa": "A vitamina K2 ativa proteínas que direcionam cálcio para os ossos, evitando calcificação arterial.",
    "funcoes_corporais": ["Direcionamento de cálcio", "Saúde óssea", "Saúde cardiovascular"],
    "fontes_alimentares": [
        {"alimento": "Natto (100g)", "quantidade": 1000, "unidade": "mcg", "percentual_vd": 1000},
        {"alimento": "Queijos fermentados", "quantidade": 76, "unidade": "mcg", "percentual_vd": 76}
    ],
    "dosagem": {
        "rda": {"adultos": {"valor": 90, "unidade": "mcg", "nota": "Não estabelecido especificamente para K2"}},
        "suplementacao_preventiva": {"min": 100, "max": 200, "unidade": "mcg"},
        "limite_superior": None
    },
    "deficiencia": {"sintomas": ["Fragilidade óssea", "Calcificação arterial"]},
    "excesso": {"toxicidade": "Muito baixa"},
    "interacoes": {
        "nutrientes_sinergicos": ["Vitamina D - trabalham juntos", "Cálcio - direciona para ossos"],
        "medicamentos": [{"nome": "Anticoagulantes (varfarina)", "efeito": "CONTRAINDICADO - antagoniza efeito"}]
    },
    "grupos_risco": [
        {"grupo": "Menopausa", "motivo": "Prevenção de osteoporose"},
        {"grupo": "Suplementação de cálcio", "motivo": "Evita calcificação arterial"}
    ],
    "formas_suplemento": [
        {"forma": "MK-7 (menaquinona-7)", "nota": "Forma de longa duração"}
    ],
    "evidencias": [{"id": "ref-k2-001", "titulo": "Vitamin K2 and bone health", "ano": 2020, "tipo": "Meta-análise"}],
    "seo": {"meta_title": "Vitamina K2", "meta_description": "Guia sobre vitamina K2", "keywords": ["vitamina k2", "osteoporose"]},
    "afiliados": {"amazon": [{"nome": "Vitamina K2 MK-7 100mcg", "link": "https://amzn.to/EXEMPLO14", "preco_aprox": 38}]}
}

# Adicionar Iodo
data["iodo"] = {
    "slug": "iodo",
    "nome": "Iodo",
    "nome_cientifico": "I",
    "categoria": "mineral",
    "emoji": "🧂",
    "descricao_curta": "Mineral essencial para função da tireoide",
    "descricao_longa": "O iodo é fundamental para síntese dos hormônios tireoidianos T3 e T4, que regulam metabolismo.",
    "funcoes_corporais": ["Produção de hormônios tireoidianos", "Regulação do metabolismo", "Desenvolvimento fetal"],
    "fontes_alimentares": [
        {"alimento": "Algas marinhas (1g)", "quantidade": 232, "unidade": "mcg", "percentual_vd": 154},
        {"alimento": "Sal iodado (1g)", "quantidade": 45, "unidade": "mcg", "percentual_vd": 30}
    ],
    "dosagem": {
        "rda": {
            "adultos": {"valor": 150, "unidade": "mcg"},
            "gestantes": {"valor": 220, "unidade": "mcg"}
        },
        "suplementacao_preventiva": {"min": 150, "max": 300, "unidade": "mcg"},
        "limite_superior": {"valor": 1100, "unidade": "mcg"}
    },
    "deficiencia": {"sintomas": ["Hipotireoidismo", "Bócio", "Fadiga", "Ganho de peso"]},
    "excesso": {"toxicidade": "Possível", "sintomas": ["Hipertireoidismo", "Bócio"]},
    "interacoes": {},
    "grupos_risco": [
        {"grupo": "Gestantes", "motivo": "Necessidade aumentada para desenvolvimento fetal"},
        {"grupo": "Vegetarianos que não consomem sal iodado", "motivo": "Baixa ingestão"}
    ],
    "formas_suplemento": [{"forma": "Iodeto de potássio", "nota": "Forma padrão"}],
    "evidencias": [{"id": "ref-i-001", "titulo": "Iodine and thyroid", "ano": 2020, "tipo": "Revisão"}],
    "seo": {"meta_title": "Iodo", "meta_description": "Guia sobre iodo", "keywords": ["iodo", "tireoide"]},
    "afiliados": {"amazon": [{"nome": "Iodo 150mcg", "link": "https://amzn.to/EXEMPLO15", "preco_aprox": 28}]}
}

# Adicionar Selênio
data["selenio"] = {
    "slug": "selenio",
    "nome": "Selênio",
    "nome_cientifico": "Se",
    "categoria": "mineral",
    "emoji": "🌰",
    "descricao_curta": "Mineral antioxidante essencial para tireoide e imunidade",
    "descricao_longa": "O selênio é um mineral essencial com função antioxidante, crucial para tireoide e imunidade.",
    "funcoes_corporais": ["Antioxidante", "Função tireoidiana", "Função imunológica", "Reprodução"],
    "fontes_alimentares": [
        {"alimento": "Castanha-do-pará (1 unidade)", "quantidade": 96, "unidade": "mcg", "percentual_vd": 174},
        {"alimento": "Atum (100g)", "quantidade": 92, "unidade": "mcg", "percentual_vd": 167}
    ],
    "dosagem": {
        "rda": {"adultos": {"valor": 55, "unidade": "mcg"}},
        "suplementacao_preventiva": {"min": 100, "max": 200, "unidade": "mcg"},
        "limite_superior": {"valor": 400, "unidade": "mcg"}
    },
    "deficiencia": {"sintomas": ["Fadiga", "Imunidade baixa", "Problemas tireoidianos", "Infertilidade"]},
    "excesso": {"toxicidade": "Possível", "sintomas": ["Queda de cabelo", "Unhas quebradiças", "Náusea"]},
    "interacoes": {"nutrientes_sinergicos": ["Vitamina E"]},
    "grupos_risco": [
        {"grupo": "Solo pobre em selênio", "motivo": "Alimentos com baixo teor"},
        {"grupo": "Problemas tireoidianos", "motivo": "Necessário para conversão de hormônios"}
    ],
    "formas_suplemento": [{"forma": "Selenometionina", "nota": "Forma orgânica, melhor absorção"}],
    "evidencias": [{"id": "ref-se-001", "titulo": "Selenium and thyroid", "ano": 2021, "tipo": "Revisão"}],
    "seo": {"meta_title": "Selênio", "meta_description": "Guia sobre selênio", "keywords": ["selênio", "castanha-do-pará"]},
    "afiliados": {"amazon": [{"nome": "Selênio 200mcg", "link": "https://amzn.to/EXEMPLO16", "preco_aprox": 24}]}
}

# Adicionar Vitamina A
data["vitamina-a"] = {
    "slug": "vitamina-a",
    "nome": "Vitamina A",
    "nome_cientifico": "Retinol",
    "categoria": "vitamina",
    "subcategoria": "lipossolúvel",
    "emoji": "🥕",
    "descricao_curta": "Vitamina essencial para visão, imunidade e pele",
    "descricao_longa": "A vitamina A é crucial para visão noturna, função imunológica, reprodução e saúde da pele.",
    "funcoes_corporais": ["Visão (rodopsina)", "Função imunológica", "Saúde da pele", "Reprodução"],
    "fontes_alimentares": [
        {"alimento": "Fígado (100g)", "quantidade": 16898, "unidade": "IU", "percentual_vd": 337},
        {"alimento": "Cenoura (1 média)", "quantidade": 10191, "unidade": "IU", "percentual_vd": 203},
        {"alimento": "Batata-doce (1 média)", "quantidade": 21907, "unidade": "IU", "percentual_vd": 438}
    ],
    "nota_fontes": "Retinol (animal) é absorvido diretamente. Beta-caroteno (vegetal) precisa conversão.",
    "dosagem": {
        "rda": {
            "mulheres": {"valor": 700, "unidade": "mcg RAE"},
            "homens": {"valor": 900, "unidade": "mcg RAE"}
        },
        "suplementacao_preventiva": {"min": 3000, "max": 5000, "unidade": "IU"},
        "limite_superior": {"valor": 10000, "unidade": "IU"}
    },
    "deficiencia": {"sintomas": ["Cegueira noturna", "Xeroftalmia", "Imunidade baixa", "Pele seca"]},
    "excesso": {
        "toxicidade": "PERIGOSO em excesso (lipossolúvel acumula)",
        "sintomas": ["Náusea", "Tonturas", "Dor de cabeça", "Danos ao fígado", "TERATOGÊNICO (defeitos fetais)"]
    },
    "interacoes": {},
    "grupos_risco": [
        {"grupo": "Deficiência é rara em países desenvolvidos", "motivo": "Presente em muitos alimentos"}
    ],
    "formas_suplemento": [
        {"forma": "Retinol (pré-formado)", "nota": "Atenção à dosagem - pode acumular"},
        {"forma": "Beta-caroteno", "nota": "Mais seguro - conversão limitada"}
    ],
    "nota_importante": "GESTANTES: não exceder 3.000 IU/dia de retinol pré-formado (risco de defeitos fetais). Preferir beta-caroteno.",
    "evidencias": [{"id": "ref-a-001", "titulo": "Vitamin A and vision", "ano": 2020, "tipo": "Revisão"}],
    "seo": {"meta_title": "Vitamina A", "meta_description": "Guia sobre vitamina A", "keywords": ["vitamina a", "retinol", "visão"]},
    "afiliados": {"amazon": [{"nome": "Vitamina A 5000 IU", "link": "https://amzn.to/EXEMPLO17", "preco_aprox": 26}]}
}

# Salvar arquivo completo
with open('/home/user/suplementaj-/data/nutrientes.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Arquivo nutrientes.json criado com 15 nutrientes completos!")
