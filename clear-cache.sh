#!/bin/bash
echo "🧹 Limpando cache do Next.js..."
rm -rf .next
rm -rf node_modules/.cache

echo "✅ Cache limpo!"
echo ""
echo "📝 INSTRUÇÕES PARA O USUÁRIO:"
echo "1. Pare o servidor Next.js (Ctrl+C se estiver rodando)"
echo "2. Execute: npm run dev (ou npm run build && npm start para produção)"
echo "3. No navegador, faça HARD REFRESH:"
echo "   - Chrome/Firefox (Windows/Linux): Ctrl + Shift + R"
echo "   - Chrome/Firefox (Mac): Cmd + Shift + R"
echo "   - Ou abra em aba anônima para testar"
echo ""
echo "Se o problema persistir, limpe todo o cache do navegador:"
echo "   - Chrome: Configurações > Privacidade > Limpar dados de navegação > Cache"
