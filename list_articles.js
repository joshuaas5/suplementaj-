const fs = require('fs');
let content = fs.readFileSync('data/artigos.json', 'utf8');
// Remove BOM if present
if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
}
const artigos = JSON.parse(content);
console.log(artigos.map(a => a.slug).join('\n'));
