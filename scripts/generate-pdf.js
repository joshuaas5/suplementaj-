const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('🚀 Iniciando geração do PDF...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Ler o HTML
  const htmlPath = path.join(__dirname, '..', 'public', 'downloads', 'top-10-suplementos-2025.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
  
  // Carregar o HTML
  await page.setContent(htmlContent, {
    waitUntil: 'networkidle0'
  });
  
  // Gerar PDF
  const pdfPath = path.join(__dirname, '..', 'public', 'downloads', 'top-10-suplementos-2025.pdf');
  
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0mm',
      right: '0mm',
      bottom: '0mm',
      left: '0mm'
    },
    preferCSSPageSize: true
  });
  
  await browser.close();
  
  console.log('✅ PDF gerado com sucesso em:', pdfPath);
  console.log('📦 Tamanho do arquivo:', (fs.statSync(pdfPath).size / 1024).toFixed(2), 'KB');
})();
