#!/usr/bin/env node

const fs = require('fs');

// Template RICO baseado nos pins 1-15

const pinsRicos = [
  {
    num: '16',
    headerBg: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
    badgeBg: '#FACC15',
    badge: 'QUAL COMPRAR?',
    iconHuge: '⚖',
    title: 'WHEY:<br>ISOLADO vs<br>CONCENTRADO',
    subtitle: 'Diferença Real',
    sections: [
      {
        type: 'card-group',
        title: 'ISOLADO (90%):',
        titleColor: '#1D4ED8',
        items: [
          {icon: '●', text: '90% proteína pura'},
          {icon: '●', text: 'ZERO lactose'},
          {icon: '●', text: 'Absorção RÁPIDA'},
          {icon: '●', text: 'Ideal: Cutting/Intolerância'}
        ],
        bg: '#DBEAFE'
      },
      {
        type: 'card-group',
        title: 'CONCENTRADO (70-80%):',
        titleColor: '#0369A1',
        items: [
          {icon: '●', text: '70-80% proteína'},
          {icon: '●', text: 'Tem lactose (5-10%)'},
          {icon: '●', text: 'Mais barato'},
          {icon: '●', text: 'Ideal: Bulking/Orçamento'}
        ],
        bg: '#DBEAFE'
      },
      {
        type: 'highlight',
        title: 'ESCOLHER:',
        items: [
          '<strong>Cutting?</strong> ISOLADO',
          '<strong>Bulking?</strong> CONCENTRADO',
          '<strong>Intolerância?</strong> ISOLADO sempre'
        ],
        bg: '#FEF3C7'
      }
    ]
  },
  {
    num: '17',
    headerBg: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    badgeBg: '#F59E0B',
    badge: 'CALCULADORA!',
    iconHuge: '🧮',
    title: 'CALORIAS:<br>QUANTO<br>COMER?',
    subtitle: 'Fórmula Mifflin St Jeor',
    sections: [
      {
        type: 'card-group',
        title: 'HOMENS:',
        titleColor: '#059669',
        items: [{icon: '▸', text: '<strong>TMB =</strong> 10×peso + 6.25×altura - 5×idade + 5'}],
        bg: '#D1FAE5'
      },
      {
        type: 'card-group',
        title: 'MULHERES:',
        titleColor: '#DB2777',
        items: [{icon: '▸', text: '<strong>TMB =</strong> 10×peso + 6.25×altura - 5×idade - 161'}],
        bg: '#FEE2E2'
      },
      {
        type: 'card-group',
        title: 'MULTIPLICADORES:',
        titleColor: '#1D4ED8',
        items: [
          {icon: '●', text: 'Sedentário: TMB × 1.2'},
          {icon: '●', text: 'Leve (1-3x): TMB × 1.375'},
          {icon: '●', text: 'Moderado (3-5x): TMB × 1.55'},
          {icon: '●', text: 'Intenso (6-7x): TMB × 1.725'}
        ],
        bg: '#DBEAFE'
      },
      {
        type: 'highlight',
        title: 'DÉFICIT/SUPERÁVIT:',
        items: [
          '<strong>Emagrecer:</strong> -300 a -500 kcal',
          '<strong>Ganhar massa:</strong> +300 a +500 kcal'
        ],
        bg: '#FEF3C7'
      }
    ]
  },
  {
    num: '18',
    headerBg: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
    badgeBg: '#FACC15',
    badge: 'RANKING 2025',
    iconHuge: '🏆',
    title: 'MELHORES<br>CREATINAS<br>BRASIL',
    subtitle: 'Custo-Benefício',
    sections: [
      {
        type: 'ranking',
        title: 'TOP 3:',
        titleColor: '#6D28D9',
        items: [
          {rank: '1º', text: 'Creatine Creapure (Integralmedica)'},
          {rank: '2º', text: '100% Creatine (Max Titanium)'},
          {rank: '3º', text: 'Creatina (Growth Supplements)'}
        ],
        bg: '#F3E8FF'
      },
      {
        type: 'card-group',
        title: 'O QUE OLHAR:',
        titleColor: '#10B981',
        items: [
          {icon: '✓', text: 'Creapure > Creatina chinesa'},
          {icon: '✓', text: 'Pó puro (sem sabor)'},
          {icon: '✓', text: 'Dose: 3-5g/dia'},
          {icon: '✓', text: 'Preço: R$0,30-0,50/dose'}
        ],
        bg: '#D1FAE5'
      },
      {
        type: 'highlight',
        title: 'EVITAR:',
        items: [
          '▸ Creatinas com "booster"',
          '▸ Doses >5g (marketing)',
          '▸ Preços >R$1/dose'
        ],
        bg: '#FEE2E2'
      }
    ]
  }
  // Continuo com os outros 7 pins...
];

