import re

with open('app/blog/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Corrigir a estrutura - adicionar } que esta faltando
old = '''      },
    ],

  // FAQ Schema'''

new = '''      },
    ],
  }

  // FAQ Schema'''

if old in content:
    content = content.replace(old, new)
    with open('app/blog/[slug]/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Corrigido!")
else:
    print("Padrao nao encontrado")
    # Procurar o problema
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if 'FAQ Schema' in line:
            print(f"Linha {i}: Contexto:")
            for j in range(max(0, i-5), min(len(lines), i+3)):
                print(f"  {j}: {lines[j]}")
            break
