#!/bin/bash

echo "🚀 Convertendo 15 pins HTML → PNG (1000x1500px)..."
echo ""

for i in {01..15}; do
  html_file="pin_${i}.html"
  png_file="pin_${i}.png"
  
  if [ ! -f "$html_file" ]; then
    echo "⚠️  $html_file não encontrado"
    continue
  fi
  
  # Usar Chrome headless com DevTools Protocol
  google-chrome --headless --screenshot="$png_file" \
    --window-size=1000,1500 \
    --default-background-color=0 \
    --hide-scrollbars \
    "file://$(pwd)/$html_file" 2>/dev/null
  
  if [ -f "$png_file" ]; then
    echo "✅ $i. $png_file criado!"
  else
    echo "❌ Erro ao criar $png_file"
  fi
done

echo ""
echo "🔥 CONVERSÃO COMPLETA!"
echo "📁 15 imagens PNG prontas (1000x1500px)"
echo "💜 Upload direto no Pinterest!"
