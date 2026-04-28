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
    sections: [
      {color: 'pink', title: '3 PROBLEMAS COMUNS:', items: ['▸ Pele solta no abdômen', '▸ Flacidez nos braços', '▸ Celulite pós-perda rápida']},
      {color: 'green', title: 'SUPLEMENTOS:', items: ['<strong>Colágeno:</strong> 10g/dia', '<strong>Proteína:</strong> 1.6g/kg', '<strong>Vitamina C + Zinco</strong>']},
      {color: 'green', title: 'ESTILO DE VIDA:', items: ['▸ Musculação 3-4x/semana', '▸ Hidratação 3L/dia', '▸ Perda gradual']},
      {color: 'yellow', title: 'CIRURGIA:', items: ['Considerar se perdeu >30kg']}
    ]
  },
  {
    num: '02',
    headerBg: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)',
    badge: 'TIMELINE!',
    badgeBg: '#DB2777',
    title: 'BIOTINA 10MG:<br>CABELO',
    subtitle: 'Cresce EM QUANTO TEMPO?',
    sections: [
      {color: 'pink', title: 'TIMELINE REALISTA:', items: ['<strong>30 DIAS:</strong> Menos queda', '<strong>60 DIAS:</strong> Unhas fortes', '<strong>90 DIAS:</strong> Cabelo cresce', '<strong>6 MESES:</strong> Resultado total']},
      {color: 'yellow', title: 'DOSE IDEAL:', items: ['<strong>10mg/dia</strong> (5mg NÃO funciona tão bem!)']}
    ]
  },
  {
    num: '03',
    headerBg: 'linear-gradient(135deg, #A855F7 0%, #7E22CE 100%)',
    badge: 'SIM!',
    badgeBg: '#9333EA',
    title: 'COLÁGENO:<br>FUNCIONA?',
    subtitle: 'Pele, Cabelo, Unhas',
    sections: [
      {color: 'pink', title: 'BENEFÍCIOS COMPROVADOS:', items: ['<strong>PELE:</strong> +13% elasticidade', '<strong>CABELO:</strong> Menos queda', '<strong>UNHAS:</strong> Crescem 12% +', '<strong>ARTICULAÇÕES:</strong> -40% dor']},
      {color: 'yellow', title: 'DOSE IDEAL:', items: ['<strong>10g/dia</strong> colágeno hidrolisado', '+ Vitamina C 100mg']}
    ]
  },
  {
    num: '04',
    headerBg: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
    badge: '30% MULHERES',
    badgeBg: '#FACC15',
    title: 'FERRO:<br>ANEMIA',
    subtitle: 'Cansaço + Menstruação',
    sections: [
      {color: 'pink', title: 'SINTOMAS COMUNS:', items: ['▸ Cansaço extremo', '▸ Palidez intensa', '▸ Queda de cabelo', '▸ Unhas quebradiças']},
      {color: 'green', title: 'SUPLEMENTAR CERTO:', items: ['<strong>Bisglicinato ferroso</strong> 30-60mg/dia', '▸ Em jejum + Vitamina C', '▸ Longe de café/chá', '▸ Efeito em 2-4 semanas']}
    ]
  },
  {
    num: '05',
    headerBg: 'linear-gradient(135deg, #F472B6 0%, #DB2777 100%)',
    badge: 'SEGURO!',
    badgeBg: '#10B981',
    title: 'PÓS-PARTO:<br>EMAGR ECER',
    subtitle: '5 Suplementos Seguros',
    sections: [
      {color: 'green', title: 'PODE AMAMENTANDO:', items: ['<strong>PROTEÍNA (WHEY)</strong> - saciedade', '<strong>FERRO</strong> - cansaço comum', '<strong>ÔMEGA-3</strong> - bebê OK', '<strong>VITAMINA D</strong> - imunidade', '<strong>MAGNÉSIO</strong> - sono']},
      {color: 'pink', title: 'EVITAR:', items: ['▸ Termogênicos', '▸ Cafeína >300mg/dia', '▸ Diuréticos']}
    ]
  },
  {
    num: '06',
    headerBg: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
    badge: 'CORTISOL ALTO',
    badgeBg: '#EF4444',
    title: 'ANSIEDADE:<br>3 SUPLEMENTOS',
    subtitle: 'Que FUNCIONAM',
    sections: [
      {color: 'blue', title: '1. MAGNÉSIO (glicinato)', items: ['▸ Reduz cortisol', '▸ Relaxa músculos', '<strong>Dose:</strong> 300-400mg/dia']},
      {color: 'blue', title: '2. ASHWAGANDHA (KSM-66)', items: ['▸ Cortisol -28% em 60 dias', '<strong>Dose:</strong> 300-600mg/dia']},
      {color: 'blue', title: '3. L-TEANINA', items: ['▸ Calma SEM sonolência', '<strong>Dose:</strong> 200-400mg/dia']},
      {color: 'yellow', title: 'COMBO:', items: ['3 juntos = efeito 2x +']}
    ]
  },
  {
    num: '07',
    headerBg: 'linear-gradient(135deg, #A855F7 0%, #7E22CE 100%)',
    badge: 'TODO MÊS',
    badgeBg: '#DB2777',
    title: 'TPM:<br>3 SUPLEMENTOS',
    subtitle: 'Naturais Que FUNCIONAM',
    sections: [
      {color: 'pink', title: 'SOFRE COM:', items: ['▸ Cólicas intensas', '▸ Inchaço abdominal', '▸ Irritabilidade', '▸ Acne pré-menstrual']},
      {color: 'green', title: 'SOLUÇÕES:', items: ['<strong>MAGNÉSIO:</strong> -50% cólicas', '<strong>VITAMINA B6:</strong> melhora humor', '<strong>CÁLCIO:</strong> -40% inchaço']},
      {color: 'yellow', title: 'DICA:', items: ['Começar 10 dias ANTES da menstruação']}
    ]
  },
  {
    num: '08',
    headerBg: 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)',
    badge: 'SONO',
    badgeBg: '#6366F1',
    title: 'INSÔNIA:<br>MELATONINA',
    subtitle: 'Dose Certa',
    sections: [
      {color: 'blue', title: 'VOCÊ:', items: ['▸ Demora 1h+ pra dormir?', '▸ Acorda 3h da manhã?', '▸ Sono fragmentado?']},
      {color: 'green', title: 'DOSES CERTAS:', items: ['<strong>0.5mg</strong> → Insônia LEVE', '<strong>3mg</strong> → Insônia MODERADA (85% eficaz)', '<strong>10mg</strong> → Insônia SEVERA']},
      {color: 'yellow', title: 'TIMING:', items: ['Tomar 30-60min ANTES de dormir']}
    ]
  },
  {
    num: '09',
    headerBg: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
    badge: '5 BENEFÍCIOS',
    badgeBg: '#10B981',
    title: 'ÔMEGA-3:<br>MULHERES',
    subtitle: 'Benefícios Comprovados',
    sections: [
      {color: 'blue', title: 'POR QUE TODA MULHER DEVERIA TOMAR:', items: ['<strong>CORAÇÃO:</strong> -30% triglicerídeos', '<strong>CÉREBRO:</strong> memória + foco', '<strong>HUMOR:</strong> reduz ansiedade', '<strong>PELE:</strong> hidratação', '<strong>ARTICULAÇÕES:</strong> -40% dor']},
      {color: 'yellow', title: 'DOSE IDEAL:', items: ['<strong>1-2g/dia</strong> EPA+DHA combinados']}
    ]
  },
  {
    num: '10',
    headerBg: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    badge: 'MENOPAUSA',
    badgeBg: '#DC2626',
    title: '4 VITAMINAS:<br>ESSENCIAIS',
    subtitle: 'Calor, Peso, Ossos',
    sections: [
      {color: 'pink', title: 'SOFRE COM:', items: ['▸ Ondas de calor intensas', '▸ Ganho de peso fácil', '▸ Ossos fracos']},
      {color: 'green', title: 'SOLUÇÃO:', items: ['<strong>CÁLCIO + D3:</strong> previne osteoporose', '<strong>VITAMINA K2:</strong> direciona cálcio', '<strong>MAGNÉSIO:</strong> reduz calor', '<strong>ÔMEGA-3:</strong> controla peso']}
    ]
  },
  {
    num: '11',
    headerBg: 'linear-gradient(135deg, #A855F7 0%, #9333EA 100%)',
    badge: 'ANTI-IDADE',
    badgeBg: '#FACC15',
    title: 'TOP 5:<br>SUPLEMENTOS',
    subtitle: 'Pele Jovem',
    sections: [
      {color: 'pink', title: 'OS MELHORES:', items: ['<strong>1. COLÁGENO:</strong> +13% elasticidade', '<strong>2. VITAMINA C:</strong> antioxidante', '<strong>3. ÔMEGA-3:</strong> hidratação', '<strong>4. COENZIMA Q10:</strong> -20% rugas', '<strong>5. RESVERATROL:</strong> longevidade']},
      {color: 'yellow', title: 'COMBO:', items: ['5 juntos = pele 10 anos mais jovem']}
    ]
  },
  {
    num: '12',
    headerBg: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    badge: '90%!',
    badgeBg: '#DC2626',
    title: 'VITAMINA D:<br>DEFICIÊNCIA',
    subtitle: 'Brasileiros',
    sections: [
      {color: 'pink', title: 'SINTOMAS:', items: ['▸ Cansaço crônico', '▸ Imunidade baixa', '▸ Dor muscular/ossos', '▸ Depressão leve']},
      {color: 'green', title: 'DOSE IDEAL:', items: ['<strong>2.000-4.000 UI/dia</strong>', '▸ Tomar com refeição (gordura)', '▸ Dosar antes (ideal >30 ng/mL)', '▸ Efeito em 60-90 dias']}
    ]
  },
  {
    num: '13',
    headerBg: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)',
    badge: 'MITOS!',
    badgeBg: '#FACC15',
    title: 'CREATINA:<br>MULHERES',
    subtitle: 'Não, NÃO Incha!',
    sections: [
      {color: 'pink', title: 'MITOS:', items: ['▸ Incha o corpo', '▸ Faz ficar masculinizada', '▸ Só pra homem']},
      {color: 'green', title: 'VERDADES:', items: ['<strong>+10%</strong> força muscular', '▸ Glúteos definidos', '▸ Melhora foco/memória', '▸ Seguro na gravidez']},
      {color: 'yellow', title: 'DOSE:', items: ['<strong>3-5g/dia</strong> (TODO DIA!)']}
    ]
  },
  {
    num: '14',
    headerBg: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    badge: 'INTESTINO',
    badgeBg: '#0EA5E9',
    title: 'PROBIÓTICOS:<br>IMUNIDADE',
    subtitle: '4 Benefícios',
    sections: [
      {color: 'green', title: 'BENEFÍCIOS COMPROVADOS:', items: ['<strong>IMUNIDADE:</strong> 70% defesa no intestino', '<strong>DIGESTÃO:</strong> reduz gases/inchaço', '<strong>HUMOR:</strong> eixo intestino-cérebro', '<strong>PÓS-ANTIBIÓTICO:</strong> restaura flora']},
      {color: 'yellow', title: 'DOSE IDEAL:', items: ['<strong>10-50 bilhões UFC/dia</strong>', 'Lactobacilos + Bifidobactérias']}
    ]
  },
  {
    num: '15',
    headerBg: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
    badge: 'QUAL?',
    badgeBg: '#A855F7',
    title: 'WHEY:<br>ISOLADO vs CONCENTRADO',
    subtitle: 'Qual Comprar?',
    sections: [
      {color: 'blue', title: 'ISOLADO (90%):', items: ['▸ 90% proteína pura', '▸ ZERO lactose', '▸ Ideal: Cutting, intolerância']},
      {color: 'blue', title: 'CONCENTRADO (70-80%):', items: ['▸ 70-80% proteína', '▸ Tem lactose (5-10%)', '▸ Ideal: Bulking, orçamento']},
      {color: 'yellow', title: 'ESCOLHER:', items: ['Cutting → ISOLADO', 'Bulking → CONCENTRADO']}
    ]
  }
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
        .header {
            height: 250px;
            background: ${pin.headerBg};
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 30px;
            flex-shrink: 0;
        }
        .header-badge {
            background: ${pin.badgeBg};
            color: #FFF;
            font-size: 32px;
            font-weight: 900;
            padding: 10px 30px;
            border-radius: 8px;
            margin-bottom: 15px;
        }
        .header-title {
            font-size: 56px;
            font-weight: 900;
            color: #000;
            text-align: center;
            line-height: 1.1;
            margin-bottom: 10px;
        }
        .header-subtitle {
            font-size: 28px;
            font-weight: 700;
            color: #000;
            text-align: center;
        }
        .content {
            flex: 1;
            padding: 25px 30px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            gap: 18px;
        }
        .content-section {
            background: #F3F4F6;
            border: 3px solid #000;
            border-radius: 8px;
            padding: 16px 20px;
        }
        .content-section.pink { background: #FEE2E2; }
        .content-section.green { background: #D1FAE5; }
        .content-section.blue { background: #DBEAFE; }
        .content-section.yellow { background: #FEF3C7; }
        .section-title {
            font-size: 26px;
            font-weight: 900;
            color: #000;
            margin-bottom: 10px;
        }
        .section-item {
            font-size: 20px;
            font-weight: 600;
            color: #1F2937;
            margin: 6px 0;
            line-height: 1.3;
        }
        .section-item strong { color: #000; font-weight: 900; }
        .footer {
            height: 120px;
            background: #000;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            flex-shrink: 0;
        }
        .footer-logo {
            font-size: 48px;
            font-weight: 900;
            color: #FFF;
            letter-spacing: 1px;
        }
        .footer-logo span {
            background: #FACC15;
            color: #000;
            padding: 2px 12px;
            margin-left: 5px;
        }
        .footer-cta {
            font-size: 24px;
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

console.log('🚀 GERANDO 15 PINS...\n');

// Criar HTMLs
pins.forEach(pin => {
  const html = template(pin);
  fs.writeFileSync(`pin_${pin.num}.html`, html);
  console.log(`✅ pin_${pin.num}.html criado!`);
});

console.log('\n📸 GERANDO 15 PNGs...\n');

// Gerar PNGs
(async () => {
  const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
  const page = await browser.newPage();
  await page.setViewport({width: 1000, height: 1500, deviceScaleFactor: 1});
  
  for (const pin of pins) {
    const htmlPath = path.resolve(`pin_${pin.num}.html`);
    await page.goto(`file://${htmlPath}`, {waitUntil: 'networkidle0'});
    await page.screenshot({path: `pin_${pin.num}.png`, type: 'png'});
    console.log(`✅ pin_${pin.num}.png criado!`);
  }
  
  await browser.close();
  console.log('\n🔥 15 PINS COMPLETOS!');
  console.log('📁 1000x1500px | Footer completo | Sem emojis');
})();
