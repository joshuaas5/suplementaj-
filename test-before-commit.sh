#!/bin/bash
# Script de teste local antes de commit
# Use: ./test-before-commit.sh

echo "🧪 TESTE PRÉ-COMMIT - Suplementaja.com"
echo "======================================"
echo ""

# 1. Verificar se tem mudanças
if git diff --quiet && git diff --cached --quiet; then
    echo "❌ Sem mudanças pra commitar"
    exit 1
fi

echo "✅ Mudanças detectadas"
echo ""

# 2. Type check
echo "🔍 Verificando tipos TypeScript..."
npx tsc --noEmit
if [ $? -ne 0 ]; then
    echo "❌ ERRO DE TIPO! Corrija antes de commitar."
    exit 1
fi
echo "✅ Tipos OK"
echo ""

# 3. Lint
echo "🧹 Verificando ESLint..."
npm run lint
if [ $? -ne 0 ]; then
    echo "⚠️  Avisos de lint (pode commitar, mas recomendo corrigir)"
fi
echo ""

# 4. Build
echo "🏗️  Testando build de produção..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ BUILD FALHOU! NÃO COMMITE!"
    exit 1
fi
echo "✅ Build OK"
echo ""

echo "🎉 TUDO CERTO! Pode commitar e fazer push."
echo ""
echo "Comandos sugeridos:"
echo "  git add -A"
echo "  git commit -m \"sua mensagem\""
echo "  git push origin main"
