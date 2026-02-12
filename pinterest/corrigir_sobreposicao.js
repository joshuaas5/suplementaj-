#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 CORRIGINDO SOBREPOSIÇÃO DE ÍCONES...\n');

for (let i = 1; i <= 15; i++) {
  const num = String(i).padStart(2, '0');
  const file = `pin_${num}.html`;
  
  if (!fs.existsSync(file)) continue;
  
  let html = fs.readFileSync(file, 'utf-8');
  let modified = false;
  
  // 1. CORRIGIR itens com ::before (ícones sobrepostos)
  // Aumentar padding-left para dar espaço ao ícone
  if (html.includes('::before')) {
    // Items com ícone precisam de padding-left maior
    html = html.replace(
      /(\.problem-item|\.solution-item|\.benefit-item|\.dose-item|\.symptom-item|\.timeline-item|\.supp-item|\.myth-item|\.truth-item)([^{]*?)\{([^}]*?)padding-left:\s*\d+px;/gs,
      '$1$2{$3padding-left: 50px;'
    );
    
    // Se não tem padding-left, adicionar
    html = html.replace(
      /(\.problem-item|\.solution-item|\.benefit-item|\.dose-item|\.symptom-item|\.timeline-item|\.supp-item|\.myth-item|\.truth-item)([^{]*?)\{([^}]*?)(?!padding-left)/gs,
      (match) => {
        if (!match.includes('padding-left')) {
          return match.replace('{', '{\n            padding-left: 50px;');
        }
        return match;
      }
    );
    
    modified = true;
  }
  
  // 2. GARANTIR que ::before está posicionado FORA do texto
  if (html.includes('position: absolute;')) {
    html = html.replace(
      /(::before[^{]*?\{[^}]*?)left:\s*\d+px;/gs,
      '$1left: 0;'
    );
    html = html.replace(
      /(::before[^{]*?\{[^}]*?)top:\s*\d+px;/gs,
      '$1top: 50%; transform: translateY(-50%);'
    );
    modified = true;
  }
  
  // 3. GARANTIR que subtítulo do header não seja cortado
  // Aumentar altura do header se tiver subtítulo
  if (html.includes('.subtitle-header')) {
    html = html.replace(
      /(\.header \{[^}]*?)height:\s*280px;/gs,
      '$1min-height: 300px;'
    );
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(file, html);
    console.log(`✅ ${num}. Ícones e subtítulo corrigidos!`);
  } else {
    console.log(`   ${num}. Sem problemas detectados`);
  }
}

console.log('\n🔥 CORREÇÕES APLICADAS!');
console.log('📝 Ícones agora ficam ao LADO do texto (não em cima)');
console.log('📝 Subtítulos com espaço suficiente');
