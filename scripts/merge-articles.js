const fs = require('fs');
const path = require('path');

// Ler arquivos
const artigosPath = path.join(__dirname, '../data/artigos.json');
const novosArtigosPath = path.join(__dirname, '../data/novos-artigos-blog.json');

const artigos = JSON.parse(fs.readFileSync(artigosPath, 'utf-8'));
const novosArtigos = JSON.parse(fs.readFileSync(novosArtigosPath, 'utf-8'));

// Encontrar artigos vazios e substituir com conteúdo completo
novosArtigos.forEach(novoArtigo => {
  const index = artigos.findIndex(a => a.slug === novoArtigo.slug);
  if (index !== -1) {
    // Substituir artigo vazio com conteúdo completo
    artigos[index] = novoArtigo;
    console.log(`✅ Artigo "${novoArtigo.titulo}" mesclado com sucesso`);
  }
});

// Salvar artigos.json atualizado
fs.writeFileSync(artigosPath, JSON.stringify(artigos, null, 2), 'utf-8');
console.log('\n🎉 Todos os artigos foram integrados com sucesso!');
console.log(`📊 Total de artigos no blog: ${artigos.length}`);
