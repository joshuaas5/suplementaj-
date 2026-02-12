const fs = require('fs');
const nutrientes = JSON.parse(fs.readFileSync('data/nutrientes.json', 'utf8'));
console.log(Object.keys(nutrientes).join('\n'));
