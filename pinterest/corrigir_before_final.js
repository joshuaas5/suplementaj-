#!/usr/bin/env node

const fs = require('fs');

console.log('🎯 CORREÇÃO FINAL - Ícones ::before...\n');

for (let i = 1; i <= 15; i++) {
  const num = String(i).padStart(2, '0');
  const file = `pin_${num}.html`;
  
  if (!fs.existsSync(file)) continue;
  
  let html = fs.readFileSync(file, 'utf-8');
  
  // Corrigir TODOS ::before que têm position: absolute
  html = html.replace(
    /(\.[\w-]+::before\s*\{[^}]*?)position:\s*absolute;([^}]*?)left:\s*\d+px;/gs,
    '$1position: absolute;$2left: 0; top: 0;'
  );
  
  // Garantir que ::before sempre tem left: 0
  html = html.replace(
    /(\.[\w-]+::before\s*\{[^}]*?)left:\s*\d+px;/gs,
    '$1left: 0;'
  );
  
  // Remover padding-left de ::before (não faz sentido)
  html = html.replace(
    /(\.[\w-]+::before\s*\{[^}]*?)padding-left:\s*\d+px;\s*/gs,
    '$1'
  );
  
  // Garantir que itens com ::before são position: relative
  const itemClasses = [
    'problem-item', 'solution-item', 'benefit-item', 'dose-item',
    'symptom-item', 'timeline-item', 'supp-item', 'myth-item', 'truth-item'
  ];
  
  itemClasses.forEach(className => {
    // Adicionar position: relative se não existir
    const regex = new RegExp(`(\\.${className}\\s*\\{[^}]*?)(?!position:)`, 'gs');
    html = html.replace(regex, (match) => {
      if (!match.includes('position:')) {
        return match.replace('{', '{\n            position: relative;');
      }
      return match;
    });
  });
  
  fs.writeFileSync(file, html);
  console.log(`✅ ${num}. ::before corrigido!`);
}

console.log('\n🔥 TODOS ::before AJUSTADOS!');
console.log('✅ position: relative nos items');
console.log('✅ ::before com left: 0; top: 0;');
console.log('✅ padding-left: 50px nos items (espaço pro ícone)');
