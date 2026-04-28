#!/usr/bin/env node

const fs = require('fs');

console.log('🎨 AJUSTANDO ESPAÇAMENTOS...\n');

const spacingFixes = {
  // Adicionar margem entre boxes principais
  'margin-bottom: 20px;': 'margin-bottom: 25px;',
  'margin: 20px 0;': 'margin: 22px 0;',
  
  // Seção título precisa de margem top
  '.section-title {': `.section-title {
            margin-top: 25px;`,
  
  // Boxes precisam de margin-bottom maior
  '.problem-list {': `.problem-list {
            margin-bottom: 25px;`,
  
  '.solution-box {': `.solution-box {
            margin-bottom: 22px;`,
  
  '.dose-card {': `.dose-card {
            margin-bottom: 20px;`,
  
  '.benefit-card {': `.benefit-card {
            margin-bottom: 18px;`,
  
  '.supp-card {': `.supp-card {
            margin-bottom: 16px;`,
  
  // Tip box precisa margem top
  '.tip-box {': `.tip-box {
            margin-top: 25px;
            margin-bottom: 0;`,
  
  // Content precisa padding top/bottom
  'padding: 25px 35px;': 'padding: 30px 35px 25px;',
};

for (let i = 1; i <= 15; i++) {
  const num = String(i).padStart(2, '0');
  const file = `pin_${num}.html`;
  
  if (!fs.existsSync(file)) continue;
  
  let html = fs.readFileSync(file, 'utf-8');
  
  // Aplicar correções
  for (const [old, novo] of Object.entries(spacingFixes)) {
    html = html.replace(new RegExp(old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), novo);
  }
  
  fs.writeFileSync(file, html);
  console.log(`✅ ${num}. Espaçamentos ajustados!`);
}

console.log('\n🔥 ESPAÇAMENTOS CORRIGIDOS!');
console.log('📝 Regerar PNGs: node gerar_imagens.js');
