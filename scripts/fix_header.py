# Script para corrigir Header.tsx - links com acento

with open('components/layout/Header.tsx', 'r', encoding='utf-8') as f:
    conteudo = f.read()

# Corrigir o link /avaliação para /avaliacao (URL não deve ter acento)
conteudo = conteudo.replace('/avaliação', '/avaliacao')

with open('components/layout/Header.tsx', 'w', encoding='utf-8') as f:
    f.write(conteudo)

print('Header.tsx corrigido! Link /avaliacao agora sem acento.')
