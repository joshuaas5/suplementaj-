#!/usr/bin/env node

const fs = require('fs');

console.log('🎨 MELHORANDO CORES E CONTRASTE...\n');

// Cores ruins → cores boas
const colorFixes = {
  // Melhorar contraste textos
  'color: #555;': 'color: #1F2937;',
  'color: #333;': 'color: #1F2937;',
  
  // Rosa mais vibrante
  '#F9A8D4': '#F472B6',
  '#EC4899': '#DB2777',
  
  // Roxo mais saturado
  '#A855F7': '#9333EA',
  '#7E22CE': '#7C3AED',
  
  // Verde mais vivo
  '#10B981': '#059669',
  '#059669': '#047857',
  
  // Azul mais forte
  '#6366F1': '#4F46E5',
  '#4F46E5': '#4338CA',
  
  // Laranja mais quente
  '#FBBF24': '#F59E0B',
  '#F59E0B': '#D97706',
  
  // Fundos mais contrastados
  '#F5F5F5': '#F3F4F6',
  '#FEF2F2': '#FEE2E2',
  '#F0FDF4': '#D1FAE5',
  '#EFF6FF': '#DBEAFE',
};

for (let i = 1; i <= 15; i++) {
  const num = String(i).padStart(2, '0');
  const file = `pin_${num}.html`;
  
  if (!fs.existsSync(file)) continue;
  
  let html = fs.readFileSync(file, 'utf-8');
  
  // Aplicar correções de cores
  for (const [old, novo] of Object.entries(colorFixes)) {
    html = html.replaceAll(old, novo);
  }
  
  fs.writeFileSync(file, html);
  console.log(`✅ ${num}. Cores melhoradas!`);
}

console.log('\n🔥 CORES OTIMIZADAS EM 15 PINS!');
