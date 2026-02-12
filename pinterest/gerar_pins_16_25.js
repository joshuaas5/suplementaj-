#!/usr/bin/env node

const fs = require('fs');

// 10 NOVOS PINS baseados nos artigos de maior performance

const newPins = [
  {
    num: '16',
    headerBg: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
    badge: 'QUAL COMPRAR?',
    badgeBg: '#FACC15',
    title: 'WHEY:<br>ISOLADO vs<br>CONCENTRADO',
    subtitle: 'Diferença Real',
    sections: [
      {color: 'blue', title: 'ISOLADO (90%):', items: ['▸ 90% proteína pura', '▸ ZERO lactose', '▸ Absorção RÁPIDA', '▸ Ideal: Cutting/Intolerância']},
      {color: 'blue', title: 'CONCENTRADO (70-80%):', items: ['▸ 70-80% proteína', '▸ Tem lactose (5-10%)', '▸ Mais barato', '▸ Ideal: Bulking/Orçamento']},
      {color: 'yellow', title: 'ESCOLHER:', items: ['<strong>Cutting?</strong> ISOLADO', '<strong>Bulking?</strong> CONCENTRADO', '<strong>Lactose?</strong> ISOLADO sempre']}
    ]
  },
  {
    num: '17',
    headerBg: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    badge: 'CALCULADORA!',
    badgeBg: '#F59E0B',
    title: 'CALORIAS:<br>QUANTO COMER?',
    subtitle: 'Fórmula Mifflin St Jeor',
    sections: [
      {color: 'green', title: 'HOMENS:', items: ['<strong>TMB =</strong> 10×peso + 6.25×altura - 5×idade + 5']},
      {color: 'pink', title: 'MULHERES:', items: ['<strong>TMB =</strong> 10×peso + 6.25×altura - 5×idade - 161']},
      {color: 'yellow', title: 'MULTIPLICADORES:', items: ['Sedentário: TMB × 1.2', 'Leve (1-3x): TMB × 1.375', 'Moderado (3-5x): TMB × 1.55', 'Intenso (6-7x): TMB × 1.725']},
      {color: 'blue', title: 'DÉFICIT/SUPERÁVIT:', items: ['<strong>Emagrecer:</strong> -300 a -500 kcal', '<strong>Ganhar massa:</strong> +300 a +500 kcal']}
    ]
  },
  {
    num: '18',
    headerBg: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
    badge: 'RANKING 2025',
    badgeBg: '#FACC15',
    title: 'MELHORES<br>CREATINAS<br>BRASIL',
    subtitle: 'Custo-Benefício',
    sections: [
      {color: 'pink', title: 'TOP 3:', items: ['<strong>1º</strong> Creatine Creapure (Integralmedica)', '<strong>2º</strong> 100% Creatine (Max Titanium)', '<strong>3º</strong> Creatina (Growth Supplements)']},
      {color: 'green', title: 'O QUE OLHAR:', items: ['✓ Creapure > Creatina chinesa', '✓ Pó puro (sem sabor)', '✓ Dose: 3-5g/dia', '✓ Preço: R$0,30-0,50/dose']},
      {color: 'yellow', title: 'EVITAR:', items: ['▸ Creatinas com "booster"', '▸ Doses >5g (marketing)', '▸ Preços >R$1/dose']}
    ]
  },
  {
    num: '19',
    headerBg: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    badge: 'MACROS!',
    badgeBg: '#DC2626',
    title: 'CUTTING vs<br>BULKING:<br>MACROS',
    subtitle: 'Como Dividir',
    sections: [
      {color: 'pink', title: 'CUTTING (déficit):', items: ['<strong>Proteína:</strong> 2-2.5g/kg', '<strong>Gordura:</strong> 0.8-1g/kg', '<strong>Carbo:</strong> restante']},
      {color: 'green', title: 'BULKING (superávit):', items: ['<strong>Proteína:</strong> 1.8-2.2g/kg', '<strong>Gordura:</strong> 1-1.2g/kg', '<strong>Carbo:</strong> restante (ALTO)']},
      {color: 'blue', title: 'MANUTENÇÃO:', items: ['<strong>Proteína:</strong> 1.6-2g/kg', '<strong>Gordura:</strong> 1g/kg', '<strong>Carbo:</strong> 3-5g/kg']}
    ]
  },
  {
    num: '20',
    headerBg: 'linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)',
    badge: 'DÉFICIT!',
    badgeBg: '#FACC15',
    title: 'DÉFICIT<br>CALÓRICO:<br>QUANTO?',
    subtitle: 'Quanto Cortar Para Emagrecer',
    sections: [
      {color: 'yellow', title: 'DÉFICITS:', items: ['<strong>LEVE:</strong> -200 a -300 kcal/dia', '<strong>MODERADO:</strong> -300 a -500 kcal/dia', '<strong>AGRESSIVO:</strong> -500 a -700 kcal/dia']},
      {color: 'pink', title: 'VELOCIDADE:', items: ['Leve: -0.25kg/semana', 'Moderado: -0.5kg/semana', 'Agressivo: -0.7-1kg/semana']},
      {color: 'green', title: 'RECOMENDADO:', items: ['✓ MODERADO (-400 kcal)', '✓ Sustentável', '✓ Preserva massa muscular', '✓ Menos fome']}
    ]
  },
  {
    num: '21',
    headerBg: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
    badge: 'GUIA 2025',
    badgeBg: '#10B981',
    title: 'CREATINA:<br>GUIA COMPLETO',
    subtitle: 'Tudo Que Você Precisa Saber',
    sections: [
      {color: 'green', title: 'BENEFÍCIOS:', items: ['✓ +10-15% força muscular', '✓ Ganho de massa magra', '✓ Melhora performance', '✓ Segura e testada']},
      {color: 'blue', title: 'COMO TOMAR:', items: ['<strong>Dose:</strong> 3-5g/dia', '<strong>Horário:</strong> Qualquer (não importa)', '<strong>Saturação:</strong> NÃO precisa', '<strong>Ciclagem:</strong> NÃO precisa']},
      {color: 'yellow', title: 'MITOS:', items: ['▸ NÃO retém líquido visível', '▸ NÃO causa queda de cabelo', '▸ NÃO precisa tomar com suco']}
    ]
  },
  {
    num: '22',
    headerBg: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
    badge: 'COMO TOMAR?',
    badgeBg: '#F59E0B',
    title: 'CREATINA:<br>JEITO CERTO',
    subtitle: 'Saturação, Dose, Horário',
    sections: [
      {color: 'blue', title: 'DOSE CERTA:', items: ['<strong>3-5g/dia</strong> (TODO DIA!)', '5g = 1 colher de chá rasa', 'Peso >90kg → 5g', 'Peso <70kg → 3g']},
      {color: 'yellow', title: 'SATURAÇÃO:', items: ['<strong>NÃO PRECISA!</strong>', 'Antigamente: 20g/dia 7 dias', 'Hoje: Apenas 3-5g desde dia 1', 'Efeito igual em 3-4 semanas']},
      {color: 'green', title: 'HORÁRIO:', items: ['✓ Qualquer horário', '✓ Pré ou pós-treino (tanto faz)', '✓ Com ou sem comida', '✓ Consistência > Timing']}
    ]
  },
  {
    num: '23',
    headerBg: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    badge: 'ESTRATÉGIA!',
    badgeBg: '#FACC15',
    title: 'REFEED DAY:<br>COMO FAZER',
    subtitle: 'Acelera Metabolismo',
    sections: [
      {color: 'green', title: 'O QUE É:', items: ['<strong>1 dia/semana</strong> comendo +20-30% calorias', 'Foco: CARBOIDRATOS', 'Mantém proteínas e gorduras']},
      {color: 'blue', title: 'QUANDO FAZER:', items: ['✓ Cutting >4 semanas', '✓ Peso parou há 2+ semanas', '✓ Muita fome/cansaço', '✓ Performance caindo']},
      {color: 'yellow', title: 'COMO:', items: ['<strong>Carbos:</strong> +100-150g extras', '<strong>Proteína:</strong> mesma', '<strong>Gordura:</strong> mesma', '<strong>Frequência:</strong> 1x/semana']}
    ]
  },
  {
    num: '24',
    headerBg: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    badge: 'FÓRMULA!',
    badgeBg: '#3B82F6',
    title: 'MIFFLIN<br>ST JEOR:<br>CALCULAR TMB',
    subtitle: 'Taxa Metabólica Basal',
    sections: [
      {color: 'blue', title: 'HOMENS:', items: ['<strong>TMB =</strong>', '10 × peso (kg)', '+ 6.25 × altura (cm)', '- 5 × idade (anos)', '+ 5']},
      {color: 'pink', title: 'MULHERES:', items: ['<strong>TMB =</strong>', '10 × peso (kg)', '+ 6.25 × altura (cm)', '- 5 × idade (anos)', '<strong>- 161</strong>']},
      {color: 'green', title: 'EXEMPLO (Homem 80kg, 180cm, 30 anos):', items: ['TMB = 10×80 + 6.25×180 - 5×30 + 5', '<strong>TMB = 1780 kcal/dia</strong>']}
    ]
  },
  {
    num: '25',
    headerBg: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
    badge: 'SONO!',
    badgeBg: '#10B981',
    title: 'MELATONINA:<br>DOSE IDEAL',
    subtitle: 'Insônia Resolvida',
    sections: [
      {color: 'blue', title: 'DOSES:', items: ['<strong>0.5mg:</strong> Insônia LEVE', '<strong>3mg:</strong> Insônia MODERADA (85% eficaz)', '<strong>5-10mg:</strong> Insônia SEVERA']},
      {color: 'yellow', title: 'QUANDO TOMAR:', items: ['<strong>30-60 min ANTES</strong> de dormir', 'Sempre no mesmo horário', 'Ambiente escuro ajuda']},
      {color: 'green', title: 'DICAS:', items: ['✓ Começar com 0.5-1mg', '✓ Aumentar gradualmente', '✓ Não tomar >10mg', '✓ Ciclar: 2 meses ON, 1 OFF']}
    ]
  }
];

