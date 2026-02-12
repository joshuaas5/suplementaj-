const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('🚀 Iniciando conversão HTML → PNG...\n');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Configurar viewport 1000x1500
  await page.setViewport({
    width: 1000,
    height: 1500,
    deviceScaleFactor: 2 // Alta qualidade
  });
  
  // Processar pins 01 a 15
  for (let i = 1; i <= 15; i++) {
    const pinNum = String(i).padStart(2, '0');
    const htmlFile = `pin_${pinNum}.html`;
    const pngFile = `pin_${pinNum}.png`;
    
    if (!fs.existsSync(htmlFile)) {
      console.log(`⚠️  ${htmlFile} não encontrado`);
      continue;
    }
    
    const htmlPath = `file://${path.resolve(htmlFile)}`;
    
    await page.goto(htmlPath, { waitUntil: 'networkidle0' });
    
    await page.screenshot({
      path: pngFile,
      type: 'png',
      fullPage: false
    });
    
    console.log(`✅ ${pinNum}. ${pngFile} criado!`);
  }
  
  await browser.close();
  
  console.log('\n🔥 15 IMAGENS PNG PRONTAS!');
  console.log('📁 Tamanho: 1000x1500px @2x (alta qualidade)');
  console.log('💜 Prontas para upload direto no Pinterest!');
})();
