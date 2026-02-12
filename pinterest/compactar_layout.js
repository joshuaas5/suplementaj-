#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 CORRIGINDO LAYOUT + COMPACTANDO CONTEÚDO...\n');

// Calcular alturas disponíveis:
// Total: 1500px
// Header: ~300px
// Footer: 140px
// Sobra: ~1060px pro content

const layoutFixes = {
  // GARANTIR FLEX LAYOUT NO PIN
  '.pin {': `.pin {
            display: flex;
            flex-direction: column;`,
  
  // CONTENT OCUPA ESPAÇO RESTANTE
  '.content {': `.content {
            flex: 1;
            overflow: hidden;`,
  
  // REDUZIR HEADERS (380px → 280px)
  'height: 380px;': 'height: 280px;',
  'height: 420px;': 'height: 300px;',
  'height: 320px;': 'height: 260px;',
  
  // REDUZIR PADDING CONTENT
  'padding: 35px 45px;': 'padding: 25px 35px;',
  'padding: 50px;': 'padding: 25px 35px;',
  
  // REDUZIR FONTES GRANDES
  'font-size: 75px;': 'font-size: 65px;',
  'font-size: 80px;': 'font-size: 68px;',
  'font-size: 72px;': 'font-size: 62px;',
  
  // REDUZIR SUBTÍTULOS
  'font-size: 50px;': 'font-size: 42px;',
  'font-size: 48px;': 'font-size: 40px;',
  'font-size: 55px;': 'font-size: 46px;',
  
  // REDUZIR TÍTULOS SEÇÃO
  'font-size: 42px;': 'font-size: 36px;',
  'font-size: 45px;': 'font-size: 38px;',
  
  // REDUZIR TEXTOS
  'font-size: 38px;': 'font-size: 32px;',
  'font-size: 35px;': 'font-size: 30px;',
  'font-size: 34px;': 'font-size: 29px;',
  
  // REDUZIR MARGENS
  'margin-bottom: 35px;': 'margin-bottom: 20px;',
  'margin-bottom: 30px;': 'margin-bottom: 18px;',
  'margin-bottom: 25px;': 'margin-bottom: 15px;',
  
  // REDUZIR PADDING BOXES
  'padding: 30px;': 'padding: 20px;',
  'padding: 25px;': 'padding: 18px;',
};

for (let i = 1; i <= 15; i++) {
  const num = String(i).padStart(2, '0');
  const file = `pin_${num}.html`;
  
  if (!fs.existsSync(file)) continue;
  
  let html = fs.readFileSync(file, 'utf-8');
  
  // Aplicar correções
  for (const [old, novo] of Object.entries(layoutFixes)) {
    html = html.replaceAll(old, novo);
  }
  
  fs.writeFileSync(file, html);
  console.log(`✅ ${num}. Layout + conteúdo compactado!`);
}

console.log('\n🔥 15 PINS COMPACTADOS!');
console.log('📏 Header: 260-300px | Content: flex | Footer: 160px');
console.log('📝 Regerar PNGs: node gerar_imagens.js');
