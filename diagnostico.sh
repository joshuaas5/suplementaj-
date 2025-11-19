#!/bin/bash
echo "🔍 DIAGNÓSTICO COMPLETO DO SITE"
echo "================================"
echo ""

echo "1️⃣ Verificando branch atual..."
git branch --show-current
echo ""

echo "2️⃣ Verificando status do git..."
git status --short
echo ""

echo "3️⃣ Verificando se há processos Next.js rodando..."
ps aux | grep -E "(next-server|next dev)" | grep -v grep || echo "❌ Nenhum servidor Next.js rodando"
echo ""

echo "4️⃣ Verificando conteúdo da página de resultados..."
echo "   - Contagem de suplementos (linha 174):"
sed -n '174p' app/resultados/local/page.tsx
echo ""
echo "   - Prioridade Alta (linha 214):"
sed -n '214p' app/resultados/local/page.tsx
echo ""
echo "   - Prioridade Média (linha 228):"
sed -n '228p' app/resultados/local/page.tsx
echo ""

echo "5️⃣ Verificando arquivo JSON de nutrientes..."
if node -e "JSON.parse(require('fs').readFileSync('data/nutrientes.json', 'utf8'))" 2>/dev/null; then
    echo "✅ JSON válido"
else
    echo "❌ ERRO no JSON!"
fi
echo ""

echo "================================"
echo "📋 PRÓXIMOS PASSOS:"
echo "================================"
echo ""
echo "1. Mate TODOS os processos Node/Next:"
echo "   pkill -f next"
echo ""
echo "2. Limpe TUDO:"
echo "   rm -rf .next node_modules/.cache"
echo ""
echo "3. Reinstale dependências:"
echo "   npm install"
echo ""
echo "4. Inicie servidor DEV:"
echo "   npm run dev"
echo ""
echo "5. Abra em ABA ANÔNIMA:"
echo "   http://localhost:3000/resultados/local"
echo ""
echo "6. Verifique console do navegador (F12):"
echo "   Procure por erros JavaScript"
echo ""
echo "7. Limpe localStorage do navegador:"
echo "   F12 > Application > Storage > Clear site data"
echo ""
