const fs = require('fs');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');
const a = JSON.parse(fs.readFileSync(path.join(rootDir, 'data', 'artigos.json'), 'utf8'));
const n = JSON.parse(fs.readFileSync(path.join(rootDir, 'data', 'nutrientes.json'), 'utf8'));

const artigoToNutrientes = {
  'vitamina-d-deficiencia-brasileiros': ['vitamina-d', 'calcio', 'magnesio'],
  'vitamina-b12-vegetarianos-veganos': ['vitamina-b12', 'ferro', 'acido-folico'],
  'omega-3-beneficios-comprovados': ['omega-3', 'vitamina-d', 'vitamina-e'],
  'ferro-anemia-deficiencia-tratamento': ['ferro', 'vitamina-c', 'vitamina-b12'],
  'zinco-imunidade-testosterona-pele': ['zinco', 'selenio', 'vitamina-d'],
  'magnesio-ansiedade-sono-tipos': ['magnesio', 'vitamina-b6', 'vitamina-d'],
  'guia-completo-creatina-2026': ['creatina', 'proteina', 'vitamina-d'],
  'colageno-hidrolisado-funciona-pele-articulacoes': ['colageno', 'vitamina-c', 'vitamina-b7'],
  'vitamina-c-imunidade-gripes-resfriados': ['vitamina-c', 'zinco', 'vitamina-d'],
  'calcio-ossos-osteoporose-qual-tomar': ['calcio', 'vitamina-d', 'vitamina-k2', 'magnesio'],
  'biotina-cabelo-unhas-dose-funciona': ['vitamina-b7', 'zinco', 'vitamina-c'],
  'ashwagandha-estresse-ansiedade-cortisol': ['magnesio', 'vitamina-b6'],
  'melatonina-sono-insonia-dose-ideal': ['magnesio', 'vitamina-b6'],
  'probioticos-intestino-flora-intestinal': ['probioticos', 'vitamina-d', 'zinco'],
  'vitamina-k2-d3-calcio-ossos-coracao': ['vitamina-k2', 'vitamina-d', 'calcio'],
  'iodo-tireoide-hipotireoidismo-dose': ['iodo', 'selenio', 'zinco'],
  'selenio-tireoide-imunidade-antioxidante': ['selenio', 'iodo', 'vitamina-e'],
  'vitamina-e-antioxidante-pele-fertilidade': ['vitamina-e', 'vitamina-c', 'selenio'],
  'curcuma-curcumina-inflamacao-articulacoes': ['omega-3', 'vitamina-d'],
  'spirulina-superalimento-proteina-vegana': ['vitamina-b12', 'ferro'],
  'maca-peruana-libido-energia-hormonios': ['zinco', 'vitamina-d'],
  'tribulus-terrestris-testosterona-libido': ['zinco'],
  'zma-zinco-magnesio-b6-sono-testosterona': ['zinco', 'magnesio', 'vitamina-b6'],
  'bcaa-aminoacidos-massa-muscular-funciona': ['bcaa', 'proteina', 'creatina'],
  'glucosamina-condroitina-articulacoes-artrite': ['glucosamina', 'colageno', 'vitamina-c'],
  'coenzima-q10-coq10-energia-coracao': ['coenzima-q10', 'magnesio', 'omega-3'],
  'acido-folico-b9-gestantes-gravidez': ['acido-folico', 'ferro', 'vitamina-b12'],
  'vitamina-a-retinol-visao-pele-imunidade': ['vitamina-a', 'vitamina-d', 'zinco'],
  'l-carnitina-queima-gordura-performance': ['l-carnitina', 'creatina'],
  'cafeina-performance-dose-pre-treino': ['creatina'],
  'pre-treino-vale-a-pena': ['creatina'],
  'creatina-guia-completo-ganho-muscular': ['creatina', 'proteina'],
  'creatina-beneficios-efeitos-colaterais-dosagem-2026': ['creatina'],
  'creatina-monohidratada-o-que-e': ['creatina'],
  'creatina-melhor-horario-para-tomar': ['creatina'],
  'creatina-com-agua-ou-suco': ['creatina'],
  'creatina-e-whey-juntos': ['creatina', 'proteina'],
  'creatina-para-corrida-funciona': ['creatina'],
  'creatina-para-vegetarianos': ['creatina', 'proteina', 'vitamina-b12'],
  'whey-isolado-vs-concentrado': ['proteina', 'creatina', 'bcaa'],
  'whey-isolado-para-que-serve': ['proteina', 'creatina'],
  'whey-concentrado-para-que-serve': ['proteina'],
  'whey-isolado-ou-hidrolisado': ['proteina'],
  'whey-sem-lactose-melhor-opcao': ['proteina'],
  'whey-para-emagrecer-como-usar': ['proteina'],
  'whey-para-ganhar-massa-como-usar': ['proteina', 'creatina'],
  'albumina-ou-whey-qual-melhor': ['proteina', 'albumina'],
  'proteina-por-dia-quanto-consumir-guia-completo': ['proteina', 'creatina', 'bcaa'],
  'como-dividir-macros-cutting-bulking-manutencao': ['proteina', 'creatina'],
  'deficit-calorico-quanto-cortar': ['proteina', 'l-carnitina'],
  'o-que-e-tdee-como-calcular': ['proteina'],
  'neat-fator-oculto-dieta': ['proteina', 'l-carnitina'],
  'cutting-modelo-calorias-macros': ['proteina', 'creatina', 'bcaa'],
  'bulking-calorias-superavit': ['proteina', 'creatina', 'bcaa'],
  'macros-para-ganho-massa': ['proteina', 'creatina', 'bcaa'],
  'macros-para-definicao-muscular': ['proteina', 'creatina', 'l-carnitina'],
  'quantas-calorias-comer-por-dia': ['proteina'],
  'mifflin-st-jeor-formula': [],
  'calculadora-nutricional-calorias-macros': ['proteina'],
  'creatina-como-tomar': ['creatina', 'proteina'],
  'creatina-antes-ou-depois-treino': ['creatina', 'proteina'],
  'creatina-engorda': ['creatina'],
  'creatina-faz-mal': ['creatina'],
  'creatina-para-mulheres': ['creatina', 'proteina'],
  'creatina-para-idosos': ['creatina', 'vitamina-d', 'proteina'],
  'creatina-para-que-serve': ['creatina'],
  'melhor-marca-creatina-brasil': ['creatina'],
  'creatina-monohidratada-vs-outras': ['creatina'],
  'creatina-e-cafe': ['creatina'],
  'creatina-fase-carga-necessaria': ['creatina'],
  'creatina-retencao-liquido': ['creatina'],
  'creatina-quem-nao-deve-tomar': ['creatina'],
  'guia-whey-protein-2026': ['proteina', 'creatina', 'bcaa'],
  'melhores-marcas-whey-protein-2026': ['proteina', 'creatina'],
  'whey-protein-intolerantes-lactose': ['proteina'],
  'diferenca-proteinas-whey-caseina-albumina': ['proteina', 'caseina', 'albumina'],
  'proteina-isolada-soja-veganos': ['proteina', 'vitamina-b12'],
  'receitas-whey-protein-faceis': ['proteina'],
  'monjaro-tirzepatida-guia-completo-emagrecimento': [],
  'monjaro-vs-ozempic-qual-emagrece-mais-comparacao': [],
  'monjaro-preco-quanto-custa-como-economizar-2026': [],
  'monjaro-efeitos-colaterais-o-que-esperar': [],
  'monjaro-emagrece-quantos-quilos-resultados-reais': [],
  'monjaro-diabetes-tipo-2-funciona-melhor-insulina': ['cromo'],
  'suplementos-para-emagrecer-funcionam': ['proteina', 'creatina', 'l-carnitina', 'omega-3'],
  'contador-de-calorias-online-gratis': ['proteina'],
  'formula-mifflin-st-jeor-homem': ['proteina'],
  'macros-cutting-como-calcular': ['proteina', 'creatina'],
  'calcular-proteina-por-peso': ['proteina'],
  'tdee-o-que-e-como-usar': ['proteina'],
  'calorias-para-emagrecer-como-calcular': ['proteina'],
  'calorias-para-ganhar-massa-como-calcular': ['proteina', 'creatina'],
  'macros-para-mulheres-como-calcular': ['proteina'],
  'carboidrato-no-cutting-pode': ['proteina'],
  'gordura-na-dieta-quanto-consumir': ['omega-3', 'vitamina-d', 'vitamina-e'],
  'como-fortalecer-imunidade-suplementos': ['vitamina-c', 'vitamina-d', 'zinco', 'omega-3', 'proteina'],
  'suplementos-para-dor-articulacao-joelho': ['glucosamina', 'colageno', 'omega-3', 'vitamina-d'],
  'como-dormir-melhor-suplementos': ['magnesio', 'vitamina-d'],
  'vitamina-d3-k2-juntas-beneficios': ['vitamina-d', 'vitamina-k2', 'calcio', 'magnesio'],
  'vitamina-d-baixa-sintomas': ['vitamina-d', 'calcio'],
  'vitamina-b12-baixa-sintomas': ['vitamina-b12', 'ferro', 'acido-folico'],
  'magnesio-glicinato-ou-dimalato': ['magnesio'],
  'zinco-melhor-horario-para-tomar': ['zinco'],
  'omega-3-epa-dha-como-escolher': ['omega-3'],
  'ferro-baixo-sintomas-e-suplementacao': ['ferro', 'vitamina-c', 'vitamina-b12'],
  'whey-antes-ou-depois-treino': ['proteina', 'creatina'],
  'whey-com-leite-ou-agua': ['proteina'],
  'whey-engorda-ou-emagrece': ['proteina'],
  'erros-contagem-calorias': ['proteina'],
  'plateau-dieta-como-sair': ['proteina', 'l-carnitina'],
  'dieta-reversa-como-fazer': ['proteina'],
  'refeed-day-como-fazer': [],
  'calorias-manutencao-encontrar': ['proteina'],
  'economizar-300-reais-suplementacao': ['creatina', 'proteina'],
  'melhor-whey-custo-beneficio-2026': ['proteina'],
  'melhor-creatina-custo-beneficio-2026': ['creatina'],
  'suplementos-baratos-que-funcionam': ['creatina', 'proteina', 'vitamina-d'],
  'kit-suplementos-para-iniciantes': ['creatina', 'proteina', 'vitamina-d'],
  'comprar-suplementos-na-amazon-cuidados': ['creatina', 'proteina', 'omega-3'],
  'mounjaro-price-brazil-2026': [],
  'suplementos-ja-como-funciona': ['creatina', 'proteina', 'vitamina-d'],
  'suplemento-ja-avaliacao-gratuita': ['creatina', 'proteina', 'omega-3'],
  '5-suplementos-mais-vendidos': ['creatina', 'proteina', 'omega-3', 'vitamina-d'],
  'suplementos-para-iniciantes': ['creatina', 'proteina', 'omega-3', 'vitamina-d'],
  'imc-o-que-significa-como-calcular': ['proteina'],
  'como-calcular-gasto-calorico-tmb-tdee': ['proteina'],
  'quanta-agua-beber-por-dia-calculo-por-peso': [],
};

