# Corrigir duplicação na página de nutrientes

with open('app/nutrientes/page.tsx', 'r', encoding='utf-8') as f:
    conteudo = f.read()

# A seção "Mais Acessados" está duplicada, precisamos remover a segunda ocorrência
# Vou procurar a partir da segunda ocorrência de "{/* Nutrientes Mais Acessados */}"

# Contar ocorrências
count = conteudo.count('{/* Nutrientes Mais Acessados */}')
print(f'Encontradas {count} seções de "Mais Acessados"')

if count > 1:
    # Encontrar posições
    first = conteudo.find('{/* Nutrientes Mais Acessados */}')
    # Encontrar o final da primeira seção (antes da segunda)
    second = conteudo.find('{/* Nutrientes Mais Acessados */}', first + 1)
    
    # Encontrar onde termina a segunda seção duplicada (antes de Navegação Rápida)
    nav_rapida = conteudo.find('{/* Navegação Rápida */}', second)
    
    # Remover a seção duplicada
    conteudo_corrigido = conteudo[:second] + conteudo[nav_rapida:]
    
    with open('app/nutrientes/page.tsx', 'w', encoding='utf-8') as f:
        f.write(conteudo_corrigido)
    
    print('Duplicação removida com sucesso!')
else:
    print('Nenhuma duplicação encontrada')
