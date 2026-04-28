#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Convertendo 15 pins HTML → PNG via browser...\n');

// Usar browser tool do OpenClaw!
const pins = [];
for (let i = 1; i <= 15; i++) {
  const num = String(i).padStart(2, '0');
  const htmlFile = `pin_${num}.html`;
  
  if (fs.existsSync(htmlFile)) {
    pins.push({ num, htmlFile });
  }
}

console.log(`📁 ${pins.length} pins encontrados\n`);

// Criar instruções para Joshua
console.log('📝 INSTRUÇÕES PARA GERAR IMAGENS:\n');
console.log('Vou usar o BROWSER do OpenClaw para screenshot!\n');

console.log('Execute este comando para cada pin:\n');

pins.forEach(({ num, htmlFile }) => {
  const fullPath = path.resolve(htmlFile);
  console.log(`# Pin ${num}:`);
  console.log(`openclaw browser screenshot file://${fullPath} pin_${num}.png --width=1000 --height=1500\n`);
});

console.log('\n💡 OU melhor: vou criar via browser tool automaticamente!');