const template = (pin) => `<!DOCTYPE html>
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
            min-height: 300px;
            border-bottom: 6px solid #000;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 35px;
        }
        .header-badge {
            background: ${pin.badgeBg};
            color: #000;
            font-size: 32px;
            font-weight: 900;
            padding: 12px 35px;
            border: 5px solid #000;
            box-shadow: 6px 6px 0 rgba(0,0,0,0.3);
            margin-bottom: 20px;
            border-radius: 8px;
        }
        .header-title {
            font-size: 58px;
            font-weight: 900;
            color: #FFF;
            text-align: center;
            line-height: 0.95;
            text-shadow: 4px 4px 0 rgba(0,0,0,0.3);
            margin-bottom: 18px;
        }
        .header-subtitle {
            font-size: 32px;
            font-weight: 700;
            color: #FACC15;
            text-align: center;
        }
        .content {
            flex: 1;
            overflow: visible;
            background: #FFF;
            padding: 30px 38px;
        }
        .content-section {
            background: #F3F4F6;
            border: 5px solid #000;
            border-radius: 10px;
            padding: 20px 25px;
            margin-bottom: 20px;
            box-shadow: 5px 5px 0 rgba(0,0,0,0.1);
        }
        .content-section.pink { background: #FEE2E2; }
        .content-section.green { background: #D1FAE5; }
        .content-section.blue { background: #DBEAFE; }
        .content-section.yellow { background: #FEF3C7; }
        .section-title {
            font-size: 30px;
            font-weight: 900;
            color: #000;
            margin-bottom: 12px;
            padding-bottom: 8px;
            border-bottom: 4px solid #000;
        }
        .section-item {
            font-size: 24px;
            font-weight: 600;
            color: #1F2937;
            margin: 8px 0;
            line-height: 1.25;
            position: relative;
            padding-left: 0;
        }
        .section-item strong {
            color: #000;
            font-weight: 900;
        }
        .footer {
            background: #000;
            height: 130px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
        .footer-logo {
            font-size: 54px;
            font-weight: 900;
            color: #FFF;
            letter-spacing: 1px;
        }
        .footer-logo span {
            background: #FACC15;
            color: #000;
            padding: 3px 14px;
            margin-left: 6px;
            border-radius: 5px;
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
            <div class="header-badge">${pin.badge}</div>
            <div class="header-title">${pin.title}</div>
            <div class="header-subtitle">${pin.subtitle}</div>
        </div>
        
        <div class="content">
            ${pin.sections.map(s => `
            <div class="content-section ${s.color}">
                <div class="section-title">${s.title}</div>
                ${s.items.map(item => `<div class="section-item">${item}</div>`).join('\n                ')}
            </div>`).join('\n            ')}
        </div>
        
        <div class="footer">
            <div class="footer-logo">SUPLEMENTA<span>JÁ</span></div>
            <div class="footer-cta">Artigo completo na descrição ↓</div>
        </div>
    </div>
</body>
</html>`;

console.log('🚀 GERANDO 10 PINS NOVOS (16-25)...\n');

newPins.forEach(pin => {
  const html = template(pin);
  fs.writeFileSync(`pin_${pin.num}.html`, html);
  console.log(`✅ pin_${pin.num}.html criado!`);
});

console.log('\n🔥 10 PINS NOVOS PRONTOS!');
console.log('📁 Baseados nos artigos de maior performance');
console.log('💜 Pins 16-25 criados!');
