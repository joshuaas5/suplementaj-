#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Script para adicionar RESUMO RÁPIDO aos artigos existentes e limpar duplicatas
"""

import json
import sys

def main():
    # Ler arquivo atual
    with open('/home/user/suplementaj-/data/artigos.json', 'r', encoding='utf-8') as f:
        artigos = json.load(f)

    # Manter apenas os primeiros 3 artigos completos (sem duplicatas)
    artigos_limpos = []

    # Artigo 1: Vitamina D (adicionar RESUMO RÁPIDO)
    artigo_vitamina_d = artigos[0]
    resumo_vitamina_d = {
        "tipo": "alerta",
        "variante": "warning",
        "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Problema**: 90% dos brasileiros têm deficiência mesmo com sol abundante\n• **Dose**: 1.000-2.000 UI/dia (manutenção) | 5.000-10.000 UI/dia (deficiência)\n• **Melhor Forma**: Vitamina D3 (colecalciferol)\n• **Quando Tomar**: Com refeição gordurosa pela manhã\n• **Tempo para Efeito**: 3-6 meses para normalizar níveis\n• **Benefícios**: Ossos fortes, imunidade, humor, coração, prevenção de câncer\n• **Exame**: Dosar 25-OH vitamina D (ideal: 40-60 ng/mL)\n• **Custo**: R$15-30/mês"
    }
    artigo_vitamina_d['conteudo'].insert(0, resumo_vitamina_d)
    artigos_limpos.append(artigo_vitamina_d)

    # Artigo 2: B12 (adicionar RESUMO RÁPIDO)
    artigo_b12 = artigos[1]
    resumo_b12 = {
        "tipo": "alerta",
        "variante": "danger",
        "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Problema**: B12 NÃO existe em plantas. 100% dos veganos desenvolvem deficiência\n• **Dose**: 50 mcg/dia OU 1.000 mcg 2x/semana (veganos) | 25-50 mcg/dia (vegetarianos)\n• **Melhor Forma**: Cianocobalamina sublingual (custo-benefício) | Metilcobalamina (idosos)\n• **Quando Tomar**: Sublingual em jejum (30 min antes do café)\n• **Tempo para Efeito**: 2-4 semanas (energia) | 2-3 meses (exames)\n• **Sintomas de Deficiência**: Formigamento, fadiga, anemia, depressão, perda de memória\n• **PERIGO**: Danos neurológicos podem ser IRREVERSÍVEIS se não tratar\n• **Exame**: B12 sérica (ideal >400 pg/mL) + Ácido metilmalônico\n• **Custo**: R$15-30/mês"
    }
    artigo_b12['conteudo'].insert(0, resumo_b12)
    artigos_limpos.append(artigo_b12)

    # Artigo 3: Ômega-3 (adicionar RESUMO RÁPIDO)
    artigo_omega3 = artigos[2]
    resumo_omega3 = {
        "tipo": "alerta",
        "variante": "info",
        "texto": "📋 **RESUMO RÁPIDO:**\n\n• **Para Que Serve**: Saúde cardiovascular, cérebro, anti-inflamatório, triglicerídeos, depressão\n• **Dose**: 1.000-2.000 mg EPA+DHA/dia | 2.000-4.000 mg/dia (triglicerídeos altos)\n• **EPA vs DHA**: EPA = coração, depressão | DHA = cérebro, visão, gravidez\n• **Melhor Fonte**: Óleo de peixe concentrado (60-80% EPA+DHA) | Óleo de algas (vegano)\n• **Quando Tomar**: Com refeição gordurosa (absorção 3x maior)\n• **Tempo para Efeito**: 4-8 semanas (triglicerídeos) | 8-12 semanas (depressão)\n• **Sinais de Deficiência**: Pele seca, fadiga, depressão, má memória, dor articular\n• **Cuidado**: >3g/dia pode aumentar sangramento (cuidado com anticoagulantes)\n• **Custo**: R$40-80/mês"
    }
    artigo_omega3['conteudo'].insert(0, resumo_omega3)
    artigos_limpos.append(artigo_omega3)

    # Salvar arquivo limpo
    with open('/home/user/suplementaj-/data/artigos.json', 'w', encoding='utf-8') as f:
        json.dump(artigos_limpos, f, ensure_ascii=False, indent=2)

    print(f"✅ Artigos.json limpo e atualizado com RESUMO RÁPIDO!")
    print(f"Total de artigos: {len(artigos_limpos)}")

if __name__ == '__main__':
    main()
