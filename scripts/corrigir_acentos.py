import os
import re

# =============================================
# SCRIPT PARA CORRIGIR ACENTOS EM TODO O SITE
# =============================================

print("="*60)
print(" CORRIGINDO ACENTOS EM TODO O SITE")
print("="*60)

# Mapeamento de palavras sem acento para com acento
correcoes = {
    # Palavras comuns
    'preco': 'preço',
    'Preco': 'Preço',
    'PRECO': 'PREÇO',
    'nao ': 'não ',
    'Nao ': 'Não ',
    'NAO ': 'NÃO ',
    'voce': 'você',
    'Voce': 'Você',
    'ciencia': 'ciência',
    'Ciencia': 'Ciência',
    'beneficio': 'benefício',
    'Beneficio': 'Benefício',
    'tambem': 'também',
    'Tambem': 'Também',
    'saude': 'saúde',
    'Saude': 'Saúde',
    'coracao': 'coração',
    'Coracao': 'Coração',
    'funcao': 'função',
    'Funcao': 'Função',
    'absorcao': 'absorção',
    'Absorcao': 'Absorção',
    'recuperacao': 'recuperação',
    'Recuperacao': 'Recuperação',
    'musculacao': 'musculação',
    'Musculacao': 'Musculação',
    'deficiencia': 'deficiência',
    'Deficiencia': 'Deficiência',
    'eficacia': 'eficácia',
    'Eficacia': 'Eficácia',
    'forca': 'força',
    'Forca': 'Força',
    'ossea': 'óssea',
    'Ossea': 'Óssea',
    'cardiaca': 'cardíaca',
    'Cardiaca': 'Cardíaca',
    'inflamatorio': 'inflamatório',
    'Inflamatorio': 'Inflamatório',
    'cerebro': 'cérebro',
    'Cerebro': 'Cérebro',
    'articulacoes': 'articulações',
    'Articulacoes': 'Articulações',
    'pos-treino': 'pós-treino',
    'Pos-treino': 'Pós-treino',
    'escritorio': 'escritório',
    'Escritorio': 'Escritório',
    'hormonios': 'hormônios',
    'Hormonios': 'Hormônios',
    'suplementacao': 'suplementação',
    'Suplementacao': 'Suplementação',
    ' e ': ' é ',  # Cuidado com este
    'seguro ': 'seguro ',  # Ja correto
    'E seguro': 'É seguro',
    ' so ': ' só ',
    'analises': 'análises',
    'Analises': 'Análises',
    'informacoes': 'informações',
    'Informacoes': 'Informações',
    'indicacoes': 'indicações',
    'Indicacoes': 'Indicações',
    'dosagens': 'dosagens',  # Ja correto
    'avaliacao': 'avaliação',
    'Avaliacao': 'Avaliação',
    'nutricao': 'nutrição',
    'Nutricao': 'Nutrição',
    'opcao': 'opção',
    'Opcao': 'Opção',
}

# Arquivos para corrigir
arquivos_corrigir = [
    'app/melhores-suplementos/page.tsx',
    'app/blog/[slug]/page.tsx',
    'components/layout/Header.tsx',
]

for arquivo in arquivos_corrigir:
    if not os.path.exists(arquivo):
        print(f'Arquivo nao encontrado: {arquivo}')
        continue
        
    with open(arquivo, 'r', encoding='utf-8') as f:
        conteudo = f.read()
    
    conteudo_original = conteudo
    
    # Aplicar correcoes
    for errado, certo in correcoes.items():
        conteudo = conteudo.replace(errado, certo)
    
    if conteudo != conteudo_original:
        with open(arquivo, 'w', encoding='utf-8') as f:
            f.write(conteudo)
        print(f'Corrigido: {arquivo}')
    else:
        print(f'Sem alteracoes: {arquivo}')

print('\nCorrecoes de acentos concluidas!')