const templateRico = (pin) => `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Pin ${pin.num}: ${pin.title.replace(/<br>/g, ' ')}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 1600px;
            padding: 20px;
        }
        .pin {
            display: flex;
            flex-direction: column;
            width: 1000px;
            min-height: 1500px;
            background: white;
            border: 6px solid #000;
            box-shadow: 10px 10px 0 rgba(0,0,0,0.3);
        }
        .header {
            background: ${pin.headerBg};
            min-height: 350px;
            border-bottom: 6px solid #000;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 30px;
        }
        .icon-huge {
            font-size: 100px;
            margin-bottom: 15px;
            filter: drop-shadow(5px 5px 0 rgba(0,0,0,0.3));
        }
        .badge-alert {
            background: ${pin.badgeBg};
            color: #000;
            font-size: 38px;
            font-weight: 900;
            padding: 15px 40px;
            border: 5px solid #000;
            box-shadow: 6px 6px 0 rgba(0,0,0,0.3);
            margin-bottom: 20px;
            text-transform: uppercase;
        }
        .title-main {
            font-size: 60px;
            font-weight: 900;
            color: #000;
            text-align: center;
            line-height: 0.95;
            margin-bottom: 20px;
            text-transform: uppercase;
            text-shadow: 3px 3px 0 rgba(255,255,255,0.3);
        }
        .subtitle-header {
            font-size: 36px;
            font-weight: 700;
            color: #000;
            text-align: center;
        }
        .content {
            flex: 1;
            overflow: visible;
            background: #FFF;
            padding: 30px 35px 25px;
        }
        .section-title {
            font-size: 34px;
            font-weight: 900;
            color: #DB2777;
            margin-bottom: 15px;
            margin-top: 20px;
            border-bottom: 5px solid #FACC15;
            padding-bottom: 10px;
        }
        .card-group {
            background: #FEE2E2;
            border: 5px solid #000;
            padding: 22px 28px;
            margin-bottom: 20px;
            box-shadow: 5px 5px 0 rgba(0,0,0,0.1);
            border-radius: 8px;
        }
        .problem-item, .solution-item, .benefit-item {
            position: relative;
            padding-left: 50px;
            font-size: 28px;
            font-weight: 700;
            color: #1F2937;
            margin: 10px 0;
            line-height: 1.3;
        }
        .problem-item::before, .solution-item::before, .benefit-item::before {
            content: "●";
            position: absolute;
            left: 0;
            top: 0;
            font-size: 30px;
            color: #DB2777;
            font-weight: 900;
        }
        .problem-item strong, .solution-item strong, .benefit-item strong {
            color: #000;
        }
        .ranking-item {
            background: #FFF;
            border: 4px solid #000;
            padding: 18px 25px;
            margin: 12px 0;
            display: flex;
            align-items: center;
            gap: 20px;
            box-shadow: 4px 4px 0 rgba(0,0,0,0.15);
            border-radius: 6px;
        }
        .ranking-number {
            background: #6D28D9;
            color: #FFF;
            font-size: 36px;
            font-weight: 900;
            padding: 8px 18px;
            border-radius: 50%;
            min-width: 70px;
            text-align: center;
        }
        .ranking-text {
            font-size: 28px;
            font-weight: 700;
            color: #000;
        }
        .highlight-box {
            background: #FEF3C7;
            border: 5px solid #000;
            padding: 25px 30px;
            text-align: center;
            margin-top: 20px;
            transform: rotate(-1deg);
            box-shadow: 6px 6px 0 rgba(0,0,0,0.2);
        }
        .highlight-item {
            font-size: 30px;
            font-weight: 900;
            color: #000;
            margin: 8px 0;
        }
        .footer {
            background: #000;
            height: 160px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .logo-footer {
            font-size: 70px;
            font-weight: 900;
            color: #FACC15;
            text-transform: uppercase;
            margin-bottom: 15px;
            letter-spacing: 1px;
        }
        .ja {
            background: #FACC15;
            color: #000;
            padding: 3px 18px;
            margin-left: 10px;
        }
        .cta-footer {
            font-size: 36px;
            color: #FFF;
            font-weight: 700;
        }
    </style>
</head>
<body>
    <div class="pin">
        <div class="header">
            ${pin.iconHuge ? `<div class="icon-huge">${pin.iconHuge}</div>` : ''}
            <div class="badge-alert">${pin.badge}</div>
            <div class="title-main">${pin.title}</div>
            <div class="subtitle-header">${pin.subtitle}</div>
        </div>
        
        <div class="content">
            ${pin.sections.map(section => {
              if (section.type === 'card-group') {
                return `
            <div class="section-title" style="color: ${section.titleColor}">${section.title}</div>
            <div class="card-group" style="background: ${section.bg}">
                ${section.items.map(item => `<div class="problem-item">${item.text}</div>`).join('\n                ')}
            </div>`;
              } else if (section.type === 'ranking') {
                return `
            <div class="section-title" style="color: ${section.titleColor}">${section.title}</div>
            <div style="background: ${section.bg}; padding: 15px; border-radius: 8px;">
                ${section.items.map(item => `
                <div class="ranking-item">
                    <div class="ranking-number">${item.rank}</div>
                    <div class="ranking-text">${item.text}</div>
                </div>`).join('')}
            </div>`;
              } else if (section.type === 'highlight') {
                return `
            <div class="highlight-box" style="background: ${section.bg}">
                <div class="section-title" style="border: none; margin: 0 0 15px 0;">${section.title}</div>
                ${section.items.map(item => `<div class="highlight-item">${item}</div>`).join('\n                ')}
            </div>`;
              }
            }).join('\n            ')}
        </div>
        
        <div class="footer">
            <div class="logo-footer">SUPLEMENTA<span class="ja">JÁ</span></div>
            <div class="cta-footer">Artigo completo na descrição ↓</div>
        </div>
    </div>
</body>
</html>`;

console.log('🎨 REFAZENDO PINS 16-18 COM ESTILO RICO...\n');

// Gerar primeiros 3 para testar
pinsRicos.forEach(pin => {
  const html = templateRico(pin);
  fs.writeFileSync(`pin_${pin.num}.html`, html);
  console.log(`✅ pin_${pin.num}.html REFEITO com estilo RICO!`);
});

console.log('\n💜 Primeiros 3 pins refeitos! Testando...');
