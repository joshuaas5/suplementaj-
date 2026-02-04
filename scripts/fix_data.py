import json

# =============================================
# SCRIPT DE CORRECOES
# =============================================

# 1. CORRIGIR EMOJIS DOS NUTRIENTES
print("=" * 50)
print("1. CORRIGINDO EMOJIS DOS NUTRIENTES")
print("=" * 50)

with open("data/nutrientes.json", "r", encoding="utf-8-sig") as f:
    nutrientes = json.load(f)

emoji_fixes = {
    "proteina": "",
    "bcaa": "",
    "glutamina": "",
    "caseina": "",
    "albumina": ""
}

for slug, emoji in emoji_fixes.items():
    if slug in nutrientes:
        old_emoji = nutrientes[slug].get("emoji", "VAZIO")
        nutrientes[slug]["emoji"] = emoji
        print(f"OK {slug}: {old_emoji} -> {emoji}")

with open("data/nutrientes.json", "w", encoding="utf-8") as f:
    json.dump(nutrientes, f, ensure_ascii=False, indent=2)

print("Nutrientes salvos!")

# 2. CORRIGIR AUTORES DOS ARTIGOS
print("\n" + "=" * 50)
print("2. CORRIGINDO AUTORES DOS ARTIGOS")
print("=" * 50)

with open("data/artigos.json", "r", encoding="utf-8-sig") as f:
    artigos = json.load(f)

autor_correto = "Equipe Suplementa Já"
corrigidos = 0

for artigo in artigos:
    autor_atual = artigo.get("autor", "")
    if autor_atual != autor_correto:
        slug = artigo["slug"]
        print(f"FIX {slug}")
        artigo["autor"] = autor_correto
        corrigidos += 1

with open("data/artigos.json", "w", encoding="utf-8") as f:
    json.dump(artigos, f, ensure_ascii=False, indent=2)

print(f"\n{corrigidos} artigos corrigidos!")
print("\nConcluido!")
