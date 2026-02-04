import json

# Adicionar FAQs aos artigos que nao tem
with open('data/artigos.json', 'r', encoding='utf-8') as f:
    artigos = json.load(f)

# FAQs comuns por tipo de conteudo
faqs_suplementos = [
    {
        "pergunta": "E seguro tomar esse suplemento todos os dias?",
        "resposta": "Sim, quando tomado nas doses recomendadas, a maioria dos suplementos e segura para uso diario. Consulte sempre um profissional de saude antes de iniciar qualquer suplementacao."
    },
    {
        "pergunta": "Quanto tempo leva para ver resultados?",
        "resposta": "Os resultados variam de pessoa para pessoa, mas geralmente entre 4-12 semanas de uso consistente voce comeca a notar os beneficios."
    },
    {
        "pergunta": "Posso tomar junto com outros suplementos?",
        "resposta": "Na maioria dos casos sim, mas algumas combinacoes devem ser evitadas. Recomendamos consultar um nutricionista para um protocolo personalizado."
    }
]

faqs_vitaminas = [
    {
        "pergunta": "Qual o melhor horario para tomar essa vitamina?",
        "resposta": "Vitaminas lipossoluveis (A, D, E, K) devem ser tomadas com refeicoes gordurosas. Vitaminas hidrossoluveis (complexo B, C) podem ser tomadas em jejum."
    },
    {
        "pergunta": "Como saber se tenho deficiencia?",
        "resposta": "A melhor forma e fazer exames de sangue. Alguns sintomas comuns incluem fadiga, queda de cabelo, e baixa imunidade."
    }
]

faqs_minerais = [
    {
        "pergunta": "Qual a forma mais biodisponivel desse mineral?",
        "resposta": "Formas queladas (glicinato, bisglicinato) geralmente tem melhor absorcao que formas inorganicas (oxido, carbonato)."
    },
    {
        "pergunta": "Posso obter apenas pela alimentacao?",
        "resposta": "Depende do mineral e da sua dieta. Alguns minerais como magnesio sao dificeis de obter em quantidades adequadas apenas pela alimentacao moderna."
    }
]

faqs_adicionados = 0

for artigo in artigos:
    # Verificar se ja tem FAQ
    tem_faq = any(b.get('tipo') == 'faq' for b in artigo.get('conteudo', []))
    
    if not tem_faq:
        categoria = artigo.get('categoria', '')
        
        # Escolher FAQs baseado na categoria
        if categoria in ['Vitaminas']:
            faqs = faqs_vitaminas
        elif categoria in ['Minerais']:
            faqs = faqs_minerais
        else:
            faqs = faqs_suplementos
        
        # Adicionar bloco FAQ
        artigo['conteudo'].append({
            "tipo": "faq",
            "perguntas": faqs
        })
        faqs_adicionados += 1

# Salvar
with open('data/artigos.json', 'w', encoding='utf-8') as f:
    json.dump(artigos, f, ensure_ascii=False, indent=2)

print(f'FAQs adicionados a {faqs_adicionados} artigos!')
