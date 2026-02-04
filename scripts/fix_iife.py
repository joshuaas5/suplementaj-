# Corrigir o fechamento do IIFE

with open('app/blog/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# O problema esta aqui - falta fechar o IIFE
old = '''              </Link>
              ))}
          </div>
        </div>

        {/* Anuncio final */}'''

new = '''              </Link>
              ));
            })()}
          </div>
        </div>

        {/* Anuncio final */}'''

# Procurar versao com acento
old_accent = '''              </Link>
              ))}
          </div>
        </div>

        {/* An\u00fancio final */}'''

new_accent = '''              </Link>
              ));
            })()}
          </div>
        </div>

        {/* An\u00fancio final */}'''

if old in content:
    content = content.replace(old, new)
    print("Corrigido (sem acento)!")
elif old_accent in content:
    content = content.replace(old_accent, new_accent)
    print("Corrigido (com acento)!")
else:
    # Tentar encontrar o padrao de forma diferente
    import re
    pattern = r'</Link>\s*\)\)\}\s*</div>\s*</div>\s*\{/\* An'
    if re.search(pattern, content):
        print("Padrao encontrado, corrigindo com regex...")
        content = re.sub(
            r'(</Link>\s*)\)\)\}(\s*</div>\s*</div>\s*\{/\* An)',
            r'\1));\n            })()\}\2',
            content
        )
    else:
        print("Padrao nao encontrado. Mostrando contexto...")
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if '))}' in line and '</div>' in lines[i+1] if i+1 < len(lines) else False:
                print(f"Linha {i}: {line}")
                for j in range(max(0,i-2), min(len(lines), i+5)):
                    print(f"  {j}: {lines[j]}")
                break

with open('app/blog/[slug]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Arquivo salvo!")