const nutrienteToArtigos = {};

Object.entries(artigoToNutrientes).forEach(([artSlug, nutSlugs]) => {
  nutSlugs.forEach(nSlug => {
    if (!nutrienteToArtigos[nSlug]) nutrienteToArtigos[nSlug] = [];
    if (!nutrienteToArtigos[nSlug].includes(artSlug)) nutrienteToArtigos[nSlug].push(artSlug);
  });
});

let lines = [];
lines.push("// Mapeamento de relacionamentos entre artigos e nutrientes");
lines.push("// Atualizado em 20/05/2026 - Cobertura completa de " + Object.keys(artigoToNutrientes).length + " artigos");
lines.push("");
lines.push("export const artigoToNutrientes: Record<string, string[]> = {");

Object.entries(artigoToNutrientes).sort(([a],[b]) => a.localeCompare(b)).forEach(([slug, nuts]) => {
  lines.push("  '" + slug + "': [" + nuts.map(n => "'" + n + "'").join(', ') + "],");
});

lines.push("}");
lines.push("");
lines.push("export const nutrienteToArtigos: Record<string, string[]> = {");

Object.entries(nutrienteToArtigos).sort(([a],[b]) => a.localeCompare(b)).forEach(([slug, arts]) => {
  lines.push("  '" + slug + "': [" + arts.slice(0,5).map(a => "'" + a + "'").join(', ') + "],");
});

lines.push("}");
lines.push("");
lines.push("export function getNutrientesRelacionados(artigoSlug: string): string[] {");
lines.push("  return artigoToNutrientes[artigoSlug] || []");
lines.push("}");
lines.push("");
lines.push("export function getArtigosRelacionados(nutrienteSlug: string): string[] {");
lines.push("  return nutrienteToArtigos[nutrienteSlug] || []");
lines.push("}");
lines.push("");

fs.writeFileSync(path.join(rootDir, 'lib', 'related-content.ts'), lines.join('\n'), 'utf8');
console.log('Generated with', Object.keys(artigoToNutrientes).length, 'articles and', Object.keys(nutrienteToArtigos).length, 'nutrients');
