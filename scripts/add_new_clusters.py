# -*- coding: utf-8 -*-
import json
from datetime import datetime

# =============================================
# NOVOS ARTIGOS ESTRATEGICOS - SEM CANIBALIZACAO
# =============================================

novos_artigos = [
    # ========== CLUSTER SONO/RELAXAMENTO ==========
    {
        "slug": "como-dormir-melhor-suplementos",
        "titulo": "Como Dormir Melhor: 7 Suplementos Que Realmente Funcionam (2026)",
        "descricao": "Guia completo dos suplementos para sono baseados em ciencia: melatonina, magnesio, glicina, L-teanina, valeriana e mais. Dosagens corretas e o que evitar.",
        "categoria": "sono",
        "tags": ["sono", "melatonina", "magnesio", "relaxamento", "insonia"],
        "autor": "Equipe Suplementa Ja",
        "data_publicacao": "2026-02-04",
        "data_atualizacao": "2026-02-04",
        "tempo_leitura": 12,
        "conteudo": [
            {"tipo": "paragrafo", "texto": "Voce ja esta cansado de virar na cama sem conseguir dormir? Ou de acordar mais exausto do que quando foi deitar? Voce nao esta sozinho. Segundo pesquisas, cerca de 73 milhoes de brasileiros sofrem com problemas de sono."},
            {"tipo": "paragrafo", "texto": "A boa noticia: existem suplementos que realmente ajudam - e outros que sao puro desperdicio de dinheiro. Neste guia, vou te mostrar exatamente o que funciona, as dosagens corretas, e o que voce deve evitar."},
            {"tipo": "heading", "nivel": 2, "texto": "Por Que Suplementos Para Sono Funcionam?"},
            {"tipo": "paragrafo", "texto": "Antes de falar dos suplementos, voce precisa entender: o sono e regulado por neurotransmissores como GABA, melatonina e adenosina. Quando esses neurotransmissores estao em desequilibrio (por estresse, luz azul, cafeina), o sono sofre."},
            {"tipo": "paragrafo", "texto": "Os melhores suplementos atuam diretamente nesses sistemas - nao te dopando artificialmente, mas restaurando o equilibrio natural do seu corpo."},
            {"tipo": "heading", "nivel": 2, "texto": "1. Magnesio Glicinato - O Rei do Relaxamento"},
            {"tipo": "paragrafo", "texto": "O magnesio e o mineral mais subestimado para o sono. Ele atua em mais de 300 reacoes enzimaticas no corpo, incluindo a producao de GABA (o neurotransmissor do relaxamento)."},
            {"tipo": "alerta", "tipo_alerta": "sucesso", "texto": "Estudo: Idosos que tomaram 500mg de magnesio por 8 semanas tiveram melhora significativa na qualidade do sono, tempo para dormir e niveis de melatonina."},
            {"tipo": "lista", "titulo": "Por que Glicinato?", "itens": ["Melhor absorcao (60-80% vs 4% do oxido)", "Glicina tambem e calmante", "Nao causa desconforto intestinal", "Atravessa a barreira hematoencefalica"]},
            {"tipo": "tabela", "titulo": "Dosagem de Magnesio para Sono", "colunas": ["Situacao", "Dose", "Horario"], "linhas": [["Manutencao", "200-300mg", "1h antes de dormir"], ["Estresse alto", "300-400mg", "1h antes de dormir"], ["Insonia cronica", "400-500mg", "Dividir em 2 doses"]]},
            {"tipo": "heading", "nivel": 2, "texto": "2. Melatonina - O Relogio Biologico"},
            {"tipo": "paragrafo", "texto": "A melatonina nao e um sedativo - ela e um sinalizador. Ela diz ao seu cerebro: 'hora de dormir'. Por isso, a dose correta e MUITO menor do que a maioria das pessoas toma."},
            {"tipo": "alerta", "tipo_alerta": "aviso", "texto": "ATENCAO: Doses altas de melatonina (5-10mg) podem ter efeito rebote e piorar o sono a longo prazo. Menos e mais!"},
            {"tipo": "tabela", "titulo": "Dosagem de Melatonina", "colunas": ["Objetivo", "Dose", "Timing"], "linhas": [["Jet lag", "0.5-1mg", "Horario de dormir local"], ["Dificuldade para iniciar sono", "0.3-0.5mg", "30min antes"], ["Insonia mais severa", "1-3mg", "1h antes"], ["Idosos (producao reduzida)", "1-2mg", "1h antes"]]},
            {"tipo": "heading", "nivel": 2, "texto": "3. L-Teanina - Relaxamento Sem Sedacao"},
            {"tipo": "paragrafo", "texto": "A L-teanina e um aminoacido encontrado no cha verde. Ela promove ondas cerebrais alfa (estado de relaxamento alerta) e aumenta GABA sem causar sonolencia diurna."},
            {"tipo": "paragrafo", "texto": "E perfeita para quem tem a mente acelerada na hora de dormir - aquele loop de pensamentos que nao para."},
            {"tipo": "lista", "titulo": "Beneficios da L-Teanina", "itens": ["Reduz ansiedade sem sedacao", "Melhora qualidade do sono", "Pode ser combinada com cafeina (foco sem nervosismo)", "Sem efeito rebote ou dependencia"]},
            {"tipo": "heading", "nivel": 2, "texto": "4. Glicina - O Aminoacido Subestimado"},
            {"tipo": "paragrafo", "texto": "A glicina e um aminoacido que baixa a temperatura corporal central - um sinal critico para iniciar o sono. Estudos mostram que 3g antes de dormir melhora significativamente a qualidade do sono."},
            {"tipo": "alerta", "tipo_alerta": "sucesso", "texto": "Bonus: Glicina tambem melhora a cognicao no dia seguinte e pode ajudar na producao de colageno."},
            {"tipo": "heading", "nivel": 2, "texto": "5. Valeriana - O Classico Natural"},
            {"tipo": "paragrafo", "texto": "A valeriana e uma das ervas mais estudadas para sono. Ela aumenta GABA e pode ser util para quem prefere opcoes herbal. Porem, os estudos sao mistos e ela funciona melhor apos uso continuado (2-4 semanas)."},
            {"tipo": "heading", "nivel": 2, "texto": "6. Ashwagandha - Para Quem Nao Dorme Por Estresse"},
            {"tipo": "paragrafo", "texto": "Se voce nao consegue dormir porque sua mente esta a mil por hora com preocupacoes, a ashwagandha pode ser sua melhor amiga. Ela reduz cortisol (o hormonio do estresse) e promove relaxamento."},
            {"tipo": "heading", "nivel": 2, "texto": "7. ZMA - Para Atletas"},
            {"tipo": "paragrafo", "texto": "O ZMA (Zinco + Magnesio + B6) e especialmente util para quem treina pesado. O exercicio intenso depleta zinco e magnesio, que sao criticos para o sono reparador."},
            {"tipo": "heading", "nivel": 2, "texto": "O Protocolo Ideal - Stack Para Sono"},
            {"tipo": "paragrafo", "texto": "Se voce quer maximizar resultados, aqui esta minha sugestao de combinacao:"},
            {"tipo": "lista", "titulo": "Stack Basico (Maioria das Pessoas)", "itens": ["Magnesio Glicinato: 300-400mg (1h antes)", "L-Teanina: 200mg (30min antes)", "Opcional: Melatonina 0.5mg se necessario"]},
            {"tipo": "lista", "titulo": "Stack Avancado (Insonia Persistente)", "itens": ["Magnesio Glicinato: 400mg", "Glicina: 3g", "Melatonina: 0.5-1mg", "Ashwagandha: 300mg (se estresse alto)"]},
            {"tipo": "heading", "nivel": 2, "texto": "O Que NAO Funciona (Economize Seu Dinheiro)"},
            {"tipo": "lista", "titulo": "Evite", "itens": ["Melatonina em doses altas (5-10mg)", "Formulas prontas com 15 ingredientes", "Qualquer coisa que prometa 'nocaute instantaneo'", "Suplementos sem dosagem clara no rotulo"]},
            {"tipo": "heading", "nivel": 2, "texto": "Higiene do Sono - Tao Importante Quanto Suplementos"},
            {"tipo": "paragrafo", "texto": "Nenhum suplemento compensa habitos ruins. Para resultados reais, combine com:"},
            {"tipo": "lista", "itens": ["Evitar telas 1-2h antes de dormir (ou usar oculos blue light)", "Quarto escuro e frio (18-20C)", "Horario consistente para dormir/acordar", "Evitar cafeina apos 14h", "Exposicao a luz solar de manha"]},
            {"tipo": "cta", "texto": "Quer saber mais sobre magnesio? Leia nosso guia completo", "link": "/blog/magnesio-ansiedade-sono-tipos", "botao": "Ver Guia de Magnesio"},
            {"tipo": "heading", "nivel": 2, "texto": "Conclusao"},
            {"tipo": "paragrafo", "texto": "Suplementos para sono funcionam, mas nao sao magica. Comece com magnesio glicinato (o mais seguro e eficaz), adicione L-teanina se necessario, e use melatonina apenas em doses baixas. Combine com boa higiene do sono e voce vai notar a diferenca em poucos dias."}
        ]
    },
    # ========== CLUSTER EMAGRECIMENTO ==========
    {
        "slug": "suplementos-para-emagrecer-funcionam",
        "titulo": "Suplementos Para Emagrecer: O Que Funciona (e O Que e Golpe)",
        "descricao": "Analise cientifica dos suplementos para emagrecimento: termogenicos, L-carnitina, cafeina, CLA e mais. O que realmente funciona e o que e puro marketing.",
        "categoria": "emagrecimento",
        "tags": ["emagrecimento", "termogenico", "l-carnitina", "cafeina", "perda de peso"],
        "autor": "Equipe Suplementa Ja",
        "data_publicacao": "2026-02-04",
        "data_atualizacao": "2026-02-04",
        "tempo_leitura": 14,
        "conteudo": [
            {"tipo": "paragrafo", "texto": "Vou ser honesto com voce desde o inicio: 90% dos suplementos para emagrecer sao puro marketing. Eles prometem 'queimar gordura enquanto voce dorme' ou 'perder 10kg em 30 dias' - e isso simplesmente nao existe."},
            {"tipo": "paragrafo", "texto": "MAS... existem alguns suplementos que realmente ajudam. Nao de forma magica, mas potencializando seu deficit calorico e melhorando seu metabolismo. Vamos separar a ciencia do hype."},
            {"tipo": "alerta", "tipo_alerta": "aviso", "texto": "IMPORTANTE: Nenhum suplemento substitui deficit calorico. Se voce nao esta comendo menos calorias do que gasta, nenhuma pilula vai te fazer emagrecer."},
            {"tipo": "heading", "nivel": 2, "texto": "A Verdade Sobre Emagrecimento"},
            {"tipo": "paragrafo", "texto": "Para emagrecer, voce precisa de uma coisa: deficit calorico. Gastar mais energia do que consome. Suplementos podem ajudar de 3 formas:"},
            {"tipo": "lista", "itens": ["Aumentar gasto calorico (termogenicos)", "Melhorar utilizacao de gordura como energia", "Reduzir apetite", "Manter massa muscular durante dieta"]},
            {"tipo": "heading", "nivel": 2, "texto": "1. Cafeina - O Unico Termogenico Comprovado"},
            {"tipo": "paragrafo", "texto": "A cafeina e o unico termogenico com evidencias solidas. Ela aumenta o gasto calorico em 3-11% e melhora oxidacao de gordura durante exercicio."},
            {"tipo": "tabela", "titulo": "Efeito da Cafeina no Metabolismo", "colunas": ["Dose", "Aumento no Metabolismo", "Duracao"], "linhas": [["100mg", "3-4%", "3 horas"], ["200mg", "5-8%", "4 horas"], ["400mg", "8-11%", "5 horas"]]},
            {"tipo": "alerta", "tipo_alerta": "info", "texto": "Traducao pratica: 200mg de cafeina pode fazer voce queimar 50-100 calorias extras por dia. Nao e muito, mas soma ao longo do tempo."},
            {"tipo": "lista", "titulo": "Como Usar Cafeina Para Emagrecer", "itens": ["Tome 30-60min antes do treino", "Comece com 100mg e aumente gradualmente", "Evite apos 14h para nao atrapalhar sono", "Ciclagem: 2 semanas ligado, 1 semana desligado"]},
            {"tipo": "heading", "nivel": 2, "texto": "2. L-Carnitina - Funciona, Mas Com Condicoes"},
            {"tipo": "paragrafo", "texto": "A L-carnitina transporta acidos graxos para as mitocondrias (onde gordura e queimada). Parece perfeito, certo? O problema: seu corpo ja produz L-carnitina suficiente, entao suplementar so ajuda em situacoes especificas."},
            {"tipo": "lista", "titulo": "Quando L-Carnitina FUNCIONA", "itens": ["Vegetarianos/veganos (dieta baixa em carnitina)", "Idosos (producao diminuida)", "Durante exercicio aerobico prolongado", "Combinada com carboidratos (melhora absorcao)"]},
            {"tipo": "lista", "titulo": "Quando L-Carnitina NAO FUNCIONA", "itens": ["Tomada sem exercicio", "Para quem ja come carne vermelha", "Como 'queimador de gordura' isolado"]},
            {"tipo": "heading", "nivel": 2, "texto": "3. Te Verde (EGCG) - Efeito Modesto Mas Real"},
            {"tipo": "paragrafo", "texto": "O extrato de cha verde contem EGCG, um composto que aumenta levemente a oxidacao de gordura. Meta-analises mostram perda de peso adicional de 1-2kg em 12 semanas."},
            {"tipo": "paragrafo", "texto": "Nao e muito, mas se voce ja esta fazendo tudo certo (dieta, exercicio), pode ser o empurraozinho final."},
            {"tipo": "heading", "nivel": 2, "texto": "4. Proteina (Whey) - O 'Emagrecedor' Mais Subestimado"},
            {"tipo": "paragrafo", "texto": "Proteina nao e vendida como suplemento para emagrecer, mas deveria ser. Ela tem o maior efeito termico dos macros (25-30% das calorias sao gastas na digestao) e preserva massa muscular durante deficit."},
            {"tipo": "alerta", "tipo_alerta": "sucesso", "texto": "Dica: Aumentar proteina de 15% para 30% das calorias pode aumentar saciedade, preservar musculo e queimar mais calorias na digestao."},
            {"tipo": "heading", "nivel": 2, "texto": "5. Fibras (Psyllium/Glucomannan) - Saciedade Real"},
            {"tipo": "paragrafo", "texto": "Fibras soluveis expandem no estomago e aumentam saciedade. Glucomannan especificamente tem estudos mostrando perda de peso adicional de 2-4kg em 8 semanas quando combinado com dieta."},
            {"tipo": "heading", "nivel": 2, "texto": "O Que NAO Funciona (Pare de Gastar Dinheiro)"},
            {"tipo": "lista", "titulo": "Golpes Comuns", "itens": ["CLA (Acido Linoleico Conjugado) - evidencias fracas em humanos", "Garcinia Cambogia - nao funciona fora do laboratorio", "Cetonas de Framboesa - puro marketing", "Qualquer 'blend secreto' ou 'formula exclusiva'", "Creme para queimar gordura localizada - impossivel", "Capsulas de vinagre de maca - o vinagre liquido e mais barato e igual"]},
            {"tipo": "heading", "nivel": 2, "texto": "O Stack Que Realmente Funciona"},
            {"tipo": "paragrafo", "texto": "Se voce quer usar suplementos para potencializar seu emagrecimento, aqui esta o que recomendo:"},
            {"tipo": "lista", "titulo": "Stack Basico Para Emagrecer", "itens": ["Proteina (Whey ou outra): 1.6-2.2g/kg de peso corporal", "Cafeina: 100-200mg pre-treino", "Fibras: 5g de psyllium antes das refeicoes principais"]},
            {"tipo": "lista", "titulo": "Adicoes Opcionais", "itens": ["Creatina: preserva forca durante deficit", "L-Carnitina 2g: se vegetariano ou faz muito cardio", "Extrato de cha verde 500mg: pequeno boost adicional"]},
            {"tipo": "heading", "nivel": 2, "texto": "O Que Realmente Importa"},
            {"tipo": "paragrafo", "texto": "Suplementos representam talvez 5% dos seus resultados. Os outros 95% vem de:"},
            {"tipo": "lista", "itens": ["Deficit calorico consistente (300-500 calorias)", "Proteina adequada (para preservar musculo)", "Treino de forca (sinal para manter musculo)", "Sono de qualidade (regula hormonios da fome)", "Consistencia por meses, nao dias"]},
            {"tipo": "cta", "texto": "Calcule quantas calorias voce precisa para emagrecer", "link": "/blog/deficit-calorico-quanto-cortar", "botao": "Calcular Deficit"},
            {"tipo": "heading", "nivel": 2, "texto": "Conclusao"},
            {"tipo": "paragrafo", "texto": "Suplementos para emagrecer funcionam - alguns deles, pelo menos. Cafeina, proteina e fibras sao os mais eficazes. O resto? Economize seu dinheiro e invista em comida de qualidade. Lembre-se: nenhuma pilula substitui o basico bem feito."}
        ]
    },
    # ========== CLUSTER PRE-TREINO ==========
    {
        "slug": "pre-treino-vale-a-pena",
        "titulo": "Pre-Treino Vale a Pena? Analise Completa de Ingredientes (2026)",
        "descricao": "Analise cientifica dos pre-treinos: quais ingredientes funcionam, dosagens eficazes, e como fazer seu proprio pre-treino por metade do preco.",
        "categoria": "suplementos",
        "tags": ["pre-treino", "cafeina", "beta-alanina", "citrulina", "performance"],
        "autor": "Equipe Suplementa Ja",
        "data_publicacao": "2026-02-04",
        "data_atualizacao": "2026-02-04",
        "tempo_leitura": 13,
        "conteudo": [
            {"tipo": "paragrafo", "texto": "Pre-treinos prometem energia explosiva, foco laser e bombas musculares insanas. Mas sera que eles realmente entregam? Ou voce esta pagando R$ 200 por cafeina enfeitada?"},
            {"tipo": "paragrafo", "texto": "Neste guia, vou dissecar os ingredientes mais comuns em pre-treinos, mostrar quais realmente funcionam (e em que doses), e te ensinar a montar um pre-treino caseiro por metade do preco."},
            {"tipo": "heading", "nivel": 2, "texto": "O Que Um Pre-Treino Deveria Fazer?"},
            {"tipo": "lista", "itens": ["Aumentar energia e diminuir percepcao de fadiga", "Melhorar foco e conexao mente-musculo", "Aumentar fluxo sanguineo (bomba)", "Prolongar performance em treinos longos"]},
            {"tipo": "heading", "nivel": 2, "texto": "Ingredientes Que FUNCIONAM (Com Doses Corretas)"},
            {"tipo": "heading", "nivel": 3, "texto": "1. Cafeina - O Rei do Pre-Treino"},
            {"tipo": "paragrafo", "texto": "A cafeina e o ingrediente mais estudado e eficaz. Ela bloqueia receptores de adenosina (que causam cansaco), aumenta liberacao de dopamina e adrenalina, e melhora forca e resistencia."},
            {"tipo": "tabela", "titulo": "Dosagem de Cafeina Pre-Treino", "colunas": ["Experiencia", "Dose", "Timing"], "linhas": [["Iniciante", "100-150mg", "30-60min antes"], ["Intermediario", "150-250mg", "30-45min antes"], ["Avancado", "250-400mg", "30-45min antes"]]},
            {"tipo": "alerta", "tipo_alerta": "info", "texto": "Regra de ouro: 3-6mg por kg de peso corporal e a faixa eficaz. Pessoa de 70kg = 210-420mg."},
            {"tipo": "heading", "nivel": 3, "texto": "2. Citrulina Malato - A Bomba de Verdade"},
            {"tipo": "paragrafo", "texto": "Citrulina e convertida em arginina e depois em oxido nitrico (NO), que dilata vasos sanguineos. Resultado: mais sangue nos musculos, melhor 'pump' e reducao de fadiga."},
            {"tipo": "lista", "titulo": "Beneficios Comprovados", "itens": ["Aumenta reps ate a falha em 10-20%", "Melhora recuperacao entre series", "Reduz dor muscular pos-treino", "A 'bomba' real que voce sente"]},
            {"tipo": "alerta", "tipo_alerta": "aviso", "texto": "DOSE MINIMA EFICAZ: 6-8g de citrulina malato. Muitos pre-treinos colocam apenas 3g (subdosado)."},
            {"tipo": "heading", "nivel": 3, "texto": "3. Beta-Alanina - O Formigamento Que Funciona"},
            {"tipo": "paragrafo", "texto": "Beta-alanina aumenta carnosina muscular, que tampona acido latico. Resultado: voce aguenta mais repeticoes em exercicios de alta intensidade (8-15 reps)."},
            {"tipo": "paragrafo", "texto": "O formigamento (parestesia) e inofensivo - e so a beta-alanina ativando receptores nervosos. Nao significa que esta funcionando melhor."},
            {"tipo": "tabela", "titulo": "Beta-Alanina", "colunas": ["Aspecto", "Detalhe"], "linhas": [["Dose eficaz", "3.2-6.4g por dia"], ["Timing", "Nao importa (efeito cumulativo)"], ["Tempo para efeito", "2-4 semanas de uso continuo"], ["Melhor para", "Series de 60-240 segundos"]]},
            {"tipo": "heading", "nivel": 3, "texto": "4. Creatina - Deveria Estar em Todo Pre-Treino"},
            {"tipo": "paragrafo", "texto": "Creatina aumenta forca, potencia e ganho de massa muscular. Porem, ela nao precisa ser tomada pre-treino - o timing nao importa, apenas a consistencia diaria."},
            {"tipo": "alerta", "tipo_alerta": "sucesso", "texto": "Se seu pre-treino tem creatina, otimo. Se nao tem, tome separado (5g/dia em qualquer horario)."},
            {"tipo": "heading", "nivel": 3, "texto": "5. Tirosina - Foco Sob Estresse"},
            {"tipo": "paragrafo", "texto": "L-Tirosina e precursora de dopamina e noradrenalina. Ela melhora foco e cognicao especialmente em situacoes de estresse (como treinos intensos ou privacao de sono)."},
            {"tipo": "paragrafo", "texto": "Dose eficaz: 500-2000mg. Funciona melhor quando voce esta cansado ou estressado."},
            {"tipo": "heading", "nivel": 2, "texto": "Ingredientes OVERRATED (Economize Dinheiro)"},
            {"tipo": "lista", "titulo": "Nao Vale o Preco", "itens": ["Arginina: Pessima absorcao oral (citrulina e muito melhor)", "BCAA: Inutil se voce ja come proteina suficiente", "Taurina: Efeito minimo na performance", "Betaina: Estudos mistos, efeito pequeno", "Vitaminas B em dose alta: Voce ja tem o suficiente da dieta"]},
            {"tipo": "heading", "nivel": 2, "texto": "Monte Seu Pre-Treino Por Metade do Preco"},
            {"tipo": "paragrafo", "texto": "Em vez de pagar R$ 200 em um pre-treino com ingredientes subdosados, monte o seu:"},
            {"tipo": "tabela", "titulo": "Pre-Treino Caseiro Otimizado", "colunas": ["Ingrediente", "Dose", "Preco Aprox/Mes"], "linhas": [["Cafeina (capsula 200mg)", "1 capsula", "R$ 15"], ["Citrulina Malato (po)", "6-8g", "R$ 40"], ["Beta-Alanina (po)", "3g", "R$ 25"], ["Creatina Mono (po)", "5g", "R$ 30"], ["TOTAL", "-", "R$ 110"]]},
            {"tipo": "alerta", "tipo_alerta": "sucesso", "texto": "Voce economiza R$ 90/mes E tem um pre-treino com doses realmente eficazes, sem corantes e edulcorantes."},
            {"tipo": "heading", "nivel": 2, "texto": "Como Analisar Rotulo de Pre-Treino"},
            {"tipo": "lista", "titulo": "Red Flags", "itens": ["'Proprietary Blend' ou 'Blend Exclusivo': Esconde dosagens subdosadas", "Lista enorme de ingredientes: Quantidade de cada um provavelmente e minuscula", "Apenas 1 scoop de 5g total: Impossivel ter doses eficazes", "Foco em ingredientes exoticos: Marketing sobre ciencia"]},
            {"tipo": "lista", "titulo": "Green Flags", "itens": ["Doses individuais claras no rotulo", "Citrulina 6g+, Beta-alanina 3g+", "Cafeina em dose conhecida", "Poucos ingredientes, doses altas"]},
            {"tipo": "heading", "nivel": 2, "texto": "Quando NAO Usar Pre-Treino"},
            {"tipo": "lista", "itens": ["Treino noturno (cafeina vai atrapalhar sono)", "Problemas cardiacos ou pressao alta", "Ansiedade severa", "Sensibilidade a cafeina", "Se voce ja toma muito cafe (tolerancia alta)"]},
            {"tipo": "heading", "nivel": 2, "texto": "Conclusao"},
            {"tipo": "paragrafo", "texto": "Pre-treinos podem valer a pena - SE tiverem os ingredientes certos nas doses certas. Cafeina, citrulina e beta-alanina sao os que realmente funcionam. O resto e geralmente marketing."},
            {"tipo": "paragrafo", "texto": "Minha recomendacao: monte seu proprio pre-treino ou escolha um que seja transparente com as dosagens. Seu bolso e seus resultados agradecem."},
            {"tipo": "cta", "texto": "Saiba mais sobre cafeina e performance", "link": "/blog/cafeina-performance-dose-pre-treino", "botao": "Ver Guia de Cafeina"}
        ]
    },
    # ========== ARTIGO COMPLEMENTAR - IMUNIDADE ==========
    {
        "slug": "como-fortalecer-imunidade-suplementos",
        "titulo": "Como Fortalecer a Imunidade: Suplementos Que a Ciencia Aprova",
        "descricao": "Guia baseado em evidencias sobre suplementos para imunidade: Vitamina D, Zinco, Vitamina C, Probioticos e mais. O que funciona e o que e hype.",
        "categoria": "imunidade",
        "tags": ["imunidade", "vitamina d", "zinco", "vitamina c", "probioticos"],
        "autor": "Equipe Suplementa Ja",
        "data_publicacao": "2026-02-04",
        "data_atualizacao": "2026-02-04",
        "tempo_leitura": 11,
        "conteudo": [
            {"tipo": "paragrafo", "texto": "Todo mundo quer um sistema imunologico forte - especialmente depois de tudo que vivemos nos ultimos anos. Mas quais suplementos realmente ajudam a imunidade? E quais sao apenas marketing?"},
            {"tipo": "paragrafo", "texto": "Neste guia, vou te mostrar o que a ciencia diz sobre os suplementos mais populares para imunidade, com dosagens e recomendacoes praticas."},
            {"tipo": "heading", "nivel": 2, "texto": "Como o Sistema Imune Funciona (Versao Simples)"},
            {"tipo": "paragrafo", "texto": "Seu sistema imune tem duas linhas de defesa: a inata (resposta rapida, generica) e a adaptativa (resposta especifica, com memoria). Nutricao adequada e essencial para ambas funcionarem bem."},
            {"tipo": "paragrafo", "texto": "Deficiencias de certos nutrientes podem literalmente desligar partes do seu sistema imune. E e ai que suplementos podem ajudar."},
            {"tipo": "heading", "nivel": 2, "texto": "1. Vitamina D - O Imunomodulador Essencial"},
            {"tipo": "paragrafo", "texto": "A vitamina D e talvez o nutriente mais importante para imunidade. Ela regula mais de 200 genes relacionados a funcao imune e a maioria dos brasileiros e deficiente (estimativa: 70-90%)."},
            {"tipo": "alerta", "tipo_alerta": "aviso", "texto": "Deficiencia de vitamina D esta associada a maior risco de infeccoes respiratorias, doencas autoimunes e ate mesmo formas mais graves de COVID-19."},
            {"tipo": "tabela", "titulo": "Dosagem de Vitamina D", "colunas": ["Situacao", "Dose Diaria", "Nota"], "linhas": [["Manutencao (nivel ok)", "1000-2000 UI", "Para manter niveis"], ["Deficiencia leve", "3000-4000 UI", "Por 3 meses, depois reavaliar"], ["Deficiencia severa", "5000-10000 UI", "Sob supervisao medica"]]},
            {"tipo": "lista", "titulo": "Como Maximizar Absorcao", "itens": ["Tome com refeicao gordurosa", "Combine com vitamina K2 (100-200mcg)", "Verifique niveis no sangue 1-2x/ano", "Meta: 40-60 ng/mL no exame"]},
            {"tipo": "heading", "nivel": 2, "texto": "2. Zinco - O Mineral Anti-Viral"},
            {"tipo": "paragrafo", "texto": "Zinco e critico para desenvolvimento e funcao de celulas imunes. Deficiencia (comum em idosos e vegetarianos) prejudica seriamente a capacidade de combater infeccoes."},
            {"tipo": "alerta", "tipo_alerta": "sucesso", "texto": "Meta-analise mostrou: Zinco tomado nas primeiras 24h de resfriado reduz duracao em 1-2 dias."},
            {"tipo": "lista", "titulo": "Dosagem de Zinco", "itens": ["Manutencao: 15-25mg/dia", "Durante resfriado: 75mg/dia (pastilhas) por ate 7 dias", "Forma: Quelato, picolinato ou gluconato (melhor absorcao)", "NUNCA mais de 40mg/dia por longos periodos (interfere com cobre)"]},
            {"tipo": "heading", "nivel": 2, "texto": "3. Vitamina C - Util, Mas Nao Magica"},
            {"tipo": "paragrafo", "texto": "Vitamina C e antioxidante e essencial para funcao imune. Porem, megadoses (1-2g+) nao previnem resfriados em pessoas saudaveis. O beneficio real e modesto."},
            {"tipo": "tabela", "titulo": "O Que Vitamina C Realmente Faz", "colunas": ["Situacao", "Beneficio"], "linhas": [["Pessoa saudavel", "Reduz duracao de resfriado em 8%"], ["Atletas/estresse fisico", "Reduz risco de resfriado em 50%"], ["Ja doente", "Pode reduzir severidade levemente"]]},
            {"tipo": "paragrafo", "texto": "Dose recomendada: 500-1000mg/dia. Mais que isso e excretado na urina. Prefira dividir em 2 doses."},
            {"tipo": "heading", "nivel": 2, "texto": "4. Probioticos - Imunidade Comeca no Intestino"},
            {"tipo": "paragrafo", "texto": "70% do sistema imune esta no intestino. Probioticos modulam essa resposta imune intestinal e podem reduzir incidencia e duracao de infeccoes respiratorias."},
            {"tipo": "lista", "titulo": "Cepas Com Evidencia Para Imunidade", "itens": ["Lactobacillus rhamnosus GG", "Lactobacillus paracasei", "Bifidobacterium lactis", "Dose: 10-20 bilhoes UFC/dia"]},
            {"tipo": "heading", "nivel": 2, "texto": "5. Selenio - O Antioxidante Essencial"},
            {"tipo": "paragrafo", "texto": "Selenio e necessario para producao de glutationa (o principal antioxidante do corpo) e funcao adequada de celulas imunes. Deficiencia e comum no Brasil (solos pobres em selenio)."},
            {"tipo": "paragrafo", "texto": "Dose: 55-100mcg/dia. Uma castanha-do-para por dia fornece aproximadamente isso."},
            {"tipo": "heading", "nivel": 2, "texto": "6. Elderberry (Sabugueiro) - Promissor Mas Cuidado"},
            {"tipo": "paragrafo", "texto": "Extrato de sabugueiro tem estudos mostrando reducao de duracao e severidade de gripes. Porem, alguns especialistas alertam que pode estimular demais o sistema imune em certas situacoes."},
            {"tipo": "alerta", "tipo_alerta": "info", "texto": "Use elderberry no inicio dos sintomas de gripe/resfriado, nao como prevencao diaria."},
            {"tipo": "heading", "nivel": 2, "texto": "O Que NAO Funciona (Economize)"},
            {"tipo": "lista", "titulo": "Hype Sem Evidencia", "itens": ["Megadoses de vitamina C (mais de 2g)", "Equinacea (estudos muito mistos)", "Propolis (pode ajudar, evidencias fracas)", "Qualquer 'blend de imunidade' com 20 ingredientes"]},
            {"tipo": "heading", "nivel": 2, "texto": "Protocolo Pratico Para Imunidade"},
            {"tipo": "lista", "titulo": "Stack Basico (Todo Dia)", "itens": ["Vitamina D3: 2000-4000 UI", "Zinco: 15-25mg", "Vitamina C: 500mg", "Probiotico: 10 bilhoes UFC"]},
            {"tipo": "lista", "titulo": "Quando Sentir Que Vai Ficar Doente", "itens": ["Zinco pastilha: 75mg/dia (dividido)", "Vitamina C: 1000mg 2x/dia", "Elderberry: conforme rotulo", "Descanso e hidratacao"]},
            {"tipo": "heading", "nivel": 2, "texto": "Alem de Suplementos: O Basico Importa"},
            {"tipo": "lista", "itens": ["Sono de qualidade (7-9 horas)", "Exercicio moderado regular", "Gerenciamento de estresse", "Alimentacao rica em vegetais", "Evitar alcool em excesso", "Nao fumar"]},
            {"tipo": "heading", "nivel": 2, "texto": "Conclusao"},
            {"tipo": "paragrafo", "texto": "Vitamina D e zinco sao os suplementos com melhor evidencia para imunidade - e a maioria dos brasileiros e deficiente em ambos. Adicione vitamina C e probioticos para um protocolo completo."},
            {"tipo": "paragrafo", "texto": "Mas lembre-se: suplementos nao compensam sono ruim, estresse cronico ou alimentacao pobre. O basico bem feito e mais importante que qualquer pilula."},
            {"tipo": "cta", "texto": "Saiba mais sobre Vitamina D", "link": "/blog/vitamina-d-deficiencia-brasileiros", "botao": "Ver Guia de Vitamina D"}
        ]
    },
    # ========== CLUSTER ARTICULACOES ==========
    {
        "slug": "suplementos-para-dor-articulacao-joelho",
        "titulo": "Suplementos Para Dor nas Articulacoes: O Que Funciona Para Joelho, Ombro e Quadril",
        "descricao": "Analise cientifica dos suplementos para articulacoes: colageno tipo 2, glucosamina, condroitina, MSM, curcumina. O que realmente alivia dor e o que e placebo.",
        "categoria": "articulacoes",
        "tags": ["articulacoes", "joelho", "colageno", "glucosamina", "dor"],
        "autor": "Equipe Suplementa Ja",
        "data_publicacao": "2026-02-04",
        "data_atualizacao": "2026-02-04",
        "tempo_leitura": 12,
        "conteudo": [
            {"tipo": "paragrafo", "texto": "Dor no joelho ao subir escada. Ombro que estala. Quadril travado de manha. Se voce treina pesado (ou tem mais de 40 anos), provavelmente conhece essas dores."},
            {"tipo": "paragrafo", "texto": "O mercado de suplementos para articulacoes e enorme - e cheio de promessas exageradas. Vamos separar o que realmente tem evidencia do que e marketing."},
            {"tipo": "heading", "nivel": 2, "texto": "Entendendo Dor Articular"},
            {"tipo": "paragrafo", "texto": "A maioria das dores articulares vem de: desgaste da cartilagem (osteoartrite), inflamacao cronica, ou lesoes em ligamentos/tendoes. Suplementos podem ajudar de formas diferentes dependendo da causa."},
            {"tipo": "heading", "nivel": 2, "texto": "1. Colageno Tipo II Nao-Desnaturado (UC-II)"},
            {"tipo": "paragrafo", "texto": "UC-II e diferente do colageno hidrolisado comum. Ele 'treina' o sistema imune a nao atacar a propria cartilagem. Estudos mostram reducao significativa de dor em osteoartrite."},
            {"tipo": "alerta", "tipo_alerta": "sucesso", "texto": "Estudo: 40mg de UC-II foi mais eficaz que glucosamina + condroitina para osteoartrite de joelho."},
            {"tipo": "lista", "titulo": "UC-II - Detalhes", "itens": ["Dose: 40mg por dia (nao mais!)", "Timing: Com estomago vazio de manha", "Tempo para efeito: 8-12 semanas", "Nao confundir com colageno hidrolisado (diferente)"]},
            {"tipo": "heading", "nivel": 2, "texto": "2. Glucosamina + Condroitina - O Classico"},
            {"tipo": "paragrafo", "texto": "A dupla mais famosa para articulacoes. Resultados de estudos sao mistos - alguns mostram beneficio, outros nao. Parece funcionar melhor para dor moderada a severa."},
            {"tipo": "tabela", "titulo": "Glucosamina + Condroitina", "colunas": ["Aspecto", "Recomendacao"], "linhas": [["Dose Glucosamina", "1500mg/dia"], ["Dose Condroitina", "1200mg/dia"], ["Forma preferida", "Sulfato (nao HCl)"], ["Tempo para efeito", "4-8 semanas"]]},
            {"tipo": "alerta", "tipo_alerta": "info", "texto": "Dica: Se nao sentir melhora em 3 meses, provavelmente nao vai funcionar para voce."},
            {"tipo": "heading", "nivel": 2, "texto": "3. MSM (Metilsulfonilmetano)"},
            {"tipo": "paragrafo", "texto": "MSM fornece enxofre organico, necessario para formar cartilagem e tecido conectivo. Estudos mostram reducao de dor e inflamacao em osteoartrite."},
            {"tipo": "paragrafo", "texto": "Dose: 1.5-6g por dia, dividido em 2-3 doses. Comece baixo e aumente gradualmente."},
            {"tipo": "heading", "nivel": 2, "texto": "4. Curcumina - Anti-inflamatorio Natural"},
            {"tipo": "paragrafo", "texto": "Curcumina (da curcuma) tem potente efeito anti-inflamatorio. Meta-analises mostram que e tao eficaz quanto ibuprofeno para dor de osteoartrite - sem os efeitos colaterais no estomago."},
            {"tipo": "lista", "titulo": "Como Usar Curcumina", "itens": ["Dose: 500-1000mg de curcuminoides por dia", "OBRIGATORIO: Forma com piperina ou lipossomal (absorcao e pessima sozinha)", "Pode levar 4-8 semanas para efeito maximo", "Evitar se usa anticoagulantes"]},
            {"tipo": "heading", "nivel": 2, "texto": "5. Omega-3 (EPA/DHA)"},
            {"tipo": "paragrafo", "texto": "Omega-3 tem efeito anti-inflamatorio sistemico. Em doses altas (2-4g EPA+DHA), pode reduzir dor e rigidez articular, especialmente em artrite reumatoide."},
            {"tipo": "heading", "nivel": 2, "texto": "6. Colageno Hidrolisado - Para Tendoes e Ligamentos"},
            {"tipo": "paragrafo", "texto": "Diferente do UC-II, colageno hidrolisado fornece aminoacidos para construir tecido conectivo. Util para lesoes em tendoes e ligamentos, menos para osteoartrite."},
            {"tipo": "paragrafo", "texto": "Dose: 10-15g por dia. Combine com vitamina C (50-100mg) para melhor sintese de colageno."},
            {"tipo": "heading", "nivel": 2, "texto": "Stack Pratico Por Tipo de Problema"},
            {"tipo": "lista", "titulo": "Osteoartrite (Desgaste)", "itens": ["UC-II: 40mg/dia", "Curcumina: 500mg 2x/dia", "Omega-3: 2-3g EPA+DHA"]},
            {"tipo": "lista", "titulo": "Lesao em Tendao/Ligamento", "itens": ["Colageno hidrolisado: 15g/dia", "Vitamina C: 100mg junto", "MSM: 3g/dia"]},
            {"tipo": "lista", "titulo": "Inflamacao Geral/Prevenao", "itens": ["Glucosamina: 1500mg/dia", "Omega-3: 2g/dia", "Curcumina: 500mg/dia"]},
            {"tipo": "heading", "nivel": 2, "texto": "O Que NAO Funciona"},
            {"tipo": "lista", "itens": ["Colageno tipo I/III para osteoartrite (errado)", "Glucosamina HCl (forma menos eficaz)", "Qualquer suplemento subdosado", "Doses unicas gigantes (melhor dividir)"]},
            {"tipo": "heading", "nivel": 2, "texto": "Alem de Suplementos"},
            {"tipo": "lista", "itens": ["Fortalecimento muscular ao redor da articulacao", "Perda de peso (se acima do ideal)", "Mobilidade e alongamento diario", "Gelo apos atividade intensa", "Fisioterapia se dor persistente"]},
            {"tipo": "heading", "nivel": 2, "texto": "Conclusao"},
            {"tipo": "paragrafo", "texto": "Para osteoartrite, UC-II e curcumina tem a melhor evidencia. Glucosamina/condroitina funcionam para algumas pessoas. Para tendoes e ligamentos, colageno hidrolisado com vitamina C."},
            {"tipo": "paragrafo", "texto": "De tempo aos suplementos (8-12 semanas) e combine com exercicios de fortalecimento para melhores resultados."},
            {"tipo": "cta", "texto": "Saiba mais sobre Colageno", "link": "/blog/colageno-hidrolisado-funciona-pele-articulacoes", "botao": "Ver Guia de Colageno"}
        ]
    }
]

# Carregar artigos existentes
with open('data/artigos.json', 'r', encoding='utf-8') as f:
    artigos = json.load(f)

print(f"Artigos existentes: {len(artigos)}")

# Verificar se algum slug ja existe
slugs_existentes = [a['slug'] for a in artigos]
novos = 0

for novo in novos_artigos:
    if novo['slug'] in slugs_existentes:
        print(f"IGNORADO (ja existe): {novo['slug']}")
    else:
        artigos.append(novo)
        novos += 1
        print(f"ADICIONADO: {novo['slug']} ({len(novo['conteudo'])} blocos)")

# Salvar
with open('data/artigos.json', 'w', encoding='utf-8') as f:
    json.dump(artigos, f, ensure_ascii=False, indent=2)

print(f"\n{novos} novos artigos adicionados!")
print(f"Total agora: {len(artigos)} artigos")
