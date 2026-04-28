#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 CORRIGINDO PIN #13 - Letras cortadas...\n');

let html = fs.readFileSync('pin_13.html', 'utf-8');

// Reduzir fontes grandes que podem cortar
const fixes = {
  'font-size: 65px;': 'font-size: 58px;', // title-main
  'font-size: 40px;': 'font-size: 34px;', // myth-title, benefit-title
  'font-size: 36px;': 'font-size: 32px;', // badge, subtitle, dose-title
  'font-size: 32px;': 'font-size: 28px;', // myth-item, benefit-item, dose-text
  'height: 260px;': 'min-height: 280px;', // header
  'padding: 18px;': 'padding: 20px;', // boxes
};

for (const [old, novo] of Object.entries(fixes)) {
  html = html.replaceAll(old, novo);
}

// Garantir que content tem padding adequado
html = html.replace(
  /padding: 30px 40px;/g,
  'padding: 35px 40px 30px;'
);

fs.writeFileSync('pin_13.html', html);

console.log('✅ Pin #13 corrigido!');
console.log('   - Fontes reduzidas');
console.log('   - Header expandido');
console.log('   - Padding ajustado');
