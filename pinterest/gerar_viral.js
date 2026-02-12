#!/usr/bin/env node

const fs = require('fs');
const puppeteer = require('puppeteer');
const path = require('path');

const pins = [
  {
    num: '01',
    headerBg: 'linear-gradient(135deg, #F472B6 0%, #DB2777 100%)',
    badge: 'REALIDADE!',
    badgeBg: '#EF4444',
    title: 'PÓS-MONJARO:<br>FLACIDEZ',
    subtitle: 'O Que Ninguém Te Conta',
    icon: '⚠',
    sections: [
      {
        type: 'cards-3col',
        title: '3 PROBLEMAS COMUNS:',
        titleColor: '#DB2777',
        items: [
          {icon: '●', text: 'Pele solta<br>abdômen', bg: '#FEE2E2'},
          {icon: '●', text: 'Flacidez<br>braços', bg: '#FEE2E2'},
          {icon: '●', text: 'Celulite<br>pós-perda', bg: '#FEE2E2'}
        ]
      },
      {
        type: 'list-icons',
        title: 'SUPLEMENTOS:',
        titleColor: '#10B981',
        bg: '#D1FAE5',
        items: [
          {icon: '✓', text: '<strong>Colágeno</strong> 10g/dia'},
          {icon: '✓', text: '<strong>Proteína</strong> 1.6g/kg'},
          {icon: '✓', text: '<strong>Vitamina C + Zinco</strong>'}
        ]
      },
      {
        type: 'highlight',
        bg: '#FACC15',
        text: '<strong>CIRURGIA:</strong> Considerar se >30kg perdidos'
      }
    ]
  },
  // Adicionar os outros 14 pins depois
];

