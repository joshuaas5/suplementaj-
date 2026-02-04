import re

with open('components/layout/Header.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Adicionar link para Melhores Suplementos no desktop
old_desktop = '''<Link href="/nutrientes" className="px-4 py-2 bg-purple-400 text-black font-bold uppercase text-sm border-2 border-black hover:bg-purple-500 transition-all hover:scale-105">
              Nutrientes
            </Link>'''

new_desktop = '''<Link href="/melhores-suplementos" className="px-4 py-2 bg-orange-400 text-black font-bold uppercase text-sm border-2 border-black hover:bg-orange-500 transition-all hover:scale-105">
              TOP 8
            </Link>
            <Link href="/nutrientes" className="px-4 py-2 bg-purple-400 text-black font-bold uppercase text-sm border-2 border-black hover:bg-purple-500 transition-all hover:scale-105">
              Nutrientes
            </Link>'''

if old_desktop in content:
    content = content.replace(old_desktop, new_desktop)
    print("Desktop atualizado!")
else:
    print("Desktop nao encontrado")

# Adicionar no mobile tambem
old_mobile = '''<Link
                href="/nutrientes"
                className="px-4 py-3 bg-purple-400 text-black font-bold uppercase text-center border-2 border-black hover:bg-purple-500 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nutrientes
              </Link>'''

new_mobile = '''<Link
                href="/melhores-suplementos"
                className="px-4 py-3 bg-orange-400 text-black font-bold uppercase text-center border-2 border-black hover:bg-orange-500 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                TOP 8 Suplementos
              </Link>
              <Link
                href="/nutrientes"
                className="px-4 py-3 bg-purple-400 text-black font-bold uppercase text-center border-2 border-black hover:bg-purple-500 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nutrientes
              </Link>'''

if old_mobile in content:
    content = content.replace(old_mobile, new_mobile)
    print("Mobile atualizado!")
else:
    print("Mobile nao encontrado")

with open('components/layout/Header.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Header atualizado com link para TOP 8!")
