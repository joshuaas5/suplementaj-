#!/usr/bin/env node

const fs = require('fs');

console.log('🔍 PROCURANDO BOXES VAZIOS...\n');

const problemPatterns = [
  // Divs vazias
  /<div class="[^"]*"><\/div>/g,
  // Seções sem conteúdo
  /<div class="[^"]*">\s*<\/div>/g,
  // Cards vazios
  /<div class="[^"]*-card">\s*<\/div>/g,
];

for (let i = 1; i <= 15; i++) {
  const num = String(i).padStart(2, '0');
  const file = `pin_${num}.html`;
  
  if (!fs.existsSync(file)) continue;
  
  let html = fs.readFileSync(file, 'utf-8');
  let found = false;
  
  // Verificar padrões
  for (const pattern of problemPatterns) {
    if (pattern.test(html)) {
      found = true;
      html = html.replace(pattern, '');
    }
  }
  
  if (found) {
    fs.writeFileSync(file, html);
    console.log(`✅ ${num}. Boxes vazios removidos!`);
  } else {
    console.log(`   ${num}. OK (sem boxes vazios)`);
  }
}

console.log('\n🔥 LIMPEZA COMPLETA!');
