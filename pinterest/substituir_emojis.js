#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 SUBSTITUINDO EMOJIS POR SÍMBOLOS SÓLIDOS...\n');

// Emojis → Símbolos/Texto que renderizam
const emojiReplacements = {
  // Emojis comuns nos pins
  '😱': '⚠',
  '😴': '💤',
  '🌙': '☾',
  '🌡️': '🔥',
  '🩸': '●',
  '💇': '✂',
  '💅': '◆',
  '🦴': '⊕',
  '💜': '♥',
  '🌸': '✿',
  '☀️': '☀',
  '🦠': '◉',
  '🛡️': '⊗',
  '💩': '○',
  '😌': '☺',
  '💊': '◐',
  '❤️': '♥',
  '🧠': '◈',
  '🐟': '◊',
  '🌺': '❀',
  '🤱': '◆',
  '✨': '★',
  '💪': '◉',
  
  // Ícones grandes (icon-huge)
  'content: "😱";': 'content: "⚠";',
  'content: "😴";': 'content: "💤";',
  'content: "🌙";': 'content: "☾";',
  'content: "☀️";': 'content: "☀";',
  'content: "🦠";': 'content: "◉";',
  'content: "💪";': 'content: "◉";',
  'content: "✨";': 'content: "★";',
  
  // Ícones ::before
  'content: "⚠️";': 'content: "▸";',
  'content: "✓";': 'content: "✓";',
  'content: "💡";': 'content: "💡";',
  'content: "🌿";': 'content: "●";',
  'content: "🦴";': 'content: "●";',
  
  // Headers com emoji
  '<div class="icon-huge">😱</div>': '<div class="icon-huge">⚠</div>',
  '<div class="icon-huge">😴</div>': '<div class="icon-huge">💤</div>',
  '<div class="icon-huge">🌙</div>': '<div class="icon-huge">☾</div>',
  '<div class="icon-huge">☀️</div>': '<div class="icon-huge">☀</div>',
  '<div class="icon-huge">🦠</div>': '<div class="icon-huge">◉</div>',
  '<div class="icon-huge">💪</div>': '<div class="icon-huge">◉</div>',
  '<div class="icon-huge">✨</div>': '<div class="icon-huge">★</div>',
  '<div class="icon-huge">💜</div>': '<div class="icon-huge">♥</div>',
  
  // Badges
  '<div class="badge-alert">😱': '<div class="badge-alert">⚠',
  '<div class="badge-stat">☀️': '<div class="badge-stat">☀',
  '<div class="badge-myth">💪': '<div class="badge-myth">◉',
};

for (let i = 1; i <= 15; i++) {
  const num = String(i).padStart(2, '0');
  const file = `pin_${num}.html`;
  
  if (!fs.existsSync(file)) continue;
  
  let html = fs.readFileSync(file, 'utf-8');
  let modified = false;
  
  // Aplicar substituições
  for (const [emoji, symbol] of Object.entries(emojiReplacements)) {
    if (html.includes(emoji)) {
      html = html.replaceAll(emoji, symbol);
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(file, html);
    console.log(`✅ ${num}. Emojis substituídos!`);
  } else {
    console.log(`   ${num}. Sem emojis`);
  }
}

console.log('\n🔥 EMOJIS SUBSTITUÍDOS POR SÍMBOLOS SÓLIDOS!');
console.log('📝 Regerar PNGs: node gerar_imagens.js');
