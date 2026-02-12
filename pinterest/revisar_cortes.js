#!/usr/bin/env node

const fs = require('fs');

console.log('🔍 REVISANDO CORTES NOS 15 PINS...\n');

for (let i = 1; i <= 15; i++) {
  const num = String(i).padStart(2, '0');
  const file = `pin_${num}.html`;
  
  if (!fs.existsSync(file)) continue;
  
  let html = fs.readFileSync(file, 'utf-8');
  let modified = false;
  
  // 1. GARANTIR altura mínima 1500px (não height fixo)
  if (html.includes('height: 1500px;') && html.includes('overflow: hidden;')) {
    html = html.replace(/height: 1500px;/g, 'min-height: 1500px;');
    html = html.replace(/overflow: hidden;/g, 'overflow: visible;');
    modified = true;
  }
  
  // 2. .pin deve ter min-height também
  if (html.includes('.pin {')) {
    html = html.replace(
      /\.pin \{([^}]*?)height: 1500px;/gs,
      '.pin {$1min-height: 1500px;'
    );
    modified = true;
  }
  
  // 3. Content não pode ter overflow hidden
  if (html.includes('.content {') && html.includes('overflow: hidden')) {
    html = html.replace(
      /(\.content \{[^}]*?)overflow: hidden;/gs,
      '$1overflow: visible;'
    );
    modified = true;
  }
  
  // 4. Body deve permitir expansão
  if (html.includes('body {')) {
    html = html.replace(
      /(body \{[^}]*?)height: 1500px;([^}]*?)overflow: hidden;/gs,
      '$1min-height: 1500px;$2overflow: visible;'
    );
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(file, html);
    console.log(`✅ ${num}. Cortes corrigidos (min-height + overflow visible)`);
  } else {
    console.log(`   ${num}. Já estava OK`);
  }
}

console.log('\n🔥 REVISÃO COMPLETA!');
console.log('📝 HTMLs agora expandem se precisar (min-height 1500px)');
console.log('💡 Tire prints dos HTMLs direto no navegador!');