const template = (pin) => `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1000, initial-scale=1.0">
    <title>Pin ${pin.num}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
            background: #FFF;
            width: 1000px;
            height: 1500px;
            overflow: hidden;
        }
        .pin {
            width: 1000px;
            height: 1500px;
            display: flex;
            flex-direction: column;
            background: #FFF;
        }
        
        /* HEADER - 280px */
        .header {
            height: 280px;
            background: ${pin.headerBg};
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 30px;
            flex-shrink: 0;
            position: relative;
        }
        .header-icon {
            font-size: 80px;
            margin-bottom: 15px;
            filter: drop-shadow(4px 4px 0 rgba(0,0,0,0.2));
        }
        .header-badge {
            background: ${pin.badgeBg};
            color: #FFF;
            font-size: 28px;
            font-weight: 900;
            padding: 8px 25px;
            border-radius: 30px;
            margin-bottom: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
        .header-title {
            font-size: 58px;
            font-weight: 900;
            color: #000;
            text-align: center;
            line-height: 1;
            margin-bottom: 12px;
            text-shadow: 2px 2px 0 rgba(255,255,255,0.3);
        }
        .header-subtitle {
            font-size: 30px;
            font-weight: 700;
            color: #000;
            text-align: center;
        }
        
        /* CONTENT */
        .content {
            flex: 1;
            padding: 30px 35px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            gap: 22px;
        }
        
        /* SECTION TITLE */
        .section-title {
            font-size: 32px;
            font-weight: 900;
            color: #000;
            margin-bottom: 15px;
            padding-bottom: 8px;
            border-bottom: 4px solid currentColor;
        }
        
        /* CARDS 3 COLUNAS */
        .cards-3col {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }
        .card-item {
            background: #FFF;
            border: 4px solid #000;
            border-radius: 12px;
            padding: 20px 15px;
            text-align: center;
            box-shadow: 5px 5px 0 rgba(0,0,0,0.15);
        }
        .card-icon {
            font-size: 40px;
            margin-bottom: 10px;
            display: block;
        }
        .card-text {
            font-size: 19px;
            font-weight: 700;
            color: #1F2937;
            line-height: 1.2;
        }
        
        /* LIST COM ÍCONES */
        .list-icons {
            background: #D1FAE5;
            border: 4px solid #000;
            border-radius: 12px;
            padding: 20px 25px;
            box-shadow: 5px 5px 0 rgba(0,0,0,0.1);
        }
        .list-item {
            font-size: 22px;
            font-weight: 600;
            color: #1F2937;
            margin: 10px 0;
            padding-left: 40px;
            position: relative;
            line-height: 1.3;
        }
        .list-item::before {
            content: attr(data-icon);
            position: absolute;
            left: 0;
            top: 0;
            font-size: 28px;
            color: #10B981;
            font-weight: 900;
        }
        .list-item strong {
            color: #000;
            font-weight: 900;
        }
        
        /* HIGHLIGHT BOX */
        .highlight {
            background: #FACC15;
            border: 4px solid #000;
            border-radius: 12px;
            padding: 20px 30px;
            text-align: center;
            box-shadow: 6px 6px 0 rgba(0,0,0,0.2);
            transform: rotate(-1deg);
        }
        .highlight-text {
            font-size: 26px;
            font-weight: 900;
            color: #000;
        }
        .highlight-text strong {
            font-size: 30px;
        }
        
        /* FOOTER */
        .footer {
            height: 130px;
            background: #000;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            flex-shrink: 0;
        }
        .footer-logo {
            font-size: 52px;
            font-weight: 900;
            color: #FFF;
            letter-spacing: 1px;
        }
        .footer-logo span {
            background: #FACC15;
            color: #000;
            padding: 3px 14px;
            margin-left: 6px;
            border-radius: 4px;
        }
        .footer-cta {
            font-size: 26px;
            color: #FACC15;
            font-weight: 700;
        }
    </style>
</head>
<body>
    <div class="pin">
        <div class="header">
            ${pin.icon ? `<div class="header-icon">${pin.icon}</div>` : ''}
            <div class="header-badge">${pin.badge}</div>
            <div class="header-title">${pin.title}</div>
            <div class="header-subtitle">${pin.subtitle}</div>
        </div>
        
        <div class="content">
            ${pin.sections.map(section => {
              if (section.type === 'cards-3col') {
                return `
            <div>
                <div class="section-title" style="color: ${section.titleColor}">${section.title}</div>
                <div class="cards-3col">
                    ${section.items.map(item => `
                    <div class="card-item" style="background: ${item.bg}">
                        <span class="card-icon">${item.icon}</span>
                        <div class="card-text">${item.text}</div>
                    </div>`).join('')}
                </div>
            </div>`;
              } else if (section.type === 'list-icons') {
                return `
            <div class="list-icons" style="background: ${section.bg}">
                <div class="section-title" style="color: ${section.titleColor}">${section.title}</div>
                ${section.items.map(item => `
                <div class="list-item" data-icon="${item.icon}">${item.text}</div>`).join('')}
            </div>`;
              } else if (section.type === 'highlight') {
                return `
            <div class="highlight" style="background: ${section.bg}">
                <div class="highlight-text">${section.text}</div>
            </div>`;
              }
            }).join('\n            ')}
        </div>
        
        <div class="footer">
            <div class="footer-logo">SUPLEMENTA<span>JÁ</span></div>
            <div class="footer-cta">Artigo completo na descrição ↓</div>
        </div>
    </div>
</body>
</html>`;

console.log('🎨 GERANDO PIN #01 VIRAL...\n');

// Criar HTML
const html = template(pins[0]);
fs.writeFileSync(`pin_01_VIRAL.html`, html);
console.log('✅ pin_01_VIRAL.html criado!');

// Gerar PNG
(async () => {
  const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
  const page = await browser.newPage();
  await page.setViewport({width: 1000, height: 1500, deviceScaleFactor: 1});
  
  const htmlPath = path.resolve(`pin_01_VIRAL.html`);
  await page.goto(`file://${htmlPath}`, {waitUntil: 'networkidle0'});
  await page.screenshot({path: `pin_01_VIRAL.png`, type: 'png'});
  
  await browser.close();
  console.log('✅ pin_01_VIRAL.png criado!');
  console.log('\n🔥 TESTE APROVADO? Faço os 15 assim!');
})();
