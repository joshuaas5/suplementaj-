#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 CORRIGINDO TODOS OS 15 PINS...\n');

const fixes = {
  // Garantir que body não corta conteúdo
  'min-height: 100vh;': 'min-height: 1600px;',
  
  // Aumentar espaço do footer
  'height: 140px;': 'height: 160px;',
  
  // Melhorar contraste cores
  'color: #555;': 'color: #333;',
  
  // Ajustar padding content para não cortar
  'padding: 35px;': 'padding: 30px 40px;',
  'padding: 50px;': 'padding: 35px 45px;',
};

for (let i = 1; i <= 15; i++) {
  const num = String(i).padStart(2, '0');
  const file = `pin_${num}.html`;
  
  if (!fs.existsSync(file)) {
    console.log(`⚠️  ${file} não encontrado`);
    continue;
  }
  
  let html = fs.readFileSync(file, 'utf-8');
  
  // Aplicar correções
  for (const [old, novo] of Object.entries(fixes)) {
    html = html.replace(new RegExp(old, 'g'), novo);
  }
  
  // Garantir flex-direction no pin
  if (!html.includes('flex-direction: column;')) {
    html = html.replace(
      'box-shadow: 10px 10px 0 rgba(0,0,0,0.3);',
      'box-shadow: 10px 10px 0 rgba(0,0,0,0.3);\n            display: flex;\n            flex-direction: column;'
    );
  }
  
  fs.writeFileSync(file, html);
  console.log(`✅ ${num}. ${file} corrigido!`);
}

console.log('\n🔥 15 PINS CORRIGIDOS!');
console.log('📝 Agora regerar PNGs: node gerar_imagens.js');
